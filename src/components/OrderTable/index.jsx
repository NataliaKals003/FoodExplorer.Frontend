import { Container, TableHeader, TableRow, TableCell } from './styles';
import { useCallback, useState, useEffect } from 'react';
import { Select } from '../Select';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function OrderTable() {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    const userAdmin = user.role === 'admin';
    // const userCustomer = user.role === 'customer';

    useEffect(() => {
        async function fetchOrders() {
            try {
                const response = await api.get('/orders');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders', error);
            }
        }
        fetchOrders();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'red';
            case 'Preparing':
                return 'orange';
            case 'Delivered':
                return 'green';
            default:
                return 'gray';
        }
    };

    const handleStatusChange = useCallback((index, newStatus) => {
        setOrders((prevOrders) => {
            const updatedOrders = [...prevOrders];
            updatedOrders[index] = {
                ...updatedOrders[index],
                status: newStatus,
            };
            return updatedOrders;
        });
    }, []);

    const buildDetailsDescription = (dishes) => {
        const dishesDescription = dishes.map((dish) => `${dish.quantity} x ${dish.name}`).join(', ');
        return dishesDescription;
    };

    return (
        <Container>
            <TableHeader>
                <TableCell>Status</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Details</TableCell>
                <TableCell>Date and Time</TableCell>
            </TableHeader>

            {orders.map((order, index) => (
                <TableRow key={order.id || index}>
                    <TableCell>
                        {userAdmin ? (
                            <Select
                                value={order.status}
                                options={[
                                    { value: 'Pending', labelText: 'Pending' },
                                    { value: 'Preparing', labelText: 'Preparing' },
                                    { value: 'Delivered', labelText: 'Delivered' },
                                ]}
                                icon={MdOutlineKeyboardArrowDown}
                                onChange={(newStatus) => handleStatusChange(index, newStatus.value)}
                                iconColor={getStatusColor(order.status)}
                            />
                        ) : (
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <GoDotFill style={{ color: getStatusColor(order.status), marginRight: '0.5rem' }} />
                                {order.status}
                            </span>
                        )}
                    </TableCell>
                    <TableCell>{String(order.id).padStart(8, '0')}</TableCell>
                    <TableCell>{buildDetailsDescription(order.dishes)}</TableCell>
                    <TableCell>
                        {new Date(order.dateTime).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })} às{' '}
                        {new Date(order.dateTime).toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                        })}
                    </TableCell>
                </TableRow>
            ))}
        </Container>
    );
}

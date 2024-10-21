import { Container, TableHeader, TableRow, TableCell } from './styles';
import { useCallback, useState } from 'react';
import { Select } from '../Select';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';

import { useAuth } from '../../hooks/auth';

export function OrderTable() {
    const { user } = useAuth();

    const userAdmin = user.role === 'admin';
    const userCustomer = user.role === 'customer';

    const [orders, setOrders] = useState([
        {
            status: 'Pending',
            codigo: '00001',
            detalhamento: '1x Radish Salad, 1x Params Toast, 1x Radish Salad, 1x Params Toast',
            dataHora: '20/05 às 18h00',
        },
        {
            status: 'Preparing',
            codigo: '00002',
            detalhamento: '1x Salada radish, 1 Torrada Params, 1x Salada radish, 1x Torrada Params',
            dataHora: '20/05 às 18h00',
        },
        {
            status: 'Delivered',
            codigo: '00003',
            detalhamento: '1x Salada radish, 1 Torrada Params, 1x Salada radish, 1x Torrada Params',
            dataHora: '20/05 às 18h00',
        },
    ]);

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

    return (
        <Container>
            <TableHeader>
                <TableCell style={{ fontSize: '1rem' }}>Status</TableCell>
                <TableCell style={{ fontSize: '1rem' }}>Code</TableCell>
                <TableCell style={{ fontSize: '1rem' }}>Details</TableCell>
                <TableCell style={{ fontSize: '1rem' }}>Date and Time</TableCell>
            </TableHeader>

            {orders.map((order, index) => (
                <TableRow key={index}>
                    <TableCell>
                        {userAdmin && (
                            <Select
                                value={order.status}
                                options={[
                                    { value: 'Pending', labelText: 'Pending' },
                                    { value: 'Preparing', labelText: 'Preparing' },
                                    { value: 'Delivered', labelText: 'Delivered' },
                                ]}
                                icon={MdOutlineKeyboardArrowDown}
                                onChange={(newStatus) => handleStatusChange(index, newStatus)}
                                iconColor={getStatusColor(order.status)}
                                showStatusIcon={true}
                            />
                        )}
                        {userCustomer && (
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <GoDotFill style={{ color: getStatusColor(order.status), marginRight: '0.5rem' }} />
                                {order.status}
                            </span>
                        )}
                    </TableCell>
                    <TableCell>{order.codigo}</TableCell>
                    <TableCell>{order.detalhamento}</TableCell>
                    <TableCell>{order.dataHora}</TableCell>
                </TableRow>
            ))}
        </Container>
    );
}

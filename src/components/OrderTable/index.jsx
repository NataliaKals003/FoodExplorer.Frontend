import { Container, TableHeader, TableRow, TableCell } from './styles';
import { Select } from '../Select';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

export function OrderTable({ orders, getStatusColor, handleStatusChange, isLoading }) {
    const { user } = useAuth();
    const userAdmin = user.role === 'admin';
    const userCustomer = user.role === 'customer';
    const navigate = useNavigate();

    const buildDetailsDescription = (dishes) => {
        return dishes.map((dish) => `${dish.quantity} x ${dish.name}`).join(', ');
    };

    const handleOrderNavigation = (orderId) => {
        navigate(`/order/details/${orderId}`);
    };

    return (
        <Container>
            <TableHeader>
                <TableCell>Status</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Details</TableCell>
                <TableCell>Date and Time</TableCell>
            </TableHeader>

            {orders.map((order) => (
                <TableRow
                    key={order.id}
                    onClick={
                        userCustomer && order.status === 'Pending' ? () => handleOrderNavigation(order.id) : undefined
                    }
                    style={{
                        cursor: userCustomer && order.status === 'Pending' ? 'pointer' : 'default',
                    }}
                >
                    <TableCell>
                        {userAdmin ? (
                            <Select
                                value={
                                    <div>
                                        <GoDotFill
                                            style={{ color: getStatusColor(order.status), marginRight: '0.5rem' }}
                                        />
                                        {order.status}
                                    </div>
                                }
                                options={[
                                    { value: 'Pending', labelText: 'Pending' },
                                    { value: 'Preparing', labelText: 'Preparing' },
                                    { value: 'Delivered', labelText: 'Delivered' },
                                ].map((option) => ({
                                    ...option,
                                    labelText: (
                                        <span style={{ display: 'flex', alignItems: 'center' }}>
                                            <GoDotFill
                                                style={{ color: getStatusColor(option.value), marginRight: '0.5rem' }}
                                            />
                                            {option.labelText}
                                        </span>
                                    ),
                                }))}
                                icon={
                                    isLoading[order.id] ? (
                                        <FaSpinner className="iconSelect loading-icon" />
                                    ) : (
                                        <MdOutlineKeyboardArrowDown className="iconSelect" />
                                    )
                                } // Alterna o ícone
                                iconColor={getStatusColor(order.status)}
                                onChange={(newStatus) => handleStatusChange(order.id, newStatus)}
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

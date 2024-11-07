import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container, Content } from './style';
import { OrderTable } from '../../components/OrderTable';
import { api } from '../../services/api';
import { useState, useEffect, useCallback } from 'react';

export function OrderHistory() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getStatusColor = (status) => {
        const statusColors = {
            Pending: 'red',
            Preparing: 'orange',
            Delivered: 'green',
        };
        return statusColors[status] || 'gray';
    };

    const handleStatusChange = useCallback(async (orderId, newStatus) => {
        setIsLoading((prevLoading) => ({ ...prevLoading, [orderId]: true }));
        try {
            await api.patch(`/orders/${orderId}`, { status: newStatus });

            // Atualize o estado do pedido no frontend
            setOrders((prevOrders) =>
                prevOrders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)),
            );
        } catch (error) {
            console.error('Error updating order status:', error);
        } finally {
            setIsLoading((prevLoading) => ({ ...prevLoading, [orderId]: false }));
        }
    }, []);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const response = await api.get('/orders');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        }
        fetchOrders();
    }, []);

    return (
        <Container>
            <Header />
            <Content>
                <h1>Order History</h1>
                {orders.length > 0 ? (
                    <OrderTable
                        orders={orders}
                        getStatusColor={getStatusColor}
                        handleStatusChange={handleStatusChange}
                        isLoading={isLoading}
                    />
                ) : (
                    <p>There is no order created.</p>
                )}
            </Content>
            <Footer />
        </Container>
    );
}

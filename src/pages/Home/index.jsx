import { Container, Banner, Content, ImageContainer, TextBanner } from './styles';
import { Header } from '../../components/Header';
import macarons from '../../assets/macarons.svg';
import { Swiper } from '../../components/Swiper';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home() {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        async function fetchDishes() {
            try {
                const response = await api.get('/dishes');
                setDishes(response.data);
            } catch (error) {
                console.error('Error fetching dishes', error);
            }
        }

        fetchDishes();
    }, []);

    return (
        <Container>
            <Header />
            <Banner>
                <ImageContainer>
                    <img src={macarons} alt="Macarons" />
                </ImageContainer>
                <TextBanner>
                    <h1>Unmatched flavors</h1>
                    <p>Feel the care in preparation with selected ingredients</p>
                </TextBanner>
            </Banner>
            <Content>
                <div className="Main">
                    <h2>Meals</h2>
                    <h3>Meals</h3>
                    <Swiper products={dishes.filter((dish) => dish.categoryId === 1)} />
                </div>
                <div className="Desert">
                    <h2>Desserts</h2>
                    <h3>Main dishes</h3>
                    <Swiper products={dishes.filter((dish) => dish.categoryId === 2)} />
                </div>
                <div className="Drink">
                    <h2>Drinks</h2>
                    <h3>Main dishes</h3>
                    <Swiper products={dishes.filter((dish) => dish.categoryId === 3)} />
                </div>
            </Content>
            <Footer />
        </Container>
    );
}

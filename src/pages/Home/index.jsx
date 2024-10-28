import { Container, Banner, Content, ImageContainer, TextBanner } from './styles';
import { Header } from '../../components/Header';
import macarons from '../../assets/macarons.svg';
import { Swiper } from '../../components/Swiper';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home() {
    const [dishes, setDishes] = useState([]);
    const [favourites, setFavourites] = useState([]);

    async function fetchDishes() {
        try {
            const response = await api.get('/dishes');
            setDishes(response.data);
        } catch (error) {
            console.error('Error fetching dishes', error);
        }
    }

    async function fetchFavourites() {
        try {
            const response = await api.get('/favourites');
            setFavourites(response.data);
            console.log('Favourites fetched:', response.data);
        } catch (error) {
            console.error('Error fetching favourites:', error);
        }
    }

    useEffect(() => {
        fetchDishes();
        fetchFavourites();
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
                    <Swiper dishes={dishes.filter((dish) => dish.categoryId === 1)} favourites={favourites} />
                </div>
                <div className="Desert">
                    <h2>Desserts</h2>
                    <Swiper dishes={dishes.filter((dish) => dish.categoryId === 2)} favourites={favourites} />
                </div>
                <div className="Drink">
                    <h2>Drinks</h2>
                    <Swiper dishes={dishes.filter((dish) => dish.categoryId === 3)} favourites={favourites} />
                </div>
            </Content>
            <Footer />
        </Container>
    );
}

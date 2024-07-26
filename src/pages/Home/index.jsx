import { Container, Banner, Content, ImageContainer, TextBanner } from './styles';
import { Header } from '../../components/Header';
import macarons from '../../assets/macarons.svg';
import salad from '../../assets/dishSalad.svg';
import { Swiper } from '../../components/Swiper';
import { Footer } from '../../components/Footer';

export function Home() {
    const products = [
        {
            title: "Leo",
            description: "Delicioso folheado de pêssego com folhas de hortelã.",
            imageUrl: salad,
            price: 32.97
        },
        {
            title: "Natalia",
            description: "Delicioso folheado de pêssego com folhas de hortelã.",
            imageUrl: salad,
            price: 32.97
        },
        {
            title: "Natalia",
            description: "Delicioso folheado de pêssego com folhas de hortelã.",
            imageUrl: salad,
            price: 32.97
        },
        {
            title: "Natalia",
            description: "Delicioso folheado de pêssego com folhas de hortelã.",
            imageUrl: salad,
            price: 32.97
        },
        {
            title: "Natalia",
            description: "Delicioso folheado de pêssego com folhas de hortelã.",
            imageUrl: salad,
            price: 32.97
        },
        {
            title: "Natalia",
            description: "Delicioso folheado de pêssego com folhas de hortelã.",
            imageUrl: salad,
            price: 32.97
        }
    ];

    return (
        <Container>
            <Header />
            <Banner>
                <ImageContainer>
                    <img src={macarons} alt="Macarons" />
                </ImageContainer>
                <TextBanner>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </TextBanner>
            </Banner>
            <Content>
                <div className='Main'>
                    <h2>Refeições</h2>
                    <h3>Refeições</h3>
                    <Swiper products={products} />
                </div>
                <div className='Desert'>
                    <h2>Sobremesas</h2>
                    <h3>Pratos principais</h3>
                    <Swiper products={products} />
                </div>
                <div className='Drink'>
                    <h2>Bebidas</h2>
                    <h3>Pratos principais</h3>
                    <Swiper products={products} />
                </div>
            </Content>
            <Footer />
        </Container>
    );
}


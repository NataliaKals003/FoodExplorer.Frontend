import { Container, Banner, Content, ImageContainer, TextBanner } from './styles';
import { Header } from '../../components/Header';
import macarons from '../../assets/macarons.svg';
import { Footer } from '../../components/Footer';

export function Home() {
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
                    <h1>Refeições</h1>
                </div>
                <div className='Dessert'>
                    <h1>Sobremesas</h1>
                </div>
                <div className='Drink'>
                    <h1>Bebidas</h1>
                </div>
            </Content>
            <Footer />
        </Container>
    );
}



import { Container, Banner, Content, ImageContainer, TextBanner } from './styles';
import { Header } from '../../components/Header';
import macarons from '../../assets/macarons.svg';
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer';

export function Home() {
    const products = [
        {
            title: "Spaguetty",
            description: "Delicioso folheado de pêssego com folhas de hortelã.",
            imageUrl: "https://www.w3schools.com/w3images/pizza.jpg",
            price: 32.97
        },
        {
            title: "Leo gostoso",
            description: "My desc",
            imageUrl: "https://www.w3schools.com/w3images/pizza.jpg",
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
                    <h1>Refeições</h1>
                    {products.map((product) => <Card
                        title={product.title}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        price={product.price}
                    />)
                    }
                </div>
            </Content>
            <Footer />
        </Container>
    );
}



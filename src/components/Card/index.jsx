import { Container, Content, Footer } from './styles';
import { IoIosHeartEmpty } from "react-icons/io";
import { Amount } from '../Amount';
import { Button } from '../Button';

export function Card({ title, description, price, imageUrl, ...rest }) {
    return (
        <Container {...rest}>
            <Content>
                <IoIosHeartEmpty size={24} />
                <img src={imageUrl} alt={title} />
                <h1>{title}</h1>
                <p>{description}</p>
                <span className='price'>{price}</span>
            </Content>
            <Footer>
                <Amount className='cardAmount' />
                <Button className='cardButton'>
                    <span>incluir</span>
                </Button>
            </Footer>
        </Container>
    )
}

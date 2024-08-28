import { Container, Content, Footer } from './styles';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { Amount } from '../Amount';
import { Button } from '../Button';
import { useState } from 'react';

export function Card({ product, onClick }) {
    const [isFavourite, setIsFavourite] = useState(false);

    const toggleFavourite = (e) => {
        e.stopPropagation();
        setIsFavourite(prev => !prev);
    };

    return (
        <Container>
            <Content>
                {isFavourite
                    ? <IoIosHeart className="heartFavourite" onClick={toggleFavourite} />
                    : <IoIosHeartEmpty className="heart" onClick={toggleFavourite} />}
                <img src={product.image} alt={product.image} onClick={onClick} />
                <h1 onClick={onClick}>{`${product.name} >`}</h1>
                <p>{product.description}</p>
                <span className='price'>R$ {product.price}</span>
            </Content>
            <Footer>
                <Amount className='cardAmount' />
                <Button className='cardButton'>
                    incluir
                </Button>
            </Footer>
        </Container>
    )
}

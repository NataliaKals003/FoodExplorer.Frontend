import { Container, Content, Footer } from './styles';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { Amount } from '../Amount';
import { Button } from '../Button';
import { useState } from 'react';

export function Card({ name, description, price, imageUrl, dishImage, ...rest }) {
    const [isFavourite, setIsFavourite] = useState(false);

    const toggleFavourite = (e) => {
        e.stopPropagation();
        setIsFavourite(prev => !prev);
    };

    return (
        <Container {...rest}>
            <Content>
                {isFavourite
                    ? <IoIosHeart className="heartFavourite" onClick={toggleFavourite} />
                    : <IoIosHeartEmpty className="heart" onClick={toggleFavourite} />}
                <img src={imageUrl} alt={dishImage} />
                <h1>{name}</h1>
                <p>{description}</p>
                <span className='price'>R$ {price}</span>
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

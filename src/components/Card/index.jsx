import { Container, Content, Footer } from './styles';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { Amount } from '../Amount';
import { Button } from '../Button';
import { useState } from 'react';

export function Card({ title, description, price, imageUrl, ...rest }) {

    const [isFavourite, setIsFavourite] = useState(false);

    const toggleFavourite = () => {
        setIsFavourite(prev => !prev);
        // TODO(natalia): Invoke api
    };

    return (
        <Container {...rest}>
            <Content>
                {isFavourite
                    ? <IoIosHeart className="heartFavourite" onClick={toggleFavourite} />
                    : <IoIosHeartEmpty className="heart" onClick={toggleFavourite} />}
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

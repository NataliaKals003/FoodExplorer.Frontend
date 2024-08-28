import { Container, Content, TagsContainer } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';
import { Amount } from '../../components/Amount/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import dishSalad from '../../assets/dishSalad.svg';
import { IoChevronBack } from 'react-icons/io5';
import { PiReceiptBold } from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router-dom';
import { appRoutes } from '../../routes/routes.js';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Details() {
    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const params = useParams();

    async function fetchDish() {
        try {
            const response = await api.get(`/dishes/${params.id}`);
            console.log('response', response);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching dish:', error);
        }
    }

    useEffect(() => {
        fetchDish();
    }, []);

    return (
        <Container>
            <Header />
            {data && (
                <Content>
                    <ButtonText onClick={() => navigate(appRoutes.home)} className="backButton" icon={IoChevronBack} title="voltar" />
                    <img src={data.image} alt={data.image} />
                    <div className="text-content">
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                        <TagsContainer>
                            {data.ingredients.map((ingredient, index) => {
                                return <Tag key={index} title={ingredient} />;
                            })}
                        </TagsContainer>
                        <div className="bottom-content">
                            <Amount />
                            <Button className="include">
                                <span className="text-desktop">incluir ∙ R$ {data.price}</span>
                                <span className="text-mobile">
                                    <PiReceiptBold className="icon" size={15} /> pedir ∙ R$ {data.price}
                                </span>
                            </Button>
                        </div>
                    </div>
                </Content>
            )}
            <Footer />
        </Container>
    );
}

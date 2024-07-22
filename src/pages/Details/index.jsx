import { Container, Content, TagsContainer } from './style.js';
import { Header } from '../../components/Header/index.jsx';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag/index.jsx';
import { Amount } from '../../components/Amount/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import dishSalad from '../../assets/dishSalad.svg'
import { IoChevronBack } from "react-icons/io5";
import { PiReceiptBold } from "react-icons/pi";

export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText className="backButton" icon={IoChevronBack} title="voltar" />
      <Content>
        <img src={dishSalad} alt="Salad" />
        <div className="text-content">
          <h1>Salada Ravanello</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
          <TagsContainer>
            <Tag title="alface" />
            <Tag title="cebola" />
            <Tag title="pepino" />
            <Tag title="pepino" />
            <Tag title="pepino" />
            <Tag title="pepino" />
          </TagsContainer>
          <div className="bottom-content">
            <Amount />
            <Button className="include" title={`∙ R$ 25,00`}>
              <PiReceiptBold className="icon" size={20} />
              <span className="text-desktop">incluir ∙ R$ 25,00</span>
              <span className="text-mobile">pedir ∙ R$ 25,00</span>
            </Button>
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  )
};
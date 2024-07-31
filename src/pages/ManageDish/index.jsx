import { Container, Form, DishDetails, DishAttributes } from "./styles";
import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { UploadImg } from "../../components/UploadImg";
import { Footer } from "../../components/Footer";
import { IoChevronBack } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SelectDish } from "../../components/SelectDish";
import { Ingredients } from "../../components/Ingredients";
import { Description } from "../../components/Description";
import { Button } from "../../components/Button";


export function ManageDish() {

    const currencySymbol = "R$";

    return (
        <Container>
            <Header />
            <ButtonText
                className="backButton"
                icon={IoChevronBack}
                title="voltar" />
            <main>
                <Form>
                    <h1>Adicionar prato</h1>
                    <DishDetails>
                        <UploadImg title="Imagem do prato" buttonLabel="Selecione imagem" icon={FiUpload} />
                        <Input title="Name" placeholder="Ex.: Salada Ceasar" type="text" flex="auto" />
                        <SelectDish
                            title="Categoria"
                            options={[
                                { value: 'entrada', label: 'Refeição' },
                                { value: 'sobremesa', label: 'Sobremesa' },
                                { value: 'bebida', label: 'Bebida' },
                            ]}
                            icon={MdOutlineKeyboardArrowDown} />
                    </DishDetails>
                    <DishAttributes>
                        <Ingredients title="Ingredientes" />
                        <Input title="Preço" placeholder={currencySymbol} type="number" />
                    </DishAttributes>
                    <Description title="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
                    <Button className="SaveDish" title="Salvar alterações" />
                </Form>
            </main>
            <Footer />
        </Container>
    )
}

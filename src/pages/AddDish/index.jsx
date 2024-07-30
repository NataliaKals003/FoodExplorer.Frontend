import { Container, Form, DishDetails, UploadDishContainer, DishNameContainer, DishCategoryContainer, DishAttributes, DishIngredientsContainer, DishPriceContainer, DishDescription, TextArea } from "./styles";
import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TagItem } from "../../components/TagIten";
import { Footer } from "../../components/Footer";
import { IoChevronBack } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export function AddDish() {

    const currencySymbol = "R$";

    // const [tags, setTags] = useState([]);
    // const [newTag, setNewTag] = useState("");

    // const navigate = useNavigate();

    // function handleAddTag() {
    //     setTags(prevState => [...prevState, newTag]);
    //     setNewTag("");
    // }

    // function handleRemoveTag(deleted) {
    //     if (deleted) {
    //         const removeTag = window.confirm(`Do you want to delete the tag ${deleted}?`);
    //         if (removeTag) {
    //             setTags(prevState => prevState.filter(tag => tag !== deleted));
    //         }
    //     }
    // }

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
                        <UploadDishContainer>
                            <span>Imagem do prato</span>
                            <label htmlFor="dish">
                                <FiUpload />
                                <p>Selecione imagem</p>
                                <input id="dish" type="file" />
                            </label>
                        </UploadDishContainer>
                        <DishNameContainer>
                            <span>Nome</span>
                            <Input className="dishNameInput" placeholder="Ex.: Salada Ceasar" type="text" />
                        </DishNameContainer>
                        <DishCategoryContainer>
                            <span>Categoria</span>
                            <select>
                                <option value="entrada">Refeição</option>
                                <option value="sobremesa">Sobremesa</option>
                                <option value="bebida">Bebida</option>
                            </select>
                            <MdOutlineKeyboardArrowDown className="icon" />
                        </DishCategoryContainer>
                    </DishDetails>
                    <DishAttributes>
                        <DishIngredientsContainer>
                            <span>Ingredientes</span>
                            <section title="Tags">
                                <TagItem value="Pão Naan" />
                                <TagItem value="Pão" />
                                <TagItem isNew placeholder="Adicionar" />
                            </section>
                        </DishIngredientsContainer>
                        <DishPriceContainer>
                            <span>Preço</span>
                            <Input className="dishPriceInput" placeholder={currencySymbol} type="number" />
                        </DishPriceContainer>
                    </DishAttributes>
                    <DishDescription>
                        <span>Descrição</span>
                        <TextArea
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </DishDescription>
                </Form>
            </main>
            <Footer />
        </Container>
    )
}

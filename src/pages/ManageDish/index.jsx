import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, DishDetails, DishAttributes, ButtonContainer } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { UploadImg } from '../../components/UploadImg';
import { Footer } from '../../components/Footer';
import { IoChevronBack } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { SelectDish } from '../../components/SelectDish';
import { Ingredients } from '../../components/Ingredients';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

export function ManageDish() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        ingredients: [],
        price: '',
        description: '',
        categoryId: undefined,
        imageFile: '',
    });

    const [categoryOptions, setCategoryOptions] = useState([]);
    const [hasUnresolvedIngredient, setHasUnresolvedIngredient] = useState(null);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    const handleImageUpload = useCallback((file) => {
        setFormData((prevData) => ({
            ...prevData,
            imageFile: file,
            imageUrl: null,
        }));
        console.log('Imagem carregada:', file.name);
    }, []);

    const handleIngredientsChange = useCallback((newIngredient) => {
        setFormData((prevData) => ({
            ...prevData,
            ingredients: newIngredient,
        }));
        console.log(newIngredient);
    }, []);

    const handleCategoryChange = useCallback((selectedCategoryId) => {
        const categoryId = Number(selectedCategoryId);

        if (!isNaN(categoryId)) {
            setFormData((prevData) => ({
                ...prevData,
                categoryId: categoryId,
            }));
        } else {
            console.warn('Invalid category ID:', selectedCategoryId);
        }
    }, []);

    const handleSaveDish = useCallback(async () => {
        if (!formData.name || !formData.description || !formData.price || !formData.categoryId) {
            return alert('Fill in all fields');
        }

        if (isNaN(parseFloat(formData.price))) {
            return alert('In the price field you must enter a number');
        }

        if (hasUnresolvedIngredient) {
            return alert(`You created an ingredient but didn't add it. To add it, please click the plus button.`);
        }

        const formDataToSend = new FormData();

        formDataToSend.append('name', formData.name);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('categoryId', formData.categoryId);
        formDataToSend.append('ingredients', formData.ingredients.join(','));
        console.log(formData.ingredients);

        console.log('Saving dish imageFile:', formData.imageFile);
        if (formData.imageFile) {
            formDataToSend.append('imageFile', formData.imageFile);
        }

        try {
            if (id) {
                await api.put(`/dishes/${id}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert('Dish updated successfully');
            } else {
                await api.post(`/dishes`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert('Dish created successfully');
            }
            navigate('/');
        } catch (error) {
            console.error('Error saving dish:', error);
            alert('Failed to save the dish.');
        }
    }, [formData, hasUnresolvedIngredient, id, navigate]);

    const handleDelete = useCallback(async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this dish?');

        if (confirmDelete) {
            try {
                await api.delete(`/dishes/${id}`);
                alert('Dish deleted successfully');
                navigate('/');
            } catch (error) {
                console.error('Error deleting dish:', error);
                alert('Failed to delete the dish. Please try again.');
            }
        }
    });

    useEffect(() => {
        if (id) {
            const fetchDish = async () => {
                try {
                    const response_dish = await api.get(`/dishes/${id}`);
                    const dish = response_dish.data;

                    setFormData({
                        name: dish.name,
                        ingredients: dish.ingredients,
                        price: dish.price,
                        description: dish.description,
                        categoryId: dish.categoryId,
                        imageFile: null,
                        imageUrl: dish.image,
                    });
                } catch (error) {
                    console.error('Error fetching dish data:', error.response ? error.response.data : error.message);
                    alert('Failed to load dish data.');
                }
            };
            fetchDish();
        }
    }, [id]);

    useEffect(() => {
        if (categoryOptions.length > 0 && !formData.categoryId) {
            setFormData((prevData) => ({
                ...prevData,
                categoryId: categoryOptions[0].id,
            }));
        }
    }, [categoryOptions]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await api.get('/dish_categories');
                setCategoryOptions(response.data);
            } catch (error) {
                console.error('Failed to fetch categories', error);
            }
        }
        fetchCategories();
    }, []);

    return (
        <Container>
            <Header />
            <ButtonText className="backButton" icon={IoChevronBack} title="voltar" onClick={() => navigate('/')} />

            <main>
                <Form>
                    <h1>{id ? 'Editar prato' : 'Adicionar prato'}</h1>
                    <DishDetails>
                        <UploadImg
                            title="Imagem do prato"
                            buttonLabel="Selecione imagem"
                            icon={FiUpload}
                            onImageUpload={handleImageUpload}
                            imageUrl={formData.imageUrl}
                        />
                        <Input
                            title="Nome"
                            name="name"
                            placeholder="Ex.: Salada Ceasar"
                            type="text"
                            flex="auto"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <SelectDish
                            title="Categoria"
                            value={formData.categoryId}
                            options={categoryOptions.map((cat) => ({
                                value: cat.id,
                                label: cat.name,
                            }))}
                            icon={MdOutlineKeyboardArrowDown}
                            onChange={handleCategoryChange}
                        />
                    </DishDetails>
                    <DishAttributes>
                        <Ingredients
                            value={formData.ingredients}
                            title="Ingredientes"
                            onIngredientsChange={handleIngredientsChange}
                            hasUnresolvedIngredient={(has) => setHasUnresolvedIngredient(has)}
                        />
                        <Input
                            name="price"
                            title="Preço"
                            placeholder="R$ 00.00"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </DishAttributes>
                    <TextArea
                        title="Descrição"
                        name="description"
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <ButtonContainer>
                        {id && <Button className="deleteDish" title="Excluir prato" onClick={handleDelete} />}
                        <Button
                            className="saveDish"
                            title={id ? 'Salvar alterações' : 'Criar prato'}
                            onClick={handleSaveDish}
                        />
                    </ButtonContainer>
                </Form>
            </main>
            <Footer />
        </Container>
    );
}

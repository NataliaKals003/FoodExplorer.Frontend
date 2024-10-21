import { Container } from './styles';
import { TagItem } from '../TagIten';
import { useEffect, useState } from 'react';

export function Ingredients({ value = [], title, onIngredientsChange, hasUnresolvedIngredient }) {
    const [ingredients, setIngredients] = useState(value);
    const [newIngredient, setNewIngredient] = useState('');

    useEffect(() => {
        if (value !== ingredients) {
            setIngredients(value);
        }
    }, [value]);

    useEffect(() => {
        onIngredientsChange(ingredients);
    }, [ingredients, onIngredientsChange]);

    useEffect(() => {
        hasUnresolvedIngredient(newIngredient.trim().length > 0);
    }, [newIngredient]);

    function handleAddIngredient() {
        if (newIngredient.trim()) {
            setIngredients((prevState) => [...prevState, newIngredient.trim()]);
            setNewIngredient('');
        }
    }

    function handleRemoveIngredient(ingredientToRemove) {
        if (ingredientToRemove) {
            const removeIngredient = window.confirm(`Do you want to remove ${ingredientToRemove}?`);
            if (removeIngredient) {
                setIngredients((prevState) => prevState.filter((ingredient) => ingredient !== ingredientToRemove));
            }
        }
    }

    return (
        <Container>
            <span>{title}</span>
            <section title="Ingredients">
                {ingredients.map((ingredient, index) => (
                    <TagItem
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                    />
                ))}
                <TagItem
                    isNew
                    placeholder="Add"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                />
            </section>
        </Container>
    );
}

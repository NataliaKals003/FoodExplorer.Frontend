import { Container } from "./styles";
import { TagItem } from "../TagIten";
import { useEffect, useState } from "react";

export function Ingredients({ value, title, onIngredientsChange, hasUnresolvedIngredient }) {
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    useEffect(() => {
        onIngredientsChange(ingredients);
    }, [ingredients, onIngredientsChange]);

    useEffect(() => {
        hasUnresolvedIngredient(newIngredient.trim().length > 0);
    }, [newIngredient]);

    const handleAddIngredient = () => {
        if (newIngredient.trim()) {
            setIngredients([...ingredients, newIngredient]);
            setNewIngredient("");
        }
    };

    const handleRemoveIngredient = (ingredientToRemove) => {
        const removeTag = window.confirm(`Você deseja remover ${ingredientToRemove}?`);
        if (removeTag) {
            setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientToRemove));
        }
    };

    return (
        <Container>
            <span>{title}</span>
            <section title="Ingredientes">
                {value.map((ingredient, index) => (
                    <TagItem
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                    />
                ))}
                <TagItem
                    isNew
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                />
            </section>
        </Container>
    )
}
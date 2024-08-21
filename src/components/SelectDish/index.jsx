import { Container, SelectWrapper } from "./styles";

export function SelectDish({ title, value, options, icon: Icon, onChange }) {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <Container>
            <span>{title}</span>
            <SelectWrapper>
                <select onChange={handleChange} value={value}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {Icon && <Icon className="icon" />}
            </SelectWrapper>
        </Container>
    )
}
import { Container, SelectWrapper } from "./styles";

export function SelectDish({ title, options, icon: Icon }) {
    return (
        <Container>
            <span>{title}</span>
            <SelectWrapper>
                <select>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {Icon && <Icon className="icon" />}
            </SelectWrapper>
        </Container>
    )
}
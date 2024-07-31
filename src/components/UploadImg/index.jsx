import { Container } from './styles';

export function UploadImg({ title, buttonLabel, icon: Icon }) {
    return (
        <Container>
            <span>{title}</span>
            <label htmlFor="dish">
                {Icon && <Icon />}
                <p>{buttonLabel}</p>
                <input id="dish" type="file" />
            </label>
        </Container>
    )
}

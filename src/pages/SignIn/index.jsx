import { Container, Logo, Form, Content } from './style';
import polygon from '../../assets/Polygon.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {
    return (
        <Container>
            <Logo>
                <img src={polygon} alt="Polygon" />
                <h1>food explorer</h1>
            </Logo>
            <Form>
                <Content>
                    <h2>Faça login</h2>
                    <span>Email</span>
                    <Input
                        className="login"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                    />
                    <span>Senha</span>
                    <Input
                        className="login"
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        maxLength={6}
                    />
                    <Button title="Entrar" />
                    <ButtonText
                        className="createAcount"
                        title="Criar uma conta" />
                </Content>
            </Form>
        </Container>
    )
}

import { Container, Logo, Form, Content } from './style';
import polygon from '../../assets/Polygon.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
    return (
        <Container>
            <Logo>
                <img src={polygon} alt="Polygon" />
                <h1>food explorer</h1>
            </Logo>
            <Form>
                <Content>
                    <h2>Crie sua conta</h2>
                    <span>Seu nome</span>
                    <Input
                        className="login"
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                    />
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
                    <Button title="Criar conta" />
                    <ButtonText
                        className="createAcount"
                        title="Já tenho uma conta" />
                </Content>
            </Form>
        </Container>
    )
}

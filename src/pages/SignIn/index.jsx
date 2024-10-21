import { Container, Logo, Form, Content } from './style';
import polygon from '../../assets/Polygon.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function SignIn() {
    const { signIn, user } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        signIn({ email, password });
    }

    const navigate = useNavigate();

    return (
        <Container>
            <Logo>
                <img src={polygon} alt="Polygon" />
                <h1>food explorer</h1>
            </Logo>
            <Form>
                <Content>
                    <h2>Log in</h2>
                    <span>Email</span>
                    <Input
                        className="login"
                        placeholder="Example: exemplo@exemplo.com"
                        type="text"
                        dark={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span>Senha</span>
                    <Input
                        className="login"
                        placeholder="At least 6 characters"
                        type="password"
                        maxLength={6}
                        dark={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button title="Log in" onClick={handleSignIn} />
                    <ButtonText
                        onClick={() => navigate(routes.signUp)}
                        className="createAcount"
                        title="Create an accounta"
                    />
                </Content>
            </Form>
        </Container>
    );
}

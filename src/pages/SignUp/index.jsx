import { Container, Logo, Form, Content } from './style';
import polygon from '../../assets/Polygon.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { useNavigate } from 'react-router-dom';
import { authRoutes } from '../../routes/routes';

import { useState } from 'react';
import { api } from '../../services/api.js';

export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preenha todos os campos")
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuario cadastrado com sucesso!")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Nao foi possivel cadastrar");
                }
            })
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
                    <h2>Crie sua conta</h2>
                    <span>Seu nome</span>
                    <Input
                        className="login"
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                    <span>Email</span>
                    <Input
                        className="login"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span>Senha</span>
                    <Input
                        className="login"
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        maxLength={6}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button title="Criar conta" onClick={handleSignUp} />
                    <ButtonText
                        onClick={() => navigate(authRoutes.signIn)}
                        className="createAcount"
                        title="Já tenho uma conta" />
                </Content>
            </Form>
        </Container>
    )
}

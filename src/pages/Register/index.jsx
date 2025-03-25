import {MdEmail, MdLock, MdPerson} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from '../../services/api';

import {Column, Container, Row, SubTitleLogin, Title, TitleLogin, Wrapper, PermitionText, AccountExist, Login } from "./styles";

const schema = yup
.object({
    fullName: yup
        .string()
        .required('Nome obrigatório'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('E-mail obrigatório'),
  password: yup
    .string()
    .min(3, 'No mínimo 3 caracteres')
    .required('Senha obrigatória')
})
.required()

const Register = () => {   
        const navigate = useNavigate();
        const handleClickSignIn = () => {
        navigate('/login')
    }
        const {
            control,
            handleSubmit,
            formState: { errors },
        } = useForm({
            resolver: yupResolver(schema), 
            mode: 'onChange',
            defaultValues: {
                fullName: '',
                email: '',
                password: '',
            }
        });
    
        const onSubmit = async (formData) => {
            try {
                const response = await api.post('/users', {
                    name: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                });

                if (response.status === 201) {
                    alert('Cadastro realizado com sucesso!');
                    navigate('/login'); 
                }

            } catch (error) {
                console.error('Erro ao cadastrar usuário:', error);
                alert('Erro ao cadastrar. Tente novamente.');
            }
        };
    
    return (<>
            <Header />
            <Container>
                <Column>               
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title> 
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>
                            Comece agora grátis
                        </TitleLogin>
                        <SubTitleLogin>
                            Crie sua conta e make the change._
                        </SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="fullName" control={control} placeholder="Nome Completo" errorMessage={errors?.fullName?.message} leftIcon={<MdPerson />}/>
                            <Input name="email" control={control} placeholder="E-mail" errorMessage={errors?.email?.message} leftIcon={<MdEmail />}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                            <Button type="submit" title="Criar minha conta" variant="secundary"/>
                        </form>
                        <Row>
                            <PermitionText>
                            Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                            </PermitionText>
                            
                        </Row>
                        <Row>
                        <AccountExist>
                            Já tenho conta. <Login onClick={handleClickSignIn}>Fazer login</Login>
                        </AccountExist>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>)    
}

export {Register}
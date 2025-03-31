import {MdEmail, MdLock} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {Column, Container, RegisterAccount, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { IFormData } from './types';
import { useAuth } from '../../hooks/useAuth';

const schema = yup
  .object({
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


const Login = () => {
    const navigate = useNavigate();
    const handleClickRegister = () => {
        navigate('/register')
    }

    const {handleLogin} =  useAuth();
    
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>({
        resolver: yupResolver(schema), 
        mode: 'onChange',
    });

    const onSubmit = async (formdata: IFormData) => {
        handleLogin(formdata);
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
                            Faça seu cadastro
                    </TitleLogin>
                    <SubTitleLogin>
                        Faça seu login e make the change._
                    </SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" control={control} placeholder="E-mail" errorMessage={errors?.email?.message} leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button type="submit" title="Entrar" variant="secundary"/>
                    </form>
                    <Row>
                        <EsqueciText>
                            Esqueci Minha Senha
                        </EsqueciText>
                        <RegisterAccount onClick={handleClickRegister}>
                            Criar Conta
                        </RegisterAccount>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)    
}

export {Login}
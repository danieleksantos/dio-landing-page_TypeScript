import {MdEmail, MdLock} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { CgPassword } from 'react-icons/cg';



const Login = () => {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm();
      const onSubmit = data => console.log(data)

    const handleClickSignIn = () => {
        navigate('/feed')
    }
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
                        <Input name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="Password" control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button type="submit" title="Entrar" variant="secundary"/>
                    </form>
                    <Row>
                        <EsqueciText>
                            Esqueci Minha Senha
                        </EsqueciText>
                        <CriarText>
                            Criar Conta
                        </CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)    
}

export {Login}
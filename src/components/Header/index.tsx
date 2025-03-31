import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import logo from "../../assets/logo-mini.png";

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
    const {user, handleSignOut} =  useAuth();
    
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickRegister = () => {
        navigate('/register')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={logo} alt="logo Dio"/>
                    </Link>
                    {user.id ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
                   
                </Row>
                <Row>
                {user.id ? ( 
                    <>
                        <Button title={"Sair"} variant="tertiary" onClick={handleSignOut} />
                        <UserPicture src="https://avatars.githubusercontent.com/u/182745977?v=4" />
                    </>
                    ) : (
                    <>
                    <MenuRight href="#">
                        Home 
                    </MenuRight>
                    <Button title="Entrar" onClick={handleClickSignIn}/>
                    <Button title="Cadastrar" onClick={handleClickRegister}/>
                    </>
                )}                    
                </Row>
            </Container>
        </Wrapper>
    )
} 

export {Header}
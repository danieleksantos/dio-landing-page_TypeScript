import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import logo from "../../assets/logo-mini.png"

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

const Header = ({autenticado}) => {
    const navigate = useNavigate();
    
        const handleClickSignIn = () => {
            navigate('/feed')
        }
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo Dio"/>
                    {autenticado ? (
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
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/182745977?v=4" />
                ) : (
                    <>
                    <MenuRight href="#">
                        Home 
                    </MenuRight>
                    <Button title="Entrar" onClick={handleClickSignIn}/>
                    <Button title="Cadastrar"/>
                    </>
                )}                    
                </Row>
            </Container>
        </Wrapper>
    )
} 

export {Header}
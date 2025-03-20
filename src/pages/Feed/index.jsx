import { useNavigate } from "react-router-dom";
import {Button} from "../../components/Button"
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHightLight } from "./styles"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"


const Feed = () => {
    const navigate = useNavigate();
    
    const handleClickSignIn = () => {
        navigate('/')
    }
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Button title={"Voltar"} variant="tertiary" onClick={handleClickSignIn} />
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
            </Column> 
            <Column flex={1}>
                <TitleHightLight># RANKING 5 TOP DA SEMANA</TitleHightLight>
                <UserInfo percentual={95} nome="Daniele" image="https://avatars.githubusercontent.com/u/182745977?v=4"/>
                <UserInfo percentual={80} nome="João" image="https://avatars.githubusercontent.com/u/9375141?v=4"/>
                <UserInfo percentual={60} nome="Michele" image="https://avatars.githubusercontent.com/u/55519539?v=4"/>
                <UserInfo percentual={40} nome="Mario" image="https://avatars.githubusercontent.com/u/21299253?v=4"/>
                <UserInfo percentual={20} nome="Otávio" image="https://avatars.githubusercontent.com/u/6619093?v=4"/>
            </Column>
        </Container>
    </>)    
}

export { Feed }
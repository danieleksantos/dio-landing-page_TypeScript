import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, 
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture 
        } from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://github.com/danieleksantos/danieleksantos.github.io/blob/main/src/images/prints-projects/nikel-mockup.png?raw=true"/>
      <Content>
        <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/182745977?v=4" />
            <div>
                <h4>Daniele</h4>
                <p>Há 8 minutos</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>Projeto feito para o curso de HTML e CSS no bootcamp DIO do Global Avanede...<strong>Saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
            <h4>
                #HTML #CSS #JavaScript
            </h4>
            <p>
                <FiThumbsUp /> 10
            </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
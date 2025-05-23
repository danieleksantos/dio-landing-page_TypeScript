import styled from "styled-components";
import { IUserInfoStyle } from "./types";

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`

export const UserPicture = styled.img `
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #fff;
    margin-right: 12px;
`

export const NameText = styled.div `
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    color: #FFF;
`

export const Progress = styled.div <IUserInfoStyle> `
    width: 180px;
    height: 6px;
    background-color: #FFF;
    border-radius: 3px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual})=> percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23dd7a;
    }
`
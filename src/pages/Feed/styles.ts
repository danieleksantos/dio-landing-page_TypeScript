import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
`

    export const Title = styled.h3 `
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFF;
        margin-bottom: 24px;
    `

    export const TitleHightLight = styled.h2 `
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF70;
        margin-bottom: 24px;
    `

    export const Column = styled.div <IColumn> `
        flex: ${({flex}) => flex};
        padding-right: 24px;
    `
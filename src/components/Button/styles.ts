import styled, { css } from 'styled-components';
import { IButtonStyled } from './types';

export const ButtonContainer = styled.button <IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFF;
    font-family: 'Open Sans';
    font-size: 14px;
    padding: 2px 12px;
    min-width: 128px;
    width: 100%;
    border:none;
    margin-right: 10px;


    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    ${({variant}) => variant ==="secundary" && css `
        min-width: 167px;
        height: 33px;
        font-family: 'Open Sans';
        font-size: 14px;
        border:none;


        background: #E4105D;
        &:hover {
            opacity: 0.6;
            cursor:pointer;
        }

        &::after {
            content:'';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: 102%;
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}

${({variant}) => variant ==="tertiary" && css `
    background: #565656;
    border-radius: 22px;

    color: #FFF;
    font-family: 'Open Sans';
    font-size: 12px;
    padding: 2px 6px;
    border:none;
    width: 30px;
    margin-right: 15px;


    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
    `}
`
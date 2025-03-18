import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button `
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFF;
    font-family: 'Open Sans';
    padding: 2px 12px;
    min-width: 128px;
    width: 100%;

    ${({variant}) => variant !== "primary" && css `
        min-width: 167px;
        height: 33px;
        font-family: 'Open Sans';


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
`
import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 20px 20px 10px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:100px;
    
    
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    outline: none;
    padding: 13px 41px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    
    ${(props)=> css`

        background-color: ${props.theme.primary};
        border: 1px solid ${props.theme.tertiary};
        box-shadow: 0px 0px 13px 2px ${props.theme.boxShadow};
        color: ${props.theme.textSecondary};
        
    `}

    &::placeholder{

        background-image: url(${(props)=> props.theme.lupa});
        background-repeat: no-repeat;
        padding-left:37px;
        background-position-x: 0px;
        background-position-y: -1px;
        color: ${(props)=> props.theme.textSecondary}
    }
`

export const ContainerActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .icon{
        font-size: 24px;
        color: ${(props)=> props.theme.textPrimary};
        cursor: pointer;

        &:hover{
            opacity: 0.6;
        }
    }
    
`

export const Button = styled.button`

    width: 110px;
    height: 40px;
    background: linear-gradient(90deg, #F093FB 0%, #F5576C 100%);
    border-radius: 22.5px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap:12px;
    font-weight: 400px;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;
    border: none;
    cursor: pointer;

    &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }

;

`



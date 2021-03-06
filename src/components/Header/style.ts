import Styled from "styled-components"


export const Container = Styled.header` 
    background: var(--blue);
    width:100vw;
`

export const Content = Styled.section`
    width:100vw;
    margin: 0 auto;
    padding: 2rem 1rem 10rem;
    display: flex;
    align-items:center;
    justify-content: space-around;

    button{
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height:3rem;
        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.9);
        }
    }
`
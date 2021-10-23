import Styled from 'styled-components'


export const Container = Styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem;

    section{
        background: var(--shape);
        padding: 1.5rem 2rem; 
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
        }

        &:nth-last-child(1){
            background: var(--green);
            color: #fff;
        }
    }

`
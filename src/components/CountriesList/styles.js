import styled from "styled-components";

export const CountriesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* display: flex;
    flex-wrap: wrap; */
    gap: 2rem;
    width: 100%;
    font-size: 0.9em;
    padding-bottom: 5rem;

    @media (max-width: 426px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    div.wrapper{
        display: inline-block;
        height: 30vw;
        max-height: 22rem;
        /* width: 14.5vw; */
        min-width: 14.5rem;
        background-color: ${({theme}) => theme.elements};
        box-shadow: ${({theme}) => theme.shadow};
        border-radius: 5px;

        @media (max-width: 426px){
            width: calc(100vw - 4rem);
            min-width: 0;
            height: 25rem;
            max-height: 100rem;
        }
        
        div.content{
            padding: .8rem 1.5rem;
            h2{
                margin-bottom: .6rem;
            }
            p{
                margin-bottom: .2rem;
            }
            strong{
                font-weight: 600;
            }
        }
        img{
            object-fit: cover;
            height: 50%;
            width: 100%;
            border-radius: 5px 5px 0 0;

            @media(max-width: 426px){
                height: 60%;
            }
        }
    }
`
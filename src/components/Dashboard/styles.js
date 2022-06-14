import styled from "styled-components";

export const Container = styled.main`
    max-width: 1056px;
    @media(max-width: 426px){
        max-width: 426px;
        padding: 0 2rem;
    }
    div.menu-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;
        @media(max-width: 426px){
            flex-direction: column;
        }
        
        .search-wrapper{
            display: flex;
            align-items: center;
            box-shadow: ${({theme}) => theme.shadow};
            width: 29rem;
            border-radius: 5px;
            color: ${({theme}) => theme.text};
            background-color: ${({theme}) => theme.elements};

            @media(max-width: 426px){
                width: 100%;
                margin-bottom: .5rem;
            }

            img{
                height: 1.5rem;
                width: 2rem;
                margin: 0 .9rem;
                transform: rotate(-15deg);
                filter: ${({theme}) => theme.magnifierFilter};
            }
            input{
                height: 3.5rem;
                width: 100%;
                border: none;
                color: gray;
                background-color: ${({theme}) => theme.elements};
                &::placeholder{
                    color: ${({theme}) => theme.textInput};
                }
                @media(max-width: 426px){
                    border-radius: 5px;
                }
            }
        }
        .filter-wrapper{
            font-weight: 600;
            position: relative;
            .menu-button-container{
                height: 3.5rem;
                width: 14rem;
                padding: .9rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                box-shadow: ${({theme}) => theme.shadow};
                border-radius: 5px;
                background-color: ${({theme}) => theme.elements};
                color: ${({theme}) => theme.text};

                @media(max-width: 426px){
                    width: calc(100vw - 4rem);
                    
                }
            }
            #menu-toggle{
                display: none;
            }
            .menu{
                display: none;
                position: absolute;
                top: 3.8rem;
                width: 14rem;
                list-style: none;
                box-shadow: ${({theme}) => theme.shadow};
                border-radius: 5px;
                background-color: ${({theme}) => theme.elements};
                color: ${({theme}) => theme.text};

                animation-name: open;
                animation-duration: 1s;
                animation-direction: reverse;
                max-height: 0;
                overflow: hidden;
                transition: display 1s;

                @media(max-width: 426px){
                    width: calc(100vw - 4rem);
                }
                li{
                    margin: .5rem 0;
                    cursor: pointer;
                }
            }
            img{
                width: 1rem;
                transition: transform .3s;
            }
            #menu-toggle:checked ~ .menu{
                padding: .5rem 1rem;
                display: inline-block;
                overflow: hidden;
                animation-name: open;
                animation-duration: .3s;
                animation-direction: normal;
                max-height: 11rem;
            }
            #menu-toggle:checked ~ .menu-button-container img{
                transform: rotate(180deg);
            }
        }
    }
    @keyframes open {
        0% {
            max-height: 1rem;
        }
        10% {
            max-height: 2rem;
        }
        20% {
            max-height: 3rem;
        }
        30% {
            max-height: 4rem;
        }
        40% {
            max-height: 5rem;
        }
        50% {
            max-height: 6rem;
        }
        60% {
            max-height: 7rem;
        }
        70% {
            max-height: 8rem;
        }
        80% {
            max-height: 9rem;
        }
        90% {
            max-height: 10rem;
        }
        100% {
            max-height: 11rem;
        }
    }
`;
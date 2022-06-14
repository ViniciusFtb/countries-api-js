import styled from "styled-components";
import { func, string } from "prop-types"

// import { ThemeProps } from "../Header";

import moonImg from "../../assets/moon.svg";
import darkMoonImg from "../../assets/moon_dark.svg";
import { lightTheme } from "./Themes";

// interface ButtonProps{
//   onClick: string | (() => void);
// }
const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  img {
    width: 1rem;
    height: 1rem;
    margin-right: .3rem;
    transform: rotate(${({ theme }) => theme === lightTheme ? '40deg' : '-135deg'});
    transition: transform 1s;
  }
  p {
    color: ${({ theme }) => theme.text};
    @media(max-width: 426px){
      display: none;
    }
  }
`;


// export interface ThemeProps {
//   theme: string | (() => void)
//   toggleTheme: string | (() => void);
// }

export function Toggle({ theme, toggleTheme }) {
    return (
        <Button onClick={toggleTheme}>
            <img src={theme === 'light' ? moonImg : darkMoonImg} alt="moon symbol"/>
            <p>Dark Theme</p>
        </Button>
    );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

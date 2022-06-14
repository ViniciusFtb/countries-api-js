import { Container } from "./styles";
import { Toggle } from "../Themes/Toggler";

// export interface ThemeProps {
//     theme: string | (() => void)
//     toggleTheme: string | (() => void);
// }

export function Header({theme, toggleTheme}){
    return (
        <Container>
            <div>
                <a href=".">
                    <strong>Where in the world?</strong>
                </a>
                <Toggle theme={theme} toggleTheme={toggleTheme}/>
            </div>
        </Container>
    );
};
import { Container, Navigator } from "./style/Index";

export function Header(){
    return(
        <Container>
            <h1 className="logo">Calculator</h1>

            <Navigator>
                <a href="#">Home</a>
                <a target={`_blank`} href="https://github.com/GabrielWaltmann">Github</a>
                <a target={`_blank`} href="https://www.linkedin.com/in/gabrielwaltmann/">Linkedin</a>
                <a target={`_blank`} href="https://gabrielwaltmann.github.io/">Portfólio</a>
            </Navigator>
        </Container>
    )
}
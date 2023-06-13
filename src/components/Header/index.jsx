import {Container, Profile} from './styles'
import {Input} from '../../components/Input'
export function Header(){
        return (
            <Container>
                <h1>RocketMovies</h1>
                <Input placeholder="Procure um filme" />
                <Profile to='/profile'>
                <img src="https://github.com/crasherlol.png" alt="Foto do Usuário"></img>
                <div>
                 <strong> Crasherlol </strong>
                 <a href="/">Sair</a>
                </div>
                </Profile>
            </Container>
        )

}
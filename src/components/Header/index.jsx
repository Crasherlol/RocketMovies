import {Container, Profile} from './styles'
import {useAuth} from '../../hooks/auth'
import {api} from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import {Link} from 'react-router-dom';


export function Header(){
    const {signOut, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

   
        return (
            <Container>
                <h1>RocketMovies</h1>
                <Profile>
                <Link to ='/profile' > <button class="buttonProfile"> <img src={avatarUrl} alt="Foto do Usuário"></img> </button> </Link>
                <div>
                 <strong> {user.name} </strong>
                 <button onClick={signOut}>Sair</button>
                </div>
                </Profile>
            </Container>
        )

}
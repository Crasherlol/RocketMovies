import {Container, Profile} from './styles'
import {useAuth} from '../../hooks/auth'
import {api} from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from 'react-router-dom'

export function Header(){
    const {signOut, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const navigate = useNavigate();

    function handleProfileNavigate(){
    navigate('/profile') 
}

   
        return (
            <Container>
                <h1>RocketMovies</h1>
                <Profile>
                <button class="buttonProfile" onClick={handleProfileNavigate}> <img src={avatarUrl} alt="Foto do Usuário"></img> </button>
                <div>
                 <strong> {user.name} </strong>
                 <button onClick={signOut}>Sair</button>
                </div>
                </Profile>
            </Container>
        )

}
import {Container} from './styles';
import {Header} from '../../components/Header';
import {FiArrowLeft} from 'react-icons/fi';
import {RiStarSLine, RiStarSFill} from 'react-icons/ri'
import { Tag } from '../../components/Tag';
import { FiClock } from 'react-icons/fi';
import {api} from '../../services/api';
import { useState, useEffect } from 'react';
import {useAuth} from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function MoviePreview(){
    const [description, setDescription] = useState("")
    const {user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    
    return(
        <Container>
         <Header /> 
         <div class="headerPost">
         <a href="/"> <FiArrowLeft /> Voltar</a>
        <h1> Interstellar <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSLine />  </h1>
        <div class="spanWrapper">
        <img 
        src={avatarUrl} 
        alt="Foto do usuário" 
        />
        {
        <span>Por {user.name}</span>
        }
        <FiClock/>
        <span> 23/05/22 às 08:00</span>
         </div>
         </div>
         <div class="tags">
        <Tag title='Ficção Científica' />
        <Tag title='Drama' />
        <Tag title='Família' />
        </div>
        <div class="movieText">
            <p> </p>
        </div>
        </Container>
    )   
}
import {Container} from './styles';
import {Header} from '../../components/Header';
import {FiArrowLeft} from 'react-icons/fi';
import {FaStar} from 'react-icons/fa'
import { FiDelete } from "react-icons/fi";
import { Tag } from '../../components/Tag';
import { FiClock } from 'react-icons/fi';
import {api} from '../../services/api';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {useAuth} from '../../hooks/auth'
import { useNavigate } from 'react-router-dom';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


export function MoviePreview(){
    const [data, setData] = useState("")
    const {user} = useAuth()
    const params = useParams();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchMovie(){
            const response = await api.get(`/movie_notes/${params.id}`);
            setData(response.data); 
        }
        fetchMovie();
    }, [])

    async function handleRemove (){
        const confirm = window.confirm("Deseja realmente remover o filme?")
        if (confirm) {
            await api.delete(`/movie_notes/${params.id}`);
            navigate("/")
        }
       
    }
    return(
        <Container>
         <Header /> 
         <div class="headerPost">
         <a href="/"> <FiArrowLeft /> Voltar</a>
         
         <div class="ratio">
         <h1> {data.title} </h1>
            {[...Array(data.rating)].map(star => {
               return <FaStar size={20} />
            })}
            <button className="deleteButton" onClick={handleRemove}> <FiDelete /> </button>
        </div>
        <div class="spanWrapper">
        <img 
        src={avatarUrl} 
        alt="Foto do usuário" 
        />
        <span>Por {user.name}</span>
        <FiClock/>
        <span> {data.updated_at}</span>
         </div>
         </div>
         
        {
            data.tags &&
         <div class="tags">
     {
        data.tags.map(tag => (
        <Tag key={String(tag.id)} 
        title={tag.name}
        />
        ))
      }

        </div>
        }
        <div class="movieText">
            <p> {data.description} </p>
            
        </div>

        
    
        </Container>
    )   
}
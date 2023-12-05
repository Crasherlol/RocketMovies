import {Container, Brand, Content} from './styles'
import {Header} from '../../components/Header'
import { Button } from '../../components/Button'
import {FiPlus} from 'react-icons/fi'
import { MovieSection } from '../../components/MovieSection'
import {Link} from 'react-router-dom';
import {api} from '../../services/api'
import { useState, useEffect } from 'react'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'

 
export function Home(){
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMovies(){
            const response = await api.get(`/movie_notes?title=${search}`);
            setMovies(response.data);
        }
        fetchMovies()
    }, [search])

    function handleDetails(id){
        navigate(`/moviePreview/${id}`)
    }

    return (
        <Container>
        
            <Header />

            <div class="inputArea">
            <Input 
            placeholder="Procure um filme" 
            onChange={(e) => setSearch(e.target.value)}
            />
            </div>
            <Brand>
            <h1>Meus Filmes</h1>
            
         <Link to='/createMovie'><Button icon ={FiPlus} title="Adicionar filme"> </Button> </Link>
            </Brand>
        <Content>
            {
               movies.map(movie => (
            <MovieSection 
            key={String(movie.id)}
            data ={movie} 
            onClick={() => handleDetails(movie.id)}/>
            ))
        }
   </Content>
            
            
        </Container>
    )

}
import {Container, Form} from './styles'
import {Header} from '../../components/Header'
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import {FiArrowLeft} from 'react-icons/fi'
import { Section } from '../../components/Section'
import {Button} from '../../components/Button'
import {api} from '../../services/api'
import { NoteItem } from '../../components/NoteItem'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
export function CreateMovie(){
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const navigate = useNavigate();

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");

    }
    function handleRemoveTag(deleted){
        setTags (prevState => prevState.filter(tag => tag !== deleted) )
    }
    function handleRemoveMovie (){
        const confirm = window.confirm("Deseja realmente remover o filme?")

        if (confirm){
           return navigate("/")
        }
    }

    async function handleNewNote(){
        if (newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não adicionou.");
        }
        if (rating > 5){
            return alert ("Você deve digitar um numero entre 1 e 5")
        }
            
        if (isNaN(rating)){
            return alert ("A sua avaliação deve ser um numero");
        
    }

        await api.post("movie_notes", {
            title,
            description,
            rating,
            tags
        } )
        alert("Filme cadastrado com sucesso");
        navigate("/");
    }

    return(
        <Container>
        <Header />

        <main>
            <Form>
                <header>
                    <Link to="/"> <FiArrowLeft />Voltar </Link>
                    <h1>Novo Filme</h1>
                    
                </header>
                <div class="sidebyside">
                <Input 
                placeholder="Titulo"
                onChange={e => setTitle(e.target.value)}
                /> 
                <Input 
                placeholder="Sua nota de 1 a 5"
                type="number"
                onChange={e => setRating(e.target.value)}
                />

                </div>
                <Textarea 
                placeholder="Observações"
                onChange={e => setDescription(e.target.value)}
                />
                
                <Section title="Marcadores">
                <div class ="tags">
                {
                    tags.map((tag, index) => (
                        
                            <NoteItem
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag)}
                             />
                            
                        ))
                    }


                    <NoteItem isNew 
                    placeholder ="Novo marcador"
                    value={newTag}
                    onChange={e => setNewTag(e.target.value)}
                    onClick={handleAddTag}
                     />
                </div>
              
                </Section>
                <div class="buttons">
                    <Button title="Excluir Filme" id="firstChild" onClick={handleRemoveMovie} />
                    <Button title="Salvar Alterações" onClick={handleNewNote}/>
                </div>

                </Form>
                </main>
        </Container>
    )

}
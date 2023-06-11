import {Container, Form} from './styles'
import {Header} from '../../components/Header'
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import {FiArrowLeft} from 'react-icons/fi'
import { Section } from '../../components/Section'
import {Button} from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'
import {Link} from 'react-router-dom';
export function CreateMovie(){

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
                <Input placeholder="Titulo"/> <Input placeholder="Sua nota de 1 a 5"/>
                </div>
                <Textarea placeholder="Observações"/>
                <Section title="Marcadores">
                <div class ="tags">
                    <NoteItem value="React"/>
                    <NoteItem isNew placeholder ="Novo marcador" />
                </div>
                </Section>
                <div class="buttons">
                    <Button title="Excluir Filme" id="firstChild" />
                    <Button title="Salvar Alterações" />
                </div>

                </Form>
                </main>
        </Container>
    )

}
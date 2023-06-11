import {Container} from './styles';
import {RiStarSLine, RiStarSFill} from 'react-icons/ri'
import { Tag } from '../Tag';
import {Link} from 'react-router-dom';

export function MovieSection({data, ...rest}){
    return (
        <Container {...rest} to='/moviePreview'>
        <h1>{data.title}</h1>
        <div class="ratio">
        <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSLine />
        </div>
        <span>{data.description}</span>
        {
            data.tags && 
            <footer>
                {
                    data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                }
            </footer>
        }
        </Container>
    );


}
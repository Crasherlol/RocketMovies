import {Container} from './styles';
import {FaStar} from 'react-icons/fa'
import { Tag } from '../Tag';
import { api } from '../../services/api';
export function MovieSection({data, ...rest}){

    return (
        <Container {...rest}>
        <h1>{data.title}</h1>
        <div class="ratio">
            {[...Array(data.rating)].map(star => {
               return <FaStar size={15} />
            })}
        
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
import {Routes, Route} from 'react-router-dom';

import {CreateMovie } from '../pages/CreateMovie'
import {Home } from '../pages/Home'
import {Profile } from '../pages/Profile'
import {MoviePreview } from '../pages/MoviePreview'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/createMovie" element={<CreateMovie/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/moviePreview/:id" element={< MoviePreview/>}/>

        </Routes>
    )

}
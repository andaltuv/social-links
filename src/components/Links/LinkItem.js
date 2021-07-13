import React from 'react';
import {Link} from 'react-router-dom';
export const LinkItem = ({
    id,
    url
}) => {

    let baseURL = process.env.PUBLIC_URL;

    if(id === 'newsletter-form-link'){
        return(
            <div className={`social ${id}`}><Link to='./boletin'><img src={`./icons/${id}.svg`} height="30px"/><span>Suscribirse al boletín</span></Link></div>
        )
    }else{
        return(
            <div className={`social ${id}`}><a href={`https://${url}`}><img src={`./icons/${id}.svg`} height="30px"/></a></div>
        )
    }

 

}
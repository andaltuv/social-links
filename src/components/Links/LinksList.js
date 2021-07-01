import React from 'react';
import { GetLinks } from '../../selectors/GetLinks';
import { PersonalBrand } from '../PersonalBrand/PersonalBrand';
import { LinkItem } from './LinkItem';

export const LinksList = () => {

    const links = GetLinks();


    return(
        <div className="container">
         <PersonalBrand /> 
        {
            links.map( link => (
                <LinkItem
                    key={link.id}
                    {...link}
                />
            ))
        }
        </div>
    )

}
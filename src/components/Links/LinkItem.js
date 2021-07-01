import React from 'react';
export const LinkItem = ({
    id,
    url
}) => {

    return(
        <div className={`social ${id}`}><a href={`https://${url}`}><img src={`../icons/${id}.svg`} height="30px"/></a></div>
    )

}
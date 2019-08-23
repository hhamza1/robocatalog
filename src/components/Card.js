import React from 'react';


const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5">
            <img alt={id} src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
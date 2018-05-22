import React from 'react';

export default function BookCard ({name, author, genre, creationDate, lastUpdate}) {
    
    return(
        <div className="container">
            <p>Books:</p>
            <span>{name} by {author}, genre {genre} published on {creationDate}</span>
        </div>
    )
}
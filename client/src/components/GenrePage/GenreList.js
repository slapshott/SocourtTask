import React, { Component } from 'react';
import { getAllGenres } from '../../api/remote'
import GenreCard from './GenreCard'

export default class GenreList extends Component {
    constructor(props){
        super(props)

        this.state = {
            genres: []
        }
    }

    componentDidMount(){
        this.getGenres()
    }

    async getGenres(){
        const genres = await getAllGenres()
        this.setState({genres: genres})
    }



    render(){
        let genres = this.state.genres
        return(
            <div>
                <p>Genres: </p>
                {genres.map((g,i) => {
                    return <GenreCard
                            name={g.name}
                            creationDate={g.creationDate}
                            lastUpdate={g.lastUpdate}
                            key={i}
                        />
                })}
            </div>
        )
    }
}
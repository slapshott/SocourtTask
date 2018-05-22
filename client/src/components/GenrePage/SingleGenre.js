import React, { Component } from 'react';
import { getGenreById } from '../../api/remote'


export default class SingelGenre extends Component {

    constructor(props){
        super(props)

        this.state = {
            genre:{}
        }
    }

    componentDidMount(){
        this.getGenre()
    }

    async getGenre(){
        let id = Number(this.props.match.params.id)
        const genre = await getGenreById(id)
        this.setState({genre: genre})
    }

    render(){
        return(
            <div className="container">Genre {this.state.genre.id}</div>
        )
    }
} 

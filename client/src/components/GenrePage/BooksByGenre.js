import React, { Component } from 'react';
import { getBookByGenre } from '../../api/remote'


export default class BooksByGenre extends Component {

    constructor(props){
        super(props)

        this.state = {
            books:{}
        }
    }

    componentDidMount(){
        this.bookByGenre()
    }

    async bookByGenre(){
        const genre = this.props.match.params.id
        console.log(this.props.match.params)
        const books = await getBookByGenre(genre)
        this.setState({books: books})
        console.log(this.state.books)
    }

    render(){
        const genre = this.props.match.params.id
        const books = Object.values(this.state.books);
        return(
            <div className="container">
                <p> {genre} books: </p>
                <ul>
                    {books.map(b => {
                        return  <li key={b._id}> {b.name} by {b.author} </li>
                    })}
                </ul>
            </div>
        )
    }
} 

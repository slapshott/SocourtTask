import React, { Component } from 'react'
import { getAllBooks } from '../../api/remote'
import BookCard from './BookCard'

export default class BookList extends Component {

    constructor(props){
        super(props)

        this.state = {
            books: [],   
        }
    }   

    componentDidMount(){
        this.getBooks()
    }

    async getBooks(){
        let books = await getAllBooks() 
        this.setState({books: books})
    }

    render(){
        let books = (this.state.books)
        return(
            <div>
                <p>Books:</p>
                {books && books.map((b,i) => {
                    return <BookCard
                            name={b.name}
                            author={b.author}
                            genre={b.genre}
                            creationDate={b.creationDate}
                            lastUpdate={b.lastUpdate}
                            id={b._id}
                            key={i}
                        />
                })}
                
            </div> 
        )

    }
} 

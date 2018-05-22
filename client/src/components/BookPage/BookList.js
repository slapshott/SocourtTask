import React, { Component } from 'react'
import { getAllBooks } from '../../api/remote'
import BookCard from './BookCard'


export default class BookList extends Component {

    constructor(props){
        super(props)

        this.state = {
            books: []   
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
        let books = Object.values(this.state.books)
        return(
            <div>
                {books.map((b,i) => {
                    return <BookCard
                            name={b.name}
                            author={b.author}
                            genre={b.genre}
                            creationDate={b.creationDate}
                            lastUpdate={b.lastUpdate}
                            key={i}
                        />
                })}
            </div> 
        )
    }
} 

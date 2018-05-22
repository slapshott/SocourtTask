import React, { Component } from 'react'
import { getAllBooks } from '../../api/remote'
import BookCard from './BookCard'
import SearchBook from './SearchBook'

export default class BookList extends Component {

    constructor(props){
        super(props)

        this.state = {
            books: [], 
            search: ''  
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)    
    }   

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
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
                <form >
                <input 
                    onChange={this.onChange}
                    name='search'
                    value={this.state.search}
                    className= "searchField"
                /> 
                </form>
                <SearchBook
                    name={this.state.search}
                    />
            </div> 
        )
    }
} 

import React, { Component } from 'react'
import { getAllBooks } from '../../api/remote'
export default class BookPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            books: []
        }
    }

    componentWillMount(){
        this.getBooks()
    }

    componentDidMount(){
        this.getBooks()
    }

    async getBooks(){
        const books = await getAllBooks()
        console.log(books)
    }

    render(){
        return(
          <div>Book</div>  
        )
    }
} 

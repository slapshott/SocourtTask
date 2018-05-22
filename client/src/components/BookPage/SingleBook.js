import React, { Component } from 'react';
import { getBookById } from '../../api/remote'


export default class SingelBook extends Component {

    constructor(props){
        super(props)

        this.state = {
            book:{}
        }
    }

    componentDidMount(){
        this.getBook()
    }

    async getBook(){
        let id = Number(this.props.match.params.id)
        const book = await getBookById(id)
        this.setState({book: book})
    }

    render(){
        return(
            <div className="container">Book {this.state.book.id}</div>
        )
    }
} 

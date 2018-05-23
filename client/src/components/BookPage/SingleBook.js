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
        console.log(this.state.book)
    }

    render(){
        return(
            <div className="container">
                <p> 
                    
                    <span>
                    Book name:
                        {this.state.book.name}
                    </span><br/>
                    <span>
                        Author:
                        {this.state.book.author}
                    </span><br/>
                    <span>
                        Genre:
                        {this.state.book.genre}
                    </span><br/>
                    <span>
                        Date of creation:
                        {this.state.book.creationDate}
                    </span><br/>
                    <span>
                        last updated:
                        {this.state.book.lastUpdate}
                    </span><br/>
                </p>
            </div>
        )
    }
} 

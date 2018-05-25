import React, { Component } from 'react';
import { searchBookByName } from '../../api/remote'
import { Link } from 'react-router-dom';

export default class BookByName extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name: '',
            book: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
        this.getData()
    }

    async getData(){
        const res = await searchBookByName(this.state.name)
        this.setState({book:res})
        console.log(res)
        console.log(this.state.book)
    }


    render(){
        let book = this.state.book[0]
       
        return(
            <div className="container"> 
                <form onSubmit={this.onSubmit}>
                <input
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                />
                <input type="submit" value="Search" />
                </form>
                {book && <p>
                            <span>{book.name} by {book.author}</span><br/>
                            {book && <Link to={'/api/book/' + book._id}>View Details</Link>}
                        </p>}
            </div>
        )
    }
}
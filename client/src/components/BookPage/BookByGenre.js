import React, { Component } from 'react';
import { searchBookByGenre } from '../../api/remote'
import { Link } from 'react-router-dom';

export default class BookByGenre extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            genre: '',
            books: ''
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
        const res = await searchBookByGenre(this.state.genre)
        console.log(res)
        this.setState({books:res})
    }


    render(){
        let books = this.state.books
       
        return(
            <div className="container"> 
                <form onSubmit={this.onSubmit}>
                <input
                    name="genre"
                    onChange={this.onChange}
                    value={this.state.genre}
                />
                <input type="submit" value="Search" />
                </form>
                {books && books.map(b => {
                    return <p key={b._id}>
                                <span >{b.name} by {b.author}</span><br/>
                                <Link to={'/api/book/' + b._id}>View Details</Link>
                            </p>
                })}
            </div>
        )
    }
}
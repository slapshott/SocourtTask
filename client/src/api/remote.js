const host = 'http://localhost:5000/';

async function register(name, password) {
    try{
        const res = await fetch(host + 'register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                password
            })
        });
        return await res.json();
    }catch(e){
        console.log(e)
    }   
}

async function login(name, password) {
    try{
        const res = await fetch(host + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                password
            })
        });
        return await res.json();
    }catch (e){
        return e
    }    
}

async function getAllBooks(){
    try{
        const res = await fetch(host + 'api/books')
        return await res.json()
    }catch(e){
        console.log(e)
    }
}

async function getAllGenres(){
    try{
        const res = await fetch(host + 'api/genres')
        return await res.json()
    }catch(e){
        console.log(e)
    }
}

async function getBookById(id){
    try{
        const res = await fetch(host + 'api/book/' + id)
        return await res.json()
    }catch(e){
        console.log(e)
    }   
}

async function getBookByGenre(id){
    try{
        const res = await fetch(host + 'api/genre/' + id)
        return await res.json()
    }catch(e){
        console.log(e)
    }
}

async function createBook(name,author,genre,createDate,lastUpdate){
    try{
        const res = await fetch(host + 'api/createBook' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                author,
                genre,
                createDate,
                lastUpdate
            })
        })
        return await res.json()
    }catch(e){
        return e
    }
}

async function searchByGenre(){
    try{
        const res = await fetch(host + 'api/genres/search')
        return await res.json()
    }catch(e){
        console.log(e)
    }
}

export { 
    register, 
    login, 
    getAllBooks, 
    getAllGenres, 
    getBookById, 
    getBookByGenre, 
    createBook, 
    searchByGenre 
};
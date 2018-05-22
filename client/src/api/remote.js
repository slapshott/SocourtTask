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
    }catch(err){
        console.log(err)
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
    }catch (err){
        return err
    }    
}

async function getAllBooks(){
    try{
        const res = await fetch(host + 'api/books')
        return await res.json()
    }catch(err){
        console.log(err)
    }
}

async function getAllGenres(){
    try{
        const res = await fetch(host + 'api/genres')
        return await res.json()
    }catch(err){
        console.log(err)
    }
}

async function getBookById(id){
    try{
        const res = await fetch(host + 'api/book/' + id)
        return await res.json()
    }catch(err){
        console.log(err)
    }   
}

async function getGenreById(id){
    try{
        const res = await fetch(host + 'api/genre/' + id)
        return await res.json()
    }catch(err){
        console.log(err)
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
    }catch(err){
        return err
    }
}

export { register, login, getAllBooks, getAllGenres, getBookById, getGenreById, createBook };
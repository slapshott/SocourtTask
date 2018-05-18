const host = 'http://localhost:5000/';

async function register(name, email, password) {
    const res = await fetch(host + 'register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    return await res.json();
}

async function login(email, password) {
    const res = await fetch(host + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await res.json();
}

async function getAllBooks(){
    try{
        const res = await fetch(host + 'api/books')
        return await res.json()
    }catch(err){
        console.log(err)
    }

}

export { register, login, getAllBooks };
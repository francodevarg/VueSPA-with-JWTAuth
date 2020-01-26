import Axios from "axios";

export function login(credentials){
    return new Promise((res,rej) =>
        {
            Axios.post('/api/auth/login', credentials)
                .then( (response) =>{
                    res(response.data);
                })
                .catch( (err) => {
                    rej("Wrong email or password");
                });
        });//fin de Promise
}

/*
* Esta función es para chequear el token en el
* navegador para no tener que pedir de nuevo 
* las credenciales(email,password) para saber
* si esta autenticado.
*/
export function getLocalUser(){
    const userStr = localStorage.getItem("user");

    if(!userStr){
        return null;
    }
    return JSON.parse(userStr);
}
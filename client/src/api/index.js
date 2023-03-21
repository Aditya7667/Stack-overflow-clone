import axios from 'axios'

const API = axios.create({baseURL : 'http://locathost:5000'})

export const logIn = (authData) => API.post('/user/login',authData);
export const signUp = (authData) => API.post('/user/signup ',authData);

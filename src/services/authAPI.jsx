import axios from "axios";

export const login = (formData) => axios.post( 'http://localhost:3000/api/auth', formData);
export const signUp = (formData) => axios.post( 'http://localhost:3000/api/users', formData);
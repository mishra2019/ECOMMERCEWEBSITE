 import axios from 'axios';
const url = ""
 export const authenticationSignup = async(user) =>{
    try {
        return await axios.post(`${url}/signup`,user)

    } catch (error) {
        console.log('Error while calling signup api');
    }
 }

 export const authenticateLogin = async(user) =>{
     try {
         return await axios.post(`${url}/login`,user)
     } catch (error) {
         console.log("Error",error.message);
     }
 }

 export const payUsingPaytm = async(data) =>{
     try {
        let response = await axios.post(`${url}/paytm`,data);
        return response.data;
         
     } catch (error) {
         console.log("Error while calling paytm api", error);
     }
 }
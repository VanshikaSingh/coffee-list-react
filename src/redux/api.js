import axios from "axios";

export const loadCoffeeApi = async (arg) =>{
   let data =  await axios.get(`https://random-data-api.com/api/coffee/random_coffee/?size=50`) //${arg}
   return data
}
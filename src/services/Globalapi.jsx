import axios from 'axios'

const key = "random";
const axioscreate = axios.create({
    baseURL:"https://dummyjson.com",
})

const productlist = axioscreate.get('/products');

export default { productlist };
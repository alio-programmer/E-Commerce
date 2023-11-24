import axios from 'axios'

const key = "random";
const axioscreate = axios.create({
    baseURL:"https://dummyjson.com",
})

const productlist = axioscreate.get('/products').then((resp)=>{
    return resp.data.products;
});
const getproductbyid = (id) => axioscreate.get('/products/'+ id);

export default { productlist, getproductbyid };
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import ProductList from './components/product/ProductList';


const routes = [
    {
        path: '/',
        components: ProductList
        
    }
];

export const router = new VueRouter({
    mode:'history',
    routes,
    
});


  
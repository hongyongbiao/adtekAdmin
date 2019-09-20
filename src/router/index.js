import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

import Banner from './../pages/Section/Banner/Banner'
import Product from './../pages/Section/Product/Product'
import New from './../pages/Section/New/New'
import Personal from './../pages/Section/Personal/Personal'
import SystemSetup from './../pages/Section/SystemSetup/SystemSetup'
import AddBanner from './../pages/Section/AddBanner/AddBanner'
import ProductList from './../pages/Section/Product/ProductList'

export default new vueRouter({
    routes:[
        {path:'/banner',component:Banner},
        {path:'/product',component:Product},
        {path:'/new',component:New},
        {path:'/personal',component:Personal},
        {path:'/syssetup',component:SystemSetup},
        {path:'/addbanner',component:AddBanner},
        {path:'/productlist',component:ProductList},
        {path:'/',redirect:'/banner'}
        
    ]
})
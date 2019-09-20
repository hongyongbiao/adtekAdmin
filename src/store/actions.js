import {
    getBanner, 
    removeBanner,
    getProduct,
    removeProduct
} from '../api/index'

import {
    GET_BANNER,
    REMOVE_BANNER,
    GET_PRODUCT,
    REMOVE_PRODUCT
} from './mutation-type'
export default{
    //获取banner
    async reqGetBanner({commit}){
        const result= await getBanner()
        commit(GET_BANNER,{getbanner:result.message})
    },

    //删除banner
    async remBanner({commit},params){
        //console.log(params)
        const result=await removeBanner(params)
        commit(REMOVE_BANNER,{removebanner:result.message})
    },

    //产品列表
    async reqProduct({commit}){
        const result=await getProduct()
        commit(GET_PRODUCT,{getproduct:result.message})
    },
    
    //删除产品
    async removeProduct({commit},params){
        const result = await removeProduct(params)
        commit(REMOVE_PRODUCT,{removeproduct:result})
    }

}
import {
    GET_BANNER,
    REMOVE_BANNER,
    GET_PRODUCT,
    REMOVE_PRODUCT
} from './mutation-type'

export default{
    //获取banner
    [GET_BANNER](state,{getbanner}){
        state.getbanner=getbanner
    },

    //删除banner
    [REMOVE_BANNER](state,{removebanner}){
        state.removebanner=removebanner
    },

    //产品列表
    [GET_PRODUCT](state,{getproduct}){
        state.getproduct=getproduct
    },

    //删除产品
    [REMOVE_PRODUCT](state,{removeproduct}){
        state.removeproduct=removeproduct
    }
    
}
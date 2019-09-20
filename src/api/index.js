import ajax from './ajax'

const BASE_URL='/api'
//banner图
export const getBanner=()=>ajax(BASE_URL+'/store/getbanner')

//删除banner图

export const removeBanner=(params)=>ajax(BASE_URL+'/store/movebanner',params)

//产品列表

export const getProduct=()=>ajax(BASE_URL+'/goods/list')

//删除产品

export const removeProduct=(params)=>ajax(BASE_URL+'/goods/remove',params)

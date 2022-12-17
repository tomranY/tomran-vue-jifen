//封装接口
import request from "./request"
import qs from 'qs'

//获取精品推荐
export const JinPinAPI=()=>request.get('/products/recommend');

//获取热门推荐
export const ReMenAPI=()=>request.get('/products/hot');

//获取商品详情
export const GoodsDetailAPI=(id)=>request.get('/products/'+id);
// export const GoodsDetailAPI=(id)=>request.get(`/products/${id}`);

//全部礼品****搜索商品params
export const GoodsSearchAPI=(params)=>request.get('/products',{params});

//手机登录的API
export const PhoneLoginAPI=(param)=>request.post('/phoneRegin',qs.stringify(param));

//获取用户信息
export const userProfilesAPI=()=>request.get('/shop/userProfiles');

//加入购物车
export const addCartsAPI=(params)=>request.post('shop/carts/add',qs.stringify(params))

//查看购物车
export const shopCartAPI=()=>request.get('/shop/carts');

//删除购物车的商品
export const deleteProductAPI=(id)=>request.delete(`/shop/carts/?productIds=${id}`);

//用户签到查询
export const signInsAPI=()=>request.get('/shop/signIns');

import request from '@/utils/axios';


interface IResponseType<P = {}> {
  code?: number;
  status: number;
  msg: string;
  data: P;
}
interface ILogin {
  token: string;
  expires: number;
}
export const indexGetInfo = (params: object) => {
  return request({
    url: '',
    params
  });
};
//得到一日三餐
export const indexByDish = (params: object) => {
  return request({
    url: '/api/index/dish',
    params
  });
};
//最新最热
export const indexByRecommended = (params: object) => {
  return request({
    url: '/api/index/recommended',
    params
  });
};
//每日推荐
export const indexByDateRecommended = () => {
  return request({
    url: '/api/index/dateRecommended'
  });
};



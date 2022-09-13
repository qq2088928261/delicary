import request from '@/utils/axios';

/**
 * 登录
 */

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
export const loginByJson = (data: object) => {
    return request({
        url: '/dish/login',
        method: 'post',
        data
    });
};
export const loginByRegister = (data: object) => {
    return request({
        url: '/api/auth/loginByJson',
        method: 'post',
        data
    });
};
export const createToken = () => {
    return request({
        url: '/api/auth/loginByJson',

    });
};

export const getSetting = () => {
    return request<IResponseType<ILogin>>({
        url: '/api/auth/loginByJson',
        method: 'post',
    });
};


import { instance } from './index';

export const registerBank = (userInfo) => {
  console.log('계좌정보 등록 : ', userInfo);
  return instance.post('/signup', userInfo);
};

export const getLoginInfo = () => {
  return instance.get('/login/callback');
};

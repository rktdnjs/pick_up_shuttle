import { http, HttpResponse } from 'msw';
import REQUEST_STUDENTCARD_UPLOAD from '../data/studentCardUploadData';

const studentCardUploadHandlers = [
  // POST 요청에 대한 핸들러
  http.post('/mypage/image/url', () => {
    // 여기서는 단순히 200 상태 코드와 함께 가짜 데이터를 응답
    console.log('Mocking : 학생증 전송, 학생 인증 신청 완료');
    return HttpResponse.json(REQUEST_STUDENTCARD_UPLOAD);
  }),
];

export default studentCardUploadHandlers;

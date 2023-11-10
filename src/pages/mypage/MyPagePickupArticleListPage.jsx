import React, { useEffect } from 'react';
import OtherNav from '@components/atoms/nav/OtherNav';
import MyPagePickupArticleCards from '@components/molecules/MyPagePickupArticleCards';
import { useQuery } from '@tanstack/react-query';
import { getPickupArticles } from '@/apis/article';

const PickupArticlePage = () => {
  // 픽업한 공고글 목록 조회(마이페이지) 요청
  // 데이터를 받아와서 공고글 목록을 articles 변수에 담고
  // MyPagePickupArticleCards로 articles를 props로 넘겨주면 끝
  const { data } = useQuery(['getPickupArticles'], () => getPickupArticles());
  const articles = data?.response?.content;

  // useQuery data 디버깅용
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center text-xl text-blue my-6">수락한 공고글</div>
      <div className="h-[600px] overflow-y-auto overflow-x-hidden">
        <MyPagePickupArticleCards articles={articles} />
      </div>
    </div>
  );
};

export default PickupArticlePage;
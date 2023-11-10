/* eslint-disable */
import { useEffect, useState } from 'react';
import WriterMatch from '@components/templates/articleDetail/WriterMatchTemplate';
import WriterNoMatch from '@components/templates/articleDetail/WriterNoMatchTemplate';
import PickerMatch from '@components/templates/articleDetail/PickerMatchTemplate';
import PickerNoMatch from '@components/templates/articleDetail/PickerNoMatchTemplate.jsx';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getArticleDetail } from '@/apis/articleDetail.js';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery([`article/${id}`], () => getArticleDetail(id));
  const article = data?.data.response;

  // useQuery data 디버깅용
  useEffect(() => {
    console.log(data);
  }, [data]);

  /* eslint no-else-return: "error" */
  const showDetailPage = (article) => {
    // 작성자이고 매칭됐을 때
    if (article.isRequester && article.isMatch) {
      return <WriterMatch response={article} />;
      // 작성자이고 매칭 안됐을 때
    } else if (article.isRequester && !article.isMatch) {
      return <WriterNoMatch response={article} />;
      // 피커이고 매칭 됐을 때
    } else if (!article.isRequester && article.isMatch) {
      return <PickerMatch response={article} />;
    }
    // 피커이고 매칭 안됐을 때
    return <PickerNoMatch response={article} />;
  };

  return (
    <div className="page--layout">
      <div>{showDetailPage(article)}</div>
    </div>
  );
};

export default ArticleDetailPage;
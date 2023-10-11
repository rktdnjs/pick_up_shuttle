import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OtherNav from '../components/atoms/OtherNav';
import BtnNavigate from '../components/molecules/BtnNavigate';
import OrderInfo from '../components/templates/OrderInfo';
import OrderRequest from '../components/templates/OrderRequest';
import OrderDeadLine from '../components/templates/OrderDeadLine';
import CircleNavigate from '../components/organisms/CircleNavigate';

const PostWritePage = () => {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(1);
  let currentPage;

  const handlePrev = () => {
    if (focus > 1) {
      setFocus((prev) => prev - 1);
    } else {
      navigate(-1);
    }
  };

  const handleNext = () => {
    if (focus < 3) {
      setFocus((prev) => prev + 1);
    }
  };

  switch (focus) {
    case 1:
      currentPage = <OrderInfo />;
      break;
    case 2:
      currentPage = <OrderRequest />;
      break;
    case 3:
      currentPage = <OrderDeadLine />;
      break;
    default:
      currentPage = null;
  }

  return (
    <div className="page--layout flex flex-col justify-between">
      <div className="flex flex-col justify-start">
        <OtherNav />
        <CircleNavigate navigate={focus} />
        <div className="p-[35px]">{currentPage}</div>
      </div>
      <div className="mb-8">
        <BtnNavigate handlePrev={handlePrev} handleNext={handleNext} />
      </div>
    </div>
  );
};

export default PostWritePage;
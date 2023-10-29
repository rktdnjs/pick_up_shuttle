import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '../atoms/Button';
import banks from '../../constant/bank';
import ErrorMsg from '../atoms/ErrorMsg';
import routes from '../../constant/routes';
import { bankInvalidMessage } from '../../utils/alert';

const BankForm = () => {
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [formValid, setFormValid] = useState(false);

  // 계좌 은행을 선택할 때 호출될 함수
  const handleBankChange = (e) => {
    setBank(e.target.value);
  };

  // 계좌 번호를 입력할 때 호출될 함수
  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  // 폼을 제출할 때 호출될 함수
  const handleSubmit = () => {
    if (formValid) {
      // 입력 정보 post 처리 이후 홈 페이지 이동(회원가입 완료)
      console.log('계좌 은행:', bank);
      console.log('계좌 번호:', accountNumber);
    } else {
      Swal.fire(bankInvalidMessage);
    }
  };

  // 계좌 은행 혹은 계좌 번호가 입력될 때 값의 입력 유무를 판단
  useEffect(() => {
    if (bank.trim() !== '' && accountNumber.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [bank, accountNumber]);

  return (
    <div>
      <div className="text-[12px] mb-[6px]">계좌정보 *</div>
      <div className="h-[450px]">
        <div className="flex mb-[2px]">
          <select
            className="w-[75px] h-[35px] rounded-lg border border-[#858585] mr-[15px] text-[10px]"
            onChange={handleBankChange}
          >
            <option value="">은행 선택</option>
            {banks.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            className="w-[180px] h-[35px] rounded-lg border border-[#858585] text-[10px] pl-[10px]"
            type="text"
            placeholder="계좌 번호 입력"
            value={accountNumber}
            onChange={handleAccountNumberChange}
          />
        </div>
        {!formValid && <ErrorMsg />}
      </div>
      <div className="text-center">
        <Button width="w-[270px]" onClick={handleSubmit}>
          회원가입
        </Button>
        <div className="mt-[10px] text-[10px] text-[#8C8C8C]">
          이미 계정이 있으신가요?{' '}
          <Link to={routes.login}>
            <span className="text-black cursor-pointer">로그인</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BankForm;
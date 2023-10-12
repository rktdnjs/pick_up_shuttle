import { useState } from 'react';
import shortId from 'shortid';
import Labels from '../molecules/Labels';
import SelectInput from '../atoms/SelectInput';
import Input from '../atoms/Input';
import PlusMinusBtn from '../molecules/PlusMinusBtn';

const OrderInfo = () => {
  const [drinkInput, setDrinkInput] = useState([]);

  const handleAddInput = () => {
    setDrinkInput((prevDrinkInput) => [
      ...prevDrinkInput,
      <Input id="drink" width="w-[15rem]" placeholder="아이스 아메리카노 1잔" />,
    ]);
  };

  const handleMinusInput = () => {
    if (drinkInput.length > 0) {
      setDrinkInput(drinkInput.slice(0, -1));
    }
  };

  return (
    <>
      <div className="mt-6 mb-12">
        <Labels
          htmlFor="cafe"
          label="주문할 매장은 어디인가요? *"
          subLabel="음료를 주문할 매장을 정확하게 입력해주세요."
        />
        <SelectInput id="cafe" className="mb-10" />
      </div>
      <div className="mt-6 mb-12">
        <Labels htmlFor="drink" label="어떤 음료를 주문하실건가요? *" subLabel="주문할 음료를 정확하게 입력해주세요." />
        <div className="flex flex-col">
          <div className="flex items-center">
            <Input id="drink" width="w-[15rem]" placeholder="아이스 아메리카노 1잔" />
            <PlusMinusBtn handlePlus={handleAddInput} handleMinus={handleMinusInput} />
          </div>
          {drinkInput.map((item) => (
            <div key={shortId.generate()}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderInfo;

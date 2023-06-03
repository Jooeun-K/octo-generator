import { MouseEvent } from "react";
import CalcButton from "./CalcButton/CalcButton";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const onClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.dataset.value);
  };

  return (
    <div className={styles.calculatorBody}>
      <div className={styles.buttonPad}>
        <CalcButton value="1" onClick={onClickButton} />
        <CalcButton value="2" onClick={onClickButton} />
        <CalcButton value="3" onClick={onClickButton} />
        <CalcButton value="4" onClick={onClickButton} />
        <CalcButton value="5" onClick={onClickButton} />
        <CalcButton value="6" onClick={onClickButton} />
        <CalcButton value="7" onClick={onClickButton} />
        <CalcButton value="8" onClick={onClickButton} />
        <CalcButton value="9" onClick={onClickButton} />
        <CalcButton value="*" onClick={onClickButton} />
        <CalcButton value="0" onClick={onClickButton} />
        <CalcButton value="#" onClick={onClickButton} />
      </div>
    </div>
  );
};

export default Calculator;

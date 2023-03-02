import './NumberInput.scss'
import { SetStateAction } from "react";


export interface NumberInputProps {
  label: string;
  value: number;
  setValue: React.Dispatch<SetStateAction<number>>;
}

const NumberInput: React.FC<NumberInputProps> = (props) => {

  return (
    <div className="number-input-container">
      <div className='number-input-label'>
        <label>{props.label}</label>
      </div>
      <input
        type="number"
        value={props.value}
        onChange={(event) => { props.setValue(Number(event.target.value)) }}
      />
    </div>
  )
};

export default NumberInput;

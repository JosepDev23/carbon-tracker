import './TextInput.scss'
import { SetStateAction } from "react";

export interface TextInputProps {
  label: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
}

const TextInput: React.FC<TextInputProps> = (props) => {

  return (
    <div className='text-input-container'>
      <label className="input">
        <input className="input__field" type="text" placeholder=" " value={props.value}
          onChange={(e) => {
            props.setValue(e.target.value)
          }}
        />
        <span className="input__label">{props.label}</span>
      </label>
    </div>
  )
};

export default TextInput;

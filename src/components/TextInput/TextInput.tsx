import { SetStateAction } from "react";


export interface TextInputProps {
  label: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
}

const TextInput: React.FC<TextInputProps> = (props) => {

  return (
    <div className="text-input-container">
      <label>{props.label}</label>
      <input
        type="text"
        value={props.value}
        onChange={(event) => {props.setValue(event.target.value)}}
      />
    </div>
  )
};

export default TextInput;

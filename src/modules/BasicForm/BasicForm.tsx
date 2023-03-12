import { Dispatch, SetStateAction, useState } from 'react';
import NumberInput from '../../components/NumberInput/NumberInput';
import TextInput from '../../components/TextInput/TextInput';
import { Directions } from '../../models/Directions';
import './BasicForm.scss'


export interface BasicFormProps {
  setDirections: Dispatch<SetStateAction<Directions>>;
  setConsumption: Dispatch<SetStateAction<number>>;
}

const BasicForm: React.FC<BasicFormProps> = (props) => {

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [consumption, setConsumption] = useState(0);

  const handleSubmit = () => {
    props.setDirections({ origin: origin, destination: destination })
  }

  return (
    <div className='basic-form-container'>
      <form
        onSubmit={handleSubmit}
      >
        <div className='basic-form-content'>
          <TextInput
            label='Origin'
            value={origin}
            setValue={setOrigin}
          />
          <TextInput
            label='Destination'
            value={destination}
            setValue={setDestination}
          />
          <NumberInput
            label='Consumption'
            value={consumption}
            setValue={setConsumption}
          />
          <button
            className='button-calculate'
            type='submit'
          >
            Calculate your emissions!
          </button>
        </div>
      </form>
    </div>
  )
}

export default BasicForm;
import { useState } from 'react';
import NumberInput from '../../components/NumberInput/NumberInput';
import TextInput from '../../components/TextInput/TextInput';
import './BasicForm.scss'


const BasicForm: React.FC = () => {

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [consumption, setConsumption] = useState(0);

  return (
    <div className='basic-form-container'>
      <form>
        <h1>YourTrip</h1>
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
        </div>
      </form>
    </div>
  )
}

export default BasicForm;
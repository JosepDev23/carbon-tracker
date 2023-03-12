import './Landing.scss';
import BasicForm from '../BasicForm/BasicForm';
import Map from '../../components/Map/Map'
import { useState } from 'react';
import { Directions } from '../../models/Directions';


const Landing: React.FC = () => {

  const [directions, setDirections] = useState<Directions>({
    origin: '',
    destination: ''
  })
  const [consumption, setConsumption] = useState(0);

  return (
    <div className='landing-container'>
      <div className='landing-background'>
        <Map 
          directions={directions}
        />
      </div>
      <div className='landing-top-card'>
        <BasicForm
          setDirections={setDirections}
          setConsumption={setConsumption}
        />
      </div>
      <div className='landing-bot-card'>

      </div>
    </div>
  )
};

export default Landing;
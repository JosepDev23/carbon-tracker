import './Landing.scss';
import BasicForm from '../BasicForm/BasicForm';
import Map from '../../components/Map/Map'


const Landing: React.FC = () => {

  return (
    <div className='landing-container'>
      <div className='landing-background'>
        <Map />
      </div>
      <div className='landing-card'>
        <BasicForm />
      </div>
    </div>
  )
};

export default Landing;
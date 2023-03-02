import './Landing.scss';
import BasicForm from '../BasicForm/BasicForm';
import Map from '../../components/Map/Map'


const Landing: React.FC = () => {

  return (
    <div className='landing-container'>
      <div className='landing-left'>
        <BasicForm />
      </div>
      <div className='landing-right'>
        <Map />
      </div>
    </div>
  )
};

export default Landing;
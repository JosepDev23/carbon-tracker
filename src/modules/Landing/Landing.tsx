import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';
import BasicForm from '../BasicForm/BasicForm';
import './Landing.scss'


const Landing: React.FC = () => {

  return (
    <div className='landing-container'>
      <div className='landing-left'>
        <BasicForm />
      </div>
      <div className='landing-right'>
        <GoogleMaps />
      </div>
    </div>
  )
};

export default Landing;
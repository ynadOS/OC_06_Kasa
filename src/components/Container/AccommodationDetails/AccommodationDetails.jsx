import { useParams } from 'react-router-dom';
import data from '../../../data/logements.json';

const AccommodationDetails = () => {
  const { id } = useParams();
  console.log("Params:", id);
  const accommodation = data.find((item) => item.id === id);

  if (!accommodation) {
    return <div>Accommodation not found</div>;
  }

  return (
    <div>
      <h2>{accommodation.title}</h2>
      {/* Display other details of the accommodation */}
    </div>
  );
};

export default AccommodationDetails;

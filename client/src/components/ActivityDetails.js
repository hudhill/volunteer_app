import Collapsible from 'react-collapsible';
import '../css/ActivityDetails.css';

const ActivityDetails = ({ activity, apply, applied }) => {

  const datetime = new Date(activity.datetime)
  return (
    <div className="activity-detail">
      <h1>{activity.title}</h1>
      <h4>Charity: {activity.charity.name}</h4>
      <p>Location: {activity.location.description}</p>
      <p>Date: {datetime.toDateString()} </p>
      <p>Time: {datetime.toLocaleTimeString()}</p>
      
      <p>Duration: {activity.duration}</p>
      <Collapsible trigger={<button>More Details</button>}>
        <p>{activity.description}</p>
        {applied ? (
          <div>APPLIED</div>
        ) : (
          <button onClick={() => apply(activity)} className="button">Apply Now!</button>
        )}
      </Collapsible>
      <hr/>
    </div>
  );
};

export default ActivityDetails;

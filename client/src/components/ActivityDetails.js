import Collapsible from "react-collapsible";
import "../css/ActivityDetails.css";
import UserContext from "../context/userContext.js";
import { haveIApplied } from "../helpers/helpers";

const ActivityDetails = ({ activity, apply, setActivities }) => {
  const datetime = new Date(activity.datetime);
  return (
    <div className="activity-detail">
      <h1>{activity.title}</h1>
      <h4>Charity: {activity.charity.name}</h4>
      <p>Location: {activity.location.description}</p>
      <p>Date: {datetime.toDateString()} </p>
      <p>Time: {datetime.toLocaleTimeString()}</p>

      <p>Duration: {activity.duration}</p>
      <UserContext.Consumer>
        {(user) => {
          if (!user) return "loading";
          return (
            <Collapsible trigger={<button>More Details</button>}>
              <p>{activity.description}</p>
              {haveIApplied(activity, user) ? (
                <div>APPLIED</div>
              ) : (
                <button
                  onClick={() =>
                    apply(activity, user).then((data) => setActivities(data))
                  }
                  className="button"
                >
                  Apply Now!
                </button>
              )}
            </Collapsible>
          );
        }}
      </UserContext.Consumer>
      <hr />
    </div>
  );
};

export default ActivityDetails;

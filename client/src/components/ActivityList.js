import React from "react";
import ActivityDetails from "./ActivityDetails";
const ActivityList = ({ activities, setActivities }) => {

  const activitiesList = activities.map((activity) => {
    return (
      <ActivityDetails
        key={activity._id}
        activity={activity}
        setActivities={setActivities}
      />
    );
  });

  return <div>{activitiesList}</div>;
};

export default ActivityList;

import React from "react";
import ActivityDetails from "./ActivityDetails";
const ActivityList = ({ activities, setActivities }) => {

  const activitiesList = activities.map((activity, index) => {
    return (
      <ActivityDetails
        key={index}
        activity={activity}
        setActivities={setActivities}
      />
    );
  });

  return <div>{activitiesList}</div>;
};

export default ActivityList;

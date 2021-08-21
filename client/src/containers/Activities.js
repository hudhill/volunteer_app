import { useState, useEffect } from "react";
import "../css/Activities.css";
import SearchBar from "../components/SearchBar";
import ActivityList from "../components/ActivityList";
import ActivityMap from "../components/ActivityMap";
import { getActivities, updateActivity } from "../services/ActivitiesService";
import { getCharities } from "../services/CharitiesService";

const Activities = ({ user }) => {
  const [activities, setActivities] = useState([]);
  const [charities, setCharities] = useState([]);
  const [listView, setListView] = useState(true);
  const [charity, setCharity] = useState("all");

  useEffect(() => {
    getActivities().then((activities) => {
      setActivities(activities);
    });
    getCharities().then((charities) => {
      setCharities(charities);
    });
  }, []);

  function filterActivitiesByCharity(activities, charityId) {
    if (charity === "all") return activities;
    return activities.filter((activity) => activity.charity._id === charityId);
  }

  function apply(activity) {
    let applications = [...activity.applications];
    applications = applications.map((application) => {
      return { status: application.status, user: application.user._id };
    });
    const newActivity = { applications };
    newActivity.applications.push({ status: "pending", user: user._id });
    updateActivity(activity._id, newActivity).then(() =>
      getActivities().then((data) => {
        setActivities(data);
      })
    );
  }

  if (!user) return "loading...";
  return (
    <>
      <SearchBar
        charities={charities}
        setCharity={setCharity}
      />
      <div>
        <div className="map-button">
          <button onClick={() => setListView(!listView)}>
            {listView ? "Map View" : "List View"}
          </button>
        </div>
      </div>
      {listView ? (
        <ActivityList
          user={user}
          apply={apply}
          activities={filterActivitiesByCharity(activities, charity)}
        />
      ) : (
        <ActivityMap
          user={user}
          apply={apply}
          activities={filterActivitiesByCharity(activities, charity)}
        />
      )}
    </>
  );
};

export default Activities;

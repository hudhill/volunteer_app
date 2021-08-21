import { useState, useEffect } from "react";
import "../css/Activities.css";
import SearchBar from "../components/SearchBar";
import ActivityList from "../components/ActivityList";
import ActivityMap from "../components/ActivityMap";
import { getActivities } from "../services/ActivitiesService";
import { getCharities } from "../services/CharitiesService";

const Activities = () => {
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
          activities={filterActivitiesByCharity(activities, charity)}
          setActivities={setActivities}
        />
      ) : (
        <ActivityMap
          activities={filterActivitiesByCharity(activities, charity)}
          setActivities={setActivities}
        />
      )}
    </>
  );
};

export default Activities;

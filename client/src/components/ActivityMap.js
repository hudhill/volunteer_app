import React from 'react';
import {MapContainer, Circle, TileLayer, Marker, Popup} from 'react-leaflet';
import { haveIApplied } from '../helpers/helpers';
import {Popup as Pup} from 'reactjs-popup';
import '../css/ActivityMap.css'

const ActivityMap = ({activities, apply, user}) => {

  return (
    <div>
      <MapContainer
        center={[55.947762, -3.189037]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[55.947762, -3.189037]} radius={2000} />

        {activities.map(
          activity => {
            const applied = haveIApplied(activity, user)
            const datetime = new Date(activity.datetime)
            return (
              <Marker
                key={activity._id}
                title={activity.title}
                position={activity.location.coordinates}
              >
                <Popup>
                  <h3>{activity.title}</h3>
                  <h4>Charity: {activity.charity.name}</h4>
                  <p>Date: {datetime.toDateString()}</p>
                  <p>Time: {datetime.toLocaleTimeString()}</p>
                  <p>Duration: {activity.duration}</p>
                  <p>Location: {activity.location.description}</p>
                  <Pup trigger={<button>More Details</button>} position="top center" className="pup">
                    <p>{activity.description}</p>
                    {applied ? <div>APPLIED</div> : <button onClick={() => apply(activity)}>Apply Now!</button>}
                  </Pup>
                </Popup>
              </Marker>
            )
          }
        )}

      </MapContainer>
    </div>
  );
}

export default ActivityMap;
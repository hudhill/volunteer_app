import { useState } from "react";
import { postActivity } from "../services/ActivitiesService";
import Collapsible from "react-collapsible";

const ActivityForm = ({addActivity, charity}) => {
    
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState(
      {"charity": charity})

    const onChange = (e) =>{
      formData[e.target.id] = e.target.value;
      setFormData(formData);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      postActivity(formData).then(()=>{
        addActivity(formData);
      })
      setSubmitted(true);
    }

    if (!charity) return "loading...";

    return (
        <form onSubmit={handleSubmit}>
          <Collapsible trigger={<button>Add an activity</button>}>
            <hr/>
            <div>
              <label htmlFor="title">Title:</label>
            </div>
            <div>
              <input onChange={onChange} type="text" id="title" />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
            </div>
            <div>
              <textarea onChange={onChange} type="text" id="description" />
            </div>
            <div>
              <label htmlFor="duration">Duration:</label>
            </div>
            <div>
              <input onChange={onChange} type="text" id="duration" />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
            </div>
            <div>
              <input placeholder="address" onChange={onChange} type="text" id="location" />
              {/* <input placeholder="coordinates" onChange={onChange} type="text" id="location.coordinates" /> */}
              {/* <input placeholder="postcode" onChange={onChange} type="text" id="location.postcode" /> */}
            </div>
            <div>
              <label htmlFor="points">Points offered:</label>
            </div>
            <div>
              <input onChange={onChange} type="text" id="points" />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
            </div>
            <div>
              <input onChange={onChange} type="date" id="datetime" />
            </div>

            <input type="submit" value="Save" id="save"/>
            <div>
              {submitted ? <p>Activity has been added!</p> : null}
            </div>
          </Collapsible>
	      </form>

    );
}

export default ActivityForm;
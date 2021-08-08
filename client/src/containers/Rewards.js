import React, { useEffect, useState } from 'react';
const Rewards = ({ }) => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rewards")
      .then(res => res.json())
      .then(rewardsList => {
        return setRewards(rewardsList);
      })
      .catch(err => console.error);
  }, [])
  const handleSelectChange = event => {
    Rewards(event.target.value);
  }
  return (
    <>
      <h4>Rewards!</h4 >

    </>
  )
  {
    Rewards.map((rewards) => {
      return <option key={rewards._id} value={rewards._id} selected={rewards._id}>{rewards.fullName}</option>;
    })
  }
};
export default Rewards;
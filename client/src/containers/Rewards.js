import React, { useEffect, useState } from "react";
import RewardList from "../components/RewardList";
import '../css/Rewards.css';
import UserContext from "../context/userContext";


const Rewards = ({ redeemReward }) => {
  const url = "http://localhost:5000/api/rewards";
  const [rewards, setRewards] = useState([]);
  const [category, setCategory] = useState("all")

  useEffect(() => {
    loadRewards(url);
  }, []);

  const loadRewards = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((rewardsList) => {
        setRewards(rewardsList);
      })
      .catch((err) => console.error(err));
  };

  function displayUserPoints(user) {
    if (!user) return "loading points..."
    return user.noOfPoints
  }

  return (
    <>
      <div className="get-rewards-search">
      <h4>Get Rewards </h4>
      <div>Browse By Category...</div>
      <div className="reward-category-buttons">
      <button onClick={() => setCategory("all")}>All Categories</button>
      <button onClick={() => setCategory("Food")}>Food</button>
      <button onClick={() => setCategory("clothes")}>Clothing</button>
      <button onClick={() => setCategory("Digital")}>Digital</button>
      </div>
      <div className="point-count">
      <div className="your-points">
        <strong>Your Points:</strong> <UserContext.Consumer>{user => displayUserPoints(user)}</UserContext.Consumer>
      </div>
      </div>
      </div>
      <RewardList rewards={rewards} redeemReward={redeemReward} category={category} />

    </>
  );
};

export default Rewards;

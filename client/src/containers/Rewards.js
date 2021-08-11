import React, { useEffect, useState } from "react";
import RewardList from "../components/RewardList";
import '../css/Rewards.css';


const Rewards = ({ redeemReward, user }) => {
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
  if (!user) return "loading...";
  return (
    <>
      <div className="get-rewards-search">
      <h4>Get Rewards </h4>
      <div>Browse By Category...</div>
      <button onClick={() => setCategory("all")}>All Categories</button>
      <button onClick={() => setCategory("Food")}>Food</button>
      <button onClick={() => setCategory("clothes")}>Clothing</button>
      <button onClick={() => setCategory("Digital")}>Digital</button>
      <p>
        <strong>Your Points:</strong> {user.noOfPoints}
      </p>
      </div>
      <RewardList rewards={rewards} redeemReward={redeemReward} user={user} category={category} />

    </>
  );
};

export default Rewards;

import React from "react";
import RewardDetails from "./RewardDetails";
import "../css/RewardsList.css";
import UserContext from "../context/userContext";

const RewardList = ({ rewards, redeemReward, category }) => {
  const rewardsList = (user) =>{
    if (!user) return "loading..."
    return rewards.map((reward) => {
      if (category !== reward.category && category !== "all") return null;
      const redeemed = user.redeemedRewards
        .map((reward) => reward._id)
        .includes(reward._id);
      return (
        <RewardDetails
          key={reward._id}
          reward={reward}
          redeemReward={redeemReward}
          redeemed={redeemed}
        />
      );
    })
  }

  return (
      <UserContext.Consumer>{user => rewardsList(user)}</UserContext.Consumer>
  );
};

export default RewardList;

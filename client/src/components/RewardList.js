import React from 'react';
import RewardDetails from './RewardDetails';

const RewardList = ({ rewards, redeemReward, user, category }) => {

  const rewardsList = rewards.map((reward) => {
    if ((category !== reward.category) && category !== "all") return null
    const redeemed = user.redeemedRewards.map((reward) => reward._id).includes(reward._id)
    return (
      <RewardDetails
        key={reward._id}
        reward={reward}
        redeemReward={redeemReward}
        redeemed={redeemed}
      />
    )
  });

  return (
    <div>
      {rewardsList}
    </div>
  );
}

export default RewardList;
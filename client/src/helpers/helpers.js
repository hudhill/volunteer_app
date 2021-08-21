function ageFromDOB(dob) {
    const timeDifference = Date.now() - dob.getTime();
    let differenceDate = new Date(timeDifference);
    return Math.abs(differenceDate.getUTCFullYear() - 1970);
}



function userRedeemRewards(user, reward ) {
    if (user.noOfPoints < reward.points){
        return "insufficient funds"
      }
      const newUser = { redeemedRewards:user.redeemedRewards };
      newUser.noOfPoints = user.noOfPoints - reward.points
      newUser.redeemedRewards = newUser.redeemedRewards.map(
        (reward) => reward._id
      );
      newUser.redeemedRewards.push(reward._id);
      return newUser
}

function haveIApplied(activity, user){
  const applicants = activity.applications.map(
    (application) => application.user._id
  );
  return applicants.includes(user._id);
}

export {ageFromDOB, userRedeemRewards, haveIApplied};
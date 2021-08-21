import { getActivities, updateActivity } from "./ActivitiesService";

export function apply(activity, user) {
    let applications = [...activity.applications];
    applications = applications.map((application) => {
      return { status: application.status, user: application.user._id };
    });
    const newActivity = { applications };
    newActivity.applications.push({ status: "pending", user: user._id });
    return updateActivity(activity._id, newActivity).then(() => getActivities());
  }
const express = require("express");
const errorCatchBuild = require("../helpers/error_catch.js");
const activityRepository = require("../repositories/activity_repository.js");

function createActivityRouter(
  activityCollection,
  userCollection,
  charityCollection,
  rewardCollection
) {
  const router = express.Router();

  //INDEX (GET)
  router.get("/", (req, res) => {
    activityRepository
      .getAll(
        activityCollection,
        userCollection,
        charityCollection,
        rewardCollection
      )
      .then((allItems) => res.json(allItems))
      .catch(errorCatchBuild(res));
  });

  //SHOW (GET)
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    activityRepository
      .getOne(
        activityCollection,
        userCollection,
        charityCollection,
        rewardCollection,
        id
      )
      .then((result) => res.json(result))
      .catch(errorCatchBuild(res));
  });

  // CREATE (POST)
  router.post("/", (req, res) => {
    const incomingActivity = req.body;
    activityRepository
      .save(activityCollection, incomingActivity)
      .then((newActivity) => res.json(newActivity))
      .catch(errorCatchBuild(res));
  });

  // UPDATE (PUT)
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    activityRepository
      .update(
        activityCollection,
        userCollection,
        charityCollection,
        rewardCollection,
        id,
        updateData
      )
      .then((updatedItem) => res.json(updatedItem))
      .catch(errorCatchBuild(res));
  });

  // DESTROY (DELETE)
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    activityRepository
      .destroy(activityCollection,
        userCollection,
        charityCollection,
        rewardCollection,
        id)
      .then((allItems) => res.json(allItems))
      .catch(errorCatchBuild(res));
  });

  return router;
}

module.exports = createActivityRouter;

hello
goodbye

const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(express.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('users'); 
    const userCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
    app.use('/api/users', usersRouter);

    const db = client.db('activities'); 
    const activityCollection = db.collection('activites');
    const activitiesRouter = createRouter(activitiesCollection);
    app.use('/api/activities', activitiesRouter);

    const db = client.db('charities'); 
    const charityCollection = db.collection('charities');
    const charitiesRouter = createRouter(charitiesCollection);
    app.use('/api/charities', charitiesRouter);

    const db = client.db('rewards'); 
    const rewardCollection = db.collection('rewards');
    const rewardsRouter = createRouter(rewardsCollection);
    app.use('/api/rewards', rewardsRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
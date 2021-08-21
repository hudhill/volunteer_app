import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Rewards from "./containers/Rewards";
import Activities from "./containers/Activities";
import MyAccount from "./containers/MyAccount";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import MyRewards from "./containers/MyRewards";
import EditProfile from "./containers/EditProfile";
import React, { useState, useEffect } from "react";
import { userRedeemRewards } from "./helpers/helpers";
import { getUsers, updateUser } from "./services/UserService";
import UserContext from "./context/userContext";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  }, [submitted]);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setAllUsers(users);
        setUser(users[0]);
      });
  }, []);

  function handleUpdateUser(data) {
    updateUser(user._id, data)
      .then((newUser) => {
        setUser(newUser);
        setSubmitted(true);
      });
  }

  function redeemReward(reward, message) {
    const newUser = userRedeemRewards(user, reward);
    if (newUser === "insufficient funds")
      message({ type: "error", message: "insufficient Funds" });
    else {
      handleUpdateUser(newUser);
      message({ type: "success", message: "success" });
    }
  }

  return (
    <Router>
      <>
      <UserContext.Provider value={user}>
        <Header />
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <HomePage user={user} allUsers={allUsers} setUser={setUser} />
            )}
          />
          <Route
            path="/rewards"
            component={() => (
              <Rewards redeemReward={redeemReward} user={user} />
            )}
          />
          <Route
            path="/activities"
            component={() => <Activities user={user} />}
          />
          <Route
            path="/myaccount"
            component={() => <MyAccount user={user} />}
          />
          <Route
            path="/myrewards"
            component={() => <MyRewards user={user} />}
          />
          <Route
            path="/editprofile"
            component={() => (
              <EditProfile
                user={user}
                updateUser={handleUpdateUser}
                submitted={submitted}
              />
            )}
          />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
        </UserContext.Provider>
      </>
    </Router>
  );
};

export default App;

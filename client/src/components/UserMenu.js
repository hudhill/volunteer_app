const UserMenu = ({ allUsers, setUser }) => {

  const handleChange = e => {
      setUser(allUsers.find(user => user._id === e.target.value))
  }

  return (
    <select onChange={handleChange}>
      {allUsers.map((user) => {
        return <option key={user._id} value={user._id}>{user.fullName}</option>;
      })}
    </select>
  );
};

export default UserMenu;

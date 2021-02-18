import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
//mport { auth } from "../firebase";

const Profile = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  return (
    <div>
      <img src={photoURL} alt="na" />
      <h2>{displayName}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default Profile;

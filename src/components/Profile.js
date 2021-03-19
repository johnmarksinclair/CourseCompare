import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
//mport { auth } from "../firebase";

const Profile = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email } = user;
  return (
    
<div class="header">
    <img src= {photoURL} alt="my image" class="floatdown"/>
    this is my header, image could go here too
</div>




  );
};

export default Profile;

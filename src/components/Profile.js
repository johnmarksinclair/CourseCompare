import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
//mport { auth } from "../firebase";

const Profile = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  return (
    <div class="row gutters-sm">
    <div class="col-md-4 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
          <img src={photoURL} alt="na" />
            <div class="mt-3">
              <h4>{displayName}</h4>
              <h5>{email}</h5>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Profile;

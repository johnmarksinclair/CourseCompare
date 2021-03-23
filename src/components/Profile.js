import { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { getUserReviews } from "../backendCalls/UserCalls";
import ReviewSection from "./ReviewSection";

const Profile = () => {
  const user = useContext(UserContext);
  var pic = "";
  var name = "";
  var add = "";
  if (user) {
    let { photoURL, displayName, email } = user;
    pic = photoURL;
    name = displayName;
    add = email;
  }

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, [add]);

  const updateData = async () => {
    let revs = await getUserReviews(add);
    let revArr = [];
    if (revs) {
      revs.forEach((review) => {
        revArr.push(review);
      });
    }
    setReviews(revArr);
    console.log(revArr);
  };

  return (
    <div>
      {user ? (
        <div>
          <img src={pic} alt="na" />
          <h2>{name}</h2>
          <h2>{add}</h2>
          <ReviewSection reviewData={reviews} profile={true} />
        </div>
      ) : (
        <div>Sign In</div>
      )}
    </div>
  );
};

export default Profile;

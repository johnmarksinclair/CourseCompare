import { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";

import { getUserReviews } from "../backendCalls/UserCalls";
import ReviewSection from "./ReviewSection";
import Card from "react-bootstrap/Card";


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
          <div>
      <div class="header">
        <img src={photoURL} alt="" class="floatdown" />
      </div>

      <div class="body">

        <Card class="shadow-md rounded-lg" style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title class="text-3xl font-bold pb-4	" >{displayName}</Card.Title>
            <Card.Text class="pb-1.5">
              {email}
            </Card.Text>
          </Card.Body>
        </Card>


      <div class=" py-10 block rounded-md focus:underline">
          <h3 class="px-2">My Reviews</h3>
       
        </div>
        <div class= "pr-4 cursor-pointer bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-500 max-w-lg	rounded-lg shadow-xl	 border-dashed">
        <h1 class= "p-3 pt-3 text-sm font-bold">{data.courseID}</h1>
        <h2 class="italic pl-3 text-sm font-normal">"{data.body}"</h2>
        <h3 class= "pl-3 pb-3 pt-2 font-semibold text-blue-500	text-sm">{data.rating}/5</h3>
        </div>
        <div>
          <div class="pt-12"></div>
        </div>
      </div>
          <ReviewSection reviewData={reviews} profile={true} />
        </div>
      ) : (
        <div>Sign In</div>
      )}
    </div>

  );
};

export default Profile;

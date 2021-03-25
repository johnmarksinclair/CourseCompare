import { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { getUserReviews } from "../backendCalls/UserCalls";
import ReviewSection from "./ReviewSection";
import { Card } from "react-bootstrap";
import SignIn from "./SignIn";

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
    // console.log(revArr);
  };

  return (
    <div>
      {user ? (
        <div>
          <div className="header">
            <img src={pic} alt="" className="floatdown" />
          </div>

          <div className="text-left relative px-2 pt-16">
            <div className="col-sm-12 col-md-4">
              <Card className="shadow-md rounded-lg">
                <Card.Body>
                  <Card.Title className="pb-2">
                    <div className="font-semibold text-2xl">{name}</div>
                  </Card.Title>
                  <Card.Text className="pb-1.5">{add}</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <ReviewSection reviewData={reviews} profile={true} />
            {/* <div class=" py-10 block rounded-md focus:underline">
                <h3 class="px-2">My Reviews</h3>
              </div>
              <div class="pr-4 cursor-pointer bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-500 max-w-lg	rounded-lg shadow-xl	 border-dashed">
                <h1 class="p-3 pt-3 text-sm font-bold">temp</h1>
                <h2 class="italic pl-3 text-sm font-normal">temp</h2>
                <h3 class="pl-3 pb-3 pt-2 font-semibold text-blue-500	text-sm">
                  temp
                </h3>
              </div> */}
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Profile;

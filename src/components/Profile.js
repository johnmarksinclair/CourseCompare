import { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { getUserReviews } from "../backendCalls/UserCalls";
import { Toast } from "react-bootstrap";

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

  const NoReviews = () => {
    return <div className="pl-3">No Reviews</div>;
  };

  const Review = (props) => {
    let data = props.data;

    return (
      <div className="">
        <Toast animation={false}>
          <Toast.Header closeButton={false}>
            <img src={data.authorPic} className="rounded mr-2 h-8 w-8" alt="" />
            <div className="mr-auto font-semibold pr-0">{data.author}</div>
            <strong>{data.rating}/5</strong>
          </Toast.Header>
          <Toast.Body className="px-2 py-1">
            <div className="">{data.courseName}</div>

            {data.body}
          </Toast.Body>
        </Toast>
      </div>
    );
  };

  return (
    <div>
      {user ? (
        <div>
          <img src={pic} alt="na" />
          <h2>{name}</h2>
          <h2>{add}</h2>
          {reviews.length > 0 ? (
            reviews.map((review) => <Review data={review} key={review.id} />)
          ) : (
            <NoReviews />
          )}
        </div>
      ) : (
        <div>Sign In</div>
      )}
    </div>
  );
};

export default Profile;

import { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { Toast } from "react-bootstrap";
import { addReview } from "../backendCalls/ReviewCalls";
import { Tab, Tabs } from "react-bootstrap";

const ReviewSection = (props) => {
  let reviewData = props.reviewData;
  let courseData = props.courseData;
  let profileScreen = props.profile;
  const [bodyInput, setBodyInput] = useState("");
  const [ratingInput, setRatingInput] = useState("");

  const user = useContext(UserContext);
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const [add, setAdd] = useState("");

  const [buttonText, setButtonText] = useState("Submit");

  useEffect(() => {
    updateUser();
    // eslint-disable-next-line
  }, [add, buttonText]);

  const updateUser = () => {
    if (user) {
      let { photoURL, displayName, email } = user;
      setPic(photoURL);
      setName(displayName);
      setAdd(email);
    }
  };

  const createReview = () => {
    if (ratingInput === "" || bodyInput === "") return;
    else {
      let newReview = {
        courseID: courseData.id,
        courseName: `${courseData.title}, ${courseData.type}`,
        body: bodyInput,
        rating: ratingInput,
        author: name,
        authorPic: pic,
        email: add,
      };
      // console.log(newReview);
      addReview(newReview);
      setBodyInput("");
      setRatingInput("");
      setButtonText("Submit");
    }
  };

  const handleInput = (e) => {
    if (e.target.id === "rating") setRatingInput(e.target.value);
    else if (e.target.id === "body") setBodyInput(e.target.value);
  };

  const NoReviews = () => {
    return <div className="pl-3">No Reviews</div>;
  };

  const Review = (props) => {
    let data = props.data;
    console.log(data);
    return (
      <div className="">
        <Toast animation={false}>
          <Toast.Header closeButton={profileScreen}>
            <img src={data.authorPic} className="rounded mr-2 h-8 w-8" alt="" />
            <div className="mr-auto font-semibold pr-0">{data.author}</div>
            <strong>{data.rating}/5</strong>
          </Toast.Header>
          {profileScreen ? (
            <Toast.Body className="px-2 py-1">
              <div className="font-semibold">{data.courseName}</div>
              {data.body}
            </Toast.Body>
          ) : (
            <Toast.Body className="px-2 py-1">{data.body}</Toast.Body>
          )}
        </Toast>
      </div>
    );
  };

  const ProfileView = () => {
    return (
      <div className="py-4 space-y-2">
        <div className="font-semibold text-2xl">Reviews</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {reviewData.length > 0 ? (
            reviewData.map((review) => <Review data={review} key={review.id} />)
          ) : (
            <NoReviews />
          )}
        </div>
      </div>
    );
  };

  const CourseView = () => {
    return (
      <Tabs defaultActiveKey="reviews">
        <Tab eventKey="reviews" title="Reviews">
          <div className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {reviewData.length > 0 ? (
                reviewData.map((review) => (
                  <Review data={review} key={review.id} />
                ))
              ) : (
                <NoReviews />
              )}
            </div>
          </div>
        </Tab>
        <Tab eventKey="new" title="New Review">
          <div className="p-4 row">
            <div className="col-12">
              <div className="flex flex-col justify-center space-y-2">
                <input
                  id="rating"
                  placeholder="Rating"
                  className="border p-2 rounded"
                  onChange={(e) => handleInput(e)}
                />
                <textarea
                  id="body"
                  placeholder="Review Description"
                  className="h-48 border p-2 rounded"
                  onChange={(e) => handleInput(e)}
                />
                <div className="pt-2 flex justify-center items-center">
                  <button
                    className="homebtn bump"
                    onClick={() => {
                      createReview();
                      setButtonText("Done!");
                    }}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    );
  };

  return (
    <div className="px-2 py-4">
      {profileScreen ? <ProfileView /> : <CourseView />}
    </div>
  );
};

export default ReviewSection;

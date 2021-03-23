import { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { Toast, Popover, OverlayTrigger } from "react-bootstrap";
import { addReview } from "../backendCalls/ReviewCalls";
import { Form, TextArea, Input, Button } from "semantic-ui-react";

const ReviewSection = (props) => {
  let reviewData = props.reviewData;
  let courseData = props.courseData;
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
  }, [add]);

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
    }
  };

  const handleInput = (e) => {
    if (e.target.id === "rating") setRatingInput(e.target.value);
    else if (e.target.id === "body") setBodyInput(e.target.value);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">New Review</Popover.Title>
      <Popover.Content>
        <Form>
          <div className="space-y-2">
            <Input
              id="rating"
              placeholder="Rating"
              style={{ padding: 2 }}
              onChange={(e) => handleInput(e)}
            />
            <TextArea
              id="body"
              placeholder="Review Description"
              style={{ height: 200, width: 250, padding: 2 }}
              onChange={(e) => handleInput(e)}
            />
            <Button
              onClick={() => {
                createReview();
                setButtonText("Done!");
              }}
            >
              {buttonText}
            </Button>
          </div>
        </Form>
      </Popover.Content>
    </Popover>
  );

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
          <Toast.Body className="px-2 py-1">{data.body}</Toast.Body>
        </Toast>
      </div>
    );
  };

  return (
    <div className="p-8 space-y-4">
      <div className="flex space-x-4">
        <div className="text-2xl pb-2">Reviews</div>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <button
            className="homebtn bump"
            onClick={() => setButtonText("Submit")}
          >
            New Review
          </button>
        </OverlayTrigger>
      </div>
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

export default ReviewSection;

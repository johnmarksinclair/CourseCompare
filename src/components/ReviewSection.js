import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { confirmAlert } from "react-confirm-alert";
import { Dropdown, Tab, Tabs, Card, Form, Button } from "react-bootstrap";
import {
  addReview,
  editReview,
  deleteReview,
} from "../backendCalls/ReviewCalls";
import Slider from "react-input-slider";
import pencil from "../assets/pencil.svg";
import trash from "../assets/trash.svg";

const ReviewSection = (props) => {
  let reviewData = props.reviewData;
  let courseData = props.courseData;
  let profileScreen = props.profile;
  const [bodyInput, setBodyInput] = useState("");
  const [ratingInput, setRatingInput] = useState(0.0);

  const user = useContext(UserContext);
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const [add, setAdd] = useState("");

  const [buttonText, setButtonText] = useState("Submit");
  // const [newest, setNewest] = useState(true);

  useEffect(() => {
    updateUser();
    // eslint-disable-next-line
  }, [add, buttonText, reviewData]);

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
      let Filter = require("bad-words");
      let cleanedBody = new Filter().clean(bodyInput);
      let newReview = {
        courseID: courseData.id,
        courseName: `${courseData.host} - ${courseData.title}, ${courseData.type}`,
        body: cleanedBody,
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

  const reverseOrder = (e) => {
    console.log(e.target.id);
  };

  const handleInput = (e) => {
    if (e.target.id === "rating") setRatingInput(e.target.value);
    else if (e.target.id === "body") setBodyInput(e.target.value);
  };

  const editConfirm = (passedID) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <textarea
              id="edit"
              placeholder="Edit your review here..."
              className="h-48 border p-2 rounded"
            />
            <div className="flex justify-around items-center">
              <Button onClick={onClose}>Cancel</Button>
              <Button
                onClick={() => {
                  let Filter = require("bad-words");
                  let cleanedBody = new Filter().clean(
                    document.getElementById("edit").value
                  );
                  editReview(passedID, cleanedBody);
                  onClose();
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        );
      },
    });
  };

  const deleteConfirm = (passedID) => {
    confirmAlert({
      title: "Delete review?",
      message: "",
      buttons: [
        {
          label: "No",
        },
        {
          label: "Yes",
          onClick: () => deleteReview(passedID),
        },
      ],
    });
  };

  const NoReviews = () => {
    return <div className="pl-3">No Reviews</div>;
  };

  const Review = (props) => {
    let data = props.data;
    // console.log(data);
    return (
      <div>
        <Card bg="light" className="mb-2 shadow">
          <Card.Header>
            <div className="flex items-center">
              <img
                src={data.authorPic}
                className="rounded mr-2 h-8 w-8"
                alt=""
              />
              <div className="mr-auto font-semibold pr-0">{data.author}</div>
              <div>{data.rating}/5</div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {profileScreen ? (
                <div>
                  <Link to={`/coursesearch/${data.courseID}`}>
                    {data.courseName}
                  </Link>
                  {/* <div className="font-semibold">{data.courseName}</div> */}
                  <div>{data.body}</div>
                  <div className="pt-2 flex">
                    <div className="col flex justify-center">
                      <Button
                        variant="light"
                        onClick={() => editConfirm(data.id)}
                      >
                        <img src={pencil} alt="" width="100%" />
                      </Button>
                    </div>
                    <div className="col flex justify-center">
                      <Button
                        variant="light"
                        onClick={() => deleteConfirm(data.id)}
                      >
                        <img src={trash} alt="" width="100%" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>{data.body}</div>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div className="px-2 py-4">
      {profileScreen ? (
        <div className="py-4 space-y-2">
          <div className="pb-2 flex space-x-4 items-center">
            <div className="font-semibold text-2xl">Reviews</div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item id="newest" onClick={(e) => reverseOrder(e)}>
                    Newest
                  </Dropdown.Item>
                  <Dropdown.Item id="oldest" onClick={(e) => reverseOrder(e)}>
                    Oldest
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

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
      ) : (
        <div className="h-96">
          <Tabs defaultActiveKey="reviews">
            <Tab eventKey="reviews" title="Reviews">
              <div className="py-4 h-full">
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
                    <div className="pb-3 flex justify-center items-center space-x-4">
                      <Slider
                        axis="x"
                        x={ratingInput}
                        xmin={0}
                        xmax={5}
                        xstep={0.1}
                        styles={{
                          active: {
                            backgroundColor: "rgb(18, 206, 175)",
                          },
                          thumb: {
                            backgroundColor: "rgb(18, 206, 175)",
                          },
                        }}
                        onChange={({ x }) => setRatingInput(x.toFixed(1))}
                      />
                      <div className="w-12">
                        <Form.Control
                          className="text-center"
                          value={ratingInput}
                          disabled
                        />
                      </div>
                    </div>

                    <textarea
                      id="body"
                      placeholder="Review Description"
                      value={bodyInput}
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
        </div>
      )}
    </div>
  );
};

export default ReviewSection;

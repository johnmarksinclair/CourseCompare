import { firestore } from "../firebase";

const reviewsRef = firestore.collection("reviews");

// adds a new review document to the reviews collection
// doc = formatted json review obj
export const addReview = async (doc) => {
  reviewsRef.add(doc);
};

// returns the reviews associated with a passed courseID
export const getCourseReviews = async (passedID) => {
  const snapshot = await reviewsRef.where("courseID", "==", passedID).get();
  let reviewsArr = [];
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc) => {
    let reviewObj = createReviewObj(doc);
    //console.log(reviewObj);
    reviewsArr.push(reviewObj);
  });
  return reviewsArr;
};

// todo
export const editReview = async (doc) => {};

// todo
export const deleteReview = async (doc) => {};

export const createReviewObj = (doc) => {
  let review = {
    id: `${doc.id}`,
    courseID: `${doc.data().courseID}`,
    description: `${doc.data().description}`,
    rating: `${doc.data().rating}`,
    author: `${doc.data().author}`,
  };
  return review;
};

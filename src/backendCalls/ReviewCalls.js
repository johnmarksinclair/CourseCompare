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

// updates the body of a review
export const editReview = async (passedID, rating, body) => {
  let docRef = await reviewsRef.doc(passedID);
  let temp = {};
  temp.rating = rating;
  temp.body = body;
  docRef.get().then((doc) => {
    if (doc) {
      //console.log(doc.id, "=>", doc.data().body);
      docRef.update(temp);
    } else {
      console.log("error: review not found");
    }
  });
};

// deletes a review by id
export const deleteReview = async (passedID) => {
  reviewsRef.doc(passedID).delete();
};

export const createReviewObj = (doc) => {
  let review = {
    id: `${doc.id}`,
    courseID: `${doc.data().courseID}`,
    courseName: `${doc.data().courseName}`,
    body: `${doc.data().body}`,
    rating: `${doc.data().rating}`,
    author: `${doc.data().author}`,
    authorPic: `${doc.data().authorPic}`,
    email: `${doc.data().email}`,
  };
  return review;
};

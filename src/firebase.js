import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

// INITIALISE FIREBASE INSTANCES
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// FIREBASE AUTH METHODS
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithRedirect(provider);
};

// FIRESTORE METHODS
const coursesRef = firestore.collection("courses");
const reviewsRef = firestore.collection("reviews");

// returns all documents in the courses collection
export const getCourses = async () => {
  const snapshot = await coursesRef.get();
  let courseArr = [];
  snapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());
    // console.log(doc.data().title);
    let courseObj = createCourseObj(doc);
    //console.log(courseObj);
    courseArr.push(courseObj);
  });
  return courseArr;
};

// adds a new course document to the courses collection
// doc = formatted json course obj
export const addCourse = async (doc) => {
  coursesRef.add(doc);
};

// pointless?? - use for navbar search maybe
export const searchCourses = async (search) => {
  if (search.length === 0) return;
  const snapshot = await coursesRef.get();
  let lowerSearch = search.toLowerCase();
  let courseArr = [];
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc) => {
    let courseObj = createCourseObj(doc);
    let lowerTitle = courseObj.title.toLowerCase();
    //console.log(reviewObj);
    if (lowerTitle.includes(lowerSearch)) {
      courseArr.push(courseObj);
    }
  });
  return courseArr;
};

// returns the reviews associated with a passed courseID
export const getCoursesReviews = async (passedID) => {
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

// adds a new review document to the reviews collection
// doc = formatted json review obj
export const addReview = async (doc) => {
  reviewsRef.add(doc);
};

// JSON PROCESSING METHODS
export const createCourseObj = (doc) => {
  let course = {
    id: `${doc.id}`,
    title: `${doc.data().title}`,
    host: `${doc.data().host}`,
    type: `${doc.data().type}`,
    description: `${doc.data().description}`,
    length: `${doc.data().length}`,
    cost: `${doc.data().cost}`,
    rating: `${doc.data().rating}`,
  };
  return course;
};

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

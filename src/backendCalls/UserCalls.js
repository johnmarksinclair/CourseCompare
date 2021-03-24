import { firestore } from "../firebase";
import { createReviewObj } from "./ReviewCalls";

const reviewsRef = firestore.collection("reviews");

export const getUserReviews = async (passedEmail) => {
  const snapshot = await reviewsRef.where("email", "==", passedEmail).get();
  let usersRevArr = [];
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc) => {
    let reviewObj = createReviewObj(doc);
    //console.log(userObj);
    usersRevArr.push(reviewObj);
  });
  return usersRevArr;
};

// export const getUserCourses = async (passedID) => {
//   const snapshot = await reviewsRef.where("courseID", "==", passedID).get();
//   let usersCourseArr = [];
//   if (snapshot.empty) {
//     console.log("No matching documents.");
//     return;
//   }
//   snapshot.forEach((doc) => {
//     let userObj = createUserObj(doc);
//     usersCourseArr.push(userObj);
//   });
//   return usersCourseArr;
// };

// export const getUserModules = async (passedID) => {
//   const snapshot = await reviewsRef.where("moduleID", "==", passedID).get();
//   let usersModuleArr = [];
//   if (snapshot.empty) {
//     console.log("No matching documents.");
//     return;
//   }
//   snapshot.forEach((doc) => {
//     let userObj = createUserObj(doc);
//     usersModuleArr.push(userObj);
//   });
//   return usersModuleArr;
// };

// export const createUserObj = (doc) => {
//   let user = {
//     id: `${doc.id}`,
//     //username?
//     //username: `${doc.data().username}`,
//   };
//   return user;
// };

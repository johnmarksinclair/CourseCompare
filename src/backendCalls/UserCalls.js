import { firestore } from "../firebase";

const reviewsRef = firestore.collection("reviews");
const coursesRef = firestore.collection("courses");
const modulesRef = firestore.collection("modules");

export const getUserReviews = async (passedID) => {
    const snapshot = await reviewsRef.where("reviewID", "==", passedID).get();
    let usersRevArr = [];
    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }
    snapshot.forEach((doc) => {
        let userObj = createUserObj(doc);
        //console.log(userObj);
        usersRevArr.push(userObj);
    });
    return usersRevArr;
};

export const getUserCourses = async (passedID) => {
    const snapshot = await coursesRef.where("courseID", "==", passedID).get();
    let usersCourseArr = [];
    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }
    snapshot.forEach((doc) => {
        let userObj = createUserObj(doc);
        usersCourseArr.push(userObj);
    });
    return usersCourseArr;
};

export const getUserModules = async (passedID) => {
    //moduleID instead of courseID? 
    const snapshot = await modulesRef.where("moduleID", "==", passedID).get();
    let usersModuleArr = [];
    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }
    snapshot.forEach((doc) => {
        let userObj = createUserObj(doc);
        usersModuleArr.push(userObj);
    });
    return usersModuleArr;
};

export const createUserObj = (doc) => {
    let user = {
        id: `${doc.id}`,
        //username?
        username: `${doc.data().username}`,
        course: `${doc.data().course}`, 
        job: `${doc.data().data}`,
    };
    return user;
}

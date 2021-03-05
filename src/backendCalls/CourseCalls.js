import { firestore } from "../firebase";

const coursesRef = firestore.collection("courses");

// adds a new course document to the courses collection
// doc = formatted json course obj
export const addCourse = async (doc) => {
  coursesRef.add(doc);
};

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

// todo - gets just one specified course
export const getCourse = async (passedID) => {
  let snapshot = await coursesRef.where("__name__", "==", passedID).get();
  let courseArr = [];
  snapshot.forEach((doc) => {
    let courseObj = createCourseObj(doc);
    //console.log(courseObj);
    courseArr.push(courseObj);
  });
  return courseArr;
};

// todo
export const editCourse = async (doc) => {};

// todo
export const deleteCourse = async (doc) => {};

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

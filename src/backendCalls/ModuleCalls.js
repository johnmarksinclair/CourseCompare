import { firestore } from "../firebase";

const modulesRef = firestore.collection("modules");

// adds a new review document to the reviews collection
// doc = formatted json review obj
export const addModule = async (doc) => {
  modulesRef.add(doc);
};

// returns the reviews associated with a passed courseID
export const getCourseModules = async (passedID) => {
  const snapshot = await modulesRef.where("courseID", "==", passedID).get();
  let arr = [];
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc) => {
    let moduleObj = createModuleObj(doc);
    //console.log(reviewObj);
    arr.push(moduleObj);
  });
  return arr;
};

// todo
export const editModule = async (doc) => {};

// todo
export const deleteModule = async (doc) => {};

export const createModuleObj = (doc) => {
  let module = {
    id: `${doc.id}`,
  };
  return module;
};

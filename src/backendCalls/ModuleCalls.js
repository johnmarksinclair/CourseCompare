import { firestore } from "../firebase";

const modulesRef = firestore.collection("modules");

// adds a new module document to the modules collection
// doc = formatted json review obj
export const addModule = async (doc) => {
  modulesRef.add(doc);
};

// returns the modules associated with a passed courseID
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
export const editModule = async (passedID, edit) => {
  let docRef = await modulesRef.doc(passedID);
  let temp = {};
  temp.body = edit;
  docRef.get().then((doc) => {
    if (doc) {
      docRef.update(temp);
    }else {
      console.log("Error: Module not Found");
    }
  });
};

// todo
export const deleteModule = async (passedID) => {
  modulesRef.doc(passedID).delete();
};

export const createModuleObj = (doc) => {
  let module = {
    id: `${doc.id}`,
    courseID: `${doc.data().courseID}`,
    title: `${doc.data().title}`,
    lecturer: `${doc.data().lecturer}`,
    description: `${doc.data().description}`,
    rating: `${doc.data().rating}`,
  };
  return module;
};

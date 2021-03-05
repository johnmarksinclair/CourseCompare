import { useEffect, useState } from "react";
import { getCourse } from "../backendCalls/CourseCalls";

const Course = ({ match }) => {
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, []);

  const updateData = async () => {
    let id = match.params.id;
    let course = await getCourse(id);
    //console.log(course[0]);
    setCourseData(course[0]);
  };

  return (
    <div className="px-8 md:max-w-2xl divide-y divide-gray-300">
      <div>
        <div className="content-start md:space-x-2 pt-4">
          <h3 className="text-5xl inline-block text-green-500">
            {courseData.title},
          </h3>
          <h3 className="text-3xl inline-block">{courseData.type}</h3>
        </div>
      </div>
      <div>
        <h3 className="text-gray-500">{courseData.host}</h3>
      </div>
      <div className="py-2 block rounded-md hover:bg-white hover:shadow-lg transition duration-500 ease-in-out">
        <h3 className="px-2">Course Description</h3>
        <p className="px-2">{courseData.description}</p>
      </div>
      <div className="py-2 block rounded-md hover:bg-white hover:shadow-lg transition duration-500 ease-in-out">
        <h3 className="px-2">Average Rating: {courseData.rating}</h3>
      </div>
      <div className="py-2 block rounded-md hover:bg-white hover:shadow-lg transition duration-500 ease-in-out">
        <h3 className="px-2">Total cost: €{courseData.cost}</h3>
      </div>
      <div className="py-2 block rounded-md hover:scale-200 hover:bg-white hover:shadow-lg transition duration-500 ease-in-out">
        <h3 className="px-2">Course Length: {courseData.length}</h3>
      </div>
    </div>
  );
};

export default Course;

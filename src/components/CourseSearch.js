import { useEffect, useState } from "react";
//import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { getCourses, searchCourses } from "../firebase";

const CourseSearch = () => {
  const [courseData, setCourseData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, []);

  const updateData = async () => {
    setCourseData(await getCourses());
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    setSearchInput(e.target.value);
    callSearchCourses(e.target.value);
  };

  const callSearchCourses = async (search) => {
    if (search.length <= 0) {
      updateData();
      return;
    }
    let matching = await searchCourses(search);
    //console.log(matching);
    if (matching.length > 0) setCourseData(matching);
  };

  const handleCourseSelect = (data) => {
    console.log(`clicked ${data.id}`);
    // route to /course and pass data as param
    // will then need to grab reviews
    // in course useEffect will call getReviews()
  };

  const CourseButton = (props) => {
    return (
      <div className="listdiv">
        <div
          className="btndiv"
          onClick={() => {
            handleCourseSelect(props.course);
          }}
        >
          <div className="col-sm-4 col-md-2">
            <div className="title">{props.course.title}</div>
            <div>{props.course.host}</div>
            <div>{props.course.rating} ⭐️</div>
          </div>
          <div className="col-sm-4 col-md-2">
            <div>{props.course.type}</div>
            <div>{props.course.length}</div>
            <div>€{props.course.cost}</div>
          </div>
          <div className="col">
            <div>{props.course.description}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flexauto flexcol">
      <div className="coursesearchdiv">
        <div>
          <h2>Courses Search</h2>
        </div>
        <hr />
        {/* <div className="searchform">
          <Form inline>
            <InputGroup>
              <FormControl placeholder="Search" />
              <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div> */}
        <div>
          <input value={searchInput} onChange={(e) => handleChange(e)} />
        </div>
      </div>

      <div className="courseslist">
        {courseData.length > 0 ? (
          courseData.map((course) => (
            <CourseButton course={course} key={course.id} />
          ))
        ) : (
          <h1>Nothing</h1>
        )}
      </div>
    </div>
  );
};

export default CourseSearch;

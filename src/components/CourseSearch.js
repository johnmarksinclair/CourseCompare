import { useEffect, useState } from "react";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { getCourses } from "../firebase";

const CourseSearch = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, []);

  const courseSchema = (doc) => {
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

  const updateData = async () => {
    const courseArr = [];
    let data = await getCourses();
    data.forEach((doc) => {
      // console.log(doc.id, "=>", doc.data());
      // console.log(doc.data().title);
      let courseObj = courseSchema(doc);
      //console.log(courseObj);
      courseArr.push(courseObj);
    });
    setCourseData(courseArr);
  };

  const handleCourseSelect = (data) => {
    console.log(`clicked ${data.id}`);
    // route to /course and pass data as param
    // will then need to grab reviews
    // in course useEffect will call getReviews()
  };

  // const fakeData = [
  //   {
  //     id: 1,
  //     title: "Business",
  //     host: "TCD",
  //     type: "MBA",
  //     description: "Description...",
  //     length: "2 years",
  //     cost: "15000",
  //     rating: 4.7,
  //   },
  //   {
  //     id: 2,
  //     title: "Law",
  //     host: "TCD",
  //     type: "MBA",
  //     description: "Description...",
  //     length: "2 years",
  //     cost: "12000",
  //     rating: 3.9,
  //   },
  //   {
  //     id: 3,
  //     title: "Comp Sci",
  //     host: "TCD",
  //     type: "MBA",
  //     description: "Description...",
  //     length: "2 years",
  //     cost: "10000",
  //     rating: 4.3,
  //   },
  //   {
  //     id: 1,
  //     title: "Business",
  //     host: "TCD",
  //     type: "MBA",
  //     description: "Description...",
  //     length: "2 years",
  //     cost: "15000",
  //     rating: 4.7,
  //   },
  //   {
  //     id: 2,
  //     title: "Law",
  //     host: "TCD",
  //     type: "MBA",
  //     description: "Description...",
  //     length: "2 years",
  //     cost: "12000",
  //     rating: 3.9,
  //   },
  //   {
  //     id: 3,
  //     title: "Comp Sci",
  //     host: "TCD",
  //     type: "MBA",
  //     description: "Description...",
  //     length: "2 years",
  //     cost: "10000",
  //     rating: 4.3,
  //   },
  //   {
  //     id: 1,
  //     title: "Business",
  //     host: "TCD",
  //     type: "MBA",
  //     description: "Description...",
  //     length: "2 years",
  //     cost: "15000",
  //     rating: 4.7,
  //   },
  //   {
  //     id: 2,
  //     title: "Law",
  //     host: "TCD",
  //     type: "MBA",
  //     description: "Description...",
  //     length: "2 years",
  //     cost: "12000",
  //     rating: 3.9,
  //   },
  //   {
  //     id: 3,
  //     title: "Comp Sci",
  //     host: "TCD",
  //     type: "MBA",
  //     description: "Description...",
  //     length: "2 years",
  //     cost: "10000",
  //     rating: 4.3,
  //   },
  // ];

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
        <div className="searchform">
          <Form inline>
            <InputGroup>
              <FormControl placeholder="Search" />
              <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </div>

      <div className="courseslist">
        {courseData.map((course) => (
          <CourseButton course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default CourseSearch;

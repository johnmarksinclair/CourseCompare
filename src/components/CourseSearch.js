import { Form, FormControl, Button, InputGroup } from "react-bootstrap";

const CourseSearch = () => {
  const tempData = [
    {
      title: "Business",
      host: "TCD",
      type: "MBA",
      description: "Description...",
      length: "2 years",
      cost: "15000",
      rating: 4.7,
    },
    {
      title: "Law",
      host: "TCD",
      type: "MBA",
      description: "Description...",
      length: "2 years",
      cost: "12000",
      rating: 3.9,
    },
    {
      title: "Comp Sci",
      host: "TCD",
      type: "MBA",
      description: "Description...",
      length: "2 years",
      cost: "10000",
      rating: 4.3,
    },
  ];

  const CourseButton = (props) => {
    return (
      <div className="listdiv">
        <div
          className="btndiv"
          onClick={() => {
            console.log(`clicked ${props.course.title}`);
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
        {tempData.map((course) => (
          <CourseButton course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseSearch;

import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
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
    let data = await getCourse(id);
    if (data.length > 0) setCourseData(data[0]);
    else setCourseData(error);
  };

  const error = {
    title: "Error - Invalid Course ID",
    host: "",
    type: "",
    description: "",
    length: "",
    cost: "",
    rating: 0,
  };

  return (
    <div className="px-8 divide-y divide-gray-300 ">
      <CourseHeader data={courseData}/>
        <CourseTabs data={courseData}/>
        <ReviewSection />
    </div>
  );
};

function CourseHeader(props){
  return(
    <div>
      <div>
        <div className="content-start md:space-x-2 pt-4">
          <h3 className="text-5xl inline-block text-green-500">
          {props.data.title},
          </h3>
          <h3 className="text-3xl inline-block">{props.data.type}</h3>
        </div>
      </div>
      <div>
        <h3 className="text-gray-500">{props.data.host}</h3>
      </div>
      <div className="py-2">
        <h3>Course Description</h3>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}

function CourseTabs(props){
  return(
    <div className="px-4">
      <Tabs defaultActiveKey="Overview" id="uncontrolled-tab-example">
        <Tab eventKey="Overview" title="Overview">
          <OverviewTab rating={props.data.rating} length={props.data.length}/>
        </Tab>
        <Tab eventKey="Cost" title="Cost">
          <CostTab cost={props.data.cost} />
        </Tab>
        <Tab eventKey="Finance" title="Finance">
          <FinanceTab />
        </Tab>
        <Tab eventKey="Graduate Opportunities" title="Graduate Opportunities">
          <GraduateTab />
        </Tab>
      </Tabs>
    </div>
  );
}

function OverviewTab(props) {
  return (
    <div className="py-2 md:space-y-4">
      <div className="md:space-x-2">
        <h3 className = "text-md inline-block text-gray-500">Course Length: </h3>
        <div className="inline-block">
          <h5 className="text-5xl inline-block">{props.length}</h5>
        </div>
      </div>
      <div className="md:space-x-2">
        <h3 className = "text-md inline-block text-gray-500">Average Rating: </h3>
        <div className="inline-block">
          <h5 className="text-5xl inline-block">{props.rating}</h5>
        </div>
      </div>
      <div className="md:space-y-1">
        <h5>Course Modules</h5>
        <p>• Introduction to Finance</p>
        <p>• Introduction to Computing</p>
        <p>• Introduction to Programming</p>
        <p>• Financial Mathematics</p>
      </div>
    </div>
  );
}

function CostTab(props) {
  return (
    <div className="py-2 md:space-y-4">
      <div className="md:space-x-2">
        <h3 className = "text-md inline-block text-gray-500">Total cost: </h3>
        <div className="inline-block">
          <h5 className="text-5xl inline-block"> €</h5>
          <h5 className="text-5xl inline-block">{props.cost}</h5>
        </div>
      </div>

      <div className="md:space-x-2">
        <div className="inline-block md:space-x-2">
            <h5 className="text-5xl inline-block">{547}</h5>
          <h3 className="text-md inline-block text-gray-500"> Total Class Hours.</h3>
        </div>
      </div>

      <div className="md:space-x-2">
        <h3 className = "text-md inline-block text-gray-500">Cost per hour: </h3>
        <div className="inline-block">
          <h5 className="text-5xl inline-block"> €</h5>
          <h5 className="text-5xl inline-block">27.42</h5>
        </div>
      </div>
    </div>
  );
}

function FinanceTab() {
  return (
    <div className="py-2 md:space-y-4">
      <h3>This is the finance page</h3>
      <h3>We may not need this page in the final product</h3>
    </div>
  );
}

function GraduateTab() {
  return (
    <div className="py-2 md:space-y-4">
      <div className="md:space-x-2">
        <div className="inline-block md:space-x-2">
          <h5 className="text-5xl inline-block">42245</h5>
          <h3 className="text-md inline-block text-gray-500"> graduates and counting.</h3>
        </div>
      </div>
      <div className="md:space-x-2">
          <h3 className = "text-md inline-block text-gray-500">Average Salary</h3>
          <div className="inline-block">
            <h3 className="text-5xl inline-block"> €</h3>
            <h5 className="text-5xl inline-block">64356</h5>
          </div>
      </div>
    </div>
  );
}

function ReviewSection() {
  return (
    <div className="pt-8">
      <h3>Reviews</h3>
      <p>This is where the reviews will be displayed</p>
    </div>
  );
}

export default Course;

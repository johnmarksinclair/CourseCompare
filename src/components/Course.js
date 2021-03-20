import { Tab, Tabs, Button, ProgressBar, Toast } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getCourse } from "../backendCalls/CourseCalls";
import college from "../assets/trinity.jpg";
import circle from "../assets/blue_circle.png";
import Cost_Tab_Circle from "../assets/Cost-Tab-Circle.svg";
import Data_Ring from "../assets/Data-Ring.svg";
import Arrow from "../assets/Blue-Arrow.svg";

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
    <div className="space-y-4 px-2 md:px-8 divide-y divide-gray-300 ">
      <PageTop data={courseData}/>
      <div class="block rounded-lg shadow-md" >
        <div class="px-2 md:px-8">
          <Description data={courseData}/>
        </div>
        <CourseTabs data={courseData}/>
      </div>
      <ReviewSection />
    </div>
  );
};

function PageTop(props){
  return(
    <div class="pb-2 md:pb-4 rounded-lg bg-blue-500 shadow-md">
      <img class="object-cover rounded-t-lg sm:h-32 md:h-96 w-full" src={college} alt=""/>
      <div class="pl-1 md:pl-8 pt-2 md:pt-4 text-white">
        <div className="content-start">
          <h1 className="text-5xl inline-block">{props.data.title},</h1>
          <h1 className="text-3xl inline-block">{props.data.type}</h1>
        </div>
        <h1>{props.data.host}</h1>
      </div>
    </div>

  );
}

function Description(props){
  return(
    <div>
      <div className="py-2">
        <h3 className="text-3xl">Course Description</h3>
        <p className="text-md">{props.data.description}</p>
      </div>
    </div>
  );
}

function CourseTabs(props){
  return(
    <div>
      <Tabs defaultActiveKey="Overview" id="uncontrolled-tab-example">
        <Tab eventKey="Overview" title="Overview">
          <OverviewTab rating={props.data.rating} length={props.data.length}/>
        </Tab>
        <Tab eventKey="Cost" title="Cost">
          <CostTab cost={props.data.cost} />
        </Tab>
        <Tab eventKey="Opportunities" title="Opportunities">
          <GraduateTab />
        </Tab>
      </Tabs>
    </div>
  );
}

function RatingBar(props){
  return(
    <div class="sm:w-32 md:w-96">
      <div>
        <img class="absolute h-32 w-32 shadow-md rounded-full" src={circle} alt="" />
        <h1 class="absolute py-9 px-8 text-white text-5xl">{props.rating}</h1>
      </div>
      <div class="py-14">
        <div class="shadow-lg rounded-lg">
          <ProgressBar class="absolute" animated now={props.rating * 20}/>
        </div>
      </div>
    </div>
  );
}

function ReviewButton(props){
  return(
    <Button>Write a review</Button>
  );
}

function OverviewTab(props) {
  return (
    <div className="px-1 py-2 space-y-4">
      <div className="space-x-2">
        <h3 className = "text-md inline-block text-gray-600">Course Length: {props.length} </h3>
      </div>
      <div className="space-x-2">
        <h3 className = "text-md inline-block text-gray-600">Average Rating</h3>
        <RatingBar rating={props.rating}/>
      </div>

      <div className="space-y-1 text-gray-600">
        <h3>Course Modules</h3>
        <div className="flex space-x-8">
          <div>
            <h5>Semester 1 (6 modules)</h5>
            <p>• Introduction to Finance I</p>
            <p>• Introduction to Computing I</p>
            <p>• Introduction to Programming I</p>
            <p>• Information Management</p>
            <p>• IT Systems</p>
            <p>• Bussiness and Technology</p>
          </div>
          <div>
            <h5>Semester 2 (6 modules)</h5>
              <p>• Introduction to Finance II</p>
              <p>• Introduction to Computing II</p>
              <p>• Introduction to Programming II</p>
              <p>• Database and Systems Management</p>
              <p>• Concurrent Systems {"&"} Operation Systems</p>
              <p>• Financial Mathematics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CostTab(props) {
  return (
    <div className="relative text-white text-md text-center">
      <div className="xl:pl-8 place-self-center">
        <img class="object-cover h-full" src={Cost_Tab_Circle} alt="" />
      </div>
      <div class="absolute top-4 inset-0">
        <div className="space-y-6">
          <div>
            <h4>Non-EU Students</h4>
            <h3>€20,100</h3>
          </div>
          <div>
            <h4>EU Students</h4>
            <h3>€{props.cost}</h3>
          </div>
          <div className="py-2">
            <h4>In-class Hours</h4>
            <h3>240 Hours</h3>
          </div>
          <div>
            <h4>Cost Per Hour</h4>
            <div className="space-y-2">
              <div>
                <h5>Non-EU Students</h5>
                <h3>€83.75</h3>
              </div>
              <div>
                <h5>EU Students</h5>
                <h3>€62.29</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraduateTab() {
  return (
    <div className="py-2 text-gray-600 text-md">
      <div class="md:flex justify-center md:space-x-16">
          <DataRing heading1="Average Salary" reviewNumber="10" statistic="€32,400"/>
          <SalarySection topSalary="47,652" bottomSalary="13,467"/>
      </div>
      <div class="pt-8 text-center md:space-x-4">
        <h3>Graduation Rate</h3>
        <h5>From 20 reviews</h5>
      </div>
      <div class="md:flex justify-center md:space-x-16">
          <DataRing class="inline-block" heading1="Pre-Covid" heading2="Graduation Rate" reviewNumber="10" statistic="72%"/>
          <DataRing class="inline-block" heading1="Post-Covid" heading2="Graduation Rate" reviewNumber="10" statistic="64%"/>
      </div>
      <div class="pt-8 text-center md:space-x-4">
        <h3>Sector Breakdown</h3>
        <h5>From 25 reviews</h5>
      </div>
      <div class="md:flex justify-center md:space-x-16">
          <DataRing class="inline-block" heading1="Private Sector" heading2="Percentage" reviewNumber="12" statistic="44%"/>
          <DataRing class="inline-block" heading1="Public Sector" heading2="Percentage" reviewNumber="13" statistic="56%"/>
      </div>
    </div>
  );
}

function SalarySection(props){
  return(
  <div class="px-4 text-center py-24">
    <div>
      <div class="inline-block space-x-2">
        <img class="inline h-4 w-4 transform rotate-180" src={Arrow} alt="" />
        <h3 class="inline">Top Salary</h3>
      </div>
      <h3>€{props.topSalary}</h3>
    </div>
    <div>
      <div class="inline-block space-x-2">
        <h3 class="inline">Bottom Salary</h3>
        <img class="inline h-4 w-4" src={Arrow} alt="" />
      </div>
      <h3>€{props.topSalary}</h3>
    </div>
  </div>
  );
}

function DataRing(props) {
  return (
    <div className="relative text-grey text-md text-center">
        <img class="inline w-80 h-80" src={Data_Ring} alt="" />
      <div class="absolute top-24 inset-0">
        <div class="space-y-1">
          <h4>{props.heading1}</h4>
          <h4>{props.heading2}</h4>
          <h5>Based on {props.reviewNumber} reviews</h5>
          <h1>{props.statistic}</h1>
        </div>
      </div>
    </div>
  );
}

function ReviewSection() {
  return (
    <div className="py-8 space-y-4">
      <div className="flex space-x-4">
          <h3>Reviews</h3>
          <ReviewButton />
      </div>
      <Reviews />
    </div>
  );
}

function Review(props) {
  return (
    <Toast animation={false}>
        <Toast.Header closeButton={false}>
          <img
            src={props.img}
            className="rounded mr-2 h-8 w-8"
            alt=""
          />
          <strong className="mr-auto">{props.name}</strong>
          <small>{props.date}</small>
        </Toast.Header>
        <Toast.Body class="px-2 py-1">{props.body}</Toast.Body>
      </Toast>
  );
}

function Reviews() {
  return (
    <div>
      <Review 
        img={college} 
        name={"Cian O'Gorman"} 
        date={"15-03-2021"} 
        body={"Woohoo, you're reading this text in a Toast! This review keeps going and going and it never seems to end really. When will it end?"} 
      />
      <Review 
        img={college} 
        name={"User Name"} 
        date={"Date"} 
        body={"Body of review"} 
      />
    </div>
  );
}

export default Course;

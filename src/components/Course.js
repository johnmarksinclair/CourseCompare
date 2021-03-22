import { Tab, Tabs, ProgressBar } from "react-bootstrap";
// import ReactStoreIndicator from "react-score-indicator";
import { useEffect, useState } from "react";
import { getCourse } from "../backendCalls/CourseCalls";
import { getCourseReviews } from "../backendCalls/ReviewCalls";
import college from "../assets/trinity.jpg";
// import circle from "../assets/blue_circle.png";
import Cost_Tab_Circle from "../assets/Cost-Tab-Circle.svg";
import Data_Ring from "../assets/Data-Ring.svg";
import Arrow from "../assets/Blue-Arrow.svg";
import ReviewSection from "./ReviewSection";

const Course = ({ match }, props) => {
  const [courseData, setCourseData] = useState({});
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, []);

  const updateData = async () => {
    let id = match.params.id;
    let data = await getCourse(id);
    if (data.length > 0) setCourseData(data[0]);
    else setCourseData(error);
    let revs = await getCourseReviews(id);
    let revArr = [];
    if (revs) {
      revs.forEach((review) => {
        revArr.push(review);
      });
    }
    setReviewData(revArr);
    console.log(revArr);
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

  function PageTop(props) {
    return (
      <div className="rounded-lg bg-blue-500 shadow-md">
        <img
          className="sm:h-32 md:h-96 w-full object-cover rounded-t-lg"
          src={college}
          alt=""
        />
        <div className="py-2 px-4 text-white">
          <div className="text-5xl inline-block">
            {props.data.title},{" "}
            <div className="text-3xl inline-block">{props.data.type}</div>
          </div>
          <div className="text-3xl">{props.data.host}</div>
        </div>
      </div>
    );
  }

  function Description(props) {
    return (
      <div className="px-2 py-2 md:px-4 md:py-4 text-gray-600">
        <h3 className="text-3xl">Course Description</h3>
        <p className="text-md">{props.data.description}</p>
      </div>
    );
  }

  function CourseTabs(props) {
    return (
      <div className="px-2">
        <Tabs defaultActiveKey="Overview">
          <Tab eventKey="Overview" title="Overview">
            <OverviewTab
              rating={props.data.rating}
              length={props.data.length}
            />
          </Tab>
          <Tab eventKey="Cost" title="Cost">
            <CostTab cost={props.data.cost} />
          </Tab>
          <Tab eventKey="Graduates" title="Graduates">
            <GraduateTab />
          </Tab>
        </Tabs>
      </div>
    );
  }

  function OverviewTab(props) {
    return (
      <div className="w-full p-4">
        <div className="row">
          <div className="col-sm-12 col-lg-4 space-y-8">
            <div className="text-2xl">Course Length: {props.length}</div>
            <div className="space-y-2 pb-8">
              <div className="text-2xl pb-2">Average Rating:</div>
              <div className="sm:pr-0 lg:pr-16">
                <ProgressBar now={props.rating} label={props.rating} max={5} />
                {/* <RatingBar rating={props.rating} /> */}
                {/* <ReactStoreIndicator value={props.rating} maxValue={5} /> */}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-8">
            <div className="row">
              <div className="col-12 text-2xl pb-2">Course Modules</div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="text-xl pb-2">Semester 1 (6 modules)</div>
                <p>• Introduction to Finance I</p>
                <p>• Introduction to Computing I</p>
                <p>• Introduction to Programming I</p>
                <p>• Information Management</p>
                <p>• IT Systems</p>
                <p>• Business and Technology</p>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="text-xl pb-2">Semester 2 (6 modules)</div>
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
      </div>
    );
  }

  // function RatingBar(props) {
  //   return (
  //     /* Please don't mess with this */
  //     <div class="sm:w-32 sm:w-96">
  //       <img
  //         class="absolute h-32 w-32 shadow-md rounded-full"
  //         src={circle}
  //         alt=""
  //       />
  //       <h1 class="absolute py-9 px-8 text-white text-5xl">{props.rating}</h1>
  //       <div class="py-14">
  //         <div class="shadow-lg rounded-lg">
  //           <ProgressBar class="absolute" animated now={props.rating * 20} />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  function CostTab(props) {
    return (
      <div className="relative text-white text-md text-center">
        <img
          className="xl:pl-8 place-self-center object-cover h-full"
          src={Cost_Tab_Circle}
          alt=""
        />

        <div className="absolute top-4 inset-0 space-y-6">
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
    );
  }

  function GraduateTab() {
    return (
      <div className="py-2 text-gray-600 text-md text-center">
        <div className="md:flex justify-center md:space-x-16">
          <DataRing
            heading1="Average Salary"
            reviewNumber="10"
            statistic="€32,400"
          />
          <SalarySection topSalary="47,652" bottomSalary="13,467" />
        </div>

        <div className="py-16">
          <div className="md:space-x-4">
            <h3>Graduation Rate</h3>
            <h5>From 20 reviews</h5>
          </div>
          <div className="md:flex justify-center md:space-x-16">
            <DataRing
              className="inline-block"
              heading1="Pre-Covid"
              heading2="Graduation Rate"
              reviewNumber="10"
              statistic="72%"
            />
            <DataRing
              className="inline-block"
              heading1="Post-Covid"
              heading2="Graduation Rate"
              reviewNumber="10"
              statistic="64%"
            />
          </div>
        </div>

        <div className="py-16">
          <div className="md:space-x-4">
            <h3>Sector Breakdown</h3>
            <h5>From 25 reviews</h5>
          </div>
          <div className="md:flex justify-center md:space-x-16">
            <DataRing
              className="inline-block"
              heading1="Private Sector"
              heading2="Percentage"
              reviewNumber="12"
              statistic="44%"
            />
            <DataRing
              className="inline-block"
              heading1="Public Sector"
              heading2="Percentage"
              reviewNumber="13"
              statistic="56%"
            />
          </div>
        </div>
      </div>
    );
  }

  function DataRing(props) {
    return (
      <div className="relative text-grey text-md text-center">
        <img className="inline w-80 h-80" src={Data_Ring} alt="" />
        <div className="absolute top-24 inset-0">
          <div className="space-y-1">
            <h4>{props.heading1}</h4>
            <h4>{props.heading2}</h4>
            <h5>Based on {props.reviewNumber} reviews</h5>
            <h1>{props.statistic}</h1>
          </div>
        </div>
      </div>
    );
  }

  function SalarySection(props) {
    return (
      <div className="px-4 text-center py-24">
        <div className="inline-block space-x-2">
          <img
            className="inline h-4 w-4 transform rotate-180"
            src={Arrow}
            alt=""
          />
          <h3 className="inline">Top Salary</h3>
        </div>
        <h3>€{props.topSalary}</h3>
        <div className="inline-block space-x-2">
          <h3 className="inline">Bottom Salary</h3>
          <img className="inline h-4 w-4" src={Arrow} alt="" />
          <h3>€{props.bottomSalary}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 space-y-4 divide-y divide-gray-300 ">
      <PageTop data={courseData} />
      <div className="block rounded-lg shadow-md">
        <Description data={courseData} />
        <CourseTabs data={courseData} />
      </div>
      <ReviewSection data={reviewData} />
    </div>
  );
};

export default Course;

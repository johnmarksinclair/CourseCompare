import { Tab, Tabs } from "react-bootstrap";
import { Progress, Statistic } from "semantic-ui-react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import SignIn from "./SignIn";
import { getCourse } from "../backendCalls/CourseCalls";
import { getCourseReviews } from "../backendCalls/ReviewCalls";
import { getCourseModules } from "../backendCalls/ModuleCalls";
import collegePicture from "../assets/trinity.jpg";
import Cost_Tab_Circle from "../assets/Cost-Tab-Circle.svg";
import Data_Ring from "../assets/Data-Ring.svg";
import Arrow from "../assets/Blue-Arrow.svg";
import ReviewSection from "./ReviewSection";

const Course = ({ match }) => {
  const user = useContext(UserContext);
  const [courseData, setCourseData] = useState({});
  const [reviewData, setReviewData] = useState([]);
  const [moduleData, setModuleData] = useState([]);
  const [courseRating, setRating] = useState(0);

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
    let ratingTotal = 0;
    if (revs) {
      revs.forEach((review) => {
        ratingTotal += Number.parseFloat(review.rating);
        revArr.push(review);
      });
    }
    if (revArr.length > 0) setRating((ratingTotal / revArr.length).toFixed(1));
    else setRating(0);
    setReviewData(revArr);
    // console.log(revArr);
    let modArr = [];
    let modules = await getCourseModules(id);
    if (modules) {
      modules.forEach((mod) => {
        modArr.push(mod);
      });
    }
    // console.log(modArr);
    if (modArr.length > 0) setModuleData(modArr);
    else setModuleData([moduleError]);
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

  const moduleError = {
    courseID: "",
    description: "",
    id: "",
    lecturer: "",
    rating: "",
    title: "Error - No Available Modules",
  };

  const PageTop = () => {
    return (
      <div className="rounded-lg bg-blue-500 shadow-md">
        <img
          className="sm:h-32 md:h-96 w-full object-cover rounded-t-lg"
          src={collegePicture}
          alt=""
        />
        <div className="py-2 px-4 text-white">
          <div className="text-5xl inline-block">
            {courseData.title},{" "}
            <div className="text-3xl inline-block">{courseData.type}</div>
          </div>
          <div className="text-3xl">{courseData.host}</div>
        </div>
      </div>
    );
  };

  const Description = () => {
    return (
      <div className="px-2 py-2 md:px-4 md:py-4 text-gray-600">
        <h3 className="text-3xl">Course Description</h3>
        <p className="text-md">{courseData.description}</p>
      </div>
    );
  };

  const CourseTabs = () => {
    return (
      <div className="px-2">
        <Tabs defaultActiveKey="Overview">
          <Tab eventKey="Overview" title="Overview">
            <OverviewTab rating={courseRating} length={courseData.length} />
          </Tab>
          <Tab eventKey="Cost" title="Cost">
            <CostTab cost={courseData.cost} />
          </Tab>
          <Tab eventKey="Graduates" title="Graduates">
            <GraduateTab />
          </Tab>
        </Tabs>
      </div>
    );
  };

  const ModuleButton = ({ mod }) => {
    return (
      <div className="py-1">
        <Link to={`/modules/${mod.id}`}>{mod.title}</Link>
      </div>
    );
  };

  const OverviewTab = () => {
    return (
      <div className="w-full p-4">
        <div className="row">
          <div className="col-sm-12 col-lg-4 space-y-8">
            <div className="text-2xl">Course Length: {courseData.length}</div>
            <div className="space-y-2 pb-10">
              <Progress
                percent={courseRating * 20}
                // label={courseRating}
                // size="big"
                indicating
              />
              <div className="flex justify-center items-center">
                <Statistic.Group>
                  <Statistic>
                    <Statistic.Value>{courseRating}/5</Statistic.Value>
                    <Statistic.Label>User Rating</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>{reviewData.length}</Statistic.Value>
                    <Statistic.Label>User Reviews</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-8">
            <div className="row">
              <div className="col-12 text-2xl pb-2">Course Modules</div>
            </div>
            <div className="row">
              <div className="px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {moduleData.map((mod) => (
                  <ModuleButton mod={mod} key={mod.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CostTab = () => {
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
            <h3>€{courseData.cost}</h3>
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
  };

  const GraduateTab = () => {
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
  };

  const DataRing = (props) => {
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
  };

  const SalarySection = (props) => {
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
  };

  return (
    <div>
      {user ? (
        <div className="p-2 space-y-4 divide-y divide-gray-300 ">
          <PageTop />
          <div className="block rounded-lg shadow-md">
            <Description />
            <CourseTabs />
          </div>
          <ReviewSection
            reviewData={reviewData}
            courseData={courseData}
            profile={false}
          />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Course;

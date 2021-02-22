const Course = () => {
  // temp course data
  const data = {
    course: "Business",
    host: "TCD",
    description: "blah blah",
    length: "2 years",
    cost: "10000",
  };
  return (
    <div>
      <h2>{data.course}</h2>
    </div>
  );
};

export default Course;

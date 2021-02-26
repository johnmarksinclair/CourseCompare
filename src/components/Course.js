
const Course = () => {

  // temp course data
  const data = {
    title: "Business and Finance",
    host: "University of Dublin, Trinity College",
    type: "MBA",
    description: "Lorem ipsum dolor sit amet, consectetur" +
      " adipiscing elit, sed do eiusmod tempor incididunt ut " +
      "labore et dolore magna aliqua. Ut enim ad minim veniam, " +
      "quis nostrud exercitation ullamco laboris nisi ut aliquip" +
      "ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
      " nulla pariatur. Excepteur sint occaecat cupidatat non proident," +
      " sunt in culpa qui officia deserunt mollit anim id est laborum.",
    length: "2 years",
    cost: "15000",
    rating: 4.7,
  };

  return (
    <div class="px-8 md:max-w-2xl divide-y divide-gray-300">
      <div>
        <div class="content-start md:space-x-2 pt-4">
          <h3 class="text-5xl inline-block text-green-500" >{data.title},</h3>
          <h3 class="text-3xl inline-block">{data.type}</h3>
        </div>
      </div>
      <div>
        <h3 class="text-gray-500">{data.host}</h3>
      </div>
      <div class="py-2 block rounded-md hover:bg-white hover:shadow-lg transition duration-500 ease-in-out">
        <h3 class="px-2">Course Description</h3>
        <p class="px-2">{data.description}</p>
      </div>
      <div class="py-2 block rounded-md hover:bg-white hover:shadow-lg transition duration-500 ease-in-out">
        <h3 class="px-2">Average Rating: {data.rating}</h3>
      </div>
      <div class="py-2 block rounded-md hover:bg-white hover:shadow-lg transition duration-500 ease-in-out">
        <h3 class="px-2">Total cost: €{data.cost}</h3>
      </div>
      <div class="py-2 block rounded-md hover:scale-200 hover:bg-white hover:shadow-lg transition duration-500 ease-in-out">
        <h3 class="px-2">Course Length: {data.length}</h3>
      </div>
    </div>
  );
};

export default Course;

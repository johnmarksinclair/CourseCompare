import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import Card from "react-bootstrap/Card";






//mport { auth } from "../firebase";


const Profile = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;

  // tmp review
  const data =
  {
    courseID: "Business Mangement",
    author: { displayName },
    body: "really good",
    rating: 4.8,
  };



  return (
    <div>
      <div class="header">
        <img src={photoURL} alt="" class="floatdown" />
      </div>

      <div class="body">

        <Card class="shadow-md rounded-lg" style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title class="text-3xl font-bold pb-4	" >{displayName}</Card.Title>
            <Card.Text class="pb-1.5">
              {email}
            </Card.Text>
          </Card.Body>
        </Card>


      <div class=" py-10 block rounded-md focus:underline">
          <h3 class="px-2">My Reviews</h3>
       
        </div>
        <div class= "pr-4 cursor-pointer bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-500 max-w-lg	rounded-lg shadow-xl	 border-dashed">
        <h1 class= "p-3 pt-3 text-sm font-bold">{data.courseID}</h1>
        <h2 class="italic pl-3 text-sm font-normal">"{data.body}"</h2>
        <h3 class= "pl-3 pb-3 pt-2 font-semibold text-blue-500	text-sm">{data.rating}/5</h3>
        </div>
        <div>
          <div class="pt-12"></div>
        </div>
      </div>
    </div>

  );
};

/*


const userReview = (props) => {
  return (
        </div>
        <div class= "cursor-pointer bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-500 max-w-lg	rounded-lg shadow-xl	 border-dashed">
        <h1 class= "p-3 pt-3 text-sm font-bold">{props.courseID}</h1>
        <h2 class="italic pl-3 text-sm font-normal">"{props.body}"</h2>
        <h3 class= "pl-3 pb-3 pt-2 font-bold text-blue-500	text-sm">{props.rating}/5</h3>
        </div>
        <div>
*/

export default Profile;

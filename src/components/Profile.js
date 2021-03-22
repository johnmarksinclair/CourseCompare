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
        </Card>,


      <div class=" py-10 block rounded-md focus:underline">
          <h3 class="px-2">My Reviews</h3>

        </div>
        <div>
          <Card border='primary' style={{ width: '23rem' }}>
            <Card.Body>
              <Card.Text class="font-bold pl-1 pb-1">{data.courseID}</Card.Text>
              <Card.Text class=" italic pb-1">"{data.body}"</Card.Text>
              <Card.Text class=" pl-1 font-bold text-blue-500	">{data.rating}/5</Card.Text>
            </Card.Body>
          </Card>
          <div class="pt-12"></div>
        </div>
      </div>
    </div>

  );
};

/*
function userReview(props){
  return (

          <Card border='primary' style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Text class="font-bold pl-1 pb-1">{props.data.courseID}</Card.Text>
              <Card.Text class=" italic pb-1">"{props.data.body}"</Card.Text>
              <Card.Text class=" pl-1 font-bold text-blue-500	">{props.data.rating}/5</Card.Text>
            </Card.Body>
          </Card>
  );
}
*/

export default Profile;

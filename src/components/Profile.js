import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

//mport { auth } from "../firebase";

const Profile = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  return (
<div>
<div class="header">
    <img src= {photoURL} alt="" class="floatdown"/>
</div>

<div class = "body">
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title class ="text-3xl font-bold pb-2.5	" >{displayName}</Card.Title>
    <Card.Text class= "pb-1.5">
      {email}
    </Card.Text>
    <Button variant="primary">Share Profile</Button>
  </Card.Body>
</Card>
<div class=" py-10 block rounded-md focus:underline">
        <h3 class="px-2">My Reviews</h3>
      </div>
      </div>
      </div>
 );
};

export default Profile;

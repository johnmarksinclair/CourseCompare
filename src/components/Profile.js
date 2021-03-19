import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button'
import { UserContext } from "../providers/UserProvider";
//mport { auth } from "../firebase";

const Profile = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email } = user;
    const review = {
      title: "Business and Finance",
      host: "University of Dublin, Trinity College",
      type: "MBA",
      description: "Lorem ipsum dolor sit amet, consectetur" +
        " adipiscing elit, sed do eiusmod tempor incididunt ut " +
        " nulla pariatur. Excepteur sint occaecat cupidatat non proident," +
        " sunt in culpa qui officia deserunt mollit anim id est laborum.",
      length: "2 years",
      cost: "15000",
      rating: 4.7,
    };
    
  return (
<div>
<div class="header">
    <img src= {photoURL} alt="my image" class="floatdown"/>
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

<div className="listdiv">
        <div
          className="btndiv flex-1" 
        
        >
          <div className="col-sm-4 col-md-2">
            <div className="title">{review.title}</div>
            <div>{review.host}</div>
            <div>{review.rating} ⭐️</div>
          </div>
          <div className="col-sm-4 col-md-2">
            <div>{review.type}</div>
            <div>{review.length}</div>
            <div>€{review.cost}</div>
          </div>
          <div className="col">
            <div>{review.description}</div>
          </div>
        </div>
      </div>

      </div>
</div>


  );
};

export default Profile;

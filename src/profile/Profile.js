import React from 'react'
import {Card , Button} from "react-bootstrap";
import PropTypes from "prop-types";
const Profile = (props) => {
  const handleName = () => alert(`My name is : ${props.name}`);

  return (
    <div>
        <Card style={{ width: '18rem' }}>
{props.children}
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
     {props.profession}
    </Card.Text>
    <Card.Text>
     {props.biography}
    </Card.Text>
    <Button variant="primary" onClick={handleName}>
      Name me
   </Button>
  </Card.Body>
</Card>



    </div>
  )
}

Profile.defaultProps = {
  name:"ASMA"
}

Profile.propTypes = {
  name:PropTypes.number,
  profession: PropTypes.number,
};

export default Profile;
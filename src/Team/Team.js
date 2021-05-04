import React from 'react';
import './Team.css'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = (props) => {
  const { strTeamBadge, strTeam, idTeam } = props.team;
  return (
    <div className="team-detail">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strTeamBadge} />
        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>
            Sports type: Football
    </Card.Text>
          <Link to={`/${idTeam}`}><Button variant="primary">Explore</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;

import React, { useEffect, useState } from 'react';
import './Home.css'
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <div className="background">
            <div className="header">
                <h1 className="text">Premier League</h1>
            </div>
            <div className="team-container">
                {teams.map(team => <Team team={team}></Team>)}
            </div>
        </div>
    );
};

export default Home;
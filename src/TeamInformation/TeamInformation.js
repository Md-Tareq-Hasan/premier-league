import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faMapPin, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import './TeamInformation.css'
import male from '../../src/Photo/male.png'
import female from '../../src/Photo/female.png'
import { Card } from 'react-bootstrap';
const TeamInformation = () => {
    const { idTeam } = useParams();

    const [teamInfo, setTeamInfo] =  useState({})
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamInfo(data.teams[0]))
    }, [idTeam])

    const { strCountry, intFormedYear, strGender, strTeam, strSport, strStadiumThumb, strTeamBadge } = teamInfo;
    let gender = strGender;
    let photo;
    if (gender === 'Male') {
        photo = male;
    }
    else if (gender === 'Female') {
        photo = female;
    }
    return (
        <div className="background-container">
            <div >
                <Card className="bg-dark text-white">
                    <Card.Img src={strStadiumThumb} className="image-container" alt="Card image" />
                    <Card.ImgOverlay>
                        < img src={strTeamBadge} className="team-logo" alt=""/>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className="info-container">
                <div className="text-edit">
                    <h3>{strTeam}</h3>
                    <p><FontAwesomeIcon icon={faMapPin} /> Founded: {intFormedYear}</p>
                    <p> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                </div>
                <img src={photo} alt="" />
            </div>
            <div className="lorem">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi fugit ab omnis porro, laborum reiciendis ex, adipisci excepturi nemo eveniet amet, sapiente quibusdam doloribus impedit eum id officiis mollitia vero debitis rerum iusto fugiat autem explicabo! Magnam ut repellat mollitia reprehenderit, temporibus distinctio in saepe, facere beatae velit, aliquid nostrum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum magnam, voluptatibus officia ratione nam sapiente doloribus fugiat accusantium hic aliquid laboriosam minus quis aliquam quaerat veniam quas est, rem quidem aperiam ad velit dolorem? Dicta commodi delectus beatae cumque impedit illo doloribus explicabo quia obcaecati cum quasi, cupiditate laudantium!</p>
            </div>
            <div>
                <footer className="icon-container">
                    <img src="https://i.pinimg.com/736x/0e/ec/93/0eec933cc069b6eff04800f6b9731677.jpg"  alt=""/>
                    <img src="https://sites.psu.edu/alexafischetti/wp-content/uploads/sites/14227/2014/08/twitter-old.jpg" alt="" />
                    <img src="https://cturtle.co/wp-content/uploads/2020/10/0-2-2.png" alt="" />
                </footer>
            </div>
        </div>

    );
};

export default TeamInformation;
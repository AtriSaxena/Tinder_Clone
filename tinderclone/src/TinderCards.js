import React, { Component } from 'react'
import {useState} from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([{
        name: "Akshay Kumar",
        url: "https://s3.india.com/imageTopics/b05748a8408fc8681e49b53b924f257e.jpg?impolicy=Medium_Widthonly&w=200"
    },
    {
        name: "Samantha",
        url: "https://www.filmibeat.com/img/2015/06/16-1434444000-tririvikram-to-do-a-puri-jagannadh-with-samantha.jpg"
    },
])

    const swiped = (direction,nameToDelete) => {
        console.log('You swiped: ' + nameToDelete)
      }
      
      const outOfFrame = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <div className="tinderCards">
                <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={()=> outOfFrame(person.name)}>
                    <div style={{ backgroundImage:`url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCard>
                ) )}
                </div>
            </div>
    )
}




export default TinderCards;

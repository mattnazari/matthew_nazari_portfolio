import React from "react";

const Card = ({ cardImage, cardTitle, cardDescription, cardlink }) => {
  return (
    <div className="cardCont">
      <div
        className="cardImage"
        style={{
          backgroundImage: cardImage
        }}
      ></div>
      <div className="cardInfo">
        <h2 className="cardTitle">{cardTitle}</h2>
        <p className="cardDesc">{cardDescription}</p>
        <a href={cardlink} className="learnMore">
          Learn More
        </a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  cardImage: "../../assets/graphics/WashareLogo.svg",
  cardTitle: "default title",
  cardDescription: "default description",
  cardlink: ""
};

export default Card;

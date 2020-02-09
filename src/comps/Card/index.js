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
      </div>
    </div>
  );
};

Card.defaultProps = {
  cardImage: "",
  cardTitle: "default title",
  cardDescription: "default description",
  cardlink: ""
};

export default Card;

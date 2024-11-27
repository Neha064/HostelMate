import React from "react";
import events from "./Events.module.css";
import janmastami from "./images/janmastami.jpg";
import chess from "./images/event1.png";
import cricket from "./images/sports1.jpg";
import heading from "./images/Dance4.jpeg";
const Events = () => {
  const images = [janmastami, chess, cricket];
  const alts = ["janmastami", "chess", "cricket"];
  return (
    <div className={events["main-container"]}>
      <div className={events["heading"]}>Events</div>
      <div className={events["row1"]}>
        <div className={events["column1"]}>
          <img src={heading} alt="heading" className={events["img1"]} />
        </div>
        <div className={events["column1"]}>
          <div className={events["subheading"]}>
            DFZ COMPETITION
          </div>
          <div className={events["description"]}>
            dfz Competition is an initiative that was started to provide relief from the monotonous routine of academics during
            their midterm breaks, wherein teams participate and compete against each other to win the Intra-Hostel Trophy.
            It serves as a perfect medium to bridge the gap between boarders. 
          </div>
        </div>
      </div>

      <div className={events["row2"]}>
        {images.map((img, index) => (
          <div className={events["column2"]} key={index}>
            <img src={img} alt={alts[index]} className={events["img2"]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

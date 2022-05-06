import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Cover.css";

function Cover() {
  return (
    <div
      className="cover-container"
      style={{ backgroundImage: "url(/images/cover1.jpg)" }}
    >
      <h1>Pack CL Graiet</h1>
      <p>
        Pour son 64 anniversaire et en exclusivité chez Graiet Msaken vous
        trouvez plein de promotion
      </p>
      <div className="cover-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Promovoir votre boutique
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Visiter cette boutique
        </Button>
      </div>
    </div>
  );
}

export default Cover;

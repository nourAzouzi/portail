import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function CardBlogItem(props) {
  return (
    <>
      <li className="cardsBlog__item">
        <Link className="cardsBlog__item__link" to={props.path}>
          <figure
            className="cardsBlog__item__pic-wrap"
            data-category={props.label}
          >
            <img
              className="cardsBlog__item__img"
              alt="image du radio"
              src={props.src}
            />
          </figure>
          <div className="cardsBlog__item__info">
            <h5 className="cardsBlog__item__text">{props.text}</h5>
            <br></br>
            <p className="cardsBlog__item__text">{props.description}</p>
            <br></br>

            <Button buttonSize="btn--wide" buttonColor="outline">
              Continuer à lire ..
            </Button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardBlogItem;

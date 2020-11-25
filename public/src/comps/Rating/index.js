import React from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';


library.add(faStarHalfAlt, farStar, fasStar);

const RatingStar = {
  size: 30,
  count: 5,
  color: "grey",
  activeColor: "#ffd310",
  value: 7.5,
  a11y: true,
  isHalf: true,
  emptyIcon: <FontAwesomeIcon icon={['far', 'star']}/>,
  halfIcon: <FontAwesomeIcon icon="star-half-alt" />,
  filledIcon: <FontAwesomeIcon icon={['fas', 'star']}/>,
  onChange: (newValue) => {
    console.log(`Example 2: new value is ${newValue}`);
  }
};

export default function Rating() {
  return <ReactStars {...RatingStar} />;
}

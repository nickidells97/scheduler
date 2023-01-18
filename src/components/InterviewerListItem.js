import React from "react";

import classNames from "classnames";

import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const InterviewerListClassName = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
    "interviewers__item-image": props.avatar,
  });

  return (
    <li className={InterviewerListClassName} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && <h2>{props.name}</h2>}
    </li>
  );
}

import React from "react";

import classNames from "classnames";

import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

  const InterviewerListClassName = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
    "interviewers__item-image": props.avatar
  });

  return (
    <li onClick={() => props.setInterviewer(props.id)} className={InterviewerListClassName}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.id}
  />
  {props.selected && <h2>{props.name}</h2>}
</li>
  );
}


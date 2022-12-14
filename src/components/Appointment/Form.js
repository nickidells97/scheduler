import React, { useState } from 'react';

import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form (props) {

    const [student, setStudent] = useState(props.student || "");
    const [interviewer, setInterviewer] = useState(props.interviewer || null);

    function reset() {
      setStudent("")
      setInterviewer(null);
    }

    function cancel () {
     reset()
      const values = props.onCancel;
      return values;
    }

  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form onSubmit={event => event.preventDefault()} autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        onChange={(e) => setStudent(e.target.value)} 
      />
    </form>
    <InterviewerList 
      interviewers={props.interviewers}
      value={interviewer ? interviewer.id : null}
      onChange={(interviewerId) => setInterviewer(props.interviewers.find((i) => i.id === interviewerId))}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={props.onSave}>Save</Button>
    </section>
  </section>
</main>
  )
}
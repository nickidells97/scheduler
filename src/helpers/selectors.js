//get the appointments data for the day

export const getAppointmentsForDay = (state, day) => {
  if (state.days.length === 0) {
    return [];
  }

  const currentDay = state.days.find((i) => i.name === day);

  if (currentDay === undefined) {
    return [];
  }
  return currentDay.appointments.map((id) => state.appointments[id]);
};

/*******************************************/

//get the interview data

export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }

  const interviewerID = interview.interviewer;
  return {
    student: interview.student,
    interviewer: state.interviewers[interviewerID],
  };
};

/*******************************************/

//get the interviewers list for the day

export const getInterviewersForDay = (state, day) => {
  if (state.days.length === 0) {
    return [];
  }

  const currentDay = state.days.find((i) => i.name === day);

  if (currentDay === undefined) {
    return [];
  }
  return currentDay.interviewers.map((id) => state.interviewers[id]);
};

import { useState, useEffect } from "react";

import "components/Application.scss";

import axios from "axios";

import "components/Appointment";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({ ...state, day });

  //GET request for days and appointments data from the api
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  //Book interview function passed to appointment component
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(appointments);

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => setState({
      ...state,
      appointments,
      days
    }));

  };

  // Cancel interview function
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(appointments);

    return axios.delete(`/api/appointments/${id}`).then(() => setState({
      ...state,
      appointments,
      days
    }));

  };

  const updateSpots = (interviews) => {

    const days = state.days.map((day) => {
      let spots = 0;
      for (let appointment of day.appointments) {

        if (interviews[appointment].interview === null) {
          spots += 1;
        }
      }
      return { ...day, spots };
    });
    return days;
  };

  return { state, setDay, bookInterview, cancelInterview };
}
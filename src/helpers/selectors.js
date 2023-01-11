export function getAppointmentsForDay(state, day) {

  if (state.days.length === 0) {
    return [];
  }

  let arrayOfAppointments = [];

  day = state.days.find(i => i.name === day)

  if(day === undefined) {
    return [];
  }

  let appointments = day.appointments;

  let hello = Object.keys(state.appointments).map(Number)
  
  appointments = hello.filter(i => appointments.includes(i));

  for (let appointment in state.appointments) {
    if (appointments.includes(state.appointments[appointment].id)) {
      arrayOfAppointments.push(state.appointments[appointment])
    }
  }
  return arrayOfAppointments;
}

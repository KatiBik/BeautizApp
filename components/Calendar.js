import React from 'react';
import RNSchedule from 'rnschedule';

const data = [
    {
      title: 'Lunch Appointment',
      subtitle: 'With Harry',
      start: new Date(2018, 11, 2, 13, 20),
      end: new Date(2018, 11, 2, 14, 20),
      color: '#390099',
    }
  ]

const App = () =>
  <RNSchedule
    dataArray={data}
    onEventPress={(appt) => console.log(appt)}
  />

export default App
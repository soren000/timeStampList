import React, { useState } from 'react';
import moment from 'moment';
import uuid from 'uuid';

const App = () => {
  const [timestamps, setTimestamps] = useState([]);

  const getTime = (e) => {
    e.preventDefault();

    const timeNow = new Date();
    const currentMoment = moment(timeNow);

    setTimestamps([
      ...timestamps,
      {
        time: currentMoment.format("h:mm:ss a - ddd, MMM Do YYYY"),
        key: uuid()
      }
    ])
  }

  const removeEntry = (x) => {
    setTimestamps(timestamps.filter(entry => entry.key !== x))
  }

  return (
    <div className="App">
      <h1>test</h1>
      <form onSubmit={getTime}>
        <button>Add Time</button>
      </form>
      <ul>
        {timestamps.map(({ key, time }) => (
          <li key={key}>
            {time}
            <button onClick={() => removeEntry(key)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;

// as a user, i want to click a button to show the time
// as a user, i want to click a button more than once and show each time in a list
// as a user, i want to delete individual items in a list

// map(timeStamp, index) => <li>{timeStamp}</li>
// map(timeStamp) => <li>{timeStamp.timeStamp}</li>


import React, { useState, useEffect } from 'react';
import moment from 'moment';

const LiveDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDateTime = moment(dateTime).format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div>
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default LiveDateTime;
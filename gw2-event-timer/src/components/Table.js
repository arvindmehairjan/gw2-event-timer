import React from 'react';
import jsonData from '../data/events.json';

const TableView = (props) => {
  const date = new Date();

  // Convert current time to minutes
  const currentTime = date.getHours() * 60 + date.getMinutes();

  // Access the events json
  const tyriaRegions = jsonData[props.region];

  const findUpcomingBosses = () => {
    let upcomingBosses = [];

    tyriaRegions.forEach(entry => {
      let upcomingEvents = [];

      entry.spawnTimer.forEach(eventTime => {
        const [hours, minutes] = eventTime.split(':').map(Number);
        const eventTimeInMinutes = hours * 60 + minutes;
        const timeDiff = eventTimeInMinutes - currentTime;

        // Check if the event is upcoming within the next two hours
        if (timeDiff >= 0 && timeDiff <= 120) {
          upcomingEvents.push({
            bossName: entry.bossName,
            timeRemaining: timeDiff
          });
        }
      });

      upcomingBosses = upcomingBosses.concat(upcomingEvents);
    });

    // Sort events by the least remaining time
    upcomingBosses.sort((a, b) => a.timeRemaining - b.timeRemaining);

    return upcomingBosses;
  };

  const upcomingBosses = findUpcomingBosses();

  const formatTime = time => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours} hours and ${minutes} minutes`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Boss Name</th>
            <th className="py-2 px-4 border-b text-left">Time Remaining</th>
          </tr>
        </thead>
        <tbody>
          {upcomingBosses.length > 0 ? (
            upcomingBosses.map((upcomingBoss, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{upcomingBoss.bossName}</td>
                <td className="py-2 px-4 border-b">{formatTime(upcomingBoss.timeRemaining)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="py-4 px-4 text-center">No upcoming events within the next two hours</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;

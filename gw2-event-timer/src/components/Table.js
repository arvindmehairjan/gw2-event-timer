import React, { useState } from 'react';
import jsonData from '../data/events.json';

const TableView = (props) => {
  const [copiedLink, setCopiedLink] = useState(null);

  const handleCopyToClipboard = (linkCode) => {
    navigator.clipboard.writeText(linkCode);
    setCopiedLink(linkCode);

    // Clear the copied link after a brief period
    setTimeout(() => {
      setCopiedLink(null);
    }, 2000);
  };

  const date = new Date();
  const currentTime = date.getHours() * 60 + date.getMinutes();
  const tyriaRegions = jsonData[props.region];

  const findUpcomingBosses = () => {
    let upcomingBosses = [];

    tyriaRegions.forEach(entry => {
      let upcomingEvents = [];

      entry.spawnTimer.forEach(eventTime => {
        const [hours, minutes] = eventTime.split(':').map(Number);
        const eventTimeInMinutes = hours * 60 + minutes;
        const timeDiff = eventTimeInMinutes - currentTime;

        if (timeDiff >= 0 && timeDiff <= 120) {
          upcomingEvents.push({
            bossName: entry.bossName,
            timeRemaining: timeDiff,
            linkCode: entry.linkCode || null, // Include link code in the data or null if not available
          });
        }
      });

      upcomingBosses = upcomingBosses.concat(upcomingEvents);
    });

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
            <th className="py-2 px-4 border-b text-left">Linkcode</th>
          </tr>
        </thead>
        <tbody>
          {upcomingBosses.length > 0 ? (
            upcomingBosses.map((upcomingBoss, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{upcomingBoss.bossName}</td>
                <td className="py-2 px-4 border-b">{formatTime(upcomingBoss.timeRemaining)}</td>
                <td className="py-2 px-4 border-b">
                  {upcomingBoss.linkCode ? (
                    <>
                      <button onClick={() => handleCopyToClipboard(upcomingBoss.linkCode)}>
                        Copy location
                      </button>
                      {copiedLink === upcomingBoss.linkCode && (
                        <span style={{ marginLeft: '5px', color: 'green' }}>Copied!</span>
                      )}
                    </>
                  ) : (
                    'N/A'
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-4 px-4 text-center">No upcoming events within the next two hours</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;

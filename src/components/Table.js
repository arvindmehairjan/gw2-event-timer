import React, { useState } from 'react';
import jsonData from '../data/events.json';

const Table = (props) => {
  const [copiedLinks, setCopiedLinks] = useState({});
  const date = new Date();
  const currentTime = date.getHours() * 60 + date.getMinutes();
  const tyriaRegions = jsonData[props.region];

  const handleCopyToClipboard = (linkCode, index) => {
    navigator.clipboard.writeText(linkCode);
    setCopiedLinks((prevCopiedLinks) => ({ ...prevCopiedLinks, [index]: true }));
    setTimeout(() => setCopiedLinks((prevCopiedLinks) => ({ ...prevCopiedLinks, [index]: false })), 2000);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours} hours and ${minutes} minutes`;
  };

  const isTimeCritical = (timeRemaining) => timeRemaining <= 10;

  const getBossesWithinTimeRange = (entry, index) => {
    return entry.spawnTimer
      .filter((eventTime) => {
        const [hours, minutes] = eventTime.split(':').map(Number);
        const eventTimeInMinutes = hours * 60 + minutes;

        // Calculate time difference considering the possibility of events crossing into the next day
        const timeDiff = eventTimeInMinutes > currentTime
          ? eventTimeInMinutes - currentTime
          : (24 * 60 - currentTime) + eventTimeInMinutes;

        return timeDiff >= 0 && timeDiff <= 120;
      })
      .map((eventTime) => {
        const [hours, minutes] = eventTime.split(':').map(Number);
        const eventTimeInMinutes = hours * 60 + minutes;

        // Calculate time difference considering the possibility of events crossing into the next day
        const timeDiff = eventTimeInMinutes > currentTime
          ? eventTimeInMinutes - currentTime
          : (24 * 60 - currentTime) + eventTimeInMinutes;

        return {
          bossName: entry.bossName,
          timeRemaining: timeDiff,
          linkCode: entry.linkCode || null,
          index: index,
        };
      });
  };

  const upcomingBosses = tyriaRegions.flatMap(getBossesWithinTimeRange);

  upcomingBosses.sort((a, b) => a.timeRemaining - b.timeRemaining);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Boss Name</th>
            <th className="py-2 px-4 border-b text-left">Time Remaining</th>
            <th className="py-2 px-4 border-b text-left">Waypoint Codes</th>
          </tr>
        </thead>
        <tbody>
          {upcomingBosses.length > 0 ? (
            upcomingBosses.map((upcomingBoss, index) => (
              <tr key={`${upcomingBoss.index}-${index}`}>
                <td className={`py-2 px-4 border-b ${isTimeCritical(upcomingBoss.timeRemaining) ? 'text-red-500' : ''}`}>
                  {upcomingBoss.bossName}
                </td>
                <td className={`py-2 px-4 border-b ${isTimeCritical(upcomingBoss.timeRemaining) ? 'text-red-500' : ''}`}>
                  {formatTime(upcomingBoss.timeRemaining)}
                </td>
                <td className="py-2 px-4 border-b">
                  {upcomingBoss.linkCode ? (
                    <>
                      <button onClick={() => handleCopyToClipboard(upcomingBoss.linkCode, upcomingBoss.index)} style={{ fontStyle: 'italic' }}>
                        Copy code
                      </button>
                      {copiedLinks[upcomingBoss.index] && (
                        <span style={{ marginLeft: '5px', color: 'green', fontStyle: 'italic' }}>Copied!</span>
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
              <td colSpan="3" className="py-4 px-4 text-center">
                No upcoming events within the next two hours
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// Provider
import { useAppManager, type AppInstance } from '../managers/AppManager';

// Helpers
import DateHelper from '../helpers/DateHelper';

// Icons
import { FaWindows } from 'react-icons/fa';
import { useState } from 'react';

function TaskBar() {
  const { openApps, toggleMinimization } = useAppManager();

  // State
  const [time, setTime] = useState<String>(DateHelper.getTime(new Date()));
  // const [date, setDate] = useState<String>(DateHelper.getDate(new Date()));

  const toggleAppMinimize = (app: AppInstance) => {
    toggleMinimization(app.id);
  };

  setInterval(() => {
    setTime(DateHelper.getTime(new Date()));
  }, 2000);

  return (
    <div className="absolute flex bottom-0 w-full bg-gray-500 justify-between items-center">
      <div className="flex">
        <FaWindows size={24} className="mr-4 m-3" />
        <div className="gap-1 flex">
          {openApps.map((app) => {
            return (
              <div onClick={() => toggleAppMinimize(app)} key={app.id} className="flex align-contents-center gap-2 hover:bg-gray-800 p-3">
                <img className="w-4" src={app.icon} alt="" />
                <p>{app.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mr-4 m-3">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default TaskBar;

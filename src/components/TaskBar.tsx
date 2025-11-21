// Provider
import { useAppManager, type AppInstance } from "../managers/AppManager";

// Icons
import { FaWindows } from "react-icons/fa";

function TaskBar() {
    const {openApps, toggleMinimization}   = useAppManager()

    const toggleAppMinimize = (app: AppInstance) => {
        toggleMinimization(app.id)
    }

    return(
        <div className="absolute flex bottom-0 w-full bg-gray-500">
            <FaWindows size={24} className="mr-4 m-3"/>
            <div className="gap-1 flex">
            {
                openApps.map(app => {
                    return(
                        <div onClick={() => toggleAppMinimize(app)} className="flex align-contents-center gap-2 hover:bg-gray-800 p-3">
                            <img className="w-4" src={app.icon} alt="" />
                            <p>{app.name}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default TaskBar;
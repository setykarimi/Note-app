import { HiChevronRight } from "react-icons/hi";
import { BiSolidCalendarX  } from "react-icons/bi";

export default function Task({ task }) {
  const showTaskDetails = (task) => {
  };
  return (
    <div
      className="p-4 cursor-pointer text-gray-600 border-b border-b-gray-150 flex justify-between items-center"
      onClick={() => showTaskDetails(task)}
    >
      <div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 border border-gray-100" />
          <span>{task.title}</span>
        </div>
        {(task.date || task.label) && (
          <div className="flex items-center flex-wrap gap-6 mt-2 ml-6">
            {task.date && (
              <div className="flex items-center text-gray-600 gap-1">
                <BiSolidCalendarX size={14} />
                <span className="text-xs  font-bold">{task.date}</span>
              </div>
            )}

            {task.label && (
              <div className="flex items-center text-gray-600 gap-2 text-xs font-bold">
                <span
                  className={`${task.label.color} w-3 h-3`}
                  style={{ borderRadius: "2px" }}
                ></span>
                {task.label.title}
              </div>
            )}
          </div>
        )}
      </div>
      <HiChevronRight size={22} />
    </div>
  );
}

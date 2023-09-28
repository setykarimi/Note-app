import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BiSolidCalendarX } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";

export default function TaskList() {
  const tasksList = [
    {
      id: 1,
      title: "Research content ideas",
    },
    {
      id: 2,
      title: "Create a database of guest authors",
    },
    {
      id: 3,
      title: "Renew driver's license",
      date: "22-03-22",
      label: {
        title: "Personal",
        color: "bg-red-500",
      },
      subtask: 1,
    },
    {
      id: 4,
      title: "Consult accountant",
      label: {
        title: "List 1",
        color: "bg-yellow-500",
      },
      subtask: 3,
    },
    {
      id: 5,
      title: "Print buisness card",
    },
  ];

  const [tasks, setTasks] = useState(tasksList);

  return (
    <>
      <button className="border border-gray-150 px-6 py-4 text-gray-400 rounded-lg w-full text-left flex items-center gap-2">
        <IoMdAdd className="text-gray-400" size={22} />
        Add New Task
      </button>
      <div className="mt-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}

const Task = ({ task }) => {
  const showTaskDetails = (task) => {
console.log(task)
  }
  return (
    <div className="p-4 cursor-pointer text-gray-600 border-b border-b-gray-150 flex justify-between items-center" onClick={()=>showTaskDetails(task)}>
      <div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 border border-gray-100" />
          <span>{task.title}</span>
        </div>
        {(task.date || task.label || task.subtask) && (
          <div className="flex items-center flex-wrap gap-6 mt-2 ml-6">
            {task.date && (
              <div className="flex items-center text-gray-600 gap-1">
                <BiSolidCalendarX size={14} />
                <span className="text-xs  font-bold">{task.date}</span>
              </div>
            )}

            {task.subtask && (
              <div className="flex items-center text-gray-600 gap-2 text-xs font-bold">
                <span className="bg-gray-200 font-bold w-7 text-center py-[1px] rounded">
                  {task.subtask}
                </span>
                Subtasks
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
      <HiChevronRight size={22}/>
    </div>
  );
};

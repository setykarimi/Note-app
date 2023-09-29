import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Task from "./task";
import TaskForm from "./taskForm";

export default function TaskList() {
  const [showTaskForm, setShowTaskForm] = useState(false)
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
    },
    {
      id: 4,
      title: "Consult accountant",
      label: {
        title: "List 1",
        color: "bg-yellow-500",
      },
    },
    {
      id: 5,
      title: "Print buisness card",
    },
  ];

  const [tasks, setTasks] = useState(tasksList);

  const addNewNoteHandler = () => {
    setShowTaskForm(true)
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className={showTaskForm ? 'col-span-2' : 'col-span-3'}>
        <button
          className="border border-gray-150 px-6 py-4 text-gray-400 rounded-lg w-full text-left flex items-center gap-2"
          onClick={addNewNoteHandler}
        >
          <IoMdAdd className="text-gray-400" size={22} />
          Add New Task
        </button>
        <div className="mt-4">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div>
      {showTaskForm && <TaskForm setTasks={setTasks} setShowTaskForm={setShowTaskForm}/>}
    </div>
  );
}

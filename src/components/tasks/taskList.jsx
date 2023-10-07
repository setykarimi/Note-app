import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Task from "./task";
import TaskForm from "./taskForm";

export default function TaskList() {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const tasksList = [
    {
      id: 1,
      title: "Research content ideas",
      date: "2023-04-19T18:03:55.422Z",
      completed: false,
    },
    {
      id: 2,
      title: "Create a database of guest authors",
      date: "2023-08-29T18:03:55.422Z",
      completed: false,
    },
    {
      id: 3,
      title: "Renew driver's license",
      date: "2023-09-29T18:03:55.422Z",
      label: {
        title: "Personal",
        color: "bg-red-500",
      },
      completed: false,
    },
    {
      id: 4,
      title: "Consult accountant",
      date: "2023-10-27T18:03:55.422Z",
      label: {
        title: "List 1",
        color: "bg-yellow-500",
      },
      completed: false,
    },
    {
      id: 5,
      title: "Print buisness card",
      date: "2023-05-30T18:03:55.422Z",
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState(tasksList);

  const addNewNoteHandler = () => {
    setShowTaskForm(true);
  };

  const onComplete = (e) => {
    const id = e.target.value;
    setTasks((prv) =>
      prv.map((task) =>
        task.id == id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
      <div className={showTaskForm ? "xl:col-span-2" : "col-span-3"}>
        <button
          className="border border-gray-150 px-6 py-4 text-gray-400 rounded-lg w-full text-left flex items-center gap-2"
          onClick={addNewNoteHandler}
        >
          <IoMdAdd className="text-gray-400" size={22} />
          Add New Task
        </button>
        <div className="mt-4">
          {tasks.map((task) => (
            <Task key={task.id} task={task} onComplete={onComplete} />
          ))}
        </div>
      </div>
      {showTaskForm && (
        <TaskForm setTasks={setTasks} setShowTaskForm={setShowTaskForm} />
      )}
    </div>
  );
}

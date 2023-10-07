import React, { useState } from "react";
import { ImCross } from "react-icons/im";

export default function TaskForm({ setShowTaskForm, setTasks }) {
  const [formData, setFormData] = useState({
    id: Math.round(100),
    title: "",
    desc: "",
    completed: false,
    label: {
      title: "",
      color: "",
    },
    date: new Date().toISOString(),
  });

  //   change input handler
  const changeInputHandler = (e) => {
    const { name, value } = e.target;

    if (name === "label") {
      setFormData({
        ...formData,
        label: {
          title: value,
          color: e.target[e.target.selectedIndex].getAttribute("data-color"),
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  //   Save task handler
  const saveTaskHandler = () => {
    setTasks((prv) => [...prv, formData]);
    setFormData({
      id: Math.round(100),
      title: "",
      desc: "",
      completed: false,
      label: {
        title: "",
        color: "",
      },
      date: new Date().toISOString(),
    });
  };

  //   Close form handler
  const closeFormHandler = () => {
    setShowTaskForm(false);
  };
  
  return (
    <div className="p-6 bg-gray-100 rounded-xl flex flex-col sidebar" id="sidebar">
      <div className="flex items-center justify-between">
        <h3 className="lg:text-2xl text-lg text-gray-600 font-bold">Task:</h3>
        <button onClick={closeFormHandler}>
          <ImCross size={15} className="text-gray-500" />
        </button>
      </div>
      <input
        className="mt-4 border border-gray-200 rounded-lg text-sm outline-none bg-transparent py-3 px-2 w-full text-gray-600 placeholder:text-gray-500"
        name="title"
        value={formData.title}
        onChange={changeInputHandler}
        placeholder="Task"
      />
      <textarea
        className="mt-4 border border-gray-200 rounded-lg text-sm outline-none bg-transparent py-3 px-2 w-full text-gray-600 placeholder:text-gray-500"
        placeholder="Description"
        name="desc"
        value={formData.desc}
        onChange={changeInputHandler}
        rows={5}
      />

      <div className="form-control flex items-center gap-2 my-4">
        <label
          htmlFor="label"
          className="w-1/4 text-sm block text-gray-600 font-medium"
        >
          List
        </label>
        <select
          className="border border-gray-200 rounded-lg outline-none bg-transparent p-1 text-gray-600 placeholder:text-gray-500 text-sm"
          name="label"
          onChange={changeInputHandler}
        >
          <option value="Personal" data-color="bg-red-500">
            Personal
          </option>
          <option value="Work" data-color="bg-cyan-500">
            Work
          </option>
          <option value="List 1" data-color="bg-yellow-500">
            List 1
          </option>
        </select>
      </div>

      <button
        className="mt-auto w-full font-medium bg-yellow-400 py-2 rounded-lg"
        onClick={saveTaskHandler}
      >
        Save Task
      </button>
    </div>
  );
}

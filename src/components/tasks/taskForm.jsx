import React, { useState } from "react";
import { ImCross } from "react-icons/im";

export default function TaskForm({ setShowTaskForm, setTasks }) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    label: {
        title: ""
    },
  });
  const changeInputHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const closeFormHandler = () => {
    setShowTaskForm(false);
  };

  const saveTaskHandler = () => {
    setTasks((prv) => [...prv, formData]);
    setFormData({
      title: "",
      desc: "",
      label: "",
    });
  };

  return (
    <div className="p-6 bg-gray-100 rounded-xl flex flex-col sidebar">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl text-gray-600 font-bold">Task:</h3>
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

      <div className="form-control flex items-center gap-2 mt-4">
        <label
          htmlFor="label.title"
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

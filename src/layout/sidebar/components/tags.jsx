import React from "react";
import { IoMdAdd } from "react-icons/io";

export default function Tags() {
  const tags = [
    {
      name: "Tag 1",
      color: "bg-[#D1EAED]",
    },
    {
      name: "Tag 2",
      color: "bg-[#FFDADA]",
    },
  ];
  return (
    <div className="mt-4">
      <span className="text-xs text-gray-600 font-bold block text-left">
        TAGS
      </span>
      <div className="flex flex-row flex-wrap gap-1 mt-2">
        {tags.map((tag) => (
          <Tag tag={tag} />
        ))}
        <button className="flex gap-1 items-center bg-gray-200 text-sm rounded-md font-bold text-gray-600 px-2">
          <IoMdAdd className="text-gray-500" size={15} />
          Add Tag
        </button>
      </div>
    </div>
  );
}

const Tag = ({ tag }) => {
  return (
    <span
      className={`block text-sm py-[6px] px-4 w-fit rounded-md font-bold text-gray-600 ${tag.color}`}
    >
      {tag.name}
    </span>
  );
};

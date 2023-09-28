import React from "react";
import { IoMdAdd } from "react-icons/io";

export default function Tags({ expanded }) {
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
      <span
        className={`text-xs text-gray-600 font-bold block ${
          expanded ? "text-left" : "text-center"
        }`}
      >
        TAGS
      </span>
      <div
        className={`flex ${
          expanded ? "flex-row" : "flex-col items-center"
        } flex-wrap gap-1 mt-2`}
      >
        {tags.map((tag) => (
          <Tag tag={tag} expanded={expanded} />
        ))}
        <button
          className={`flex gap-1 items-center bg-gray-200 ${
            expanded
              ? "text-sm py-[6px] px-4"
              : "text-xs p-1 w-full justify-center"
          } text-sm rounded-md font-bold text-gray-600`}
        >
          <IoMdAdd className="text-gray-500" size={15} />
          {expanded && "Add Tag"}
        </button>
      </div>
    </div>
  );
}

const Tag = ({ tag, expanded }) => {
  return (
    <span
      className={`block  ${
        expanded
          ? "text-sm py-[6px] px-4 w-fit rounded-md"
          : "text-xs p-1 w-full rounded text-center"
      }  font-bold text-gray-600 ${tag.color}`}
    >
      {tag.name}
    </span>
  );
};

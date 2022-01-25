import React from "react";

export const Tab = ({ abledTab, setAbledTab }) => {
  const handleTab = (tab) => {
    setAbledTab(tab)
  }
  const activeClassName = (isActive) => {
    if (isActive) {
      return "bg-primary inline-block border-l-2 border-t-2 border-r-2 rounded-t py-2 px-8 text-teal-500 font-semibold";
    } else {
      return "bg-primary inline-block py-2 px-8 text-teal-500 hover:text-teal-700 font-semibold";
    }
  }
  return (
    <ul className="flex justify-around border-b">
      <li className="-mb-px">
        <div
          className={activeClassName(abledTab === "all")}
          onClick={() => handleTab("all")}
        >
          Active
        </div>
      </li>
      <li className="-mb-px">
        <div
          className={activeClassName(abledTab === "removed")}
          onClick={() => handleTab("removed")}
        >
          Trash
        </div>
      </li>
    </ul>
  );
};

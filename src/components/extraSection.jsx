import React from "react";

function ExtraSection({ description }) {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <p className="mb-3  text-gray-700 dark:text-gray-400 ">{description}</p>
    </div>
  );
}

export default ExtraSection;

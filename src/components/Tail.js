import React from 'react';

function Tail () {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Item List</h2>
      <ul className="flex space-y-4">
        <li className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <span className="font-semibold">Item 1</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          <span className="font-semibold">Item 2</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
          <span className="font-semibold">Item 3</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded-full"></div>
          <span className="font-semibold">Item 4</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
          <span className="font-semibold">Item 5</span>
        </li>
      </ul>
    </div>
  );
}

export default Tail
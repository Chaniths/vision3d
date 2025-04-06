import React from 'react';

export default function DesignSearchBar() {
  

  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 w-full px-4">
      
      <div className="flex flex-col sm:flex-row items-center flex-1 gap-2 w-full">
        <input
          type="text"
          placeholder="Enter name......"
          className="w-full sm:w-3/4 border text-black border-gray-300 rounded px-4 py-2"
        />
        <button className="w-full sm:w-auto bg-[#718DAD] text-black px-4 py-2 rounded">
          Search
        </button>
      </div>

          <div className="w-full sm:w-auto relative">
        <select
          className="w-full sm:w-auto bg-[#718DAD] text-black px-4 py-2 pr-10 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-[#5c7694] cursor-pointer"
        >
          <option value="Last Update">Last Update</option>
          <option value="Created Date">Created Date</option>
        </select>
       
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          ▼
        </div>
</div>
    </div>
  );
}

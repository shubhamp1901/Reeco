import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPrint } from "@fortawesome/free-solid-svg-icons";
import Table from "./Table";

const Items = () => {
  return (
    <div className="pt-10 flex justify-center">
      <div className="w-3/4 bg-white flex flex-col rounded-lg border-2">
        {/* Topbar */}
        <div className="flex flex-row justify-between w-full h-[50px] py-10 items-center">
            <div>
                <input className="border-2 border-solid w-[500px] ml-4 pl-4 py-2 my-4 outline-none rounded-full" type="text" placeholder="search..." />
                <FontAwesomeIcon className="mt-8 text-gray-400 ml-[-33px]" icon={faMagnifyingGlass} />
            </div>

            <div className="flex mr-16">
                <button className='rounded-full border-green-700 border-solid border-2 text-green-700 p-2 h-10 w-20 mr-6 text-sm '>Add Item</button>
                <FontAwesomeIcon className="mt-2 text-2xl text-green-600"  icon={faPrint} />
            </div>
        </div>

        <Table />
      </div>
    </div>
  );
};

export default Items;

import React from "react";

const SubItems = () => {
  return (
    <div className="pt-10 flex justify-center">
      <div className="w-3/4 bg-white flex flex-wrap rounded-lg justify-between py-5 border-2">
        <div className="max-w-[220px]  flex flex-col justify-start px-10">
          <span className="text-gray-400 font-semibold text-[16px]">
            Supplier
          </span>
          <h4 className="text-black font-bold text-[16px]">
            East coast fruits & vegetables
          </h4>
        </div>
        <span className="h-100 border border-solid border-gray"></span>
        <div className="max-w-[220px]  flex flex-col justify-start px-10">
          <span className="text-gray-400 font-semibold text-[16px]">
            Shipping Date
          </span>
          <h4 className="text-black font-bold text-[16px]">Thu, Feb 10</h4>
        </div>
        <span className="h-100 border border-solid border-gray"></span>
        <div className="max-w-[220px]  flex flex-col justify-start px-10">
          <span className="text-gray-400 font-semibold text-[16px]">Total</span>
          <h4 className="text-black font-bold text-[16px]">$ 15,028.3</h4>
        </div>
        <span className="h-100 border border-solid border-gray"></span>
        <div className="max-w-[220px]  flex flex-col justify-start px-10">
          <span className="text-gray-400 font-semibold text-[16px]">
            Category
          </span>
          <h4 className="text-black font-bold text-[16px]">Reudx Toolkit</h4>
        </div>
        <span className="h-100 border border-solid border-gray"></span>
        <div className="max-w-[220px]  flex flex-col justify-start px-10">
          <span className="text-gray-400 font-semibold text-[16px]">
            Department
          </span>
          <h4 className="text-black font-bold text-[16px]">300-444-678</h4>
        </div>
        <span className="h-100 border border-solid border-gray"></span>
        <div className="max-w-[220px]  flex flex-col justify-start px-10">
          <span className="text-gray-400 font-semibold text-[16px]">
            Status
          </span>
          <h4 className="text-black font-bold text-[16px]">
            Awaiting Your Approval
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SubItems;

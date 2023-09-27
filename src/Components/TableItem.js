import React from "react";

const TableItem = ({ data, statusChangeToApprove, handleShow, image}) => {
  return (
    <>
      <tr key={data.id}>
        <td>
          <img src={image} width="50px" height="50px" />
        </td>
        <td className="w-[300px]">{data.product_name}</td>
        <td>{data.brand}</td>
        <td>{data.price}</td>
        <td>{data.quantity}</td>
        <td>{data.total}</td>
        <td>
          <span
            className={`${
              data.status === "Approved"
                ? "bg-green-400 text-white h-1/2 py-2 px-2 rounded-full"
                : data.status === "Missing"
                ? "bg-orange-400 text-white h-1/2 py-2 px-2 rounded-full"
                : data.status === "Missing-Urgent"
                ? "bg-purple-400 text-white h-1/2 py-2 px-2 rounded-full"
                : ""
            }`}
          >
            {data.status}
          </span>
        </td>
        <tr className="flex items-center mt-4">
          <td>
            <button onClick={() => statusChangeToApprove(data.id)}>✅</button>
          </td>
          <td>
            <button onClick={() => handleShow(data.id)}>❌</button>
          </td>
          <td>edit</td>
        </tr>
      </tr>
    </>
  );
};

export default TableItem;

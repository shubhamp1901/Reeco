import React, { useEffect, useRef, useState } from "react";
import fakeData from "../data.json";
import { useTable } from "react-table";
import ModalExample from "./Modal";
import TableItem from "./TableItem";

const image = require("../assets/AvocadoHass.jpg");

const Table = () => {
  let [product, setProduct] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    product = fakeData.find((it) => it.id === id);
    setProduct(product)
    setShow(true)
};

  function statusChangeToApprove(id) {
    product = fakeData.find((it) => it.id === id);
    product.status = "Approved";
    setProduct((prev) => ({ ...prev }));
  }

  return (
    <div className="tableWrap">
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="w-[300px]">Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {fakeData.map((data) => (
            <TableItem data={data} image={image} handleShow={handleShow}  statusChangeToApprove={statusChangeToApprove} handleClose={handleClose} show={show} />
          ))}
        </tbody>
      </table>
      <ModalExample handleClose={handleClose} show={show} data={product} setProduct={{setProduct}} />
    </div>
  );
};

export default Table;

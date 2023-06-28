import React, { useState } from "react";
import style from "./style.module.css";

const HistoryTable = (props) => {
  const [rows, setRows] = useState(props.initialRows);

  const addRow = () => {
    if (rows.length < 5) {
      setRows([
        ...rows,
        <tr>
          <td>Lowellda</td>
          <td>20.01.2022</td>
          <td>27.01.2022</td>
        </tr>,
      ]);
    }
  };

  return (
    <div className="history">
      <h2>Ранее брали</h2>
      <table width={"100%"}>
        <thead>
          <tr>
            <th align="left" width={"40%"}>
              nickname
            </th>
            <th align="left" width={"30%"}>
              взял
            </th>
            <th align="left" width={"30%"}>
              сдал
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lowellda</td>
            <td>20.01.2022</td>
            <td>27.01.2022</td>
          </tr>
          {/* {rows.map(row => row)} */}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;

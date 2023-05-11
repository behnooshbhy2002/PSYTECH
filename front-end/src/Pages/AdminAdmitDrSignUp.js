import React, { useState } from "react";
function TableRows({ rows, tableRowRemove, onValUpdate, tableRowAccept }) {
  return rows.map((rowsData, index) => {
    const { name, medicalNumber } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={name}
            onChange={(event) => onValUpdate(index, event)}
            name="name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={medicalNumber}
            onChange={(event) => onValUpdate(index, event)}
            name="medicalNumber"
            className="form-control"
          />
        </td>
        {/* <td>
          <input
            type="text"
            value={profile}
            onChange={(event) => onValUpdate(index, event)}
            name="profile"
            className="form-control"
          />
        </td> */}
        <td>
          <button
            className="btn btn-danger"
            onClick={() => tableRowRemove(index)}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            className="btn btn-success"
            onClick={() => tableRowAccept(index)}
          >
            Accept
          </button>
        </td>
      </tr>
    );
  });
}
function Table() {
  const [rows, initRow] = useState([]);
  const addRowTable = () => {
    const data = [
      { name: "behnoosh", medicalNumber: "123456" },
      {
        name: "atefeh",
        medicalNumber: "98765",
      },
      {
        name: "faezeh",
        medicalNumber: "818181",
      },
    ];
    initRow([...rows, ...data]);
  };

  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const tableRowAccept = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const hi = [...rows];
    hi[i][name] = value;
    initRow(hi);
  };
  return (
    <>
      <h2 className="text-center">React JS Add / Delete Table Rows Example</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>medicalNumber</th>
            <th>Profile</th>
            <th>
              <button className="btn btn-danger" onClick={addRowTable}>
                Show Requests
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            tableRowAccept={tableRowAccept}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
    </>
  );
}
export default Table;

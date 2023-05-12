import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSendSignUp } from "../actions/userActions";
import Loader from "../Components/Error&Loading/Loader";
import Message from "../Components/Error&Loading/Message";
import "../Components/style/AdminAdmitDrSignUp.css";
function TableRows({ rows, tableRowRemove, onValUpdate, tableRowAccept }) {
  return rows.map((rowsData, index) => {
    const { fullname, medicalNum } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={fullname}
            onChange={(event) => onValUpdate(index, event)}
            name="name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={medicalNum}
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
function AdminAdmitDrSignUp() {
  const [rows, initRow] = useState([]);
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userSendSignUp(user));
  }, [dispatch, user]);

  const signupList = useSelector((state) => state.userSendSignUp);

  const { error, loading, userInfo } = signupList;

  const addRowTable = () => {
    // const data = [
    //   { name: "behnoosh", medicalNumber: "123456" },
    //   {
    //     name: "atefeh",
    //     medicalNumber: "98765",
    //   },
    //   {
    //     name: "faezeh",
    //     medicalNumber: "818181",
    //   },
    // ];
    // initRow([...rows, ...data]);

    initRow(userInfo);
  };

  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    let obj = rows[index];
    obj.active = false;
    setUser(obj);
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const tableRowAccept = (index) => {
    const dataRow = [...rows];
    let obj = rows[index];
    obj.active = true;
    setUser(obj);
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
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <h2 className="text-center">درخواست ثبت نام</h2>

          <div className="Show-requests-button-div">
            <button
              className="Show-requests-button btn btn-info"
              onClick={addRowTable}
            >
              Show Requests
            </button>
          </div>
          <div className="signup-table-show-admin">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>MedicalNumber</th>
                  <th>Delete</th>
                  <th>Accept</th>
                  {/* <th></th> */}
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
          </div>
        </div>
      )}
    </>
  );
}
export default AdminAdmitDrSignUp;

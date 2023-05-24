import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSendSignUp } from "../actions/userActions";
import { useNavigate, useLocation } from "react-router-dom";
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
            className="btn btn-success"
            onClick={() => {
              tableRowAccept(index);
              // setDisItem();
              // addQuery("disease", item.id);
            }}
          >
            Accept
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => tableRowRemove(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
}
function AdminAdmitDrSignUp() {
  const [rows, initRow] = useState([]);

  const loc = useLocation();
  const par = loc.search;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userSendSignUp(par));
  }, [dispatch, par]);

  const signupList = useSelector((state) => state.userSendSignUp);

  const { error, loading, userInfo } = signupList;

  const addRowTable = () => {
    initRow(userInfo);
  };

  const location = useLocation();
  const history = useNavigate();

  const addQuery = (key, value) => {
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    history({
      pathname: pathname,
      search: searchParams.toString(),
    });
  };

  // const removeQuery = (key) => {
  //   let pathname = location.pathname;
  //   let searchParams = new URLSearchParams(location.search);
  //   searchParams.delete(key);
  //   history({
  //     pathname: pathname,
  //     search: searchParams.toString(),
  //   });
  // };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    let obj = rows[index];
    obj.active = false;
    //console.log(obj);
    addQuery(obj.medicalNum, "disactive");
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const tableRowAccept = (index) => {
    const dataRow = [...rows];
    let obj = rows[index];
    obj.active = false;
    //console.log(obj);
    addQuery(obj.medicalNum, "active");
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
          <h2 className="text-center">درخواست‌های ثبت‌نام</h2>

          <div className="Show-requests-button-div">
            <button
              className="Show-requests-button btn btn-info"
              onClick={addRowTable}
            >
              Show Requests
            </button>
          </div>
          <div className="signup-table-show-admin">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>MedicalNumber</th>
                  <th>Accept</th>
                  <th>Delete</th>

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

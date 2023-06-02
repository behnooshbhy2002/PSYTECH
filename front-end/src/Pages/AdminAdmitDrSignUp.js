import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userGetSignUp, userSendSignUpStatus } from "../actions/userActions";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../Components/Error&Loading/Loader";
import Message from "../Components/Error&Loading/Message";
import "../Components/style/AdminAdmitDrSignUp.css";
import Toast from "../Components/Error&Loading/toast";
// function TableRows({ rows, tableRowRemove, onValUpdate, tableRowAccept }) {

// }
function AdminAdmitDrSignUp() {
  const [rows, initRow] = useState([]);
  const [userFull, setUserFull] = useState("");
  const [messageType, SetMessageType] = useState("");
  const [buttonclicked, setButtonclicked] = useState(false);
  const [id, setId] = useState("");
  const [status, setStatus] = useState(false);

  const loc = useLocation();
  const par = loc.search;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userGetSignUp(par));
    dispatch(userSendSignUpStatus(id, status));
  }, [dispatch, par, id, status]);

  const signupList = useSelector((state) => state.userGetSignUp);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { error, loading, list } = signupList;
  console.log(list);

  const addRowTable = () => {
    initRow(list);
    setButtonclicked(false);
  };

  //setButtonclicked(false);
  const location = useLocation();
  const history = useNavigate();

  let obj;

  const addQuery = (key, value) => {
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    searchParams.delete(obj.medical_number);
    searchParams.set(key, value);
    history({
      pathname: pathname,
      search: searchParams.toString(),
    });
  };

  const removeQuery = (key) => {
    console.log(key);
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    searchParams.delete(key);
    history({
      pathname: pathname,
      search: searchParams.toString(),
    });
  };

  const tableRowRemove = (index) => {
    //removeQuery(loc.search);
    const dataRow = [...rows];
    obj = rows[index];
    // obj.active = false;
    addQuery(obj.medical_number, "inactive");

    setId(obj.id);
    setStatus(false);

    dataRow.splice(index, 1);
    initRow(dataRow);
    enableNotify(obj, "reject");
  };

  const tableRowAccept = (index) => {
    //removeQuery(loc.search);
    const dataRow = [...rows];
    obj = rows[index];
    // obj.active = false;
    addQuery(obj.medical_number, "active");

    setId(obj.id);
    setStatus(true);

    dataRow.splice(index, 1);
    initRow(dataRow);
    enableNotify(obj, "accept");
  };

  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const hi = [...rows];
    hi[i][name] = value;
    initRow(hi);
  };

  const enableNotify = (obj, mess) => {
    setButtonclicked(true);
    setUserFull(obj.full_name);
    SetMessageType(mess);
  };
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : userInfo.role == "admin" ? (
        <div>
          <Toast
            userFull={userFull}
            messageType={messageType}
            buttonclicked={buttonclicked}
            setButtonclicked={setButtonclicked}
          ></Toast>
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
                {rows.map((rowsData, index) => {
                  const { full_name, medical_number } = rowsData;
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          value={full_name}
                          // onChange={(event) => onValUpdate(index, event)}
                          name="name"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={medical_number}
                          // onChange={(event) => onValUpdate(index, event)}
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
                          }}
                        >
                          Accept
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            tableRowRemove(index);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Message variant="danger">{"دسترسی غیرمجاز"}</Message>
      )}
    </>
  );
}
export default AdminAdmitDrSignUp;

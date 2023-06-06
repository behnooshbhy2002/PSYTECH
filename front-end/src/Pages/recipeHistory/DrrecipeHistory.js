import React, { useEffect, useState } from "react";
import RecipeItem from "./recipeItem";
import "./DrrecupeHistory.css";
import { InputTextarea } from "primereact";
import { Button } from "primereact/button";
import { Row, Column } from "react";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function RecipeHistory() {
  const navigate = useNavigate();
  //const [name, setName] = useState("علی عزیزی");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [preList, setPreList] = useState();
  // const str = "نسخه های بیمار: " + name;

  const handleSubmmitPre = () => {
    axios
      .post(`http://127.0.0.1:8000/appointments/create_prescription/`, {
        content: value,
        pk: localStorage.getItem("page_id")
      })
      .then((response) => {
        console.log(response);
        // navigate("/RecipeHistory", { state: { ...response.data } });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchData = () => {
    return axios
      .get(
        `http://127.0.0.1:8000/appointments/create_prescription/?id=${localStorage.getItem(
          "page_id"
        )}`
      )
      .then((response) => {
        console.log(response.data);
        setPreList(response.data);
        // setSession_list(fileList?.session_list);
        // setMedical_recordeID(fileList?.medical_record?.id);
        // console.log(medical_recordeId)
        //doctor = response.data;
        //setDrList(response.data);
        //console.log(drList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // const location = useLocation();
  // let FileList = location.state;
  // console.log(FileList);
  // let session_list = FileList?.session_list;
  // let medical_recorde = FileList?.medical_recorde?.id;
  // console.log(session_list);

  return (
    <div dir="rtl">
      <h2>{"str"}</h2>
      <div>
        <div className="card-bodyy kkkk">
          <TextField
            fullWidth
            id="outlined-basic"
            label="موضوع"
            variant="outlined"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>

        <div className="card-bodyy">
          <InputTextarea
            className="txtAddRecipe"
            autoResize
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={18}
            cols={20}
          />
        </div>
        <Button
          className="btn-save-rec"
          label="ثبت نسخه"
          onClick={handleSubmmitPre}
        />
      </div>
      <div className="recipe-wrapper">
        {preList?.map((item) => {
          return (
            <>
                      <RecipeItem className="recipeItem" data={item}></RecipeItem>;

            </>
          )
                })}
      </div>
    </div>
  );
}

export default RecipeHistory;

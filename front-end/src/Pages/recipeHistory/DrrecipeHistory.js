import React, { useState } from "react";
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
  const [name, setName] = useState("علی عزیزی");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const str = "نسخه های بیمار: " + name;

  const handleSubmmitPre = () => {
    const { data } = axios
      .post(`http://127.0.0.1:8000/appointments/request_list/`, {
        pre: name,
        content: value,
        title: title,
        date: new Date(),
      })
      .then((response) => {
        console.log(response);
        navigate("/RecipeHistory", { state: { ...response.data } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const location = useLocation();
  let FileList = location.state;
  console.log(FileList);
  let session_list = FileList?.session_list;
  let medical_recorde = FileList?.medical_recorde?.id;
  console.log(session_list);

  return (
    <div dir="rtl">
      <h2>{str}</h2>
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
        {session_list?.map((item) => {
          <RecipeItem className="recipeItem" data={item}></RecipeItem>;
        })}

        {/* <RecipeItem className="recipeItem"></RecipeItem>

        <RecipeItem className="recipeItem"></RecipeItem>
        <RecipeItem className="recipeItem"></RecipeItem>
        <RecipeItem className="recipeItem"></RecipeItem> */}
      </div>
    </div>
  );
}

export default RecipeHistory;

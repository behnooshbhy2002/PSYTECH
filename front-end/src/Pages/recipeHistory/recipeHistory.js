import {React , useState , useEffect} from "react";
import RecipeItem from "./recipeItem";
import "./recipeHistory.css";
import { Row, Column } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
function RecipeHistory() {
  // const location = useLocation();
  // let FileList = location.state;
  // console.log(FileList);
  // let session_list = FileList?.session_list;
  // let medical_recorde = FileList?.medical_recorde?.id;
  // console.log(session_list);
  const [preList, setPreList] = useState();
  const fetchData = () => {
    return axios
      .get(
        `http://127.0.0.1:8000/appointments/prescription_list/?id=${localStorage.getItem(
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
  return (
    <div>
      <h1>نسخه های من</h1>
      <div className="recipe-wrapper" dir="rtl">
        {preList?.map((item) => {
          return(
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

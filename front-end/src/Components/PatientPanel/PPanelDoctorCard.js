// import img from '../../images/ali-hemati.png'
import "./Carddd.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PPanelDoctorCard(props) {
  const navigate = useNavigate();
  let id = props?.data?.id;
  let img = props.data?.img;
  let name = props.data?.name;
  let p_id = props.data?.p_id;
  const handleShowPreToP = (dr_id) => {
    console.log(dr_id);
    axios
      .post(`http://127.0.0.1:8000/appointments/medical_recorder/`, {
        id_patient: p_id,
        id_psychologist: dr_id,
      })
      .then((response) => {
        //setSession(response.data);
        console.log(response.data);
        navigate("/RecipeHistory", { state: { ...response.data } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="ppanel-card" key={id}>
        <span className="ppanel-det">
          <div>
            <img
              src={img}
              alt="women"
              height="110"
              width="110"
              className="ppanel-card-img"
            />
          </div>
          <div className=" ppanel-name">
            <h4 className=" ppanel-card-name">{name}</h4>
          </div>
        </span>
        <div className="ppanel-list-butt">
          <button
            className="pp-card-butt pp-view-noskhe"
            onClick={() => {
              handleShowPreToP(id);
            }}
          >
            مشاهده نسخه
          </button>
          <br></br>
        </div>
      </div>
    </>
  );
}
export default PPanelDoctorCard;

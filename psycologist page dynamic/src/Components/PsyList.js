import "./style/PsyList.css";
import PsyItem from "./PsyItem";
const PsyList = (props) => {
  return (
    <>
      <ul className="listOfConsultants_manBox col-lg-9 box boxConsultant col-md-9 ">
        <PsyItem DrArr></PsyItem>
      </ul>
    </>
  );
};
export default PsyList;

import "./PsyList.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.9.95/css/materialdesignicons.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css";

import Filter from "./Filter";
import PsyList from "./PsyList";
const Container = (props) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="ContentHeaderboxConsultant-text">
              <h1 className="header-title-Consultant-index">
                مشاوره روانشناسی
              </h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex-container">
            <Filter></Filter>
            <PsyList></PsyList>
          </div>
        </div>
      </div>
    </>
  );
};
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
export default Container;

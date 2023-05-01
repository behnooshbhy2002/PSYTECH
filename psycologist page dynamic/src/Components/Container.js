import "./style/Container.css";
import Filter from "./Filter";
import PsyList from "./PsyList";
const Container = (props) => {
  return (
    <>
      <div className="psylist-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="ContentHeaderboxConsultant-text">
                <h1 className="header-title-Consultant-index">روانشناسان</h1>
              </div>
            </div>
          </div>

          <div className="flex-container">
            <Filter></Filter>
            <PsyList></PsyList>
          </div>
        </div>
      </div>

      {/* <div class="col-lg-12">
        <nav aria-label="Page navigation example">
          <ul class="pagination job-pagination justify-content-center mt-5 mb-5">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                <i class="mdi mdi-chevron-double-left f-15"></i>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                <i class="mdi mdi-chevron-double-right f-15"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  );
};
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
export default Container;

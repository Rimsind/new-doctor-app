import PatientCard from "../../components/PatientCard";

const index = () => {
  return (
    <>
      <h5 className="mb-0">Patients List</h5>
      <div className="row">
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
      </div>

      <div className="row text-center">
        <div className="col-12 mt-4 pt-2">
          <ul className="pagination justify-content-center mb-0 list-unstyled">
            <li>
              <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                Prev
              </a>
            </li>
            <li className="active">
              <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                1
              </a>
            </li>
            <li>
              <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                2
              </a>
            </li>
            <li>
              <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;

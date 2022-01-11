import { useAuth } from "../context";

const Home = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <>
      <h5 className="mb-0">Dashboard</h5>
      <div className="row">
        <div className="col-xl-3 col-lg-6 mt-4">
          <div
            className="card shadow border-0 p-3"
            style={{ backgroundColor: "#a2f5ce" }}
          >
            <div className="d-flex justify-content-between ">
              <h6 className="align-items-center mb-0">Total Patients</h6>
              <h5>100</h5>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 mt-4">
          <div
            className="card shadow border-0 p-3"
            style={{ backgroundColor: "#bfdbfe" }}
          >
            <div className="d-flex justify-content-between ">
              <h6 className="align-items-center mb-0">
                Patients under treatement
              </h6>
              <h5>100</h5>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 mt-4">
          <div
            className="card shadow border-0 p-3"
            style={{ backgroundColor: "#fde68a" }}
          >
            <div className="d-flex justify-content-between ">
              <h6 className="align-items-center mb-0">Urgent</h6>
              <h5>100</h5>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 mt-4">
          <div
            className="card shadow border-0 p-3"
            style={{ backgroundColor: "#ffdfdf" }}
          >
            <div className="d-flex justify-content-between ">
              <h6 className="align-items-center mb-0">Canceled</h6>
              <h5>100</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

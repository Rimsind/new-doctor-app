import { useAuth } from "../context";
import Link from "next/link";
const Home = () => {
  const { auth } = useAuth();

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
      <div className="dashboard-nav-card mt-5">
        <div className="row align-items-center">
          <Link href="/appointment">
            <div className="col-4 mb-2 mt-2" style={{ cursor: "pointer" }}>
              <div className="dashboard-nav-card-item-first">
                <div className="row">
                  <div className="col-6">
                    <div className="card-icon text-center">
                      <i className="ri-calendar-line fs-3 p-4 bg-white rounded-circle"></i>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card-name text-start">
                      <a className="fs-5 fw-bold text-light">Appointment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/time-table">
            <div className="col-4 mb-2 mt-2" style={{ cursor: "pointer" }}>
              <div className="dashboard-nav-card-item-second">
                <div className="dashboard-nav-card-item-content">
                  <div className="row">
                    <div className="col-6">
                      <div className="card-icon text-center">
                        <i className="ri-calendar-line fs-3 p-4 bg-white rounded-circle"></i>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="card-name text-start">
                        <a href="#" className="fs-5 fw-bold text-light">
                          Time Table
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/profile-setting">
            <div className="col-4 mb-2 mt-2" style={{ cursor: "pointer" }}>
              <div className="dashboard-nav-card-item-third">
                <div className="dashboard-nav-card-item-content">
                  <div className="row">
                    <div className="col-6">
                      <div className="card-icon text-center">
                        <i className="ri-calendar-line fs-3 p-4 bg-white rounded-circle"></i>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="card-name text-start">
                        <a href="#" className="fs-5 fw-bold text-light">
                          Profile Settings
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/password-seting">
            <div className="col-4 mb-2 mt-2" style={{ cursor: "pointer" }}>
              <div className="dashboard-nav-card-item-forth">
                <div className="dashboard-nav-card-item-content">
                  <div className="row">
                    <div className="col-6">
                      <div className="card-icon text-center">
                        <i className="ri-calendar-line fs-3 p-4 bg-white rounded-circle"></i>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="card-name text-start">
                        <a href="#" className="fs-5 fw-bold text-light">
                          Password Settings
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="col-4 mb-2 mt-2" style={{ cursor: "pointer" }}>
            <div className="dashboard-nav-card-item-fifth">
              <div className="dashboard-nav-card-item-content">
                <div className="row">
                  <div className="col-6">
                    <div className="card-icon text-center">
                      <i className="ri-calendar-line fs-3 p-4 bg-white rounded-circle"></i>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card-name text-start">
                      <a href="#" className="fs-5 fw-bold text-light">
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

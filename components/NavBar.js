import Link from "next/link";
import Image from "next/image";
const NavBar = ({ details }) => {
  const logOutHandler = () => {};
  return (
    <>
      <nav id="sidebar" className="sidebar-wrapper">
        <div
          className="sidebar-content"
          // details-simplebar="init"
          style={{ height: "calc(100% - 60px)" }}
        >
          <div className="sidebar-brand">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo-dark.png"
                  height="50"
                  width="65px"
                  alt=""
                />
              </a>
            </Link>
          </div>

          <ul className="sidebar-menu pt-3">
            <li>
              <h6 style={{ color: "blue", textAlign: "center" }}>
                Welcome! Dr. {details?.firstName}
              </h6>
            </li>
            <li>
              <Link href="/home">
                <a>
                  <i className="ri-airplay-line me-2 d-inline-block"></i>
                  Dashboard
                </a>
              </Link>
            </li>
            <li>
              <Link href="/appointment">
                <a>
                  <i className="ri-stethoscope-line me-2 d-inline-block"></i>
                  Appointment
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile-setting">
                <a>
                  <i className="ri-stethoscope-line me-2 d-inline-block"></i>
                  Profile settings
                </a>
              </Link>
            </li>
            <li>
              <Link href="/password-setting">
                <a>
                  <i className="ri-stethoscope-line me-2 d-inline-block"></i>
                  Password settings
                </a>
              </Link>
            </li>

            {/* <li className="sidebar-dropdown">
                <a href="javascript:void(0)">
                  <i className=" ri-user-settings-line me-2 d-inline-block"></i>
                  Profile
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <Link href="/profile-setting">
                        <a>Profile Settings</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/password-setting">
                        <a>Password Settings</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li> */}
            <li>
              <button
                style={{
                  backgroundColor: "white",
                  border: " none",
                  marginLeft: "-6px",
                }}
                onClick={logOutHandler}
              >
                <Link href="/">
                  <a>
                    <i className="ri-logout-circle-r-line me-2 d-inline-block"></i>
                    Logout
                  </a>
                </Link>
              </button>
            </li>
          </ul>
        </div>

        <ul className="sidebar-footer list-unstyled mb-0">
          {/* <li className="list-inline-item mb-0 ms-1">
              <h5>12/12/12 12:30 am</h5>
            </li> */}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

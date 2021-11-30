import Link from "next/link";
import Image from "next/image";

const Layout1 = ({ children }) => {
  return (
    <>
      <div className="page-wrapper chiller-theme toggled">
        <nav id="sidebar" className="sidebar-wrapper">
          <div
            className="sidebar-content"
            // data-simplebar="init"
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
                  Welcome! Dr. Samir Kumar Barman
                </h6>
              </li>
              <li>
                <Link href="/">
                  <a href="index.html">
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
                <Link href="/">
                  <a>
                    <i className="ri-logout-circle-r-line me-2 d-inline-block"></i>
                    Logout
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <ul className="sidebar-footer list-unstyled mb-0">
            <li className="list-inline-item mb-0 ms-1">
              <h5>12/12/12 12:30 am</h5>
            </li>
          </ul>
        </nav>

        <main className="page-content bg-light">
          <div className="top-header">
            <div className="header-bar d-flex justify-content-between border-bottom">
              <div className="d-flex align-items-center">
                <a href="#" className="logo-icon">
                  <Image
                    width="22"
                    height="22"
                    src="/images/logo-dark.png"
                    className="big"
                    alt=""
                  />
                </a>
                <a
                  id="close-sidebar"
                  className="btn btn-icon btn-pills btn-soft-primary ms-2"
                  href="#"
                >
                  <i className="ri-menu-line"></i>
                </a>
                <div className="search-bar p-0 d-none d-md-block ms-2">
                  <div id="search" className="menu-search mb-0">
                    <form
                      role="search"
                      method="get"
                      id="searchform"
                      className="searchform"
                    >
                      <div>
                        <input
                          type="text"
                          className="border rounded-pill"
                          name="s"
                          id="s"
                          placeholder="Search Keywords..."
                        />
                        <input type="submit" id="searchsubmit" value="Search" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <ul className="list-unstyled mb-0">
                <li className="list-inline-item mb-0 ms-1">
                  <div className="dropdown dropdown-primary">
                    <button
                      type="button"
                      className="btn btn-pills btn-soft-primary dropdown-toggle p-0"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <Image
                        height="50"
                        width="50"
                        src="/images/doctors/doc.png"
                        className="avatar avatar-ex-small rounded-circle"
                        alt=""
                      />
                    </button>
                    <div
                      className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3"
                      style={{ minWidth: "200px" }}
                    >
                      <a
                        className="dropdown-item d-flex align-items-center text-dark"
                        href="profile.html"
                      >
                        <Image
                          height="50"
                          width="50"
                          src="/images/doctors/doc.png"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="flex-1 ms-2">
                          <span className="d-block mb-1">Calvin Carlo</span>
                          <small className="text-muted">Orthopedic</small>
                        </div>
                      </a>
                      <a className="dropdown-item text-dark" href="index.html">
                        <span className="mb-0 d-inline-block me-1">
                          <i className="ri-airplay-line align-middle h6"></i>
                        </span>
                        Dashboard
                      </a>
                      <a
                        className="dropdown-item text-dark"
                        href="dr-profile.html"
                      >
                        <span className="mb-0 d-inline-block me-1">
                          <i className="ri-user-settings-line align-middle h6"></i>
                        </span>
                        Profile Settings
                      </a>
                      <div className="dropdown-divider border-top"></div>
                      <a
                        className="dropdown-item text-dark"
                        href="lock-screen.html"
                      >
                        <span className="mb-0 d-inline-block me-1">
                          <i className="ri-logout-circle-r-line align-middle h6"></i>
                        </span>
                        Logout
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <section className="bg-dashboard" style={{ marginTop: "100px" }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 mt-4 mt-sm-0">
                  <main>{children}</main>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Layout1;

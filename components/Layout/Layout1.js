import Link from "next/link";
import Image from "next/image";
import { apiUrl } from "../../config/api";
import axios from "axios";
import useSWR from "swr";
import Head from "next/head";
import Script from "next/script";

import { useAuth } from "../../context";
const Layout1 = ({ children }) => {
  const { logOut, auth } = useAuth();

  const { data, loading, error } = useSWR(
    `${apiUrl}/doctors/${auth?.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  if (!data) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <meta charSet="utf-8" />

        <meta name="description" content="Main Software Backand" />
        <meta
          name="keywords"
          content="Appointment, Booking, System, Dashboard, Health"
        />
        <meta name="author" content="Rims India" />
        <meta name="email" content="Rimsindia@gmail.com" />
        <meta name="website" content="http://www.Rimstechnologies.in" />
        <meta name="Version" content="v1.0.0" />
      </Head>
      <div className="page-wrapper chiller-theme toggled">
        {/* <nav id="sidebar" className="sidebar-wrapper">
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
                  Welcome! Dr. {data?.firstName}
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
                <Link href="/time-table">
                  <a>
                    <i className="ri-stethoscope-line me-2 d-inline-block"></i>
                    Time Table
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

              <li>
                <button onClick={logOut}>
                  <i className="ri-logout-circle-r-line me-2 d-inline-block"></i>
                  Logout
                </button>
              </li>
            </ul>
          </div>

          <ul className="sidebar-footer list-unstyled mb-0">
            <li className="list-inline-item mb-0 ms-1">
              <h5>12/12/12 12:30 am</h5>
            </li>
          </ul>
        </nav> */}

        <main className="page-content bg-light">
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-md">
            <div className="container-fluid">
              <div className="logo-brand">
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
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link href="/home">
                      <a className="nav-link">Dashboard</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/appointment">
                      <a className="nav-link">Appointment</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/time-table">
                      <a className="nav-link">Time Table</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/profile-setting">
                      <a className="nav-link">Profile settings</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/password-setting">
                      <a className="nav-link">Password settings</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={logOut}>
                      Logout
                    </button>
                  </li>
                </ul>
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item mb-0 ms-1">
                    <div className="dropdown dropdown-primary">
                      <button
                        type="button"
                        className="btn btn-pills  dropdown-toggle p-0"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <Image
                          height="50"
                          width="50"
                          src={data?.image?.url || "/images/profile.png"}
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
                            src={data?.image?.url || "/images/profile.png"}
                            className="avatar avatar-md-sm rounded-circle border shadow"
                            alt=""
                          />
                          <div className="flex-1 ms-2">
                            <span className="d-block mb-1">
                              Dr.{data?.firstName}
                            </span>
                            <small className="text-muted">Orthopedic</small>
                          </div>
                        </a>
                        <Link href="/home">
                          <a className="dropdown-item text-dark">
                            <span className="mb-0 d-inline-block me-1">
                              <i className="ri-airplay-line align-middle h6"></i>
                            </span>
                            Dashboard
                          </a>
                        </Link>
                        <Link href="/profile-setting">
                          <a className="dropdown-item text-dark">
                            <span className="mb-0 d-inline-block me-1">
                              <i className="ri-user-settings-line align-middle h6"></i>
                            </span>
                            Profile
                          </a>
                        </Link>
                        <div className="dropdown-divider border-top"></div>

                        <button
                          className="dropdown-item text-dark"
                          onClick={logOut}
                        >
                          <span className="mb-0 d-inline-block me-1">
                            <i className="ri-logout-circle-r-line align-middle h6"></i>
                          </span>
                          Logout
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="bg-dashboard mt-3">
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

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
const Header = ({ details }) => {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
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
          </div>

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
                    src={details?.image?.url || "/images/profile.png"}
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
                      src={details?.image?.url || "/images/profile.png"}
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <div className="flex-1 ms-2">
                      <span className="d-block mb-1">
                        Dr.{details?.firstName}
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
                    <a
                      className="dropdown-item text-dark"
                      href="dr-profile.html"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="ri-user-settings-line align-middle h6"></i>
                      </span>
                      Profile Settings
                    </a>
                  </Link>
                  <div className="dropdown-divider border-top"></div>
                  <a
                    className="dropdown-item text-dark"
                    href="lock-screen.html"
                  >
                    <button className="mb-0 d-inline-block me-1">
                      <i className="ri-logout-circle-r-line align-middle h6"></i>
                    </button>
                    Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

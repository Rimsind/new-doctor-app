import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { apiUrl } from "../config/api";
import { parseCookies } from "nookies";
import axios from "axios";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [token, setToken] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const { token, user } = parseCookies();
    if (token && user) {
      setToken(token);
      const userData = JSON.parse(user);
      setCurrentUser(userData);
    }
  }, []);

  const { data } = useSWR(
    `${apiUrl}/appointments?doctor=${currentUser?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  return (
    <>
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
            <li style={{ backgroundColor: "#396cf0", marginBottom: "2px" }}>
              <Link href="/appointment">
                <a style={{ color: "#ffffff" }}>
                  <i
                    className="ri-arrow-go-back-fill me-2 d-inline-block"
                    style={{ color: "blue" }}
                  ></i>
                  Return to Dashboard
                </a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>ID:01 Amit Mahapatra </a>
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
    </>
  );
};

export default Navbar;

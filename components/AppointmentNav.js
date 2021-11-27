import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
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
              <Link href="/">
                <a href="index.html" style={{ color: "#ffffff" }}>
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
                <a>Amit Mahapatra </a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra </a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra </a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#ffa2a2", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
              </Link>
            </li>
            <li style={{ backgroundColor: "#87f5d4", marginBottom: "2px" }}>
              <Link href="/diagnosis">
                <a>Amit Mahapatra</a>
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

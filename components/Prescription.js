import Layout2 from "../components/Layout/Layout2";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl } from "../config/api";
import axios from "axios";
import { useAuth } from "../context";
import Image from "next/image";
const Prescription = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/appointments/${appointmentId}`,
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

  // const makeArrfromString = (str) => {
  //   if (str) {
  //     const arr = str.split(",");
  //     const result = arr.map((item) => item.trim());

  //     return result;
  //   } else {
  //     str = "";
  //   }
  // };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>

      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <header style={{ backgroundColor: "aliceblue", padding: "2rem" }}>
          <div className="row align-items-center">
            <div className="col-md-2">
              <div className="left-content">
                <Image
                  src="/images/logo-dark.png"
                  height="120"
                  width="170"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="middle-content">
                <p className="fs-4 fw-bold" style={{ color: "#680634" }}>
                  REHAB INTEGRATED MEDICAL SOLUTIONS
                </p>
              </div>
            </div>
            <div
              className="col-md-4"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <div className="right-content">
                <p>
                  <i
                    className="fas fa-map-pin"
                    style={{ color: "#680634" }}
                  ></i>{" "}
                  Haldia IT Park , City Centre , WB, INDIA (HO)
                </p>
                <p>
                  <i className="fas fa-phone" style={{ color: "#680634" }}></i>
                  +91-90384-43073
                </p>
                <p>
                  <i
                    className="fas fa-envelope-open-text"
                    style={{ color: "#680634" }}
                  ></i>
                  demo@email.com
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="main mt-3">
          <div className="profile_details mb-3">
            <div className="row align-items-center">
              <div className="col-md-4">
                <Image
                  src={data?.patient?.image?.url || "/images/profile.png"}
                  height="300"
                  width="300"
                  alt=""
                  style={{
                    background: "linear-gradient(45deg, #116aa1, #720330)",
                    padding: "1rem",
                  }}
                />
              </div>
              <div className="col-md-4">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Patient Name</td>
                      <td>
                        {data?.patient?.first_name} {data?.patient?.last_name}
                      </td>
                    </tr>
                    <tr>
                      <td>Material Status</td>
                      <td>{data?.patient?.marital_status}</td>
                    </tr>
                    <tr>
                      <td>Blood Group</td>
                      <td>{data?.patient?.blood_group}</td>
                    </tr>
                    <tr>
                      <td>Date of Birth</td>
                      <td>{data?.patient?.dob}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>{data?.patient?.gender}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Mobile</td>
                      <td>{data?.patient?.phone}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{data?.patient?.email}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>
                        {data?.patient?.address?.street_address},{" "}
                        {data?.patient?.address?.city}
                      </td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>{data?.patient?.address?.country}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>
                        {data?.patient?.address?.state}, Pin -{" "}
                        {data?.patient?.address?.pincode}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div
              className="rfa-gen-form-data-table mt-4"
              style={{
                background: "white",
                padding: "10px",
                borderRadius: "3px",
              }}
            >
              <p className="fs-5 fw-bold">Medicine</p>
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope="col">Sl.</th>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">MG</th>
                    <th scope="col">Route</th>
                    <th scope="col">Duration (Days)</th>
                    <th scope="col">Frequency</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Instruction</th>
                    <th scope="col">Side Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.eprescription?.medicine?.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{item?.id}</th>
                      <td>{item?.name}</td>
                      <td>{item?.mg}</td>
                      <td>{item?.route}</td>
                      <td>{item?.duration}</td>
                      <td>{item?.frequency}</td>
                      <td>{item?.reason}</td>
                      <td>{item?.instruction}</td>
                      <td>{item?.sideEffects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="rfa-gen-form-data-table mt-4"
              style={{
                background: "white",
                padding: "10px",
                borderRadius: "3px",
              }}
            >
              <p className="fs-5 fw-bold">Test</p>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Sl.</th>
                    <th scope="col">Test Name</th>
                    <th scope="col">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.eprescription?.test?.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{item?.id}</th>
                      <td>{item?.name}</td>
                      <td>{item?.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="rfa-gen-form-data-table mt-4"
              style={{
                background: "white",
                padding: "10px",
                borderRadius: "3px",
              }}
            >
              <p className="fs-5 fw-bold">Food & Fluid Restriction</p>
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope="col">Food & Fluid Restriction</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data?.eprescription?.restrictions}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="rfa-gen-form-data-table mt-4"
              style={{
                background: "white",
                padding: "10px",
                borderRadius: "3px",
              }}
            >
              <p className="fs-5 fw-bold">Patient Education</p>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Patient Education</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data?.eprescription?.patient_education}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="rfa-gen-form-data-table mt-4"
              style={{
                background: "white",
                padding: "10px",
                borderRadius: "3px",
              }}
            >
              <p className="fs-5 fw-bold">Follow-up Time Period</p>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Days</th>
                    <th scope="col">Weeks</th>
                    <th scope="col">Months</th>
                    <th scope="col">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data?.eprescription?.followup?.days}</td>
                    <td>{data?.eprescription?.followup?.weeks}</td>
                    <td>{data?.eprescription?.followup?.months}</td>
                    <td>{data?.eprescription?.followup?.type}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <footer style={{ marginBottom: "1rem" }}>
          <p
            className="text-center"
            style={{
              background: "linear-gradient(45deg, #116aa1, #720330)",
              color: "white",
              padding: "1rem 0",
            }}
          >
            Thank You
          </p>
        </footer>
      </div>
    </>
  );
};

export default Prescription;

Prescription.getLayout = (Prescription) => <Layout2>{Prescription}</Layout2>;

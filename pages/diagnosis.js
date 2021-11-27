import Link from "next/link";
import Image from "next/image";
import Layout3 from "../components/Layout/Layout3";
// import AssesmentTab from "../components/AssesmentTab";
const Diagnosis = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-8 col-lg-6">
          <h5 className="mb-0">Appointment Id #123456</h5>
        </div>

        <div className="col-xl-4 col-lg-6 mt-4 mt-lg-0">
          <div className="justify-content-md-end">
            <form>
              <div className="row justify-content-between align-items-center">
                <div className="col-sm-12 col-md-6 mt-6 mt-sm-0">
                  <div className="d-grid">
                    <Link href="/diagnosis">
                      <a className="btn btn-primary">Previous</a>
                    </Link>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6 mt-4 mt-sm-0">
                  <div className="d-grid">
                    <Link href="/diagnosis">
                      <a className="btn btn-primary">Next</a>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="card bg-white rounded shadow overflow-hidden mt-4 border-0">
        <div style={{ padding: "20px" }}>
          <div className="p-5 bg-primary bg-gradient"></div>
          <div className="diagnosis-img-profile avatar-profile position-relative ps-3 text-center">
            <Image
              height="200"
              width="200"
              src="/images/client/01.jpg"
              className="diagnosis-img avatar-large mt-sm-0 rounded-circle"
              alt=""
            />
          </div>
          <div className="patient-details-info mt-3">
            <table
              className="table table-striped"
              style={{ marginBottom: "50px" }}
            >
              <tbody>
                <tr>
                  <td>Patient Name</td>
                  <td>Arya Jana</td>
                </tr>
                <tr>
                  <td>Patient ID</td>
                  <td>#123456</td>
                </tr>
                <tr>
                  <td>Date of Birth</td>
                  <td>16th Dec, 1950</td>
                </tr>
                <tr>
                  <td>Code</td>
                  <td>PC1246</td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <td>Emergency Contact</td>
                  <td>123456789</td>
                </tr>
                <tr>
                  <td>Allergy</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Family Doctor</td>
                  <td>Dr. Shibram Kapat</td>
                </tr>
                <tr>
                  <td>Nominee</td>
                  <td>Archana Jana</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="patient-user-panel mt-3">
            <div className="row">
              <div className="col-md-12">
                <div className="patient-user-panel-btn mt-3">
                  <Link href="/">
                    <a className="btn-custom btn btn-primary">
                      Print Clinical Report
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="patient-subjective-info">
            <div className="mt-4 ms-3 pt-3">
              <h5 className="mt-3 mb-1" style={{ textAlign: "center" }}>
                PATIENT&apos;S SUBJECTIVE INFORMATION
              </h5>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link href="/form/general-information">
                    <a className="btn-custom btn btn-success">
                      General Information
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link href="/form/social-history">
                    <a className="btn-custom btn btn-success">
                      Social History & Living Environment
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link href="/form/employment-status">
                    <a className="btn-custom btn btn-success">
                      Employment Status
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link href="/form/medical-history">
                    <a className="btn-custom btn btn-success">
                      Past Medical History
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link href="/form/functional-status">
                    <a className="btn-custom btn btn-success">
                      Current Functional Status
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link href="/form/family-history">
                    <a className="btn-custom btn btn-success">
                      Family Medical History
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diagnosis;

Diagnosis.getLayout = (Diagnosis) => <Layout3>{Diagnosis}</Layout3>;

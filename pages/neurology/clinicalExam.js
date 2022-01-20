// import FormCloseBtn from "../../components/FormCloseBtn";
// import router, { useRouter } from "next/router";
// import { useState } from "react";
// import { useAuth } from "../../context";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { apiUrl } from "../../config/api";

const ClinicalExam = () => {
  return (
    <>
      <form>
        <div className="general-information-form relative p-6 flex-auto">
          <div className="max-w-6xl mx-auto md:py-10">
            <div className="space-y-5 border-2 p-10 rounded">
              <div className="space-y-2 pb-5">
                <div className="gen-form-upper row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="text-center pb-6">
                      <h3 className="general-information-form-title font-bold">
                        Clinical Examination
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="gen-form mt-3">
                  <h3>Examination category</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-5">
                      <label className="form-label">Categories:</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        // onChange={(e) => setTestName(e.target.value)}
                      >
                        <option>Select Option</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                      </select>
                    </div>
                    <div className="col-md-5">
                      <label className="form-label">Test:</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        // onChange={(e) => setSpecification(e.target.value)}
                      >
                        <option>Select Option</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <div className="prescription-add-btn">
                        <span
                          className="btn btn-primary prescription-btn"
                          //   onClick={addTest}
                        >
                          Add
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="rfa-gen-form-data-table mt-4"
                  style={{
                    background: "white",
                    padding: "10px",
                    borderRadius: "3px",
                  }}
                >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th className="text-center" colSpan="2" scope="col">
                          Categories
                        </th>
                        <th scope="col">Test</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>X</td>
                        <td>Categories One</td>
                        <td>Test One</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="gen-form mt-3">
                  <h3>Assessment</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-5">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        // onChange={(e) => setPrecaution(e.target.value)}
                      >
                        <option>Select</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                      </select>
                    </div>
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        name="patientEducation"
                        placeholder="Others:"
                        // onChange={(e) => setPrecaution(e.target.value)}
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="assessment-add-btn">
                        <span
                          className="btn btn-primary assessment-btn"
                          //   onClick={addPrecaution}
                        >
                          Add
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gen-form-btn mt-3">
            <div className="save-btn text-center">
              <button
                className="btn btn-success"
                //   onClick={submitPrescription}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ClinicalExam;

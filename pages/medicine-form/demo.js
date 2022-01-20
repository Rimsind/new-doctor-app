import FormCloseBtn from "../../components/FormCloseBtn";
import router, { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "../../config/api";

const Demo = () => {
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
              </div>
            </div>
          </div>
          <div className="gen-form">
            <h3>Vital Signs</h3>
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-md-2">
                <label>Height (Without Shoes) (cm / lb)</label>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="cm"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="lb"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <label>Weight (Dressed) (Kg / lb)</label>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="kg"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="lb"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <label>Blood Pressure (Right Arm)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Text"
                />
              </div>
              <div className="col-md-2">
                <label>Blood Pressure (Left Arm)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Text"
                />
              </div>
              <div className="col-md-2">
                <label>Heart Rate</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Text"
                />
              </div>
              <div className="col-md-2">
                <label>Heart Rate (Regular)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Text"
                />
              </div>
              <div className="col-md-2">
                <label>Respiratory Rate</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Text"
                />
              </div>
              <div className="col-md-2">
                <label>Temperature (Oral)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Text"
                />
              </div>
              <div className="col-md-8"></div>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Skin</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Head, Eyes, Ears, Nose, Throat (HEENT)</h3>
            <div className="gen-form">
              <div className="row">
                <div className="col-md-3">
                  <p className="fs-6 fw-bold">Head</p>
                </div>
                <div className="col-md-3">
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
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Text"
                  />
                </div>
                <div className="col-md-3">
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
            <div className="gen-form">
              <div className="row">
                <div className="col-md-3">
                  <p className="fs-6 fw-bold">Eyes</p>
                </div>
                <div className="col-md-3">
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
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Text"
                  />
                </div>
                <div className="col-md-3">
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
            <div className="gen-form">
              <div className="row">
                <div className="col-md-3">
                  <p className="fs-6 fw-bold">Ears</p>
                </div>
                <div className="col-md-3">
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
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Text"
                  />
                </div>
                <div className="col-md-3">
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
            <div className="gen-form">
              <div className="row">
                <div className="col-md-3">
                  <p className="fs-6 fw-bold">Nose</p>
                </div>
                <div className="col-md-3">
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
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Text"
                  />
                </div>
                <div className="col-md-3">
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
            <div className="gen-form">
              <div className="row">
                <div className="col-md-3">
                  <p className="fs-6 fw-bold">Throat (HEENT)</p>
                </div>
                <div className="col-md-3">
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
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Text"
                  />
                </div>
                <div className="col-md-3">
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Head</td>
                    <td>Lorem ipsum dolor sit omit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Neck</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Lymph Nodes</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Respiratory, Thorax & Lungs</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Cardiovascular</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>GastroinDescriptioninal</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Breasts</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Abdomen</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Genitalia</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Rectal</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Peripheral Vascular</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Muscoloskeletal & Extremities</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Nerologic</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Hematologic</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Endocrine</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <h3>Psychological</h3>
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
                      Title
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>X</td>
                    <td>Title One</td>
                    <td>Description One</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="gen-form-btn mt-3">
            <div className="save-btn text-center">
              <button
                className="btn btn-success"
                // onClick={submitPrescription}
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

export default Demo;

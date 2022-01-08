import FormCloseBtn from "../../components/FormCloseBtn";
import { useRouter } from "next/router";
import { useState } from "react";
const Eprescription = () => {
  const { appointmentId } = useRouter().query;

  const [patientEducation, setPatientEducation] = useState();
  const [patientEducationList, setPatientEducationList] = useState([]);

  const addPatientEducation = () => {
    setPatientEducationList([
      ...patientEducationList,
      {
        patientEducation: patientEducation,
      },
    ]);
    setPatientEducation("");
  };

  const [patientRestriction, setPatientRestriction] = useState();
  const [patientRestrictionList, setPatientRestrictionList] = useState([]);

  const addPatientRestriction = () => {
    setPatientRestrictionList([
      ...patientRestrictionList,
      {
        patientRestriction: patientRestriction,
      },
    ]);
    setPatientRestriction("");
  };

  const [testName, setTestName] = useState();
  const [specification, setSpecification] = useState();
  const [testList, setTestList] = useState([]);

  const addTest = () => {
    setTestList([
      ...testList,
      {
        testName: testName,
        specification: specification,
      },
    ]);
    setTestName("");
    setSpecification("");
  };

  return (
    <>
      <div className="general-information-form relative p-6 flex-auto">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      E - Prescription
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div className="gen-form">
                <h3>Medicine</h3>
                <div className="row justify-content-between align-items-end mt-3">
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label">
                      Medicine Name:
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">Abilify Maintena</option>
                      <option value="2">Amoxicillin</option>
                      <option value="3">Baclofen</option>
                      <option value="1">Blincyto</option>
                      <option value="2">Calquence</option>
                      <option value="3">Claritin</option>
                      <option value="1">Descovy</option>
                      <option value="2">Diprolene</option>
                      <option value="1">Elagolix</option>
                      <option value="2">Erleada</option>
                    </select>
                  </div>
                  <div className="col-md-1">
                    <label htmlFor="" className="form-label">
                      MG
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      placeholder="500"
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="" className="form-label">
                      Route
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Default select example"
                    >
                      <option selected>Select</option>
                      <option value="1">Oral</option>
                      <option value="1">Injection</option>
                    </select>
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="" className="form-label">
                      Duration (Days)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      placeholder="60"
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="" className="form-label">
                      Frequency
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Default select example"
                    >
                      <option selected>Select</option>
                      <option value="1">DAILY</option>
                      <option value="1">2 TIMES A WEEK</option>
                      <option value="2">2 TIMES DAILY</option>
                      <option value="3">3 TIMES A WEEK</option>
                      <option value="4">3 TIMES DAILY</option>
                      <option value="3">4 TIMES A WEEK</option>
                      <option value="4">4 TIMES DAILY</option>
                      <option value="5">AS DIRECTED</option>
                      <option value="6">AS NEEDED</option>
                      <option value="7">BED TIME</option>
                      <option value="8">EVERY 12 HOURS</option>
                      <option value="9">EVERY 2 HOURS</option>
                      <option value="10">EVERY 4 HOURS</option>
                      <option value="11">EVERY 6 HOURS</option>
                      <option value="12">EVERY 72 HOURS</option>
                      <option value="12">EVERY 8 HOURS</option>
                      <option value="12">EVERY AM</option>
                      <option value="12">EVERY OTHER DAY</option>
                      <option value="12">EVERY OTHER WEEK</option>
                      <option value="12">EVERY PM</option>
                      <option value="12">HOURLY</option>
                      <option value="12">ENTERMITTENT</option>
                      <option value="12">MONTHLY</option>
                      <option value="12">WEEKLY</option>
                      <option value="12">O2- CONTINUOUS</option>
                      <option value="12">O2- NIGHTLY</option>
                      <option value="12">O2- PRN</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label">
                      Reason
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter the reason"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label">
                      Instruction
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter the reason"
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="" className="form-label">
                      Side-Effects
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-1">
                    <div className="prescription-add-btn">
                      <a href="#" className="btn btn-primary prescription-btn">
                        Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: " white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <table className="table table-striped">
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <i className="ri-close-circle-line"></i>
                      </th>
                      <td>Moexipril (Univasc)</td>
                      <td>500</td>
                      <td>Oral</td>
                      <td>60</td>
                      <td>Daily</td>
                      <td>hgavcfjhdvjhvbfh</td>
                      <td>fjhvdfjhbh </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="gen-form">
                <h3>Test</h3>
                <div className="row justify-content-between align-items-end mt-3">
                  <div className="col-md-5">
                    <label htmlFor="" className="form-label">
                      Test Name:
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="amniocentesis">amniocentesis</option>
                      <option value="blood analysis">blood analysis</option>
                      <option value="gastric fluid analysis">
                        gastric fluid analysis
                      </option>
                      <option value="kidney function test">
                        kidney function test
                      </option>
                      <option value="liver function test">
                        liver function test
                      </option>
                      <option value="lumbar puncture">lumbar puncture</option>
                      <option value="malabsorption test">
                        malabsorption test
                      </option>
                      <option value="Pap smear">Pap smear</option>
                      <option value="phenolsulfonphthalein test">
                        phenolsulfonphthalein test
                      </option>
                      <option value="pregnancy test">pregnancy test</option>
                      <option value="prenatal testing">prenatal testing</option>
                      <option value="protein-bound iodine test">
                        protein-bound iodine test
                      </option>
                      <option value="angiocardiography">
                        angiocardiography
                      </option>
                      <option value="angiography">angiography</option>
                      <option value="brain scanning">brain scanning</option>
                      <option value="cholecystography">cholecystography</option>
                      <option value="myelography">myelography</option>
                      <option value="tomography">tomography</option>
                      <option value="complementation test">
                        complementation test
                      </option>
                      <option value=" fluorescence in situ hybridization">
                        fluorescence in situ hybridization
                      </option>
                      <option value="preimplantation genetic diagnosis">
                        preimplantation genetic diagnosis
                      </option>
                    </select>
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="" className="form-label">
                      Specification:
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">Left Side</option>
                      <option value="2">Right Side</option>
                      <option value="3">Fore Head</option>
                      <option value="3">Upper Abdoman</option>
                      <option value="3">Lower Abdoman</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <div className="prescription-add-btn">
                      <span
                        className="btn btn-primary prescription-btn"
                        onClick={addTest}
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
                      <th scope="col">Sl.</th>
                      <th scope="col">Test Name</th>
                      <th scope="col">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <i className="ri-close-circle-line"></i>
                      </th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                      <td>Modi repudiandae qui temporibus voluptate eaque</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="gen-form">
                <h3>Food & Fluid Restriction</h3>
                <div className="row justify-content-between align-items-end mt-3">
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="patientRestriction"
                      placeholder="Patient Restriction"
                      onChange={(e) => setPatientRestriction(e.target.value)}
                      value={patientRestriction}
                    />
                  </div>
                  <div className="col-md-2">
                    <div className="prescription-add-btn">
                      <span
                        className="btn btn-primary prescription-btn"
                        onClick={addPatientRestriction}
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
                      <th scope="col">Sl.</th>
                      <th scope="col">Food & Fluid Restriction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientRestrictionList.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <i className="ri-close-circle-line"></i>
                        </th>
                        <td>{item.patientRestriction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="gen-form">
                <h3>Patient Education</h3>
                <div className="row justify-content-between align-items-end mt-3">
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="patientEducation"
                      placeholder="Patient Education"
                      onChange={(e) => setPatientEducation(e.target.value)}
                      value={patientEducation}
                    />
                  </div>
                  <div className="col-md-2">
                    <div className="prescription-add-btn">
                      <span
                        className="btn btn-primary prescription-btn"
                        onClick={addPatientEducation}
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
                      <th scope="col">Sl.</th>
                      <th scope="col">Patient Education</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientEducationList.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <i className="ri-close-circle-line"></i>
                        </th>
                        <td>{item.patientEducation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form">
          <h3>Set Follow Time Period:</h3>
          <div className="row justify-content-between align-items-end mt-3">
            <div className="col-md-3">
              <label htmlFor="" className="form-label">
                Days
              </label>
              <input
                type="number"
                className="form-control"
                id=""
                placeholder="0"
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="" className="form-label">
                Weeks
              </label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Enter the reason"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="" className="form-label">
                Months
              </label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Enter the reason"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="" className="form-label">
                Followup Type
              </label>
              <select
                className="form-control"
                aria-label="Default select example"
              >
                <option selected>Select an Option</option>
                <option value="1">Regular Visit</option>
                <option value="1">Annual Exam</option>
              </select>
            </div>
          </div>
        </div>
        <div className="gen-form-btn mt-3">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-2">
              <a href="#" className="btn btn-success">
                Save Changes
              </a>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eprescription;

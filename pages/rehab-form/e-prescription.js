import FormCloseBtn from "../../components/FormCloseBtn";
import { useRouter } from "next/router";
const eprescription = () => {
  const { appointmentId } = useRouter().query;
  return (
    <>
      <div className="general-information-form relative p-6 flex-auto">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
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
                  <div className="col-md-2">
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
                  <div className="col-md-1">
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

                  <div className="col-md-1">
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
                  <div className="col-md-2">
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
                  <div className="col-md-2">
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
                  <div className="col-md-2">
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
                      <th scope="row">1</th>
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
                      <option value="1">amniocentesis</option>
                      <option value="2">blood analysis</option>
                      <option value="3">gastric fluid analysis</option>
                      <option value="1">kidney function test</option>
                      <option value="2">liver function test</option>
                      <option value="3">lumbar puncture</option>
                      <option value="1">malabsorption test</option>
                      <option value="2">Pap smear</option>
                      <option value="3">phenolsulfonphthalein test</option>
                      <option value="1">pregnancy test</option>
                      <option value="2">prenatal testing</option>
                      <option value="3">protein-bound iodine test</option>
                      <option value="2">angiocardiography</option>
                      <option value="3">angiography</option>
                      <option value="1">brain scanning</option>
                      <option value="2">cholecystography</option>
                      <option value="3">myelography</option>
                      <option value="1">tomography</option>
                      <option value="2">complementation test</option>
                      <option value="3">
                        fluorescence in situ hybridization
                      </option>
                      <option value="3">
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
                      <option value="1">Left Hand</option>
                      <option value="2">Right Hand</option>
                      <option value="3">Fore Head</option>
                    </select>
                  </div>
                  <div className="col-md-2">
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
                      <th scope="row">1</th>
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
                      id=""
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-2">
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
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iste ratione iusto ex exercitationem et laborum
                      </td>
                    </tr>
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
                      id=""
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-2">
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
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iste ratione iusto ex exercitationem et laborum
                      </td>
                    </tr>
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
        <div className="gen-form-btn">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <ul className="pagination mb-0 list-unstyled">
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    Prev
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    1
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    3
                  </a>
                </li>
                <li className="active">
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    4
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    5
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    6
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    7
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    Next
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <a href="#" className="btn btn-success">
                Save Changes
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default eprescription;

import FormCloseBtn from "../../components/FormCloseBtn";
import router, { useRouter } from "next/router";
import { useState } from "react";
// import { useAuth } from "../../context";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { apiUrl } from "../../config/api";

const catagoryList = [
  "Cerical Region",
  "Upper Thoracic",
  "Lower Thoracic",
  "Lumber",
  "Sacral Region",
  "Shoulder Elbow",
  "Wrist",
  "Hand",
  "Pelvis",
  "Hip",
  "Knee",
  "Ankle",
  "Foot",
];

const testList = [
  "Inspection",
  "Palpation",
  "Measurments",
  "Movements",
  "Special Test",
  "Complications",
];

const ClinicalExamination = () => {
  const { appointmentId } = useRouter().query;

  const [catagory, setCatagory] = useState();
  const [test, setTest] = useState();
  const [data, setData] = useState([]);

  const addData = () => {
    setData([
      ...data,
      {
        catagory: catagory,
        test: test,
      },
    ]);
  };
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  let meter = height / 100;
  let result = weight / (meter * meter);
  let BMI = result.toFixed(1);
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
                  <FormCloseBtn id={appointmentId} />
                </div>
                {/* <div className="gen-form">
                  <h3>Vital Signs</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-2">
                      <label>Height (cm)</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="cm"
                            onChange={(e) => setHeight(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label>Weight (Kg)</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="kg"
                            onChange={(e) => setWeight(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label>BMI</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            value={BMI}
                            contentEditable="false"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label>BP (Right Arm)</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                      <label>BP (Left Arm)</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Heart Rate</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label> Emter O2 Saturation</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Respiratory Rate</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Temperature (Oral)</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div> */}
                <div className="gen-form mt-3">
                  <h3>Examination Category</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-5">
                      <label className="form-label">Categories:</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setCatagory(e.target.value)}
                      >
                        <option selected>Select Option</option>
                        {catagoryList.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-7">
                      {/* <label className="form-label">Test:</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setTest(e.target.value)}
                      >
                        <option selected>Select Option</option>
                        {testList.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select> */}
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Other"
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form mt-3">
                  <h3>Examination Test</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-5">
                      <label className="form-label">Test:</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setTest(e.target.value)}
                      >
                        <option selected>Select Option</option>
                        {testList.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-5">
                      {/* <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setCatagory(e.target.value)}
                      >
                        <option selected>Select Option</option>
                        {catagoryList.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select> */}
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Other"
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="prescription-add-btn">
                        <span
                          className="btn btn-primary prescription-btn"
                          onClick={addData}
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
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td>X</td>
                          <td>{item.catagory}</td>
                          <td>{item.test}</td>
                        </tr>
                      ))}
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

export default ClinicalExamination;

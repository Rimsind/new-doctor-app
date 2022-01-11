import FormCloseBtn from "../../components/FormCloseBtn";
import router, { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "../../config/api";

const Eprescription = () => {
  const { auth } = useAuth();

  const { appointmentId } = useRouter().query;

  const [patientEducation, setPatientEducation] = useState();
  const [patientEducationList, setPatientEducationList] = useState([]);

  const addPatientEducation = () => {
    setPatientEducationList((oldItems) => {
      return [...oldItems, patientEducation];
    });
    setPatientEducation("");
  };

  const [patientRestriction, setPatientRestriction] = useState();
  const [patientRestrictionList, setPatientRestrictionList] = useState([]);

  const addPatientRestriction = () => {
    setPatientRestrictionList((oldItems) => {
      return [...oldItems, patientRestriction];
    });
    setPatientRestriction("");
  };

  const [testName, setTestName] = useState();
  const [specification, setSpecification] = useState();
  const [testList, setTestList] = useState([]);

  const addTest = () => {
    setTestList([
      ...testList,
      {
        name: testName,
        specification: specification,
      },
    ]);
  };

  const [medicineName, setMedicineName] = useState();
  const [mg, setMg] = useState();
  const [route, setRoute] = useState();
  const [duration, setDuration] = useState();
  const [frequency, setFrequency] = useState();
  const [reasons, setReasons] = useState();
  const [instructions, setInstructions] = useState();
  const [sideEffects, setSideEffects] = useState();
  const [medicineList, setMedicineList] = useState([]);

  const addMedicine = () => {
    setMedicineList([
      ...medicineList,
      {
        name: medicineName,
        mg: mg,
        route: route,
        duration: duration,
        frequency: frequency,
        reasons: reasons,
        instruction: instructions,
        sideEffects: sideEffects,
      },
    ]);

    setSideEffects("");
    setInstructions("");
    setReasons("");
    setMg("");
    setDuration("");
  };

  const { register, handleSubmit } = useForm();
  const submitPrescription = async (data) => {
    const payload = {
      eprescription: {
        medicine: medicineList,
        patient_education: patientEducationList.toString(),
        restrictions: patientRestrictionList.toString(),
        test: testList,
        followup: {
          days: data.days,
          weeks: data.weeks,
          months: data.months,
          type: data.type,
        },
      },
    };
    console.log(payload);

    const res = await axios.put(
      `${apiUrl}/appointments/${appointmentId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = res.data;
    alert("Form Submitted Succesfully");
    router.push(`/diagnosis?appointmentId=${appointmentId}`);
    return result;
  };

  const testNameList = [
    "Select",
    "amniocentesis",
    "blood analysis",
    "gastric fluid analysis",
    "kidney function test",
    "liver function test",
    "lumbar puncture",
    "malabsorption test",
    "Pap smear",
    "phenolsulfonphthalein test",
    "pregnancy test",
    "prenatal testing",
    "protein-bound iodine test",
    "angiocardiography",
    "angiography",
    "brain scanning",
    "cholecystography",
    "myelography",
    "tomography",
    "complementation test",
    " fluorescence in situ hybridization",
    "preimplantation genetic diagnosis",
  ];

  const Specification = [
    "Select",
    "value1",
    "value2",
    "value3",
    "value4",
    "value5",
    "value6",
  ];

  const frequencyList = [
    "Select",
    "DAILY",
    " 2 TIMES A WEEK",
    "2 TIMES DAILY",
    "3 TIMES A WEEK",
    "3 TIMES DAILY",
    "4 TIMES A WEEK",
    "4 TIMES DAILY",
    "AS DIRECTED",
    "AS NEEDED",
    "BED TIME",
    "EVERY 12 HOURS",
    "EVERY 2 HOURS",
    "EVERY 4 HOURS",
    "EVERY 6 HOURS",
    "EVERY 72 HOURS",
    "EVERY 8 HOURS",
    "EVERY AM",
    "EVERY OTHER DAY",
    "EVERY OTHER WEEK",
    "EVERY PM",
    "HOURLY",
    "ENTERMITTENT",
    "MONTHLY",
    "WEEKLY",
    "O2- CONTINUOUS",
    "O2- NIGHTLY",
    "O2- PRN",
  ];

  const medicineNameList = ["Select ", "Cipcal 500", "Azithro 250"];

  return (
    <>
      <form onSubmit={handleSubmit(submitPrescription)}>
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
                      <label className="form-label">Medicine Name:</label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        onChange={(e) => setMedicineName(e.target.value)}
                      >
                        {medicineNameList?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-1">
                      <label className="form-label">MG</label>
                      <input
                        type="number"
                        className="form-control"
                        id=""
                        placeholder="500"
                        onChange={(e) => setMg(e.target.value)}
                        value={mg}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Route</label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        onChange={(e) => setRoute(e.target.value)}
                      >
                        <option selected>Select</option>
                        <option value="Oral">Oral</option>
                        <option value="Injection">Injection</option>
                      </select>
                    </div>

                    <div className="col-md-2">
                      <label className="form-label">Duration (Days)</label>
                      <input
                        type="number"
                        className="form-control"
                        id=""
                        placeholder="60"
                        onChange={(e) => setDuration(e.target.value)}
                        value={duration}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Frequency</label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        onChange={(e) => setFrequency(e.target.value)}
                      >
                        {frequencyList?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Reason</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the reason"
                        onChange={(e) => setReasons(e.target.value)}
                        value={reasons}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Instruction</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the reason"
                        onChange={(e) => setInstructions(e.target.value)}
                        value={instructions}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Side-Effects</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setSideEffects(e.target.value)}
                        value={sideEffects}
                      />
                    </div>
                    <div className="col-md-1">
                      <div className="prescription-add-btn">
                        <span
                          className="btn btn-primary prescription-btn"
                          onClick={addMedicine}
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
                        <th scope="col">Side Effects</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicineList?.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">
                            <i className="ri-close-circle-line"></i>
                          </th>
                          <td>{item?.name}</td>
                          <td>{item?.mg}</td>
                          <td>{item?.route}</td>
                          <td>{item?.duration}</td>
                          <td>{item?.frequency}</td>
                          <td>{item?.reasons}</td>
                          <td>{item?.instruction}</td>
                          <td>{item?.sideEffects} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="gen-form">
                  <h3>Test</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-5">
                      <label className="form-label">Test Name:</label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        onChange={(e) => setTestName(e.target.value)}
                      >
                        {testNameList?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-5">
                      <label className="form-label">Specification:</label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        onChange={(e) => setSpecification(e.target.value)}
                      >
                        {Specification?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
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
                      {testList?.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">
                            <i className="ri-close-circle-line"></i>
                          </th>
                          <td>{item?.name}</td>
                          <td>{item?.specification}</td>
                        </tr>
                      ))}
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
                          <td>{item}</td>
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
                          <td>{item}</td>
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
              <div className="col-md-3" {...register("days")}>
                <label className="form-label">Days</label>
                <input type="number" className="form-control" name="days" />
              </div>

              <div className="col-md-3" {...register("weeks")}>
                <label className="form-label">Weeks</label>
                <input type="text" className="form-control" name="weeks" />
              </div>
              <div className="col-md-3" {...register("months")}>
                <label className="form-label">Months</label>
                <input type="text" className="form-control" name="months" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Followup Type</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  {...register("type")}
                >
                  <option selected>Select an Option</option>
                  <option value="Regular Visit">Regular Visit</option>
                  <option value="Annual Exam">Annual Exam</option>
                </select>
              </div>
            </div>
          </div>
          <div className="gen-form-btn mt-3">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <button
                  className="btn btn-success"
                  onClick={submitPrescription}
                >
                  Save Changes
                </button>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Eprescription;

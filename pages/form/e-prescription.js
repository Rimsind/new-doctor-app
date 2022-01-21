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

  const [precaution, setPrecaution] = useState();
  const [allPrecaution, setAllPrecaution] = useState([]);
  const addPrecaution = () => {
    setAllPrecaution((oldItems) => {
      return [...oldItems, precaution];
    });
    setPrecaution("");
  };

  const [referral, setReferral] = useState();
  const [allReferral, setAllReferral] = useState([]);
  const addReferral = () => {
    setAllReferral((oldItems) => {
      return [...oldItems, referral];
    });
    setReferral("");
  };

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

  const medicineNameList = [
    "Select",
    "Brufen 400 Tablet",
    "Brilinta 90mg Tablet",
    "Azax 500 Tablet",
    "Aldactone Tablet",
    "Axcer  90mg Tablet",
    "Azoran Tablet",
    "Betadine 10% Solution",
    "Betnesol Tablet",
    "Alfoo 10mg Tablet PR",
    "Amaryl 1mg Tablet",
    "AB Phylline Capsule",
    "Almox 500 Capsule",
    "Calpol 500mg Tablet",
    "Ceftum 500mg Tablet",
    "Cyra-D Capsule",
    "Clexane 40mg Injection",
    "Cetrizine Tablet",
    "Concor 5 Tablet",
    "Clexane 60mg Injection",
    "Clindac A 1% Gel",
    "Doxt-SL Capsule",
    "Defcort 6 Tablet",
    "Diamox Tablet",
    "Deplatt A 75 Tablet",
    "Doxolin 400mg Tablet",
    "Bilasure M 20mg/10mg Tablet",
    "Betacap Plus 10 Capsule SR",
    "Benzac AC 5% Gel",
    "Bupron XL 150 Tablet",
    "Emanzen-D Tablet",
    "Eliwel 10mg Tablet",
    "Etizola 0.5 Tablet",
    "Eltroxin 25mcg Tablet",
    "Cipladine Ointment",
    "Cepodem XP 325 Tablet",
    "Cardivas 3.125 Tablet",
    "Cabgolin 0.5 Tablet",
    "Ceftas 200 Tablet",
    "Crina-NCR 10mg Tablet",
    "Ciplox D Eye/Ear Drops",
    "Cardace 2.5 Tablet",
    "Codistar-DX Cough Syrup",
    "CTD 6.25 Tablet",
    "Grilinctus  Syrup",
    "Glycomet-GP 1 Tablet PR",
    "Glycomet-GP 2 Tablet PR",
    "Galvus Met 50mg/500mg Tablet",
    "Glycomet Trio 2 Tablet SR",
    "Glycomet 1gm Tablet",
    "Fabiflu Tablet",
    "Flavedon MR Tablet",
    "Fluguard Tablet",
    "Darolac Sachet",
    "Brimolol Eye Drop",
    "Betnesol Oral Drops",
    "Basalog 100IU/ml Refill Cartridge",
    "Budesal 0.5mg Respules 2ml",
    "Headset Tablet",
    "Hyponat-O 15 Tablet",
    "HCQS 400 Tablet",
    "Hepamerz Granules",
    "Hatric 3 Tablet",
  ];

  const restriction = [
    "NO CONCENTRATED SWEETS",
    "NPO",
    "PEG TUBE",
    "PUREED",
    "PUREED NO ADDED SALT",
    "REGULAR DIET",
    "DIABETIC DIET",
    "ENSURE SUPPLEMENT",
    "FLUID RESTRICTED DIET",
    "FULL LIQUID",
    "GLEUCERNIA SUPPLEMENT 1 CAN 1X DAY AND 1 CAN PRN MISSED MEALS",
    "HEART HEALTHY",
    "HIGH FIBER",
    "AVOID CONCENTRATED SWEETS",
    "CARDIAC DIET",
    "CHOPPED MEAT",
    "CONSISTENT CARBOHYDRATE",
    "CONSISTENT CARBOHYDRATE",
    "HIGH FIBER",
    "HONEY THICKENED LIQUIDS",
    "ISOSOURCE",
    "LIBERALIZED DIABETIS",
    "NAS",
    "NO ORANGES,BANANAS,ORANGE JUICE,MELONS,TOMATOES",
    "LIMIT VIT K",
    "LOW CHOLESTEROL",
    "LOW FAT",
    "LOW SODIUM",
    "MECHANICAL SOFT",
    "NECTAR THICK LIQUIDS",
    "NO CARBS",
    "REGULAR NO ADDED FAT",
    "REGULAR NO ADDED SALT",
    "RENAL DIET",
    "RENAL DIET",
    "THIN LIQUIDS",
    "TWOCAL PER PEG TUBE",
    "Others",
  ];
  const pEducation = [
    "Weight loss",
    "Exercise 45-60 min 4-5/wk",
    "EIOH cessation",
    "smoking cessation",
    "Low fat,low salt,low cholesterol diet",
    "Diabetes",
    "No driving or no activity requiring mental aiemess while on _____",
    "Increase oral fluid",
    "No heavy lifting",
    "Plan of care explained to the patient",
    "RTC or go to ED if signs/symptoms worsens _____ Total time face to face ______ minutes >50% conseling/coordination of care",
    "Others",
  ];
  const precautionList = [
    "SHARPS CONTAINERS",
    "SMOKING IN HOME",
    "SOILED/UNHYGENIC LIVING CONDITIONS",
    "STANDARD PRECAUTIONS",
    "UNIVERSAL PRECAUTIONS , INFECTION PRECAUTIONS , FALL PRECAUTIONS , CLERA PATHWAYS , MEDICATION PRECAUTIONS , SAFEETY PRECAUTIONS , EMERGENCY PLAN",
    "UNSAFE FLOORING",
    "CLUTTERED ENVIRONMENT",
    "CONTACT PRECAUTIONS",
    "COVID PRECAUTIONS",
    "DEMENTIA",
    "DEMETIA WITH WANDERING",
    "DEPRESSIVE DISORDER PRECAUTIONS",
    "DIABETIC PRECAUTIONS",
    "EMERGENCY PLAN",
    "EMERGENCY PRECAUTIONS",
    "FALL PRECAUTIONS",
    "HONEY THICKEND LIQUIDS",
    "INADEQUATE LIGHTING",
    "INDOOR PET",
    "INFECTION PRECAUTION",
    "INSECTS/RODENTS",
    "JOINT PRECAUTIONS",
    "LONG TERM ANTICOAGULATION",
    "Others",
  ];

  const treatmentList = ["option 1", "option 2", "option 3", "option 4"];

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
                        <th colSpan="2" style={{ textAlign: "center" }}>
                          Medical Diagnosis
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="col">ICD.10 Code</th>
                        <th scope="col">Specification</th>
                      </tr>

                      <tr>
                        <td>10.21</td>
                        <td>hfgdfbdfgfdgbh</td>
                      </tr>
                    </tbody>
                  </table>
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
                        <th colSpan="6" style={{ textAlign: "center" }}>
                          Past Medicine Records
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">MG</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Type</th>
                        <th scope="col">Reason</th>
                      </tr>

                      <tr>
                        <td>ghdfghdfh</td>
                        <td>hfgh</td>
                        <td>fghgfh</td>
                        <td>gfhgfh</td>
                        <td>fghgfh</td>
                        <td>jgfjhfgj</td>
                      </tr>
                    </tbody>
                  </table>
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
                <div className="gen-form mt-3">
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
                <div className="gen-form mt-3">
                  <h3>Precaution & Safety Measures</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-5">
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        onChange={(e) => setPrecaution(e.target.value)}
                      >
                        <option selected>Select</option>
                        {precautionList?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        name="patientEducation"
                        placeholder="Others:"
                        onChange={(e) => setPrecaution(e.target.value)}
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="prescription-add-btn">
                        <span
                          className="btn btn-primary prescription-btn"
                          onClick={addPrecaution}
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
                        <th scope="col">Precautions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allPrecaution.map((item, index) => (
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
                <div className="gen-form mt-3">
                  <h3>Food & Fluid Restriction</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-5">
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        onChange={(e) => setPatientRestriction(e.target.value)}
                      >
                        <option selected>Select</option>
                        {restriction?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        name="patientRestriction"
                        placeholder="Other Restrictions"
                        onChange={(e) => setPatientRestriction(e.target.value)}
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
                <div className="gen-form mt-3">
                  <h3>Patient Education</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-5">
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        onChange={(e) => setPatientEducation(e.target.value)}
                      >
                        <option selected>Select</option>
                        {pEducation?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="patientEducation"
                        placeholder="Others"
                        onChange={(e) => setPatientEducation(e.target.value)}
                      />
                    </div>
                    <div className="col-md-1">
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
                <div className="gen-form mt-3">
                  <h3>Other Treatment Referral</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-5">
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        onChange={(e) => setReferral(e.target.value)}
                      >
                        <option select>Select</option>
                        {treatmentList?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        name="patientEducation"
                        placeholder="Others"
                        onChange={(e) => setReferral(e.target.value)}
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="prescription-add-btn">
                        <span
                          className="btn btn-primary prescription-btn"
                          onClick={addReferral}
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
                        <th scope="col">Treatment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allReferral.map((item, index) => (
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

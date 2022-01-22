import FormCloseBtn from "../../components/FormCloseBtn";
import router, { useRouter } from "next/router";
import { useState } from "react";
// import { useAuth } from "../../context";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { apiUrl } from "../../config/api";

const Demo = () => {
  const { appointmentId } = useRouter().query;

  const [skin, setSkin] = useState();
  const [skinDescription, setSkinDescription] = useState();
  const [allSkin, setAllSkin] = useState([]);

  const addSkin = () => {
    setAllSkin([
      ...allSkin,
      {
        skin: skin,
        skinDescription: skinDescription,
      },
    ]);
  };

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  let meter = height / 100;
  let result = weight / (meter * meter);
  let BMI = result.toFixed(1);

  const skinList = [
    "No rashes or other changes",
    "no cyanosis",
    "no clubbing finger",
    "no bruises",
    "Others",
  ];
  const neckList = [
    "No lumps",
    "goiter",
    "pain",
    "No swollen glands",
    "Others",
  ];
  const lympNodesList = [
    "Small (less than 1 cm)",
    "soft",
    "nontender",
    " and mobile tonsillar and posterior cervical nodeerally",
    " Ns bilato axillary or epitrochlear nodes",
    " Several small inguinal nodes bilateral",
    "soft and nontender",
    "Others",
  ];
  const thoraxList = [
    "No cough",
    " wheezing",
    " shortness of breath.",
    "Last chest x-ray, 1986, St. Mary's Hospital; unremarkable",
    " Thorax symmetric with good excursion",
    " Lungs resonant",
    "Breath sounds vesicular with no added sounds",
    " Diaphragms descend 4 cm bilaterally",
    "Others",
  ];
  const cardioList = [
    "No Known heart disease or high blood pressure",
    "last blood pressure taken in 1998",
    "No dyspnea",
    "orthopnea",
    "chest pain palpitation",
    "Has never had an electrocardiogram (ECG)",
    "Jugular venous pressure 1 cm above the sternal angle",
    "with head of examining table raised to 30 degree",
    "Carotid upstrokes brisks",
    "without bruits.",
    "Apical impulse discrete and tapping",
    "barely palpable in the 5th left interspace",
    "8 cm lateral to the midstentral line",
    "Good S1, S2; no S3 or S4",
    "A II/VI medium-pitched midsystolic murmur at the 2nd right interspace",
    "does not radiate to the neck",
    " No diastolic murmurs",
    "Others",
  ];
  const gastroList = [
    "Appetite good",
    "no nausea",
    "vomiting",
    "indigestion",
    "Bowel movement about once dial",
    "though sometimes has hard stools for 2 to 3 days when especially tense",
    " no diarrhea or bleeding",
    " No pain",
    "jaundice",
    "gallbladder or liver problems",
    "Others",
  ];
  const breastList = [
    "No lumps",
    " pain",
    "discharge",
    "Does self-breast exam sporadically",
    "Others",
  ];
  const abdomentList = [
    "Obese",
    "Well-healed scar",
    "right lower quadrant",
    "Bowel sounds active",
    "No tenderness or masses Liver span 7 cm in right midclavicular line",
    " edge smooth",
    "palpable 1 cm below right costal margin (RCM)",
    " Spleen and kidneys not felts",
    "No costovertebral angle tenderness (CVAT)",
    "no hernia",
    "Others",
  ];
  const genitalList = [
    " nd poor relaxation",
    "No cervical or adnexal tendernesExternal genitalia without lesions",
    "Mild cystocele at introitus on straining",
    "Vaginal mucosa pink",
    "cervix pink",
    "parous",
    "and without dischandarge",
    "Uterus anterior",
    "midline",
    "smooth",
    "not enlarged",
    "Adnexa not palpated due to obesity as",
    "Pap smear taken",
    "Rectovaginal wall intact",
    "Others",
  ];
  const rectalList = [
    "Rectal vault without masses",
    "Stool Brown",
    "negative for occult blood",
    "Others",
  ];
  const peripheralList = [
    "Trace edema at both ankels",
    " Moderate varicosities of saphenous veins both lower extremities",
    "No stasis pigmentation or ulcer",
    " Pulses (2+= brisks, or nornal)",
    "Others",
  ];
  const muscoloList = [
    "Warm and without edma",
    "No joint deformities",
    "Good range of motion in hands",
    "wrists",
    "elbows",
    "shoulders",
    "hips",
    " knees",
    "ankels",
    "Others",
  ];
  const neurologicList = [
    "Mental status",
    "Tense but alrt and cooperative",
    "thoughts coherent",
    " oriented to person",
    "place",
    "and time",
    " Cranial Nerves",
    "II-XII intact",
    "motor",
    "Good muscle bulk and tone",
    "Strength 5/5 throughout(see p.574 grading system)",
    " Cerebellar",
    "rapid alternating movements (RAMs)",
    "point-to-point movemstableents intact",
    "Gait",
    " fluid. Sensory",
    "Pinprick",
    " light touch",
    "position sense",
    "vibration",
    " and stereognosis intact",
    "romberg negativeg",
    "Reflexes",
    "Two methods of recording may be used",
    "depending upon personal preference",
    "a tabular from or a stick picture diagram",
    "as shown below and at right",
    "2+= brisk or normal",
    "see p",
    " 587 for grading system",
    "Others",
  ];
  const hematologicList = ["No easy bleeding", "No anemia", "Others"];
  const endocrineList = [
    "No known thyroid problem or temperature intolerance",
    " sweating average",
    "No symptoms or history of diabetes",
    "Others",
  ];
  const psychologicalList = [
    "No history of depression or treatment for psychiatric disorders",
    "Others",
  ];
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
              </div>
            </div>
          </div>
          <div className="gen-form">
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
          </div>
          <div className="gen-form mt-3">
            <h3>Skin</h3>
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-md-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setSkin(e.target.value)}
                >
                  <option selected>Select</option>
                  {skinList.map((item, index) => (
                    <option key={index} value={item}>
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
                  onChange={(e) => setSkinDescription(e.target.value)}
                  value={skinDescription}
                />
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <span
                    className="btn btn-primary assessment-btn"
                    onClick={addSkin}
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
                  {allSkin.map((item, index) => (
                    <tr key={index}>
                      <td>X</td>
                      <td>{item.skin}</td>
                      <td>{item.skinDescription}</td>
                    </tr>
                  ))}
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
                  <option selected>Select</option>
                  {neckList.map((item, index) => (
                    <option key={index} value={item}>
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
                  <option selected>Select</option>
                  {lympNodesList.map((item, index) => (
                    <option key={index} value={item}>
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
                  <option selected>Select</option>
                  {thoraxList.map((item, index) => (
                    <option key={index} value={item}>
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
                  <option selected>Select</option>
                  {cardioList.map((item, index) => (
                    <option key={index} value={item}>
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
            <h3>Gastrointestinal</h3>
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-md-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  // onChange={(e) => setPrecaution(e.target.value)}
                >
                  <option selected>Select</option>
                  {gastroList.map((item, index) => (
                    <option key={index} value={item}>
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
                  <option selected>Select</option>
                  {breastList.map((item, index) => (
                    <option key={index} value={item}>
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
            <h3>Abdominal</h3>
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-md-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  // onChange={(e) => setPrecaution(e.target.value)}
                >
                  <option selected>Select</option>
                  {abdomentList.map((item, index) => (
                    <option key={index} value={item}>
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
            <h3>genitourinary</h3>
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-md-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  // onChange={(e) => setPrecaution(e.target.value)}
                >
                  <option selected>Select</option>
                  {genitalList.map((item, index) => (
                    <option key={index} value={item}>
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
                  <option selected>Select</option>
                  {rectalList.map((item, index) => (
                    <option key={index} value={item}>
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
                  <option selected>Select</option>
                  {peripheralList.map((item, index) => (
                    <option key={index} value={item}>
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
                  <option selected>Select</option>
                  {muscoloList.map((item, index) => (
                    <option key={index} value={item}>
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
            <h3>Nerological</h3>
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-md-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  // onChange={(e) => setPrecaution(e.target.value)}
                >
                  <option selected>Select</option>
                  {neurologicList.map((item, index) => (
                    <option key={index} value={item}>
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
            <h3>Hematological</h3>
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-md-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  // onChange={(e) => setPrecaution(e.target.value)}
                >
                  <option selected>Select</option>
                  {hematologicList.map((item, index) => (
                    <option key={index} value={item}>
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
            <h3>Endocrinal</h3>
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-md-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  // onChange={(e) => setPrecaution(e.target.value)}
                >
                  <option selected>Select</option>
                  {endocrineList.map((item, index) => (
                    <option key={index} value={item}>
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
            <h3>Psychological & Psychiatric Illness</h3>
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-md-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  // onChange={(e) => setPrecaution(e.target.value)}
                >
                  <option selected>Select</option>
                  {psychologicalList.map((item, index) => (
                    <option key={index} value={item}>
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

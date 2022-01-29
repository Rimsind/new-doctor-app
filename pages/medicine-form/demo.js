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
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Skin</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#skinModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="skinModal"
                  tabIndex="-1"
                  aria-labelledby="skinModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="skinModalLabel">
                          Skin
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-5 mb-5 bg-light p-4">
            <h3>Head, Eyes, Ears, Nose, Throat (HEENT)</h3>
            <div className="gen-form">
              <div className="row justify-content-between align-items-end mt-3">
                <div className="col-9 mb-2">
                  <h3>Head</h3>
                </div>
                <div className="col-md-2">
                  <div className="assessment-add-btn">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#headModal"
                    >
                      Add Entry
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="modal fade"
                    id="headModal"
                    tabIndex="-1"
                    aria-labelledby="headModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="headModalLabel">
                            Head
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="text">
                            <input
                              type="text"
                              placeholder="Others"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
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
                      <td>
                        <a href="#">
                          <i className="ri-close-circle-line"></i>
                        </a>
                      </td>
                      <td>xyz</td>
                      <td>asdfghjkl</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="gen-form">
              <div className="row justify-content-between align-items-end mt-3">
                <div className="col-9 mb-2">
                  <h3>Eyes</h3>
                </div>
                <div className="col-md-2">
                  <div className="assessment-add-btn">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#eyesModal"
                    >
                      Add Entry
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="modal fade"
                    id="eyesModal"
                    tabIndex="-1"
                    aria-labelledby="eyesModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="eyesModalLabel">
                            Eyes
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="text">
                            <input
                              type="text"
                              placeholder="Others"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
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
                      <td>
                        <a href="#">
                          <i className="ri-close-circle-line"></i>
                        </a>
                      </td>
                      <td>xyz</td>
                      <td>asdfghjkl</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="gen-form">
              <div className="row justify-content-between align-items-end mt-3">
                <div className="col-9 mb-2">
                  <h3>Ears</h3>
                </div>
                <div className="col-md-2">
                  <div className="assessment-add-btn">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#earsModal"
                    >
                      Add Entry
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="modal fade"
                    id="earsModal"
                    tabIndex="-1"
                    aria-labelledby="earsModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="earsModalLabel">
                            Ears
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="text">
                            <input
                              type="text"
                              placeholder="Others"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
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
                      <td>
                        <a href="#">
                          <i className="ri-close-circle-line"></i>
                        </a>
                      </td>
                      <td>xyz</td>
                      <td>asdfghjkl</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="gen-form">
              <div className="row justify-content-between align-items-end mt-3">
                <div className="col-9 mb-2">
                  <h3>Nose</h3>
                </div>
                <div className="col-md-2">
                  <div className="assessment-add-btn">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#noseModal"
                    >
                      Add Entry
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="modal fade"
                    id="noseModal"
                    tabIndex="-1"
                    aria-labelledby="noseModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="noseModalLabel">
                            Nose
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="text">
                            <input
                              type="text"
                              placeholder="Others"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
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
                      <td>
                        <a href="#">
                          <i className="ri-close-circle-line"></i>
                        </a>
                      </td>
                      <td>xyz</td>
                      <td>asdfghjkl</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="gen-form2">
              <div className="row justify-content-between align-items-end mt-3">
                <div className="col-9 mb-2">
                  <h3>Throat</h3>
                </div>
                <div className="col-md-2">
                  <div className="assessment-add-btn">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#throatModal"
                    >
                      Add Entry
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="modal fade"
                    id="throatModal"
                    tabIndex="-1"
                    aria-labelledby="throatModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="throatModalLabel">
                            Throat
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChecked"
                                >
                                  Checked checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="text">
                            <input
                              type="text"
                              placeholder="Others"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
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
                      <td>
                        <a href="#">
                          <i className="ri-close-circle-line"></i>
                        </a>
                      </td>
                      <td>xyz</td>
                      <td>asdfghjkl</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Neck</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#neckModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="neckModal"
                  tabIndex="-1"
                  aria-labelledby="neckModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="neckModalLabel">
                          Neck
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Lymph Nodes</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#lymphNodesModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="lymphNodesModal"
                  tabIndex="-1"
                  aria-labelledby="lymphNodesModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="lymphNodesModalLabel">
                          Lymph Nodes
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Respiratory, Thorax & Lungs</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#respiratoryModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="respiratoryModal"
                  tabIndex="-1"
                  aria-labelledby="respiratoryModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="respiratoryModalLabel">
                          Respiratory, Thorax & Lungs
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Cardiovascular</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#cardiovascularModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="cardiovascularModal"
                  tabIndex="-1"
                  aria-labelledby="cardiovascularModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id="cardiovascularModalLabel"
                        >
                          Cardiovascular
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Gastrointestinal</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#gastrointestinalModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="gastrointestinalModal"
                  tabIndex="-1"
                  aria-labelledby="gastrointestinalModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id="gastrointestinalModalLabel"
                        >
                          Gastrointestinal
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Breasts</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#breastsModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="breastsModal"
                  tabIndex="-1"
                  aria-labelledby="breastsModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="breastsModalLabel">
                          Breasts
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Abdominal</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#abdominalModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="abdominalModal"
                  tabIndex="-1"
                  aria-labelledby="abdominalModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="abdominalModalLabel">
                          Abdominal
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Genitourinary</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#genitourinaryModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="genitourinaryModal"
                  tabIndex="-1"
                  aria-labelledby="genitourinaryModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id="genitourinaryModalLabel"
                        >
                          Genitourinary
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Rectal</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#rectalModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="rectalModal"
                  tabIndex="-1"
                  aria-labelledby="rectalModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="rectalModalLabel">
                          Rectal
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Peripheral Vascular</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#peripheralVascularModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="peripheralVascularModal"
                  tabIndex="-1"
                  aria-labelledby="peripheralVascularModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id="peripheralVascularModalLabel"
                        >
                          Peripheral Vascular
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Muscoloskeletal & Extremities</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#muscoloskeletalExtremitiesModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="muscoloskeletalExtremitiesModal"
                  tabIndex="-1"
                  aria-labelledby="muscoloskeletalExtremitiesModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id="muscoloskeletalExtremitiesModalLabel"
                        >
                          Muscoloskeletal & Extremities
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Neurological</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#neurologicalModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="neurologicalModal"
                  tabIndex="-1"
                  aria-labelledby="neurologicalModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="neurologicalModalLabel">
                          Neurological
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Hematological</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#hematologicalModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="hematologicalModal"
                  tabIndex="-1"
                  aria-labelledby="hematologicalModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id="hematologicalModalLabel"
                        >
                          Hematological
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Endocrinal</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#endocrinalModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="endocrinalModal"
                  tabIndex="-1"
                  aria-labelledby="endocrinalModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="endocrinalModalLabel">
                          Endocrinal
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="gen-form mt-3">
            <div className="row justify-content-between align-items-end mt-3">
              <div className="col-9 mb-2">
                <h3>Psychological & Psychiatric Illness</h3>
              </div>
              <div className="col-md-2">
                <div className="assessment-add-btn">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#psychologicalPsychiatricIllnessModal"
                  >
                    Add Entry
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="modal fade"
                  id="psychologicalPsychiatricIllnessModal"
                  tabIndex="-1"
                  aria-labelledby="psychologicalPsychiatricIllnessModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id="psychologicalPsychiatricIllnessModalLabel"
                        >
                          Psychological & Psychiatric Illness
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Checked checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text">
                          <input
                            type="text"
                            placeholder="Others"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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
                    <td>
                      <a href="#">
                        <i className="ri-close-circle-line"></i>
                      </a>
                    </td>
                    <td>xyz</td>
                    <td>asdfghjkl</td>
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

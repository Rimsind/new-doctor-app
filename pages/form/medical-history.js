import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
import useSWR from "swr";
import { useAuth } from "../../context";
import { useRouter } from "next/router";
import { apiUrl } from "../../config/api";
import Pagination from "../../components/Pagination";
const MedicalHistory = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();
  const { data } = useSWR(
    `${apiUrl}/appointments/${appointmentId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  const pastMedicalHistory = [
    "No past medical history",
    "Diabetes",
    "Genetic Disease",
    "Pacemaker",
    "AIDS",
    "Anemia",
    "Emphysema",
    "Kidney Disease",
    "Parkinson’s Disease",
    "Asthma",
    "Epilepsy/Seizures",
    "Fractures",
    "Liver Disease",
    "Prostate Disease",
    "Arthritis",
    "Glaucoma",
    "Low Blood Pressure",
    "Skin Disorder",
    "Blood Disorder",
    "Heart Attack",
    "Lung Disorder",
    "CVA/Stroke",
    "Broken Bones",
    "Heart Disease",
    "Lyme’s Disease",
    "Thyroid Disorder",
    "Circulation Problems",
    "Hepatitis",
    "Macular Degeneration",
    "Ulcers (Stomach)",
    "Cancer",
    "Head Injury",
    "Multiple Sclerosis",
    "Repeated Infections",
    "Cystic Fibrosis",
    "High Blood Pressure",
    "Osteoporosis",
    "Depression",
    "High Cholesterol",
    "Muscular Dystrophy",
    "Restless Leg Syndrome",
    "Fibromyalgia",
    "Migraine",
    "Others",
  ];

  const diagnostic_tests = [
    "No Diagnostic Testing",
    "Bronchoscopy",
    "EMG/Nerve Conduction",
    "Stool Test",
    "Angiogram",
    "CT scan",
    "Mammogram",
    "Stress Test",
    "Arthroscopy",
    "Ultrasound",
    "MRI",
    "Urine Test",
    "Biopsy",
    "Echocardiogram",
    "Pap smear",
    "X - Ray",
    "Blood Test",
    "EEG",
    "Pulmonary function Test",
    "Bone Scan",
    "EKG",
    "Spinal Tap",
    "Others",
  ];

  return (
    <>
      <div className="general-information-form relative p-6 flex-auto container">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Past Medical History
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div className="gen-form">
                <h3 className="font-bold mb-3">
                  Past medical history - Please check if anyone in your family
                  has or had any or the following:
                </h3>
                <div className="row justify-content-between align-items-center">
                  {pastMedicalHistory.map((item, index) => (
                    <div className="col-md-3" key={index}>
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">{item}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                </div>
              </div>
              <div className="gen-form">
                <h3 className="font-bold">
                  Past medical history - For Women Only:
                </h3>
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Pelvic Inflammatory Disease</p>
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="space-x-4">Yes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="space-x-4">No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Trouble with Period</p>
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="space-x-4">Yes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="space-x-4">No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Complicated Pregnancies</p>
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="space-x-4">Yes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="space-x-4">No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Pregnant</p>
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="space-x-4">Yes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="space-x-4">No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Endometriosis</p>
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="space-x-4">Yes</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="space-x-4">No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Any Other</p>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="gen-form">
                <h3 className="font-bold">
                  Surgical History – Please list any surgeries you had, and if
                  known include dates:
                </h3>
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">No surgeries to date</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">1.</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">Date:</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="date"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">2.</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">Date:</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="date"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">3.</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">Date:</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="date"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">4.</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">Date:</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="date"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="gen-form">
                <h3 className="font-bold">
                  Past medical history - Please check if anyone in your family
                  has or had any or the following:
                </h3>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">No Symptoms in Past Year</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Difficulty Walking</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Joint Pain or Swelling</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Tremors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Bowel Problems</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Dizziness/Blackouts</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Loss of Appetite</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Urinary Problems</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Chest Pain</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Excessive Sweating</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Loss of Balance</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Vision Problems</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Cough (Persistent)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Fatigue</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Nausea/vomiting</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Weakness in arm/legs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Decreased co-ordination</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Headaches</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Numbness in arms/legs</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">
                              Weight gain (Unexplained)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Difficulty Sleeping</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Hearing Problems</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Pain at Night</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">
                              Weight loss (Unexplained)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Difficulty Swallowing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Heart Palpitations</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Shortness of Breath</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div
                className="gen-form mb-3"
                style={{ borderBottom: "1px solid #bbbaba" }}
              >
                <h3 className="fs-6 fs-bold text-dark mb-3">
                  Diagnostic Test/Measures - within the past year, have you had
                  any of the following (Check all that apply):
                </h3>
                <div className="row justify-centent-between align-items-start">
                  <div className="col-md-12">
                    <div className="row">
                      {diagnostic_tests.map((item, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="diagnostic_tests"
                                value={item}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">{item}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="gen-form">
                <h3 className="font-bold">
                  Medications & Allergies – please check or list all medications
                  or allergies:
                </h3>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Non - Prescription</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">No Medications</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Decongestant</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Motrin</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Advil/Alleve</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Excedrin</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Vitamins/Minerals</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Antihistamines</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Herbal Supplements</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Tylenol</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Asprin</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Ibuprophen/Naproxen</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Prescription:</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Medications:</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Allergies</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">
                              Known allergies to date:
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row mb-3">
                <div className="col-md-9">
                  <h3 className="fs-6 fs-bold text-dark">
                    Medications & Allergies – please check or list all
                    medications or allergies:
                  </h3>
                </div>
                <div className="col-md-3">
                  <div className="text-end">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Add New Entry
                    </button>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h3 className="fs-6 fs-bold text-dark">
                            Medications & Allergies – please check or list all
                            medications or allergies:
                          </h3>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="gen-form mb-3">
                            <div className="row justify-centent-between align-items-start mb-3">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-md-2">Medicine Name:</div>
                                  <div className="col-md-4">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="MedicineName"
                                      placeholder=""
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    Medicine Dose (Including MG/MCG):
                                  </div>
                                  <div className="col-md-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="MedicineName"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row justify-centent-between align-items-start mb-3">
                              <div className="col-md-4">
                                <div className="row">
                                  <div className="col-md-6">Start Date:</div>
                                  <div className="col-md-6">
                                    <input
                                      type="date"
                                      className="form-control"
                                      name="MedicineName"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="row">
                                  <div className="col-md-4">Status:</div>
                                  <div className="col-md-8">
                                    <select
                                      className="form-select form-select-sm"
                                      aria-label=".form-select-sm example"
                                    >
                                      <option selected>Select Items</option>
                                      <option value="1">Continue</option>
                                      <option value="2">End</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="row">
                                  <div className="col-md-4">Status:</div>
                                  <div className="col-md-8">
                                    <select
                                      className="form-select form-select-sm"
                                      aria-label=".form-select-sm example"
                                    >
                                      <option selected>Select Items</option>
                                      <option value="1">Continue</option>
                                      <option value="2">End</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row justify-centent-between align-items-center mb-3">
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-md-5">
                                    Route (The Way of Taking Medicine):
                                  </div>
                                  <div className="col-md-7">
                                    <select
                                      className="form-select form-select-sm"
                                      aria-label=".form-select-sm example"
                                    >
                                      <option selected>Select Items</option>
                                      <option value="1">Capsule</option>
                                      <option value="2">Injection</option>
                                      <option value="3">Other Way</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-md-7">
                                    Friquency (How Many Doses Per/Day):
                                  </div>
                                  <div className="col-md-5">
                                    <select
                                      className="form-select form-select-sm"
                                      aria-label=".form-select-sm example"
                                    >
                                      <option value="1">Yes</option>
                                      <option value="2">No</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row justify-centent-between align-items-start mb-3">
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-md-5">
                                    Any Side Effect:
                                  </div>
                                  <div className="col-md-7">
                                    <select
                                      className="form-select form-select-sm"
                                      aria-label=".form-select-sm example"
                                    >
                                      <option selected>Select Items</option>
                                      <option value="1">Yes</option>
                                      <option value="2">No</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-md-2">If Yes:</div>
                                  <div className="col-md-10">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="MedicineName"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row justify-centent-between align-items-center">
                              <div className="col-md-2">
                                <h3 className="fs-6 fs-bold text-dark">
                                  Allergies
                                </h3>
                              </div>
                              <div className="col-md-10">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="row">
                                      <div className="col-md-10">
                                        <p className="space-x-4">
                                          Known allergies to date:
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="allergies"
                                      placeholder=""
                                    />
                                  </div>
                                  <div className="col-md-4"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="add_btn text-end mb-3">
                            <button type="button" className="btn btn-primary">
                              Add
                            </button>
                          </div>
                          <div
                            className="table-responsive"
                            style={{ borderTop: "1px solid #bbbaba" }}
                          >
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Medicine Name</th>
                                  <th scope="col">Medicine Dose</th>
                                  <th scope="col">Start Date</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Type</th>
                                  <th scope="col">Route</th>
                                  <th scope="col">Friquency </th>
                                  <th scope="col">Any Side Effect</th>
                                  <th scope="col">If Yes </th>
                                  <th scope="col">Allergies</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Cipcal</td>
                                  <td>500</td>
                                  <td>13/01/2022</td>
                                  <td>Continue</td>
                                  <td>Prescribed</td>
                                  <td>Oral</td>
                                  <td>2 times per day</td>
                                  <td>Yes</td>
                                  <td>Headech</td>
                                  <td>Rashes</td>
                                </tr>
                              </tbody>
                            </table>
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

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Medicine Name</th>
                      <th scope="col">Medicine Dose</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Type</th>
                      <th scope="col">Route</th>
                      <th scope="col">Friquency </th>
                      <th scope="col">Any Side Effect</th>
                      <th scope="col">If Yes </th>
                      <th scope="col">Allergies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cipcal</td>
                      <td>500</td>
                      <td>13/01/2022</td>
                      <td>Continue</td>
                      <td>Prescribed</td>
                      <td>Oral</td>
                      <td>2 times per day</td>
                      <td>Yes</td>
                      <td>Headech</td>
                      <td>Rashes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Pagination id={appointmentId} class5="active" />
      </div>
    </>
  );
};

export default MedicalHistory;

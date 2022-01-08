import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm";
import { useRouter } from "next/router";
const Form1 = () => {
  const { appointmentId } = useRouter().query;
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
                      Aerobic Capacity & Functional Mobility Skill Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>
                        Aerobic capacity during bed mobility task, transfer
                        task,ADL and IADL task (modified borg RPE scale)
                      </h3>
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Select Score</option>
                        <option value="1">0 – Nothing at all</option>
                        <option value="2">0.5 – Just noticeable</option>
                        <option value="3">1 – Very light</option>
                        <option value="4">2 – Light</option>
                        <option value="5">3 – Moderate</option>
                        <option value="6">4 – Somewhat heavy</option>
                        <option value="7">5 – Heavy</option>
                        <option value="8">6</option>
                        <option value="9">7 – Very heavy</option>
                        <option value="10">8</option>
                        <option value="11">9</option>
                        <option value="12">10 – Very, very heavy</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3>
                        Aerobic Capacity during standarized test includes ,step
                        test,3,6,12 mint walk test, graded exercise test,
                        treadmill test,w/c test
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-4">
                    <h3>
                      Cardiovascular and pulmonary signs and symptoms related to
                      increase oxygen demand
                    </h3>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Blood pressure</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Text Area"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                  Breath & voice sounds
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-control form-select form-select-sm"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>Select </option>
                              <option value="1">Normal</option>
                              <option value="2">Abnormal</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Heart Rate</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Text Area"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Cyanosis</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-control form-select form-select-sm"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>Select </option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Rhythm</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-control form-select form-select-sm"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>Select</option>
                              <option value="1">Normal</option>
                              <option value="2">Abnormal</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Gas Exchange</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-control form-select form-select-sm"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>Select</option>
                              <option value="1">Normal</option>
                              <option value="2">Abnormal</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Sounds</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-control form-select form-select-sm"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>Select </option>
                              <option value="1">Normal</option>
                              <option value="2">Abnormal</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Respiratory pattern</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-control form-select form-select-sm"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>Select </option>
                              <option value="1">Apnea</option>
                              <option value="2">Eupnea</option>
                              <option value="3">Orthopnea</option>
                              <option value="4">Dyspnea</option>
                              <option value="5">Hyperpnea</option>
                              <option value="6">Hyperventilation</option>
                              <option value="7">Hypoventilation</option>
                              <option value="8">
                                TachypneaKussmaul&apos;s respiration
                              </option>
                              <option value="9">
                                Cheyne-stokes respiration
                              </option>
                              <option value="10">
                                Blot&apos;s respiration
                              </option>
                              <option value="11">Apneustic breathing</option>
                              <option value="12">
                                Central neurogenic hyperventilation
                              </option>
                              <option value="13">
                                Central neurogenic hypoventilation
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Angina</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-control form-select form-select-sm"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>Select </option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Respiratory Rate</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Text Area"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Claudication</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-control form-select form-select-sm"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>Select </option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Respiratory Rhythm</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-control form-select form-select-sm"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>Select </option>
                              <option value="1">Normal</option>
                              <option value="2">Abnormal</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Exertion Scale</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>Select Score</option>
                              <option value="1">0 – Nothing at all</option>
                              <option value="2">0.5 – Just noticeable</option>
                              <option value="3">1 – Very light</option>
                              <option value="4">2 – Light</option>
                              <option value="5">3 – Moderate</option>
                              <option value="6">4 – Somewhat heavy</option>
                              <option value="7">5 – Heavy</option>
                              <option value="8">6</option>
                              <option value="9">7 – Very heavy</option>
                              <option value="10">8</option>
                              <option value="11">9</option>
                              <option value="12">10 – Very, very heavy</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
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
                                <p className="space-x-4">Oximetry (%)</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Text Area"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <IdentifiedProblem />
              <ShortTermGoal />
              <LongTermGoal />
              <TreatmentPlan />
            </div>
          </div>
        </div>
        <Pagination2 name1="active" id={appointmentId} />
      </div>
    </>
  );
};

export default Form1;
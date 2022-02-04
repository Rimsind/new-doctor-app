import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm/index";
import { useRouter } from "next/router";
const Form9 = () => {
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
                      Postural Control or Balance Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3>1. Functional Performance Test And Measures</h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Score"
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>A. Get up and go test</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>B. Functional reach test</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>C. Tinetti,s Test</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>D. Berg Balance Test</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3>2. Motor Strategy Level Test</h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Score"
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>A. Alignment In Sitting And Standing</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>D. Movement Strategy in Sitting and Standing</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3>3. Sensory Strategy Level Assessment</h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Score"
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>
                            Clinical Test for Sensory Interaction in
                            Balance(CTSIB)
                          </p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3>
                        4. Factors Impacted on Normal Postural Control Includes{" "}
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Score"
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>Cognitive Impairment</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>Musculoskeletal Impairment</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>Neuromuscular Impairment</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-8">
                          <p>Perceptual Impairment</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-table-form mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <table className="table table-bordered border-dark">
                        <tr>
                          <th colSpan="3" style={{ textAlign: "center" }}>
                            Sitting
                          </th>
                        </tr>
                        <tr>
                          <td>Small Movement</td>
                          <td>
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
                                <p>Normal</p>
                              </div>
                            </div>
                          </td>
                          <td>
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
                                <p>Impired</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Large Movement</td>
                          <td>
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
                                <p>Normal</p>
                              </div>
                            </div>
                          </td>
                          <td>
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
                                <p>Impired</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <table className="table table-bordered border-dark">
                        <tr>
                          <th colSpan="3" style={{ textAlign: "center" }}>
                            Standing
                          </th>
                        </tr>
                        <tr>
                          <td>Ankle Strategy</td>
                          <td>
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
                                <p>Normal</p>
                              </div>
                            </div>
                          </td>
                          <td>
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
                                <p>Impired</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Hip Strategy</td>
                          <td>
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
                                <p>Normal</p>
                              </div>
                            </div>
                          </td>
                          <td>
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
                                <p>Impired</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Stepping Strategy</td>
                          <td>
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
                                <p>Normal</p>
                              </div>
                            </div>
                          </td>
                          <td>
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
                                <p>Impired</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
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
          <Pagination2 name9="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form9;

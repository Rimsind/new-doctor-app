import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm/index";
import { useRouter } from "next/router";
const form6 = () => {
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
                      Cranial And Peripheral Nerve Assessment Includes Reflex
                      And Sensory Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>
                        Deep Tendon Reflex And Supercial Reflex Examination
                      </h3>
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
                <div className="gen-form">
                  <h3 className="mt-4 mb-4">Samatosensory Assessment:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Discriminative Touch</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <h3>Touch Awareness</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <h3>Touch Localization</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <h3>Touch Pressure Threshold</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <h3>Two point discrimination</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Plain</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <h3>Sharp</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <h3>Dull</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Proprioception</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <h3>Vibration</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <h3>Joint Position</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <h3>Joint Motion</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <h3>Stereognosis</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Temperature</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <h3>Hot</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <h3>Cold</h3>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impaired</p>
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
          <Pagination2 name6="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default form6;

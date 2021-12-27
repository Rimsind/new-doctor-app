import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm/index";
import { useRouter } from "next/router";
const form12 = () => {
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
                      Pain Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>ONSET OF PAIN</h3>
                    </div>
                    <div className="col-md-3">
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
                          <p className="space-x-4">Gradual</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
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
                          <p className="space-x-4">Sudden</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>LOCATION OF PAIN</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Box"
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Vascular</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Throbbing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pounding</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pulsing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Beating</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Neurogenic</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Stabbing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Crushing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pinching</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Hot</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Searing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Itchy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Stinging</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pulling</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Jumping</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Shooting</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pricking</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Gnawing</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Musculoskeletal</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Aching</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Sore</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Heavy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Hurting</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Dull</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Emotional</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Tiring</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Miserable</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Vicious</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Agonizing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Nauseating</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Frightful</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Piercing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Dreadful</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Punishing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Torturing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Killing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Unbearable</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Annoying</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>TYPE OF PAIN</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
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
                              <p className="space-x-4">RADIATING</p>
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
                              <p className="space-x-4">LOCALIZED</p>
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
                              <p className="space-x-4">DIFFUSE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>SEVERITY OF PAIN</h3>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">VISUAL ANALOG SCALE</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-2">
                          <p className="space-x-4">FACIAL EXPRESSION</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <select
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">0 : No pain</option>
                        <option value="2">1-3 : Mild pain</option>
                        <option value="3">4-6 : Severe pain</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Frequency of pain</h3>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Day Time</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Night Time</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">All Time</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">During Activity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>Duration of pain (in hrs)</h3>
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter the Value in hours"
                        min="0"
                        max="24"
                      />
                    </div>
                  </div>
                </div>

                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>Aggravating factor of pain</h3>
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Releiving factor of pain</h3>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Liquor</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Sleep/rest</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Stumilants (e.g caffine )</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Eating</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Heat</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Cold</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Weather changes</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Massage</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Pressure</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">No movement</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Movement</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Sitting</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Lying down</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                            Distraction (e.g. television)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Urination / Defecation</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Mild exercise</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Loude Noise</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Standing</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Medication</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>
                        Relieving of pain with medication (include type of
                        medication,dosage and hours of releive)
                      </h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Pattern of joint involvement</h3>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">One joint</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Multiple joint</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Assymetrical</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Symmetrical</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>Joint irritability</h3>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Mild</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">moderate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Seveir</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Progress of pain</h3>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Intermittently present</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Constantly present</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                            Present in recurrent attacks
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Progressively worse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>Worse problem (loss of function)</h3>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Mild</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">moderate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Seveir</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Related signs and symprtoms</h3>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Stiffness</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4"> Swelling</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Crepitus</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Locking</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Instability</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Weakness</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Muscle spasm</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
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
                          <p className="space-x-4">Neurological symptoms</p>
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
          <Pagination2 name12="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default form12;

import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm/index";
import { useRouter } from "next/router";
const Form13 = () => {
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
                      ENVIRONMENTAL BARRIER ASSESSMNET
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <h3>ENVIRONMENTAL BARRIERS</h3>
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">0 No barrier</option>
                        <option value="2">1 Mild barriers</option>
                        <option value="3">2 Moderate barriers</option>
                        <option value="3">3 Severe barriers</option>
                        <option value="3">4 Complete barriers</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <h3>FACILITATORS ASSESSMNET</h3>
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">0 No facilitator</option>
                        <option value="2">+1 Mild facilitator</option>
                        <option value="3">+2 Moderate facilitator</option>
                        <option value="3">+3 Severe facilitator</option>
                        <option value="3">+4 Complete facilitator</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>Individual attitudes of immediate family members</h3>
                    </div>
                    <div className="col-md-7">
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
                    <div className="col-md-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>Individual attitudes of friends</h3>
                    </div>
                    <div className="col-md-7">
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
                    <div className="col-md-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>
                        Individual attitudes of personal care providers and
                      </h3>
                    </div>
                    <div className="col-md-7">
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
                    <div className="col-md-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>personal assistants</h3>
                    </div>
                    <div className="col-md-7">
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
                    <div className="col-md-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>Individual attitudes of health professionals</h3>
                    </div>
                    <div className="col-md-7">
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
                    <div className="col-md-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>Societal attitudes</h3>
                    </div>
                    <div className="col-md-7">
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
                    <div className="col-md-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>Social norms, practices and ideologies</h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                      />
                    </div>
                  </div>
                </div>

                <div className="gen-form">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3>Identified Problems</h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-12">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      HOME AND WORK BARRIER ASSESSMNET
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
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
                          <p className="space-x-4">NONE</p>
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
                          <p className="space-x-4">STAIRS WITH HANDRAILS</p>
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
                          <p className="space-x-4">STAIRS WITHOUT HANDRAILS</p>
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
                          <p className="space-x-4">NO GRAB BARS IN BATHROOM</p>
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
                          <p className="space-x-4">
                            NARROW DOORWAYS OR ACCESS POINTS
                          </p>
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
                          <p className="space-x-4">INADEQUATE LIGHTING</p>
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
                          <p className="space-x-4">
                            CROWDED/CLUTTERED ENVIRONMENT
                          </p>
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
                          <p className="space-x-4">POOR FLOORING</p>
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
                          <p className="space-x-4">LACK OF RAMPS</p>
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
                          <p className="space-x-4">
                            UNSAFE STRUCTURAL ENVIRONMENT
                          </p>
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
                          <p className="space-x-4">NO ELECTRICITY</p>
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
                          <p className="space-x-4">NO RUNNING WATER</p>
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
                          <p className="space-x-4">CONTAMINATES WATER</p>
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
                          <p className="space-x-4">NO TOILETING FACILITY</p>
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
                          <p className="space-x-4">
                            INADEQUATE SEWAGE DISPOSAL
                          </p>
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
                          <p className="space-x-4">
                            INADEQUATE/IMPROPER FOOD STORAGE
                          </p>
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
                          <p className="space-x-4">
                            INADEQUATE/NO FOOD REFRIGRATION
                          </p>
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
                          <p className="space-x-4">NO COOKING FACILITY</p>
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
                          <p className="space-x-4">INSECTS/RODENTS</p>
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
                          <p className="space-x-4">
                            NARROW OR OBSTRUCTED DOORWAYS
                          </p>
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
                          <p className="space-x-4">
                            STAIRS LEADING FROM INSIDE HOUSE TO OUTSIDE
                          </p>
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
                          <p className="space-x-4">
                            STAIRS INSIDE HOUSE WHICH MUST BE USED
                          </p>
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
                          <p className="space-x-4">
                            STAIRS INSIDE HOUSE WHICH ARE USED OPTIONALLY
                          </p>
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
                          <p className="space-x-4">
                            CLUTTERED SOILED LIVING AREA
                          </p>
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
                          <p className="space-x-4">OTHERS</p>
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
          <Pagination2 name13="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form13;

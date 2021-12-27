import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm/index";
import { useRouter } from "next/router";
const Form16 = () => {
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
                      VENTILATION,RESPIRATION AND GAS EXCHANGE
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div>
                <div className="gen-form-table mt-4">
                  <table className="table table-bordered border-dark">
                    <tr>
                      <th></th>
                      <th></th>
                      <th>WNL</th>
                      <th>NA</th>
                    </tr>

                    <tr>
                      <td>CHEST WALL AND RELATED STRUCTURES</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>PHONATION</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>PULMONARY RELATED SYMPTOMS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>PULMONARY VITAL SIGNS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>THORACOABDOMINAL VENTILATORY PATTERNS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>PRESENCE AND LEVEL OF CYANOSIS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Ability to clear and protect airways</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Gas exchange and oxygen level/transport</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>pulmonary function and ventilatory mechanism</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>BREATH AND VOICE SOUNDS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                          />
                        </p>
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                      <td>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </td>
                    </tr>
                  </table>
                </div>

                <IdentifiedProblem />
                <ShortTermGoal />
                <LongTermGoal />
                <TreatmentPlan />
              </div>
            </div>
          </div>
          <Pagination2 name16="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form16;

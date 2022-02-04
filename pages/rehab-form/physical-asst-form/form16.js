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
                <div className="gen-form">
                  <div className="row">
                    <div className="col-md-4">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select items</option>
                        <option value="1">
                          CHEST WALL AND RELATED STRUCTURES
                        </option>
                        <option value="2">PHONATION</option>
                        <option value="3">PULMONARY RELATED SYMPTOMS</option>
                        <option value="4">PULMONARY VITAL SIGNS</option>
                        <option value="5">
                          THORACOABDOMINAL VENTILATORY PATTERNS
                        </option>
                        <option value="6">
                          PRESENCE AND LEVEL OF CYANOSIS
                        </option>
                        <option value="7">
                          Ability to clear and protect airways
                        </option>
                        <option value="8">
                          Gas exchange and oxygen level/transport
                        </option>
                        <option value="9">
                          Pulmonary function and ventilatory mechanism
                        </option>
                        <option value="10">BREATH AND VOICE SOUNDS</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Text"
                      ></input>
                    </div>
                    <div className="col-md-2">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select items</option>
                        <option value="1">WNL</option>
                        <option value="2">NA</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <div className="add_btn text-end">
                        <button className="btn btn-primary" type="button">
                          Add Items
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form-table py-4 bg-light ps-2 pe-2">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                    </tbody>
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

import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const Form16 = () => {
  const { appointmentId } = useRouter().query;
  const { register, handleSubmit } = useForm();
  const submit_form16 = (data, event) => {
    event.preventDefault();
    const payload = {
      ventilation_respiration_gas_exchange: {
        name: data.name,
        description: data.description,
        status: data.status,
        identified_problems: data.identified_problems,
        short_term_goals: data.short_term_goals,
        long_term_goals: data.long_term_goals,
        treatment_plan: data.treatment_plan,
      },
    };
    console.log(payload);
  };
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
              <form onSubmit={handleSubmit(submit_form16)}>
                <div className="gen-form">
                  <div className="row">
                    <div className="col-md-4">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        {...register("name")}
                      >
                        <option selected>Select items</option>
                        <option value="1">
                          CHEST WALL AND RELATED STRUCTURES
                        </option>
                        <option value="PHONATION">PHONATION</option>
                        <option value="PULMONARY RELATED SYMPTOMS">
                          PULMONARY RELATED SYMPTOMS
                        </option>
                        <option value="PULMONARY VITAL SIGNS">
                          PULMONARY VITAL SIGNS
                        </option>
                        <option value="THORACOABDOMINAL VENTILATORY PATTERNS">
                          THORACOABDOMINAL VENTILATORY PATTERNS
                        </option>
                        <option value=" PRESENCE AND LEVEL OF CYANOSIS">
                          PRESENCE AND LEVEL OF CYANOSIS
                        </option>
                        <option value="Ability to clear and protect airways">
                          Ability to clear and protect airways
                        </option>
                        <option value="Gas exchange and oxygen level/transport">
                          Gas exchange and oxygen level/transport
                        </option>
                        <option value="Pulmonary function and ventilatory mechanism">
                          Pulmonary function and ventilatory mechanism
                        </option>
                        <option value="BREATH AND VOICE SOUNDS">
                          BREATH AND VOICE SOUNDS
                        </option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Text"
                        {...register("description")}
                      ></input>
                    </div>
                    <div className="col-md-2">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        {...register("status")}
                      >
                        <option selected>Select items</option>
                        <option value="WNL">WNL</option>
                        <option value="NA">NA</option>
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
                  <table className="table">
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
                        {...register("identified_problems")}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3>Short Term Goals </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("short_term_goals")}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3>Long Term Goals </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("long_term_goals")}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3>Treatment Plan </h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("treatment_plan")}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="submit-btn mt-2 text-center">
                  <button className="btn btn-primary" type="submit">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Pagination2 name16="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form16;

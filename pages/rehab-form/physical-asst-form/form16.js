import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";

import router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../../context/index";
import { apiUrl } from "../../../config/api";
const Form16 = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();
  const { data: appointment } = useSWR(
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
  const { register, handleSubmit } = useForm();
  const submit_form16 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        ventilation_respiration_gas_exchange: {
          identified_problems: data.identified_problems,
          short_term_goals: data.short_term_goals,
          long_term_goals: data.long_term_goals,
          treatment_plan: data.treatment_plan,
          chest_wall_text: data.chest_wall_text,
          chest_wall_value: data.chest_wall_value,
          phonation_text: data.phonation_text,
          phonation_value: data.phonation_value,
          pulmonary_related_text: data.pulmonary_related_text,
          pulmonary_related_value: data.pulmonary_related_value,
          pulmonary_vital_text: data.pulmonary_vital_text,
          pulmonary_vital_value: data.pulmonary_vital_value,
          thoracoabdominal_text: data.thoracoabdominal_text,
          thoracoabdominal_value: data.thoracoabdominal_value,
          presence_level_text: data.presence_level_text,
          presence_level_value: data.presence_level_value,
          protect_airways_text: data.protect_airways_text,
          protect_airways_value: data.protect_airways_value,
          gas_exchange_text: data.gas_exchange_text,
          gas_exchange_value: data.gas_exchange_value,
          ventilatory_mechanism_text: data.ventilatory_mechanism_text,
          ventilatory_mechanism_value: data.ventilatory_mechanism_value,
          breath_voice_text: data.breath_voice_text,
          breath_voice_value: data.breath_voice_value,
        },
      },
    };

    const res = await axios.put(
      `${apiUrl}/appointments/${appointmentId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = res.data;
    alert("Form Submitted Succesfully");
    router.push(
      `/rehab-form/physical-asst-form/form17?appointmentId=${appointmentId}`
    );
    return result;
  };

  const optionsList = ["WNL", "NA"];
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
                <div className="gen-form-table mt-4">
                  <table className="table table-bordered">
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
                            {...register("chest_wall_text")}
                          />
                        </p>
                      </td>
                      {optionsList.map((items, index) => (
                        <td key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={items}
                            {...register("chest_wall_value")}
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>PHONATION</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("phonation_text")}
                          />
                        </p>
                      </td>
                      {optionsList.map((items, index) => (
                        <td key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={items}
                            {...register("phonation_value")}
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>PULMONARY RELATED SYMPTOMS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("pulmonary_related_text")}
                          />
                        </p>
                      </td>
                      {optionsList.map((items, index) => (
                        <td key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={items}
                            {...register("pulmonary_related_value")}
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>PULMONARY VITAL SIGNS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("pulmonary_vital_text")}
                          />
                        </p>
                      </td>
                      {optionsList.map((items, index) => (
                        <td key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={items}
                            {...register("pulmonary_vital_value")}
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>THORACOABDOMINAL VENTILATORY PATTERNS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("thoracoabdominal_text")}
                          />
                        </p>
                      </td>
                      {optionsList.map((items, index) => (
                        <td key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={items}
                            {...register("thoracoabdominal_value")}
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>PRESENCE AND LEVEL OF CYANOSIS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("presence_level_text")}
                          />
                        </p>
                      </td>
                      {optionsList.map((items, index) => (
                        <td key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={items}
                            {...register("presence_level_value")}
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>Ability to clear and protect airways</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("protect_airways_text")}
                          />
                        </p>
                      </td>
                      {optionsList.map((items, index) => (
                        <td key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={items}
                            {...register("protect_airways_value")}
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>Gas exchange and oxygen level/transport</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("gas_exchange_text")}
                          />
                        </p>
                      </td>
                      {optionsList.map((items, index) => (
                        <td key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={items}
                            {...register("gas_exchange_value")}
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>pulmonary function and ventilatory mechanism</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("ventilatory_mechanism_text")}
                          />
                        </p>
                      </td>
                      {optionsList.map((items, index) => (
                        <td key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={items}
                            {...register("ventilatory_mechanism_value")}
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>BREATH AND VOICE SOUNDS</td>

                      <td>
                        <p>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text Area"
                            {...register("breath_voice_text")}
                          />
                        </p>
                      </td>
                      {optionsList.map((items, index) => (
                        <td key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            value={items}
                            {...register("breath_voice_value")}
                          />
                        </td>
                      ))}
                    </tr>
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
          <Pagination2 name15="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form16;

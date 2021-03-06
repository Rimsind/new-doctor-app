import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../../context/index";
import { apiUrl } from "../../../config/api";
import router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const Form3 = () => {
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
  const submit_form3 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        circulatory_assesment: {
          physiological_response: data.physiological_response,
          peripheral_venous: data.peripheral_venous,
          presence_of_bruits: data.presence_of_bruits,
          identified_problems: data.identified_problems,
          short_term_goals: data.short_term_goals,
          traetment_plan: data.traetment_plan,
          long_term_goals: data.long_term_goals,
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
      `/rehab-form/physical-asst-form/form4?appointmentId=${appointmentId}`
    );
    return result;
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
                      Circulatory Assessment Includes Arterial / Venous /
                      Lymphatic System
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form3)}>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3>Physiological response to position change</h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("physiological_response")}
                        defaultValue={
                          !!appointment?.rehab?.circulatory_assesment &&
                          !!appointment?.rehab?.circulatory_assesment
                            .physiological_response
                            ? appointment?.rehab?.circulatory_assesment
                                .physiological_response
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3>
                        Peripheral venous, arterial and lymphatic circulation
                        assessment, skincolour and nail changes.
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("peripheral_venous")}
                        defaultValue={
                          !!appointment?.rehab?.circulatory_assesment &&
                          !!appointment?.rehab?.circulatory_assesment
                            .peripheral_venous
                            ? appointment?.rehab?.circulatory_assesment
                                .peripheral_venous
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-8">
                      <h3>
                        Presence of bruits, abnormal heart sounds, rate or
                        rhytm,vital signs at rest
                      </h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("presence_of_bruits")}
                        defaultValue={
                          !!appointment?.rehab?.circulatory_assesment &&
                          !!appointment?.rehab?.circulatory_assesment
                            .presence_of_bruits
                            ? appointment?.rehab?.circulatory_assesment
                                .presence_of_bruits
                            : ""
                        }
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
                        {...register("identified_problems")}
                        defaultValue={
                          !!appointment?.rehab?.circulatory_assesment &&
                          !!appointment?.rehab?.circulatory_assesment
                            .identified_problems
                            ? appointment?.rehab?.circulatory_assesment
                                .identified_problems
                            : ""
                        }
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
                        defaultValue={
                          !!appointment?.rehab?.circulatory_assesment &&
                          !!appointment?.rehab?.circulatory_assesment
                            .short_term_goals
                            ? appointment?.rehab?.circulatory_assesment
                                .short_term_goals
                            : ""
                        }
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
                        defaultValue={
                          !!appointment?.rehab?.circulatory_assesment &&
                          !!appointment?.rehab?.circulatory_assesment
                            .long_term_goals
                            ? appointment?.rehab?.circulatory_assesment
                                .long_term_goals
                            : ""
                        }
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
                        {...register("traetment_plan")}
                        defaultValue={
                          !!appointment?.rehab?.circulatory_assesment &&
                          !!appointment?.rehab?.circulatory_assesment
                            .traetment_plan
                            ? appointment?.rehab?.circulatory_assesment
                                .traetment_plan
                            : ""
                        }
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
        </div>
        <Pagination2 name3="active" id={appointmentId} />
      </div>
    </>
  );
};

export default Form3;

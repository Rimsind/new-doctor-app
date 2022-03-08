import { useRouter } from "next/router";
import FormCloseBtn from "../../components/FormCloseBtn";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../context";
import { apiUrl } from "../../config/api";
import useSWR from "swr";
const Vitals = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();
  const { data } = useSWR(
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

  const { vitalSigns, id: patientId } = data?.patient;

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  let meter = height / 100;
  let result = weight / (meter * meter);
  let bmiResult = result.toFixed(1);

  const { register, handleSubmit } = useForm();
  const submitVitalSigns = async (data, event) => {
    event.preventDefault();
    const payload = {
      vitalSigns: {
        oxygen: data.oxygen,
        heartRate: data.heartRate,
        height: height,
        glucose: data.glucose,
        temperature: data.temperature,
        weight: weight,
        respiration: data.respiration,
        bmi: bmiResult,
        bloodPressure: data.bloodPressure,
      },
    };
    const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    const result = res.data;
    alert("Vital Signs Updated Succesfully");
    return result;
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitVitalSigns)}>
        <div className="general-information-form relative p-6 flex-auto">
          <div className="max-w-6xl mx-auto md:py-10">
            <div className="space-y-5 border-2 p-10 rounded">
              <div className="space-y-2 pb-5">
                <div className="gen-form-upper row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="text-center pb-6">
                      <h3 className="general-information-form-title font-bold">
                        Vital Signs & Statistics
                      </h3>
                    </div>
                  </div>
                  <FormCloseBtn id={appointmentId} />
                </div>
                <div className="gen-form">
                  <h3>Vital Signs</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-2">
                      <label>Height (cm)</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="cm"
                            onChange={(e) => setHeight(e.target.value)}
                            defaultValue={
                              !!vitalSigns && !!vitalSigns.height
                                ? vitalSigns.height
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label>Weight (Kg)</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="kg"
                            onChange={(e) => setWeight(e.target.value)}
                            defaultValue={
                              !!vitalSigns && !!vitalSigns.weight
                                ? vitalSigns.weight
                                : ""
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label>BMI</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            // value={bmiResult}
                            contentEditable="false"
                            defaultValue={
                              !!vitalSigns && !!vitalSigns.bmi
                                ? vitalSigns.bmi
                                : bmiResult
                            }
                            disabled
                            title="BMI Value Will be generated aumomatically"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label>BP (Right Arm)</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("bloodPressure")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.bloodPressure
                            ? vitalSigns.bloodPressure
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-3">
                      <label>BP (Left Arm)</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.heartRate
                            ? vitalSigns.heartRate
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Heart Rate</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("heartRate")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.heartRate
                            ? vitalSigns.heartRate
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>O2 Saturation</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("oxygen")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.oxygen
                            ? vitalSigns.oxygen
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Respiratory Rate</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("respiration")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.respiration
                            ? vitalSigns.respiration
                            : ""
                        }
                      />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Temperature (Oral)</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("temperature")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.temperature
                            ? vitalSigns.temperature
                            : ""
                        }
                      />
                    </div>

                    <div className="col-md-3 mt-4">
                      <label>Glocose Level</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("glucose")}
                        defaultValue={
                          !!vitalSigns && !!vitalSigns.glucose
                            ? vitalSigns.glucose
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gen-form-btn mt-3">
            <div className="save-btn text-center">
              <button className="btn btn-success" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Vitals;

import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../../context/index";
import { apiUrl } from "../../../config/api";

import router, { useRouter } from "next/router";
const Form1 = () => {
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

  const { aerobicCapacity } = appointment.rehab;

  const { register, handleSubmit } = useForm();
  const submit_form1 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        aerobicCapacity: {
          angina: data.angina,
          oximetry: data.oximetry,
          describe_short_term_goals: data.describe_short_term_goals,
          sounds: data.sounds,
          shortTerm_transfer_task: data.shortTerm_transfer_task,
          during_bed_mobility: data.during_bed_mobility,
          gas_exchange: data.gas_exchange,
          shortTerm_ambulation_task: data.shortTerm_ambulation_task,
          blood_pressure: data.blood_pressure,
          respiratory_rhythm: data.respiratory_rhythm,
          shortTerm_standarized_test: data.shortTerm_standarized_test,
          shortTerm_at_rpe: data.shortTerm_at_rpe,
          breath_voice_sounds: data.breath_voice_sounds,
          cyanosis: data.cyanosis,
          claudication: data.claudication,
          respiratory_rate: data.respiratory_rate,
          rhythm: data.rhythm,
          identified_problems: data.identified_problems,
          during_standarized_test: data.during_standarized_test,
          heart_rate: data.heart_rate,
          respiratory_pattern: data.respiratory_pattern,
          during_transfer_task: data.during_transfer_task,
          at_rpe: data.at_rpe,
          shortTerm_bed_mobility: data.shortTerm_bed_mobility,
          during_ambulation_task: data.during_ambulation_task,
          longTerm_bed_mobility: data.longTerm_bed_mobility,
          longTerm_transfer_task: data.longTerm_transfer_task,
          longTerm_Ambulation_task: data.longTerm_Ambulation_task,
          longTerm_Standarized_test: data.longTerm_Standarized_test,
          longTerm_at_rpe: data.longTerm_at_rpe,
          longTerm_description: data.longTerm_description,
          aerobic_capacity_retraining:
            data.aerobic_capacity_retraining.toString(),
          treatment_plan: data.treatment_plan,
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
      `/rehab-form/physical-asst-form/form2?appointmentId=${appointmentId}`
    );
    return result;
  };

  const retrainingList = [
    "Bed Mobility Task",
    "Transfer Task",
    "ADL Task",
    "IADL Task",
    "Ambulation Task",
    "Treadmill Task",
    "Step Test Task",
    "Wheelchair Mobility Task",
  ];

  const makeArrfromString = (str) => {
    if (str) {
      const arr = str.split(",");
      const result = arr.map((item) => item.trim());
      return result;
    } else {
      str = "";
    }
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
                      Aerobic Capacity with Functional Mobility Skill Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form1)}>
                <div>
                  <div className="gen-form">
                    <div className="row align-items-start mb-3">
                      <div className="col-md-9">
                        <h3>
                          Aerobic capacity during bed mobility (modified borg
                          RPE scale)
                        </h3>
                      </div>
                      <div className="col-md-3">
                        <select
                          className="form-select"
                          aria-label="default example"
                          {...register("during_bed_mobility")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!aerobicCapacity &&
                              aerobicCapacity.during_bed_mobility
                            }
                          >
                            {!!aerobicCapacity &&
                            aerobicCapacity.during_bed_mobility
                              ? aerobicCapacity.during_bed_mobility
                              : ""}
                          </option>
                          <option value="0 - Nothing at all">
                            0 - Nothing at all
                          </option>
                          <option value="0.5 - Just noticeable">
                            0.5 - Just noticeable
                          </option>
                          <option value="1 - Very light">1 - Very light</option>
                          <option value="2 - Light">2 - Light</option>
                          <option value="3 - Moderate">3 - Moderate</option>
                          <option value="4 - Somewhat heavy">
                            4 - Somewhat heavy
                          </option>
                          <option value="5 - Heavy">5 - Heavy</option>
                          <option value="6">6</option>
                          <option value="7 - Very heavy">7 - Very heavy</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10 - Very, very heavy">
                            10 - Very, very heavy
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-start mb-3">
                      <div className="col-md-9">
                        <h3>
                          Aerobic capacity during transfer task (modified borg
                          RPE scale)
                        </h3>
                      </div>
                      <div className="col-md-3">
                        <select
                          className="form-select"
                          aria-label="default example"
                          {...register("during_transfer_task")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!aerobicCapacity &&
                              aerobicCapacity.during_transfer_task
                            }
                          >
                            {!!aerobicCapacity &&
                            aerobicCapacity.during_transfer_task
                              ? aerobicCapacity.during_transfer_task
                              : ""}
                          </option>
                          <option value="0 - Nothing at all">
                            0 - Nothing at all
                          </option>
                          <option value="0.5 - Just noticeable">
                            0.5 - Just noticeable
                          </option>
                          <option value="1 - Very light">1 - Very light</option>
                          <option value="2 - Light">2 - Light</option>
                          <option value="3 - Moderate">3 - Moderate</option>
                          <option value="4 - Somewhat heavy">
                            4 - Somewhat heavy
                          </option>
                          <option value="5 - Heavy">5 - Heavy</option>
                          <option value="6">6</option>
                          <option value="7 - Very heavy">7 - Very heavy</option>
                          <option value="7 - Very heavy">8</option>
                          <option value="9">9</option>
                          <option value="10 - Very, very heavy">
                            10 - Very, very heavy
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-start mb-3">
                      <div className="col-md-9">
                        <h3>
                          Aerobic capacity during Ambulation task (modified borg
                          RPE scale)
                        </h3>
                      </div>
                      <div className="col-md-3">
                        <select
                          className="form-select"
                          aria-label="default example"
                          {...register("during_ambulation_task")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!aerobicCapacity &&
                              aerobicCapacity.during_ambulation_task
                            }
                          >
                            {!!aerobicCapacity &&
                            aerobicCapacity.during_ambulation_task
                              ? aerobicCapacity.during_ambulation_task
                              : ""}
                          </option>
                          <option value="0 - Nothing at all">
                            0 - Nothing at all
                          </option>
                          <option value="0.5 - Just noticeable">
                            0.5 - Just noticeable
                          </option>
                          <option value="1 - Very light">1 - Very light</option>
                          <option value="2 - Light">2 - Light</option>
                          <option value="3 - Moderate">3 - Moderate</option>
                          <option value="4 - Somewhat heavy">
                            4 - Somewhat heavy
                          </option>
                          <option value="5 - Heavy">5 - Heavy</option>
                          <option value="6">6</option>
                          <option value="7 - Very heavy">7 - Very heavy</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10 - Very, very heavy">
                            10 - Very, very heavy
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="gen-form">
                    <div className="row justify-content-between align-items-start">
                      <div className="col-md-7">
                        <h3>
                          Aerobic Capacity during standarized test includes
                        </h3>
                      </div>
                      <div className="col-md-2">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          {...register("during_standarized_test")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!aerobicCapacity &&
                              aerobicCapacity.during_standarized_test
                            }
                          >
                            {!!aerobicCapacity &&
                            aerobicCapacity.during_standarized_test
                              ? aerobicCapacity.during_standarized_test
                              : ""}
                          </option>
                          <option value="3 Mint Walk Test">
                            3 Mint Walk Test
                          </option>
                          <option value="6 Mint Walk Test">
                            6 Mint Walk Test
                          </option>
                          <option value="9 Mint Walk Test">
                            9 Mint Walk Test
                          </option>
                          <option value="12 Mint Walk Test">
                            12 Mint Walk Test
                          </option>
                          <option value="Treadmill Test">Treadmill Test</option>
                          <option value="WC Mobility Test">
                            WC Mobility Test
                          </option>
                          <option value="Step Test">Step Test</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <p className="fs-6 fw-bold text-center">at RPE</p>
                      </div>
                      <div className="col-md-2">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          {...register("at_rpe")}
                        >
                          <option
                            name="language"
                            defaultValue={
                              !!aerobicCapacity && aerobicCapacity.at_rpe
                            }
                          >
                            {!!aerobicCapacity && aerobicCapacity.at_rpe
                              ? aerobicCapacity.at_rpe
                              : ""}
                          </option>
                          <option value="0 - Nothing at all">
                            0 - Nothing at all
                          </option>
                          <option value="0.5 - Just noticeable">
                            0.5 - Just noticeable
                          </option>
                          <option value="1 - Very light">1 - Very light</option>
                          <option value="2 - Light">2 - Light</option>
                          <option value="3 - Moderate">3 - Moderate</option>
                          <option value="4 - Somewhat heavy">
                            4 - Somewhat heavy
                          </option>
                          <option value="5 - Heavy">5 - Heavy</option>
                          <option value="6">6</option>
                          <option value="7 - Very heavy">7 - Very heavy</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10 - Very, very heavy">
                            10 - Very, very heavy
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-center mb-4">
                    <div className="col-md-12">
                      <h3>
                        Cardiovascular and pulmonary signs and symptoms related
                        to increase oxygen demand
                      </h3>
                    </div>
                  </div>
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Blood pressure</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Text Area"
                                name="blood_pressure"
                                {...register("blood_pressure")}
                                defaultValue={
                                  !!aerobicCapacity &&
                                  !!aerobicCapacity.blood_pressure
                                    ? aerobicCapacity.blood_pressure
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">
                                    Breath & voice sounds
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("breath_voice_sounds")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!aerobicCapacity &&
                                    aerobicCapacity.breath_voice_sounds
                                  }
                                >
                                  {!!aerobicCapacity &&
                                  aerobicCapacity.breath_voice_sounds
                                    ? aerobicCapacity.breath_voice_sounds
                                    : ""}
                                </option>
                                <option value="Normal">Normal</option>
                                <option value="Abnormal">Abnormal</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Heart Rate</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Text Area"
                                name="heart_rate"
                                {...register("heart_rate")}
                                defaultValue={
                                  !!aerobicCapacity &&
                                  !!aerobicCapacity.heart_rate
                                    ? aerobicCapacity.heart_rate
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Cyanosis</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("cyanosis")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!aerobicCapacity &&
                                    aerobicCapacity.cyanosis
                                  }
                                >
                                  {!!aerobicCapacity && aerobicCapacity.cyanosis
                                    ? aerobicCapacity.cyanosis
                                    : ""}
                                </option>
                                <option value="Central Cyanosis">
                                  Central Cyanosis
                                </option>
                                <option value="Peripheral Cyanosis">
                                  Peripheral Cyanosis
                                </option>
                                <option value="Differential Cyanosis">
                                  Differential Cyanosis
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Rhythm</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("rhythm")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!aerobicCapacity && aerobicCapacity.rhythm
                                  }
                                >
                                  {!!aerobicCapacity && aerobicCapacity.rhythm
                                    ? aerobicCapacity.rhythm
                                    : ""}
                                </option>
                                <option value="Normal">Normal</option>
                                <option value="Abnormal">Abnormal</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Gas Exchange</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("gas_exchange")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!aerobicCapacity &&
                                    aerobicCapacity.gas_exchange
                                  }
                                >
                                  {!!aerobicCapacity &&
                                  aerobicCapacity.gas_exchange
                                    ? aerobicCapacity.gas_exchange
                                    : ""}
                                </option>
                                <option value="Normal">Normal</option>
                                <option value="Abnormal">Abnormal</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Sounds</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("sounds")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!aerobicCapacity && aerobicCapacity.sounds
                                  }
                                >
                                  {!!aerobicCapacity && aerobicCapacity.sounds
                                    ? aerobicCapacity.sounds
                                    : ""}
                                </option>
                                <option value="Normal">Normal</option>
                                <option value="Abnormal">Abnormal</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">
                                    Respiratory pattern
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("respiratory_pattern")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!aerobicCapacity &&
                                    aerobicCapacity.respiratory_pattern
                                  }
                                >
                                  {!!aerobicCapacity &&
                                  aerobicCapacity.respiratory_pattern
                                    ? aerobicCapacity.respiratory_pattern
                                    : ""}
                                </option>
                                <option value="Apnea">Apnea</option>
                                <option value="Eupnea">Eupnea</option>
                                <option value="Orthopnea">Orthopnea</option>
                                <option value="Dyspnea">Dyspnea</option>
                                <option value="Hyperpnea">Hyperpnea</option>
                                <option value="Hyperventilation">
                                  Hyperventilation
                                </option>
                                <option value="Hypoventilation">
                                  Hypoventilation
                                </option>
                                <option value="TachypneaKussmaul's respiration">
                                  TachypneaKussmaul&apos;s respiration
                                </option>
                                <option value="Cheyne-stokes respiration">
                                  Cheyne-stokes respiration
                                </option>
                                <option value="Blot's respiration">
                                  Blot&apos;s respiration
                                </option>
                                <option value="Apneustic breathing">
                                  Apneustic breathing
                                </option>
                                <option value="Central neurogenic hyperventilation">
                                  Central neurogenic hyperventilation
                                </option>
                                <option value="Central neurogenic hypoventilation">
                                  Central neurogenic hypoventilation
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Angina</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("angina")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!aerobicCapacity && aerobicCapacity.angina
                                  }
                                >
                                  {!!aerobicCapacity && aerobicCapacity.angina
                                    ? aerobicCapacity.angina
                                    : ""}
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Respiratory Rate</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Text Area"
                                name="respiratory_rate"
                                {...register("respiratory_rate")}
                                defaultValue={
                                  !!aerobicCapacity &&
                                  !!aerobicCapacity.respiratory_rate
                                    ? aerobicCapacity.respiratory_rate
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Claudication</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("claudication")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!aerobicCapacity &&
                                    aerobicCapacity.claudication
                                  }
                                >
                                  {!!aerobicCapacity &&
                                  aerobicCapacity.claudication
                                    ? aerobicCapacity.claudication
                                    : ""}
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">
                                    Respiratory Rhythm
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select
                                className="form-control form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                {...register("respiratory_rhythm")}
                              >
                                <option
                                  name="language"
                                  defaultValue={
                                    !!aerobicCapacity &&
                                    aerobicCapacity.respiratory_rhythm
                                  }
                                >
                                  {!!aerobicCapacity &&
                                  aerobicCapacity.respiratory_rhythm
                                    ? aerobicCapacity.respiratory_rhythm
                                    : ""}
                                </option>
                                <option value="Normal">Normal</option>
                                <option value="Abnormal">Abnormal</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="space-x-4">Oximetry (%)</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Text Area"
                                name="oximetry"
                                {...register("oximetry")}
                                defaultValue={
                                  !!aerobicCapacity &&
                                  !!aerobicCapacity.oximetry
                                    ? aerobicCapacity.oximetry
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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
                          !!aerobicCapacity &&
                          !!aerobicCapacity.identified_problems
                            ? aerobicCapacity.identified_problems
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
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for bed
                            mobility task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("shortTerm_bed_mobility")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!aerobicCapacity &&
                                aerobicCapacity.shortTerm_bed_mobility
                              }
                            >
                              {!!aerobicCapacity &&
                              aerobicCapacity.shortTerm_bed_mobility
                                ? aerobicCapacity.shortTerm_bed_mobility
                                : ""}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for
                            transfer task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("shortTerm_transfer_task")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!aerobicCapacity &&
                                aerobicCapacity.shortTerm_transfer_task
                              }
                            >
                              {!!aerobicCapacity &&
                              aerobicCapacity.shortTerm_transfer_task
                                ? aerobicCapacity.shortTerm_transfer_task
                                : ""}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for
                            ambulation task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("shortTerm_ambulation_task")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!aerobicCapacity &&
                                aerobicCapacity.shortTerm_ambulation_task
                              }
                            >
                              {!!aerobicCapacity &&
                              aerobicCapacity.shortTerm_ambulation_task
                                ? aerobicCapacity.shortTerm_ambulation_task
                                : ""}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row justify-content-between align-items-start">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate during standarized
                          </label>
                        </div>
                        <div className="col-md-2">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("shortTerm_standarized_test")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!aerobicCapacity &&
                                aerobicCapacity.shortTerm_standarized_test
                              }
                            >
                              {!!aerobicCapacity &&
                              aerobicCapacity.shortTerm_standarized_test
                                ? aerobicCapacity.shortTerm_standarized_test
                                : ""}
                            </option>
                            <option value="3 Mint Walk Test">
                              3 Mint Walk Test
                            </option>
                            <option value="6 Mint Walk Test">
                              6 Mint Walk Test
                            </option>
                            <option value="9 Mint Walk Test">
                              9 Mint Walk Test
                            </option>
                            <option value="12 Mint Walk Test">
                              12 Mint Walk Test
                            </option>
                            <option value="Treadmill Test">
                              Treadmill Test
                            </option>
                            <option value="WC Mobility Test">
                              WC Mobility Test
                            </option>
                            <option value="Step Test">Step Test</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <p className="fs-6 fw-bold text-center">at RPE</p>
                        </div>
                        <div className="col-md-2">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("shortTerm_at_rpe")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!aerobicCapacity &&
                                aerobicCapacity.shortTerm_at_rpe
                              }
                            >
                              {!!aerobicCapacity &&
                              aerobicCapacity.shortTerm_at_rpe
                                ? aerobicCapacity.shortTerm_at_rpe
                                : ""}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("describe_short_term_goals")}
                        defaultValue={
                          !!aerobicCapacity &&
                          !!aerobicCapacity.describe_short_term_goals
                            ? aerobicCapacity.describe_short_term_goals
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
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for bed
                            mobility task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("longTerm_bed_mobility")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!aerobicCapacity &&
                                aerobicCapacity.longTerm_bed_mobility
                              }
                            >
                              {!!aerobicCapacity &&
                              aerobicCapacity.longTerm_bed_mobility
                                ? aerobicCapacity.longTerm_bed_mobility
                                : ""}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for
                            transfer task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("longTerm_transfer_task")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!aerobicCapacity &&
                                aerobicCapacity.longTerm_transfer_task
                              }
                            >
                              {!!aerobicCapacity &&
                              aerobicCapacity.longTerm_transfer_task
                                ? aerobicCapacity.longTerm_transfer_task
                                : ""}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate aerobic capacity for
                            ambulation task to
                          </label>
                        </div>
                        <div className="col-md-5">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("longTerm_Ambulation_task")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!aerobicCapacity &&
                                aerobicCapacity.longTerm_Ambulation_task
                              }
                            >
                              {!!aerobicCapacity &&
                              aerobicCapacity.longTerm_Ambulation_task
                                ? aerobicCapacity.longTerm_Ambulation_task
                                : ""}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row justify-content-between align-items-start">
                        <div className="col-md-7">
                          <label className="mb-3">
                            Patients will demonstrate during standarized
                          </label>
                        </div>
                        <div className="col-md-2">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("longTerm_Standarized_test")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!aerobicCapacity &&
                                aerobicCapacity.longTerm_Standarized_test
                              }
                            >
                              {!!aerobicCapacity &&
                              aerobicCapacity.longTerm_Standarized_test
                                ? aerobicCapacity.longTerm_Standarized_test
                                : ""}
                            </option>
                            <option value="3 Mint Walk Test">
                              3 Mint Walk Test
                            </option>
                            <option value="6 Mint Walk Test">
                              6 Mint Walk Test
                            </option>
                            <option value="9 Mint Walk Test">
                              9 Mint Walk Test
                            </option>
                            <option value="12 Mint Walk Test">
                              12 Mint Walk Test
                            </option>
                            <option value="Treadmill Test">
                              Treadmill Test
                            </option>
                            <option value="WC Mobility Test">
                              WC Mobility Test
                            </option>
                            <option value="Step Test">Step Test</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <p className="fs-6 fw-bold text-center">at RPE</p>
                        </div>
                        <div className="col-md-2">
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            {...register("longTerm_at_rpe")}
                          >
                            <option
                              name="language"
                              defaultValue={
                                !!aerobicCapacity &&
                                aerobicCapacity.longTerm_at_rpe
                              }
                            >
                              {!!aerobicCapacity &&
                              aerobicCapacity.longTerm_at_rpe
                                ? aerobicCapacity.longTerm_at_rpe
                                : ""}
                            </option>
                            <option value="0 - Nothing at all">
                              0 - Nothing at all
                            </option>
                            <option value="0.5 - Just noticeable">
                              0.5 - Just noticeable
                            </option>
                            <option value="1 - Very light">
                              1 - Very light
                            </option>
                            <option value="2 - Light">2 - Light</option>
                            <option value="3 - Moderate">3 - Moderate</option>
                            <option value="4 - Somewhat heavy">
                              4 - Somewhat heavy
                            </option>
                            <option value="5 - Heavy">5 - Heavy</option>
                            <option value="6">6</option>
                            <option value="7 - Very heavy">
                              7 - Very heavy
                            </option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10 - Very, very heavy">
                              10 - Very, very heavy
                            </option>
                          </select>
                        </div>
                      </div>
                      <textarea
                        className="form-control"
                        placeholder="Describe your problems here"
                        {...register("longTerm_description")}
                        defaultValue={
                          !!aerobicCapacity &&
                          !!aerobicCapacity.longTerm_description
                            ? aerobicCapacity.longTerm_description
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
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <label className="mb-3 fs-6 fw-bold">
                            Aerobic capacity retraining for
                          </label>
                        </div>
                        <div className="col-md-10">
                          <div className="row mb-3">
                            {retrainingList.map((items, index) => (
                              <div className="col-md-3" key={index}>
                                <div className="form check form-check-inline">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value={items}
                                    defaultChecked={
                                      !!aerobicCapacity &&
                                      makeArrfromString(
                                        aerobicCapacity.aerobic_capacity_retraining
                                      )?.includes(items)
                                    }
                                    {...register("aerobic_capacity_retraining")}
                                  />
                                  <label className="ps-2">{items}</label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("treatment_plan")}
                        defaultValue={
                          !!aerobicCapacity && !!aerobicCapacity.treatment_plan
                            ? aerobicCapacity.treatment_plan
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
        <Pagination2 name1="active" id={appointmentId} />
      </div>
    </>
  );
};

export default Form1;

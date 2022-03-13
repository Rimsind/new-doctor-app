import { useRouter } from "next/router";
import { useState } from "react";
import FormCloseBtn from "../../components/FormCloseBtn";
import { useAuth } from "../../context";
import useSWR from "swr";
import { apiUrl } from "../../config/api";
import axios from "axios";
import router from "next/router";

const HistoryOfPresentIllness = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();

  const [cameTo, setCameTo] = useState();
  const [problem, setProblem] = useState();
  const [stated, setStated] = useState();
  const [hasDone, setHasDone] = useState();
  const [medication, setMedication] = useState();
  const [other, setOther] = useState();

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

  const historyOfIllness = `${data?.patient?.first_name} ${data?.patient?.last_name} is a ${data?.patient?.age} y.o ${data?.patient?.gender} came to the ${cameTo} with a problem of ${problem}. Patient stated ${stated}. Patient was done ${hasDone}. Patient current medication includes ${medication}. Other relevant factors are ${other}.`;
  const submitForm = async (event) => {
    event.preventDefault();
    if (!cameTo || !problem || !stated || !hasDone || !medication || !other) {
      alert("Fill all the data");
    }

    const payload = {
      historyOfIllness: historyOfIllness,
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
    router.push(`/diagnosis?appointmentId=${appointmentId}`);
    return result;
  };
  return (
    <>
      <div className="general-information-form ">
        <div className="gen-form-upper row align-items-center">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="text-center pb-6">
              <h3 className="general-information-form-title font-bold">
                History of Present Illness
              </h3>
            </div>
          </div>
          <FormCloseBtn id={appointmentId} />
        </div>
        <div className="gen-form">
          <div className="history-of-present-illness-content">
            <div className="row align-items-center">
              <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <p>
                  <span className="fs-6 fw-bold">
                    {data?.patient?.title} {data?.patient?.first_name}{" "}
                    {data?.patient?.last_name}
                  </span>{" "}
                  is a{" "}
                  <span className="fs-6 fw-bold">{data?.patient?.age}</span>{" "}
                  Year Old{" "}
                  <span className="fs-6 fw-bold">{data?.patient?.gender}</span>
                </p>
              </div>
              <div className="col-6 col-sm-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                <p className="fs-6">came to the</p>
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCameTo(e.target.value)}
                />
              </div>
              <div className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <p className="fs-6">with a problem of</p>
              </div>
              <div className="col-6 col-sm-8 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProblem(e.target.value)}
                />
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-6 col-sm-4 col-md col-lg col-xl col-xxl">
                <p className="fs-6">Patient stated</p>
              </div>
              <div className="col-6 col-sm-8 col-md col-lg col-xl col-xxl mb-2">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setStated(e.target.value)}
                />
              </div>
              <div className="col-6 col-sm-4 col-md col-lg col-xl col-xxl">
                <p className="fs-6">Patient was done</p>
              </div>
              <div className="col-6 col-sm-8 col-md col-lg col-xl col-xxl mb-2">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setHasDone(e.target.value)}
                />
              </div>
              <div className="col-12 col-sm-4 col-md col-lg col-xl col-xxl">
                <p className="fs-6">Patient current medication</p>
              </div>
              <div className="col-12 col-sm-8 col-md col-lg col-xl col-xxl">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setMedication(e.target.value)}
                />
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-md-2">Other relevant factors are</div>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setOther(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form-para gen-form mt-2">
          <p className="fs-5 fw-bold">Preview:</p>

          <p className="fs-6">
            <strong>{data?.patient?.title}</strong>.{" "}
            <strong>
              {data?.patient?.first_name} {data?.patient?.last_name}
            </strong>{" "}
            is a<strong> {data?.patient?.age}</strong> y.o{" "}
            <strong>{data?.patient?.gender}</strong> came to the
            <strong> {cameTo} </strong>
            with a problem of
            <strong> {problem}</strong>. Patient stated
            <strong> {stated}</strong>. Patient was done
            <strong> {hasDone}</strong>. Patient current medication includes{" "}
            <strong>{medication}</strong>. Other relevant factors are{" "}
            <strong> {other}</strong>.
          </p>
        </div>

        <div className="gen-form">
          <div className="row align-items-center">
            <div className="col-md-4">
              <p className="fs-5 fw-bold">Allergies</p>
            </div>
            <div className="col-md-8">
              <p className="fs-6">{data?.patient?.medicalHistory?.allergies}</p>
            </div>
          </div>
        </div>
        <div className="gen-form">
          <div className="row align-items-center">
            <div className="col-md-4">
              <p className="fs-5 fw-bold">Vaccination</p>
            </div>
            <div className="col-md-8">
              <p className="fs-6">{data.patient.medicalHistory.vactions}</p>
            </div>
          </div>
        </div>

        <div className="gen-form-btn text-center mt-3">
          <button className="btn btn-success" onClick={submitForm}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default HistoryOfPresentIllness;

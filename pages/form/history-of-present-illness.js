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
      <div className="general-information-form relative p-6 flex-auto">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
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
                    <div className="col-md-12">
                      <p>
                        {data?.patient?.title} {data?.patient?.first_name}{" "}
                        {data?.patient?.last_name} is a {data?.patient?.age}{" "}
                        Year Old {data?.patient?.gender}
                      </p>
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-md-5">
                      <div className="row align-items-center">
                        <div className="col-md-4">came to the</div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setCameTo(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="row align-items-center">
                        <div className="col-md-4">with a problem of</div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setProblem(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-center mt-2">
                    <div className="col-md-6">
                      <div className="row align-items-center">
                        <div className="col-md-3">Patient stated</div>
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setStated(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center">
                        <div className="col-md-4">Patient was done</div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setHasDone(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-md-12">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          Patient current medication
                        </div>
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setMedication(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-md-12">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          Other relevant factors are
                        </div>
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setOther(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gen-form-para gen-form"
                style={{ marginTop: "10px" }}
              >
                <h3>Preview:</h3>

                <p>
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
                  <strong> {hasDone}</strong>. Patient current medication
                  includes <strong>{medication}</strong>. Other relevant factors
                  are <strong> {other}</strong>.
                </p>
              </div>

              <div className="gen-form">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h6>Allergies</h6>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h6>Vaccination</h6>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form-btn">
          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4">
              <button className="btn btn-success" onClick={submitForm}>
                Save Changes
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryOfPresentIllness;

import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
import useSWR from "swr";
import { useAuth } from "../../context";
import { useRouter } from "next/router";
import { apiUrl } from "../../config/api";
import Pagination from "../../components/Pagination";
const MedicalHistory = () => {
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
  // console.log(data?.patient?.medicalHistory);
  return (
    <>
      <div className="general-information-form relative p-6 flex-auto container">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Past Medical History
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div className="gen-form">
                <h3 className="font-bold">
                  Past medical history - Please check if anyone in your family
                  has or had any or the following:
                </h3>
                <div className="col-md-9">
                  <p>{data?.patient?.medicalHistory?.past_medical_history}</p>
                </div>
              </div>
              <div className="gen-form">
                <h3 className="font-bold">
                  Past medical history - For Women Only:
                </h3>
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Pelvic Inflammatory Disease</p>
                      </div>
                      <div className="col-md-3">
                        <p>
                          {
                            data?.patient?.medicalHistory
                              ?.pastMedicalHistoryForWomen?.pelvicDisease
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Trouble with Period</p>
                      </div>
                      <div className="col-md-3">
                        <p>
                          {
                            data?.patient?.medicalHistory
                              ?.pastMedicalHistoryForWomen?.periodTrouble
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Complicated Pregnancies</p>
                      </div>
                      <div className="col-md-3">
                        <p>
                          {
                            data?.patient?.medicalHistory
                              ?.pastMedicalHistoryForWomen
                              ?.complicatedPregnancie
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Pregnant</p>
                      </div>
                      <div className="col-md-3">
                        <p>
                          {
                            data?.patient?.medicalHistory
                              ?.pastMedicalHistoryForWomen?.isPregnant
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Endometriosis</p>
                      </div>
                      <div className="col-md-3">
                        <p>
                          {
                            data?.patient?.medicalHistory
                              ?.pastMedicalHistoryForWomen?.endometriosis
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-2">
                        <p>☆</p>
                      </div>
                      <div className="col-md-6">
                        <p className="space-x-4">Any Other</p>
                      </div>
                      <div className="col-md-3">
                        <p>
                          {
                            data?.patient?.medicalHistory
                              ?.pastMedicalHistoryForWomen?.other
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="gen-form">
                <h3 className="font-bold">
                  Surgical History – Please list any surgeries you had, and if
                  known include dates:
                </h3>
                <div className="row justify-content-between align-items-center">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Complain Description</th>
                        <th scope="col">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>cbfgjhgj</td>
                        <td>gfhgfhj</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> */}

              <div className="gen-form">
                <h3 className="font-bold">
                  Diagnostic Test/Measures - within the past year, have you had
                  any of the following (Check all that apply):
                </h3>
                <div className="col-md-9">
                  <p>{data?.patient?.medicalHistory?.diagnostic_tests}</p>
                </div>
              </div>
              <div className="gen-form">
                <h3 className="font-bold">
                  Medications & Allergies – please check or list all medications
                  or allergies:
                </h3>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="space-x-4">Non - Prescription:</h3>
                    </div>
                    <div className="col-md-3">
                      <p>
                        {
                          data?.patient?.medicalHistory
                            ?.non_prescription_medications
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="space-x-4">Prescription:</h3>
                    </div>
                    <div className="col-md-3">
                      <p>
                        {
                          data?.patient?.medicalHistory
                            ?.prescription_medications
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="space-x-4">Allergies:</h3>
                    </div>
                    <div className="col-md-3">
                      <p>{data?.patient?.medicalHistory?.allergies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Pagination id={appointmentId} class5="active" />
      </div>
    </>
  );
};

export default MedicalHistory;

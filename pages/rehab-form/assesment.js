import FormCloseBtn from "../../components/FormCloseBtn";
import { useRouter } from "next/router";
const assesment = () => {
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
                      Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Problems List</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Describe your problems here"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Clinical Investigation</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Describe your problems here"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="gen-form">
                <h3>Medical Diagnosis</h3>
                <div className="row justify-content-between align-items-end mt-3">
                  <div className="col-md-10">
                    <input
                      type="search"
                      className="form-control"
                      id=""
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-2">
                    <div className="prescription-add-btn">
                      <a href="#" className="btn btn-primary prescription-btn">
                        Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col"> Medical Diagnosis List</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iste ratione iusto ex exercitationem et laborum
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                    ></textarea>
                  </div>
                </div>
              </div>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default assesment;

import FormCloseBtn from "../../components/FormCloseBtn";

const chiefcomplains = () => {
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
                      Chief Complaints With Duration
                    </h3>
                  </div>
                </div>
                <FormCloseBtn />
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: " 10px",
                  borderRadius: "3px",
                }}
              >
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Complain Description</th>
                      <th scope="col">Duration</th>
                      {/* <th scope="col">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Back Pain while going to bead and in the morning</td>
                      <td>10 days</td>
                      {/* <td>
                        <i className="ri-delete-bin-fill"></i>
                      </td> */}
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>full body pain</td>
                      <td>2 days</td>
                      {/* <td>
                        <i className="ri-delete-bin-fill"></i>
                      </td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default chiefcomplains;

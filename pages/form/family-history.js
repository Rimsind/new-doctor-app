import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
import useSWR from "swr";
import { useAuth } from "../../context";
import { useRouter } from "next/router";
import { apiUrl } from "../../config/api";
import Pagination from "../../components/Pagination";
const FamilyHistory = () => {
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
                      Family Medical History
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div
                className="rfa-gen-form-data-table"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                  marginTop: "10px",
                }}
              >
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Relation</th>
                      <th scope="col">Age (if living)</th>
                      <th scope="col">Age (if death)</th>
                      <th scope="col">Cause of death</th>
                      <th scope="col">Problems</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.patient?.familyHistory?.map((item, index) => (
                      <tr key={index}>
                        <td>{item.relation}</td>
                        <td>{item.age_if_living}</td>
                        <td>{item.age_if_death}</td>
                        <td>{item.cause_of_death}</td>
                        <td>{item.diseases}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Pagination id={appointmentId} class7="active" />
      </div>
    </>
  );
};

export default FamilyHistory;

// import PasswordUpdate from "../components/PasswordUpdate";
import ProfileInformation from "../components/ProfileInformation";
import ProfilePicture from "../components/ProfilePicture";

import { apiUrl } from "../config/api";
import axios from "axios";
import useSWR from "swr";

import { useAuth } from "../context";

const ProfilSetting = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
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

  if (!data) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }
  return (
    <>
      <h5 className="mb-0 pb-2">Schedule Timing</h5>
      <div className="rounded shadow mt-4">
        <div className="p-4 border-bottom profile-heading">
          <h5 className="mb-0">Personal Information :</h5>
        </div>

        <ProfilePicture doctor={data} />

        <ProfileInformation doctor={data} />
      </div>
    </>
  );
};

export default ProfilSetting;

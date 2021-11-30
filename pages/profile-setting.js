// import PasswordUpdate from "../components/PasswordUpdate";
import ProfileInformation from "../components/ProfileInformation";
import ProfilePicture from "../components/ProfilePicture";
import { useEffect, useState } from "react";
import { apiUrl } from "../config/api";
import axios from "axios";
import useSWR from "swr";
import { parseCookies } from "nookies";

const profilSetting = () => {
  const [token, setToken] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);

  const { data, loading, error } = useSWR(
    `${apiUrl}/doctors/${currentUser?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  useEffect(() => {
    const { token, user } = parseCookies();
    if (token && user) {
      setToken(token);
      const userData = JSON.parse(user);
      setCurrentUser(userData);
    }
  }, []);

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

export default profilSetting;

// import PasswordUpdate from "../components/PasswordUpdate";
import ProfileInformation from "../components/ProfileInformation";
import ProfilePicture from "../components/ProfilePicture";
import { parseCookies } from "nookies";
import useSWR from "swr";
import axios from "axios";
import { useState, useEffect } from "react";
import apiUrl from "../config/api";


const profilSetting = () => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const {data, loading, error} = useSWR(`${apiUrl}/doctors/${currentUser?.profileId}`,
  async(url) => {
    const res = await axios.get(url,
      {
        headers: {
          Authorization : `Bearer ${token}`
        }
      }
      )
      const result = res.data
      return result
  }
  )

  useEffect(() => {
    const {token, user} = parseCookies()
    if(token && user) {
      setToken(token)
      const userData = JSON.parse(user)
      setCurrentUser(userData)
    }
  }, [])
  if(data) console.log(data)

  return (
    <>
      <h5 className="mb-0 pb-2">Schedule Timing</h5>
      <div className="rounded shadow mt-4">
        <div className="p-4 border-bottom profile-heading">
          <h5 className="mb-0">Personal Information :</h5>
        </div>

        <ProfilePicture />

        <ProfileInformation doctor={data} />
      </div>

      {/* <PasswordUpdate /> */}

      {/* <div className="rounded shadow mt-4">
        <div className="p-4 border-bottom profile-heading">
          <h5 className="mb-0 text-danger">Delete Account :</h5>
        </div>

        <div className="p-4 profile-body">
          <h6 className="mb-0 fw-normal">
            Do you want to delete the account? Please press below
            &quot;Delete&quot; button
          </h6>
          <div className="mt-4">
            <button className="btn btn-danger">Delete Account</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default profilSetting;

import Image from "next/image";
import { useState } from "react";
import { uploadImage } from "../utils/uploadImage";
import { useAuth } from "../context/index";
import { apiUrl } from "../config/api";
import axios from "axios";
const ProfilePicture = ({ doctor }) => {
  const { auth } = useAuth();

  const [loading, setLoading] = useState(false);

  const [profileImage, setProfileImage] = useState();

  const uploadProfileImage = async () => {
    setLoading(true);
    const image = await uploadImage(profileImage, auth.token);

    const payload = {
      image,
    };
    const response = await axios.put(
      `${apiUrl}/doctors/${auth.user.profileId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = await response.data;
    alert("Image uploaded succesfully");
    setLoading(false);
    return result;
  };

  return (
    <>
      <div className="p-4 border-bottom profile-body ">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-4">
            <Image
              height="220"
              width="220"
              src={doctor?.image?.url || "/assets/images/profile.png"}
              className="avatar  rounded-pill shadow mx-auto d-block profile-pic"
              alt=""
            />
          </div>

          <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
            <h5 className="">Upload your picture</h5>
            <input
              type="file"
              className="form-control"
              placeholder="Upload your Image"
              name="uploadFile"
              required=""
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
          </div>

          <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
            <input
              type="submit"
              id="submit"
              name="send"
              className="btn btn-primary"
              value={loading ? "loading..." : "upload"}
              disabled={loading}
              onClick={uploadProfileImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePicture;

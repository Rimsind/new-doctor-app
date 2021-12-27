import { useForm } from "react-hook-form";
import { apiUrl, fetcher } from "../config/api";
import axios from "axios";
import { useAuth } from "../context";
import { useState } from "react";
import useSWR from "swr";
const ProfileInformation = ({ doctor }) => {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const { data: specialties } = useSWR(`${apiUrl}/specialties`, fetcher);

  const { register, handleSubmit } = useForm();
  const updateProfile = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        qualification: data.qualification,
        experienceInYrs: data.experienceInYear,
        bio: data.bio,
        skype_id: data.skype_id,
        specialty: {
          id: data.specialty,
        },
      };

      const res = await axios.put(
        `${apiUrl}/doctors/${auth.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;
      setLoading(false);
      alert("Profile Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="p-4 profile-body">
        <form onSubmit={handleSubmit(updateProfile)}>
          <div className="row">
            <div className="col-md-6" {...register("firstName")}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="First Name :"
                  defaultValue={!!doctor.firstName ? doctor.firstName : ""}
                />
              </div>
            </div>

            <div className="col-md-6" {...register("lastName")}>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Last Name "
                  defaultValue={!!doctor.lastName ? doctor.lastName : ""}
                />
              </div>
            </div>

            <div className="col-md-6" {...register("email")}>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Your email :"
                  defaultValue={!!doctor.email ? doctor.email : ""}
                />
              </div>
            </div>

            <div className="col-md-6" {...register("phone")}>
              <div className="mb-3">
                <label className="form-label">Phone no.</label>
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone no. :"
                  defaultValue={!!doctor.phone ? doctor.phone : ""}
                />
              </div>
            </div>
            <div className="col-md-6" {...register("qualification")}>
              <div className="mb-3">
                <label className="form-label">Qualification</label>
                <input
                  name="qualification"
                  type="text"
                  className="form-control"
                  placeholder="MBBS"
                  defaultValue={
                    !!doctor.qualification ? doctor.qualification : ""
                  }
                />
              </div>
            </div>
            <div className="col-md-6" {...register("experienceInYear")}>
              <div className="mb-3">
                <label className="form-label">Experience(in years)</label>
                <input
                  name="experienceInYear"
                  type="number"
                  className="form-control"
                  placeholder="10"
                  defaultValue={
                    !!doctor.experienceInYrs ? doctor.experienceInYrs : ""
                  }
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Specialization</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("specialty")}
                >
                  <option
                    defaultChecked={
                      !!doctor.specialty?.id ? doctor.specialty?.id : ""
                    }
                  >
                    {!!doctor.specialty?.name ? doctor.specialty?.name : ""}
                  </option>
                  {specialties?.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Skype ID</label>
                <input
                  name="skypeId"
                  type="text"
                  className="form-control"
                  {...register("skype_id")}
                  defaultValue={!!doctor.skype_id ? doctor.skype_id : ""}
                />
              </div>
            </div>

            <div className="col-md-12" {...register("bio")}>
              <div className="mb-3">
                <label className="form-label">Your Bio Here</label>
                <textarea
                  name="bio"
                  rows="4"
                  className="form-control"
                  placeholder="Bio "
                  defaultValue={!!doctor.bio ? doctor.bio : ""}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12" style={{ textAlign: "right" }}>
              <input
                type="submit"
                id="submit"
                name="send"
                className="btn btn-primary"
                value={loading ? "Uploading..." : "Save"}
                disabled={loading}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInformation;

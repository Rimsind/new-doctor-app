import { useForm } from "react-hook-form";
const ProfileInformation = ({ doctor }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="p-4 profile-body">
        <form onSubmit={handleSubmit(onSubmit)}>
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

            <div className="col-md-6" {...register("phoneNumber")}>
              <div className="mb-3">
                <label className="form-label">Phone no.</label>
                <input
                  name="phoneNumber"
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
                value="Save changes"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInformation;

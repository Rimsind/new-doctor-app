import { useForm } from "react-hook-form";
const ProfileInformation = () => {
  return (
    <>
      <div className="p-4 profile-body">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="First Name :"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  name="name"
                  id="name2"
                  type="text"
                  className="form-control"
                  placeholder="Last Name :"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Your email :"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Phone no.</label>
                <input
                  name="number"
                  id="number"
                  type="text"
                  className="form-control"
                  placeholder="Phone no. :"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Qualification</label>
                <input
                  name="qualification"
                  id="test"
                  type="text"
                  className="form-control"
                  placeholder="MBBS"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Experience(in years)</label>
                <input
                  name="experience"
                  id="number"
                  type="number"
                  className="form-control"
                  placeholder="MBBS"
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Your Bio Here</label>
                <textarea
                  name="comments"
                  id="comments"
                  rows="4"
                  className="form-control"
                  placeholder="Bio :"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
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

import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import Layout2 from "../components/Layout/Layout2";

const Signup = () => {
  //react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const registerUser = async (payload) => {
    const res = await axios.post(
      "https://manage.riimstechnology.com/auth/local/register",
      payload
    );
    const result = await res.data;
    return result;
  };

  const createUserProfile = async (data, token) => {
    const profilePayload = {
      First_name: data.firstName,
      Last_name: data.lastName,
      email: data.email,
    };
    const res = await axios.post(
      "https://manage.riimstechnology.com/doctors",
      profilePayload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = res.data;
    console.log(result);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    // input validation
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      alert("please fill all data");
      return;
    }

    // register user
    try {
      const payload = {
        username: data.email,
        email: data.email,
        password: data.password,
        role: "Doctor",
      };

      const result = await registerUser(payload);

      if (result.jwt) {
        // create profile
        createUserProfile(data, result.jwt);
        //auto login
        // store token
      }

      // create prodifle
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <section
        className="bg-home d-flex bg-light align-items-center"
        style={{ background: "url('/images/doc-cover2.jpg') center" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-6 col-md-6">
              <div className="card login-page bg-white shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Doctor Sign Up</h4>
                  <div className="selector-login-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="login-doctor">
                          <Link href="/signup">
                            <a>Signup asPatient</a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="login-polyclinic">
                          <Link href="/polyclinic/signup">
                            <a>Signup as Polyclinic</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="login-form mt-4"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            First name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="firstName"
                            required=""
                            {...register("firstName")}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Last name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                            required=""
                            {...register("lastName")}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            required=""
                            {...register("email")}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="password"
                            required=""
                            {...register("password")}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            Register
                          </button>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3 text-center">
                        <h6 className="text-muted">Or</h6>
                      </div>

                      <div className="col-6 mt-3">
                        <div className="d-grid">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-soft-primary"
                          >
                            <i className="uil uil-facebook"></i> Facebook
                          </a>
                        </div>
                      </div>

                      <div className="col-6 mt-3">
                        <div className="d-grid">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-soft-primary"
                          >
                            <i className="uil uil-google"></i> Google
                          </a>
                        </div>
                      </div>

                      <div className="mx-auto" style={{ textAlign: "center" }}>
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Already have an account ?
                          </small>
                          <Link href="/doctor/login">
                            <a className="text-dark fw-bold">Sign in</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

Signup.getLayout = (Signup) => <Layout2>{Signup}</Layout2>;

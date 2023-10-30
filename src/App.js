import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import CodeIcon from "@mui/icons-material/Code";

function App() {
  return (
    <>
      {/* Nav Start */}
      <nav className="navbar navbar-expand-lg bg-black fs-5 p-3">
        <div className="container">
          <a className="navbar-brand fs-1 text-white" href="#">
            Ammad Baig
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end  "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-white  active" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white " href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white " href="#service">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white " href="#work">
                  Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white " href="#blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white " href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Nav End */}

      {/* Intro Start */}
      <div className="intro bg-image">
        <div className="overlay-itro "></div>
        <div className="intro-content position-relative d-flex flex-column align-items-center justify-content-center ">
          <div className="container ">
            <h1 className="mb-4 fw-bold display-4 ">I am Ammad Baig</h1>
            <p>
              <span>Web Developer,Frontend Developer</span>
            </p>
          </div>
        </div>
      </div>
      {/* Intro End */}

      {/* About Start */}
      <div className="about text-black pt-5 p-2">
        <div className="container shadow p-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img h-100"></div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="px-4 pt-3">
                          <p>
                            <span className="fw-bold">Name: </span>{" "}
                            <span>Ammad Baig</span>
                          </p>
                          <p>
                            <span className="fw-bold">Profile: </span>{" "}
                            <span>MERN Stack To Be...</span>
                          </p>
                          <p>
                            <span className="fw-bold">Email: </span>{" "}
                            <a
                              className="link-secondary "
                              href="mailto:ammadbaig50@gmail.com"
                            >
                              Ammad Baig
                            </a>
                          </p>
                          <p>
                            <span className="fw-bold">Phone: </span>{" "}
                            <a
                              className="link-secondary "
                              href="tel:03332183652"
                            >
                              0333-2183652
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="fw-bold p-3">Skills</h3>
                      <span>
                        HTML5 <span className="fw-bold">95%</span>
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>
                        CSS3 <span className="fw-bold">90%</span>
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>
                        JAVASCRIPT <span className="fw-bold">80%</span>
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>
                        React JS <span className="fw-bold">65%</span>
                      </span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div>
                        <h1 className="fw-bold ">About me</h1>
                        <p className="border border-4 border-primary rounded-5 w-25 "></p>
                      </div>
                      <p className="fs-5">
                        I am <span className="fw-bold">Ammad Baig</span> and
                        want to work as a Web Designer and Developer as a
                        freelancer. I’m 24 years old.
                      </p>
                      <p className="fs-5">
                        I am a Student of{" "}
                        <span className="fw-bold">
                          {" "}
                          Web & Hybrid Application Development{" "}
                        </span>
                        . Eager to learn about a lot more future technologies.
                      </p>
                      <p className="fs-5">
                        Anytime is a good time to contact me. I'll make sure to
                        be helpful to you in any kind of website development.
                      </p>
                      <p className="fs-5">
                        You can connect with me via my Email Address or my Phone
                        Number or any other Social Network .
                      </p>
                      <p className="fs-5">Thanks...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}

      <div className="services text-black container">
        <div>
          <h1 className="fw-bold text-center  pt-4">Services</h1>
          <p className="border border-4 border-primary rounded-5 m-auto w-25  "></p>
        </div>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <div className="text-center p-5 rounded-4 shadow-lg">
                <p>
                  <CodeIcon fontSize="large" />
                </p>
                <h3>WEB DEVELOPMENT</h3>
                <p>Set up any Website with great user experience.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center p-5 rounded-4 shadow-lg">
                <p>
                  <StayCurrentPortraitIcon fontSize="large" />
                </p>
                <h3>RESPONSIVE DESIGN</h3>
                <p>My layouts will work on any device, big or small.</p>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>

      {/* Service End */}
    </>
  );
}

export default App;

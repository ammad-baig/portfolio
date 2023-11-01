import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import CodeIcon from "@mui/icons-material/Code";
import icenscoop from "./img/ice-n-scoop.png";
import bloodbank from "./img/blood-bank.png";
import healthandfitness from "./img/health-and-fitness.png";
import quizapp from "./img/quiz-app.png";
import WriteInput from "./Component/WriteInput/WriteInput.js";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  return (
    <>
      {/* Nav Start */}
      <nav className="navbar navbar-expand-lg bg-black fixed-top fs-5 p-3">
        <div className="container">
          <a className="navbar-brand fs-2 text-white" href="/">
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
        <div className="overlay-intro "></div>
        <div className="intro-content position-relative top-50 ">
          <div className="container ">
            <h1 className="mb-4 fw-bold display-3 ">I am Ammad Baig</h1>
            <h4 className="">Web Developer,Frontend Developer</h4>
          </div>
        </div>
      </div>
      {/* Intro End */}

      {/* About Start */}
      <div id="about" className="about text-black pt-5 p-2">
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
                      <p>
                        HTML5 <span className="fw-bold">95%</span>
                      </p>
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
                      <p className="pt-2">
                        CSS3 <span className="fw-bold">90%</span>
                      </p>
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
                      <p className="pt-2">
                        JAVASCRIPT <span className="fw-bold">80%</span>
                      </p>
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
                      <p className="pt-2">
                        React JS <span className="fw-bold">65%</span>
                      </p>
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
      <div id="service" className="services text-black container">
        <div>
          <h1 className="fw-bold text-center  pt-4">Services</h1>
          <p className="border border-4 border-primary rounded-5 m-auto w-25  "></p>
        </div>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <div className="service-box my-2">
                <div className="text-center p-5 rounded-4 shadow-lg">
                  <p p className="p-3">
                    <span className="icons border border-5 border-primary rounded-circle p-3  ">
                      <CodeIcon fontSize="large" />
                    </span>
                  </p>
                  <h3>WEB DEVELOPMENT</h3>
                  <p>Set up any Website with great user experience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service-box my-2">
                <div className="text-center p-5 rounded-4 shadow-lg">
                  <p className="p-3">
                    <span className="icons border border-5 border-primary rounded-circle p-3">
                      <StayCurrentPortraitIcon fontSize="large" />
                    </span>
                  </p>
                  <h3>RESPONSIVE DESIGN</h3>
                  <p>My layouts will work on any device, big or small.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Portfolio Start */}
      <div id="work" className="portfolio text-center text-black container">
        <div>
          <h1 className="fw-bold pt-4">Portfolio</h1>
          <p className="border border-4 border-primary rounded-5 m-auto w-25  "></p>
          <h5 className="p-3">Projects Done by Myself</h5>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="portfolio-box my-2">
              <div className="text-center border-bottom border-black border-2 shadow-lg">
                <img
                  className="w-100 portfolio-img"
                  src={icenscoop}
                  alt="Ice N Scoop"
                />
                <div className="p-3">
                  <a
                    className="text-center portfolio-link fs-4 fw-bold"
                    href="https://www.icenscoop.shop/"
                    target="__blank"
                  >
                    Ice n Scoop
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="portfolio-box my-2">
              <div className="text-center border-bottom border-black border-2 shadow-lg">
                <img
                  className="w-100 portfolio-img"
                  src={healthandfitness}
                  alt="Health And Fitness"
                />
                <div className="p-3">
                  <a
                    className="text-center portfolio-link fs-4 fw-bold"
                    href="https://mine-to-do-list.web.app/"
                    target="__blank"
                  >
                    Health And Fitness
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="portfolio-box my-2">
              <div className="text-center border-bottom border-black border-2 shadow-lg">
                <img
                  className="w-100 portfolio-img"
                  src={quizapp}
                  alt="Quiz App"
                />
                <div className="p-3">
                  <a
                    className="text-center portfolio-link fs-4 fw-bold"
                    href="https://table-of-students.web.app/"
                    target="__blank"
                  >
                    Quiz App
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="portfolio-box my-2">
              <div className="text-center border-bottom border-black border-2 shadow-lg">
                <img
                  className="w-100 portfolio-img"
                  src={bloodbank}
                  alt="Blood Bank"
                />
                <div className="p-3">
                  <a
                    className="text-center portfolio-link fs-4 fw-bold"
                    href="https://ammad-hackathon.web.app/"
                    target="__blank"
                  >
                    Blood Bank Application
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio End */}

      {/* Contact Start */}
      <div id="contact" className="about text-black pt-5 p-2">
        <div className="container shadow p-5">
          <div className="row">
            <div className="col-md-6">
              <h2 className="fw-bold">Send Message Us</h2>
              <p className="border border-4 border-primary rounded-5 w-25  "></p>

              <div className="input-box py-3">
                <WriteInput label="Your Name" />
              </div>
              <div className="input-box py-3">
                <WriteInput label="Your Email" />
              </div>
              <div className="input-box py-3">
                <WriteInput label="Subject" />
              </div>
              <div className="input-box py-3">
                <WriteInput label="Message" />
              </div>
              <div className="py-3">
                <button className="btn btn-primary px-3 ">Submit</button>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Get in Touch</h2>
              <p className="border border-4 border-primary rounded-5 w-25  "></p>

              <p className="fs-4">Feel free to reach out...</p>

              <div className="p-3">
                <a
                  className="text-center portfolio-link fs-4 fw-bold"
                  href="tel: 03332183652"
                >
                  <CallIcon className="text-primary" />{" "}
                  <span className="px-3"> 03332183652</span>
                </a>
              </div>
              <div className="p-3">
                <a
                  className="text-center portfolio-link fs-4 fw-bold"
                  href="mailto:ammadbaig50@gmail.com"
                >
                  <EmailIcon className="text-primary" />{" "}
                  <span className="px-3"> ammadbaig50@gmail.com</span>
                </a>
              </div>
              <div className="p-3 d-flex flex-wrap">
                <p className="px-3 m-1 py-3 border border-black rounded-circle border-2">
                  <a
                    href="https://www.facebook.com/ammad.baig99"
                    target="__blank"
                  >
                    <FacebookIcon />
                  </a>
                </p>
                <p className="px-3 m-1 py-3 border border-black rounded-circle border-2">
                  <a href="https://twitter.com/ammadbaig2" target="__blank">
                    <TwitterIcon />
                  </a>
                </p>
                <p className="px-3 m-1 py-3 border border-black rounded-circle border-2">
                  <a
                    href="https://www.instagram.com/ammad.baig/"
                    target="__blank"
                  >
                    <InstagramIcon />
                  </a>
                </p>
                <p className="px-3 m-1 py-3 border border-black rounded-circle border-2">
                  <a
                    href="https://www.linkedin.com/in/ammad-baig/"
                    target="__blank"
                  >
                    <LinkedInIcon />
                  </a>
                </p>
                <p className="px-3 m-1 py-3 border border-black rounded-circle border-2">
                  <a href="https://github.com/ammad-baig" target="__blank">
                    <GitHubIcon />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      {/* Footer Start */}
      <div className="bg-primary">
        <p className="text-center py-3 text-white">
          © Copyright PORTFOLIO. All Rights Reserved
        </p>
      </div>
      {/* Footer End */}
    </>
  );
}

export default App;

import { useState } from "react";
import "./contact.scss";
import Button from "react-bootstrap/Button";

export default function Contact() {
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form>
          <div className="contact">
            <div className="contact-container">
              <div className="d-flex justify-content-center flex-wrap">
                <div className="m-2">
                  <a
                    href="mailto:shivaninarang20@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline-danger"
                      title="shivaninarang20@gmail.com"
                    >
                      <i className="fas fa-envelope-square"></i> Email Me
                    </Button>
                  </a>
                </div>
                <div className="m-2">
                  <a
                    href="https://www.linkedin.com/in/shivani-narang-a86298141/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline-primary"
                      title="Connect with me on LinkenIn"
                    >
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </Button>
                  </a>
                </div>

                <div className="m-2">
                  <a
                    href="https://github.com/Shivani-exe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline-dark"
                      className="border"
                      title="My other projects"
                    >
                      <i className="fab fa-github-square"></i> GitHub
                    </Button>
                  </a>
                </div>

                <div className="m-2">
                  <a
                    href="https://leetcode.com/shivaninarang20/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline-info">
                      <i className="fas fa-lightbulb"></i> LeetCode
                    </Button>
                  </a>
                </div>
                <div className="m-2">
                  <a
                    href="https://drive.google.com/file/d/1m3LNUN4UrEuyAdv9ykmVYlOGvY0amX_q/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline-info">
                      <i className="fas fa-lightbulb"></i> Resume
                    </Button>
                  </a>
                </div>

                <div className="m-2">
                  <a
                    href="https://shivani-narang-portfolio.netlify.app/blogs.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline-info">
                      <i className="fas fa-lightbulb"></i> Read My Blogs
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

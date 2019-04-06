import React from "react";
import "./styles.scss";
import Navigation from "components/Navigation";
import Sidebar from "components/Side";
const Home = () => {
  return (
    <div className="home-container">
      <div className="column_left">
        <h2>`// ABOUT ME` </h2>
        <p>
          Nealy more than 5 years professional experience web development, I'm a
          hardworking and dedicated person, love to explore, always have a big
          hunger for new knowledge. I enjoy building applications with internet
          skills and trying to use modern web stack for efficient web
          development in performance and time recently I am studying React Hook,
          GraphQL, Primsa and Typescript and want to grow Full Stack career.
        </p>
        <div className="experiences">
          <h2>'// experiences`</h2>
          <ul>
            <li>
              <div className="year">
                2013 <br /> 2014
              </div>
              <div className="description">
                <h3>Fanshawe Colleage, London, ON</h3>
                <p>
                  Diploma in Internet Application and Web Development <br />
                  Graduated with President's Honour Roll (4.16 GPA out of 4.2){" "}
                  <br />
                  Developed Skills : completed 5 projects in PHP, JQUERY and
                  Lamp and mastered new internet technologies ; hybrid mobile
                  application, Responsive UI, HTML5/CSS3, SEO and IIS etc.
                </p>
              </div>
            </li>
            <li>
              <div className="year">
                2004 <br /> 2006
              </div>
              <div className="description">
                <h3>Fanshawe Colleage, London, ON</h3>
                <p>
                  Diploma in Internet Application and Web Development <br />
                  Graduated with President's Honour Roll (4.16 GPA out of 4.2){" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="education">
          <h2>`// Education`</h2>
          <div>
            <ul>
              <li>
                <div className="year">
                  2013 <br /> 2014
                </div>
                <div className="description">
                  <h3>Fanshawe Colleage, London, ON</h3>
                  <p>
                    Diploma in Internet Application and Web Development <br />
                    Graduated with President's Honour Roll (4.16 GPA out of 4.2)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="column_right">
        <Navigation />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;

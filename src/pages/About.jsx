import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHunter</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is created by <strong>TEAM VIVANT</strong>.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:&nbsp;&nbsp;
        <a
          className="text-white"
          href="https://www.linkedin.com/in/vivek-kumar-0b7208221/"
        >
          Vivek Kumar
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          className="text-white"
          href="https://www.linkedin.com/in/vaibhavpant/"
        >
          Vaibhav Pant
        </a>
      </p>
    </div>
  );
}

export default About;

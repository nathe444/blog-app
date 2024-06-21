import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div>
      <header class="about-header">
        <h1>NatheWorks</h1>
      </header>
      <section class="about-section">
        <div class="image-container">
          <img src="/assets/company.avif" alt="Company Image" />
        </div>
        <div class="content">
          <h2>My Story</h2>
          <p>
            Growing up in a small town in Ethiopia, I was always fascinated by
            the potential of technology to change lives. Despite limited
            resources, I taught myself programming and developed a passion for
            creating solutions that could make a difference. After completing my
            education, I embarked on a journey to bring innovative tech
            solutions to underserved communities. Through years of dedication, I
            have worked on various projects, from developing educational apps to
            setting up community tech hubs. My story is one of resilience,
            continuous learning, and a deep-seated desire to make a positive
            impact through technology.
          </p>
          <h2>My Mission</h2>
          <p>
            My mission is to bridge the digital divide and empower communities
            through accessible technology. I strive to create and implement tech
            solutions that address real-world problems, enhance education, and
            improve quality of life. By collaborating with local and
            international organizations, I aim to provide the necessary tools
            and knowledge to those who need it most. Whether it’s through coding
            workshops for young students or building platforms for local
            businesses, my goal is to foster an environment where technology
            serves as a catalyst for growth and development. culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <h2>My Vision</h2>
          <p>
            I envision a world where technology is an equalizer, providing
            everyone with the opportunity to thrive. In the next decade, I see a
            significant reduction in the digital divide, with more communities
            having access to the internet, digital literacy programs, and
            advanced technological tools. My vision includes creating a
            sustainable model of tech education and entrepreneurship in
            developing regions, ensuring that the next generation is equipped
            with the skills and resources to innovate and lead. By leveraging
            technology, I believe we can solve some of the most pressing
            challenges and create a more inclusive and equitable society.
          </p>
        </div>
      </section>
      <footer class="footer">
        <p>© 2024 NatheWorks. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;

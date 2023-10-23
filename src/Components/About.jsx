/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <div><p>I'm a <span>BSCS</span> student at <span><a href="https://nust.edu.pk/" rel="noreferrer" target="_blank">National University of Sciences &amp; Technology, Islamabad</a></span>, currently on an exciting journey of exploration and growth. 🌱💻🔍</p><p>My passion lies in the realm of <span>coding</span> and <span>development</span>, where I find endless joy in turning complex problems into elegant solutions. 💡✨💪</p><p>My programming muscles are well-toned, particularly in languages like <span>Python, C++, and Java</span>. Armed with these skills, I'm always ready to tackle challenges head-on! 💥👊</p><p>🌐 When it comes to <span>Web Development</span>, I'm well-versed in utilizing powerful frameworks and libraries like <span>React JS, Next Js, and Express Js</span>. Crafting beautiful and interactive web experiences is my specialty! 🖥️💼🎨</p></div>
      </div>
    </section>
  );
};

export default About;

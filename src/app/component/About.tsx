import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div data-aos="zoom-in" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={require("/public/pic-3.jpg")}
              width={300}
              height={500}
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              I'm a code artisan passionate about building clean, minimal, and deploy-ready web experiences. I tinker with Next.js, craft UIs with Tailwind CSS, and believe in ethical debugging with a love for clean, typesafe code. Whether it's designing pixel-perfect components from Figma flows, or writing semantic markup with dark mode in mind, I thrive in fast-paced, cloud-native sprints.
            </p>
            <p className="mb-5 leading-relaxed">
              I live for the hustle, push tab-space harmony, and treat each endpoint like a work of art.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
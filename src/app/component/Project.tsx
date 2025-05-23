import Link from "next/link";
import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              My Projects
            </h1>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("/public/Slide1.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Mille Stone Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Burger Website
                  </h1>
                  <p className="leading-relaxed">
                    &quot;Juicy burgers, handcrafted daily with organic flair — flavor-packed, trendy bites for every craving.&quot;
                  </p>
                  <Link target="_blank" href="https://burger-website-inky.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("/public/Slide2.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Mille Stone Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Women Cloth E-Commerce Website
                  </h1>
                  <p className="leading-relaxed">
                    &quot;Trendy, cozy, and bold styles for modern women—chic, effortless, and unapologetically unique.&quot;
                  </p>
                  <Link target="_blank" href="https://womencloth-store.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("/public/Slide3.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Mille Stone Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Car Showroom Website
                  </h1>
                  <p className="leading-relaxed">
                    &quot;Sleek rides, vintage vibes, turbo flair — where performance meets personality in every drive.&quot;
                  </p>
                  <Link target="_blank" href="https://class-6-eight.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

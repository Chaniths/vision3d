"use client"
import React from 'react'

export default function Contact() {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("furniturShop/contact-Img.svg")',
        }}
      >
        <div className="flex flex-col items-center gap-6 m-5">
          <div className="backdrop-blur-[20px] bg-gray-400 bg-opacity-70 text-white rounded-xl p-10 shadow-2xl max-w-3xl w-full text-center">
            <h3 className="text-2xl font-bold mb-3">About This Page</h3>
            <p className="text-base leading-relaxed">
              At Vision 3D, we envision a world where architectural design is accessible to all, regardless of
              technical expertise. Founded in 2025, our mission is to democratize design by providing architects
              and designers with intuitive tools that eliminate the complexities of traditional software.
            </p>
          </div>


          <div className="backdrop-blur-lg bg-gray-400 bg-opacity-70 text-white rounded-xl p-10 shadow-2xl max-w-3xl w-full text-center">
            <h3 className="text-2xl font-bold mb-3">Our Story</h3>
            <p className="text-base leading-relaxed">
              Recognizing the challenges many face with intricate design platforms,
              we, set out to create a solution that bridges the gap between creativity and technology.
              What began as a passion project has evolved into a comprehensive platform that empowers
              users to bring their visions to life effortlessly.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-gray-400 bg-opacity-70 text-white rounded-xl p-10 shadow-2xl max-w-3xl w-full text-center">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-base leading-relaxed">
              We are committed to simplifying the design process, enabling professionals and enthusiasts
              alike to focus on what they do best—creating inspiring spaces. By prioritizing user-friendly
              interfaces and innovative features, we strive to make architectural design both accessible
              and enjoyable.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-gray-400 bg-opacity-70 text-white rounded-xl p-10 shadow-2xl max-w-3xl w-full text-center">
            <h3 className="text-2xl font-bold mb-3">Our Values</h3>
            <p className="text-base leading-relaxed">
              Innovation: Continuously pushing the boundaries to offer cutting-edge solutions.<br /><br />

              Accessibility: Ensuring our tools are easy to use for individuals at all skill levels.<br /><br />

              Community: Building a supportive network where ideas and knowledge are freely exchanged.<br /><br />

              Sustainability: Promoting eco-friendly practices within the design community.<br /><br />
            </p>
          </div>


          <div className="backdrop-blur-lg bg-gray-400 bg-opacity-70 text-white rounded-xl p-10 shadow-2xl max-w-3xl w-full text-center">
            <h3 className="text-2xl font-bold mb-3">Join Our Journey</h3>
            <p className="text-base leading-relaxed">
              As we continue to grow and evolve, we invite you to be part of our journey.
              Whether you're an experienced architect or just starting out, Vision-3D is here
              to support and inspire your creative endeavors.
            </p>
          </div>



          {/* Add more manually if needed */}
        </div>
      </div>
    </>
  )
}


import React from "react";

const temp = () => {
  return (
    <>
      <div className="bg-cloud-bg bg-cover">
        <section className="py-12 px-4 text-center ">
          <div className="container mx-auto">
            <h1 className="text-4xl text-white font-bold leading-tight mb-4">
              {tabName}
            </h1>
            <p className="text-white mb-8">
              Get access to our world-className {tabName} and take your business
              to the next level.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto my-[150px] flex flex-wrap">
            <div className="ml-[700px] mr-7 text-left font-serif">
              <h2 className="text-2xl font-bold leading-tight mb-4 text-white">
                About Us
              </h2>
              <p className="text-white mb-4">
                At IT Consulting Company, we have years of experience providing
                world-className cloud services to businesses of all sizes. Our
                team of experts is dedicated to helping you take full advantage
                of the cloud, so you can increase productivity, lower costs, and
                scale your business to new heights.
              </p>
              <p className="text-white mb-4">
                Contact us today to learn more about our {tabName} and how we
                can help your business succeed.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 mt-12 rounded-full"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>

      <hr />

      <section className="py-12 px-4">
        <div className="container mx flex ">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-md shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Article 1</h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet. Sed totam magni est enim quia aut
                  molestias suscipit eos inventore tempore in delectus
                  reiciendis
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-md shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Article 2</h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet. Sed totam magni est enim quia aut
                  molestias suscipit eos inventore tempore in delectus
                  reiciendis
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-md shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Article 3</h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet. Sed totam magni est enim quia aut
                  molestias suscipit eos inventore tempore in delectus
                  reiciendis
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-800 text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold leading-tight mb-4">Contact Us</h2>
          <p className="mb-8">
            Ready to take your business to the cloud? Contact us today to learn
            more about our cloud services and how we can help your business
            succeed.
          </p>
          <form action="#" method="POST" className="mb-4">
            <div className="flex flex-wrap -mx-4 mb-4">
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <label
                  className="block text-gray-400 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  id="name"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label
                  className="block text-gray-400 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  id="email"
                  type="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mb-4">
              <div className="w-full px-4">
                <label className="block">Message</label>
                <textarea
                  className="form-textarea w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-6 px-4 bg-gray-900 text-gray-400">
        <div className="container mx-auto flex justify-between">
          <p className="text-sm">
            &copy; 2023 IT Consulting. All rights reserved.
          </p>
          <p className="text-sm">Designed by Your Name</p>
        </div>
      </footer>
    </>
  );
};

export default temp;

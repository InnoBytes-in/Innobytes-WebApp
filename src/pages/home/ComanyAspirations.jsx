import React from "react";
import aspirations from "../../assets/company-aspirations.jpeg";

const ComanyAspirations = () => {
  return (
    <div
      className="flex h-auto w-full mt-40 bg-cyan-700"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="500"
    >
      <div className="w-1/2 ml-40 mr-16 my-16 font-serif">
        <h1
          className="text-5xl font-medium pb-5 border-b-4 border-rose-500"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          Informative blog about some aspiration or maybe company's recent
          success
        </h1>
        <p
          className="text-lg pt-10"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          labore. Voluptatibus illo sint quasi mollitia similique non tenetur
          quisquam debitis. Commodi, ea. Officia minus quae corporis pariatur
          repudiandae atque voluptas, distinctio eveniet a modi nobis rerum aut
          repellendus earum ipsum consequuntur sed dolor quo inventore! Nisi
          distinctio quod tempore doloribus.
        </p>
        <div
          className="flex justify-start py-5"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <button className="text-lg  border-2 border-cyan-700 text-rose-500 p-1 underline underline-offset-4 transition duration-500 ease-in-out hover:no-underline hover:bg-rose-500 hover:text-white hover:border-rose-500">
            Read more
          </button>
        </div>
      </div>
      <div
        className="w-96 h-[330px] my-16 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <img
          src={aspirations}
          alt=""
          className="object-cover h-full transition duration-500 ease-in-out hover:scale-125"
        />
      </div>
    </div>
  );
};

export default ComanyAspirations;

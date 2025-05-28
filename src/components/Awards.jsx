import { FaAward } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img01 from "../assets/awards/Team.jpg";
import img02 from "../assets/awards/Offer.jpg";
import img03 from "../assets/awards/Team02.jpg";

const images = [img01, img02, img03];

export default function HonorsAndAwards() {
  return (
    <section
      className="py-12 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900"
      id="honors-awards"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white flex items-center justify-center gap-3">
        <FaAward className="text-yellow-500" /> Honors & Awards
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side - Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            First Runner-up - IEEE INSL Sabaragamuwa Province Competition
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Issued by IEEE Innovation Nation Sri Lanka · Jan 2024
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            As part of <strong>Team DreamWeavers</strong>, I was honored to
            receive the First Runner-up award at the Idea Stage of the IEEE
            Innovation Nation Sri Lanka 2024 competition for the Sabaragamuwa
            Province.
            <br />
            <br />
            Our project focused on delivering an innovative and socially
            impactful tech solution, evaluated on creativity, feasibility, and
            community benefit.
            <br />
            <br />
            This experience enhanced my skills in ideation, team collaboration,
            and pitching under competitive conditions, and reaffirmed my passion
            for building technology that solves real-world problems.
          </p>
        </div>

        {/* Right Side - Slider */}
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={20}
            className="rounded-xl shadow-lg"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Award ${idx + 1}`}
                  className="w-full h-[450px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

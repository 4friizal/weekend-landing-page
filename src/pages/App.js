import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

import React from "react";
import astro from "../assets/atro.png";
import PathTop from "../assets/Path 4.png";
import PathBottom from "../assets/Path 5.png";
import Path3 from "../assets/Path 3.png";
import Aos from "aos";

import Header from "../components/Header";
import Card from "../components/Card";
import CardTips from "../components/CardTips";
import ArticCard from "../components/ArticCard";

function SampleNextArrow(props) {
  const { currentSlide, onClick } = props;
  return (
    <div
      className={
        currentSlide === 4
          ? "absolute w-8 h-8 top-14 -right-14 bg-white/40 text-[#0B24FB]/50 rounded-full flex justify-center items-center"
          : "absolute w-8 h-8 top-14 -right-14 bg-white rounded-full flex justify-center items-center"
      }
      onClick={onClick}
    >
      {currentSlide === 4 ? (
        <FiArrowRight size="18px" />
      ) : (
        <FiArrowRight color="#0B24FB" size="18px" />
      )}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { currentSlide, onClick } = props;
  return (
    <div
      className={
        currentSlide === 0
          ? "absolute w-8 h-8 top-14 -left-14 bg-white/40 text-[#0B24FB]/50 rounded-full flex justify-center items-center"
          : "absolute w-8 h-8 top-14 -left-14 bg-white rounded-full flex justify-center items-center"
      }
      onClick={onClick}
    >
      {currentSlide === 0 ? (
        <FiArrowLeft size="18px" />
      ) : (
        <FiArrowLeft color="#0B24FB" size="18px" />
      )}
    </div>
  );
}

export default function App() {
  const [testimonials, SetTestimonials] = useState([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
    {
      userId: 1,
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
      userId: 1,
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    },
    {
      userId: 1,
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    },
  ]);
  const [tips, setTips] = useState([
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97",
    },
  ]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetchDataTestimonial();
    // fetchDataTips();
    Aos.init({ duration: 2000 });
  }, []);

  // fetch data Testimonial
  // const fetchDataTestimonial = async () => {
  //   await axios
  //     .get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
  //     .then((response) => {
  //       const results = response.data;
  //       SetTestimonials(results);
  //     })
  //     .catch((error) => {
  //       alert(error, toString());
  //     });
  // };

  // fect data Tips & help
  // const fetchDataTips = async () => {
  //   await axios
  //     .get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
  //     .then((response) => {
  //       const results = response.data;
  //       setTips(results);
  //     })
  //     .catch((error) => {
  //       alert(error, toString());
  //     });
  // };

  // slick slider
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    // centerMode: true,
    variableWidth: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#EEBECE] font-WorkSans">
        <Header />
        {/* hero section */}
        <div className="bg-cover bg-center lg:min-h-[102vh] bg-[url('../assets/Background.png')] mb-36">
          <section className="lg:max-w-7xl xl:mx-auto">
            <div className=" text-center text-white pt-16">
              <h1 className="font-extrabold text-[52px] leading-[51px] lg:text-[62px]">
                WEEKEND FROM HOME
              </h1>
              <h5 className="pt-5 text-base font-medium leading-4 italic lg:text-xl">
                Stay active with a little workout.
              </h5>
            </div>
            <div className="flex justify-center items-center flex-col relative">
              <img
                src={astro}
                alt="astro"
                className="w-[184px] mx-auto pt-16 p-"
              />
              <button className="absolute bottom-10 font-WorkSans text-base font-normal text-black bg-white py-5 px-[84px] rounded-[29px] shadow-lg shadow-[#F983AB]/50">
                Let’s Go
              </button>
            </div>
          </section>
        </div>

        {/*AboutSection */}
        <div>
          <div className="relative" data-aos="fade-left">
            <img src={PathTop} alt="path" className="absolute right-0" />
            <img
              src={astro}
              alt="path"
              className="absolute right-8 top-0 w-24 -rotate-90"
            />
          </div>
          <div
            className="text-black px-8 text-right md:px-36 lg:px-96 lg:max-w-7xl xl:mx-auto"
            data-aos="zoom-in"
          >
            <p className="pt-56 text-base leading-6 font-medium md:text-lg">
              <span className="font-bold text-[#0B24FB] lg:text-right">
                Deffinition;{" "}
              </span>
              a practice or exercise to test or improve one's fitness for
              athletic competition, ability, or performance to exhaust
              (something, such as a mine) by working to devise, arrange, or
              achieve by resolving difficulties. Merriam-Webster.com Dictionary.
            </p>
            <p className="text-white text-base italic font-semibold pt-5 pb-[38px] md:text-lg">
              -weekend team
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div>
          <div className="md:px-20 lg:pt-20 ">
            <div className="w-[89px] h-[89px] bg-[#0B24FB] rounded-full ml-14 md:ml-8 md:w-28 md:h-28 lg:w-[89px] lg:h-[89px]"></div>
            <h4
              className="text-[32px] leading-9 text-white font-extrabold ml-8 -mt-5 pb-[75px] md:text-5xl md:ml-0 lg:text-center lg:-mt-14"
              data-aos="fade-up"
            >
              Testimonial
            </h4>
          </div>
          <div
            className="pr-0 md:mx-20 lg:w-[621px] lg:mx-auto"
            data-aos="zoom-out"
          >
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  by={testimonial.by}
                  testi={testimonial.title}
                />
              ))}
            </Slider>
          </div>
        </div>

        {/* POV  */}
        <div className="bg-black">
          <div className="lg:max-w-7xl xl:mx-auto">
            <div className="-mt-24 text-white px-8 md:px-20">
              <div className="pt-24">
                <ArticCard
                  title="POV"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                />
              </div>
              {/* resource */}
              <div>
                <ArticCard
                  title="Resource"
                  body="These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best"
                />
              </div>
              {/* Help & Tips */}
              <div className="bg-black">
                <ArticCard title="Help & Tips" />
                <div className="lg:flex lg:justify-center lg:relative">
                  <img
                    src={Path3}
                    alt="path"
                    className="hidden lg:inline-block absolute -top-16 -right-10"
                  />
                  {tips.map((tips) => (
                    <CardTips key={tips.id} img={tips.url} title={tips.title} />
                  ))}
                </div>
              </div>
              {/* You`re all set */}
              <div>
                <ArticCard
                  title="You’re all set."
                  body="The wise man therefore always holds in these matters to this
              principle of selection."
                />
              </div>
            </div>
          </div>
          <div className="pt-16" data-aos="fade-right">
            <div className="relative">
              <img src={PathBottom} alt="path" className="-px-8" />
              <img
                src={astro}
                alt="path"
                className="absolute w-32 -rotate-180 -top-9 left-8"
              />
            </div>
          </div>
        </div>

        {/* footer */}
        <footer className="bg-[#0B24FB] text-white font-WorkSans px-6 md:px-10 lg:px-52">
          <div className="flex justify-between items-center lg:max-w-7xl xl:mx-auto">
            <p className="py-7 font-bold text-xs md:py-9 lg:py-6 md:text-base">
              wknd@<span className="font-normal ">2020</span>
            </p>
            <div className="border-white border-2 rounded-full">
              <p className="font-light px-[10px] py-[2px] md:text-lg">
                alpha version 0.1
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

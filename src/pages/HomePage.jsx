import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CTAButton from "../components/core/Home/Button";
import CodeBlocks from "../components/core/Home/CodeBlocks";
import backgroundImg1 from "../assets/Images/random bg img/coding bg1.jpg";
import backgroundImg2 from "../assets/Images/random bg img/coding bg2.jpg";
import backgroundImg3 from "../assets/Images/random bg img/coding bg3.jpg";
import backgroundImg4 from "../assets/Images/random bg img/coding bg4.jpg";
import backgroundImg5 from "../assets/Images/random bg img/coding bg5.jpg";
import backgroundImg6 from "../assets/Images/random bg img/coding bg6.jpeg";
import backgroundImg7 from "../assets/Images/random bg img/coding bg7.jpg";
import backgroundImg8 from "../assets/Images/random bg img/coding bg8.jpeg";
import backgroundImg9 from "../assets/Images/random bg img/coding bg9.jpg";
import backgroundImg10 from "../assets/Images/random bg img/coding bg10.jpg";
import backgroundImg11 from "../assets/Images/random bg img/coding bg11.jpg";

import { FaArrowRight } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "./../components/common/motionFrameVarients";
import HighlightText from "../components/core/Home/HighlightText";
import Course_Card from "../components/core/Catalog/Course_Card";
import ExploreMore from "../components/core/Home/ExploreMore";
import TimelineSection from "../components/core/Home/TimelineSection";
import LearningLanguageSection from "../components/core/Home/LearningLanguageSection";
import InctructorSection from "../components/core/Home/InctructorSection";
import { MdOutlineRateReview } from "react-icons/md";
import ReviewSlider from "../components/common/ReviewSlider";
import Footer from "../components/common/Footer";

const randomImages = [
  backgroundImg1,
  backgroundImg2,
  backgroundImg3,
  backgroundImg4,
  backgroundImg5,
  backgroundImg6,
  backgroundImg7,
  backgroundImg8,
  backgroundImg9,
  backgroundImg10,
  backgroundImg11,
];

function HomePage() {
  const [backgroundImg, setBackgroundImg] = useState(null);

  useEffect(() => {
    const bg = randomImages[Math.floor(Math.random() * randomImages.length)];
    setBackgroundImg(bg);
  }, []);

  return (
    <React.Fragment>
      <div>
        <div className="w-full  h-[450px] md:h-[650px] absolute top-0 left-0 opacity-[0.3] overflow-hidden object-cover">
          <img
            className="w-full h-full object-cover"
            src={backgroundImg}
            alt="Background"
          />

          <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg "></div>
        </div>
      </div>

      <div className=" ">
        <div className="relative h-[450px] md:h-[550px] justify-center mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white ">
          <Link to="signup">
            <div
              className="z-0 group p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                  transition-all duration-200 hover:scale-110 w-fit"
            >
              <div
                className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                  transition-all duration-200 group-hover:bg-richblack-900"
              >
                <p>Become an Instructor</p>
                <FaArrowRight />
              </div>
            </div>
          </Link>

          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-center text-3xl lg:text-4xl font-semibold mt-7"
          >
            Empower Your Future with
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="mt-4 w-[90%] text-center text-base lg:text-lg font-bold text-richblack-300"
          >
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </motion.div>

          <div className="flex flex-row gap-7 mt-8">
            <CTAButton active={true} linkto="/signup">
              Learn More
            </CTAButton>

            <CTAButton active={false} linkto="/login">
              Book a Demo
            </CTAButton>
          </div>
        </div>

        <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
          <div className="">
            <CodeBlocks
              position={"lg:flex-row"}
              heading={
                <div className="text-3xl lg:text-4xl font-semibold">
                  Unlock Your
                  <HighlightText text={"coding potential "} />
                  With our online courses
                </div>
              }
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={{
                btnText: "try it yourself",
                linkto: "signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                linkto: "signup",
                active: false,
              }}
              codeColor={"text-yellow-25"}
              codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
              backgroundGradient={"code-block1-grad"}
            />
          </div>

          <div className="">
            <CodeBlocks
              position={"lg:flex-row-reverse"}
              heading={
                <div className="w-[100%] text-3xl lg:text-4xl font-semibold lg:w-[50%]">
                  Start
                  <HighlightText text={"coding in seconds"} />
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              ctabtn1={{
                btnText: "Continue Lesson",
                linkto: "signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                linkto: "signup",
                active: false,
              }}
              codeColor={"text-white"}
              codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
              backgroundGradient={"code-block2-grad"}
            />
          </div>

          <div className="mx-auto box-content w-full max-w-maxContentTab  py-12 lg:max-w-maxContent">
            <h2 className="text-white text-2xl mb-6">
              Popular Picks for You 🏆
            </h2>
            <div className="flex gap-7">
              <Course_Card />
              <Course_Card />
            </div>
          </div>

          <div className="mx-auto box-content w-full max-w-maxContentTab  py-12 lg:max-w-maxContent">
            <h2 className="text-white text-2xl mb-6">
              Top Enrollments Today 🔥
            </h2>
            <div className="flex gap-7">
              <Course_Card />
              <Course_Card />
              <Course_Card />
            </div>
          </div>

          <div className="mx-auto box-content w-full max-w-maxContentTab  py-12 lg:max-w-maxContent">
            <h2 className="text-white text-2xl mb-6">All Courses</h2>
            <div className="flex gap-7">
              <Course_Card />
              <Course_Card />
              <Course_Card />
            </div>
          </div>

          <ExploreMore />
        </div>

        <div className="bg-pure-greys-5 text-richblack-700">
          <div className="homepage_bg h-[310px]">
            <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
              <div className="h-[150px]"></div>
              <div className="flex flex-row gap-7 text-white">
                <CTAButton active={true} linkto={"signup"}>
                  <div className="flex items-center gap-3">
                    Explore Full Catalog
                    <FaArrowRight />
                  </div>
                </CTAButton>
                <CTAButton active={false} linkto={"signup"}>
                  <div>Learn more</div>
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
            <di className="flex flex-col lg:flex-row gap-5 mb-10 mt-[95px]">
              <div className="text-3xl lg:text-4xl font-semibold w-full lg:w-[45%]">
                Get the Skills you need for a
                <HighlightText text={"Job that is in demand"} />
              </div>

              <div className="flex flex-col gap-10 w-full lg:w-[40%] items-start">
                <div className="text-[16px]">
                  The modern StudyNotion is the dictates its own terms. Today,
                  to be a competitive specialist requires more than professional
                  skills.
                </div>
                <CTAButton active={true} linkto={"/signup"}>
                  <div>Learn more</div>
                </CTAButton>
              </div>
            </di>

            <TimelineSection />

            <LearningLanguageSection />
          </div>
        </div>

        <div
          className="mt-14 w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 
        first-letter bg-richblack-900 text-white"
        >
          <InctructorSection />

          <h1 className="text-center text-3xl lg:text-4xl font-semibold mt-8 flex justify-center items-center gap-x-3">
            Reviews from other learners{" "}
            <MdOutlineRateReview className="text-yellow-25" />
          </h1>
          <ReviewSlider />
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default HomePage;

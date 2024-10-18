import React from "react";
import { useNavigate } from "react-router-dom";

import { formatDate } from "../services/formatDate";

import { GiReturnArrow } from "react-icons/gi";
import Img from "../components/common/Img";
import { FaStar } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard";

const coursedata = {
  _id: "1",
  courseName: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
  courseDescription:
    "aster Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
  instructor: {
    _id: "665dc72782ee44e29b7e2be7",
    firstName: "Sunnatullo",
    lastName: "Sunna",
    email: "sunnatulloxsunna3@gmail.com",
    image:
      "https://res.cloudinary.com/defsmhgn9/image/upload/v1717558223/notion-lms-courses/bnkdibpzhwaejuingtuf.jpg",
  },
  whatYouWillLearn:
    "Join the most comprehensive Node.js course on Udemy and learn Node in both a practical and a theory-based way!\r\n\r\n-\r\n\r\nNode.js is probably THE most popular and modern server-side programming language you can learn these days!\r\n\r\nNode.js developers are in high demand and the language is used for everything from traditional web apps with server-side rendered views over REST APIs all the way up to GraphQL APIs and real-time web services. Not to mention its applications in build workflows for projects of all sizes.\r\n\r\nThis course will teach you all of that! From scratch with zero prior knowledge assumed. Though if you do bring some knowledge, you'll of course be able to quickly jump into the course modules that are most interesting to you.\r\n\r\nHere's what you'll learn in this course:\r\n\r\nNode.js Basics & Basic Core Modules\r\n\r\nParsing Requests & Sending Responses\r\n\r\nRendering HTML Dynamically (on the Server)\r\n\r\nUsing Express.js\r\n\r\nWorking with Files and generating PDFs on the Server (on-the-fly)\r\n\r\nFile Up- and Download\r\n\r\nUsing the Model-View-Controller (MVC) Pattern\r\n\r\nUsing Node.js with SQL (MySQL) and Sequelize\r\n\r\nUsing Node.js with NoSQL (MongoDB) and Mongoose\r\n\r\nWorking with Sessions & Cookies\r\n\r\nUser Authentication and Authorization\r\n\r\nSending E-Mails\r\n\r\nValidating User Input\r\n\r\nData Pagination\r\n\r\nHandling Payments with Stripe.js\r\n\r\nBuilding REST APIs\r\n\r\nAuthentication in REST APIs\r\n\r\nFile Upload in REST APIs\r\n\r\nBuilding GraphQL APIs\r\n\r\nAuthentication in GraphQL APIs\r\n\r\nFile Upload in GraphQL APIs\r\n\r\nBuilding a Realtime Node.js App with Websockets\r\n\r\nAutomated Testing (Unit Tests)\r\n\r\nDeploying a Node.js Application\r\n\r\nUsing TypeScript with Node.js\r\n\r\nExploring Deno.js\r\n\r\nAnd Way More!\r\n\r\nDoes this look like a lot of content? It certainly is!\r\n\r\nThis is not a short course but it is the \"Complete Guide\" on Node.js after all. We'll dive into a lot of topics and we'll not just scratch the surface.\r\n\r\nWe'll also not just walk through boring theory and some slides. Instead, we'll build two major projects: An online shop (including checkout + payments) and a blog.\r\n\r\nAll topics and features of the course will be shown and used in these projects and you'll therefore learn about them in a realistic environment.\r\n\r\n\r\n\r\nIs this course for you?\r\n\r\nIf you got no Node.js experience, you'll love this course because it starts with zero knowledge assumed. It's the perfect course to become a Node.js developer.\r\n\r\nIf you got basic Node.js experience, this course is also a perfect match because you can go through the basic modules quickly and you'll benefit from all the deep dives and advanced topics the course covers.\r\n\r\nAre you an advanced Node.js user? Check the curriculum then. Maybe you found no other course that shows how to use SQL with Node.js. Or you're interested in GraphQL. Chances are, that you'll get a lot of value out of this course, too!\r\n\r\n\r\n\r\nPrerequisites\r\n\r\nNO Node.js knowledge is required at all!\r\n\r\nNO other programming language knowledge (besides JavaScript, see next point) is required\r\n\r\nBasic JavaScript knowledge is assumed though - you should at least be willing to pick it up whilst going through the course. A JS refresher module exists to bring you up to the latest syntax quickly\r\n\r\nBasic HTML + CSS knowledge helps but is NOT required\r\n\r\nWho this course is for:\r\nBeginner or advanced web developers who want to dive into backend (server-side) development with NodeJS\r\nEveryone who's interested in building modern, scalable and high-performing web applications\r\nExperienced NodeJS developers who want to dive into specific features like using GraphQL with NodeJS",
  courseContent: ["665e999480236c2195eafebb", "665e99d780236c2195eafec4"],
  ratingAndReviews: [
    {
      _id: "665ea598d77032fe62c39842",
      user: "665ea4d3d77032fe62c397ed",
      rating: 3,
      review: "best course",
      course: "665e996180236c2195eafeb7",
      __v: 0,
    },
    {
      _id: "6662e1177125d552036c42f7",
      user: "6662e0687125d552036c42b4",
      rating: 3,
      review: "this course supper",
      course: "665e996180236c2195eafeb7",
      __v: 0,
    },
  ],
  price: 213,
  thumbnail:
    "https://res.cloudinary.com/defsmhgn9/image/upload/v1717475682/notion-lms-courses/lf7kqjno1zydbasigjbi.webp",
  category: {
    _id: "665dc60c82f719fb91a5d4db",
    name: "Backend",
    description: "test",
    courses: ["665e996180236c2195eafeb7", "665f2d33107640129a48400e"],
    __v: 0,
  },
  tag: ["Node.js", "backend", "node"],
  studentsEnrolled: [
    "665dcc0a82ee44e29b7e2c77",
    "665ea4d3d77032fe62c397ed",
    "6661a697235379b9ff72712d",
    "6662e0687125d552036c42b4",
  ],
  instructions: [
    "General knowledge of how the web works is recommended but not a must-have",
    "Basic JavaScript knowledge is strongly recommended but could be picked up whilst going through the course",
    "NO NodeJS knowledge is required!",
  ],
  status: "Published",
  createdAt: "2024-06-04T04:34:41.803Z",
  __v: 0,
  updatedAt: "2024-06-04T04:37:11.867Z",
};

function CourseDetails() {
  const navigate = useNavigate();

  return (
    <>
      <div className={`relative w-full bg-richblack-800`}>
        <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative">
          <div
            className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0
                    lg:justify-items-start lg:py-0 xl:max-w-[810px]"
          >
            <div
              className="mb-5 lg:mt-10 lg:mb-0 z-[100]"
              onClick={() => navigate(-1)}
            >
              <GiReturnArrow className="w-10 h-10 text-yellow-100 hover:text-yellow-50 cursor-pointer" />
            </div>

            <div className="relative block max-h-[30rem] lg:hidden">
              <Img src={coursedata.thumbnail} alt="" />
              <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
            </div>

            <div
              className={`mb-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5`}
            >
              <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
                {coursedata.courseName}
              </p>
              <p className="text-richblack-200">
                {coursedata.courseDescription}
              </p>
              <div className="text-md flex flex-wrap items-center gap-2">
                <span className="text-yellow-25">5</span>
                <div className="flex items-center justify-center text-yellow-25 gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span>{`(${coursedata.ratingAndReviews.length} reviews)`}</span>
                <span>{`${coursedata.studentsEnrolled.length} students enrolled`}</span>
              </div>
              <p className="capitalize">
                {" "}
                Created By{" "}
                <span className="font-semibold underline">
                  {coursedata.instructor.firstName}{" "}
                  {coursedata.instructor.lastName}
                </span>
              </p>
              <div className="flex flex-wrap gap-5 text-lg">
                <p className="flex items-center gap-2">
                  {" "}
                  <BiInfoCircle /> Created at {formatDate(coursedata.createdAt)}
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <AiOutlineGlobal /> English
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
              <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                $ {coursedata.price}
              </p>
              <button className="yellowButton">Buy Now</button>
              <button className="blackButton">Add to Cart</button>
            </div>
          </div>

          <div
            className="right-[1.5rem] top-[60px] mx-auto hidden lg:block lg:absolute min-h-[600px] w-1/3 
                max-w-[410px] translate-y-24 md:translate-y-0"
          >
            <CourseDetailsCard course={coursedata} />
          </div>
        </div>
      </div>

      <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
        <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
          <div className="my-8 border border-richblack-600 p-8">
            <p className="text-3xl font-semibold">What you'll learn</p>
            <div className="mt-3">
              {coursedata.whatYouWillLearn &&
                coursedata.whatYouWillLearn.split("\n").map((line, index) => (
                  <div className="flex items-center mb-2">
                    <p className="font-bold">{index + 1}</p>
                    <p className="ml-2">{line}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;

import Footer from "./components/footer";
import Header from "./components/header";
import {
  FaInstagram,
  FaTumblr,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-40">
          <div className="w-full md:w-1/2">
            <img src="/assets/main.png" alt="main" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-start justify-center pt-20 pl-0 md:pl-20">
              <h1 className="font-bold text-3xl text-orange-400 tracking-wider">
                About
              </h1>
              <h1 className="font-bold text-3xl tracking-wider">
                tether<span className="text-orange-400">space</span>
              </h1>
              <p className="pt-10  text-md font-mono text-black/60">
                {`What's special about your product, service, or company? Use this space to highlight the things that set you apart from your competition, whether it's a special feature, a unique philosophy, or awards and recognition that you have received. Think of this as your elevator pitch to get the reader's attention.`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen mx-4 md:mx-40">
        <div className="flex flex-col">
          <h1 className="text-center pt-5 md:pt-10 text-4xl md:text-4xl text-black/80">
            Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 w-full">
            <div className="pt-20 flex flex-col  items-center">
              <img
                src="/assets/img1.svg"
                alt="image"
                className="w-[20rem] h-[14rem]"
              />
              <div className="mt-20 p-8 bg-white">
                <h1 className="text-center text-2xl text-orange-400"> p2p</h1>
                <h2 className="font-mono pt-8 text-center">
                  Give a detailed description of the service being provided
                  here.
                </h2>
              </div>
            </div>
            <div className="pt-20 flex flex-col  items-center ">
              <img
                src="/assets/img2.svg"
                alt="image"
                className="w-[20rem] h-[14rem]"
              />
              <div className="mt-20 p-8 bg-white">
                <h1 className="text-center text-2xl text-orange-400">
                  buy sell
                </h1>
                <h2 className="font-mono pt-8 text-center">
                  Give a detailed description of the service being provided
                  here.
                </h2>
              </div>
            </div>
            <div className="pt-20 flex flex-col  items-center ">
              <img
                src="/assets/img3.png"
                alt="image"
                className="w-[20rem] h-[14rem]"
              />
              <div className="mt-20 p-8 bg-white">
                <h1 className="text-center text-2xl text-orange-400">
                  {" "}
                  Strategies
                </h1>
                <h2 className="font-mono pt-8 text-center">
                  Give a detailed description of the service being provided
                  here.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen mx-4 md:mx-40">
        <div className="flex flex-col">
          <h1 className="text-center pt-10 text-4xl text-black/80">FAQs</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 w-full">
            <div className=" flex flex-col pb-20 my-20 bg-white items-center">
              <div className="h-40 bg-orange-400">
                <h1 className="p-10 text-xl">
                  What is the advantage of hiring a consultant instead of doing
                  it in-house?
                </h1>
              </div>
              <h2 className="font-mono pt-8 text-center p-4 text-lg">
                Having an FAQ section is a great way to present information
                about your product or service. Using the question-and-answer
                format makes it more relatable to your users.
              </h2>
            </div>
            <div className=" flex flex-col pb-20 my-20 bg-white items-center">
              <div className="h-40 bg-orange-400">
                <h1 className="p-10 text-xl">
                  What kind of deliverables are to be expected?
                </h1>
              </div>
              <h2 className="font-mono pt-8 text-center p-4 text-lg">
                Having an FAQ section is a great way to present information
                about your product or service. Using the question-and-answer
                format makes it more relatable to your users.
              </h2>
            </div>
            <div className=" flex flex-col pb-20 my-20 bg-white items-center">
              <div className="h-40 bg-orange-400">
                <h1 className="p-10 text-xl">
                  How long will the project take and how long until results can
                  be measured?
                </h1>
              </div>
              <h2 className="font-mono pt-8 text-center p-4 text-lg">
                Having an FAQ section is a great way to present information
                about your product or service. Using the question-and-answer
                format makes it more relatable to your users.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen mx-4 md:mx-40">
        <div className="flex flex-col md:flex-row p-10 md:p-20">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-4xl">
                Get a quote or set up a consultation.
              </h1>
              <h2 className="pt-20 uppercase text-xl md:text-2xl">Phone</h2>
              <h2 className="pt-4 text-lg md:text-xl">(123) 456-7890</h2>
              <h2 className="pt-10 uppercase text-xl md:text-2xl">Email</h2>
              <h2 className="pt-4 text-lg md:text-xl">
                hello@reallygreatsite.com
              </h2>
              <h2 className="pt-10 uppercase text-xl md:text-2xl">Social</h2>
              <div className="pt-4 flex flex-row space-x-4 md:space-x-8">
                <span>
                  <FaInstagram size={30} />
                </span>
                <span>
                  <FaPinterest size={30} />
                </span>
                <span>
                  <FaFacebook size={30} />
                </span>
                <span>
                  <FaTumblr size={30} />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full pt-20 md:pt-0 md:w-1/2">
            <img
              src="/assets/robot.png"
              alt="robot"
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

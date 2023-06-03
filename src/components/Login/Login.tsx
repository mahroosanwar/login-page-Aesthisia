import React from "react";

import Text from "../Text/Text";
import Img from "../Img/Img";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Login: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-end mx-auto pt-5 px-5 w-full mt-14 md:mb-4 md:mt-6">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[7px] mx-auto md:px-5 w-full">
          {/* Left Side */}
          <div className="h-[555px] relative w-full mr-52 md:mr-0">
            <div className="h-[555px] m-auto w-full">
              <Img
                src="images/img_rectangle15.png"
                className="relative h-[555px] m-auto object-cover rounded-[20px] w-full"
                alt="rectangleFifteen"
              />
              <Img
                src="images/img_frame452.png"
                className="h-[22px] md:h-auto mr-[55px] object-cover w-[54%]"
                alt="frame452"
              />
              <Text
                className="bottom-[29%] left-[3%] text-white_A700_b2 tracking-[1.44px]"
                as="h1"
                variant="h1"
              >
                <span className="md:text-4xl sm:text-[34px] text-white_A700 text-[38px] font-poppins text-left font-semibold">
                  100% Uptime😎
                </span>
                <span className="md:text-[26px] sm:text-2xl text-gray_400 text-[28px] font-poppins text-left font-normal">
                  <>
                    <br />
                    Zero
                  </>
                </span>
                <span className="md:text-[26px] sm:text-2xl text-gray_400 text-[28px] font-poppins text-left font-normal">
                  {" "}
                  Infrastructure
                </span>
                <span className="md:text-[26px] sm:text-2xl text-gray_400 text-[28px] font-poppins text-left font-normal">
                  {" "}
                  Management
                </span>
              </Text>
            </div>
            <div className="absolute flex flex-row sm:gap-10 h-max inset-[0] items-start justify-center m-auto w-[93%]">
              <div className="absolute left-0 bottom-0">
                <Img
                  src="images/img_internet11.svg"
                  className="h-[15px] mt-0.5 w-[15px]"
                  alt="internetEleven"
                />
                <Text className="ml-0.5 w-auto text-white" as="h5" variant="h5">
                  aesthisia.com
                </Text>
              </div>
              <div className="flex flex-1 flex-row gap-1.5 h-[15px] md:h-auto items-start justify-end mt-[485px] w-full">
                <Img
                  src="images/img_linkedin.svg"
                  className="h-[15px] w-[15px]"
                  alt="linkedin"
                />
                <Img
                  src="images/img_facebook1.svg"
                  className="h-[15px] w-[15px]"
                  alt="facebookOne"
                />
                <Img
                  src="images/img_instagram1.svg"
                  className="h-[15px] w-3.5"
                  alt="instagramOne"
                />
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex md:flex-1 flex-col font-inter gap-7 items-center justify-start w-[33%] md:w-full mr-24 md:mr-0">
            {/* Above Part */}
            <div className="flex flex-col items-center justify-start w-[74%] md:w-full">
              <Img
                src="images/img_petals1.png"
                className="h-[49px] md:h-auto object-cover w-[23%] sm:w-full"
                alt="petalsOne"
              />
              <Text
                className="capitalize text-black_900 text-center"
                as="h2"
                variant="h2"
              >
                <span className="md:text-[32px] sm:text-3xl text-black_900 text-[34px] font-poppins font-medium">
                  Welcome
                </span>
                <span className="md:text-[32px] sm:text-3xl text-black_900 text-[34px] font-poppins font-medium">
                  {" "}
                </span>
                <span className="md:text-[32px] sm:text-3xl text-teal_500 text-[34px] font-poppins font-medium">
                  back!
                </span>
              </Text>
              <Text
                className="mt-[5px] text-blue_gray_500 text-center"
                as="h4"
                variant="h4"
              >
                Glad to see you, Again!
              </Text>
            </div>
            {/* Login Form */}
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                wrapClassName="w-full"
                className="font-inter font-normal leading-[normal] p-0 placeholder:text-blue_gray_500_87 text-blue_gray_500_87 text-left text-sm w-full"
                type="email"
                name="group9001"
                placeholder="Enter your email"
                shape="RoundedBorder10"
                size="md"
                variant="OutlineBluegray70083"
              ></Input>
              <Input
                wrapClassName="flex mt-[22px] w-full"
                className="font-inter font-normal leading-[normal] p-0 placeholder:text-blue_gray_500_87 text-blue_gray_500_87 text-left text-sm w-full"
                type="password"
                name="group9002"
                placeholder="Enter your password"
                suffix={
                  <Img
                    src="images/img_fluenteye20filled.svg"
                    className="mt-auto mb-px ml-3"
                    alt="fluent:eye-20-filled"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="OutlineBluegray70083"
              ></Input>
              <a
                href="https://login-page-aesthisia.netlify.app/"
                className="font-inter md:ml-[0] ml-[258px] mt-[7px] text-blue_gray_500_87 text-center"
              >
                <Text as="h5" variant="h5">
                  Forgot Password?
                </Text>
              </a>
              <Button
                className="cursor-pointer font-inter font-semibold h-[53px] mt-9 text-center text-lg text-white_A700 tracking-[-0.14px]  w-full"
                shape="RoundedBorder10"
                size="sm"
                variant="OutlineBlack9006b"
              >
                Log In
              </Button>
              <Text
                className="font-lato md:ml-[0] ml-[62px] mt-[71px] text-blue_gray_700 text-center"
                as="h3"
                variant="h3"
              >
                <span className="text-blue_gray_500 text-sm font-inter font-normal">
                  Don’t have an account yet?
                </span>
                <span className="text-blue_gray_700 text-sm font-inter font-normal">
                  {" "}
                </span>
                <span className="text-teal_500 text-sm font-inter font-medium">
                  {" "}
                  Sign Up
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

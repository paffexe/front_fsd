import { memo } from "react";
import hero from "../assets/hero.png";
import poster from "../assets/Screenshot 2025-09-24 085736.png";
import flame from "../assets/fire.svg"

const Hero = memo(() => {
  return (
    <div>
      <section
        className="mt-8 h-[455px] bg-cover bg-center bg-no-repeat relative container"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div
          className="absolute w-[650px] h-[355px]"
          style={{
            margin: "46px 384px 52px 76px",
            top: "46px",
            left: "76px",
          }}
        >
          <h1
            className="font-semibold text-[48px] leading-[54px] text-[#1F2533] mb-3"
            style={{ letterSpacing: "-5%" }}
          >
            SEEDRA Basil Seeds for Indoor and Outdoor Planting
          </h1>

          <p className="font-light text-base leading-7 text-[#1F2533] mb-[21px]">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
          </p>

          <div className="w-[335px] h-[130px] mb-[25px]">
            <div className="flex items-center mb-4">
              <img
                src={flame}
                alt="Hot deal"
                width={29}
                height={37}
                className="mr-4"
              />
              <div className="flex items-baseline gap-4">
                <span className="font-semibold text-[42px] leading-[54px] text-[#1F2533]">
                  $12.56
                </span>
                <span className="font-semibold text-[22px] leading-[54px] text-[#70737C] line-through">
                  $15.56
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="w-[153px] h-[51px] bg-[#359740] text-white font-medium text-base leading-[178%]  hover:bg-white hover:text-[#359740] transition duration-500 ease-in-out hover: border rounded-lg"
                style={{ letterSpacing: "-3.5%" }}
              >
                Add to cart
              </button>
              <button
                className="w-[153px] h-[51px] bg-[#359740] text-white font-medium text-base leading-[178%]  hover:bg-white hover:text-[#359740] transition duration-500 ease-in-out hover: border rounded-lg"
                style={{ letterSpacing: "-3.5%" }}
              >
                Discover
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        className="mt-4 h-[104px] bg-cover bg-center bg-no-repeat relative container items-center justify-center flex flex-col"
        style={{ backgroundImage: `url(${poster})` }}
      >
        <h2 className="font-semibold text-2xl text-[24px]">We sell seeds</h2>
        <span className="font-[500] text-[#70737C] text-[16px]">
          that always sprout and gardening supplies which never break
        </span>
      </div>
    </div>
  );
});

export default Hero;

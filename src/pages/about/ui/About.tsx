import { memo } from "react";

import hero from "../assets/hero2.png";
import womanImg from "../assets/smile.png";

export const About = memo(() => {
  return (
    <div className="container">
      <div
        className="mt-[32px] flex justify-center  h-[251px] bg-cover bg-center bg-no-repeat relative container rounded-2xl"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="flex flex-col items-center text-center gap-2 max-w-[650px]">
          <h3 className="font-semibold text-[48px] leading-[54px] text-[#1F2533] mt-[64px]">
            Who we are and what we do
          </h3>
          <span className="font-[400] leading-7 text-[##1F2533] mb-[21px]">
            Here you can find a lot of interesting and useful information that
            you need in gardening and creating a beautiful garden
          </span>
        </div>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-[30px]">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-[#1F2533]">
            Seedra helps to grow fast and efficient
          </h2>
          <p className="text-[#1F2533]">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George
          </p>
          <p className="text-[#1F2533]">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings.
          </p>
          <p className="text-[#1F2533]">
            Your easy growing experience is our guarantee. Spinach common
            culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
            risotto, and more.
          </p>
          <p className="text-[#1F2533]">
            Proudly sourced in the USA - our garden seeds are grown, harvested,
            and packaged in the USA. We support local farmers and are happy to
            produce this American-made product.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img src={womanImg} alt="Gardener" />
            <div className="absolute inset-0 rounded-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
});

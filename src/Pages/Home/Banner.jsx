// import { useParams } from "react-router-dom";
import logo from "../../assets/Naturals-by-Rakhi-Hair-Oil-Review.jpg";
import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../App";

const Banner = () => {
  // const { name } = useParams();
  const itemData = useContext(ItemContext);
  const [loader, setLoader] = useState(true);
  const [landing, setLanding] = useState([]);

  useEffect(() => {
    let itmFind = itemData.find((item) => item.name === "4567");
    setLanding([itmFind]);
    setLoader(false);
  }, [itemData]);

  const formatStyle = (params) => {
    if (landing[0] && landing[0][params]) {
      return landing[0][params].split("<br>").map((part, index, parts) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </span>
      ));
    }
  };

  return (
    <>
      { loader ? (
        "Loading"
      ) : (
        <div className="pt-24">
          <div className="relative max-w-screen-xl mx-auto px-6 bg-white">
            <div className="pt-6 text-center">
              <h1 className="text-3xl font-bold">
                {formatStyle("custom_head_text_1")}
              </h1>
              <div className="mt-12 max-w-screen-lg mx-auto">
                <iframe
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
                  src="https://www.youtube.com/embed/BX548LuZA4Y?si=45xHXdtJE4iVpL3X"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="mt-8">
                <h1 className="text-[#FFA000] text-2xl font-bold text-center ">
                  {formatStyle("custom_head_text_2")}
                </h1>
              </div>
              {/* common button */}
              <div className="mt-12 text-center">
                <button className="bg-[#2c6036] text-xl md:text-3xl font-bold px-6 py-4 shadow-xl rounded-full text-white border-2 border-white hover:bg-[#2c6036] hover:scale-95 transition duration-200">
                  অর্ডার করতে চাই
                </button>
              </div>
            </div>
            {/* FAQ Section */}
            <div className="relative">
              <div className="bg-[#008037] p-8 mt-12 pb-28">
                <h1 className="text-2xl text-white ">
                  {formatStyle("custom_head_text_3")}
                </h1>
                {/* faq start */}
                <div className="px-6">
                  <div className="join join-vertical w-full mt-12 text-white">
                    <div className="collapse collapse-arrow join-item  border">
                      <input
                        type="radio"
                        name="my-accordion-4"
                        defaultChecked
                      />
                      <div className="collapse-title text-xl font-medium">
                        {formatStyle("custom_hea1_text_4")}
                      </div>
                      <div className="collapse-content">
                        <p>{formatStyle("custom_head1_text_5")}</p>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">
                        {formatStyle("custom_head1_text_6")}
                      </div>
                      <div className="collapse-content">
                        <p>{formatStyle("custom_head1_text_7")}</p>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">
                        {formatStyle("custom_head1_text_8")}
                      </div>
                      <div className="collapse-content">
                        <p>{formatStyle("custom_head1_text_9")}</p>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">
                        {formatStyle("custom_head1_text_10")}
                      </div>
                      <div className="collapse-content">
                        <p>{formatStyle("custom_head1_text_11")}</p>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">
                        {formatStyle("custom_head1_text_12")}
                      </div>
                      <div className="collapse-content">
                        <p>{formatStyle("custom_head1_text_13")}</p>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">
                        {formatStyle("custom_head1_text_14")}
                      </div>
                      <div className="collapse-content">
                        <p>{formatStyle("custom_head1_text_15")}</p>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">
                        {formatStyle("custom_head1_text_16")}
                      </div>
                      <div className="collapse-content">
                        <p>{formatStyle("custom_head1_text_17")}</p>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div className="collapse-title text-xl font-medium">
                        {formatStyle("custom_head1_text_18")}
                      </div>
                      <div className="collapse-content">
                        <p>{formatStyle("custom_head1_text_19")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* svg path  */}
              <div className="absolute -bottom-0 w-full left-0 rotate-180">
                <svg
                  fill="#FFF"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 283.5 19.6"
                  preserveAspectRatio="none"
                >
                  <path
                    className="elementor-shape-fill opacity-40"
                    d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
                  ></path>
                  <path
                    className="elementor-shape-fill opacity-40"
                    d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
                  ></path>
                  <path
                    className="elementor-shape-fill opacity-40"
                    d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
                  ></path>
                  <path
                    className="elementor-shape-fill opacity-40"
                    d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
                  ></path>
                </svg>
              </div>
            </div>
            {/* Pricing  */}
            <div className="mt-12 bg-white max-w-screen-xl mx-auto pt-12">
              <h1 className="text-center text-3xl font-bold">Pricing</h1>
              {/* card for pricing*/}
              <div className="max-w-screen-lg  p-5 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {/* card 1 */}
                <div className="border text-center p-7 space-y-5 box ">
                  <h2 className="text-2xl font-bold text-[#008037]">
                    {formatStyle("custom_head1_text_23")}
                  </h2>
                  <h1 className="text-4xl font-bold">
                    {formatStyle("custom_head1_text_24")}
                  </h1>
                  <p className="text-xl text-[#008037] font-medium">
                    {formatStyle("custom_head1_text_25")}
                  </p>
                </div>
                {/* card 2 */}
                <div className="border text-center p-7 space-y-5 box ">
                  <h2 className="text-2xl font-bold text-[#008037]">
                    {formatStyle("custom_head1_text_26")}
                  </h2>
                  <h1 className="text-4xl font-bold">
                    {formatStyle("custom_head1_text_27")}
                  </h1>
                  <p className="text-xl text-[#008037] font-medium">
                    {formatStyle("custom_head1_text_28")}
                  </p>
                </div>
                {/* card-3 */}
                <div className="border text-center p-7 space-y-5 box ">
                  <h2 className="text-2xl font-bold text-[#008037]">
                    ট্রায়াল কোর্স – ২০০ মিলি তেল
                  </h2>
                  <h1 className="text-4xl font-bold">৬০০ টাকা</h1>
                  <p className="text-xl text-[#008037] font-medium">
                    (ঢাকার ভেতর ৮০ টাকা ঢাকার বাইরে ১৪০ টাকা ডেলিভারি চার্জ যোগ
                    হবে)
                  </p>
                </div>
              </div>
              {/* text */}
              <h3 className="text-[#008037] p-5 text-3xl font-bold text-center">
                শত শত মানুষের উপকার পাওয়ার রিভিউ আমাদের ফেসবুক পেইজে আছে। তার
                মধ্যে থেকে কিছু রিভিউ এখানে দেয়া হলঃ
              </h3>
              {/* image comments */}
              <div className="text-center mt-12 max-w-screen-xl mx-auto px-5">
                <img className="inline" src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;

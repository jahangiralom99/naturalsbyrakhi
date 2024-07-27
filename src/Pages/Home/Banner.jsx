const Banner = () => {
  return (
    <div className="pt-24">
      <div className="relative max-w-screen-xl mx-auto px-6 bg-white">
        <div className="pt-6 text-center">
          <h1 className="text-3xl font-bold">চুল সমস্যার প্রাকৃতিক সমাধান</h1>
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
              চুলের যেকোনো সমস্যার যদি প্রাকৃতিক ভাবে সমাধান করতে চান কোন
              পার্শ্ব-প্রতিক্রিয়া ছাড়া তাহলে এখনি অর্ডার করুন প্রাকৃতিক প্রায় ৩০
              টি উপাদানে তৈরি Natural Hair oil
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
        <div className="bg-[#008037] p-8 mt-12 pb-28">
          <h1 className="text-2xl text-white ">
            নীচের প্রশ্নগুলো আমরা প্রতিনিয়ত পেয়ে থাকি। আশা করি এর মধ্যে আপনি
            আপনার প্রশ্নের উত্তর পেয়ে যাবেন এবং আমাদের তেলের সম্পর্কে বিস্তারিত
            জানতে পারবেন...
          </h1>
          {/* faq start */}
          <div className="px-6">
            <div className="join join-vertical w-full mt-12 text-white">
              <div className="collapse collapse-arrow join-item  border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  তেলের দাম কত এবং কিভাবে অর্ডার পাবো?
                </div>
                <div className="collapse-content">
                  <p>
                    এখানে অর্ডার করুন নীচের প্রশ্নগুলো আমরা প্রতিনিয়ত পেয়ে থাকি।
                    আশা করি এর মধ্যে আপনি আপনার প্রশ্নের উত্তর পেয়ে যাবেন এবং
                    আমাদের তেলের সম্পর্কে বিস্তারিত জানতে পারবেন... তেলের দাম কত
                    এবং কিভাবে অর্ডার পাবো? ২০০ ml Natural Hair Oil এর দাম ৬০০
                    টাকা। ডেলিভারি চার্জ ঢাকার ভেতর ৮০ টাকা। ঢাকার বাইরে ১৪০
                    টাকা। ২০০ ml Natural Hair Oil এর ২ বোতল নিলে ডেলিভারি চার্জ
                    ফ্রি। সেক্ষেত্রে ১১০০ টাকা দিলেই হবে। তবে ৪০০ ml Natural
                    Hair Oil ১ বোতল নিলে ডেলিভারি চার্জ ফ্রি। সেক্ষেত্রে ১০০০
                    টাকা দিলেই হবে। ডেলিভারিতে প্রোডাক্ট হাতে পাবার পর টাকা দিয়ে
                    নিতে পারবেন। অর্ডার করতে আপনার বিস্তারিত লিখে নীচের ফর্মটি
                    পূরণ করুন। ৩-৫ দিনের মধ্যে ডেলিভারি পাবেন।
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  হেয়ার স্পা প্যাকের দাম কত?
                </div>
                <div className="collapse-content">
                  <p>
                    ২৫০ গ্রাম হেয়ার স্পা প্যাক ৬০০ টাকা। সাথে ডেলিভারি চার্জ যোগ
                    হবে। কম্বো অফারে ৪০০ মিলি হেয়ার অয়েল ও ২৫০ গ্রাম হেয়ার স্পা
                    প্যাক একসাথে অর্ডার করলে ১৬০০ টাকার জায়গায় ১৫০০ টাকাতে
                    পাবেন। ডেলিভারি চার্জ ফ্রি। আমাদের ক্লায়েন্টরা আমাদের
                    জানাচ্ছেন যে হেয়ার স্পা প্যাক এবং হেয়ার অয়েলটি একসাথে
                    ব্যবহার করলে ফলাফলটি দ্রুত এবং দ্বিগুণ ভাবে পাচ্ছেন।
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  আমার প্রচুর চুল পড়ছে। আমার কি চুল পড়া কম হবে কিংবা নতুন চুল
                  গজাবে?
                </div>
                <div className="collapse-content">
                  <p>
                    চুল পড়ার বিভিন্ন কারণ থাকতে পারে। কারও বংশগত কারণে হয় কারও
                    বা আবার প্রোটিনের অভাবে। আসলে চুল পড়া শুরু হওয়ার আগে আমরা
                    খুব কম মানুষই চুলের যত্ন নিই। কিন্তু সময় থাকতে আপনি সঠিকভাবে
                    যত্ন নিলে আপনি একদম টাক হয়ে যাওয়া থেকে রক্ষা পাবেন। চুলের
                    জন্য উপকারী প্রায় ৩০ টি প্রাকৃতিক উপাদানে তৈরি আমার তেলটি
                    ব্যবহারে চুল পড়া কমবে, নতুন চুল গজাবে, চুল লম্বা ও ঘন হবে,
                    চুল সিল্কি, শাইনি এবং কালো হবে, খুশকি থাকলে সেটাও কমে যাবে,
                    তেলটি ব্যবহারের অল্প কিছুদিনের মধ্যেই আপনি পরিবর্তন টা বুঝতে
                    পারবেন। মোটকথা চুলের যেকোনো সমস্যার সমাধান আমার এই ন্যাচারাল
                    হেয়ার অয়েল।
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  আমার চুল অকালে পেকে যাচ্ছে। এই তেল কি আমার চুল কালো করবে?
                </div>
                <div className="collapse-content">
                  <p>
                    অকালে চুল পেকে যাওয়া চুলের জন্য খুব খারাপ লক্ষণ। এর মানে
                    আপনার চুলের স্বাস্থ্য ভালো নেই কিংবা প্রোটিনের অভাব। সময়
                    থাকতে সঠিক ভাবে যত্ন না নিলে সামনে আরও ক্ষতি হবে। আমার তেলটি
                    প্রাকৃতিক ভাবে আপনার চুলকে কালো করবে শতভাগ। বহু মানুষের অকাল
                    পক্কতার সমাধান করছে আমার প্রাকৃতিক তেলটি।
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  আমার খুশকির সমস্যা আছে। এই তেল কি খুশকি দূর করবে?
                </div>
                <div className="collapse-content">
                  <p>
                    খুশকি হওয়া চুল পড়ে যাওয়ার প্রধান কারণ। আমার এই তেল নিয়মিত
                    ব্যবহারে খুশকি শতভাগ দূর হবে এবং আপনার চুল পড়ে যাওয়া থেকে
                    রক্ষা পাবে।
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  কি কি উপদান দিয়ে তৈরি?
                </div>
                <div className="collapse-content">
                  <p>
                    খাটি নারিকেল তেলের সাথে জবা ফুলের নির্যাস, আমলকি, মেথি,
                    ব্রাহ্মি, কারিপাতা, শিকাকাই, রিঠা সহ প্রায় ৩০ টি প্রাকৃতিক
                    উপাদান ব্যবহার করা হয়েছে যা চুলের জন্য অনেক অনেক উপকারী।
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  আপনারা কি কোন গ্যারান্টি দেন?
                </div>
                <div className="collapse-content">
                  <p>
                    ১০০% গ্যারান্টির কথা বলা বিক্রির জন্য মিথ্যার আশ্রয় ছাড়া আর
                    কিছুই না। কারণ চুলপড়ার অনেক কারণ থাকতে পারে। অনেকের বংশগত
                    কারণেও চুল পড়ে থাকে। আবার অনেকের প্রোটিনের অভাবে চুল পড়ে।
                    আমরা শতভাগ গ্যারান্টি দিইনা তবে প্রাকৃতিক যেসব উপাদান চুলের
                    জন্য উপকারী এমন প্রায় ৩০ টা উপাদান দিয়ে তেলটি তৈরি করেছি।
                    আমি এবং আরও অনেকে উপকার পেয়েছে। আশা করছি আপনিও উপকার পাবেন।
                    এছাড়াও আমাদের পেইজে আপনি উপকার পেয়েছে এমন মানুষের প্রচুর
                    পরিমাণে রিভিউ দেখতে পাবেন। নিয়ম মেনে ব্যবহার করলে আপনি
                    অবশ্যই উপকার পাবেন।
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  আগে থেকে কোন টাকা দেয়া লাগবে?
                </div>
                <div className="collapse-content">
                  <p>
                    আগে থেকে এক টাকাও দেয়া লাগবে না। ডেলিভারি ম্যান এর কাছ থেকে
                    প্রোডাক্ট বুঝে পেয়ে তারপর টাকা দিবেন। অর্ডার করতে নীচের
                    ফর্মটি পূরণ করুন।
                  </p>
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
    </div>
  );
};

export default Banner;

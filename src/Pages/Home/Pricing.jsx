import logo from "../../assets/Naturals-by-Rakhi-Hair-Oil-Review.jpg";

const Pricing = () => {
  return (
    <div>
      <div className="mt-12 bg-white max-w-screen-xl mx-auto pt-12">
        <h1 className="text-center text-3xl font-bold">Pricing</h1>
        {/* card for pricing*/}
        <div className="max-w-screen-lg  p-5 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* card 1 */}
          <div className="border text-center p-7 space-y-5 box ">
            <h2 className="text-2xl font-bold text-[#008037]">
              ট্রায়াল কোর্স – ২০০ মিলি তেল
            </h2>
            <h1 className="text-4xl font-bold">৬০০ টাকা</h1>
            <p className="text-xl text-[#008037] font-medium">
              (ঢাকার ভেতর ৮০ টাকা ঢাকার বাইরে ১৪০ টাকা ডেলিভারি চার্জ যোগ হবে)
            </p>
          </div>
          {/* card 2 */}
          <div className="border text-center p-7 space-y-5 box ">
            <h2 className="text-2xl font-bold text-[#008037]">
              ট্রায়াল কোর্স – ২০০ মিলি তেল
            </h2>
            <h1 className="text-4xl font-bold">৬০০ টাকা</h1>
            <p className="text-xl text-[#008037] font-medium">
              (ঢাকার ভেতর ৮০ টাকা ঢাকার বাইরে ১৪০ টাকা ডেলিভারি চার্জ যোগ হবে)
            </p>
          </div>
          {/* card-3 */}
          <div className="border text-center p-7 space-y-5 box ">
            <h2 className="text-2xl font-bold text-[#008037]">
              ট্রায়াল কোর্স – ২০০ মিলি তেল
            </h2>
            <h1 className="text-4xl font-bold">৬০০ টাকা</h1>
            <p className="text-xl text-[#008037] font-medium">
              (ঢাকার ভেতর ৮০ টাকা ঢাকার বাইরে ১৪০ টাকা ডেলিভারি চার্জ যোগ হবে)
            </p>
          </div>
        </div>
        {/* text */}
        <h3 className="text-[#008037] p-5 text-3xl font-bold text-center">
          শত শত মানুষের উপকার পাওয়ার রিভিউ আমাদের ফেসবুক পেইজে আছে। তার মধ্যে
          থেকে কিছু রিভিউ এখানে দেয়া হলঃ
        </h3>
        {/* image comments */}
        <div className="text-center mt-12 max-w-screen-xl mx-auto px-5">
          <img className="inline" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;

import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import logo from "../../assets/Combo-offer-300x300.png";

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-8">
      <div className="bg-white border-2 border-black rounded mt-12 max-w-screen-xl mx-auto p-6">
        <p className="text-center font-bold md:text-2xl lg:text-3xl">
          অর্ডার করতে আপনার সঠিক তথ্য দিয়ে নিচের ফর্মটি সম্পূর্ণ পূরন করুন। (আগে
          থেকে কোন টাকা দেয়া লাগবে না। প্রোডাক্ট হাতে পাবার পর টাকা দিবেন)
        </p>
        <hr className="mt-5 border-black" />
        <div className="flex flex-col gap-8 md:flex-row justify-between mt-10 ">
          <div className="md:flex-1">
            <h2 className="font-bold text-xl">Billing details</h2>
            {/* form Start  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার নাম লিখুন <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border border-black  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="নাম লিখুন"
                  id="name"
                  name="name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-red-600">Name is Required</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার ঠিকানা লিখুন <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block border-black text-sm w-full appearance-none"
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                  id="address"
                  name="address"
                  autoComplete="text"
                />
                {errors.address && (
                  <p className="text-red-600">ঠিকানা তথ্যটি প্রয়োজনীয়</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার মোবাইল নাম্বারটি লিখুন
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 border-black px-4 block text-sm w-full appearance-none"
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ফোন নম্বর লিখুন"
                  id="phone"
                  name="phone"
                  autoComplete="number"
                />
                {errors.phone && (
                  <p className="text-red-600">আপনার সম্পূর্ণ ফোন নম্বর লিখুন</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  Order notes (optional)
                </label>
                <textarea
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 border-black px-4 block text-sm w-full appearance-none"
                  rows="5"
                  cols="10"
                  {...register("text", { required: true })}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  id="text"
                  name="text"
                  autoComplete="text"
                />
                {errors.text && (
                  <p className="text-red-600">আপনার সম্পূর্ণ ফোন নম্বর লিখুন</p>
                )}
              </div>
            </form>

            {/* গ্রোথিং প্যাকেজঃ */}
            <div className="mt-12">
              <h1 className="text-xl font-bold">
                কোন প্যাকেজটি নিতে চান সিলেক্ট করুন
              </h1>
              <div>
                <div className="bg-[#f7f7f7]  border border-black shadow p-5 flex gap-6 mt-4 rounded-md relative">
                  {/* <div className="absolute hidden lg:block rotate-45 -right-4">
                    <span className="bg-[#f16334] text-white px-3 text-sm">
                      ডেলিভারি ফ্রি
                    </span>
                  </div> */}
                  <div>
                    <input
                      className="accent-red-500"
                      type="radio"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold">ট্রায়াল কোর্স – ২০০ মিলি তেল</h3>
                    <p className="text-sm text-slate-700">
                      (ঢাকার ভেতর ৮০ টাকা ঢাকার বাইরে ১৪০ টাকা ডেলিভারি চার্জ
                      যোগ হবে)
                    </p>
                    <p className="font-bold">৳ 600.00</p>
                  </div>
                </div>
                <div className="bg-[#ffff]  border border-black shadow p-5 flex gap-6 mt-4 rounded-md relative">
                  <div className="absolute  rotate-45 -right-4">
                    <span className="bg-[#f16334] text-white px-3 text-sm">
                      ডেলিভারি ফ্রি
                    </span>
                  </div>
                  <div>
                    <input
                      className="accent-red-500"
                      type="radio"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold">হাফ কোর্সঃ ৪০০ মিলি তেল</h3>
                    <p className="text-sm text-slate-700">
                      ডেলিভারি চার্জ ফ্রি
                    </p>
                    <p className="font-bold">
                      {" "}
                      <span className="text-slate-400 line-through">
                        ৳ 1,200.00
                      </span>{" "}
                      ৳ 1,000.00
                    </p>
                  </div>
                </div>
                <div className="bg-[#ffff]  border border-black shadow p-5 flex gap-6 mt-4 rounded-md relative">
                  <div className="absolute rotate-45 -right-4">
                    <span className="bg-[#f16334] text-white px-3 text-sm">
                      ডেলিভারি ফ্রি
                    </span>
                  </div>
                  <div>
                    <input
                      className="accent-red-500"
                      type="radio"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="space-y-3 z-10">
                    <h3 className="font-bold">
                      কম্বো প্যাকেজঃ ২৫০ গ্রাম হেয়ার স্পা + ৪০০ মিলি তেল
                    </h3>
                    <p className="text-sm text-slate-700">
                      8০০ টাকা ডিসকাউন্ট + ডেলিভারি চার্জ ফ্রি
                    </p>
                    <p className="font-bold">
                      {" "}
                      <span className="text-slate-400 line-through">
                        ৳ 1,900.00
                      </span>
                      ৳ 1,500.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Your  order  */}
          <div className="md:flex-1">
            <h2 className="font-bold text-xl">Your order</h2>
            <div className="flex  text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Product</p>
              <p>SubTotal</p>
            </div>
            <p className="border-b-2 border-dashed mt-2"></p>
            <div className="mt-5 flex items-center justify-between gap-3  text-sm font-semibold">
              <div className="flex items-center gap-3">
                <img className="w-12 rounded" src={logo} alt="" />
                <p>Hair Combo Offer </p>
              </div>
              <div>
                <p>× 1 1,500.00৳ </p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5"></p>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>SubTotal</p>
              <div className="mt-3">
                <p className="text-end">৳ 1,500.00</p>
                <div className="flex items-center gap-2 mt-3">
                  <input
                    className="accent-red-500"
                    type="radio"
                    name="b"
                    id="background"
                  />
                  <p>ঢাকার ভিতরে: ৳ 80.00</p>
                </div>
              </div>
            </div>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Shopping</p>
              <div>
                <div className="flex items-center gap-2">
                  <input
                    className="accent-red-500"
                    type="radio"
                    name=""
                    id=""
                  />
                  <p>ঢাকার বাহিরে: ৳ 140.00</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    className="accent-red-500"
                    type="radio"
                    name=""
                    id=""
                  />
                  <p>ফ্রি ডেলিভারি</p>
                </div>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5 "></p>
            <div className="flex text-sm font-bold justify-between items-center gap-3 mt-5">
              <p>Total</p>
              <p>৳ 1,580.00</p>
            </div>
            <div className="bg-[#f4f8fa] relative p-4 mt-5 rounded">
              <div className="flex items-center gap-3">
                <p>ক্যাশ অন ডেলিভারি</p>
              </div>
              <div className="absolute top-6 left-6">
                <IoMdArrowDropup className="text-6xl text-[#eaeaea]" />
              </div>
              <p className="p-4 bg-[#eaeaea] mt-4 text-sm ">
                পণ্য হাতে পেয়ে ডেলিভারি ম্যানকে পেমেন্ট করতে পারবেন।
              </p>
            </div>
            <p className="mt-2 text-[#777] text-[12px]">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our
              <span className="text-red-500">privacy policy.</span>
            </p>
            <div className="text-center mt-12 md:mt-12">
              <button className="px-6 w-full gap-3 py-3 flex items-center justify-center font-bold text-white rounded bg-[#133196] ">
                <FaLock />
                অর্ডার সম্পূর্ণ করুন ৳ 2,670.00
              </button>
            </div>
          </div>
        </div>
        {/* bottom text */}
        <div className="mt-12 text-center p-4">
          <h1 className="text-2xl text-[#008037] font-bold">
            কোন প্রশ্ন বা সাহায্য লাগলে কল করুনঃ 09613-651212
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Order;

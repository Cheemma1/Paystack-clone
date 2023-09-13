import React from "react";

const TryPaystack = () => {
  return (
    <div className="bg-last-pattern bg-center bg-cover">
      <div className="flex items-center justify-between flex-col md:flex-row container my-8 mx-auto py-16 px-4 md:px-0 text-center md:text-left">
        <div>
          <p className="font-Roboto text-lg">Try Paystack</p>
          <h1 className=" text-4xl  md:text-5xl font-bold py-6 font-Boing md:w-3/5">
            Start accepting payments in just 30 minutes
          </h1>
        </div>
        <p className="bg-light-green p-2 rounded-md text-white cursor-pointer ">
          Create Free Account
        </p>
      </div>
    </div>
  );
};

export default TryPaystack;

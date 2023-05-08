import React from "react";

const Contact = ({ onChangeContactStatus }) => {
  return (
    <section
      id="Contact"
      className="fixed py-2 md:py-10 z-20 right-0 w-full border h-[800px] md:h-[650px] md:w-[768px] scroll-m-0 bg-white flex flex-col items-center justify-center"
    >
      <button
        onClick={onChangeContactStatus}
        className="fixed top-5 right-[50px] text-3xl"
      >
        ✕
      </button>
      <h1 className="mt-5 ml-8 text-xl md:text-[30px] w-[300px] sm:w-[550px] md:w-[665px] text-center text-[#4831D4]">
        I’m excited to learn about your project. Ready to get started?
      </h1>
      <form
        action="/"
        method="get"
        className="flex flex-col gap-4 justify-center items-center md:grid md:gap-x-5 md:gap-y-5 md:grid-cols-2 mt-4 md:mt-5 w-[350px] sm:w-[600px] md:w-[700px] md:px-12"
      >
        <fieldset className="flex flex-col text-[14px] md:text-[16px]">
          <label className="text-slate-600" htmlFor="Name">
            Name*
          </label>
          <input
            type="text"
            id="Name"
            className="border p-2 h-[35px] md:h-[40px] w-[280px] sm:w-[500px] md:w-[280px] rounded-md"
            required
          />
        </fieldset>
        <fieldset className="flex flex-col text-[14px] md:text-[16px]">
          <label className="text-slate-600" htmlFor="Email">
            Email*
          </label>
          <input
            type="Email"
            id="Email"
            className="border p-2 h-[35px] md:h-[40px] w-[280px] sm:w-[500px] md:w-[280px] rounded-md"
            required
          />
        </fieldset>
        <fieldset className="flex flex-col text-[14px] md:text-[16px]">
          <label className="text-slate-600" htmlFor="Job">
            Type of Job*
          </label>
          <select
            type="text"
            id="Job"
            className="border p-2 h-[35px] md:h-[40px] w-[280px] sm:w-[500px] md:w-[280px] rounded-md"
            required
          >
            <option value="Internship">Internship</option>
            <option value="Full Time">Full Time</option>
            <option value="Freelance">Freelance</option>
          </select>
        </fieldset>
        <fieldset className="flex flex-col text-[14px] md:text-[16px]">
          <label className="text-slate-600" htmlFor="Role">
            Role*
          </label>
          <select
            type="text"
            id="Role"
            className="border p-2 h-[35px] md:h-[40px] w-[280px] sm:w-[500px] md:w-[280px] rounded-md"
            required
          >
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
          </select>
        </fieldset>
        <fieldset className="flex flex-col col-start-1 text-[14px] md:text-[16px] md:col-end-3">
          <label className="text-slate-600" htmlFor="Detail">
            Details
          </label>
          <textarea
            id="Detail"
            className="border p-2 h-[200px] sm:h-[200px] w-[280px] sm:w-[500px] md:w-[600px] rounded-md"
          ></textarea>
        </fieldset>
        <button
          type="submit"
          className=" col-start-1 text-[14px] md:text-[16px]  w-[280px] md:w-[600px] h-[40px] rounded-md text-[#1C1259] border border-[#1C1259] hover:text-white hover:bg-[#1C1259]"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;

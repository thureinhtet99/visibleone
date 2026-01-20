function EmailSubscription() {
  return (
    <form method="post">
      <div className="relative flex items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your Email"
          className="pl-10 pr-32 py-4 rounded-4xl bg-white focus:outline-none focus:ring-2 focus:ring-[#FF60E6] text-lg"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-2 bg-[#FF60E6] rounded-3xl text-[#1F392C] font-semibold z-10"
        >
          Join
        </button>
      </div>
    </form>
  );
}

export default EmailSubscription;

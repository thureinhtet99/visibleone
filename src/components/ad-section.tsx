import {
  adLeftHandImageUrl,
  adRightHandImageUrl,
  likeImageUrl,
  vectorEightUrl,
  vectorSevenUrl,
} from "@/assets/imageUrl";

function AdSection() {
  return (
    <section
      className="relative flex items-center justify-between text-[#1F392C] py-12"
      id="hero-section"
    >
      <img
        src={vectorSevenUrl}
        alt="curve-bg"
        className="absolute top-1 left-1 object-cover z-0"
      />
      <img
        src={vectorEightUrl}
        width={300}
        alt="curve-bg"
        className="absolute top-0 right-0 object-cover z-10"
      />

      {/* Left */}
      <div className="relative w-1/4">
        <img
          src={adLeftHandImageUrl}
          alt="ad-left-hand"
          width={250}
          className="absolute bottom-0 left-0 object-cover -rotate-20"
        />

        <img
          src={likeImageUrl}
          alt="like"
          width={200}
          className="absolute -top-15 -right-5 -rotate-10"
        />
      </div>

      {/* Middle */}
      <div className="flex flex-col justify-center items-center gap-y-6 flex-wrap">
        <h3 className="text-6xl text-center max-w-7/12 mx-auto py-12 font-extrabold">
          We do it for you. No more struggling to grow on any Platform
        </h3>
        <p className="flex-wrap text-center max-w-8/12 font-bold text-4xl">
          Work with our expert strategists writers, editors, and producers to
          create content that transforms your content
        </p>
        <p className="text-center leading-relaxed max-w-7/12 flex-wrap text-xl text-[#1F392C] my-6">
          No managing a team of freelancers or spending countless hours trying
          to master all the skill sets Platform requires - all you need is The
          Creator
        </p>
      </div>

      {/* Right */}
      <div className="relative w-1/4">
        <img
          src={likeImageUrl}
          alt="like"
          width={200}
          className="absolute -top-30 right-55 scale-x-[-1] -rotate-10"
        />
        <img
          src={adRightHandImageUrl}
          alt="ad-right-hand"
          className="absolute top-0 right-0 object-cover"
          width={400}
          height={280}
        />
      </div>
    </section>
  );
}

export default AdSection;

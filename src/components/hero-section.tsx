import { leftHandImageUrl, rightHandImageUrl } from "../assets/imageUrl";
import EmailSubscription from "./email-subscription";

function HeroSection() {
  return (
    <section
      className="flex items-center justify-between border"
      id="hero-section"
    >
      {/* Left */}
      <div className="flex items-start justify-start border">
        <img
          src={leftHandImageUrl}
          alt="left-hand"
          width={400}
          height={280}
          className="object-cover"
        />
      </div>

      {/* Middle */}
      <div className="flex flex-col justify-center items-center gap-y-6 border">
        <h1 className="text-center max-w-8/12 text-8xl text-[#1F392C] font-extrabold flex-wrap border">
          Spark your brand's <span>imaginative flair</span> with us
        </h1>
        <p className="text-center max-w-7/12 flex-wrap text-xl text-[#1F392C]">
          Our team combines strategy, design, and technology to breathe life
          into your brand. Collaborate with us to leave a lasting impression on
          your audience.
        </p>
        <EmailSubscription />
      </div>

      {/* Right */}
      <div>
        <img
          src={rightHandImageUrl}
          alt="left-hand"
          width={400}
          height={280}
          className="object-cover border"
        />
      </div>
    </section>
  );
}
export default HeroSection;

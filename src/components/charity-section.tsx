import { Handshake } from "lucide-react";

const charitySectionIcons = [
  { icon: <Handshake size={70} className="text-[#FF60E6]" /> },
  { icon: <Handshake size={70} className="text-[#FF60E6]" /> },
  { icon: <Handshake size={70} className="text-[#FF60E6]" /> },
  { icon: <Handshake size={70} className="text-[#FF60E6]" /> },
  { icon: <Handshake size={70} className="text-[#FF60E6]" /> },
  { icon: <Handshake size={70} className="text-[#FF60E6]" /> },
  { icon: <Handshake size={70} className="text-[#FF60E6]" /> },
  { icon: <Handshake size={70} className="text-[#FF60E6]" /> },
  { icon: <Handshake size={70} className="text-[#FF60E6]" /> },
  { icon: <Handshake size={70} className="text-[#FF60E6]" /> },
];

function CharitySection() {
  return (
    <section
      className="max-w-10/12 mx-auto flex items-center justify-center gap-8 py-12"
      id="charity-section"
    >
      <div className="rounded-xl flex flex-col gap-y-4 py-12 max-w-6/12 bg-[#FF60E6] h-[515px]">
        <div className="grid grid-cols-5 gap-4">
          {charitySectionIcons.map((icon, index) => (
            <div
              key={index}
              className="bg-[#FFADF2] h-30 w-30 flex items-center justify-center rounded-full"
            >
              {icon.icon}
            </div>
          ))}
        </div>
        <p className="text-xl text-[#1F392C] max-w-10/12 flex-wrap px-10 leading-relaxed">
          We've participated in events for children's education, health
          initiatives, and disaster relief. We're dedicated to ongoing
          involvement and exploring new opportunities.
        </p>
      </div>
      <div className="rounded-xl flex flex-col gap-y-4 p-14 max-w-6/12 bg-white h-[515px]">
        <h2 className="font-extrabold text-6xl text-[#1F392C]">Charity</h2>
        <p className="text-xl text-[#1F392C] flex-wrap leading-relaxed max-w-10/12">
          Our creative agency supports charities globally, using our skills in
          branding, marketing, and social media to make a positive impact on
          local communities and raise awareness about important causes.
        </p>
      </div>
    </section>
  );
}

export default CharitySection;

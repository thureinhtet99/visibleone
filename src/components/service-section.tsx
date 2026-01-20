import { serviceData } from "@/data/nav-links";

function ServiceSection() {
  return (
    <section
      className="flex flex-col gap-20 py-12 max-w-8/12 mx-auto text-[#1F392C]"
      id="service-section"
    >
      {serviceData.map((data) => (
        <div
          key={data.id}
          className={`flex items-start px-6
    ${data.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}
  `}
        >
          {/* Text */}
          <div className="w-1/2">
            <h3 className="text-5xl font-bold">
              <span>{data.id}</span># {data.title}
            </h3>
            <p className="max-w-md text-xl my-6 leading-relaxed">{data.desc}</p>
          </div>

          {/* Image */}
          <img
            src={data.image}
            alt={data.title}
            className="w-1/2 object-cover"
          />
        </div>
      ))}
    </section>
  );
}

export default ServiceSection;

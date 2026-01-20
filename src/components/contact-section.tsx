import { vectorFiveUrl, vectorSixUrl } from "@/assets/imageUrl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { contactData } from "@/data/nav-links";

function ContactSection() {
  return (
    <section
      className="relative flex w-full mx-auto flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-[#1F392C] overflow-hidden"
      id="contact-section"
    >
      {/* Background Vector */}
      <img
        src={vectorSixUrl}
        alt="curve-bg"
        className="pointer-events-none select-none absolute -left-5 top-20 sm:top-40 w-1/2 sm:w-2/5 min-w-[200px] sm:min-w-[300px] max-w-[400px] sm:max-w-[600px] z-0 opacity-70"
      />

      {/* Header */}
      <div className="relative z-10 mb-4 md:mb-2 w-full max-w-6xl px-4">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mx-auto py-6 sm:py-8 lg:py-12 font-extrabold leading-tight">
          Contact us today to explore partnership opportunities!
        </h3>
        <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto mt-2 h-2 relative">
          <img
            src={vectorFiveUrl}
            alt="underline"
            className="absolute left-1/2 -translate-x-1/2 sm:-right-12 sm:left-auto sm:translate-x-0 bottom-6 sm:bottom-10 w-full max-w-[250px] sm:max-w-[400px]"
          />
        </div>
      </div>

      {/* Card Section */}
      <div className="z-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl flex flex-col md:flex-row w-full max-w-10/12 sm:p-8 md:py-18 md:px-26 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left - Text Content */}
          <div className="flex-1 w-full md:max-w-md text-left">
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Partners:
            </h4>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#1F392C]">
              Our creative agency forms strong partnerships with diverse
              businesses, from startups to global brands, based on trust,
              respect, and a shared vision for success.
            </p>
          </div>

          {/* Right - Carousel */}
          <div className="flex-1 w-full md:max-w-md lg:max-w-none md:-mr-8 lg:-mr-20 xl:-mr-56">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
                {contactData.map((data, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/2"
                  >
                    <Card
                      className={`h-full ${index % 2 === 0 ? "bg-[#FF60E6]" : "bg-[#FFADF2]"}`}
                    >
                      <CardContent className="flex flex-col px-4 sm:px-5 md:px-6 gap-3 sm:gap-4 h-full">
                        <div className="flex items-center justify-between">
                          <Avatar className="size-10 sm:size-10 md:size-12 shrink-0">
                            <AvatarImage
                              src={data.image}
                              alt={`Partner ${index + 1}`}
                            />
                            <AvatarFallback>{`P${index + 1}`}</AvatarFallback>
                          </Avatar>
                          <h4 className="text-xl font-medium">{data.date}</h4>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-start leading-relaxed">
                          {data.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-8 md:-left-12" />
              <CarouselNext className="hidden sm:flex -right-8 md:-right-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

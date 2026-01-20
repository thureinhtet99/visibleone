import {
  humanImageOneUrl,
  humanImageThreeUrl,
  humanImageTwoUrl,
  vectorOneUrl,
  vectorUrl,
} from "@/assets/imageUrl";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { userData } from "@/data/nav-links";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function ReviewSection() {
  return (
    <section
      className="flex flex-col gap-y-20 max-w-10/12 mx-auto py-12 text-[#1F392C]"
      id="review-section"
    >
      <p className="text-center text-xl">
        Hear from our customers from Top YouTube Channel
      </p>

      <div>
        <div className="flex items-center justify-start gap-x-4">
          <h3 className="text-6xl font-extrabold">We've taught</h3>
          <img
            src={humanImageOneUrl}
            alt="image-1"
            className="size-20 rounded-2xl"
          />
          <h3 className="text-6xl font-extrabold">over 3,000 creators</h3>
        </div>
        <div className="flex items-center justify-start gap-x-4">
          <h3 className="text-6xl font-extrabold">how to</h3>
          <img
            src={humanImageTwoUrl}
            alt="image-2"
            className="size-20 rounded-2xl"
          />
          <div className="relative flex items-center">
            <img
              src={vectorUrl}
              alt="vector"
              className="relative z-0"
              width={600}
            />
            <h3 className="text-6xl font-extrabold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap">
              grow on any Platform
            </h3>
          </div>
          <img
            src={humanImageThreeUrl}
            alt="image-3"
            className="size-20 rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col ">
        <h3 className="text-6xl text-start font-extrabold">
          Now we can do it for you
        </h3>
        <div className="max-w-5/12 flex items-center justify-center">
          <img src={vectorOneUrl} alt="vector-1" />
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full flex flex-col gap-y-16 "
      >
        <div className="flex items-center">
          <p className="flex-wrap max-w-4/12 font-bold text-4xl">
            See what our famous clients write about us:
          </p>
          <div className="flex items-center">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent>
          {userData.map((data, index) => (
            <CarouselItem key={data.id} className="md:basis-1/2 lg:basis-1/3">
              <Card
                className={`${index % 2 === 0 ? "bg-[#FFADF2]" : "bg-[#FF60E6]"}`}
              >
                <CardContent className="flex flex-col gap-y-4 px-10 text-[#1F392C]">
                  <Avatar className="size-20">
                    <AvatarImage src={data.image} alt={data.name} />
                    <AvatarFallback>{data.name}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-3xl font-medium">{data.name}</h3>
                  <p className="text-xl flex-wrap leading-relaxed">
                    {data.desc}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default ReviewSection;

import { illustrationUrl, youtubeImageUrl } from "@/assets/imageUrl";

function IllustrationSection() {
  return (
    <section
      className="flex flex-col items-center justify-center py-12 text-[#1F392C]"
      id="illustration-section"
    >
      <h3 className="text-6xl text-center max-w-6/12 mx-auto py-12 font-extrabold">
        Making it big on any Platform is tougher than you think
      </h3>
      <div className="relative">
        <img src={illustrationUrl} alt="illustration" />
        <img
          src={youtubeImageUrl}
          alt="youtube"
          className="size-40 absolute top-10 right-40 rotate-30"
        />
      </div>
    </section>
  );
}
export default IllustrationSection;

import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="mx-auto container min-h-screen pt-20">
      <div className="hero-content flex-col justify-between  lg:flex-row-reverse gap-6">
        <img src={bannerImg} alt="banner-img" />
        <div className="">
          <span className="bg-purple-200 px-3 py-2 rounded-4xl text-purple-700 ">
            <i class="fa-regular fa-circle-dot"></i> New: AI-Powered Tools
            Available
          </span>
          <h1 className="text-5xl font-bold my-4">
            Supercharge Your <br className="hidden md:block" /> Digital Workflow
          </h1>
          <p className="mb-6 text-[#627382] text-lg">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
    <a className="btn bg-gradient text-white rounded-4xl mr-2">Explore Products</a>
    <a className="btn border-purple-700 text-purple-700 rounded-4xl"><i class="fa-solid fa-play"></i> Watch Demo</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

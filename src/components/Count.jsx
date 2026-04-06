const Count = () => {
  return (
    <div className="bg-gradient py-14">
      <div className="flex justify-center gap-0 md:gap-20 text-center flex-col md:flex-row">
        <div className="border-none md:border-r-2 border-white pr-0 md:pr-0">
          <h3 className="text-white text-6xl font-extrabold">50k</h3>
          <p className="text-white font-medium mt-2">Active User's</p>
        </div>
        <div className="my-4 md:my-0 border-none md:border-r-2 border-white pr-0 md:pr-16">
          <h3 className="text-white text-6xl font-extrabold">200+</h3>
          <p className="text-white font-medium mt-2">Premium Tools</p>
        </div>
        <div className="">
          <h3 className="text-white text-6xl font-extrabold">4.9</h3>
          <p className="text-white font-medium mt-2">Ratings</p>
        </div>
      </div>
    </div>
  );
};

export default Count;

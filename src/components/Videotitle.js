
const Videotitle = ({title,overview,rating}) => {
  return (
    <div className="absolute pt-64 w-full aspect-video  bg-gradient-to-t from-black text-gray-100">
        <h1 className="text-4xl px-10 font-semibold ">{title}</h1>
        <p className="text-lg px-10 pt-5  text-wrap w-[700px]">{overview}</p>
        <p className="text-lg px-10 pt-2 ">★{rating}</p>
        <div className="text-xl px-5 pt-4 flex mx-1 text-black">
        <button className="rounded-md bg-gray-400 w-32 p-4 m-4">  ▶Play</button>
        <button className="rounded-md bg-gray-400 p-4 m-4">More Info</button>
        </div>
    </div>
  );
};

export default Videotitle;

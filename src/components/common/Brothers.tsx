export default function Brothers() {
  return (
    <div className="flex justify-center">
      <div className="relative w-[300px] ">
        <div className="absolute bg-black text-white p-3 w-20 h-20 rounded-full -bottom-2 left-3">
          <p>Just</p>
          <p className="font-bold text-xl ml-2">$23</p>
        </div>
        <img
          src="/images/brothers.png"
          className="rounded-full w-[300px] h-[300px]"
          alt="Brothers"
        />
        <div className="absolute bg-[#FC5130] text-white text-left w-[120px] h-[120px] rounded-full -right-8 -top-5 flex flex-col items-center justify-center">
          <div className="ml-3">
            <p>Up to</p>
            <p className="font-bold text-2xl ml-2">100 MB</p>
            <p>per second</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Brothers() {
  return (
    <div className="flex justify-center">
      <div className="relative w-[300px] ">
        <div className="absolute bg-black text-white p-3 w-20 h-20 rounded-full -bottom-2 left-3">
          <p className="text-sm">Just</p>
          <p className="font-bold text-xl ml-2">$23</p>
        </div>
        <img
          src="/images/brothers.png"
          className="rounded-full w-[300px] h-[300px]"
          alt="Brothers"
        />
        <div className="absolute bg-[#FC5130] text-white text-left w-[110px] h-[110px] rounded-full -right-3 -top-5 flex flex-col items-center justify-center">
          <div className="ml-3">
            <p className="text-sm">Up to</p>
            <p className="font-bold text-xl ml-2">100 MB</p>
            <p className="text-sm">per second</p>
          </div>
        </div>
      </div>
    </div>
  );
}

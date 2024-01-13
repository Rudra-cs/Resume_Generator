const Header = () => {
  const colors = ["3b82f6", "22c55e", "6b7280", "ef4444", "f97316"];

  return (
    <div>
      <div className="text-3xl font-semibold flex justify-center items-center mt-8">
        CV Generator
      </div>
      <div className="flex m-4 justify-between ">
        <div className="flex">
          {colors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: `#${color}` }}
              className={`h-10 w-10 rounded-full cursor-pointer mx-2`}
            ></div>
          ))}
        </div>
        <div>
          <button
            className="p-3 w-50 text-sm font-semibold cursor-pointer border rounded-md focus:outline-none hover:bg-red-600 focus:border-red-500 bg-red-500 text-white tracking-widest"
            type="button"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

/* eslint-disable react/prop-types */
function InputControl({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-weight-500 text-base">{label}</label>}
      <input
        type="text"
        className="border border-gray-300 outline-none px-4 py-2 text-base rounded focus:border-blue-500 transition-all"
        {...props}
      />
    </div>
  );
}

export default InputControl;

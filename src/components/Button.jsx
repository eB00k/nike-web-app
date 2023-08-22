const Button = ({ label, iconURL, type }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-6 py-3 border font-montserrat text-lg leading-none ${
        type === "secondary"
          ? "bg-transparent text-slate-gray border-2"
          : "bg-coral-red text-white"
      } rounded-full  w-max`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt={label} className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;

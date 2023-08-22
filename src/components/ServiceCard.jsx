const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-col flex-1 px-10 py-16 shadow-3xl rounded-[20px] gap-4 sm:w-[350px] sm:min-w-[350px] w-full">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>

      <h3 className="text-3xl font-bold leading-normal">{label}</h3>
      <p className="text-lg break-words font-montserrat leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;

const Card = ({ title, text, color, img, id }) => {
  return (
    <div
      style={{
        borderRadius: "8px",
        background: "#FFF",
        boxShadow: "0px 15px 30px -11px rgba(131, 166, 210, 0.50)",
        borderColor: `${color}`,
      }}
      className={`bg-white w-[311px] h-[222px] border-t-4 p-7 flex flex-col card-${id} lg:hover:scale-110 duration-300`}
    >
      <h2 className="text-[20px] font-bold text-[#4D4F62]">{title}</h2>
      <p className="text-[#4D4F62] mb-[25px]">{text}</p>
      <img src={img} alt="icon" className="self-end"></img>
    </div>
  );
};

export default Card;

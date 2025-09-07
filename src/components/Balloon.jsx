export const Balloon = ({ num, maincolor }) => {
  return (
    <div className=" flex flex-col justify-center items-center " style={{position: absolute }}>
      <div
        className="rounded-[50%] w-[100px] h-[140px] flex flex-col justify-center items-center"
        style={{ backgroundColor: maincolor }}
      >
        <p className="">{num}</p>
      </div>
      <div
        className="w-[10px] h-[10px] "
        style={{ backgroundColor: maincolor }}
      ></div>
      <div className="bg-white w-[1px] h-[]20px"></div>
    </div>
  );
};

import React from "react";
const list = ["IDEATE", "VALIDATE", "DESGIN", "BUILD", "SPINOUT", "SCALE"];
const colorleft = [
    "#FFAE00",
    "#57BE94",
    "#4F66AF",
    "#FFAE00",
    "#57BE94",
    "#4F66AF",
  ];
function StepsLeftCounter({index1}) {
  return (
    <div className="absolute text-left text-[#A7A9B1] space-y-10 text-3xl">
      {index1}
      {list.map((item, index2) => (
        <div className="hidden lg:flex">
          <div
            className={index2 == index1 ? "w-3 mr-5" : "hidden"}
            style={{ backgroundColor: colorleft[index2] }}
          ></div>
          <p
            className={
              index2 == index1 ? "text-white text-5xl font-bold mr-2" : "hidden"
            }
          >
            0{index2 + 1}.{" "}
          </p>
          <p
            className={
              index2 == index1
                ? "text-white text-5xl font-bold"
                : "text-gray-300"
            }
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StepsLeftCounter;

import { Balloon } from "@/components/Balloon";
const colors = [
  { maincolor: "PaleVioletRed" },
  { maincolor: "cadetblue" },
  { maincolor: "cornflowerblue" },
  { maincolor: "darkcyan" },
  { maincolor: "darkseagreen" },
  { maincolor: "slateblue" },
  { maincolor: "rosybrown" },
  { maincolor: "lightblue" },
  { maincolor: "orchid" },
  { maincolor: "plum" },
  { maincolor: "pink" },
  { maincolor: "purple" },
  { maincolor: "thistle" },
];
const left =Math.floor( Math.random()*1100)
const top = Math.floor( Math.random()*1000)

export default function Home() {
  return (
    <div className="flex realtive">
      {colors.map((color, index) => (
        <Balloon
          key={index + Math.random()}
          num={index + 1}
          maincolor={color.maincolor}
        />
      ))}
    </div>
  );
}

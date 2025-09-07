import { Balloons } from "@/components/Balloon";
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
const BalloonPosleft =Math.floor( Math.random()*500)
const BalloonPostop = Math.floor( Math.random()*700)

export default function Home() {
  return (
    <div className="flex realtive">
      {colors.map((color, index) => (
        <Balloons
        top = {BalloonPostop}
        left = {BalloonPosleft}
          key={index + Math.random()}
          num={index + 1}
          maincolor={color.maincolor}
        />
      ))}
    </div>
  );
}

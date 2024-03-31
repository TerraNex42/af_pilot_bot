import * as React from "react";
import PlaneIcon from "@/components/ui/planeicon";
import useAircraftStore from "./store/aircraftStore";

function Radar(props: React.SVGProps<SVGSVGElement>) {
  const flightList = useAircraftStore((state) => state.aircraft);
  const setToggle = useAircraftStore((state) => state.toggleState);
  return (
    <svg
      width={300}
      height={300}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={150} cy={150} r={150} fill="red" />
      <circle cx={150} cy={150} r={125} fill="orange" />
      <circle cx={150} cy={150} r={100} fill="green" />
      <circle cx={150} cy={150} r={75} fill="pink" />
      <circle cx={150} cy={150} r={50} fill="blue" />
      <circle cx={150} cy={150} r={25} fill="green" />
      <path stroke="#fff" strokeWidth={2} d="M150 0v140" />
      <g transform="translate(-1,10)">
        <path
          d="M160.163 143.961l-7.071-4.526v-4.95c0-2.121-1.061-3.889-2.121-4.242-1.061.353-2.122 2.121-2.122 4.242v4.95l-7.071 4.526c-.424.282-.565.707-.424 1.131l.141.566c.213.495.637.777 1.132.707l6.222-1.273.707 3.535-2.121 2.122v1.414l3.536-.707 3.535.707v-1.414l-2.121-2.122.707-3.535 6.222 1.273c.495.07.92-.212 1.132-.707l.212-.495c.071-.495-.071-.92-.495-1.202z"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {flightList.slice(1).map((el, i) => (
        <g
          key={i}
          transform={`translate(${el.positionRadar.x},${el.positionRadar.y})`}
          onClick={() => setToggle(el.id)}
        >
          <PlaneIcon variant={"minus"} color="blue" />
        </g>
      ))}
    </svg>
  );
}

export default Radar;

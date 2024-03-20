import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactPropTypes } from "react";
import  useAircraftStore  from "./store/aircraftStore";


export default function List() {
  const flights = useAircraftStore((state) => state.aircraft)
  console.log(flights);
  console.log(flights[0]?.callsign);
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          {flights[0]?.callsign}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

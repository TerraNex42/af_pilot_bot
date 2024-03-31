import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactPropTypes } from "react";
import useAircraftStore from "./store/aircraftStore";
import { cn } from "@/lib/utils";

export default function List() {
  const flights = useAircraftStore((state) => state.aircraft);
  const toggleItem = useAircraftStore((state) => state.toggletItem);
  const setToggle = useAircraftStore((state) => state.toggleState);
  console.log(flights);

  return (
    <Accordion
      type="single"
      collapsible
      onValueChange={(value) => setToggle(value)}
      value={toggleItem}
      className="bg-slate-200 p-2"
    >
      {flights.map((aircraft, index) => (
        <AccordionItem
          key={index}
          value={`${aircraft.id}`}
          className={cn(
            aircraft.id === toggleItem ? "bg-slate-200" : "bg-slate-400",
            "p-1",
            "m-2",
            "transition-colors",
            "duration-300",
            "ease-in-ou"
          )}
        >
          <AccordionTrigger>{aircraft.callsign}</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableBody >
                <TableRow className="bg-slate-50" >
                  <TableCell className="font-medium">Aircraft Type</TableCell>
                  <TableCell className="text-right">
                    {aircraft.aircraftType}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-slate-50">
                  <TableCell className="font-medium">Origin</TableCell>
                  <TableCell className="text-right">
                    {aircraft.origin}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-slate-50">
                  <TableCell className="font-medium">Destination</TableCell>
                  <TableCell className="text-right">
                    {aircraft.destination}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-slate-50">
                  <TableCell className="font-medium">Speed</TableCell>
                  <TableCell className="text-right">{aircraft.speed}</TableCell>
                </TableRow>
                <TableRow className="bg-slate-50">
                  <TableCell className="font-medium">Altitude</TableCell>
                  <TableCell className="text-right">
                    {aircraft.altitude}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-slate-50">
                  <TableCell className="font-medium">Heading</TableCell>
                  <TableCell className="text-right">
                    {aircraft.heading}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

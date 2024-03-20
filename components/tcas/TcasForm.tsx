"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "../ui/slider";
import { Badge } from "../ui/badge";
import { useContext, useState } from "react";

import tcas from "@/components/tcas/action/tcas";
import { Flight } from "@/types/flightradarapi";
import useAircraftStore, { SetAircraftType } from "./store/aircraftStore";

const formSchema = z.object({
  callsign: z.string().min(4, {
    message: "Callsign should have the next form XXXZZZ(ZZ)",
  }),
  range: z.number().safe().min(5).max(30),
});

const FlightSchema = z.object({
  callsign: z.string(),
  aircraftType: z.string(),
  origin: z.string(),
  destination: z.string(),
  altitude: z.string(),
  heading: z.number(),
});

export default function TcasSearch() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      callsign: "",
      range: 20,
    },
  });
  const setAircraft = useAircraftStore((state) => state.addAircraft);
  const resetAircraft = useAircraftStore((state) => state.reset);
  const [rangeDisplay, setRangeDisplay] = useState(form.getValues("range"));

//FIXME This code is digisting. Improve the catch of error

  const onAction = async (data: z.infer<typeof formSchema>) => {
    resetAircraft();
    const res = await tcas(data);
    console.log(res);
    if (typeof res === "undefined") return;
    const jsonRes = JSON.parse(res)
    if (jsonRes.message) {
      return jsonRes.message
    }
    if (jsonRes.lenght != 0) {
      jsonRes.forEach((el: z.infer<typeof FlightSchema>) => setAircraft(el))
    }
  }

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onAction)}
          className="space-y-8 grid grid-flow-row"
        >
          <FormField
            control={form.control}
            name="callsign"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-2">
                  <FormLabel>Callsign</FormLabel>
                  <FormControl>
                    <Input placeholder="AFR007..." {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="range"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-2">
                  <FormLabel>Range</FormLabel>
                  <FormControl>
                    <Slider
                      defaultValue={[field.value]}
                      onChange={field.onChange}
                      onValueChange={(value) => setRangeDisplay(value[0])}
                      max={30}
                      min={5}
                      step={1}
                    />
                  </FormControl>
                  <Badge variant={"outline"}>{rangeDisplay}</Badge>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="place-self-end" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    );
  };

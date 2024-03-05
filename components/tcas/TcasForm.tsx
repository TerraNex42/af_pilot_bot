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
import { useState } from "react";
type SliderProps = React.ComponentProps<typeof Slider>;

const formSchema = z.object({
  callsign: z.string().min(4, {
    message: "Callsign should have the next form XXXZZZ(ZZ)",
  }),
  range: z.number().safe().min(5).max(30),
});

export default function TcasSearch() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      callsign: "",
      range: 20,
    },
  });

  const [rangeDisplay, setRangeDisplay] = useState(form.getValues("range"));

  return (
    <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 grid grid-flow-row">
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
        <Button className="place-self-end" type="submit" >Submit</Button>
      </form>
    </Form>
  );

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
}

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
type SliderProps = React.ComponentProps<typeof Slider>

const formSchema = z.object({
  callsign: z.string().min(4, {
    message: "Callsign should have the next form XXXZZZ(ZZ)",
  }),
  range: z.number().safe().min(5).max(30)
});

export default function TcasSearch() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      callsign: "",
      range:
    },
  });
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="callsign"
            render={({ field }) => (
              <FormItem>
                <FormDescription>
                  Entrez un callsign valide que vous souhaitez chercher
                </FormDescription>
                <FormLabel>Callsign</FormLabel>
                <FormControl>
                  <Input placeholder="AFR007..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="range"
            render={({ field }) => (
              <FormItem>
                <FormDescription>
                  Entrez un callsign valide que vous souhaitez chercher
                </FormDescription>
                <FormLabel>Callsign</FormLabel>
                <FormControl>
                  <Slider defaultValue={}/>
                  
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
}

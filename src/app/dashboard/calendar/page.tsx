"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([])

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
 
  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={ (date) => date.getDay() === 0 || date.getDay() === 6 }
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={ (date) => date < new Date() }
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border"
      />

      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p className="mt-2">{smallDate}</p>
        <p className="mt-2">
          {multipleDates?.map((date) => date.toLocaleDateString("es-ES")).join(", ")}
        </p>
      </div>

    </div>
  )
}

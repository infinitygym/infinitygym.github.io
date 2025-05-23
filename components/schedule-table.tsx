import { Calendar } from "lucide-react"

export function ScheduleTable() {
  const schedule = [
    {
      day: "Monday",
      classes: [
        { time: "17:30-18:30", name: "Children's Karate Class" },
        { time: "18:30-19:30", name: "Pilates Mat" },
        { time: "19:30-20:30", name: "Pilates Mat" },
        { time: "20:00-21:00", name: "Fight Aerobic" },
        { time: "20:30-22:00", name: "Capoeira" },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { time: "10:30-11:30", name: "Pilates Mat" },
        { time: "18:00-19:00", name: "CFT" },
        { time: "19:30-20:50", name: "Kyokushin Karate" },
        { time: "20:00-21:00", name: "Functional Training" },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { time: "17:30-18:30", name: "Children's Karate Class" },
        { time: "18:00-19:00", name: "Pilates Mat" },
        { time: "19:00-20:00", name: "Pilates Mat" },
        { time: "19:00-20:00", name: "Abs & Hips" },
        { time: "20:00-21:00", name: "Fight Aerobic" },
        { time: "20:10-22:00", name: "Capoeira" },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { time: "10:30-11:30", name: "Pilates Mat" },
        { time: "18:00-19:00", name: "Fight Aerobic" },
        { time: "19:30-20:50", name: "Kyokushin Karate" },
        { time: "20:00-21:00", name: "Functional Training" },
      ],
    },
    {
      day: "Friday",
      classes: [
        { time: "16:00-17:00", name: "Pilates Mat" },
        { time: "17:30-18:30", name: "Children's Karate Class" },
        { time: "18:00-19:00", name: "CFT" },
        { time: "18:30-19:30", name: "Abs & Hips" },
        { time: "19:20-20:50", name: "Kyokushin Karate" },
      ],
    },
    {
      day: "Saturday",
      classes: [
        { time: "10:00-11:00", name: "CFT" },
        { time: "11:40-13:00", name: "Martial Arts Strength & Conditioning" },
      ],
    },
  ]

  // Function to determine class color based on name
  const getClassColor = (className: string) => {
    switch (className) {
      case "Kyokushin Karate":
      case "Children's Karate Class":
      case "Martial Arts Strength & Conditioning":
        return "bg-zinc-800 border-zinc-700"
      case "Pilates Mat":
        return "bg-zinc-800 border-zinc-700"
      case "Fight Aerobic":
        return "bg-zinc-800 border-zinc-700"
      case "CFT":
        return "bg-zinc-800 border-zinc-700"
      case "Capoeira":
        return "bg-zinc-800 border-zinc-700"
      case "Abs & Hips":
        return "bg-zinc-800 border-zinc-700"
      case "Functional Training":
        return "bg-zinc-800 border-zinc-700"
      default:
        return "bg-zinc-800 border-zinc-700"
    }
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-6 gap-2">
          {schedule.map((day, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-primary text-black font-bold p-3 text-center rounded-t-md">{day.day}</div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-b-md p-2 h-full">
                {day.classes.map((cls, idx) => (
                  <div
                    key={idx}
                    className={`${getClassColor(
                      cls.name,
                    )} p-3 mb-2 rounded-md border hover:border-primary transition-colors`}
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                      <Calendar className="h-3 w-3 text-primary" />
                      {cls.time}
                    </div>
                    <div className="font-medium text-primary">{cls.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

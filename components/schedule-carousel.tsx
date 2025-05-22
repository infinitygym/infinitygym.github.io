"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const schedules = [
  {
    id: 1,
    title: "Cross Training Schedule",
    image: "/images/schedule-cross-training.png",
    alt: "Cross Training weekly schedule",
  },
  {
    id: 2,
    title: "Class Schedule",
    image: "/images/schedule-classes.png",
    alt: "Weekly class schedule",
  },
]

export function ScheduleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMobile()
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? schedules.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === schedules.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrevious()
    }
  }

  return (
    <div className="relative w-full mx-auto">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-primary">{schedules[currentIndex].title}</h3>
      </div>

      <div
        className="relative overflow-hidden rounded-lg bg-black"
        style={{
          height: isMobile ? "400px" : "650px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={schedules[currentIndex].image || "/placeholder.svg"}
          alt={schedules[currentIndex].alt}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>

      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className={`${isMobile ? "h-10 w-10" : "h-14 w-14"} rounded-full bg-black/70 border-primary text-primary hover:bg-black/90`}
          onClick={goToPrevious}
          aria-label="Previous schedule"
        >
          <ChevronLeft className={isMobile ? "h-5 w-5" : "h-7 w-7"} />
        </Button>
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className={`${isMobile ? "h-10 w-10" : "h-14 w-14"} rounded-full bg-black/70 border-primary text-primary hover:bg-black/90`}
          onClick={goToNext}
          aria-label="Next schedule"
        >
          <ChevronRight className={isMobile ? "h-5 w-5" : "h-7 w-7"} />
        </Button>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {schedules.map((schedule, slideIndex) => (
          <button
            key={schedule.id}
            onClick={() => goToSlide(slideIndex)}
            className={`h-4 w-4 rounded-full ${currentIndex === slideIndex ? "bg-primary" : "bg-zinc-600"}`}
            aria-label={`Go to ${schedule.title}`}
          />
        ))}
      </div>

      <div className="text-center mt-3 text-sm text-gray-400">
        <p>Swipe or use arrows to view all schedules</p>
      </div>
    </div>
  )
}

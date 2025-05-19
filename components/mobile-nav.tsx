"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-white">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Image
                  src="/images/infinity-logo.png"
                  alt="Infinity Gym"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-primary">Infinity Fitness Center</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="#about"
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-zinc-800"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#disciplines"
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-zinc-800"
                onClick={() => setIsOpen(false)}
              >
                Disciplines
              </Link>
              <Link
                href="#schedule"
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-zinc-800"
                onClick={() => setIsOpen(false)}
              >
                Schedule
              </Link>
              <Link
                href="#trainers"
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-zinc-800"
                onClick={() => setIsOpen(false)}
              >
                Trainers
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium text-white hover:text-primary transition-colors py-2 border-b border-zinc-800"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="mt-auto p-4">
              <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold" asChild>
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Join Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

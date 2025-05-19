import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/infinity-logo.png"
            alt="Infinity Gym"
            width={500}
            height={500}
            className="opacity-20 object-contain"
          />
        </div>
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center text-white">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/infinity-logo.png"
              alt="Infinity Gym"
              width={180}
              height={180}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-primary">INFINITY</span> FITNESS CENTER
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl mx-auto mb-8">
            <span className="text-primary font-bold">COMBAT ZONE</span>
            <br />
            Discover your potential at Heraklion's premier fitness center.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-primary text-black hover:bg-primary/90 font-bold">
              <Link href="#disciplines">
                Explore Our Disciplines
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary/10 font-bold"
            >
              <Link href="#contact">Join Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

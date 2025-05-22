import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image src="/images/infinity-logo.png" alt="Infinity Gym" width={50} height={50} className="rounded-full" />
            <span className="text-xl font-bold text-primary">Infinity Fitness Center</span>
          </Link>
          <p className="text-gray-400 mb-4">
            Heraklion's premier fitness center offering a diverse range of disciplines to help you achieve your fitness
            goals.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/infinity.fit.center" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-primary hover:text-primary/90 hover:bg-zinc-800"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </a>
            <a href="https://www.instagram.com/infinity.fit.center/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-primary hover:text-primary/90 hover:bg-zinc-800"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#about" className="text-gray-400 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="#schedule" className="text-gray-400 hover:text-primary transition-colors">
              Class Schedule
            </Link>
            <Link href="#trainers" className="text-gray-400 hover:text-primary transition-colors">
              Our Trainers
            </Link>
            <Link href="#disciplines" className="text-gray-400 hover:text-primary transition-colors">
              Disciplines
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Disciplines</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#disciplines" className="text-gray-400 hover:text-primary transition-colors">
              Pilates Mat
            </Link>
            <Link href="#disciplines" className="text-gray-400 hover:text-primary transition-colors">
              Fight Aerobic
            </Link>
            <Link href="#disciplines" className="text-gray-400 hover:text-primary transition-colors">
              Kyokushin Karate
            </Link>
            <Link href="#disciplines" className="text-gray-400 hover:text-primary transition-colors">
              Capoeira
            </Link>
            <Link href="#disciplines" className="text-gray-400 hover:text-primary transition-colors">
              CFT
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-gray-400">11 Therisou, Heraklion, Crete, Greece</span>
            </div>
            <div className="flex items-start gap-3">
              <Smartphone className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-gray-400">+30 6940383524</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-gray-400">+30 2811 114030</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-gray-400">infinity.fit.center@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-zinc-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Infinity Fitness Center & Combat Zone. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

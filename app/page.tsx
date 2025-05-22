import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Users, Facebook, Instagram, Phone, Smartphone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { DisciplineCard } from "@/components/discipline-card"
import { TrainerCard } from "@/components/trainer-card"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"
import { ScheduleCarousel } from "@/components/schedule-carousel"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/infinity-logo.png" alt="Infinity Gym" width={40} height={40} className="rounded-full" />
            <span className="hidden sm:inline-block text-xl font-bold text-primary">Infinity Fitness Center</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium text-white hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#schedule" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Schedule
            </Link>
            <Link href="#trainers" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Trainers
            </Link>
            <Link href="#disciplines" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Disciplines
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold hidden sm:flex" asChild>
              <Link href="#contact">Join Now</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section id="about" className="py-16 md:py-24 container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">About Infinity Fitness Center</h2>
              <p className="text-gray-300 mb-4">
                Welcome to Infinity Fitness Center & Combat Zone, Heraklion's premier fitness center offering a diverse
                range of disciplines to help you achieve your fitness goals. Our modern facility is equipped with
                state-of-the-art equipment and staffed by certified trainers dedicated to your success.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you're a beginner or an experienced athlete, our inclusive environment ensures everyone feels
                welcome and supported on their fitness journey.
              </p>
              <div className="flex flex-col gap-4">
                <Button asChild className="bg-primary text-black hover:bg-primary/90 font-bold w-full sm:w-auto">
                  <Link href="#schedule">
                    View Class Schedule
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="flex flex-row gap-4 w-full">
                  <Button
                    variant="outline"
                    asChild
                    className="border-primary text-primary hover:bg-zinc-800 bg-zinc-900 font-bold flex-1"
                  >
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                  <div className="flex gap-2">
                    <a href="https://www.instagram.com/infinity.fit.center/" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-md border-primary text-primary hover:bg-zinc-800 bg-zinc-900"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                    <a href="https://www.facebook.com/infinity.fit.center" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-md border-primary text-primary hover:bg-zinc-800 bg-zinc-900"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="/images/infinity-logo.png" alt="Infinity Gym logo" fill className="object-contain p-8" />
            </div>
          </div>
        </section>

        <section id="schedule" className="py-16 md:py-24 bg-black text-white">
          <div className="container px-2 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Class Schedule</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Find the perfect time for your workout with our flexible schedule. Classes run throughout the week to
                accommodate your busy lifestyle.
              </p>
            </div>

            <ScheduleCarousel />

            <p className="text-center text-sm text-gray-400 italic mt-6">
              Please note that minor changes to the schedule may occur occasionally. Contact us for the most up-to-date
              information.
            </p>

            <div className="mt-8 text-center">
              <Button className="bg-primary text-black hover:bg-primary/90 font-bold" asChild>
                <Link href="#contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Make a Question
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="trainers" className="py-16 md:py-24 container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Expert Trainers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet our team of certified professionals dedicated to helping you achieve your fitness goals.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            <div className="w-full max-w-xs">
              <TrainerCard
                name="Michalis Sifakis"
                role="Fitness Coach (BSc, Physical Education & Sport Science) & Karate Instructor"
                image="/placeholder.svg?height=400&width=400"
                link="https://www.instagram.com/michalissifakis/"
                linkfb="https://www.facebook.com/profile.php?id=100001352693049"
              />
            </div>
            <div className="w-full max-w-xs">
              <TrainerCard
                name="Eirini Antonakaki"
                role="Fitness and Pilates Instructor"
                image="/placeholder.svg?height=400&width=400"
                link="https://www.instagram.com/rena_ant/"
                linkfb="https://www.facebook.com/antonakaki.rena"
              />
            </div>
          </div>
        </section>

        <section id="disciplines" className="py-16 md:py-24 bg-black text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Disciplines</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Discover our wide range of fitness disciplines designed to challenge and inspire you. Each program is
                led by expert trainers who are passionate about helping you reach your potential.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <DisciplineCard
                title="Pilates Mat"
                description="Improve flexibility, build strength and develop control and endurance in the entire body with our Pilates classes."
                icon="/images/pilates-mat.png"
              />
              <DisciplineCard
                title="Fight Aerobic"
                description="High-intensity cardio workout that combines martial arts techniques with fast-paced aerobic exercise."
                icon="/images/fight-aerobic.png"
              />
              <DisciplineCard
                title="CFT"
                description="Cross Functional Training focuses on movements that prepare the body for real-life activities."
                icon="/images/cft.png"
              />
              <DisciplineCard
                title="Kyokushin Karate"
                description="A traditional Japanese full-contact karate style that emphasizes realistic combat, physical toughness, and discipline."
                icon="/images/kyokushin-karate.png"
              />
              <DisciplineCard
                title="Children's Karate Class"
                description="Specially designed karate classes for children that focus on discipline, respect, and basic martial arts techniques in a fun environment."
                icon="/images/childrens-karate-class.png"
              />
              <DisciplineCard
                title="Capoeira"
                description="A Brazilian martial art that combines elements of dance, acrobatics, and music for a unique full-body workout."
                icon="/images/capoeira.png"
              />
              <DisciplineCard
                title="Cross Training"
                description="Targeted workout focusing on strengthening and toning your core, abdominal muscles, and hip area."
                icon="/images/abs-and-hips.png"
              />
              <DisciplineCard
                title="Functional Training"
                description="Exercise that trains your muscles for everyday activities, focusing on movement patterns rather than isolating muscles."
                icon="/images/functional-training.png"
              />
              <DisciplineCard
                title="Martial Arts Strength & Conditioning"
                description="Specialized training that builds the strength, power, and endurance needed for martial arts performance."
                icon="/images/martial-arts-conditioning.png"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                Ready to start your fitness journey? Contact us today to learn more about our programs or to schedule a
                visit to our facility.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-300">11 Therisou, Heraklion, Crete, Greece</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 16:00 - 22:00</p>
                    <p className="text-gray-300">Saturday: 10:00 - 13:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Contact</h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Smartphone className="h-4 w-4 text-primary" />
                      <span>Mobile: +30 6940383524</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>Landline: +30 2811 114030</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>Email: infinity.fit.center@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.3633302401474!2d25.1271899!3d35.3358333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5987b5555555%3A0x6f8b3f7fd5bf7777!2sTherisou%2011%2C%20Heraklion%2C%20Greece!5e0!3m2!1sen!2sus!4v1716073800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Infinity Gym location"
                ></iframe>
              </div>
            </div>

            <div className="bg-zinc-900 text-white p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 text-primary">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="interest"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a discipline</option>
                    <option value="pilates">Pilates Mat</option>
                    <option value="fight-aerobic">Fight Aerobic</option>
                    <option value="cft">CFT</option>
                    <option value="karate">Kyokushin Karate</option>
                    <option value="children-karate">Children's Karate</option>
                    <option value="capoeira">Capoeira</option>
                    <option value="abs-hips">Cross Training</option>
                    <option value="functional">Functional Training</option>
                    <option value="martial-arts-conditioning">Martial Arts Strength & Conditioning</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your message"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

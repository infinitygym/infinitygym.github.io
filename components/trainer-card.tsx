import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin } from "lucide-react"

interface TrainerCardProps {
  name: string
  role: string
  image: string
}

export function TrainerCard({ name, role, image }: TrainerCardProps) {
  return (
    <Card className="overflow-hidden bg-zinc-900 border-zinc-800 text-white">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg text-primary">{name}</CardTitle>
        <CardDescription className="text-gray-300">{role}</CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-0 flex justify-start gap-2">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full text-primary hover:text-primary/90 hover:bg-zinc-800"
        >
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Facebook</span>
        </Button>
        </a>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full text-primary hover:text-primary/90 hover:bg-zinc-800"
        >
          <Instagram className="h-4 w-4" />
          <span className="sr-only">Instagram</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full text-primary hover:text-primary/90 hover:bg-zinc-800"
        >
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

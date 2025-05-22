import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface DisciplineCardProps {
  title: string
  description: string
  icon: string
  featured?: boolean
}

export function DisciplineCard({ title, description, icon, featured = false }: DisciplineCardProps) {
  return (
    <Card className={`overflow-hidden bg-zinc-900 border-zinc-800 text-white ${featured ? "ring-2 ring-primary" : ""}`}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={icon || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-300">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="gap-1 text-primary hover:text-primary/90 hover:bg-zinc-800"
        >
          <Link href="#schedule">
            View Schedule
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

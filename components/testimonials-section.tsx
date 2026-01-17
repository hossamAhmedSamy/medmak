"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    image: "/professional-woman-portrait.png",
    quote:
  "Medmak Interiors transformed our house into a dream home. Their attention to detail and understanding of our vision was exceptional. We couldn't be happier with the results.",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    image: "/professional-man-portrait.png",
    quote:
      "The team designed our new office space, and it has completely changed how our team works. The environment is inspiring and functional. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Hotel Manager",
    image: "/elegant-professional-woman.png",
    quote:
  "Working with Medmak on our boutique hotel renovation was a pleasure. They understood the hospitality industry and created spaces our guests absolutely love.",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">What Our Clients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-lg border">
            <Quote className="absolute top-8 left-8 text-primary/20" size={48} />

            <div className="text-center">
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed relative z-10">
                {`"${testimonials[current].quote}"`}
              </p>

              <div className="flex items-center justify-center gap-4">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-bold text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-muted"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

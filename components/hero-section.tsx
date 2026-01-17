"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    image: "/luxury-modern-living-room-interior-design-with-ele.jpg",
    title: "Crafting Timeless",
    subtitle: "Interior Spaces",
    description: "Where elegance meets functionality in perfect harmony",
  },
  {
    image: "/minimalist-luxury-bedroom-interior-design-with-nat.jpg",
    title: "Modern Luxury",
    subtitle: "Redefined",
    description: "Creating spaces that inspire and transform",
  },
  {
    image: "/contemporary-kitchen-interior-design-with-marble-c.jpg",
    title: "Exceptional Design",
    subtitle: "Every Detail",
    description: "From concept to completion, excellence in every step",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">Premium Interior Design</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">{slides[currentSlide].title}</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">{slides[currentSlide].subtitle}</h2>
          <p className="text-xl text-white/80 mb-8 max-w-lg">{slides[currentSlide].description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">View Our Work</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              asChild
            >
              <Link href="#contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all ${
                index === currentSlide ? "bg-primary" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}

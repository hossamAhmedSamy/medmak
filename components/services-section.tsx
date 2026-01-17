import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Interior Design",
    description:
      "Transform your indoor spaces with our comprehensive interior design services. We create harmonious environments that reflect your personality and lifestyle.",
    image: "/luxury-modern-living-room.png",
    features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"],
  },
  {
    title: "Exterior Design",
    description:
      "Enhance your property's curb appeal with stunning exterior designs. From facades to landscapes, we create cohesive outdoor environments.",
    image: "/modern-exterior-architecture-design.jpg",
    features: ["Facade Design", "Landscape Planning", "Outdoor Living Spaces", "Architectural Details"],
  },
  {
    title: "3D Visualization",
    description:
      "See your dream space come to life before construction begins. Our detailed 3D renderings help you make informed design decisions.",
    image: "/3d-interior-design-visualization-render.jpg",
    features: ["Photorealistic Renders", "Virtual Walkthroughs", "Material Previews", "Design Iterations"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive design services tailored to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

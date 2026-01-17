"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const categories = ["All", "Residential", "Commercial", "Hospitality"]

const projects = [
  {
    title: "Skyline Penthouse",
    category: "Residential",
    image: "/luxury-penthouse-interior-design-modern.jpg",
  },
  {
    title: "Coastal Villa",
    category: "Residential",
    image: "/coastal-villa-interior-design-bright.jpg",
  },
  {
    title: "Urban Office",
    category: "Commercial",
    image: "/modern-office-interior-design-workspace.jpg",
  },
  {
    title: "Boutique Hotel",
    category: "Hospitality",
    image: "/boutique-hotel-lobby.png",
  },
  {
    title: "Modern Loft",
    category: "Residential",
    image: "/industrial-loft-apartment-interior-design.jpg",
  },
  {
    title: "Fine Dining Restaurant",
    category: "Hospitality",
    image: "/upscale-restaurant-interior-design-elegant.jpg",
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">Our Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our collection of completed projects that showcase our design philosophy and expertise.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden text-left"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary text-sm font-medium">{project.category}</p>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary"
            onClick={() => setSelectedProject(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

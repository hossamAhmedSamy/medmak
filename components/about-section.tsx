import Image from "next/image"
import { Award, Users, Home, Clock } from "lucide-react"

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Home, value: "750+", label: "Projects Completed" },
  { icon: Clock, value: "24/7", label: "Customer Support" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image src="/interior-designer-working-on-modern-living-room-pr.jpg" alt="Interior designer at work" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl hidden md:block">
              <p className="text-5xl font-bold">15+</p>
              <p className="text-sm uppercase tracking-wide">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">We Create Spaces That Inspire</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Medmak, we believe that every space tells a story. Our team of passionate designers brings
              together creativity, functionality, and your unique vision to create interiors that are not just
              beautiful, but truly yours.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience in residential and commercial design, we've mastered the art of
              transforming spaces. From modern minimalism to classic elegance, we craft environments that enhance the
              way you live and work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <stat.icon size={24} />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

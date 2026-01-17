import { Target, Lightbulb, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Precision",
    description: "Every measurement, every detail, meticulously planned and executed to perfection.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Innovative design solutions that push boundaries while honoring timeless principles.",
  },
  {
    icon: Shield,
    title: "Commitment",
    description: "Dedicated to delivering excellence on time and within budget, every single project.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    description: "Premium materials and craftsmanship that stand the test of time.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Core Values</h2>
          <p className="text-background/70 max-w-2xl mx-auto">
            These principles guide every project we undertake, ensuring exceptional results that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-background/5 hover:bg-background/10 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-background/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

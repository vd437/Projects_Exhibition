import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "تطوير احترافي",
      description: "استخدام أحدث التقنيات والمعايير في تطوير الويب",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "تصاميم عصرية",
      description: "واجهات مستخدم جذابة ومتجاوبة مع جميع الأجهزة",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "أداء متميز",
      description: "مواقع سريعة ومحسّنة لأفضل تجربة مستخدم",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">عني</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            مطور ويب محترف متخصص في إنشاء صفحات هبوط احترافية وتطبيقات ويب حديثة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center shadow-soft hover:shadow-hover transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

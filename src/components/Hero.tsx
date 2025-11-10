const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
          معرض أعمالي
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          صفحات الهبوط
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          مجموعة من المشاريع الاحترافية التي تعرض صفحات هبوط متنوعة لتطبيقات، متاجر، دورات، وخدمات متعددة
        </p>
        <button
          onClick={scrollToProjects}
          className="px-8 py-4 gradient-hero text-white rounded-lg font-semibold text-lg transition-smooth hover:shadow-hover hover:scale-105"
        >
          استكشف المشاريع
        </button>
      </div>
    </section>
  );
};

export default Hero;

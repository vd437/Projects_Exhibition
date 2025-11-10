import taskarooImg from "@/assets/projects/taskaroo.jpg";
import grafixSparkImg from "@/assets/projects/grafix-spark.jpg";
import trendoraImg from "@/assets/projects/trendora.jpg";
import digitalPitchImg from "@/assets/projects/digital-pitch.jpg";
import constructFutureImg from "@/assets/projects/construct-future.jpg";
import quickGreensImg from "@/assets/projects/quick-greens.jpg";

export interface Project {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  fullDescription: string;
  fullDescriptionAr: string;
  image: string;
  url: string;
  colors: string[];
}

export const projects: Project[] = [
  {
    id: "taskaroo",
    name: "Taskaroo",
    nameAr: "تاسكارو",
    category: "Mobile App",
    categoryAr: "تطبيق موبايل",
    description: "Task organization application with a clean design",
    descriptionAr: "تطبيق تنظيم المهام بتصميم نظيف",
    fullDescription: "A simple landing page with comfortable colors (purple and white), quick display of the app idea, images from within the app, clear download button (App Store and Google Play), and user testimonials.",
    fullDescriptionAr: "صفحة هبوط بسيطة، ألوان مريحة (بنفسجي وأبيض)، عرض سريع لفكرة التطبيق، صور من داخل التطبيق، زر تحميل واضح (App Store وGoogle Play)، وشهادات مستخدمين.",
    image: taskarooImg,
    url: "https://taskaroo-landing-page.vercel.app/",
    colors: ["#8B5CF6", "#FFFFFF"],
  },
  {
    id: "grafix-spark",
    name: "Grafix Spark",
    nameAr: "جرافيكس سبارك",
    category: "Educational Course",
    categoryAr: "دورة تعليمية",
    description: "Online graphic design learning course",
    descriptionAr: "دورة أونلاين لتعلم التصميم الجرافيكي",
    fullDescription: "Landing page for an online course to learn graphic design, attractive colors (light blue, purple, yellow), feature sections, student reviews, registration button, exciting learning experience.",
    fullDescriptionAr: "صفحة هبوط لدورة أونلاين لتعلم التصميم الجرافيكي، ألوان جذابة (أزرق فاتح، بنفسجي، أصفر)، أقسام المميزات، مراجعات الطلاب، زر تسجيل، تجربة تعلم مشوّقة.",
    image: grafixSparkImg,
    url: "https://grafix-spark-landing.vercel.app/",
    colors: ["#60A5FA", "#A78BFA", "#FBBF24"],
  },
  {
    id: "trendora",
    name: "Trendora",
    nameAr: "تريندورا",
    category: "E-commerce",
    categoryAr: "متجر إلكتروني",
    description: "Elegant women's accessories store",
    descriptionAr: "متجر إكسسوارات نسائية أنيق",
    fullDescription: "Elegant promotional landing page, golden × pink × white colors, featured products showcase, customer testimonials, clear CTA button for shopping, mobile responsive.",
    fullDescriptionAr: "صفحة هبوط دعائية أنيقة، ألوان ذهبية × وردية × بيضاء، عرض المنتجات المميزة، شهادات العملاء، زر CTA واضح للتسوق، متجاوبة مع الموبايل.",
    image: trendoraImg,
    url: "https://trendora-elegant-launch.vercel.app/",
    colors: ["#F59E0B", "#F9A8D4", "#FFFFFF"],
  },
  {
    id: "digital-pitch",
    name: "Digital Pitch Creator",
    nameAr: "صانع العروض الرقمية",
    category: "SaaS Product",
    categoryAr: "منتج SaaS",
    description: "Digital pitch creation tool",
    descriptionAr: "أداة إنشاء العروض التقديمية",
    fullDescription: "SaaS product landing page, modern and professional colors (light blue, gray, white), sections for features, customer testimonials, pricing, CTA for free trial.",
    fullDescriptionAr: "صفحة هبوط لمنتج SaaS، ألوان حديثة ومحترفة (أزرق فاتح، رمادي، أبيض)، أقسام للميزات، شهادات العملاء، الأسعار، CTA لتجربة مجانية.",
    image: digitalPitchImg,
    url: "https://digital-pitch-creator.vercel.app/",
    colors: ["#3B82F6", "#6B7280", "#FFFFFF"],
  },
  {
    id: "construct-future",
    name: "Construct Future",
    nameAr: "كونستراكت فيوتشر",
    category: "Construction Company",
    categoryAr: "شركة مقاولات",
    description: "Professional construction company",
    descriptionAr: "شركة مقاولات احترافية",
    fullDescription: "Professional landing page for a construction company, serious colors (dark blue, gray, white), services display, previous projects, customer testimonials, contact form.",
    fullDescriptionAr: "صفحة هبوط احترافية لشركة مقاولات، ألوان جادة (أزرق داكن، رمادي، أبيض)، عرض الخدمات، المشاريع السابقة، شهادات العملاء، نموذج تواصل.",
    image: constructFutureImg,
    url: "https://construct-future-landing.vercel.app/",
    colors: ["#1E3A8A", "#6B7280", "#FFFFFF"],
  },
  {
    id: "quick-greens",
    name: "Quick Greens Spot",
    nameAr: "كويك جرينز سبوت",
    category: "Delivery App",
    categoryAr: "تطبيق توصيل",
    description: "Healthy food delivery application",
    descriptionAr: "تطبيق توصيل أطعمة صحية",
    fullDescription: "Landing page for healthy food delivery app, vibrant colors (light green, yellow, orange), feature display, customer testimonials, download links, clear CTA.",
    fullDescriptionAr: "صفحة هبوط لتطبيق توصيل أطعمة صحية، ألوان نابضة بالحياة (أخضر فاتح، أصفر، برتقالي)، عرض الميزات، شهادات العملاء، روابط التحميل، CTA واضح.",
    image: quickGreensImg,
    url: "https://quick-greens-spot.vercel.app/",
    colors: ["#86EFAC", "#FDE047", "#FB923C"],
  },
];

export const categories = [
  { value: "all", labelEn: "All Projects", labelAr: "جميع المشاريع" },
  { value: "app", labelEn: "Mobile Apps", labelAr: "تطبيقات موبايل" },
  { value: "course", labelEn: "Educational", labelAr: "تعليمية" },
  { value: "ecommerce", labelEn: "E-commerce", labelAr: "متاجر إلكترونية" },
  { value: "saas", labelEn: "SaaS", labelAr: "SaaS" },
  { value: "corporate", labelEn: "Corporate", labelAr: "شركات" },
  { value: "delivery", labelEn: "Delivery", labelAr: "توصيل" },
];

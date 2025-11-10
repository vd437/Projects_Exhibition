import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const sendToTelegram = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !message) {
      toast({
        title: "خطأ",
        description: "الرجاء ملء جميع الحقول",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const botToken = "8368807945:AAEhwSZcL3i1GMubsR8Ti3an4goS_wAwXfc";
    const chatId = "8197503733";
    const text = `📧 رسالة جديدة من معرض الأعمال\n\n👤 البريد الإلكتروني: ${email}\n\n💬 الرسالة:\n${message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "تم الإرسال بنجاح!",
          description: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
        });
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معي</h2>
          <p className="text-muted-foreground">
            هل لديك مشروع في ذهنك؟ دعنا نتحدث!
          </p>
        </div>

        <Card className="p-6 md:p-8 shadow-soft">
          <form onSubmit={sendToTelegram} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                البريد الإلكتروني
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full"
                dir="ltr"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                الرسالة
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="اكتب رسالتك هنا..."
                required
                className="w-full min-h-[150px]"
                dir="rtl"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full gradient-hero text-white hover:shadow-hover transition-smooth"
            >
              {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
              <Send className="mr-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

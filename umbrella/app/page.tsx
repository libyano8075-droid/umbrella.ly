"use client";

import Link from "next/link";
import { Umbrella, ShoppingBag, Package, Star, Truck, Shield, Globe, DollarSign, Clock, MapPin, Sparkles, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marketplaces = [
    { name: "AliExpress", emoji: "🛒", color: "from-orange-500 to-red-600" },
    { name: "Alibaba", emoji: "🏭", color: "from-orange-600 to-yellow-500" },
    { name: "SHEIN", emoji: "👗", color: "from-black to-gray-800" },
    { name: "Taobao", emoji: "🛍️", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      {/* Enhanced Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-md shadow-2xl" : "bg-transparent"
        } border-b border-red-900/20`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-red-800 shadow-2xl group-hover:scale-110 transition-transform">
                  <Umbrella className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">Umbrella</h1>
                <p className="text-sm text-red-400 font-semibold">نقطة انطلاقك للتسوق العالمي</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/Home">
                <button className="group relative px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-red-600/50 hover:scale-105">
                  ابدأ الآن
                  <ArrowRight className="inline mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-red-600/30 transition-all cursor-default">
              <Sparkles className="h-5 w-5 text-red-400 animate-pulse" />
              <span className="text-sm font-semibold text-red-400">المنصة الأولى في ليبيا للشحن الدولي ✨</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              تسوق من
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 animate-gradient">
                العالم كله
              </span>
              <span className="block mt-2">ونوصلها لبيتك</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              احصل على أي منتج تريده من <span className="text-red-400 font-semibold">AliExpress</span>،
              <span className="text-orange-400 font-semibold"> Alibaba</span>،
              <span className="text-gray-400 font-semibold"> SHEIN</span> و
              <span className="text-red-500 font-semibold"> Taobao</span>
              <br />
              بأفضل الأسعار وأسرع شحن جوي مباشر 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/Home">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl text-lg font-bold shadow-2xl hover:shadow-red-600/50 transition-all hover:scale-105">
                  <ShoppingBag className="inline ml-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  ابدأ التسوق الآن
                </button>
              </Link>
              <Link href="#features">
                <button className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl text-lg font-bold border-2 border-white/20 hover:border-white/40 backdrop-blur-sm transition-all">
                  اكتشف المزيد
                  <ArrowRight className="inline mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Stats with Icons */}
            <div className="flex flex-wrap items-center gap-8 pt-12 justify-center">
              <div className="group text-center cursor-default hover:scale-110 transition-transform">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-6 w-6 text-red-400" />
                  <div className="text-4xl font-bold text-red-500">15-20</div>
                </div>
                <div className="text-sm text-gray-400">يوم للتوصيل</div>
              </div>
              <div className="h-16 w-px bg-white/20"></div>
              <div className="group text-center cursor-default hover:scale-110 transition-transform">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Package className="h-6 w-6 text-orange-400" />
                  <div className="text-4xl font-bold text-red-500">+1000</div>
                </div>
                <div className="text-sm text-gray-400">طلب ناجح</div>
              </div>
              <div className="h-16 w-px bg-white/20"></div>
              <div className="group text-center cursor-default hover:scale-110 transition-transform">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  <div className="text-4xl font-bold text-red-500">24/7</div>
                </div>
                <div className="text-sm text-gray-400">دعم فني</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplaces Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">تسوق من أشهر المتاجر العالمية</h2>
            <p className="text-xl text-gray-600">كل ما تحتاجه في مكان واحد</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketplaces.map((m, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 hover:border-red-200 bg-white p-8 text-center transition-all hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">{m.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">{m.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
              <Star className="h-4 w-4 text-red-600 fill-red-600" />
              <span className="text-sm font-semibold text-red-600">لماذا Umbrella؟</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              نجعل التسوق الدولي
              <span className="text-red-600"> سهل وآمن</span>
            </h2>
            <p className="text-xl text-gray-600">كل ما تحتاجه لتجربة تسوق مميزة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "تسوق من العالم", desc: "الوصول إلى ملايين المنتجات من أفضل 4 متاجر صينية", color: "from-blue-500 to-blue-600" },
              { icon: DollarSign, title: "أسعار شفافة", desc: "أسعار واضحة بالدينار الليبي شاملة الشحن - بدون مفاجآت", color: "from-green-500 to-green-600" },
              { icon: Truck, title: "شحن سريع", desc: "شحن جوي مباشر من الصين إلى ليبيا خلال 15-20 يوم", color: "from-orange-500 to-orange-600" },
              { icon: Shield, title: "ضمان الجودة", desc: "فحص شامل للمنتجات قبل الشحن لضمان وصولها بأفضل حالة", color: "from-purple-500 to-purple-600" },
              { icon: MapPin, title: "توصيل دقيق", desc: "تحديد موقع التوصيل بدقة GPS لتسليم آمن ومضمون", color: "from-red-500 to-red-600" },
              { icon: Clock, title: "تتبع مباشر", desc: "تتبع شحنتك لحظة بلحظة من الصين حتى باب بيتك", color: "from-yellow-500 to-yellow-600" },
            ].map((f, i) => (
              <div key={i} className="group relative p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <f.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-600">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-64 h-64 bg-red-800 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold">جاهز للبدء؟</h2>
            <p className="text-2xl text-red-100">
              انضم لآلاف العملاء السعداء واطلب أول شحنة لك اليوم 🎉
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Home">
                <button className="group px-10 py-4 bg-white text-red-600 hover:bg-gray-100 rounded-xl text-lg font-bold shadow-2xl hover:scale-105 transition-all">
                  <ShoppingBag className="inline ml-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  أنشئ حسابك مجاناً
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-red-900/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <Umbrella className="h-8 w-8 text-red-600 group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold group-hover:text-red-400 transition-colors">Umbrella</span>
            </div>
            <p className="text-gray-400 max-w-md">
              منصة الشحن الدولي الأولى في ليبيا. نوفر لك الوصول إلى أفضل المتاجر العالمية بأسعار تنافسية وشحن موثوق.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/Home" className="hover:text-red-400 transition-colors">المتجر</Link>
              <span>•</span>
              <span>support@umbrella.ly</span>
              <span>•</span>
              <span>طرابلس، ليبيا</span>
            </div>
            <div className="pt-6 border-t border-white/10 w-full text-center">
              <p className="text-sm text-gray-500">© 2024 Umbrella. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

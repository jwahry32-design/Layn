import React, { useState } from 'react';
import { Download, BookOpen, Key, Shield, Layout, Zap, CheckCircle2, FileText, List, AlertCircle, ExternalLink, X } from 'lucide-react';

const content = {
  title: { en: "Lecture 1: Introduction to Laboratory Design", ar: "المحاضرة 1: مقدمة في تصميم المختبرات" },
  subtitle: { en: "Medical Instrumentation I - Second Stage", ar: "الأجهزة الطبية 1 - المرحلة الثانية" },
  summaryTitle: { en: "Lecture Summary", ar: "ملخص المحاضرة" },
  summary: {
    en: "This lecture covers the fundamental principles of designing a laboratory, focusing on safety, workflow efficiency, flexibility, and environmental considerations. It details the essential elements like layout zoning, ventilation, workstations, and safety protocols required to create a functional and secure laboratory environment.",
    ar: "تغطي هذه المحاضرة المبادئ الأساسية لتصميم المختبرات، مع التركيز على السلامة، كفاءة سير العمل، المرونة، والاعتبارات البيئية. كما تفصل العناصر الأساسية مثل تقسيم المساحات، التهوية، محطات العمل، وبروتوكولات السلامة اللازمة لإنشاء بيئة مختبرية عملية وآمنة."
  },
  termsTitle: { en: "Key Terms", ar: "أهم المصطلحات" },
  terms: [
    {
      id: "lab-design",
      color: "blue",
      en: { term: "Laboratory Design", def: "Planning the layout and features of a lab to ensure safety, efficiency, and compliance with standards." },
      ar: { term: "تصميم المختبر", def: "تخطيط وتصميم مساحة وميزات المختبر لضمان السلامة والكفاءة والامتثال للمعايير." }
    },
    {
      id: "workflow",
      color: "emerald",
      en: { term: "Workflow Efficiency", def: "Optimizing the layout to minimize unnecessary movement and increase productivity." },
      ar: { term: "كفاءة سير العمل", def: "تحسين التصميم لتقليل الحركة غير الضرورية وزيادة الإنتاجية." }
    },
    {
      id: "zoning",
      color: "amber",
      en: { term: "Zoning", def: "Dividing the lab into specific functional areas (e.g., preparation, storage, administrative)." },
      ar: { term: "التقسيم", def: "تقسيم المختبر إلى مناطق وظيفية محددة (مثل: التحضير، التخزين، الإدارة)." }
    },
    {
      id: "biosafety",
      color: "purple",
      en: { term: "Biosafety Cabinets", def: "Enclosed workspaces for handling biological materials safely and preventing contamination." },
      ar: { term: "كبائن السلامة البيولوجية", def: "مساحات عمل مغلقة للتعامل مع المواد البيولوجية بأمان ومنع التلوث." }
    },
    {
      id: "fume-hoods",
      color: "rose",
      en: { term: "Fume Hoods", def: "Ventilation devices designed to limit exposure to hazardous or toxic chemical fumes." },
      ar: { term: "أغطية الدخان", def: "أجهزة تهوية مصممة للحد من التعرض للأبخرة الكيميائية الخطرة أو السامة." }
    }
  ],
  sectionsTitle: { en: "Detailed Notes", ar: "الملاحظات التفصيلية" },
  sections: [
    {
      icon: <BookOpen className="w-5 h-5" />,
      en: {
        title: "1. Purpose and Function",
        items: [
          "Varies based on use: research, diagnostics, education, or manufacturing.",
          "Must support planned testing and research activities.",
          "Needs adaptability for future technological advancements and changes in research focus."
        ]
      },
      ar: {
        title: "1. الغرض والوظيفة",
        items: [
          "يختلف بناءً على الاستخدام: البحث، التشخيص، التعليم، أو التصنيع.",
          "يجب أن يدعم أنشطة الاختبار والبحث المخطط لها.",
          "يحتاج إلى القدرة على التكيف مع التطورات التكنولوجية المستقبلية وتغيرات التركيز البحثي."
        ]
      }
    },
    {
      icon: <Zap className="w-5 h-5" />,
      en: {
        title: "2. Design Principles",
        items: [
          "Safety: Protocols embedded into layout to protect users and environment (hazardous materials, contamination risks).",
          "Workflow Efficiency: Minimize unnecessary movement, logical equipment positioning.",
          "Flexibility: Modular features for easy reconfiguration as scientific work changes.",
          "Energy Efficiency: Minimize environmental impact and energy consumption."
        ]
      },
      ar: {
        title: "2. مبادئ التصميم",
        items: [
          "السلامة: دمج بروتوكولات السلامة في التصميم لحماية المستخدمين والبيئة (المواد الخطرة، مخاطر التلوث).",
          "كفاءة سير العمل: تقليل الحركة غير الضرورية، وضع المعدات بشكل منطقي.",
          "المرونة: ميزات معيارية (Modular) لسهولة إعادة التكوين مع تغير العمل العلمي.",
          "كفاءة الطاقة: تقليل التأثير البيئي واستهلاك الطاقة."
        ]
      }
    },
    {
      icon: <Layout className="w-5 h-5" />,
      en: {
        title: "3. Laboratory Layout",
        items: [
          "Zoning: Divided by function (preparation areas, storage, administrative spaces, specialized equipment).",
          "Movement Flow: Smooth flow to minimize cross-contamination.",
          "Ventilation and Airflow: Maintain air quality, remove contaminants, and ensure user comfort."
        ]
      },
      ar: {
        title: "3. تخطيط المختبر",
        items: [
          "التقسيم: مقسم حسب الوظيفة (مناطق التحضير، التخزين، المساحات الإدارية، المعدات المتخصصة).",
          "تدفق الحركة: تدفق سلس لتقليل التلوث المتبادل.",
          "التهوية وتدفق الهواء: الحفاظ على جودة الهواء وإزالة الملوثات وضمان راحة المستخدم."
        ]
      }
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      en: {
        title: "4. Key Elements",
        items: [
          "Workbenches and Workstations: Durable and chemical-resistant.",
          "Storage: Locked cabinets for hazards, cold storage for temperature-sensitive items.",
          "Lighting: Proper lighting to reduce errors and improve focus.",
          "Waste Management: Integrated systems for chemical, biological, and radioactive waste."
        ]
      },
      ar: {
        title: "4. العناصر الأساسية",
        items: [
          "طاولات ومحطات العمل: متينة ومقاومة للمواد الكيميائية.",
          "التخزين: خزائن مقفلة للمواد الخطرة، وتخزين بارد للعناصر الحساسة للحرارة.",
          "الإضاءة: إضاءة مناسبة لتقليل الأخطاء وتحسين التركيز.",
          "إدارة النفايات: أنظمة متكاملة للتخلص من النفايات الكيميائية والبيولوجية والمشعة."
        ]
      }
    },
    {
      icon: <Shield className="w-5 h-5" />,
      en: {
        title: "5. Safety & Environment",
        items: [
          "Fire Safety: Fire extinguishers and clear emergency exits are essential.",
          "Emergency Protocols: Easy access to eyewash stations and showers.",
          "Biosafety Levels (BSL): Define containment levels for handling biological materials.",
          "User Comfort: Adjustable workstations and consumable furniture to reduce stress.",
          "Conservation: Sustainable design incorporates low-flow fixtures and energy-efficient equipment."
        ]
      },
      ar: {
        title: "5. السلامة والبيئة",
        items: [
          "السلامة من الحرائق: طفايات حريق ومخارج طوارئ واضحة تعتبر ضرورية.",
          "بروتوكولات الطوارئ: سهولة الوصول إلى محطات غسيل العين والاستحمام.",
          "مستويات السلامة البيولوجية (BSL): تحديد مستويات الاحتواء للتعامل مع المواد البيولوجية.",
          "راحة المستخدم: محطات عمل قابلة للتعديل وأثاث مريح لتقليل الإجهاد.",
          "الحفاظ على البيئة: التصميم المستدام يدمج تركيبات منخفضة التدفق ومعدات موفرة للطاقة."
        ]
      }
    }
  ]
};

const termColors: Record<string, { border: string, shadow: string, bg: string, text: string, badgeBg: string, badgeText: string }> = {
  blue: { border: "border-blue-400", shadow: "shadow-blue-100", bg: "bg-blue-50/40", text: "text-blue-900", badgeBg: "bg-blue-100", badgeText: "text-blue-800" },
  emerald: { border: "border-emerald-400", shadow: "shadow-emerald-100", bg: "bg-emerald-50/40", text: "text-emerald-900", badgeBg: "bg-emerald-100", badgeText: "text-emerald-800" },
  amber: { border: "border-amber-400", shadow: "shadow-amber-100", bg: "bg-amber-50/40", text: "text-amber-900", badgeBg: "bg-amber-100", badgeText: "text-amber-800" },
  purple: { border: "border-purple-400", shadow: "shadow-purple-100", bg: "bg-purple-50/40", text: "text-purple-900", badgeBg: "bg-purple-100", badgeText: "text-purple-800" },
  rose: { border: "border-rose-400", shadow: "shadow-rose-100", bg: "bg-rose-50/40", text: "text-rose-900", badgeBg: "bg-rose-100", badgeText: "text-rose-800" },
};

export default function App() {
  const [showIframeAlert, setShowIframeAlert] = useState(false);

  const handlePrint = () => {
    // Check if we are inside an iframe (like Google AI Studio preview)
    if (window.self !== window.top) {
      setShowIframeAlert(true);
    } else {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 no-print shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-700">
            <FileText className="w-6 h-6" />
            <span className="font-bold text-lg hidden sm:inline">Lecture Notes</span>
          </div>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
          >
            <Download className="w-4 h-4" />
            تحميل PDF / Download
          </button>
        </div>
      </header>

      {/* Iframe Alert Modal */}
      {showIframeAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 no-print">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowIframeAlert(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-2">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">تنبيه للتحميل</h3>
              <p className="text-slate-600 leading-relaxed" dir="rtl">
                أنت حالياً داخل نافذة المعاينة (Preview). المتصفح يمنع تحميل ملفات الـ PDF من داخل هذه النافذة لأسباب أمنية.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 w-full mt-2">
                <p className="text-sm text-slate-700 font-medium mb-2" dir="rtl">لحل المشكلة، يرجى اتباع الخطوات التالية:</p>
                <ol className="text-sm text-slate-600 list-decimal list-inside space-y-1 text-right" dir="rtl">
                  <li>اضغط على زر <strong>"Open in new tab"</strong> (فتح في نافذة جديدة) الموجود في أعلى يمين الشاشة.</li>
                  <li>بعد فتح التطبيق في النافذة الجديدة، اضغط على زر التحميل مرة أخرى.</li>
                </ol>
              </div>
              <button 
                onClick={() => setShowIframeAlert(false)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl transition-colors mt-4"
              >
                حسناً، فهمت
              </button>
            </div>
          </div>
        </div>
      )}

      <div id="pdf-content" className="bg-slate-50">
        <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-12">
          {/* Title Section */}
          <div className="text-center space-y-6 pb-8 border-b border-slate-200">
            <div>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4" dir="rtl">
                <span className="text-lg sm:text-xl font-medium text-slate-600">تم إعداد هذا الملف بواسطة:</span>
                <span className="bg-red-50 text-red-600 border border-red-200 px-4 py-1.5 rounded-2xl font-bold text-lg shadow-sm" dir="ltr">Zayn Asady</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight dir-rtl" dir="rtl">{content.title.ar}</h1>
            </div>
            <div className="inline-block bg-slate-100 px-4 py-2 rounded-lg">
              <p className="text-lg text-slate-700 font-medium" dir="ltr">{content.subtitle.en}</p>
              <p className="text-md text-slate-600 font-medium mt-1 dir-rtl" dir="rtl">{content.subtitle.ar}</p>
            </div>
          </div>

          {/* Summary Section */}
          <section className="space-y-4 print-break-inside-avoid">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900" dir="ltr">{content.summaryTitle.en}</h2>
              </div>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <h2 className="text-2xl font-bold text-slate-900 dir-rtl" dir="rtl">{content.summaryTitle.ar}</h2>
            </div>
            
            <div className="space-y-3">
              <div className="bg-blue-50/80 rounded-2xl p-6 border border-blue-100 shadow-sm" dir="ltr">
                <p className="text-slate-700 leading-relaxed text-lg">{content.summary.en}</p>
              </div>
              <div className="bg-blue-50/80 rounded-2xl p-6 border border-blue-100 shadow-sm dir-rtl" dir="rtl">
                <p className="text-slate-700 leading-relaxed text-lg">{content.summary.ar}</p>
              </div>
            </div>
          </section>

          {/* Key Terms Section */}
          <section>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-8">
              <div className="flex items-center gap-2">
                <Key className="w-6 h-6 text-amber-500" />
                <h2 className="text-2xl font-bold text-slate-900" dir="ltr">{content.termsTitle.en}</h2>
              </div>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <h2 className="text-2xl font-bold text-slate-900 dir-rtl" dir="rtl">{content.termsTitle.ar}</h2>
            </div>
            
            <div className="space-y-6">
              {content.terms.map((term, idx) => {
                const colors = termColors[term.color];
                return (
                  <div key={idx} className={`rounded-xl border-l-4 shadow-md overflow-hidden print-break-inside-avoid ${colors.border} ${colors.shadow} ${colors.bg}`}>
                    <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-200/50">
                      {/* English Term */}
                      <div className="p-5 flex-1" dir="ltr">
                        <h3 className="font-bold text-lg mb-3">
                          <span className={`px-3 py-1.5 rounded-md inline-block shadow-sm ${colors.badgeBg} ${colors.badgeText}`}>
                            {term.en.term}
                          </span>
                        </h3>
                        <p className={`leading-relaxed ${colors.text}`}>{term.en.def}</p>
                      </div>
                      {/* Arabic Term */}
                      <div className="p-5 flex-1 dir-rtl" dir="rtl">
                        <h3 className="font-bold text-lg mb-3">
                          <span className={`px-3 py-1.5 rounded-md inline-block shadow-sm ${colors.badgeBg} ${colors.badgeText}`}>
                            {term.ar.term}
                          </span>
                        </h3>
                        <p className={`leading-relaxed ${colors.text}`}>{term.ar.def}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Detailed Notes Section */}
          <section>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-8">
              <div className="flex items-center gap-2">
                <List className="w-6 h-6 text-emerald-500" />
                <h2 className="text-2xl font-bold text-slate-900" dir="ltr">{content.sectionsTitle.en}</h2>
              </div>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <h2 className="text-2xl font-bold text-slate-900 dir-rtl" dir="rtl">{content.sectionsTitle.ar}</h2>
            </div>
            
            <div className="space-y-10">
              {content.sections.map((section, idx) => (
                <div key={idx} className="print-break-inside-avoid">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-slate-100 rounded-lg text-slate-700 border border-slate-200">
                        {section.icon}
                      </span>
                      <h3 className="font-bold text-xl text-slate-900" dir="ltr">{section.en.title}</h3>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <h3 className="font-bold text-xl text-slate-900 dir-rtl" dir="rtl">{section.ar.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {/* English Box */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm" dir="ltr">
                      <ul className="space-y-3">
                        {section.en.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Arabic Box */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm dir-rtl" dir="rtl">
                      <ul className="space-y-3">
                        {section.ar.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        
        <footer className="text-center py-8 text-slate-500 text-sm no-print border-t border-slate-200 mt-12">
          <p>Medical Instrumentation Engineering Techniques</p>
        </footer>
      </div>
    </div>
  );
}
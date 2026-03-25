import React, { useState } from 'react';
import { Download, BookOpen, Key, Shield, Layout, Zap, CheckCircle2, FileText, List, AlertCircle, ExternalLink, X, ChevronDown } from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js';

const lectures: Record<string, any> = {
  lecture2: {
    title: { en: "Lecture 2: Centrifuge", ar: "المحاضرة 2: جهاز الطرد المركزي (Centrifuge)" },
    subtitle: { en: "Medical Instrumentation I - Second Stage", ar: "الأجهزة الطبية 1 - المرحلة الثانية" },
    summaryTitle: { en: "Lecture Summary", ar: "ملخص المحاضرة" },
    summary: {
      en: "This lecture introduces the centrifuge, a device that uses centrifugal force to separate suspended solids in a liquid or liquids of diverse densities. It covers the operation principle, main components, safety precautions, types of rotors, and common faults and maintenance procedures.",
      ar: "تقدم هذه المحاضرة جهاز الطرد المركزي، وهو جهاز يستخدم قوة الطرد المركزي لفصل المواد الصلبة المعلقة في سائل أو السوائل ذات الكثافات المختلفة. تغطي المحاضرة مبدأ العمل، الأجزاء الرئيسية، احتياطات السلامة، أنواع الدوارات، بالإضافة إلى الأعطال الشائعة وإجراءات الصيانة."
    },
    termsTitle: { en: "Key Terms", ar: "أهم المصطلحات" },
    terms: [
      {
        id: "centrifuge",
        color: "blue",
        en: { term: "Centrifuge", def: "A device that uses centrifugal force to separate substances of different densities." },
        ar: { term: "جهاز الطرد المركزي", def: "جهاز يستخدم قوة الطرد المركزي لفصل المواد ذات الكثافات المختلفة." }
      },
      {
        id: "centrifugal-force",
        color: "emerald",
        en: { term: "Centrifugal Force", def: "The force generated when an object rotates around a single point, causing outward movement." },
        ar: { term: "قوة الطرد المركزي", def: "القوة المتولدة عند دوران جسم حول نقطة واحدة، مما يسبب حركة نحو الخارج." }
      },
      {
        id: "sedimentation",
        color: "amber",
        en: { term: "Sedimentation", def: "The process of settling down of heavier particles at the bottom of a liquid." },
        ar: { term: "الترسيب", def: "عملية استقرار الجسيمات الأثقل في قاع السائل." }
      },
      {
        id: "rotor",
        color: "purple",
        en: { term: "Rotor", def: "The rotating part of the centrifuge that houses the tubes with the samples." },
        ar: { term: "الدوار", def: "الجزء الدوار في جهاز الطرد المركزي الذي يحمل الأنابيب التي تحتوي على العينات." }
      },
      {
        id: "supernatant",
        color: "rose",
        en: { term: "Supernatant", def: "The clear liquid that lies above the solid residue after centrifugation." },
        ar: { term: "السائل الطافي", def: "السائل الصافي الذي يطفو فوق البقايا الصلبة بعد عملية الطرد المركزي." }
      }
    ],
    sectionsTitle: { en: "Detailed Notes", ar: "الملاحظات التفصيلية" },
    sections: [
      {
        icon: <Zap className="w-5 h-5" />,
        en: {
          title: "1. Operation Principle",
          items: [
            "Uses centrifugal force to separate solids suspended in a liquid or liquids of diverse density.",
            "Separates particles from samples like blood or urine (e.g., getting cell-free plasma or serum).",
            "Separates lipid components from other components of plasma or serum."
          ]
        },
        ar: {
          title: "1. مبدأ العمل",
          items: [
            "يستخدم قوة الطرد المركزي لفصل المواد الصلبة المعلقة في سائل أو السوائل ذات الكثافة المختلفة.",
            "يفصل الجسيمات من العينات مثل الدم أو البول (مثل الحصول على بلازما أو مصل خالي من الخلايا).",
            "يفصل المكونات الدهنية عن المكونات الأخرى للبلازما أو المصل."
          ]
        }
      },
      {
        icon: <Layout className="w-5 h-5" />,
        en: {
          title: "2. Main Parts of a Centrifuge",
          items: [
            "Motor: Electric motor that drives the centrifuge.",
            "Control Panel: Controls the operation.",
            "Chamber & Rotor: The chamber houses the entire system, while the rotor holds the sample tubes.",
            "Latch & Lid: Keeps the centrifuge closed safely during operation.",
            "Drive Shaft & Screen: Connects the motor to the rotor and displays information."
          ]
        },
        ar: {
          title: "2. الأجزاء الرئيسية لجهاز الطرد المركزي",
          items: [
            "المحرك (Motor): محرك كهربائي يشغل الجهاز.",
            "لوحة التحكم (Control Panel): تتحكم في عملية التشغيل.",
            "الغرفة والدوار (Chamber & Rotor): الغرفة تحوي النظام بأكمله، بينما الدوار يحمل أنابيب العينات.",
            "القفل والغطاء (Latch & Lid): يحافظ على إغلاق الجهاز بأمان أثناء التشغيل.",
            "عمود الإدارة والشاشة (Drive Shaft & Screen): يربط المحرك بالدوار ويعرض المعلومات."
          ]
        }
      },
      {
        icon: <Shield className="w-5 h-5" />,
        en: {
          title: "3. Safety Precautions",
          items: [
            "Ensure a sturdy, level work surface.",
            "Balance the centrifuge: Sample tubes must be evenly filled and balanced to prevent damage.",
            "Do not open the lid while the rotor is moving.",
            "If the centrifuge is shaking excessively, pull the plug immediately."
          ]
        },
        ar: {
          title: "3. احتياطات السلامة",
          items: [
            "ضمان سطح عمل ثابت ومستوٍ.",
            "موازنة الجهاز: يجب أن تكون أنابيب العينات ممتلئة بالتساوي ومتوازنة لمنع التلف.",
            "عدم فتح الغطاء أثناء دوران الدوار.",
            "إذا كان الجهاز يهتز بشكل مفرط، افصل القابس (الكهرباء) فوراً."
          ]
        }
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        en: {
          title: "4. Types of Rotors",
          items: [
            "Fixed angle: Short distance to travel, shorter run time. Most widely used.",
            "Swinging buckets: Longer distance, better separation in density gradient. Easier to withdraw supernatant.",
            "Vertical tube: Keeps tubes parallel to the rotational axis. Bands form across the tube's diameter.",
            "Almost vertical tube: Used for gradient centrifugation."
          ]
        },
        ar: {
          title: "4. أنواع الدوارات (Rotors)",
          items: [
            "الزاوية الثابتة (Fixed angle): مسافة انتقال قصيرة، وقت تشغيل أقصر. الأكثر استخداماً.",
            "الدلاء المتأرجحة (Swinging buckets): مسافة أطول، فصل أفضل في تدرج الكثافة. يسهل سحب السائل الطافي.",
            "الأنبوب العمودي (Vertical tube): يبقي الأنابيب موازية لمحور الدوران. تتشكل النطاقات عبر قطر الأنبوب.",
            "الأنبوب شبه العمودي (Almost vertical tube): يستخدم للطرد المركزي المتدرج."
          ]
        }
      },
      {
        icon: <AlertCircle className="w-5 h-5" />,
        en: {
          title: "5. Maintenance and Faults",
          items: [
            "Common faults: Motor (carbon brushes, internal coil) and electronic faults (power supply, screen).",
            "Keep the centrifuge properly lubricated.",
            "Pay close attention to noise, vibration, or grinding and stop the unit immediately if this occurs."
          ]
        },
        ar: {
          title: "5. الصيانة والأعطال",
          items: [
            "الأعطال الشائعة: المحرك (الفرش الكربونية، الملف الداخلي) والأعطال الإلكترونية (مزود الطاقة، الشاشة).",
            "حافظ على تشحيم جهاز الطرد المركزي بشكل صحيح.",
            "انتبه جيداً للضوضاء أو الاهتزاز أو الاحتكاك وأوقف الوحدة فوراً في حالة حدوث ذلك."
          ]
        }
      }
    ]
  },
  lecture3: {
    title: { en: "Lecture 3: Coming Soon", ar: "المحاضرة 3: قريباً" },
    subtitle: { en: "Medical Instrumentation I", ar: "الأجهزة الطبية 1" },
    summaryTitle: { en: "Lecture Summary", ar: "ملخص المحاضرة" },
    summary: {
      en: "The content for this lecture has not been uploaded yet. Please check back later.",
      ar: "لم يتم رفع محتوى هذه المحاضرة بعد. يرجى التحقق لاحقاً."
    },
    termsTitle: { en: "Key Terms", ar: "أهم المصطلحات" },
    terms: [],
    sectionsTitle: { en: "Detailed Notes", ar: "الملاحظات التفصيلية" },
    sections: []
  }
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
  const [showLectureModal, setShowLectureModal] = useState(false);
  const [activeLecture, setActiveLecture] = useState('lecture2');

  const [isDownloading, setIsDownloading] = useState(false);

  const handlePrint = async () => {
    // Check if we are inside an iframe (like Google AI Studio preview)
    if (window.self !== window.top) {
      setShowIframeAlert(true);
      return;
    }

    const element = document.getElementById('pdf-content');
    if (!element) return;

    setIsDownloading(true);
    try {
      const opt = {
        margin:       10,
        filename:     `${content.title.ar}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, windowWidth: 414 }, // Force mobile width rendering
        jsPDF:        { unit: 'px', format: [414, 896], orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const content = lectures[activeLecture];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 no-print shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-blue-700 shrink-0">
            <FileText className="w-6 h-6" />
            <span className="font-bold text-lg hidden sm:inline">Lecture Notes</span>
          </div>
          
          {/* Lecture Selector Button */}
          <div className="flex-1 flex justify-center" dir="rtl">
            <button
              onClick={() => setShowLectureModal(true)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium text-sm transition-colors border border-slate-200 max-w-[150px] sm:max-w-xs"
              title="اختر المحاضرة"
            >
              <span className="truncate">{content.title.ar}</span>
              <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
          </div>

          <button 
            onClick={handlePrint}
            disabled={isDownloading}
            className={`flex items-center gap-2 px-4 py-2 text-white rounded-md transition-colors text-sm font-medium shadow-sm shrink-0 ${
              isDownloading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
            <span className="hidden sm:inline">
              {isDownloading ? 'جاري التحميل...' : 'تحميل PDF'}
            </span>
          </button>
        </div>
      </header>

      {/* Lecture Selection Modal */}
      {showLectureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 no-print">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowLectureModal(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col space-y-4" dir="rtl">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">اختر المحاضرة</h3>
              </div>
              
              <div className="space-y-2 mt-2 max-h-[60vh] overflow-y-auto pr-1 custom-scrollbar">
                {Object.entries(lectures).map(([key, lecture]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveLecture(key);
                      setShowLectureModal(false);
                    }}
                    className={`w-full text-right px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                      activeLecture === key 
                        ? 'bg-blue-50 border border-blue-200 text-blue-700' 
                        : 'bg-slate-50 border border-slate-100 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-medium">{lecture.title.ar}</span>
                    {activeLecture === key && <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
          {content.terms.length > 0 && (
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
              {content.terms.map((term: any, idx: number) => {
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
          )}

          {/* Detailed Notes Section */}
          {content.sections.length > 0 && (
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
          )}
        </main>
        
        <footer className="text-center py-8 text-slate-500 text-sm no-print border-t border-slate-200 mt-12">
          <p>Medical Instrumentation Engineering Techniques</p>
        </footer>
      </div>
    </div>
  );
}
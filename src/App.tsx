import React, { useState } from 'react';
import { Download, BookOpen, Key, Shield, Layout, Zap, CheckCircle2, FileText, List, AlertCircle, ExternalLink, X, ChevronDown, Minus, Plus, Type as TypeIcon, Activity, Settings, Thermometer } from 'lucide-react';
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
            "**Motor**: Electric motor that drives the centrifuge.",
            "**Control Panel**: Controls the operation.",
            "**Chamber & Rotor**: The chamber houses the entire system, while the rotor holds the sample tubes.",
            "**Latch & Lid**: Keeps the centrifuge closed safely during operation.",
            "**Drive Shaft & Screen**: Connects the motor to the rotor and displays information."
          ]
        },
        ar: {
          title: "2. الأجزاء الرئيسية لجهاز الطرد المركزي",
          items: [
            "**المحرك (Motor)**: محرك كهربائي يشغل الجهاز.",
            "**لوحة التحكم (Control Panel)**: تتحكم في عملية التشغيل.",
            "**الغرفة والدوار (Chamber & Rotor)**: الغرفة تحوي النظام بأكمله، بينما الدوار يحمل أنابيب العينات.",
            "**القفل والغطاء (Latch & Lid)**: يحافظ على إغلاق الجهاز بأمان أثناء التشغيل.",
            "**عمود الإدارة والشاشة (Drive Shaft & Screen)**: يربط المحرك بالدوار ويعرض المعلومات."
          ]
        }
      },
      {
        icon: <Shield className="w-5 h-5" />,
        en: {
          title: "3. Safety Precautions",
          items: [
            "Ensure a sturdy, level work surface.",
            "**Balance the centrifuge**: Sample tubes must be evenly filled and balanced to prevent damage.",
            "Do not open the lid while the rotor is moving.",
            "If the centrifuge is shaking excessively, pull the plug immediately."
          ]
        },
        ar: {
          title: "3. احتياطات السلامة",
          items: [
            "ضمان سطح عمل ثابت ومستوٍ.",
            "**موازنة الجهاز**: يجب أن تكون أنابيب العينات ممتلئة بالتساوي ومتوازنة لمنع التلف.",
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
            "**Fixed angle**: Short distance to travel, shorter run time. Most widely used.",
            "**Swinging buckets**: Longer distance, better separation in density gradient. Easier to withdraw supernatant.",
            "**Vertical tube**: Keeps tubes parallel to the rotational axis. Bands form across the tube's diameter.",
            "**Almost vertical tube**: Used for gradient centrifugation."
          ]
        },
        ar: {
          title: "4. أنواع الدوارات (Rotors)",
          items: [
            "**الزاوية الثابتة (Fixed angle)**: مسافة انتقال قصيرة، وقت تشغيل أقصر. الأكثر استخداماً.",
            "**الدلاء المتأرجحة (Swinging buckets)**: مسافة أطول، فصل أفضل في تدرج الكثافة. يسهل سحب السائل الطافي.",
            "**الأنبوب العمودي (Vertical tube)**: يبقي الأنابيب موازية لمحور الدوران. تتشكل النطاقات عبر قطر الأنبوب.",
            "**الأنبوب شبه العمودي (Almost vertical tube)**: يستخدم للطرد المركزي المتدرج."
          ]
        }
      },
      {
        icon: <AlertCircle className="w-5 h-5" />,
        en: {
          title: "5. Maintenance and Faults",
          items: [
            "**Common faults**: Motor (carbon brushes, internal coil) and electronic faults (power supply, screen).",
            "Keep the centrifuge properly lubricated.",
            "Pay close attention to noise, vibration, or grinding and stop the unit immediately if this occurs."
          ]
        },
        ar: {
          title: "5. الصيانة والأعطال",
          items: [
            "**الأعطال الشائعة**: المحرك (الفرش الكربونية، الملف الداخلي) والأعطال الإلكترونية (مزود الطاقة، الشاشة).",
            "حافظ على تشحيم جهاز الطرد المركزي بشكل صحيح.",
            "انتبه جيداً للضوضاء أو الاهتزاز أو الاحتكاك وأوقف الوحدة فوراً في حالة حدوث ذلك."
          ]
        }
      }
    ]
  },
  lecture3: {
    title: { en: "Lecture 3: Microscope", ar: "المحاضرة 3: المجهر (Microscope)" },
    subtitle: { en: "Medical Instrumentation I - Second Stage", ar: "الأجهزة الطبية 1 - المرحلة الثانية" },
    summaryTitle: { en: "Lecture Summary", ar: "ملخص المحاضرة" },
    summary: {
      en: "This lecture covers the microscope, a precision instrument used to produce highly magnified images of small specimens. It details the main parts of a microscope, including optical and mechanical components, illumination systems, and explores the principles of Compound and Stereo microscopes.",
      ar: "تغطي هذه المحاضرة المجهر، وهو أداة دقيقة تستخدم لإنتاج صور مكبرة جداً للعينات الصغيرة. تفصل المحاضرة الأجزاء الرئيسية للمجهر، بما في ذلك المكونات البصرية والميكانيكية، وأنظمة الإضاءة، وتستكشف مبادئ عمل المجاهر المركبة (Compound) والمجاهر المجسمة (Stereo)."
    },
    termsTitle: { en: "Key Terms", ar: "أهم المصطلحات" },
    terms: [
      {
        id: "microscope", color: "purple",
        en: { term: "Microscope", def: "A precision instrument with optical, mechanical, and electrical subsystems to produce highly magnified images of small specimens." },
        ar: { term: "المجهر (Microscope)", def: "أداة دقيقة تحتوي على أنظمة بصرية وميكانيكية وكهربائية لإنتاج صور مكبرة جداً للعينات الصغيرة." }
      },
      {
        id: "eyepiece", color: "blue",
        en: { term: "Eye Piece", def: "Lenses mounted in a tube at the upper end of the microscope used to look at the magnified image projected by the objective lens." },
        ar: { term: "العدسة العينية (Eye piece)", def: "عدسات مثبتة في أنبوب في الطرف العلوي للمجهر تستخدم للنظر إلى الصورة المكبرة المسقطة بواسطة العدسة الشيئية." }
      },
      {
        id: "objective-lens", color: "red",
        en: { term: "Objective Lens", def: "The lens closest to the specimen that gathers light and projects the image up into the body of the microscope." },
        ar: { term: "العدسة الشيئية (Objective lens)", def: "العدسة الأقرب للعينة والتي تجمع الضوء وتسقط الصورة إلى أعلى داخل جسم المجهر." }
      },
      {
        id: "diaphragm", color: "green",
        en: { term: "Diaphragm", def: "Located under the stage, it adjusts the amount of light passing into the slide or specimen." },
        ar: { term: "الحجاب الحاجز (Diaphragm)", def: "يقع تحت المسرح، ويقوم بضبط كمية الضوء المار إلى الشريحة أو العينة." }
      },
      {
        id: "compound-microscope", color: "amber",
        en: { term: "Compound Microscope", def: "A high-power microscope that uses a single light path through a series of lenses, producing a 2-D, reversed, and upside-down image." },
        ar: { term: "المجهر المركب (Compound Microscope)", def: "مجهر عالي التكبير يستخدم مسار ضوء واحد عبر سلسلة من العدسات، وينتج صورة ثنائية الأبعاد، معكوسة ومقلوبة." }
      },
      {
        id: "stereo-microscope", color: "purple",
        en: { term: "Stereo Microscope", def: "A low-power microscope with two separate light paths that produce a true 3-D image, used for dissecting or inspecting larger items." },
        ar: { term: "المجهر المجسم (Stereo Microscope)", def: "مجهر منخفض التكبير بمسارين منفصلين للضوء ينتج صورة ثلاثية الأبعاد حقيقية، يستخدم للتشريح أو فحص العناصر الأكبر." }
      }
    ],
    sectionsTitle: { en: "Detailed Notes", ar: "الملاحظات التفصيلية" },
    sections: [
      {
        icon: <Layout className="w-5 h-5" />,
        en: {
          title: "1. Mechanical Parts",
          items: [
            "**Arm (Stand/Limb)**: Contains the focus mechanism and supports the stage and head. Provides rigidity. Types include Fixed, Pillar (Post), and Boom (Universal).",
            "**Stage**: The flat platform beneath the objectives where the slide is placed.",
            "**Base**: The bottom support providing balance and rigidity.",
            "**Tube**: Reflects lights up to the viewer's eyes.",
            "**Head (Body)**: Connects eyepiece to nosepiece. Types: Monocular (1 eyepiece), Binocular (2 eyepieces), Trinocular (includes a port for a camera).",
            "**Coarse & Fine Adjustment**: Knobs used to make large and small changes in focus, respectively.",
            "**Rotating Object (Nosepiece)**: Holds multiple objective lenses for quick changes.",
            "**Stage Clips**: Keep the slide in place."
          ]
        },
        ar: {
          title: "1. الأجزاء الميكانيكية",
          items: [
            "**الذراع (Arm)**: يحتوي على آلية التركيز ويدعم المسرح والرأس. يوفر الصلابة للمجهر. أنواعه: الثابت (Fixed)، العمودي (Pillar)، وذراع التطويل (Boom).",
            "**المسرح (Stage)**: المنصة المسطحة أسفل العدسات الشيئية حيث توضع الشريحة.",
            "**القاعدة (Base)**: الدعامة السفلية التي توفر التوازن والصلابة.",
            "**الأنبوب (Tube)**: يعكس الضوء لأعلى إلى عيني المشاهد.",
            "**الرأس/الجسم (Head)**: يربط العدسة العينية بالقطعة الدوارة. أنواعه: أحادي (Monocular)، ثنائي (Binocular)، وثلاثي (Trinocular - يحتوي منفذ لكاميرا).",
            "**الضبط التقريبي والدقيق (Coarse & Fine adjustment)**: مقابض تستخدم لإجراء تغييرات كبيرة وصغيرة في التركيز (الفوكس) على التوالي.",
            "**القطعة الدوارة (Nosepiece)**: تحمل عدة عدسات شيئية لتغييرها بسرعة.",
            "**مشابك المسرح (Stage clips)**: تثبت الشريحة في مكانها."
          ]
        }
      },
      {
        icon: <Zap className="w-5 h-5" />,
        en: {
          title: "2. Optical & Illumination Parts",
          items: [
            "**Eye Piece**: Lenses that magnify the image a second time before it reaches the eye.",
            "**Objective Lens**: Gathers light passing through the specimen. Includes Low power (4X), Medium power (10X), and High power (43X).",
            "**Condenser**: A lens below the stage that gathers light from the source and concentrates it into a cone onto the specimen.",
            "**Diaphragm**: Adjusts the amount of light. Types: Disc Diaphragm (rotating disk with holes) and Iris Diaphragm (continuously variable diameter, like a camera shutter).",
            "**Light Source**: Illuminates the object. Types include Tungsten (common, yellowish, moderate heat), Halogen (hottest, very bright and white), Fluorescent (cool, bright, great for live specimens), and LED (bright white, no heat, battery operated)."
          ]
        },
        ar: {
          title: "2. الأجزاء البصرية وأنظمة الإضاءة",
          items: [
            "**العدسة العينية (Eye piece)**: عدسات تكبر الصورة مرة ثانية قبل أن تصل للعين.",
            "**العدسة الشيئية (Objective lens)**: تجمع الضوء المار عبر العينة. تشمل قوة منخفضة (4X)، متوسطة (10X)، وعالية (43X).",
            "**المكثف (Condenser)**: عدسة أسفل المسرح تجمع الضوء من المصدر وتركزها في شكل مخروط على العينة.",
            "**الحجاب الحاجز (Diaphragm)**: يضبط كمية الضوء. أنواعه: القرصي (Disc - قرص دوار بفتحات) والقزحي (Iris - قطر متغير باستمرار مثل غالق الكاميرا).",
            "**مصدر الضوء (Light source)**: يضيء الجسم. أنواعه تشمل التنجستن (شائع، مصفر، حرارة معتدلة)، الهالوجين (الأكثر حرارة، ساطع وأبيض)، الفلورسنت (بارد، ساطع، ممتاز للعينات الحية)، والليد (أبيض ساطع، بلا حرارة، يعمل بالبطاريات)."
          ]
        }
      },
      {
        icon: <Shield className="w-5 h-5" />,
        en: {
          title: "3. Compound Microscope",
          items: [
            "**Overview**: The most common type, also known as a biological, research, or high-power microscope.",
            "**Magnification**: Ranges from 40x to 1000x (sometimes up to 2000x). Most serious work is done at 400x to 500x.",
            "**Principle**: A single light path passes through a series of lenses.",
            "The image is seen as if it were 10\" (250mm) from your eye.",
            "The objective lens usually consists of 3 to 5 lenses on a rotating turret.",
            "The image produced is two-dimensional (2-D), reversed, and upside down.",
            "Uses **trans-illumination** (light projected from below to pass through the specimen)."
          ]
        },
        ar: {
          title: "3. المجهر المركب (Compound Microscope)",
          items: [
            "**نظرة عامة**: النوع الأكثر شيوعاً، يُعرف أيضاً بالمجهر البيولوجي أو البحثي أو مجهر الطاقة العالية.",
            "**التكبير**: يتراوح من 40x إلى 1000x (وأحياناً يصل إلى 2000x). معظم الأعمال الدقيقة تتم عند 400x إلى 500x.",
            "**مبدأ العمل**: مسار ضوئي واحد يمر عبر سلسلة من العدسات.",
            "تُرى الصورة وكأنها على بعد 10 بوصات (250 ملم) من عينك.",
            "تتكون العدسة الشيئية عادة من 3 إلى 5 عدسات على قطعة دوارة.",
            "الصورة الناتجة تكون ثنائية الأبعاد (2-D)، معكوسة، ومقلوبة رأساً على عقب.",
            "يستخدم **الإضاءة النافذة (trans-illumination)** حيث يُسلط الضوء من الأسفل ليمر عبر العينة."
          ]
        }
      },
      {
        icon: <List className="w-5 h-5" />,
        en: {
          title: "4. Stereo Microscope",
          items: [
            "**Overview**: The second most common type, also known as a dissection, inspection, or low-power microscope. Used for examining larger items like insects, rocks, coins, and circuit boards.",
            "**Magnification**: Ranges from 10x to 80x (10x to 40x is most popular). Zoom models are available.",
            "**Principle**: Uses two separate light paths to produce a true stereo, three-dimensional (3-D) image.",
            "The objective lens contains two lenses side-by-side.",
            "3-D effects are limited to low powers.",
            "Often has both top and bottom built-in illumination to handle various opaque and transparent objects."
          ]
        },
        ar: {
          title: "4. المجهر المجسم (Stereo Microscope)",
          items: [
            "**نظرة عامة**: ثاني أكثر الأنواع شيوعاً، يُعرف أيضاً بمجهر التشريح أو الفحص أو مجهر الطاقة المنخفضة. يستخدم لفحص العناصر الأكبر حجماً مثل الحشرات، الصخور، العملات، واللوحات الإلكترونية.",
            "**التكبير**: يتراوح من 10x إلى 80x (الأكثر شيوعاً 10x إلى 40x). تتوفر موديلات بخاصية التقريب (Zoom).",
            "**مبدأ العمل**: يستخدم مسارين منفصلين للضوء لإنتاج صورة مجسمة حقيقية ثلاثية الأبعاد (3-D).",
            "تحتوي العدسة الشيئية على عدستين متجاورتين.",
            "تأثيرات الـ 3-D تقتصر على قوى التكبير المنخفضة.",
            "غالباً ما يحتوي على إضاءة مدمجة علوية وسفلية للتعامل مع مختلف الأجسام المعتمة والشفافة."
          ]
        }
      }
    ]
  },
  lecture4: {
    title: { en: "Lecture 4: Water Distillation", ar: "المحاضرة 4: جهاز التقطير (Water Distillation)" },
    subtitle: { en: "Medical Instrumentation I - Second Stage", ar: "الأجهزة الطبية 1 - المرحلة الثانية" },
    summaryTitle: { en: "Lecture Summary", ar: "ملخص المحاضرة" },
    summary: {
      en: "This lecture covers the process of water distillation, its application in medical instruments, and the arrangement of its components. It explains the principles of **simple** and **fractional** distillation and their differences.",
      ar: "تغطي هذه المحاضرة عملية تقطير المياه، وتطبيقاتها في الأجهزة الطبية، وترتيب مكوناتها. كما تشرح مبادئ **التقطير البسيط** و**التقطير التجزيئي** والفرق بينهما."
    },
    termsTitle: { en: "Key Terms", ar: "أهم المصطلحات" },
    terms: [
      {
        id: "distillation", color: "blue",
        en: { term: "Distillation", def: "A separation process that involves heating a liquid to its boiling point, transferring the vapour to a different portion of the apparatus, then condensing the vapour and collecting the condensate." },
        ar: { term: "التقطير (Distillation)", def: "عملية فصل تتضمن تسخين سائل إلى نقطة غليانه، ونقل البخار إلى جزء آخر من الجهاز، ثم تكثيف البخار وجمع السائل المكثف." }
      },
      {
        id: "vapour-generator", color: "blue",
        en: { term: "Vapour Generator (Boiling Tank)", def: "The container where the water to be distilled is stored and heated." },
        ar: { term: "مولد البخار / خزان الغليان (Vapour Generator)", def: "الوعاء الذي يتم فيه تخزين وتسخين الماء المراد تقطيره." }
      },
      {
        id: "condenser", color: "blue",
        en: { term: "Condenser", def: "A device in which the vapour loses thermal energy, cools, and returns to its liquid phase." },
        ar: { term: "المكثف (Condenser)", def: "جهاز يفقد فيه البخار طاقته الحرارية، يبرد، ويعود إلى حالته السائلة." }
      },
      {
        id: "simple-distillation", color: "blue",
        en: { term: "Simple Distillation", def: "A distillation process used for separating relatively pure liquids with large boiling point differences (>70°C) or liquids with solid impurities." },
        ar: { term: "التقطير البسيط (Simple Distillation)", def: "عملية تقطير تستخدم لفصل السوائل النقية نسبياً ذات الفروق الكبيرة في درجات الغليان (>70 درجة مئوية) أو السوائل التي تحتوي على شوائب صلبة." }
      },
      {
        id: "fractional-distillation", color: "red",
        en: { term: "Fractional Distillation", def: "A distillation process that uses a fractionating column to provide better separation for complex mixtures of liquids with smaller boiling point differences." },
        ar: { term: "التقطير التجزيئي (Fractional Distillation)", def: "عملية تقطير تستخدم عمود تجزئة لتوفير فصل أفضل للمخاليط المعقدة من السوائل ذات الفروق الصغيرة في درجات الغليان." }
      }
    ],
    sectionsTitle: { en: "Detailed Notes", ar: "الملاحظات التفصيلية" },
    sections: [
      {
        icon: <Layout className="w-5 h-5" />,
        en: {
          title: "1. Operation Principle of Distillation",
          items: [
            "Distillation works by exploiting the different boiling temperatures of liquids.",
            "The more volatile liquid (lower boiling point) evaporates first.",
            "The vapor passes into a condensing column, where it reverts into a liquid (condenses) on the cool glass and trickles into a collection flask.",
            "Heating further causes less volatile liquids to evaporate and distill at higher temperatures.",
            "A pure liquid has a constant boiling point as long as liquid and vapour are in equilibrium."
          ]
        },
        ar: {
          title: "1. مبدأ عمل التقطير",
          items: [
            "يعمل التقطير عن طريق استغلال درجات حرارة الغليان المختلفة للسوائل.",
            "يتبخر السائل الأكثر تطايراً (ذو نقطة الغليان الأقل) أولاً.",
            "يمر البخار إلى عمود التكثيف، حيث يعود إلى سائل (يتكثف) على الزجاج البارد ويتقاطر في دورق التجميع.",
            "يؤدي المزيد من التسخين إلى تبخر السوائل الأقل تطايراً وتقطيرها في درجات حرارة أعلى.",
            "السائل النقي له درجة غليان ثابتة طالما أن السائل والبخار في حالة توازن."
          ]
        }
      },
      {
        icon: <Zap className="w-5 h-5" />,
        en: {
          title: "2. Parts of a Water Distiller",
          items: [
            "**Vapour generator (boiling tank)**: the container where the water to be distilled is stored.",
            "**Water level**: Device which allows the quantity of water to be regulated inside the vapour generator.",
            "**Control valve**: Mechanical or electromechanical device which regulates the flow of water towards the vapour generator tank.",
            "**Hydraulic connection**: Network which supplies water in liquid phase to the vapour generator tank.",
            "**Water in liquid phase**: Water inside the vapour generator tank that receives thermal energy from immersion resistors.",
            "**Immersion resistors**: Devices generating heat when an electrical current circulates through them.",
            "**Refrigeration water outlet**: Line carrying the water used for condensing the water vapour.",
            "**Condenser**: Device in which the vapour loses thermal energy, cools and returns to its liquid phase.",
            "**Filter**: Activated carbon filters located at the exit of the condenser to eliminate flavours or particles.",
            "**Distilled water container**: Device in which the fluid completing the distillation process is collected (must be stored in special plastic containers to avoid ionic contamination).",
            "**Fractionating column**: A column placed between the boiling flask and the condenser in fractional distillation to provide better separation."
          ]
        },
        ar: {
          title: "2. أجزاء جهاز تقطير المياه",
          items: [
            "**مولد البخار (خزان الغليان)**: الوعاء الذي يتم فيه تخزين الماء المراد تقطيره.",
            "**مستوى الماء (Water level)**: جهاز يسمح بتنظيم كمية الماء داخل مولد البخار.",
            "**صمام التحكم (Control valve)**: جهاز ميكانيكي أو كهروميكانيكي ينظم تدفق الماء نحو خزان مولد البخار.",
            "**التوصيل الهيدروليكي (Hydraulic connection)**: شبكة تزود خزان مولد البخار بالماء في حالته السائلة.",
            "**الماء في الحالة السائلة**: الماء داخل خزان مولد البخار الذي يتلقى الطاقة الحرارية من مقاومات الغمر.",
            "**مقاومات الغمر (Immersion resistors)**: أجهزة تولد الحرارة عند مرور تيار كهربائي خلالها.",
            "**مخرج ماء التبريد**: خط يحمل الماء المستخدم لتكثيف بخار الماء وإزالة الطاقة الحرارية منه.",
            "**المكثف (Condenser)**: جهاز يفقد فيه البخار طاقته الحرارية، يبرد ويعود إلى حالته السائلة.",
            "**الفلتر (Filter)**: فلاتر كربون نشط توجد عند مخرج المكثف لإزالة النكهات أو الجسيمات.",
            "**حاوية الماء المقطر**: جهاز يتم فيه جمع السائل بعد إتمام عملية التقطير (يجب تخزينه في أوعية بلاستيكية خاصة لتجنب التلوث الأيوني).",
            "**عمود التجزئة (Fractionating column)**: عمود يوضع بين دورق الغليان والمكثف في التقطير التجزيئي لتوفير فصل أفضل."
          ]
        }
      },
      {
        icon: <Shield className="w-5 h-5" />,
        en: {
          title: "3. Types of Distillation",
          items: [
            "**Simple Distillation**: Consists of a boiling flask attached to an adapter holding a thermometer. The adapter connects to a condenser into which cold water is constantly passed through. Leads into a collection flask.",
            "**Fractional Distillation**: Essentially the same as **simple distillation** except that a **fractionating column** is placed between the boiling flask and the condenser.",
            "**The fractionating column** is usually filled with glass or plastic beads, which provide 'theoretical plates' for the refluxing liquid to condense, re-evaporate, and condense again.",
            "**Fractional distillation** gives better separation between liquids but takes longer and consumes more energy."
          ]
        },
        ar: {
          title: "3. أنواع التقطير",
          items: [
            "**التقطير البسيط (Simple Distillation)**: يتكون من دورق غليان متصل بمحول يحمل مقياس حرارة. يتصل المحول بمكثف يمر من خلاله الماء البارد باستمرار، ويؤدي إلى دورق تجميع.",
            "**التقطير التجزيئي (Fractional Distillation)**: يشبه **التقطير البسيط** أساساً باستثناء وضع **عمود تجزئة** بين دورق الغليان والمكثف.",
            "**عمود التجزئة** عادة ما يكون مملوءاً بخرز زجاجي أو بلاستيكي، والذي يوفر 'ألواحاً نظرية' للسائل المرتد ليتكثف، ويتبخر مرة أخرى، ويتكثف مجدداً.",
            "يوفر **التقطير التجزيئي** فصلاً أفضل بين السوائل ولكنه يستغرق وقتاً أطول ويستهلك طاقة أكثر."
          ]
        }
      },
      {
        type: "table",
        icon: <List className="w-5 h-5" />,
        en: {
          title: "4. Comparison: Simple vs Fractional Distillation",
          headers: ["Feature", "Simple Distillation", "Fractional Distillation"],
          rows: [
            [
              "Advantages",
              "**Simpler** setup. **Faster** distillation time. Consume **less** energy.",
              "**Much better** separation. Can more readily purify **complex mixtures**."
            ],
            [
              "Disadvantages",
              "Requires **large** boiling point differences (>70°C). Gives **poorer** separation. Only works well with relatively **pure** liquids.",
              "**More complicated** setup. Takes **longer** to distill. Consumes **more** energy."
            ],
            [
              "Best Used For",
              "Separating relatively pure liquids with **large** boiling differences or liquids with **solid impurities**.",
              "Separating complex mixtures of liquids with **smaller** boiling point separations."
            ]
          ]
        },
        ar: {
          title: "4. مقارنة: التقطير البسيط مقابل التجزيئي",
          headers: ["الميزة", "التقطير البسيط", "التقطير التجزيئي"],
          rows: [
            [
              "المزايا (Advantages)",
              "إعداد **أبسط**. وقت تقطير **أسرع**. يستهلك طاقة **أقل**.",
              "فصل **أفضل بكثير**. يمكنه تنقية المخاليط **المعقدة** بسهولة أكبر."
            ],
            [
              "العيوب (Disadvantages)",
              "يتطلب فروقاً **كبيرة** في درجات الغليان (>70°C). يوفر فصلاً **أضعف**. يعمل جيداً فقط مع السوائل **النقية** نسبياً.",
              "إعداد **أكثر تعقيداً**. يستغرق وقتاً **أطول**. يستهلك طاقة **أكثر**."
            ],
            [
              "أفضل استخدام (Best Used For)",
              "فصل السوائل النقية نسبياً ذات الفروق **الكبيرة** في درجات الغليان أو السوائل التي تحتوي على **شوائب صلبة**.",
              "فصل المخاليط المعقدة من السوائل ذات الفروق **الصغيرة** في درجات الغليان."
            ]
          ]
        }
      }
    ]
  },
  lecture5: {
    id: 'lecture5',
    title: {
      en: "Lecture 5: OVEN",
      ar: "المحاضرة الخامسة: الفرن الحراري (OVEN)"
    },
    subtitle: {
      en: "Medical Laboratory Equipment",
      ar: "أجهزة المختبرات الطبية"
    },
    summaryTitle: { en: "Lecture Summary", ar: "ملخص المحاضرة" },
    summary: {
      en: "The laboratory oven is a fundamental piece of equipment used for drying, sterilizing, and heating samples at controlled temperatures.",
      ar: "الفرن المختبري هو جهاز أساسي يستخدم لتجفيف وتعقيم وتسخين العينات في درجات حرارة محكومة."
    },
    termsTitle: { en: "Key Terms", ar: "أهم المصطلحات" },
    terms: [
      { 
        id: 'oven', color: "blue",
        en: { term: "Oven", def: "A laboratory device used for drying, sterilizing, and heating samples at controlled temperatures." },
        ar: { term: "الفرن (Oven)", def: "جهاز مختبري يستخدم لتجفيف وتعقيم وتسخين العينات في درجات حرارة محكومة." }
      },
      { 
        id: 'thermostat', color: "red",
        en: { term: "Thermostat", def: "A component that senses the temperature of a system and performs actions so that the system's temperature is maintained near a desired setpoint." },
        ar: { term: "منظم الحرارة (Thermostat)", def: "مكون يستشعر درجة حرارة النظام ويقوم بإجراءات للحفاظ على درجة حرارة النظام قريبة من نقطة الضبط المطلوبة." }
      },
      { 
        id: 'convection', color: "green",
        en: { term: "Convection", def: "The transfer of heat by the movement of a fluid (liquid or gas) between areas of different temperature." },
        ar: { term: "الحمل الحراري (Convection)", def: "انتقال الحرارة عن طريق حركة المائع (سائل أو غاز) بين مناطق ذات درجات حرارة مختلفة." }
      },
      { 
        id: 'fiberglass', color: "amber",
        en: { term: "Fiber Glass", def: "A common type of fiber-reinforced plastic using glass fiber, used as an effective thermal insulator." },
        ar: { term: "الصوف الزجاجي (Fiber Glass)", def: "نوع شائع من البلاستيك المقوى بالألياف باستخدام الألياف الزجاجية، يستخدم كعازل حراري فعال." }
      },
      { 
        id: 'sterilization', color: "red",
        en: { term: "Sterilization", def: "Any process that removes, kills, or deactivates all forms of life and other biological agents present in a specific surface, object or fluid." },
        ar: { term: "التعقيم (Sterilization)", def: "أي عملية تزيل أو تقتل أو تعطل جميع أشكال الحياة والعوامل البيولوجية الأخرى الموجودة في سطح أو جسم أو مائع معين." }
      },
      { 
        id: 'drying', color: "blue",
        en: { term: "Drying", def: "A mass transfer process consisting of the removal of water or another solvent by evaporation from a solid, semi-solid or liquid." },
        ar: { term: "التجفيف (Drying)", def: "عملية انتقال كتلة تتكون من إزالة الماء أو مذيب آخر عن طريق التبخر من مادة صلبة أو شبه صلبة أو سائلة." }
      }
    ],
    sectionsTitle: { en: "Detailed Notes", ar: "الملاحظات التفصيلية" },
    sections: [
      {
        icon: <Activity className="w-5 h-5" />,
        en: {
          title: "1. Classification of Laboratory Ovens",
          items: [
            "**Gravity Convection (Natural)**: Air circulates naturally due to temperature differences. It is slower and less uniform but quieter and cheaper.",
            "**Forced Convection (Mechanical)**: Uses a motorized fan to circulate air. Provides faster heating, better temperature uniformity, and quicker recovery after opening the door.",
            "**Vacuum Ovens**: Used for samples that might be damaged by high temperatures or oxygen; drying occurs at lower temperatures under vacuum.",
            "**High-Temperature Ovens**: Specialized for industrial or specific lab processes requiring temperatures up to 500°C."
          ]
        },
        ar: {
          title: "1. تصنيف الأفران المختبرية",
          items: [
            "**الحمل الحراري الطبيعي (Gravity)**: يدور الهواء بشكل طبيعي بسبب فروق درجات الحرارة. هو أبطأ وأقل انتظاماً ولكنه أهدأ وأرخص ثمناً.",
            "**الحمل الحراري القسري (Forced)**: يستخدم مروحة كهربائية لتدوير الهواء. يوفر تسخيناً أسرع، وانتظاماً أفضل لدرجة الحرارة، واستعادة أسرع للحرارة بعد فتح الباب.",
            "**أفران الفراغ (Vacuum)**: تستخدم للعينات التي قد تتلف بسبب درجات الحرارة العالية أو الأكسجين؛ حيث يتم التجفيف في درجات حرارة أقل تحت ضغط مفرغ.",
            "**أفران الحرارة العالية**: متخصصة للعمليات الصناعية أو المختبرية المحددة التي تتطلب درجات حرارة تصل إلى 500 درجة مئوية."
          ]
        }
      },
      {
        icon: <Settings className="w-5 h-5" />,
        en: {
          title: "2. Detailed Mechanical Components",
          items: [
            "**Outer Cabinet**: Made of mild steel sheets, usually finished with powder coating for durability and chemical resistance.",
            "**Inner Chamber**: Constructed from high-quality stainless steel or aluminium to resist corrosion and allow easy cleaning.",
            "**Thermal Insulation**: A thick layer of **Fiber Glass** or glass wool between the inner and outer walls to minimize heat loss and keep the exterior cool.",
            "**Shelves**: Adjustable and perforated (**with holes**) to allow free circulation of hot air around the samples.",
            "**Door Gasket**: A high-temperature resistant seal made of silicone or asbestos to ensure a tight seal and prevent thermal leakage.",
            "**Air Vents**: Located at the top or sides to allow moisture and fumes to escape during the drying process."
          ]
        },
        ar: {
          title: "2. المكونات الميكانيكية بالتفصيل",
          items: [
            "**الكابينة الخارجية**: مصنوعة من ألواح الفولاذ الطري، وعادة ما تكون مطلية بطلاء حراري للمتانة ومقاومة المواد الكيميائية.",
            "**الحجرة الداخلية**: مصنوعة من الفولاذ المقاوم للصدأ (Stainless Steel) عالي الجودة أو الألمنيوم لمقاومة التآكل وسهولة التنظيف.",
            "**العزل الحراري**: طبقة سميكة من **الصوف الزجاجي** بين الجدران الداخلية والخارجية لتقليل فقدان الحرارة والحفاظ على برودة السطح الخارجي.",
            "**الرفوف**: قابلة للتعديل ومخرمة (**بها ثقوب**) للسماح بالدوران الحر للهواء الساخن حول العينات.",
            "**حاشية الباب (Gasket)**: ختم مقاوم للحرارة العالية مصنوع من السيليكون أو الأسبستوس لضمان الإغلاق المحكم ومنع التسرب الحراري.",
            "**فتحات الهواء**: توجد في الأعلى أو الجوانب للسماح بخروج الرطوبة والأبخرة أثناء عملية التجفيف."
          ]
        }
      },
      {
        icon: <Zap className="w-5 h-5" />,
        en: {
          title: "3. Electrical & Control System",
          items: [
            "**Heating Elements**: Usually made of **Nichrome wire** (Nickel-Chromium), placed in the bottom or sides to generate heat.",
            "**Thermostat (Bimetallic)**: A mechanical switch that uses two different metals to break the circuit when the set temperature is reached.",
            "**PID Controller**: A modern electronic controller that provides precise temperature management using a feedback loop.",
            "**Temperature Sensor (RTD/Thermocouple)**: Sends accurate temperature data to the digital controller.",
            "**Safety Cut-off**: An independent circuit that shuts down power if the temperature exceeds a safe limit (over-temperature protection).",
            "**Indicator Lamps**: Signal when the oven is powered on and when the heating elements are actively working."
          ]
        },
        ar: {
          title: "3. النظام الكهربائي ونظام التحكم",
          items: [
            "**عناصر التسخين**: تصنع عادة من **سلك النيكروم** (نيكل-كروم)، توضع في الأسفل أو الجوانب لتوليد الحرارة.",
            "**الثرموستات (ثنائي المعدن)**: مفتاح ميكانيكي يستخدم معدنين مختلفين لقطع الدائرة عند الوصول إلى درجة الحرارة المطلوبة.",
            "**متحكم PID**: متحكم إلكتروني حديث يوفر إدارة دقيقة لدرجة الحرارة باستخدام حلقة تغذية راجعة.",
            "**حساس الحرارة (RTD/Thermocouple)**: يرسل بيانات دقيقة عن درجة الحرارة إلى المتحكم الرقمي.",
            "**قاطع الأمان**: دائرة مستقلة تفصل الطاقة إذا تجاوزت الحرارة الحد الآمن (حماية من الحرارة الزائدة).",
            "**مصابيح المؤشر**: تشير إلى وقت تشغيل الفرن ووقت عمل عناصر التسخين بشكل نشط."
          ]
        }
      },
      {
        type: 'table',
        icon: <Shield className="w-5 h-5" />,
        en: {
          title: "4. Sterilization Parameters (Dry Heat)",
          headers: ["Temperature (°C)", "Time (Minutes)", "Application"],
          rows: [
            ["160°C", "120 mins (2 hours)", "Glassware, metal instruments"],
            ["170°C", "60 mins (1 hour)", "Oils, powders, heat-stable items"],
            ["180°C", "30 mins", "Rapid sterilization of small items"]
          ]
        },
        ar: {
          title: "4. معايير التعقيم (الحرارة الجافة)",
          headers: ["درجة الحرارة (مئوية)", "الوقت (دقيقة)", "التطبيق"],
          rows: [
            ["160 درجة", "120 دقيقة (ساعتين)", "الأدوات الزجاجية، الأدوات المعدنية"],
            ["170 درجة", "60 دقيقة (ساعة واحدة)", "الزيوت، المساحيق، المواد المستقرة حرارياً"],
            ["180 درجة", "30 دقيقة", "التعقيم السريع للمواد الصغيرة"]
          ]
        }
      },
      {
        icon: <AlertCircle className="w-5 h-5" />,
        en: {
          title: "5. Maintenance & Troubleshooting",
          items: [
            "**Oven not heating**: Check the power supply, fuse, or look for a burnt heating element.",
            "**Temperature inaccuracy**: The thermostat may need **Calibration** using a certified master thermometer.",
            "**Slow heating**: Check if the door gasket is damaged or if the fan motor (in forced models) is failing.",
            "**Cleaning**: Always clean the inner chamber after it cools down to prevent cross-contamination.",
            "**Safety**: Never place flammable liquids or volatile chemicals inside a standard laboratory oven."
          ]
        },
        ar: {
          title: "5. الصيانة واستكشاف الأخطاء",
          items: [
            "**الفرن لا يسخن**: افحص مصدر الطاقة، المصهر (Fuse)، أو ابحث عن عنصر تسخين محترق.",
            "**عدم دقة الحرارة**: قد يحتاج الثرموستات إلى **معايرة (Calibration)** باستخدام محرار مرجعي معتمد.",
            "**التسخين البطيء**: افحص ما إذا كانت حاشية الباب تالفة أو إذا كان محرك المروحة (في موديلات الحمل القسري) معطلاً.",
            "**التنظيف**: قم دائماً بتنظيف الحجرة الداخلية بعد أن تبرد لمنع التلوث المتبادل.",
            "**السلامة**: لا تضع أبداً سوائل قابلة للاشتعال أو مواد كيميائية متطايرة داخل فرن مختبري قياسي."
          ]
        }
      }
    ]
  }
};

const termColors: Record<string, { border: string, shadow: string, bg: string, text: string, badgeBg: string, badgeText: string }> = {
  blue: { border: "border-blue-400", shadow: "shadow-blue-100", bg: "bg-blue-50/40", text: "text-blue-900", badgeBg: "bg-blue-100", badgeText: "text-blue-800" },
  green: { border: "border-emerald-400", shadow: "shadow-emerald-100", bg: "bg-emerald-50/40", text: "text-emerald-900", badgeBg: "bg-emerald-100", badgeText: "text-emerald-800" },
  emerald: { border: "border-emerald-400", shadow: "shadow-emerald-100", bg: "bg-emerald-50/40", text: "text-emerald-900", badgeBg: "bg-emerald-100", badgeText: "text-emerald-800" },
  amber: { border: "border-amber-400", shadow: "shadow-amber-100", bg: "bg-amber-50/40", text: "text-amber-900", badgeBg: "bg-amber-100", badgeText: "text-amber-800" },
  purple: { border: "border-purple-400", shadow: "shadow-purple-100", bg: "bg-purple-50/40", text: "text-purple-900", badgeBg: "bg-purple-100", badgeText: "text-purple-800" },
  rose: { border: "border-rose-400", shadow: "shadow-rose-100", bg: "bg-rose-50/40", text: "text-rose-900", badgeBg: "bg-rose-100", badgeText: "text-rose-800" },
  red: { border: "border-red-400", shadow: "shadow-red-100", bg: "bg-red-50/40", text: "text-red-900", badgeBg: "bg-red-100", badgeText: "text-red-800" },
};

const renderTextWithBadges = (text: string, activeLecture: string, colorClass?: string) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  const colors = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    red: 'bg-red-50 text-red-700 border-red-200',
    green: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    amber: 'bg-amber-100 text-amber-800 border-amber-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200'
  };
  
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const content = part.slice(2, -2);
      
      // Auto-detect color if not explicitly provided
      let finalColor = colorClass;
      if (!finalColor) {
        const lowerContent = content.toLowerCase();
        if (lowerContent.includes('with holes') || content.includes('بها ثقوب')) {
          finalColor = 'blue';
        } else if (activeLecture === 'lecture5') {
          finalColor = 'amber';
        } else if (activeLecture === 'lecture3') {
          finalColor = 'purple';
        } else if (activeLecture === 'lecture2') {
          finalColor = 'green';
        } else {
          finalColor = 'blue';
        }
      }
      
      const color = colors[finalColor as keyof typeof colors] || colors.blue;

      return (
        <span key={i} className={`px-1.5 py-0.5 ${color} rounded-none font-bold mx-0.5 inline-block border`}>
          {content}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export default function App() {
  const [showIframeAlert, setShowIframeAlert] = useState(false);
  const [showLectureModal, setShowLectureModal] = useState(false);
  const [activeLecture, setActiveLecture] = useState('lecture5');
  const [tableFontSize, setTableFontSize] = useState(8); // Default 8px

  const [isDownloading, setIsDownloading] = useState(false);

  const adjustFontSize = (delta: number) => {
    setTableFontSize(prev => Math.max(8, Math.min(24, prev + delta)));
  };

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
        image:        { type: 'jpeg' as const, quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, windowWidth: 414 }, // Force mobile width rendering
        jsPDF:        { unit: 'px', format: [414, 896] as [number, number], orientation: 'portrait' as const }
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
        <div className="max-w-4xl mx-auto px-4 h-auto min-h-16 py-2 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-blue-700 shrink-0 min-w-max">
            <FileText className="w-6 h-6" />
            <span className="font-bold text-lg hidden sm:inline">Lecture Notes</span>
          </div>
          
          {/* Lecture Selector Button */}
          <div className="flex-1 min-w-[150px] flex justify-center items-center gap-2 sm:gap-4" dir="rtl">
            <button
              onClick={() => setShowLectureModal(true)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium text-sm transition-colors border border-slate-200 max-w-[150px] sm:max-w-xs"
              title="اختر المحاضرة"
            >
              <span className="truncate">{content.title.ar}</span>
              <ChevronDown className="w-4 h-4 shrink-0" />
            </button>

            {/* Font Size Controls */}
            <div className="flex items-center bg-slate-100 rounded-lg border border-slate-200 p-1 no-print shrink-0">
              <button 
                onClick={() => adjustFontSize(-1)}
                className="p-1 hover:bg-white rounded transition-colors text-slate-600"
                title="تصغير الخط"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="px-2 flex items-center gap-1 text-slate-700 font-bold min-w-[45px] justify-center">
                <TypeIcon className="w-3 h-3 text-slate-400" />
                <span className="text-xs">{tableFontSize}px</span>
              </div>
              <button 
                onClick={() => adjustFontSize(1)}
                className="p-1 hover:bg-white rounded transition-colors text-slate-600"
                title="تكبير الخط"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
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
                <BookOpen className={`w-6 h-6 ${activeLecture === 'lecture5' ? 'text-amber-600' : activeLecture === 'lecture3' ? 'text-purple-600' : 'text-blue-600'}`} />
                <h2 className="text-2xl font-bold text-slate-900" dir="ltr">{content.summaryTitle.en}</h2>
              </div>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <h2 className="text-2xl font-bold text-slate-900 dir-rtl" dir="rtl">{content.summaryTitle.ar}</h2>
            </div>
            
            <div className="space-y-3">
              <div className={`${activeLecture === 'lecture5' ? 'bg-amber-50/80 border-amber-100' : activeLecture === 'lecture3' ? 'bg-purple-50/80 border-purple-100' : 'bg-blue-50/80 border-blue-100'} rounded-2xl p-6 border shadow-sm`}>
                <p className="text-slate-700 leading-relaxed text-lg" dir="ltr">{renderTextWithBadges(content.summary.en, activeLecture)}</p>
              </div>
              <div className={`${activeLecture === 'lecture5' ? 'bg-amber-50/80 border-amber-100' : activeLecture === 'lecture3' ? 'bg-purple-50/80 border-purple-100' : 'bg-blue-50/80 border-blue-100'} rounded-2xl p-6 border shadow-sm dir-rtl`} dir="rtl">
                <p className="text-slate-700 leading-relaxed text-lg">{renderTextWithBadges(content.summary.ar, activeLecture)}</p>
              </div>
            </div>
          </section>

          {/* Image Section */}
          {content.image && (
            <section className="print-break-inside-avoid flex flex-col items-center">
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm inline-block w-full max-w-3xl">
                <img 
                  src={content.image.url} 
                  alt={content.image.alt.ar} 
                  className="w-full h-auto rounded-xl max-h-[600px] object-contain bg-white"
                  referrerPolicy="no-referrer"
                />
                {content.image.caption && (
                  <p className="text-center text-slate-500 mt-4 font-medium text-sm sm:text-base flex flex-col sm:flex-row items-center justify-center gap-2">
                    <span dir="ltr">{content.image.caption.en}</span>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <span dir="rtl">{content.image.caption.ar}</span>
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Key Terms Section */}
          {content.terms.length > 0 && (
          <section>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-8">
              <div className="flex items-center gap-2">
                <Key className={`w-6 h-6 ${activeLecture === 'lecture5' ? 'text-amber-500' : activeLecture === 'lecture3' ? 'text-purple-500' : 'text-blue-500'}`} />
                <h2 className="text-2xl font-bold text-slate-900" dir="ltr">{content.termsTitle.en}</h2>
              </div>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <h2 className="text-2xl font-bold text-slate-900 dir-rtl" dir="rtl">{content.termsTitle.ar}</h2>
            </div>
            
            <div className="space-y-6">
              {content.terms.map((term: any, idx: number) => {
                const colors = termColors[term.color] || termColors.blue;
                return (
                  <div key={idx} className={`rounded-xl border-l-4 shadow-md overflow-hidden print-break-inside-avoid ${colors.border} ${colors.shadow} ${colors.bg}`}>
                    <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-200/50">
                      {/* English Term */}
                      <div className="p-5 flex-1" dir="ltr">
                        <h3 className="font-bold text-lg mb-3">
                          <span className={`px-3 py-1.5 rounded-md inline-block shadow-sm ${activeLecture === 'lecture3' ? 'bg-purple-100 text-purple-800' : colors.badgeBg + ' ' + colors.badgeText}`}>
                            {term.en.term}
                          </span>
                        </h3>
                        <p className={`leading-relaxed ${colors.text}`}>{term.en.def}</p>
                      </div>
                      {/* Arabic Term */}
                      <div className="p-5 flex-1 dir-rtl" dir="rtl">
                        <h3 className="font-bold text-lg mb-3">
                          <span className={`px-3 py-1.5 rounded-md inline-block shadow-sm ${activeLecture === 'lecture3' ? 'bg-purple-100 text-purple-800' : colors.badgeBg + ' ' + colors.badgeText}`}>
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
                <List className={`w-6 h-6 ${activeLecture === 'lecture5' ? 'text-amber-500' : activeLecture === 'lecture3' ? 'text-purple-500' : 'text-emerald-500'}`} />
                <h2 className={`text-2xl font-bold ${activeLecture === 'lecture3' ? 'text-purple-900' : 'text-slate-900'}`} dir="ltr">{content.sectionsTitle.en}</h2>
              </div>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <h2 className={`text-2xl font-bold ${activeLecture === 'lecture3' ? 'text-purple-900' : 'text-slate-900'} dir-rtl`} dir="rtl">{content.sectionsTitle.ar}</h2>
            </div>
            
            <div className="space-y-10">
              {content.sections.map((section, idx) => (
                <div key={idx} className="print-break-inside-avoid">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`p-2 ${activeLecture === 'lecture5' ? 'bg-amber-50 text-amber-600 border-amber-100' : activeLecture === 'lecture3' ? 'bg-purple-50 text-purple-600 border-purple-100' : 'bg-slate-100 text-slate-700 border-slate-200'} rounded-lg border`}>
                        {section.icon}
                      </span>
                      <h3 className={`font-bold text-xl ${activeLecture === 'lecture3' ? 'text-purple-900' : 'text-slate-900'}`} dir="ltr">{section.en.title}</h3>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <h3 className={`font-bold text-xl ${activeLecture === 'lecture3' ? 'text-purple-900' : 'text-slate-900'} dir-rtl`} dir="rtl">{section.ar.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {section.type === 'table' ? (
                      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-slate-700 border-collapse">
                            <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                              <tr>
                                {section.en.headers?.map((h: string, i: number) => {
                                  const headerColor = i === 1 ? 'text-emerald-700' : i === 2 ? 'text-red-700' : 'text-blue-700';
                                  const alignmentClass = i === 0 ? 'text-right' : 'text-center';
                                  return (
                                    <th key={i} className={`px-3 py-4 border-x border-slate-200 first:border-l-0 last:border-r-0 align-middle min-w-[120px] max-w-[400px] break-words ${i === 0 ? 'w-[120px]' : ''}`}>
                                      <div className={`flex flex-col gap-2 ${alignmentClass} justify-center h-full`}>
                                        <span dir="ltr" className="leading-tight" style={{ fontSize: `${tableFontSize}px` }}>{h}</span>
                                        <div className={`h-px bg-slate-200 w-1/2 ${i === 0 ? 'mr-0 ml-auto' : 'mx-auto'}`}></div>
                                        <span dir="rtl" className={`font-bold ${headerColor} leading-tight`} style={{ fontSize: `${tableFontSize}px` }}>
                                          {section.ar.headers?.[i]}
                                        </span>
                                      </div>
                                    </th>
                                  );
                                })}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              {section.en.rows?.map((row: string[], i: number) => (
                                <React.Fragment key={i}>
                                  {/* English Row */}
                                  <tr className="hover:bg-slate-50/50 transition-colors">
                                    {row.map((cell: string, j: number) => {
                                      const badgeColor = j === 1 ? 'blue' : j === 2 ? 'red' : 'blue';
                                      const alignmentClass = j === 0 ? 'text-right' : 'text-left';
                                      return (
                                        <td key={j} className={`px-3 py-4 align-top border-x border-slate-200 first:border-l-0 last:border-r-0 min-w-[120px] max-w-[400px] break-words ${j === 0 ? 'bg-slate-50/30 w-[120px]' : ''}`}>
                                          <div 
                                            dir="ltr" 
                                            className={`leading-relaxed text-slate-600 min-h-[1.2em] ${alignmentClass}`}
                                            style={{ fontSize: `${tableFontSize}px` }}
                                          >
                                            {renderTextWithBadges(cell, activeLecture, badgeColor)}
                                          </div>
                                        </td>
                                      );
                                    })}
                                  </tr>
                                  {/* Arabic Row */}
                                  <tr className="bg-slate-50/20 hover:bg-slate-50/50 transition-colors">
                                    {section.ar.rows?.[i].map((cell: string, j: number) => {
                                      const badgeColor = j === 1 ? 'blue' : j === 2 ? 'red' : 'blue';
                                      return (
                                        <td key={j} className={`px-3 py-4 align-top border-x border-slate-200 first:border-l-0 last:border-r-0 min-w-[120px] max-w-[400px] break-words ${j === 0 ? 'bg-slate-50/30 w-[120px]' : ''}`}>
                                          <div 
                                            dir="rtl" 
                                            className="leading-relaxed text-slate-900 font-medium text-right w-full min-h-[1.2em]"
                                            style={{ fontSize: `${tableFontSize}px` }}
                                          >
                                            {renderTextWithBadges(cell, activeLecture, badgeColor)}
                                          </div>
                                        </td>
                                      );
                                    })}
                                  </tr>
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {section.en.items?.map((item: string, i: number) => (
                          <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden print-break-inside-avoid">
                            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                              {/* English Item */}
                              <div className="p-5 flex-1 bg-white" dir="ltr">
                                <div className="flex items-start gap-3 text-slate-800">
                                  <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 shadow-sm ${activeLecture === 'lecture5' ? 'bg-amber-500' : activeLecture === 'lecture3' ? 'bg-purple-500' : 'bg-blue-500'}`}></span>
                                  <span className="leading-relaxed font-medium text-lg">{renderTextWithBadges(item, activeLecture)}</span>
                                </div>
                              </div>
                              {/* Arabic Translation */}
                              {section.ar.items?.[i] && (
                                <div className="p-5 flex-1 bg-slate-50/30 dir-rtl" dir="rtl">
                                  <div className="flex items-start gap-3 text-slate-700 text-right w-full">
                                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${activeLecture === 'lecture5' ? 'bg-amber-400' : activeLecture === 'lecture3' ? 'bg-purple-400' : 'bg-slate-400'}`}></span>
                                    <span className="leading-relaxed text-lg w-full font-medium">{renderTextWithBadges(section.ar.items[i], activeLecture)}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
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
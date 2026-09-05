export const companyInfo = {
  name: 'الخلفاء للتجارة العامة',
  shortName: 'الخلفاء',
  slogan: 'مواد بناء موثوقة لتجهيز المشاريع في العراق',
  description:
    'شركة متخصصة في تجارة وتجهيز مواد البناء، وتعمل على تلبية احتياجات المقاولين وأصحاب المشاريع والعملاء التجاريين عبر كميات موثوقة وجودة عالية وسرعة تجهيز.',
  phoneNumber: '07890005180',
  secondaryPhoneNumber: '07769000051',
  phoneNumbers: ['07890005180', '07769000051'],
  whatsappNumber: '07890005180',
  email: 'info@alkhulafa-iq.com',
  facebook: 'https://web.facebook.com/profile.php?id=61565342556769&locale=tl_PH#',
  instagram: 'https://www.instagram.com/alkhulafa_company',
  whatsappUrl: 'https://wa.me/+9647890005180',
  phoneUrl: 'tel:07890005180',
  locations: [
    {
      city: 'النجف الأشرف',
      address: 'شارع نفط غري',
      mapUrl: 'https://maps.app.goo.gl/MMCcmJQYprxs1jFG7',
    },
    {
      city: 'بغداد',
      address: 'العامرية / شارع البصرة',
      mapUrl: 'https://maps.google.com/?q=%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%B1%D9%8A%D8%A9%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%A8%D8%B5%D8%B1%D8%A9',
    },
    {
      city: 'كربلاء',
      address: 'شارع المجمعات',
      mapUrl: 'https://maps.google.com/?q=%D9%83%D8%B1%D8%A8%D9%84%D8%A7%D8%A1%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D9%85%D8%AC%D9%85%D8%B9%D8%A7%D8%AA',
    },
  ],
  heroImage:
    '/hero.JPG',
}

export const navItems = [
  { label: 'الرئيسية', to: '/' },
  { label: 'مواد البناء', to: '/materials' },
  { label: 'المنتجات', to: '/products' },
  { label: 'عن الشركة', to: '/about' },
  { label: 'مواقعنا', to: '/locations' },
  { label: 'تواصل معنا', to: '/contact' },
]

export const stats = [
  { value: 'منتجات متنوعة', label: 'مجموعة مواد بناء شاملة' },
  { value: 'تغطية عدة محافظات', label: 'خدمة في النجف وبغداد وكربلاء' },
  { value: 'تجهيز المشاريع', label: 'حلول مخصصة للمقاولين' },
  { value: 'خبرة في السوق', label: 'استجابة سريعة وموثوقية' },
]

export const materials = [
  {
    slug: 'leca-block',
    name: 'بلوك ليكا',
    shortDescription:
      'بلوك خفيف الوزن ومناسب لأعمال القواطع والتقسيمات مع عزل حراري وصوتي ومقاومة جيدة للأحمال.',
    description:
      'بلوك ليكا هو خيار متوازن بين الخفة والمتانة، ويُستخدم بكثرة في أعمال الجدران الداخلية والخارجية، خاصة في المشاريع التي تحتاج إلى تقليل الأحمال وتحسين العزل الحراري والصوتي.',
    image:
      '/leca.png',
    specificationGroups: [
      { label: 'المادة', value: 'بلوك خفيف الوزن' },
      { label: 'الاستخدام', value: 'قواطع وتجهيزات داخلية' },
      { label: 'الوزن', value: 'من 6 إلى 8 كغم تقريبًا' },
      { label: 'المقاسات', value: '20×40×10 / 15 / 20 سم' },
      { label: 'الخصائص', value: 'عزل حراري وصوتي' },
      { label: 'نوع الاستخدام', value: 'مناسب للمباني السكنية والتجارية' },
      { label: 'المادة الاولية', value: 'مصنوع من مادة حبيبات الليكا بنسبة 85% + سمنت + ماء' },
    ],
    features: [
      'خفيف الوزن يقلل من الأحمال على الهيكل.',
      'مناسب للجدران الداخلية والخارجية مع عزل حراري جيد.',
      'يساعد على سرعة التنفيذ وتقليل وقت البناء.',
      'يمنح الأسطح مظهرًا متوازنًا ومناسبًا للإنهاء.',
      'مقاوم للحرائق يتحمل 3 ساعات تقريبا بدرجة حرارة 1100 درجة سيليزية قبل ان تنصهر المادة',
      'تحقق جدران خرسانة الليكا انخفاضاً في مستويات الصوت يصل إلى 45 ديسيبل ( RW = 45dB )',
      'يتميز معامل التوصيل الحراري لحبيبات الليكا بالانخفاض الشديد ( يتراوح بين 0.09 و0.101 واط/متر درجة مئوية )',
      'تحفظ البرودة في الصيف و تحفظ الحرارة في الشتاء و ذلك بسبب انخفاض معامل التوصيل الحراري لحبيبات الليكا',
    ],
    applications: [
      'أعمال القواطع الداخلية',
      'تجهيز الجدران غير الحاملة',
      'المباني السكنية والتجارية',
      'مشاريع التوسعة والواجهات',
    ],
    seo: {
      title: 'بلوك ليكا | الخلافة للتجارة العامة',
      description: 'اكتشف بلوك ليكا من شركة الخلفاء للتجارة العامة، الحل المثالي للأعمال الإنشائية الخفيفة مع عزل حراري وصوتي.',
      keywords: ['بلوك ليكا', 'مواد بناء', 'تجهيز البناء', 'العراق'],
    },
    productSlugs: ['leca-20x40x20-4-wall', 'leca-20x40x20-3-wall', 'leca-20x40x15-3-wall', 'leca-20x40x10-2-wall'],
  },
]

export const products = [
  {
    slug: 'leca-20x40x20-4-wall',
    name: 'بلوك ليكا 20×40×20 — نوع 4 جدار',
    materialSlug: 'leca-block',
    shortDescription: 'بلوك ليكا قياسي بابعاد 20×40×20 مناسب للجدار الخارجي مع ثبات جيد ومقاومة مناسبة.',
    description:
      'يوفر هذا المنتج أداءً ممتازًا في أعمال الجدران الخارجية والتقسيمات الثقيلة، مع وزن مناسب يساعد على تقليل الحمل وزيادة سرعة التنفيذ.',
    image:
      '/leca204.png',
    gallery: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    specifications: [
      { label: 'المقاس', value: '20×40×20 سم' },
      { label: 'الوزن', value: '8 كغم' },
      { label: 'نوع الاستخدام', value: 'جدار 4' },
      { label: 'التطبيق', value: 'أعمال الجدران الخارجية والداخلية' },
    ],
    features: ['قوة مناسبة في التنفيذ', 'مقاومة جيدة للتنفيذ السريع', 'عزل حراري وصوتي', 'تنوع الاستخدام في المشاريع'],
    applications: ['الجدران الحاملة', 'التقسيمات الخارجية', 'الواجهات السريعة', 'المباني السكنية'],
    dimensions: '20 × 40 × 20 سم',
    weight: '8 كغم',
    usage: 'نوع 4 جدار',
    seo: {
      title: 'بلوك ليكا 20×40×20 نوع 4 جدار | الخلفاء للتجارة العامة',
      description: 'بلوك ليكا 20×40×20 نوع 4 جدار من شركة الخلفاء للتجارة العامة، مناسب للمشاريع السكنية والتجارية.',
      keywords: ['بلوك ليكا 20x40x20', 'نوع 4 جدار', 'مواد بناء', 'العراق'],
    },
  },
  {
    slug: 'leca-20x40x20-3-wall',
    name: 'بلوك ليكا 20×40×20 — نوع 3 جدار',
    materialSlug: 'leca-block',
    shortDescription: 'بلوك خفيف الوزن بابعاد 20×40×20 مناسب للأعمال والتقسيمات المتوسطة.',
    description:
      'هذا المنتج مناسب للمشاريع التي تحتاج إلى جدران متوازنة بين الأداء والوزن، مع سرعة تنفيذ عالية وتوفير في الحمل الهيكلي.',
    image:
      '/leca203.png',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    specifications: [
      { label: 'المقاس', value: '20×40×20 سم' },
      { label: 'الوزن', value: '7 كغم' },
      { label: 'نوع الاستخدام', value: 'جدار 3' },
      { label: 'التطبيق', value: 'تجهيزات الجدران الداخلية' },
    ],
    features: ['مناسب للتقسيمات المتوسطة', 'خفيف الوزن', 'يستوعب أعمال التشطيبات', 'يقلل زمن التنفيذ'],
    applications: ['الجدران الداخلية', 'التجهيزات السكنية', 'أعمال التوسعة', 'التقسيمات السريعة'],
    dimensions: '20 × 40 × 20 سم',
    weight: '7 كغم',
    usage: 'نوع 3 جدار',
    seo: {
      title: 'بلوك ليكا 20×40×20 نوع 3 جدار | الخلفاء للتجارة العامة',
      description: 'بلوك ليكا 20×40×20 نوع 3 جدار مناسب للتجهيزات السريعة والجدران المتوسطة داخل المشاريع.',
      keywords: ['بلوك ليكا 3 جدار', 'مواد بناء', 'تجهيزات داخلية', 'العراق'],
    },
  },
  {
    slug: 'leca-20x40x15-3-wall',
    name: 'بلوك ليكا 20×40×15 — نوع 3 جدار',
    materialSlug: 'leca-block',
    shortDescription: 'مقاس 20×40×15 مناسب للجدران الداخلية وتقسيمات المشاريع صغيرة ومتوسطة.',
    description:
      'يُستخدم هذا المقاس على نطاق واسع في الأعمال التنفيذية التي تحتاج إلى حلول خفيفة في الجدران الداخلية مع سهولة تركيب وخصائص عزل جيدة.',
    image:
      '/leca153.png',
    gallery: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    ],
    specifications: [
      { label: 'المقاس', value: '20×40×15 سم' },
      { label: 'الوزن', value: '6 كغم' },
      { label: 'نوع الاستخدام', value: 'جدار 3' },
      { label: 'التطبيق', value: 'أعمال التقسيم الداخلي' },
    ],
    features: ['مثالي للتقسيمات الداخلية', 'خفيف وسريع في التنفيذ', 'مناسب للإنهاء الجيد', 'ملائم للمباني السكنية'],
    applications: ['التقسيمات الداخلية', 'الحوائط المنزلية', 'مساحات العمل', 'المشاريع الصغيرة والمتوسطة'],
    dimensions: '20 × 40 × 15 سم',
    weight: '6 كغم',
    usage: 'نوع 3 جدار',
    seo: {
      title: 'بلوك ليكا 20×40×15 نوع 3 جدار | الخلفاء للتجارة العامة',
      description: 'بلوك ليكا 20×40×15 مناسب للتقسيمات الداخلية في المشاريع السكنية والتجارية.',
      keywords: ['بلوك ليكا 15', 'تقسيمات داخلية', 'مواد بناء', 'العراق'],
    },
  },
  {
    slug: 'leca-20x40x10-2-wall',
    name: 'بلوك ليكا 20×40×10 — نوع 2 جدار',
    materialSlug: 'leca-block',
    shortDescription: 'مقاس خفيف يصلح للتقسيمات الرقيقة وملء الأعمال الداخلية ذات الارتفاعات المحدودة.',
    description:
      'يُعد هذا المقاس مناسبًا عندما تحتاج إلى جدران خفيفة ذات سمك أقل، خاصة في تقسيمات المساحات الداخلية مع الحفاظ على سهولة التنفيذ وراحة الاستخدام.',
    image:
      '/leca102.png',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
    ],
    specifications: [
      { label: 'المقاس', value: '20×40×10 سم' },
      { label: 'الوزن', value: '6 كغم' },
      { label: 'نوع الاستخدام', value: 'جدار 2' },
      { label: 'التطبيق', value: 'تقسيمات داخلية خفيفة' },
    ],
    features: ['مثالي لتقسيم المساحات', 'خفيف وسريع', 'يدعم التهوية والراحة الحرارية', 'مناسب للإنشاء بسرعة'],
    applications: ['التقسيمات الرقيقة', 'مداخل المكاتب', 'الاستوديوهات', 'التجهيزات البسيطة'],
    dimensions: '20 × 40 × 10 سم',
    weight: '6 كغم',
    usage: 'نوع 2 جدار',
    seo: {
      title: 'بلوك ليكا 20×40×10 نوع 2 جدار | الخلفاء للتجارة العامة',
      description: 'بلوك ليكا 20×40×10 نوع 2 جدار مناسب للحوائط الرقيقة والتقسيمات الداخلية في المشاريع المختلفة.',
      keywords: ['بلوك ليكا 10', 'تقسيمات خفيفة', 'مواد بناء', 'العراق'],
    },
  },
]

export const getMaterialBySlug = (slug) => materials.find((material) => material.slug === slug)

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug)

export const getProductsByMaterialSlug = (slug) =>
  products.filter((product) => product.materialSlug === slug)

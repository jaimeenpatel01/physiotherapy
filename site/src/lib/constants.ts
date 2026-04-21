export const SITE_CONFIG = {
  name: "Home Physiotherapy Visits",
  owner: "Dr. Ketu Patel",
  qualification: "BPT (Bachelor of Physiotherapy)",
  experience: "1+ Year Experience",
  phone: "7046083586",
  phoneFormatted: "+91 70460 83586",
  email: "drketupatel0209@gmail.com",
  whatsappNumber: "917046083586",
  whatsappMessage: encodeURIComponent(
    "Hello Dr. Ketu Patel, I would like to book a home physiotherapy visit."
  ),
  location: "Gandhinagar, Gujarat, India",
  gujaratiLocation: "ગાંધીનગર, ગુજરાત, ભારત",
  languages: ["Gujarati", "Hindi", "English"],
  specializations: ["Manual Therapy", "Pain Relief", "Strength Training"],
};

export const PHONE_LINK = `tel:+91${SITE_CONFIG.phone}`;
export const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${SITE_CONFIG.whatsappMessage}`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Techniques", href: "/techniques" },
  { label: "Areas", href: "/areas" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "orthopedic",
    title: "Orthopedic Conditions",
    description:
      "Expert treatment for joint pain, fractures, arthritis, frozen shoulder, back pain, and all musculoskeletal disorders.",
    icon: "🦴",
    details: [
      "Joint pain & stiffness",
      "Fracture rehabilitation",
      "Arthritis management",
      "Frozen shoulder",
      "Back & neck pain",
      "Knee replacement rehab",
    ],
  },
  {
    id: "neurological",
    title: "Neurological Conditions",
    description:
      "Specialized care for stroke recovery, paralysis, Parkinson's disease, and nerve-related conditions in your home.",
    icon: "🧠",
    details: [
      "Stroke rehabilitation",
      "Paralysis recovery",
      "Parkinson's therapy",
      "Nerve injury rehab",
      "Balance training",
      "Coordination exercises",
    ],
  },
  {
    id: "cardiopulmonary",
    title: "Cardiopulmonary Conditions",
    description:
      "Breathing exercises, cardiac rehabilitation, and lung capacity improvement through guided physiotherapy.",
    icon: "❤️",
    details: [
      "Cardiac rehabilitation",
      "Breathing exercises",
      "COPD management",
      "Post-surgery chest physio",
      "Lung capacity improvement",
      "Endurance training",
    ],
  },
  {
    id: "sports",
    title: "Sports Rehabilitation",
    description:
      "Get back in the game with targeted sports injury treatment and performance-focused rehabilitation.",
    icon: "⚽",
    details: [
      "Sports injury recovery",
      "Ligament injury rehab",
      "Muscle strain treatment",
      "Performance enhancement",
      "Injury prevention",
      "Return-to-sport programs",
    ],
  },
  {
    id: "operative",
    title: "Pre/Post Operative Rehab",
    description:
      "Comprehensive rehabilitation before and after surgery to ensure faster recovery and better outcomes.",
    icon: "🏥",
    details: [
      "Pre-surgery strengthening",
      "Post-surgery mobilization",
      "Joint replacement rehab",
      "Spine surgery recovery",
      "Scar tissue management",
      "Range of motion restoration",
    ],
  },
  {
    id: "fitness",
    title: "Fitness & Health",
    description:
      "Personalized fitness programs designed for your health goals, age, and physical condition.",
    icon: "💪",
    details: [
      "Personalized exercise plans",
      "Weight management",
      "Flexibility training",
      "Core strengthening",
      "Senior fitness programs",
      "Functional training",
    ],
  },
  {
    id: "pregnancy",
    title: "Pre/Post Pregnancy Exercises",
    description:
      "Safe, guided exercises for expecting and new mothers to maintain health and aid recovery.",
    icon: "🤰",
    details: [
      "Prenatal exercises",
      "Postnatal recovery",
      "Pelvic floor strengthening",
      "Core restoration",
      "Back pain relief",
      "Safe mobility exercises",
    ],
  },
  {
    id: "home-exercise",
    title: "Home Exercise Program",
    description:
      "Customized exercise programs designed specifically for you, taught and monitored at your home.",
    icon: "🏠",
    details: [
      "Customized routines",
      "Video demonstrations",
      "Progress tracking",
      "Regular modifications",
      "Pain management exercises",
      "Self-care training",
    ],
  },
] as const;

export const TECHNIQUES = [
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    description:
      "Hands-on techniques to mobilize joints and soft tissues, reducing pain and improving movement.",
    icon: "🤲",
  },
  {
    id: "dry-needling",
    title: "Dry Needling",
    description:
      "Precise needle insertion into trigger points to release muscle tension and alleviate chronic pain.",
    icon: "📌",
  },
  {
    id: "tens",
    title: "TENS",
    description:
      "Transcutaneous Electrical Nerve Stimulation for effective, drug-free pain management.",
    icon: "⚡",
  },
  {
    id: "ift",
    title: "IFT",
    description:
      "Interferential Therapy using medium-frequency electrical currents for deep tissue pain relief.",
    icon: "🔌",
  },
  {
    id: "ultrasound",
    title: "Ultrasound Therapy",
    description:
      "Therapeutic ultrasound waves to promote tissue healing and reduce inflammation.",
    icon: "📡",
  },
  {
    id: "exercise-therapy",
    title: "Exercise Therapy",
    description:
      "Prescribed therapeutic exercises tailored to your condition for strength and recovery.",
    icon: "🏋️",
  },
  {
    id: "taping",
    title: "Taping",
    description:
      "Kinesiology and sports taping to support joints, reduce swelling, and aid recovery.",
    icon: "🩹",
  },
  {
    id: "myofascial-release",
    title: "Myofascial Release",
    description:
      "Gentle sustained pressure on soft tissue to eliminate pain and restore motion.",
    icon: "🔄",
  },
  {
    id: "posture-correction",
    title: "Posture Correction",
    description:
      "Assessment and correction of postural imbalances to prevent pain and improve alignment.",
    icon: "🧍",
  },
  {
    id: "cupping",
    title: "Cupping Therapy",
    description:
      "Traditional cupping technique to improve blood flow, reduce muscle tension, and promote healing.",
    icon: "🫙",
  },
  {
    id: "electro-needling",
    title: "Electro Needling Therapy",
    description:
      "Combination of dry needling with electrical stimulation for enhanced pain relief and recovery.",
    icon: "💉",
  },
  {
    id: "iastm",
    title: "IASTM",
    description:
      "Instrument Assisted Soft Tissue Mobilization to break down scar tissue and fascial restrictions.",
    icon: "🔧",
  },
  {
    id: "chiropractic",
    title: "Chiropractic & Osteopathy",
    description:
      "Spinal adjustments and osteopathic techniques for alignment, pain relief, and overall wellness.",
    icon: "🦴",
  },
  {
    id: "myokinetic",
    title: "Myokinetic Release",
    description:
      "Advanced technique combining movement and manual therapy for deep muscular release.",
    icon: "🌊",
  },
] as const;

export const AREAS = [
  { name: "Gandhinagar — All Sectors", gujaratiName: "ગાંધીનગર — બધા સેક્ટરો", primary: true },
  { name: "Pethapur", gujaratiName: "પેથાપુર", primary: false },
  { name: "Randheja", gujaratiName: "રાંધેજા", primary: false },
  { name: "Raysan", gujaratiName: "રાયસણ", primary: false },
  { name: "Randesan", gujaratiName: "રાંદેસણ", primary: false },
  { name: "Adalaj", gujaratiName: "અડાલજ", primary: false },
  { name: "Vavol", gujaratiName: "વાવોલ", primary: false },
  { name: "Uvarsad", gujaratiName: "ઉવારસદ", primary: false },
  { name: "Tintoda", gujaratiName: "ટીંટોડા", primary: false },
  { name: "Kudasan", gujaratiName: "કુડાસણ", primary: false },
  { name: "Sargasan", gujaratiName: "સરગાસણ", primary: false },
] as const;

export const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    location: "Sector 21, Gandhinagar",
    gujaratiLocation: "સેક્ટર ૨૧, ગાંધીનગર",
    text: "Dr. Ketu Patel's home physiotherapy service was a blessing. After my knee surgery, I couldn't travel to a clinic. The personalized treatment plan helped me recover much faster than expected.",
    rating: 5,
  },
  {
    name: "Meena Ben Patel",
    location: "Adalaj",
    gujaratiLocation: "અડાલજ",
    text: "My mother had a stroke and needed daily physio. Dr. Ketu Patel's home visits saved us so much trouble. His exercises and care helped her regain movement in just a few weeks.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    location: "Kudasan",
    gujaratiLocation: "કુડાસણ",
    text: "I was suffering from chronic back pain for months. Dr. Ketu's combination of manual therapy and exercise program gave me relief I hadn't found anywhere else. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Shah",
    location: "Sargasan",
    gujaratiLocation: "સરગાસણ",
    text: "As a working professional, visiting a clinic was impossible. Dr. Ketu Patel's home visits fit perfectly into my schedule. Professional, punctual, and extremely effective treatment.",
    rating: 5,
  },
] as const;

export const FAQS = [
  {
    question: "What is home physiotherapy?",
    answer:
      "Home physiotherapy is professional physiotherapy treatment provided at your home by a qualified physiotherapist. You receive the same quality of care as a clinic, but in the comfort and convenience of your own home.",
  },
  {
    question: "How long is each session?",
    answer:
      "Each physiotherapy session typically lasts 45 minutes to 1 hour, depending on your condition and treatment plan. The first assessment session may take slightly longer.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We provide home physiotherapy visits across Gandhinagar (all sectors), Pethapur, Randheja, Raysan, Randesan, Adalaj, Vavol, Uvarsad, Tintoda, Kudasan, and Sargasan.",
  },
  {
    question: "Do I need a doctor's referral?",
    answer:
      "A doctor's referral is not necessary but recommended. You can directly contact us for an assessment, and we'll determine the best treatment plan for your condition.",
  },
  {
    question: "What conditions can you treat at home?",
    answer:
      "We treat a wide range of conditions including back pain, neck pain, joint problems, post-surgery rehabilitation, stroke recovery, sports injuries, and many more. Contact us for specific condition inquiries.",
  },
  {
    question: "What equipment do you bring for home visits?",
    answer:
      "We carry all necessary portable equipment including TENS machine, ultrasound device, exercise bands, taping materials, and other therapeutic tools required for your treatment.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by calling us directly, sending a WhatsApp message, or filling out the contact form on our website. We'll confirm your appointment within a few hours.",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Qualified Professional",
    description:
      "BPT-certified physiotherapist with expertise in multiple specializations and modern techniques.",
    icon: "🎓",
  },
  {
    title: "Home Visit Convenience",
    description:
      "No travel stress. Receive professional treatment in the comfort of your own home.",
    icon: "🏠",
  },
  {
    title: "Personalized Care",
    description:
      "Every treatment plan is tailored to your specific condition, goals, and progress.",
    icon: "💎",
  },
  {
    title: "Modern Techniques",
    description:
      "Access to 14+ advanced physiotherapy techniques including dry needling, IASTM, and more.",
    icon: "🔬",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Book appointments at times that suit you, including early mornings and evenings.",
    icon: "⏰",
  },
  {
    title: "Multilingual Support",
    description:
      "Communicate comfortably in Gujarati, Hindi, or English for the best care experience.",
    icon: "🗣️",
  },
] as const;

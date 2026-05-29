import { Review, FAQCategory, Specialty } from "../types";

export const CLINIC_INFO = {
  name: "Family Clinic Health Care",
  shortName: "Family Clinic",
  tagline: "HEALTH CARE",
  address: "Via F.lli Rosselli 58, 36100 Vicenza, Italy",
  phone: "+39 0444 1943203",
  phoneDisplay: "0444 1943203",
  whatsapp: "+39 320 221 6877",
  whatsappLink: "https://wa.me/393202216877?text=Hi%2C%20I%27d%20like%20to%20book%20a%20visit%20at%20Family%20Clinic",
  email: "info@familyclinic.health",
  hoursWeekday: "Monday – Friday · 9:00 – 19:00",
  hoursSaturday: "Some Saturdays · 9:00 – 13:00",
  hoursNote: "Hours may vary by specialist. WhatsApp us to check availability.",
};

export const ACCEPTED_INSURANCES = [
  { logo: "https://familyclinic.health/images/assicurazioni-01.png", name: "TRICARE" },
  { logo: "https://familyclinic.health/images/assicurazioni-02.png", name: "Aetna" },
  { logo: "https://familyclinic.health/images/assicurazioni-03.png", name: "Cigna" },
  { logo: "https://familyclinic.health/images/assicurazioni-04.png", name: "Blue Cross Blue Shield" },
  { logo: "https://familyclinic.health/images/assicurazioni-05.png", name: "UnitedHealthcare" },
  { logo: "https://familyclinic.health/images/assicurazioni-06.png", name: "MetLife" }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "1",
    authorName: "Sarah Peterson (US Army spouse)",
    rating: 5,
    relativeTimeDescription: "2 weeks ago",
    profilePhotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
    text: "Being stationed at Caserma Ederle with minor kids can be stressful when it comes to healthcare. Family Clinic was a lifesaver. The doctor spoke perfect English, explained everything beautifully, and they handled all our TRICARE paperwork directly. No translation issues, no headache."
  },
  {
    id: "2",
    authorName: "Marcus Vance (DoD Contractor)",
    rating: 5,
    relativeTimeDescription: "1 month ago",
    profilePhotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
    text: "Absolutely top-tier service. I needed an ECG and a specialist consult quickly due to chest discomfort, and they were able to get me seen, tested, and have results interpreted on the same day. Incredibly efficient. Understood my US insurance expectations perfectly."
  },
  {
    id: "3",
    authorName: "Emily Sullivan (International Expat)",
    rating: 5,
    relativeTimeDescription: "3 weeks ago",
    profilePhotoUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=120",
    text: "The pelvic floor and women's health program here is world-class. To find specialists in Vicenza who communicate in English with such compassionate, patient-first care is amazing. The clinic environment is peaceful, clean, and highly professional."
  },
  {
    id: "4",
    authorName: "John Mitchell (US Military Officer)",
    rating: 5,
    relativeTimeDescription: "2 months ago",
    profilePhotoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    text: "Outstanding primary care. I've been using Family Clinic as my main family doctor since arriving in Italy. Having medical records issued in CPT/ICD-10 English compatible formats makes claims with my US insurance absolute breeze. Outstanding coordination."
  },
  {
    id: "5",
    authorName: "Elena Rossi (Italian Patient)",
    rating: 5,
    relativeTimeDescription: "3 months ago",
    profilePhotoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
    text: "Sono venuta qui per evitare le interminabili liste d'attesa del SSN. L'esperienza è stata fantastica: tempi brevi, grandissima coordinazione tra i medici e un approccio davvero incentrato sulla persona. Consigliatissimo anche per gli italiani!"
  }
];

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    anchor: "#cardiology",
    eyebrow: "SPECIALIST CARE · CARDIOLOGY",
    h2: "Advanced cardiovascular care and preventative diagnostics.",
    description: "Consult with a cardiologist who evaluates and manages complex cardiovascular conditions with full bilingual fluency. Each visit includes a comprehensive clinical examination and, when clinically indicated, immediate on-site diagnostics like electrocardiography or cardiac ultrasounds during the very same session to minimize travel and coordinate immediate answers.",
    image: "https://familyclinic.health/images/spec_1.jpg",
    conditions: [
      "Hypertension (high blood pressure) management",
      "Arrhythmias and palpitations",
      "Chest pain evaluation",
      "Post-heart attack follow-up",
      "Pre-operative cardiac clearance",
      "Cardiovascular risk screening",
      "Heart murmur evaluation",
      "Post-COVID cardiac assessment"
    ],
    proceduresTitle: "On-site procedures available during or after the visit:",
    procedures: [
      "12-lead ECG (electrocardiogram)",
      "Echocardiography (cardiac ultrasound)",
      "24-hour Holter ECG monitoring",
      "24-hour ambulatory blood pressure monitoring",
      "Vascular ultrasound (carotid, peripheral)"
    ],
    whenBooking: "If you experience chest discomfort, irregular heartbeat, unexplained shortness of breath, fainting episodes, or if you have a family history of cardiovascular disease and have never been screened. Pre-deployment, return-to-duty, and pre-operative clearances are also handled here."
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    anchor: "#orthopedics",
    eyebrow: "SPECIALIST CARE · ORTHOPEDICS",
    h2: "Musculoskeletal assessment and physical recovery planning.",
    description: "Dedicated focus on diagnosing and treating joint, bone, and tendon issues for active military, athletes, and patients recovering from injuries or coping with chronic pain. The initial consultation reviews previous imaging, delivers a physical assessment, and maps out a recovery roadmap, selecting conservative treatment (like targeted injections or in-house physical therapy) or guiding pre-surgical referrals.",
    image: "https://familyclinic.health/images/spec_2.jpg",
    conditions: [
      "Knee pain and injuries (meniscus, ligaments, cartilage)",
      "Shoulder pain (rotator cuff, impingement, instability)",
      "Hip pain and degenerative conditions",
      "Back pain and spinal column issues",
      "Sport injuries (acute and chronic)",
      "Post-trauma evaluation and follow-up",
      "Pre-surgical and second-opinion consultations",
      "Tendinopathies and overuse injuries"
    ],
    proceduresTitle: "Services:",
    procedures: [
      "Joint injections (corticosteroid, hyaluronic acid where indicated)",
      "Coordination with physiotherapy in-house",
      "Coordination with diagnostic imaging",
      "Pre-operative consultation and second opinion"
    ],
    whenBooking: "After a sport or trauma injury that isn't healing, for chronic joint pain that's limiting daily activity, before considering surgery elsewhere, or for return-to-sport / return-to-duty clearance."
  },
  {
    id: "gynecology",
    name: "Gynecology",
    anchor: "#gynecology",
    eyebrow: "SPECIALIST CARE · GYNECOLOGY",
    h2: "Comprehensive women's healthcare with absolute comfort and privacy.",
    description: "Providing sensitive, patient-centric gynecological consultations inside a welcoming clinic environment. Every clinical encounter is conducted with cultural awareness and complete bilingual communication. We provide clear answers on intimate health, detailed procedural reports, and standardized documents formatted for easy submission to international or US insurers.",
    image: "https://familyclinic.health/images/spec_3.jpg",
    conditions: [
      "Annual gynecological check-up",
      "Pap test and HPV screening",
      "Contraception counseling and prescription",
      "Menstrual disorders and hormonal imbalances",
      "Menopause management",
      "Vaginal infections and recurrent issues",
      "Early pregnancy confirmation and first trimester follow-up",
      "Pre-conception counseling",
      "Post-partum gynecological check-ups"
    ],
    proceduresTitle: "On-site procedures:",
    procedures: [
      "Pelvic exam and Pap test",
      "Vaginal swabs",
      "Transvaginal and pelvic ultrasound",
      "Contraceptive device counseling"
    ],
    whenBooking: "All gynecological reports are issued in English with ICD-10 diagnostic coding, directly usable by your US insurance or your gynecologist in the United States. Pap test results can be coordinated with US labs where required by your insurance."
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    anchor: "#physiotherapy",
    eyebrow: "SPECIALIST CARE · PHYSIOTHERAPY",
    h2: "Evidence-based physical therapy tailored to your active recovery.",
    description: "Dynamic physical rehabilitation designed in close coordination with referring orthopedists or sports medicine clinicians. We discard cookie-cutter exercise charts to create individualized, hands-on treatment cycles that target root-cause biomechanics, restore mobility, and rebuild structural strength for long-term functional recovery.",
    image: "https://familyclinic.health/images/spec_4.jpg",
    conditions: [
      "Post-trauma rehabilitation",
      "Post-surgical recovery (knee, shoulder, hip, spine)",
      "Chronic pain management (back, neck, cervical)",
      "Sport injury rehabilitation",
      "Posture correction and ergonomic re-education",
      "Pelvic floor physiotherapy (coordinated with the dedicated specialist)",
      "Pre-surgical conditioning ('prehabilitation')"
    ],
    proceduresTitle: "How it works:",
    procedures: [
      "First session: clinical evaluation and treatment plan",
      "Following sessions: hands-on treatment and supervised exercises",
      "Home program assignment",
      "Most programs are weekly cycles, with progress check-ins built in"
    ],
    whenBooking: "To restore mobility, recover from a fracture or surgical procedure, resolve ongoing back and neck strain, or treat sports injuries with targeted evidence-based clinical protocols."
  },
  {
    id: "mental-health",
    name: "Psychology & Psychiatry",
    anchor: "#mental-health",
    eyebrow: "SPECIALIST CARE · MENTAL HEALTH",
    h2: "Confidential psychological and psychiatric consultations.",
    description: "Navigating major life adjustments, operational stress, expatriation, or persistent emotional struggles benefits from expert support. We offer professional, secure psychological evaluations and psychiatric care within a confidential, private setting. Clinicians specialize in the unique social dynamics and transitions experienced by military families and international residents.",
    image: "https://familyclinic.health/images/spec_5.jpg",
    conditions: [
      "Anxiety and panic disorders",
      "Depression and mood disorders",
      "Adjustment disorders (cultural shock, expat isolation)",
      "Stress management (work, military, family)",
      "Couple therapy",
      "Family support (parent-child, blended families, expatriation stress)",
      "Trauma-related support",
      "Grief and loss",
      "Sleep disorders linked to psychological factors"
    ],
    proceduresTitle: "Format:",
    procedures: [
      "Individual sessions (45-50 minutes)",
      "Couple sessions",
      "Initial psychiatric consultation (when medication assessment is needed)",
      "Follow-up management"
    ],
    whenBooking: "A note on confidentiality: What is shared in a psychology or psychiatry session remains there. Nothing is shared with employers, family members, or military command without your explicit written consent."
  },
  {
    id: "nutrition",
    name: "Nutrition",
    anchor: "#nutrition",
    eyebrow: "SPECIALIST CARE · NUTRITION",
    h2: "Science-backed metabolic coaching and dietary guidance.",
    description: "Practical dietary plans engineered around your physiological parameters and lifestyle rather than rigid restrictions. Our nutritionist helps align meal structures with your physical training, athletic goals, systemic health conditions, or the challenges of adapting to a new local food environment after moving abroad.",
    image: "https://familyclinic.health/images/spec_6.jpg",
    conditions: [
      "Weight management (loss, gain, maintenance)",
      "Sport and performance nutrition",
      "Pre and post-partum nutrition",
      "Food intolerances and sensitivities",
      "Chronic condition support (diabetes, hypertension, gastrointestinal issues)",
      "Family nutrition (children, teens, multi-generational households)",
      "Adjustment to Italian food environment for expats"
    ],
    proceduresTitle: "How it works:",
    procedures: [
      "First visit: full assessment (anamnesis, body composition where useful, goals)",
      "Personalized plan delivered after the evaluation",
      "Follow-up visits to adjust the plan based on results and life changes"
    ],
    whenBooking: "To build a sustainable nutritional habit, optimize metabolic health, plan meals for sports training or active operational lifestyles, or manage food sensitivities in an Italian food climate."
  },
  {
    id: "podiatry",
    name: "Podiatry",
    anchor: "#podiatry",
    eyebrow: "SPECIALIST CARE · PODIATRY",
    h2: "Clinical podiatric treatments and biomechanical gait analysis.",
    description: "Advanced foot and lower extremity care for operational personnel, active runners, diabetic patients, and anyone experiencing functional walking difficulties. We offer quick clinical reliefs for nail and skin ailments alongside comprehensive structural evaluations to craft targeted orthotic support.",
    image: "https://familyclinic.health/images/spec_7.jpg",
    conditions: [
      "Calluses, corns, and hyperkeratosis",
      "Ingrown toenails and nail disorders",
      "Plantar fasciitis and heel pain",
      "Foot biomechanics evaluation",
      "Custom orthotic prescription",
      "Diabetic foot care and screening",
      "Athletic foot conditions",
      "Post-injury rehabilitation of the foot"
    ],
    proceduresTitle: "Services:",
    procedures: [
      "Professional foot care (nail care, callus removal, ingrown nail treatment)",
      "Biomechanical gait analysis",
      "Custom orthotic insole prescription",
      "Diabetic foot screening"
    ],
    whenBooking: "If you have ongoing heel pain, repetitive blisters/friction sores, painful toenails, or stand for hours on operational duty and require advanced custom-fitted support structures."
  },
  {
    id: "acupuncture",
    name: "Acupuncture",
    anchor: "#acupuncture",
    eyebrow: "SPECIALIST CARE · ACUPUNCTURE",
    h2: "Clinical acupuncture integrated with modern medical protocols.",
    description: "Integrating neuro-anatomical stimulation safely alongside conventional orthopedic or gynecological medicine. Treatment utilizes single-use sterile micro-needles to assist with chronic stress response, tension relief, muscle spasms, migraine occurrences, and metabolic recovery.",
    image: "https://familyclinic.health/images/spec_8.jpg",
    conditions: [
      "Chronic pain (back, neck, shoulders, knees)",
      "Tension and migraine headaches",
      "Stress and anxiety management",
      "Fertility support (alongside gynecology)",
      "Insomnia and sleep regulation",
      "Functional digestive disorders"
    ],
    proceduresTitle: "Approach:",
    procedures: [
      "Completely clinical, structured, evidence-based application",
      "Sterile single-use micro-needles",
      "Interpreted alongside standard orthopedic or neurological assessments",
      "Safe, relaxing and structured treatment protocols"
    ],
    whenBooking: "When seeking safe, non-pharmacological complements for tension regulation, sleep cycle support, muscular spasms, or chronic skeletal discomfort."
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    anchor: "#pediatrics",
    eyebrow: "SPECIALIST CARE · PEDIATRICS",
    h2: "Compassionate pediatric care on familiar vaccination schedules.",
    description: "Providing stress-free developmental reviews and acute care pediatric visits. Our pediatricians accommodate standard international schedules—including the US CDC vaccination plans—to simplify transfers. School and sports clearances are completed directly in bilingual formats for simple compliance.",
    image: "https://familyclinic.health/images/spec_9.jpg",
    conditions: [
      "Well-child visits and growth tracking",
      "Pediatric primary care (infections, fevers, skin conditions, GI issues)",
      "International vaccinations (US CDC schedule available)",
      "School and sport certificates (international and DoDEA accepted)",
      "Developmental follow-up",
      "Acute pediatric care",
      "Coordination with US pediatricians for continuity of care"
    ],
    proceduresTitle: "For US military families:",
    procedures: [
      "We're familiar with the specific requirements of EFMP (Exceptional Family Member Program)",
      "DoDEA school health certificates and paperwork",
      "Detailed documentation needed for return-to-US military base transitions",
      "All medical records and immunization logs issued strictly in English by default"
    ],
    whenBooking: "When in need of routine developmental checkups, pediatrician consults for sudden childhood symptoms, or official immunizations completed under recommended CDC frameworks."
  },
  {
    id: "endocrinology",
    name: "Endocrinology",
    anchor: "#endocrinology",
    eyebrow: "SPECIALIST CARE · ENDOCRINOLOGY",
    h2: "Specialized endocrine, thyroid, and metabolic diagnostics.",
    description: "Diagnostic management of thyroid, diabetic, metabolic, and glandular disorders. Consultations integrate prompt physical diagnostics, including real-time thyroid ultrasonography, and streamline blood test evaluation to synthesize hormone regulation plans.",
    image: "https://familyclinic.health/images/spec_10.jpg",
    conditions: [
      "Thyroid disorders (hypothyroidism, hyperthyroidism, nodules)",
      "Type 1 and Type 2 diabetes management",
      "Pre-diabetes and metabolic syndrome",
      "Hormonal imbalances (testosterone, estrogen, prolactin)",
      "Menopause hormonal management",
      "Adrenal disorders",
      "Osteoporosis assessment"
    ],
    proceduresTitle: "On-site coordination:",
    procedures: [
      "Thyroid ultrasound with real-time interpretation",
      "Targeted blood work (for US patients on-site, others via affiliated lab)",
      "Direct coordination with gynecology, nutrition, cardiology when needed"
    ],
    whenBooking: "If dealing with unexplained weight fluctuations, chronic fatigue, thyroid lump feelings, diabetic glucose monitoring, or menopausal adjustments that require a specialized gland-mapping consult."
  },
  {
    id: "womens-health",
    name: "Women's Health Program",
    anchor: "#womens-health",
    eyebrow: "SPECIALIST CARE · WOMEN'S HEALTH",
    h2: "Post-natal recovery and pelvic floor rehabilitation.",
    description: "Targeted therapeutic support during the post-partum transition, focusing on functional pelvic health and core recovery. Clinicians cooperate to manage lactation issues, structural aches, and child rearing ergonomics to support physical wellness step-by-step.",
    image: "https://familyclinic.health/images/spec_11.jpg",
    conditions: [
      "Post-partum pelvic floor recovery",
      "Stress and urge urinary incontinence",
      "Pelvic pain and prolapse management",
      "Pre-pregnancy pelvic floor conditioning",
      "Breastfeeding consultation and troubleshooting",
      "Latch and positioning evaluation",
      "Milk supply support",
      "Weaning guidance"
    ],
    proceduresTitle: "Occupational Therapy components:",
    procedures: [
      "Functional rehabilitation post-injury or post-surgery",
      "Pediatric occupational therapy (developmental, sensory)",
      "Hand therapy",
      "Return-to-work and activity adaptation"
    ],
    whenBooking: "To obtain direct support during lactation periods, re-establish post-natal pelvis strength, or coordinate functional therapy protocols after childbirth or operations."
  },
  {
    id: "ozone-therapy",
    name: "Ozone Therapy",
    anchor: "#ozone-therapy",
    eyebrow: "SPECIALIST CARE · INTEGRATIVE",
    h2: "Integrative ozone therapy for musculoskeletal support.",
    description: "Administering clinical ozone therapy and auto-infusion as an evidence-based complement for stubborn inflammation, joint pain, or lingering athletic trauma. All sessions undergo a strict, prior clinical clearance to verify patient safety and suitability.",
    image: "https://familyclinic.health/images/spec_12.jpg",
    conditions: [
      "Chronic musculoskeletal pain",
      "Sport injury recovery support",
      "Selected inflammatory conditions",
      "Immune support in selected cases"
    ],
    proceduresTitle: "How it works & Honest note:",
    procedures: [
      "First visit: medical evaluation to determine whether ozone therapy is indicated for your case and which protocol",
      "Subsequent sessions: treatment delivery in a clinical setting with monitoring",
      "Honest note: Ozone therapy is not a cure-all. We use it where the evidence supports it and recommend against it where it doesn't.",
      "The first visit is a real medical evaluation, not a sales appointment."
    ],
    whenBooking: "To treat stubborn tendon pain, chronic spinal disc discomfort, or explore clinically guided auto-infusions when approved as medically suitable."
  }
];

export const FAQ_DATA: FAQCategory[] = [
  {
    id: "about-clinic",
    name: "About Family Clinic",
    questions: [
      {
        question: "What is Family Clinic Health Care?",
        answer: "Family Clinic Health Care is an English-speaking private medical clinic in Vicenza, Italy, serving the American military community at Caserma Ederle and Camp Del Din, international families, and Italian patients who want a faster and more personal healthcare experience. We offer primary care, twelve medical specialties, on-site diagnostics, and a dedicated Medical Liaison program for American patients."
      },
      {
        question: "Where is Family Clinic located?",
        answer: "Family Clinic is at Via F.lli Rosselli 58, 36100 Vicenza, Italy, in central Vicenza. We're approximately 8 minutes by car from Caserma Ederle and 12 minutes from Camp Del Din. Detailed directions are on our Contact page."
      },
      {
        question: "What languages does the clinic operate in?",
        answer: "Family Clinic operates primarily in English. All doctors, specialists, and front-desk staff speak fluent or native English. Italian is also available for Italian-speaking patients, and visits, documents, and reports can be provided in either language."
      },
      {
        question: "Is Family Clinic part of the Italian national healthcare system (SSN)?",
        answer: "No. Family Clinic is a private clinic. You don't need an Italian tessera sanitaria to be seen here, and visits are paid privately or through US insurance for American patients. This is what allows us to offer fast appointments without SSN waiting lists."
      }
    ]
  },
  {
    id: "appointments-access",
    name: "Appointments & Access",
    questions: [
      {
        question: "How do I book an appointment at Family Clinic?",
        answer: "The fastest way to book at Family Clinic is via WhatsApp at +39 0444 1943203. You can also call the same number or email info@familyclinic.health. Most patients book through WhatsApp because it lets us verify insurance details, confirm the right doctor for your need, and schedule, all in one short exchange."
      },
      {
        question: "How quickly can I get an appointment?",
        answer: "Most appointments at Family Clinic are scheduled within the same week, and often the same or next day for primary care needs. Specialist availability varies by specialty, but waiting times are dramatically shorter than the Italian SSN system. We don't promise rigid SLAs because medicine isn't predictable, but speed is part of how we work."
      },
      {
        question: "Do you offer same-day appointments?",
        answer: "Same-day appointments at Family Clinic are often available, particularly for primary care needs and urgent symptoms, depending on the doctor's schedule and the nature of the issue. WhatsApp us to check availability — we'll tell you honestly whether same-day is possible or whether the next day is more realistic."
      },
      {
        question: "Do you accept walk-ins?",
        answer: "Family Clinic works by appointment, not walk-ins. This is because every visit is structured around proper time with your doctor and pre-prepared documentation, including insurance verification. WhatsApp is the fastest way to be added to the schedule, often within minutes."
      },
      {
        question: "What are your opening hours?",
        answer: "Family Clinic is open Monday to Friday, 9:00 to 19:00, with some Saturday mornings (9:00-13:00) depending on specialist availability. Hours vary by specialist, so message us to confirm availability for your specific need."
      }
    ]
  },
  {
    id: "insurance-payment",
    name: "US Insurance & Payment",
    questions: [
      {
        question: "Does Family Clinic accept American insurance?",
        answer: "Yes. Family Clinic accepts major US insurance plans including TRICARE, Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, Humana, GEHA, MetLife, and others. Some plans support direct billing, while others require you to pay at the visit and submit for reimbursement, and we prepare the complete document pack in both cases."
      },
      {
        question: "Does Family Clinic accept TRICARE?",
        answer: "Yes, Family Clinic handles TRICARE for American military personnel and dependents in Vicenza. The exact process depends on your specific TRICARE plan (Prime, Select, For Life, Reserve Select, etc.) and your status. Send a photo of your card on WhatsApp before booking and we'll confirm exactly how billing and reimbursement will work in your case."
      },
      {
        question: "Will I have to pay out of pocket at the visit?",
        answer: "For US insurance plans where direct billing is supported, you don't pay at the visit. For plans without direct billing, you pay at the visit and your insurance reimburses you afterward — we provide the complete document pack (English invoice, medical report, ICD-10 and CPT codes) needed for that reimbursement. We always tell you which case applies before you book."
      },
      {
        question: "What if my insurance plan isn't listed?",
        answer: "Send a photo of your insurance card on WhatsApp at +39 0444 1943203. Family Clinic works with many plans beyond those publicly listed, and we'll verify your specific plan before you book. If we can't support your plan directly, we'll tell you transparently."
      },
      {
        question: "How do I get reimbursed by my US insurance?",
        answer: "After your visit at Family Clinic, you receive a complete reimbursement document pack in English including itemized invoice, medical report, ICD-10 diagnostic codes, and CPT procedure codes where applicable. You submit this pack to your US insurance via their usual reimbursement channel. Reimbursement timing depends on your insurance, not on us, but the document pack we provide is designed to avoid common reasons for delays."
      },
      {
        question: "Do you handle pre-authorization for US insurance?",
        answer: "Yes. Pre-authorization requests are handled by our Medical Liaison team on your behalf. Send your insurance card and details of the planned procedure on WhatsApp, and we'll initiate the pre-auth process before your appointment."
      }
    ]
  },
  {
    id: "services-doctors",
    name: "Services & Doctors",
    questions: [
      {
        question: "What medical services does Family Clinic offer?",
        answer: "Family Clinic offers primary care, twelve specialist disciplines (cardiology, orthopedics, gynecology, physiotherapy, psychology and psychiatry, nutrition, podiatry, acupuncture, pediatrics, endocrinology, pelvic floor rehabilitation, occupational therapy, ozone therapy), and on-site diagnostics including ECG, echocardiography, ultrasound, Holter monitoring, lab tests, vaccinations, and Pap tests. For American patients, the Medical Liaison program adds translation, insurance handling, and hospital coordination."
      },
      {
        question: "Do I need a referral to see a specialist?",
        answer: "At Family Clinic you do not need a referral from a GP to book a specialist. The clinic operates privately. However, your US insurance may require a referral for reimbursement depending on your specific plan, and in that case our primary care service can issue one before your specialist visit."
      },
      {
        question: "Are the doctors at Family Clinic native English speakers?",
        answer: "The doctors at Family Clinic are either native English speakers or fluent bilingual professionals with international clinical experience. Every visit, every conversation, and every written report is conducted in English without translator intermediation, unless the patient specifically prefers Italian."
      },
      {
        question: "Can I bring my child to Family Clinic?",
        answer: "Yes. Family Clinic has pediatric services covering well-child visits, vaccinations (including US CDC schedule for American children), pediatric primary care, school certificates accepted by DoDEA and international schools, and developmental follow-up. We're familiar with the documentation needs of American military families and EFMP requirements."
      },
      {
        question: "Do you offer telemedicine?",
        answer: "Telemedicine is currently not an active service at Family Clinic. All visits are in-person at our Vicenza location. For quick questions or to determine whether you need a full visit, WhatsApp is the most efficient channel."
      }
    ]
  },
  {
    id: "medical-records",
    name: "Medical Records & Docs",
    questions: [
      {
        question: "Will I get my medical records in English?",
        answer: "Yes. All medical records, visit reports, lab results, and diagnostic studies for American and international patients at Family Clinic are issued in English by default. We use international ICD-10 diagnostic coding and, where applicable, CPT procedure coding, so your US physician or US insurance can read them without translation."
      },
      {
        question: "Can Family Clinic send my records to my doctor in the US?",
        answer: "Yes. With your written consent, Family Clinic sends complete medical records directly to your US physician or healthcare system by email, in English, in formats accepted by the US healthcare system. This is especially common for American military families nearing end of tour, or for patients managing a chronic condition across both countries."
      },
      {
        question: "Are prescriptions from Family Clinic valid in Italian pharmacies?",
        answer: "Yes. Prescriptions issued at Family Clinic are valid Italian medical prescriptions accepted by all Italian pharmacies. For American patients, we explain in English which medication has been prescribed, the equivalent US name where there is one, and how to take it, so there's no confusion at the pharmacy counter."
      },
      {
        question: "Can I get a prescription refill for a medication I started in the US?",
        answer: "Often yes, but it depends on the medication. Send a photo of your US prescription (the bottle label or the prescription document) on WhatsApp before booking, and our team will tell you whether a primary care visit is enough or whether a specialist consultation is needed first. Some controlled substances and specialty medications have specific Italian regulations we'll explain case by case."
      }
    ]
  },
  {
    id: "location-logistics",
    name: "Location & Logistics",
    questions: [
      {
        question: "How do I get to Family Clinic from Caserma Ederle?",
        answer: "Family Clinic is approximately 8 minutes by car from Caserma Ederle, located at Via F.lli Rosselli 58 in central Vicenza. From the main gate, the most direct route is through the city center. We can send detailed directions on WhatsApp before your visit, including parking information."
      },
      {
        question: "How do I get to Family Clinic from Camp Del Din?",
        answer: "Family Clinic is approximately 12 minutes by car from Camp Del Din. Detailed directions can be sent via WhatsApp before your appointment, including parking information."
      },
      {
        question: "Is there parking at Family Clinic?",
        answer: "Parking information for Family Clinic is shared on WhatsApp when you confirm your appointment, including the closest paid parking areas and any reserved options for the clinic."
      },
      {
        question: "Does Family Clinic offer transport to and from the clinic?",
        answer: "Transport to and from the clinic is not included as a default service. For American patients with mobility limitations or specific needs, transport can be arranged as part of the concierge logistics under our Medical Liaison program, with transparent cost communication before booking."
      }
    ]
  },
  {
    id: "military-families",
    name: "US Military Families Specifically",
    questions: [
      {
        question: "Does Family Clinic work with the US military medical system?",
        answer: "Family Clinic operates as a civilian Italian private clinic that serves American military personnel and dependents through US insurance handling (especially TRICARE) and through our Medical Liaison program. We're not part of the US military healthcare system itself, but we're set up specifically to bridge it for American families in Vicenza."
      },
      {
        question: "Does Family Clinic accept EFMP (Exceptional Family Member Program) families?",
        answer: "Yes. Family Clinic supports EFMP families with documentation, specialist coordination, and English-language reporting in formats that the EFMP system accepts. Many EFMP families in Vicenza use Family Clinic specifically because in-house specialist availability removes the friction of cross-clinic coordination."
      },
      {
        question: "Can Family Clinic provide medical clearance for return-to-duty or return-to-US?",
        answer: "Yes. Family Clinic provides medical clearance certifications, fitness-to-fly assessments, and complete medical record packs for end-of-tour transfers, all in English with international coding so they're directly usable by your US-side healthcare provider or command medical office."
      },
      {
        question: "Are pediatric vaccinations available on the US CDC schedule?",
        answer: "Yes. Family Clinic pediatricians can administer vaccinations following the US CDC pediatric schedule for American children, in addition to or instead of the Italian schedule, depending on family preference. Vaccination records are issued in English in DoDEA-accepted format."
      }
    ]
  }
];

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        title: "JAPANESE LANGUAGE",
        subtitle: "COURSE",
        tagline: "Specially designed for Care-giver Aspirants from the Nursing Sector",
        cta: "Register Now"
      },
      nav: {
        home: "Home",
        features: "Features",
        teachers: "Teachers",
        why: "Why Us",
        contact: "Contact"
      },
      features: {
        title: "We Offer",
        jlpt: "Mastering JLPT level 5 and 4 in 6 months",
        teachers: "Highly experienced local and Japanese teachers from Japan",
        hours: "168 hours JLPT 5 and 4 level language training",
        etiquette: "Japanese custom, etiquette training",
        classes: "Both Online and Offline classes",
        materials: "Supply of reading materials",
        exam: "Support the JLPT exam preparation and registration",
        skill: "Assist in the Care-giving skill test for Japanese market",
        agency: "Link with Japanese agency for interview",
        nursing: "Free Critical Care Nursing training",
        recruiting: "Link with licensed recruiting agency",
        interview: "Free Job interview Preparation"
      },
      benefits: {
        title: "Flexible Installments, Early Bird, Group Registration Benefits",
        duration: "Total 42 weeks, 3 days per week",
        schedule: "Weekend & Evening Classes"
      },
      teachers: {
        title: "Our Teachers",
        yoshie: {
          name: "Yoshie Noda",
          experience: "More than 30 years teaching experience",
          location: "Saga, Nagasaki, Japan"
        },
        kaniz: {
          name: "Kaniz Fatema",
          experience: "More than 15 years of experience",
          location: "Kobe, Japan"
        }
      },
      whyJapan: {
        title: "Why Japan",
        salary: "You can earn a high salary",
        secure: "Live in a secure environment",
        description: "Japan is searching for skilled caregivers for its rapidly ageing society. It has increased caregiver compensation and a supportive environment for foreign caregivers. It has opened a door for Bangladeshi skilled caregivers in Japan."
      },
      whyCmd: {
        title: "Why CMD",
        proficiency: "You will have both JLPT N5 and N4 level proficiency in same fee",
        customs: "Understanding of Japanese Customs and Law from Japanese people",
        sharing: "Free experience sharing with caregivers in Japan",
        critical: "Free Critical Care Nursing training from Machine Supplier",
        jobInterview: "Job Interview with Japanese Agency",
        link: "Link with registered recruiting agency"
      },
      eligibility: {
        title: "Who can join the course",
        age: "Age: 18-30 year",
        education: "Diploma in Nursing (3.5 years) or B.Sc. In Nursing (4 years) from recognized/BMET approved nursing colleges",
        experience: "Minimum 2 years of working experience in hospitals and clinics, and basic patient care",
        interview: "Participants will sit for an interview"
      },
      form: {
        title: "Registration Form",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        education: "Education Level",
        experience: "Years of Experience",
        payment: "Payment Method",
        card: "Credit/Debit Card",
        banking: "E-Banking",
        mobileBanking: "Mobile Banking",
        cardNumber: "Card Number",
        expiry: "Expiry Date",
        cvv: "CVV",
        bankName: "Bank Name",
        accountNumber: "Account Number",
        mobileProvider: "Mobile Banking Provider",
        mobileNumber: "Mobile Number",
        submit: "Complete Registration"
      },
      footer: {
        company: "Centre for Management Development Ltd. (CMD)",
        rights: "All rights reserved",
        contact: "Contact Information",
        email: "Email",
        phone: "Call",
        website: "Website",
        followUs: "Follow Us",
        quickLinks: "Quick Links",
        mainWebsite: "Main Website"
      }
    }
  },
  bn: {
    translation: {
      hero: {
        title: "জাপানিজ ভাষা",
        subtitle: "কোর্স",
        tagline: "নার্সিং সেক্টর থেকে যত্নশীল আকাঙ্ক্ষীদের জন্য বিশেষভাবে ডিজাইন করা",
        cta: "এখনই নিবন্ধন করুন"
      },
      nav: {
        home: "হোম",
        features: "বৈশিষ্ট্য",
        teachers: "শিক্ষক",
        why: "কেন আমরা",
        contact: "যোগাযোগ"
      },
      features: {
        title: "আমরা অফার করি",
        jlpt: "৬ মাসে JLPT লেভেল ৫ এবং ৪ মাস্টারিং",
        teachers: "জাপান থেকে অত্যন্ত অভিজ্ঞ স্থানীয় এবং জাপানি শিক্ষক",
        hours: "১৬৮ ঘন্টা JLPT ৫ এবং ৪ লেভেল ভাষা প্রশিক্ষণ",
        etiquette: "জাপানি কাস্টম, শিষ্টাচার প্রশিক্ষণ",
        classes: "অনলাইন এবং অফলাইন উভয় ক্লাস",
        materials: "পড়ার উপকরণ সরবরাহ",
        exam: "JLPT পরীক্ষার প্রস্তুতি এবং নিবন্ধন সমর্থন",
        skill: "জাপানি বাজারের জন্য যত্ন-প্রদান দক্ষতা পরীক্ষায় সহায়তা",
        agency: "ইন্টারভিউয়ের জন্য জাপানি এজেন্সির সাথে লিঙ্ক",
        nursing: "বিনামূল্যে ক্রিটিক্যাল কেয়ার নার্সিং প্রশিক্ষণ",
        recruiting: "লাইসেন্সপ্রাপ্ত নিয়োগ এজেন্সির সাথে লিঙ্ক",
        interview: "বিনামূল্যে চাকরির ইন্টারভিউ প্রস্তুতি"
      },
      benefits: {
        title: "নমনীয় কিস্তি, আর্লি বার্ড, গ্রুপ নিবন্ধন সুবিধা",
        duration: "মোট ৪২ সপ্তাহ, সপ্তাহে ৩ দিন",
        schedule: "সপ্তাহান্তে এবং সন্ধ্যায় ক্লাস"
      },
      teachers: {
        title: "আমাদের শিক্ষক",
        yoshie: {
          name: "ইয়োশি নোডা",
          experience: "৩০ বছরেরও বেশি শিক্ষাদানের অভিজ্ঞতা",
          location: "সাগা, নাগাসাকি, জাপান"
        },
        kaniz: {
          name: "কানিজ ফাতেমা",
          experience: "১৫ বছরেরও বেশি অভিজ্ঞতা",
          location: "কোবে, জাপান"
        }
      },
      whyJapan: {
        title: "কেন জাপান",
        salary: "আপনি উচ্চ বেতন অর্জন করতে পারেন",
        secure: "একটি নিরাপদ পরিবেশে বাস করুন",
        description: "জাপান তার দ্রুত বার্ধক্য সমাজের জন্য দক্ষ যত্নশীল খুঁজছে। এটি যত্নশীল ক্ষতিপূরণ বৃদ্ধি করেছে এবং বিদেশী যত্নশীলদের জন্য একটি সহায়ক পরিবেশ তৈরি করেছে। এটি জাপানে বাংলাদেশী দক্ষ যত্নশীলদের জন্য একটি দরজা খুলে দিয়েছে।"
      },
      whyCmd: {
        title: "কেন CMD",
        proficiency: "একই ফিতে JLPT N5 এবং N4 লেভেল প্রফিশিয়েন্সি থাকবে",
        customs: "জাপানি মানুষের কাছ থেকে জাপানি কাস্টমস এবং আইন বোঝা",
        sharing: "জাপানে যত্নশীলদের সাথে বিনামূল্যে অভিজ্ঞতা শেয়ারিং",
        critical: "মেশিন সাপ্লায়ার থেকে বিনামূল্যে ক্রিটিক্যাল কেয়ার নার্সিং প্রশিক্ষণ",
        jobInterview: "জাপানি এজেন্সির সাথে চাকরির ইন্টারভিউ",
        link: "নিবন্ধিত নিয়োগ এজেন্সির সাথে লিঙ্ক"
      },
      eligibility: {
        title: "কারা কোর্সে যোগ দিতে পারবেন",
        age: "বয়স: ১৮-৩০ বছর",
        education: "ডিপ্লোমা ইন নার্সিং (৩.৫ বছর) বা বি.এসসি ইন নার্সিং (৪ বছর) স্বীকৃত/BMET অনুমোদিত নার্সিং কলেজ থেকে",
        experience: "হাসপাতাল এবং ক্লিনিকে কমপক্ষে ২ বছরের কাজের অভিজ্ঞতা এবং মৌলিক রোগীর যত্ন",
        interview: "অংশগ্রহণকারীরা একটি ইন্টারভিউয়ের জন্য বসবেন"
      },
      form: {
        title: "নিবন্ধন ফর্ম",
        name: "পুরো নাম",
        email: "ইমেল ঠিকানা",
        phone: "ফোন নম্বর",
        education: "শিক্ষার স্তর",
        experience: "অভিজ্ঞতার বছর",
        payment: "পেমেন্ট পদ্ধতি",
        card: "ক্রেডিট/ডেবিট কার্ড",
        banking: "ই-ব্যাংকিং",
        mobileBanking: "মোবাইল ব্যাংকিং",
        cardNumber: "কার্ড নম্বর",
        expiry: "মেয়াদ উত্তীর্ণের তারিখ",
        cvv: "সিভিভি",
        bankName: "ব্যাংকের নাম",
        accountNumber: "অ্যাকাউন্ট নম্বর",
        mobileProvider: "মোবাইল ব্যাংকিং প্রদানকারী",
        mobileNumber: "মোবাইল নম্বর",
        submit: "নিবন্ধন সম্পন্ন করুন"
      },
      footer: {
        company: "সেন্টার ফর ম্যানেজমেন্ট ডেভেলপমেন্ট লিমিটেড (CMD)",
        rights: "সমস্ত অধিকার সংরক্ষিত",
        contact: "যোগাযোগের তথ্য",
        email: "ইমেল",
        phone: "কল",
        website: "ওয়েবসাইট",
        followUs: "আমাদের অনুসরণ করুন",
        quickLinks: "দ্রুত লিঙ্ক",
        mainWebsite: "মূল ওয়েবসাইট"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

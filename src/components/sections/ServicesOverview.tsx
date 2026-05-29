import { motion } from "motion/react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Card } from "../ui/Card";

export function ServicesOverview() {
  return (
    <div className="py-14 md:py-20 lg:py-24 bg-gradient-to-br from-cream via-sand/20 to-teal/[0.04] relative border-b border-sand/30">
      <Container className="mb-16">
        <div className="max-w-xl">
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2 className="text-h2 text-ink mt-2 mb-4 leading-tight">
            Everything you need, in one place.
          </h2>
          <p className="text-base text-graphite font-body leading-relaxed">
            Four areas of care, all under the same roof, all in English. Coordinated, private, and painless.
          </p>
        </div>
      </Container>

      {/* Asymmetric 7/5 columns Layout */}
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side (Column spanning 7 out of 12) */}
        <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
          {/* Card 1 — Primary Care (Large top-left) */}
          <div className="flex-1">
            <Card
              title="Primary Care"
              subtitle="FAMILY RECOGNIZED DOCTOR"
              description="General medicine, follow-ups, prescriptions, certificates, check-ups. Your English-speaking family doctor in Vicenza. No waiting lists."
              link="/primary-care"
              imageUrl="https://familyclinic.health/images/home_12.jpeg"
              staggerDelay={0.05}
              className="min-h-[340px]"
            />
          </div>

          {/* Card 3 — Diagnostics (Small bottom-left) */}
          <div className="min-h-[260px]">
            <Card
              title="Diagnostics"
              subtitle="ON-SITE TESTING"
              description="ECG, echocardiography, ultrasound, Holter monitoring, Pap tests, vaccinations, and lab tests for US patients. Results explained in English."
              link="/diagnostics"
              imageUrl="https://familyclinic.health/images/home_14.jpeg"
              staggerDelay={0.15}
            />
          </div>
        </div>

        {/* Right Side (Column spanning 5 out of 12) */}
        <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
          {/* Card 2 — Specialist Care (Tall top-right) */}
          <div className="flex-1">
            <Card
              title="Specialist Care"
              subtitle="12 INTEGRATED SPECIALTIES"
              description="Twelve specialties under one roof: cardiology, orthopedics, gynecology, physiotherapy, psychology, nutrition, podiatry, acupuncture, pediatrics, endocrinology, pelvic floor rehab, ozone therapy. Coordinated reports."
              link="/specialist-care"
              imageUrl="https://familyclinic.health/images/home_13.jpeg"
              staggerDelay={0.1}
              className="h-full flex flex-col justify-between lg:min-h-[440px]"
            />
          </div>

          {/* Card 4 — Medical Liaison Services (Dark bottom-right) */}
          <div className="min-h-[260px]">
            <Card
              title="Medical Liaison Services"
              subtitle="US CLIENT CONCIERGE"
              description="US-patients only. We handle insurance, translation, specialist coordination, and hospital support so you don't have to."
              link="/medical-liaison"
              imageUrl="https://familyclinic.health/images/home_15.jpeg"
              dark={true}
              staggerDelay={0.2}
            />
          </div>
        </div>

      </Container>
    </div>
  );
}

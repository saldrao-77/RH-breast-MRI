"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Shield, Stethoscope, Calendar, DollarSign, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import InsuranceComparison from "@/components/insurance-comparison"

export default function RobinHealthLanding() {
  const handleCTAClick = () => {
    console.log("CTA Button Clicked - Get Your Breast MRI This Week")
    window.location.href = "/book-consultation"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-rose-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-burgundy-600 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-xl font-semibold text-gray-900">Robin Health</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={handleCTAClick}
                className="bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm"
              >
                Get Your Breast MRI This Week
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-rose-50 to-coral-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                What's fuzzy on mammograms and ultrasounds is{" "}
                <span className="text-transparent bg-gradient-to-r from-burgundy-600 to-rose-500 bg-clip-text">
                  crystal-clear
                </span>{" "}
                on an MRI
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Insurance said wait. You don't have to. Breast MRIs are the most effective breast cancer diagnostic
                tool—up to 90% more accurate than mammograms for high-risk women. Get the breast MRI you need this week,
                with transparent pricing and expert care every step of the way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  onClick={handleCTAClick}
                  size="lg"
                  className="bg-burgundy-600 hover:bg-burgundy-700 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg"
                >
                  Get Your Breast MRI This Week
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-burgundy-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-burgundy-600" />
                  </div>
                  <span className="font-medium">MD-Reviewed Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-burgundy-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-burgundy-600" />
                  </div>
                  <span className="font-medium">Scans Within Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-burgundy-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-burgundy-600" />
                  </div>
                  <span className="font-medium">HSA/FSA Eligible</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/breast-awareness-hero.jpg"
                  alt="Diverse women supporting breast health awareness"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            You're Doing Everything Right.{" "}
            <span className="text-transparent bg-gradient-to-r from-burgundy-600 to-rose-500 bg-clip-text">
              We Make Sure That's Enough.
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            You know your risk. You know your family history. You've been advocating for yourself, but insurance
            bureaucracy shouldn't stand between you and peace of mind.
          </p>

          <div className="bg-gradient-to-br from-rose-50 to-coral-50 p-8 rounded-2xl border border-rose-100 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">SM</span>
              </div>
              <div className="text-left">
                <p className="text-gray-700 mb-3 leading-relaxed italic">
                  "I needed a breast MRI, and even though my doctor said it would be better than a mammogram, I had to
                  jump through endless hoops. Initial appointment, ultrasound, mammogram, high-risk screening, back to
                  my doctor for a referral, then fighting prior authorization for a month. The next time I needed one, I
                  found Robin Health and paid cash—got my scan in 3 days instead of months of bureaucracy."
                </p>
                <p className="text-sm text-burgundy-700 font-medium">— Sarah M.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-rose-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">From Worry to Results in 3 Simple Steps</h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-2xl mx-auto">
            We've streamlined everything so you can focus on what matters most — your health.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden border border-rose-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Risk Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete our 5-minute questionnaire. Our system will take your information and help you generate a
                  doctor's order for your appropriate scan in under 24 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden border border-rose-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Schedule Your Scan</h3>
                <p className="text-gray-600 leading-relaxed">
                  We help you compare your costs with our pricing vs. insurance—we usually beat insurance, especially if
                  you're on a high-deductible plan. Book your MRI at a nearby imaging center within our vetted,
                  high-quality network within 2-3 days.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden border border-rose-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Get Clear Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Board-certified radiologist review with results in plain English, sent to you and your doctor.
                  Referrals to specialists provided if needed based on results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Comparison */}
      <InsuranceComparison />

      {/* What You Get */}
      <section className="py-20 bg-gradient-to-br from-burgundy-600 to-burgundy-700 text-white">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Everything You Need, Nothing You Don't</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <Stethoscope className="w-5 h-5" />
                </div>
                Clinical Excellence
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-rose-200 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-rose-50">Board-certified radiologist review for every scan</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-rose-200 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-rose-50">High-resolution 3T MRI technology</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-rose-200 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-rose-50">Results explained in language you understand</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-rose-200 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-rose-50">Direct communication with medical team</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="w-5 h-5" />
                </div>
                Seamless Experience
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-rose-200 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-rose-50">Transparent, upfront pricing — no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-rose-200 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-rose-50">Scheduling within 2-3 days, guaranteed</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-rose-200 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-rose-50">Results automatically shared with your doctor</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-rose-200 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-rose-50">Follow-up care coordination if needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Trusted by Women Who Refuse to Wait</h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-2xl mx-auto">
            Join hundreds of women who chose peace of mind over insurance bureaucracy.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-burgundy-600 to-rose-500 bg-clip-text mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Scans Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-burgundy-600 to-rose-500 bg-clip-text mb-2">
                2.3
              </div>
              <div className="text-gray-600 font-medium">Average Days to Scan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-burgundy-600 to-rose-500 bg-clip-text mb-2">
                98%
              </div>
              <div className="text-gray-600 font-medium">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-burgundy-600 to-rose-500 bg-clip-text mb-2">
                24hr
              </div>
              <div className="text-gray-600 font-medium">Average Results Time</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-coral-50 p-8 rounded-2xl border border-rose-100 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">JR</span>
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-3 leading-relaxed italic">
                  "As a nurse, I know how important early detection is. When my insurance denied my MRI request, I found
                  Robin Health. Professional, fast, and gave me the peace of mind I desperately needed."
                </p>
                <p className="text-burgundy-700 font-medium">— Jennifer R., RN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Your Health Can't Wait for Insurance Approval</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Take control today. Get the breast MRI you need with transparent pricing, fast scheduling, and expert
            medical care you can trust.
          </p>

          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-gradient-to-r from-burgundy-600 to-rose-500 hover:from-burgundy-700 hover:to-rose-600 text-white px-12 py-4 text-lg mb-6 rounded-lg font-medium shadow-lg"
          >
            Get Your Breast MRI This Week
          </Button>

          <p className="text-sm text-gray-400">
            Most scans scheduled within 2-3 days • HSA/FSA eligible • MD-reviewed results in 24 hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-cream-50 to-rose-50 border-t border-rose-100 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-burgundy-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-xl font-semibold text-gray-900">Robin Health</span>
                </div>
              </div>
              <p className="text-gray-600 max-w-md leading-relaxed">
                Fast, transparent breast health screening for women who won't wait.
              </p>
            </div>
            <div className="flex gap-8 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-burgundy-700 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-burgundy-700 transition-colors font-medium">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-burgundy-700 transition-colors font-medium">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="border-t border-rose-200 pt-6 text-center text-gray-500 text-sm">
            © 2024 Robin Health. Fast, transparent breast health screening for women who won't wait.
          </div>
        </div>
      </footer>
    </div>
  )
}

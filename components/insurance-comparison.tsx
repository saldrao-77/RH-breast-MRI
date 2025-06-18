import { Card, CardContent } from "@/components/ui/card"
import { Clock, X, Check, CreditCard } from "lucide-react"

export default function InsuranceComparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Breast MRIs with insurance vs.{" "}
          <span className="text-transparent bg-gradient-to-r from-burgundy-600 to-rose-500 bg-clip-text">
            Robin Health
          </span>
        </h2>
        <p className="text-xl text-gray-700 text-center mb-16 max-w-2xl mx-auto">
          See the difference between months of bureaucracy and getting your scan this week.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Insurance Process */}
          <Card className="border-2 border-red-200 bg-red-50/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">With Insurance</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-700 text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Initial doctor appointment for screening</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-700 text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Get referral for mammogram/ultrasound</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-700 text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Wait for prior authorization approval</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-700 text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Schedule and complete mammogram/ultrasound</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-700 text-xs font-bold">5</span>
                  </div>
                  <p className="text-gray-700">Wait for results, do high-risk screening</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-700 text-xs font-bold">6</span>
                  </div>
                  <p className="text-gray-700">Return to doctor for MRI referral</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-700 text-xs font-bold">7</span>
                  </div>
                  <p className="text-gray-700">Fight insurance for MRI prior authorization</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-700 text-xs font-bold">8</span>
                  </div>
                  <p className="text-gray-700">Find imaging center, schedule MRI</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-700 text-xs font-bold">9</span>
                  </div>
                  <p className="text-gray-700">Wait weeks/months for appointment</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <div className="flex items-center gap-2 text-red-700">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Timeline: 2-6 months</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Robin Health Process */}
          <Card className="border-2 border-burgundy-200 bg-gradient-to-br from-rose-50 to-coral-50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">
                  With{" "}
                  <span className="text-transparent bg-gradient-to-r from-burgundy-600 to-rose-500 bg-clip-text">
                    Robin Health
                  </span>
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Complete 5-minute online assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Get doctor's order generated automatically</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Compare cash vs. insurance pricing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Book at vetted, high-quality imaging center</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                  <p className="text-gray-700">Get your MRI within 2-3 days</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">6</span>
                  </div>
                  <p className="text-gray-700">Results reviewed and explained clearly</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="p-4 bg-white rounded-lg border border-burgundy-200">
                  <div className="flex items-center gap-2 text-burgundy-700">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">Timeline: 2-3 days</span>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-burgundy-200">
                  <div className="flex items-center gap-2 text-burgundy-700">
                    <CreditCard className="w-5 h-5" />
                    <span className="font-semibold">HSA/FSA Eligible • Often cheaper than insurance</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

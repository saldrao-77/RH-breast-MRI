"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, Mail, Phone, MessageSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase/client"

export default function BookConsultation() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    try {
      const { error } = await supabase.from("leads").insert([
        {
          email: email,
          first_name: "",
          last_name: "",
          source: "consultation_page",
        },
      ])

      if (error) throw error

      setIsSubmitted(true)
      setEmail("")
    } catch (error) {
      console.error("Error submitting lead:", error)
      alert("There was an error submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailUs = () => {
    window.location.href = "mailto:hello@robinhealth.com"
  }

  const handleCallUs = () => {
    window.location.href = "tel:+12625018982"
  }

  const handleTextUs = () => {
    window.location.href = "sms:+12625018982"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-coral-50">
      {/* Header */}
      <header className="bg-white border-b border-rose-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-burgundy-600 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-xl font-semibold text-gray-900">Robin Health</span>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-burgundy-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your{" "}
            <span className="text-transparent bg-gradient-to-r from-burgundy-600 to-rose-500 bg-clip-text">
              Breast MRI
            </span>{" "}
            This Week
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Enter your email and a member of our team will reach out to you ASAP with scans in your area, transparent
            pricing, and available appointment times.
          </p>
        </div>

        {/* Email Form */}
        <Card className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden border border-rose-100 mb-12">
          <CardContent className="p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-burgundy-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Get My Breast MRI Scheduled"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-burgundy-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-700 text-lg">
                  We've received your request. A member of our team will reach out to you within the next few hours with
                  available scans in your area and transparent pricing.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Can't Wait Section */}
        <Card className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden border border-rose-100">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't Wait? Reach Out to Us Directly Right Now</h2>
            <p className="text-gray-700 mb-8 text-lg">Get immediate assistance from our breast health specialists</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleEmailUs}
                variant="outline"
                className="flex items-center gap-2 border-2 border-burgundy-200 text-burgundy-700 hover:bg-burgundy-50 px-6 py-3 rounded-lg font-medium"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </Button>

              <Button
                onClick={handleCallUs}
                variant="outline"
                className="flex items-center gap-2 border-2 border-burgundy-200 text-burgundy-700 hover:bg-burgundy-50 px-6 py-3 rounded-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </Button>

              <Button
                onClick={handleTextUs}
                variant="outline"
                className="flex items-center gap-2 border-2 border-burgundy-200 text-burgundy-700 hover:bg-burgundy-50 px-6 py-3 rounded-lg font-medium"
              >
                <MessageSquare className="w-5 h-5" />
                Text Us
              </Button>
            </div>

            <p className="text-gray-500 text-sm mt-4">Phone: (262) 501-8982 • Available Monday-Friday, 8AM-6PM CT</p>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-burgundy-100 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-burgundy-600" />
              </div>
              <span className="font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-burgundy-100 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-burgundy-600" />
              </div>
              <span className="font-medium">Board-Certified Radiologists</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-burgundy-100 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-burgundy-600" />
              </div>
              <span className="font-medium">HSA/FSA Eligible</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

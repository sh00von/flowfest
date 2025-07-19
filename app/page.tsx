"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Waves,
  Droplets,
  Play,
  ArrowRight,
  Presentation,
  Map,
  Calculator,
  Wrench,
  Monitor,
  Camera,
  Video,
  Clock,
  Target,
  Award,
  Phone,
  Mail,
  Download,
} from "lucide-react"
import competitionsData from "../data/competitions.json"

const iconMap = {
  Presentation,
  Map,
  Calculator,
  Wrench,
  Monitor,
  Camera,
  Video,
}

const stats = [
  { value: "TBA", label: "Total Prize Pool", unit: "BDT", icon: Trophy, color: "text-yellow-600" },
  { value: "7", label: "Unique Competitions", unit: "Arenas", icon: Waves, color: "text-brand-600" },
  { value: "2", label: "Immersive Days", unit: "Experience", icon: Calendar, color: "text-emerald-600" },
  { value: "1000+", label: "Expected Participants", unit: "Engineers", icon: Users, color: "text-purple-600" },
]

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const competitions = competitionsData.competitions

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-100 rounded-lg">
                <Droplets className="h-8 w-8 text-brand-600" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  Flow<span className="text-brand-600">Fest</span>
                </span>
                <Badge className="ml-2 bg-brand-100 text-brand-800 hover:bg-brand-200">1.0</Badge>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["Competitions", "Schedule", "About"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-brand-600 font-medium transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
              <Button className="bg-brand-600 hover:bg-brand-700 text-white shadow-md">Register Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Flow<span className="text-brand-600">Fest</span>
                <span className="block text-3xl md:text-4xl font-medium text-gray-600 mt-2">1.0</span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-xl md:text-2xl text-gray-700 mb-6">
                National Water Engineering Symposium & Innovation Challenge
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">August 1-2, 2025</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">CUET Campus</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
                  <Award className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">7 Competitions</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-12">
                Hosted by Water Resources Research Organization (WRRO), CUET
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white text-lg px-8 py-4 shadow-lg">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-600 text-brand-600 hover:bg-brand-50 text-lg px-8 py-4 bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Banner Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/flowfest.png"
                alt="FlowFest 1.0 Event Banner - August 1-2, 2025"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-0">
                <CardContent className="p-4 text-center">
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-xs mb-1">{stat.label}</div>
                  <div className={`${stat.color} text-xs font-medium uppercase tracking-wider`}>{stat.unit}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competitions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Competition <span className="text-brand-600">Segments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven unique challenges designed to test your skills in water engineering, environmental science, and
              sustainable innovation. Each segment offers detailed guidelines and requirements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {competitions.map((competition, index) => {
              const IconComponent = iconMap[competition.icon as keyof typeof iconMap]
              return (
                <Card
                  key={competition.id}
                  className={`${competition.color} transition-all duration-300 hover:shadow-lg border-2 group h-full flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm`}
                >
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <IconComponent className={`h-6 w-6 ${competition.iconColor}`} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge className={competition.badgeColor + " text-xs"}>{competition.category}</Badge>
                        <Badge variant="outline" className="border-gray-300 text-gray-600 text-xs">
                          {competition.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors">
                      {competition.title}
                    </h3>

                    <div className="space-y-3 mb-4 flex-grow">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 flex items-center text-sm">
                          <Target className="h-3 w-3 mr-1 text-gray-600" />
                          Objective
                        </h4>
                        <p className="text-xs text-gray-700 leading-relaxed line-clamp-1">{competition.objective}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 flex items-center text-sm">
                          <Clock className="h-3 w-3 mr-1 text-gray-600" />
                          Format
                        </h4>
                        <p className="text-xs text-gray-700">{competition.format}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 flex items-center text-sm">
                          <Users className="h-3 w-3 mr-1 text-gray-600" />
                          Eligibility
                        </h4>
                        <p className="text-xs text-gray-700 line-clamp-1">{competition.eligibility}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="bg-white/50 rounded-lg p-2">
                          <p className="text-xs text-gray-600 mb-1">Prize Pool</p>
                          <p className="font-bold text-emerald-600 text-sm">{competition.prize}</p>
                        </div>
                        <div className="bg-white/50 rounded-lg p-2">
                          <p className="text-xs text-gray-600 mb-1">Entry Fee</p>
                          <p className="font-bold text-blue-600 text-sm">{competition.fee}</p>
                        </div>
                      </div>
                    </div>

                    {/* Learn More Button at Bottom */}
                    <div className="mt-auto">
                      <Link href={`/competitions/${competition.id}`}>
                        <Button className="w-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-sm text-sm py-2">
                          Learn More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Competition <span className="text-brand-600">Guidelines</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important information and guidelines for all participants to ensure fair and successful competition
              experience.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg border-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-gray-900 text-lg">
                  <Award className="h-5 w-5 mr-2 text-brand-600" />
                  General Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">All participants must be currently enrolled students</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Valid student ID required for registration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Registration deadline: July 30, 2025</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Entry fees are non-refundable</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-gray-900 text-lg">
                  <Clock className="h-5 w-5 mr-2 text-emerald-600" />
                  Submission Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Online submissions must be completed by deadline</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">All work must be original and plagiarism-free</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">File formats and size limits must be followed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Late submissions will not be accepted</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-gray-900 text-lg">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                  Judging Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Technical accuracy and innovation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Presentation quality and clarity</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Practical applicability and impact</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Adherence to competition requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Event <span className="text-brand-600">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two days of intensive competition, learning, and networking in the heart of water engineering innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="bg-brand-50 border-b border-brand-100 pb-4">
                <div className="text-center">
                  <Trophy className="h-10 w-10 text-brand-600 mx-auto mb-3" />
                  <CardTitle className="text-xl text-gray-900">Day 1: Competition Arena</CardTitle>
                  <p className="text-brand-600 font-semibold">Friday, August 1, 2025</p>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { time: "09:00 - 09:30", activity: "Registration & Welcome Ceremony", icon: Target },
                    { time: "09:30 - 17:30", activity: "Parallel Competition Segments", icon: Award },
                    { time: "All Day", activity: "Photography Exhibition & Documentary Screening", icon: Camera },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-1.5 bg-brand-100 rounded-lg">
                        <item.icon className="h-4 w-4 text-brand-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.time}</p>
                        <p className="text-gray-600 text-sm">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="bg-emerald-50 border-b border-emerald-100 pb-4">
                <div className="text-center">
                  <Award className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
                  <CardTitle className="text-xl text-gray-900">Day 2: Symposium & Awards</CardTitle>
                  <p className="text-emerald-600 font-semibold">Saturday, August 2, 2025</p>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { time: "10:00 - 12:00", activity: "Industry Expert Seminars & Workshops", icon: Users },
                    { time: "12:00 - 13:00", activity: "Grand Awards Ceremony", icon: Trophy },
                    { time: "13:00 - 14:00", activity: "Networking & Closing Reception", icon: Users },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-1.5 bg-emerald-100 rounded-lg">
                        <item.icon className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.time}</p>
                        <p className="text-gray-600 text-sm">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-brand-50 to-brand-100 border-brand-200 max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-10 text-center">
              <div className="p-3 bg-white rounded-full w-16 h-16 mx-auto mb-6 shadow-lg">
                <Waves className="h-10 w-10 text-brand-600 mx-auto" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make Waves?</h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Join Bangladesh's most prestigious water engineering competition. Registration closes July 30, 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white text-lg px-8 py-3 shadow-lg">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-600 text-brand-600 hover:bg-brand-50 text-lg px-8 py-3 bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </div>
              <p className="text-gray-600 mt-6">
                Questions? Contact us at{" "}
                <a href="mailto:flowfest@cuet.ac.bd" className="text-brand-600 hover:underline">
                  flowfest@cuet.ac.bd
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-brand-600 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Flow<span className="text-brand-400">Fest</span> 1.0
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg font-medium">Organized by Water Resources Research Organization (WRRO)</p>
              <p className="text-gray-400">Chittagong University of Engineering & Technology</p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+880-31-714946</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">flowfest@cuet.ac.bd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Trophy,
  Users,
  DollarSign,
  Target,
  CheckCircle,
  AlertCircle,
  FileText,
  Droplets,
  Presentation,
  Map,
  Calculator,
  Wrench,
  Monitor,
  Camera,
  Video,
  Award,
  Download,
  Mail,
} from "lucide-react"
import competitionsData from "../../../data/competitions.json"

const iconMap = {
  Presentation,
  Map,
  Calculator,
  Wrench,
  Monitor,
  Camera,
  Video,
}

export default function CompetitionPage({ params }: { params: { slug: string } }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const competition = competitionsData.competitions.find((comp) => comp.id === params.slug)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!competition) {
    notFound()
  }

  const IconComponent = iconMap[competition.icon as keyof typeof iconMap]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="p-2 bg-brand-100 rounded-lg">
                <Droplets className="h-8 w-8 text-brand-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Flow<span className="text-brand-600">Fest</span>
              </span>
              <Badge className="bg-brand-100 text-brand-800 hover:bg-brand-200">1.0</Badge>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="p-4 bg-white rounded-xl shadow-lg w-20 h-20 mx-auto mb-6">
            <IconComponent className={`h-12 w-12 ${competition.iconColor} mx-auto`} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{competition.title}</h1>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">{competition.objective}</p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className={competition.badgeColor + " px-3 py-1 text-sm"}>{competition.category}</Badge>
            <Badge variant="outline" className="border-gray-300 text-gray-600 px-3 py-1 text-sm">
              {competition.difficulty}
            </Badge>
            <Badge variant="outline" className="border-gray-300 text-gray-600 px-3 py-1 text-sm">
              {competition.participants}
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { icon: Trophy, label: "Prize Pool", value: competition.prize, color: "text-yellow-600" },
            { icon: DollarSign, label: "Entry Fee", value: competition.fee, color: "text-green-600" },
            { icon: Clock, label: "Format", value: competition.format, color: "text-blue-600" },
            { icon: Users, label: "Participants", value: competition.participants, color: "text-purple-600" },
          ].map((stat, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-0">
              <CardContent className="p-4 text-center">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* About Section */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-gray-900 flex items-center text-xl">
                  <FileText className="h-5 w-5 mr-2 text-brand-600" />
                  About This Competition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <p className="text-gray-700 leading-relaxed">{competition.longDescription}</p>
                <div className="bg-brand-50 rounded-lg p-4 border border-brand-200">
                  <h4 className="text-brand-700 font-bold mb-2">Eligibility</h4>
                  <p className="text-gray-700 text-sm">{competition.eligibility}</p>
                </div>
              </CardContent>
            </Card>

            {/* Objectives */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-gray-900 flex items-center text-xl">
                  <Target className="h-5 w-5 mr-2 text-emerald-600" />
                  Competition Objectives
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {competition.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{objective}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-gray-900 flex items-center text-xl">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Competition Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {competition.timeline.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{item.time}</p>
                        <p className="text-gray-700 text-sm">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-gray-900 flex items-center text-xl">
                  <AlertCircle className="h-5 w-5 mr-2 text-yellow-600" />
                  Requirements & Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {competition.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Registration CTA */}
              <Card className="bg-gradient-to-br from-brand-50 to-brand-100 border-brand-200 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-white rounded-full w-14 h-14 mx-auto mb-4 shadow-md">
                    <Award className="h-8 w-8 text-brand-600 mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ready to Compete?</h3>
                  <p className="text-gray-700 mb-4 text-sm">Registration closes July 30, 2025</p>
                  <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white mb-3 shadow-md text-sm">
                    Register Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-brand-600 text-brand-600 hover:bg-brand-50 bg-transparent text-sm"
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Download Rules
                  </Button>
                </CardContent>
              </Card>

              {/* Judging Criteria */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-gray-900 flex items-center text-lg">
                    <Award className="h-4 w-4 mr-2 text-brand-600" />
                    Judging Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {competition.judging.map((criteria, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <span className="text-gray-700 text-xs">{criteria.split(" (")[0]}</span>
                        <Badge className="bg-brand-100 text-brand-800 text-xs">
                          {criteria.match(/$$([^)]+)$$/)?.[1]}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Prizes */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-gray-900 flex items-center text-lg">
                    <Trophy className="h-4 w-4 mr-2 text-yellow-600" />
                    Prize Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {competition.prizes.map((prize, index) => (
                      <div key={index} className="border-l-4 border-brand-600 pl-3 py-1">
                        <p className="font-semibold text-gray-900 text-sm">{prize.position}</p>
                        <p className="text-emerald-600 font-bold text-sm">{prize.amount}</p>
                        <p className="text-gray-600 text-xs">{prize.additional}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-gray-900 text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 text-xs mb-3">Have questions about this competition? Contact our team.</p>
                  <Button
                    variant="outline"
                    className="w-full border-brand-600 text-brand-600 hover:bg-brand-50 bg-transparent text-sm"
                  >
                    <Mail className="mr-2 h-3 w-3" />
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

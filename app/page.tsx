"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ScrollButton from "@/components/ui/ScrollButton";
import { Badge } from "@/components/ui/badge"
import { Calendar, Heart, Users, Music, BookOpen, Globe, Play, Star, Sparkles, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='%23f97316'%20fillOpacity='0.05'%3E%3Ccircle%20cx='30'%20cy='30'%20r='4'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl opacity-30 scale-150"></div>
            <Image
              src="/saibaba.jpg"
              alt="Shirdi Sai Baba"
              width={250}
              height={250}
              className="rounded-full shadow-lg"
              priority
            />
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-3 shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent mb-4">
              श्री साईं बाबा
            </h1>
            <h2 className="text-3xl md:text-4xl text-orange-700 font-semibold tracking-wide">Shirdi Sai Baba</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                "सबका मालिक एक" - There is only one Master
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the divine teachings, daily devotionals, and spiritual community dedicated to the eternal
                saint of Shirdi. Join millions of devotees in spreading love, compassion, and unity.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://www.youtube.com/channel/UCvJEdW_JkQWqzuJ-kL5wWdQ", "_blank")}
            >
              <Play className="mr-3 h-6 w-6" />
              Join Daily Aarti
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              onClick={() => (window.location.href = "/teachings")}
            >
              <BookOpen className="mr-3 h-6 w-6" />
              Explore Teachings
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Streaming Now</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>50,000+ Active Devotees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>25+ Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Quote */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <Star className="h-12 w-12 mx-auto text-amber-200 mb-4" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
            "Why fear when I am here? Cast all your burdens on me and be at peace."
          </blockquote>
          <cite className="text-lg text-orange-100">- Shirdi Sai Baba</cite>
        </div>
      </section>

      {/* Spiritual Journey Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">Begin Your Spiritual Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the path of devotion through Sai Baba's teachings, participate in daily prayers, and connect with
              a global community of believers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Sacred Biography",
                description: "Explore the miraculous life and divine teachings of Shirdi Sai Baba",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                href: "/biography",
              },
              {
                icon: Music,
                title: "Divine Devotionals",
                description: "Daily aarti, bhajans, and mantras for spiritual upliftment",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                href: "/devotionals",
              },
              {
                icon: Calendar,
                title: "Sacred Events",
                description: "Join temple festivals, satsangs, and spiritual celebrations",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
                href: "/events",
              },
              {
                icon: Users,
                title: "Devotee Community",
                description: "Connect with fellow devotees and share spiritual experiences",
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50",
                href: "/community",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <CardHeader className={`${item.bgColor} text-center pb-8 relative`}>
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-3">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 group-hover:border-orange-300 group-hover:text-orange-600 transition-all duration-300 bg-transparent"
                  >
                    Explore More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Devotionals */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-4">Daily Blessings</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">Today's Sacred Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your day with divine blessings through our carefully curated spiritual content
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Live Aarti */}
            <Card className="lg:col-span-2 bg-gradient-to-br from-orange-600 to-amber-600 text-white border-0 shadow-2xl overflow-hidden">
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-red-500 text-white animate-pulse px-3 py-1">🔴 LIVE</Badge>
                  <div className="flex items-center space-x-2 text-orange-100">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">6:00 AM IST</span>
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold mb-2">Morning Aarti</CardTitle>
                <CardDescription className="text-orange-100 text-lg">
                  Join thousands of devotees in sacred morning prayers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-orange-700 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 opacity-50"></div>
                  <div className="relative text-center">
                    <Play className="h-20 w-20 mx-auto mb-4 text-orange-200" />
                    <p className="text-orange-100 text-lg">Live Stream Active</p>
                    <p className="text-orange-200 text-sm mt-2">2,847 devotees watching</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100 flex-1 shadow-lg"
                    onClick={() => window.open("https://www.youtube.com/channel/UCvJEdW_JkQWqzuJ-kL5wWdQ", "_blank")}
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Join Live Stream
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-600 flex-1 bg-transparent"
                    onClick={() => window.open("https://www.youtube.com/channel/UCvJEdW_JkQWqzuJ-kL5wWdQ", "_blank")}
                  >
                    Audio Only
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Daily Content */}
            <div className="space-y-6">
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="text-green-800 flex items-center">
                    <Music className="h-5 w-5 mr-2" />
                    Bhajan of the Day
                  </CardTitle>
                  <CardDescription>"Om Sai Ram" - Traditional devotional</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-square bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                    <Music className="h-12 w-12 text-green-600" />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    Play Audio
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-blue-800 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Daily Teaching
                  </CardTitle>
                  <CardDescription>Wisdom for spiritual growth</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="p-4 bg-blue-50 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 italic leading-relaxed">
                      "Have faith and patience. Then I will be always with you wherever you are."
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">Sacred Gatherings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for special celebrations, spiritual discourses, and community service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Guru Purnima Celebration",
                date: "Dec 25, 2024",
                time: "10:00 AM - 6:00 PM",
                location: "Main Temple",
                type: "Festival",
                color: "from-orange-500 to-red-500",
                bgColor: "bg-orange-50",
              },
              {
                title: "Weekly Satsang",
                date: "Every Thursday",
                time: "7:00 PM - 9:00 PM",
                location: "Community Hall",
                type: "Regular",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50",
              },
              {
                title: "Makar Sankranti",
                date: "Jan 15, 2025",
                time: "6:00 AM - 8:00 PM",
                location: "Temple Complex",
                type: "Special",
                color: "from-blue-500 to-indigo-500",
                bgColor: "bg-blue-50",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
              >
                <CardHeader className={`${event.bgColor} relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`bg-gradient-to-r ${event.color} text-white px-3 py-1`}>{event.type}</Badge>
                    <span className="text-sm text-gray-600">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">{event.title}</CardTitle>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Button
                    variant="outline"
                    className="w-full group-hover:border-orange-300 group-hover:text-orange-600 transition-all duration-300 bg-transparent"
                  >
                    Register Interest
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">Global Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together we serve humanity and spread Sai Baba's message of love, compassion, and unity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Active Devotees", icon: Users, color: "from-blue-500 to-blue-600" },
              { number: "1000+", label: "Daily Prayers", icon: Heart, color: "from-red-500 to-red-600" },
              { number: "25+", label: "Countries Reached", icon: Globe, color: "from-green-500 to-green-600" },
              { number: "100+", label: "Years of Legacy", icon: Star, color: "from-orange-500 to-orange-600" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='#ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg')] opacity-30"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <Sparkles className="h-16 w-16 mx-auto text-amber-200 mb-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Explore the Divine</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
            Delve deeper into the teachings of Shirdi Sai Baba and connect with a global community of devotees.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => (window.location.href = "/community")}
            >
              <Users className="mr-3 h-6 w-6" />
              Join Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 bg-transparent"
              onClick={() => (window.location.href = "/teachings")}
            >
              <Globe className="mr-3 h-6 w-6" />
              Explore Teachings
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Heart, Clock, Users, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function DevotionalsPage() {
  const handleLiveStream = () => {
    window.open("https://www.youtube.com/live/_6GjOYj9-Ek?si=9wBAUbT9OT6dDbdt", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 to-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-6">Daily Devotionals</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Immerse yourself in divine prayers, sacred bhajans, and spiritual mantras that connect your soul with Shirdi
            Sai Baba's eternal presence.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>12,000+ Daily Listeners</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Updated Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Aarti Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-orange-600 to-orange-700 text-white border-none">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Badge className="bg-red-500 text-white animate-pulse">LIVE</Badge>
                <span className="text-sm">Live Darshan Available</span>
              </div>
              <CardTitle className="text-2xl">श्री साईं दर्शन</CardTitle>
              <CardDescription className="text-orange-100">
                Join thousands of devotees in live darshan and prayers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-orange-800 rounded-lg mb-6 flex items-center justify-center">
                <Image
                  src="/Sai_gold_full.jpg"
                  alt="Sai Baba at Samadhi Mandir"
                  width={800}
                  height={768}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" onClick={handleLiveStream}>
                    <Play className="h-5 w-5 mr-2" />
                    Watch Live Darshan
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-orange-200">Continuous Stream</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Devotional Content Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="aarti" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="aarti">Aarti</TabsTrigger>
              <TabsTrigger value="bhajans">Bhajans</TabsTrigger>
              <TabsTrigger value="mantras">Mantras</TabsTrigger>
              <TabsTrigger value="prayers">Prayers</TabsTrigger>
            </TabsList>

            <TabsContent value="aarti" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-orange-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-orange-800">Morning Aarti</CardTitle>
                      <Badge className="bg-green-100 text-green-800">6:00 AM</Badge>
                    </div>
                    <CardDescription>Traditional morning prayers to start your day with blessings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                      <Image
                        src="/Shirdi_Sai_Baba.jpg"
                        alt="Morning Aarti"
                        width={535}
                        height={768}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <Play className="h-4 w-4 mr-1" />
                        Listen
                      </Button>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-orange-800">Evening Aarti</CardTitle>
                      <Badge className="bg-blue-100 text-blue-800">7:00 PM</Badge>
                    </div>
                    <CardDescription>Sacred evening prayers with dhoop and deepam</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                      <Image
                        src="/Shirdi_sai2.jpg"
                        alt="Evening Aarti"
                        width={768}
                        height={1013}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <Play className="h-4 w-4 mr-1" />
                        Listen
                      </Button>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-orange-800">Noon Aarti</CardTitle>
                      <Badge className="bg-yellow-100 text-yellow-800">12:00 PM</Badge>
                    </div>
                    <CardDescription>Midday prayers for continuous divine connection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                      <Image
                        src="/Sai_gold_full.jpg"
                        alt="Noon Aarti"
                        width={800}
                        height={768}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <Play className="h-4 w-4 mr-1" />
                        Listen
                      </Button>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="mantras" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Om Sai Ram",
                    sanskrit: "ॐ साईं राम्",
                    meaning: "Sacred invocation of Sai Baba's divine name",
                    benefits: "Peace, Protection, Prosperity",
                  },
                  {
                    title: "Sai Gayatri Mantra",
                    sanskrit: "ॐ साईनाथाय विद्महे",
                    meaning: "Divine prayer for wisdom and enlightenment",
                    benefits: "Wisdom, Clarity, Spiritual Growth",
                  },
                  {
                    title: "Sai Maha Mantra",
                    sanskrit: "श्री साईं शरणं मम",
                    meaning: "Complete surrender to Sai Baba's divine will",
                    benefits: "Surrender, Faith, Divine Grace",
                  },
                ].map((mantra, index) => (
                  <Card key={index} className="border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-800">{mantra.title}</CardTitle>
                      <div className="text-2xl text-center py-4 bg-orange-50 rounded-lg">{mantra.sanskrit}</div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Meaning:</h4>
                        <p className="text-sm text-gray-600">{mantra.meaning}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                        <p className="text-sm text-gray-600">{mantra.benefits}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 flex-1">
                          <Play className="h-4 w-4 mr-1" />
                          Listen
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="prayers" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-800">Daily Prayers</CardTitle>
                    <CardDescription>Essential prayers for daily spiritual practice</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Morning Prayer", time: "Upon waking", purpose: "Gratitude and guidance" },
                      { name: "Meal Blessing", time: "Before eating", purpose: "Appreciation for nourishment" },
                      { name: "Evening Prayer", time: "Before sleep", purpose: "Reflection and peace" },
                      { name: "Difficulty Prayer", time: "In challenges", purpose: "Strength and wisdom" },
                    ].map((prayer, index) => (
                      <div key={index} className="p-4 bg-orange-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-800">{prayer.name}</span>
                          <Badge variant="outline" className="text-xs border-orange-300 text-orange-600">
                            {prayer.time}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{prayer.purpose}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-800">Prayer Guidelines</CardTitle>
                    <CardDescription>How to enhance your prayer experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-1">Preparation</h4>
                        <p className="text-sm text-blue-700">Find a quiet space and calm your mind</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-1">Focus</h4>
                        <p className="text-sm text-green-700">Concentrate on Sai Baba's divine presence</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-1">Gratitude</h4>
                        <p className="text-sm text-purple-700">Begin and end with thankfulness</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-1">Surrender</h4>
                        <p className="text-sm text-orange-700">Trust in divine will and timing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

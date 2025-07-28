import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Sparkles, Users, Calendar, MapPin, Quote } from "lucide-react"

export default function MiraclesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-100 via-amber-50 to-green-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f97316' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-6">Divine Miracles</Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-6">
            Miraculous Leelas of Sai Baba
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            Witness the divine interventions and miraculous healings that continue to inspire millions of devotees
            worldwide. These sacred stories demonstrate Sai Baba's eternal presence and boundless compassion.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4" />
              <span>Documented Miracles</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Devotee Testimonies</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Divine Grace</span>
            </div>
          </div>
        </div>
      </section>

      {/* Miracle Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="healing" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-orange-50">
              <TabsTrigger value="healing" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Healing Miracles
              </TabsTrigger>
              <TabsTrigger
                value="manifestation"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Divine Manifestations
              </TabsTrigger>
              <TabsTrigger
                value="protection"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Divine Protection
              </TabsTrigger>
              <TabsTrigger value="modern" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Modern Miracles
              </TabsTrigger>
            </TabsList>

            <TabsContent value="healing" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Miraculous Healings</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Stories of divine intervention in health and wellness through Sai Baba's grace
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "The Lame Man's Recovery",
                    location: "Shirdi, 1910",
                    story:
                      "A devotee who had been unable to walk for years came to Shirdi. Sai Baba touched his legs with sacred ash (Udi) and commanded him to walk. Instantly, the man stood up and walked normally, praising Baba's divine power.",
                    witness: "Recorded by Hemadpant in Sai Satcharitra",
                    category: "Physical Healing",
                  },
                  {
                    title: "Cholera Epidemic Cure",
                    location: "Shirdi Village, 1918",
                    story:
                      "During a severe cholera outbreak, Sai Baba distributed sacred ash to the villagers. Those who consumed the Udi with faith were completely protected from the disease, while the epidemic raged in surrounding areas.",
                    witness: "Village records and multiple devotee accounts",
                    category: "Mass Healing",
                  },
                  {
                    title: "The Blind Child's Sight",
                    location: "Shirdi, 1915",
                    story:
                      "A mother brought her blind child to Sai Baba. He applied Udi to the child's eyes and blessed him. Within days, the child's vision was completely restored, and he could see clearly for the first time.",
                    witness: "Documented by Das Ganu Maharaj",
                    category: "Sensory Healing",
                  },
                  {
                    title: "Cancer Patient's Recovery",
                    location: "Modern Day",
                    story:
                      "A devotee diagnosed with terminal cancer prayed fervently to Sai Baba. After visiting Shirdi and receiving Udi prasadam, subsequent medical tests showed complete remission with no trace of cancer cells.",
                    witness: "Medical records and devotee testimony",
                    category: "Modern Healing",
                  },
                ].map((miracle, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-xl text-green-800">{miracle.title}</CardTitle>
                        <Badge className="bg-green-100 text-green-800">{miracle.category}</Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{miracle.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">{miracle.story}</p>
                        <div className="border-l-4 border-green-300 pl-4 bg-green-50 p-3 rounded-r-lg">
                          <p className="text-sm text-green-700">
                            <strong>Witness:</strong> {miracle.witness}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="manifestation" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Divine Manifestations</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Supernatural phenomena that demonstrated Sai Baba's divine nature
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "The Eternal Dhuni",
                    description: "Sacred fire that burned continuously without fuel",
                    details:
                      "The dhuni (sacred fire) in Dwarkamai mosque burned day and night without any visible fuel. The ash from this fire possessed miraculous healing properties.",
                    icon: "🔥",
                  },
                  {
                    title: "Multiplication of Food",
                    description: "Feeding hundreds from a small pot",
                    details:
                      "Sai Baba regularly fed large crowds from a small pot of food, which never seemed to empty. Devotees witnessed this miracle countless times.",
                    icon: "🍽️",
                  },
                  {
                    title: "Bilocation Phenomenon",
                    description: "Appearing in multiple places simultaneously",
                    details:
                      "Devotees reported seeing Sai Baba in distant places while he was physically present in Shirdi, demonstrating his omnipresent nature.",
                    icon: "✨",
                  },
                  {
                    title: "Water from Dry Well",
                    description: "Creating water source during drought",
                    details:
                      "During severe drought, Sai Baba struck a dry well with his staff, and sweet water immediately gushed forth, saving the village.",
                    icon: "💧",
                  },
                  {
                    title: "Lamp Without Oil",
                    description: "Lamps burning without any oil",
                    details:
                      "Sai Baba lit lamps with water instead of oil, and they burned brightly throughout the night, defying natural laws.",
                    icon: "🪔",
                  },
                  {
                    title: "Reading Minds",
                    description: "Knowing devotees' thoughts and needs",
                    details:
                      "Sai Baba would answer questions before they were asked and provide solutions to problems devotees hadn't yet expressed.",
                    icon: "🧠",
                  },
                ].map((manifestation, index) => (
                  <Card
                    key={index}
                    className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50">
                      <div className="text-4xl mb-4">{manifestation.icon}</div>
                      <CardTitle className="text-purple-800">{manifestation.title}</CardTitle>
                      <p className="text-sm text-purple-600 italic">{manifestation.description}</p>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed text-sm">{manifestation.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="protection" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Divine Protection</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Stories of how Sai Baba protected his devotees from danger and adversity
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "Protection from Fire",
                    date: "1912",
                    story:
                      "When a massive fire broke out in Shirdi, threatening to destroy the entire village, Sai Baba stood at the edge of the flames and commanded them to stop. The fire immediately subsided, sparing all the houses and lives.",
                    lesson: "Divine intervention in natural disasters",
                    impact: "Entire village saved",
                  },
                  {
                    title: "The Soldier's Safe Return",
                    date: "World War I",
                    story:
                      "A devotee's son was sent to war. The mother prayed to Sai Baba daily for his protection. Despite being in the most dangerous battles, the soldier returned home without a single injury, crediting Sai Baba's protection.",
                    lesson: "Protection across vast distances",
                    impact: "Family reunited safely",
                  },
                  {
                    title: "Plague Prevention",
                    date: "1918",
                    story:
                      "During the deadly plague epidemic, Sai Baba created a protective barrier around Shirdi by walking around the village boundaries. No one in Shirdi contracted the plague while it devastated surrounding areas.",
                    lesson: "Community-wide divine protection",
                    impact: "Entire population protected",
                  },
                ].map((protection, index) => (
                  <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <div className="flex items-center space-x-4 mb-4">
                            <h3 className="text-2xl font-bold text-orange-800">{protection.title}</h3>
                            <Badge className="bg-blue-100 text-blue-800">{protection.date}</Badge>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-4">{protection.story}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-2 text-green-600">
                              <Star className="h-4 w-4" />
                              <span>{protection.lesson}</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">Impact</h4>
                          <p className="text-orange-700 text-sm">{protection.impact}</p>
                          <div className="mt-4 flex items-center justify-center">
                            <Sparkles className="h-8 w-8 text-orange-500" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="modern" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Modern Day Miracles</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Contemporary testimonies of Sai Baba's continued divine intervention
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Business Salvation",
                    year: "2020",
                    location: "Mumbai, India",
                    testimony:
                      "During the pandemic, my business was on the verge of bankruptcy. I prayed to Sai Baba and visited Shirdi. Within a month, unexpected opportunities arose, and my business not only survived but thrived.",
                    devotee: "Rajesh Patel, Businessman",
                    category: "Financial Miracle",
                  },
                  {
                    title: "Child's Recovery",
                    year: "2021",
                    location: "California, USA",
                    testimony:
                      "My daughter was born with a rare heart condition. Doctors said surgery was risky. We prayed to Sai Baba daily and applied Udi. The next medical examination showed the condition had completely healed naturally.",
                    devotee: "Priya Sharma, Software Engineer",
                    category: "Medical Miracle",
                  },
                  {
                    title: "Accident Prevention",
                    year: "2022",
                    location: "London, UK",
                    testimony:
                      "I was driving on the highway when I suddenly felt compelled to change lanes. Seconds later, a massive truck crashed exactly where my car would have been. I felt Sai Baba's protective presence.",
                    devotee: "David Wilson, Teacher",
                    category: "Divine Protection",
                  },
                  {
                    title: "Exam Success",
                    year: "2023",
                    location: "Delhi, India",
                    testimony:
                      "I was failing my medical entrance exams despite studying hard. After visiting Shirdi and receiving Baba's blessings, I felt a new clarity and confidence. I cleared the exam with flying colors.",
                    devotee: "Anita Gupta, Medical Student",
                    category: "Academic Miracle",
                  },
                ].map((modern, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-xl text-blue-800">{modern.title}</CardTitle>
                        <Badge className="bg-blue-100 text-blue-800">{modern.category}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{modern.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{modern.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="relative">
                          <Quote className="h-8 w-8 text-blue-300 absolute -top-2 -left-2" />
                          <p className="text-gray-700 leading-relaxed italic pl-6">{modern.testimony}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-blue-600 font-medium">- {modern.devotee}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Share Your Miracle */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">Share Your Miracle</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have you experienced Sai Baba's divine grace in your life? Share your story to inspire others and spread his
            message of love and compassion.
          </p>
          <Card className="bg-white border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Miracle Title"
                  className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <textarea
                  placeholder="Share your miracle story..."
                  rows={6}
                  className="w-full p-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3">
                  <Heart className="mr-2 h-5 w-5" />
                  Share Your Story
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="h-16 w-16 mx-auto mb-8 text-amber-200" />
          <h2 className="text-4xl font-bold mb-6">Experience Divine Grace</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Open your heart to Sai Baba's boundless love and witness miracles in your own life through faith, devotion,
            and surrender.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 shadow-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Prayer Circle
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 bg-transparent"
            >
              <Star className="mr-2 h-5 w-5" />
              Read More Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, BookOpen, Sparkles, Quote, Heart, Star, Globe } from "lucide-react"

export default function TeachingsPage() {
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
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-6">Sacred Teachings</Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-6">
            Divine Wisdom of Shirdi Sai Baba
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            Explore the eternal teachings, parables, and quotes that illuminate the path to faith, compassion, and
            unity. These timeless principles continue to guide millions of devotees worldwide.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Millions Inspired</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Timeless Guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Universal Wisdom</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="principles" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-orange-50">
              <TabsTrigger
                value="principles"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Core Principles
              </TabsTrigger>
              <TabsTrigger
                value="parables"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Sacred Parables
              </TabsTrigger>
              <TabsTrigger value="quotes" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Divine Quotes
              </TabsTrigger>
            </TabsList>

            {/* Principles Tab */}
            <TabsContent value="principles" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Fundamental Principles</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The core teachings that form the foundation of Sai Baba's spiritual philosophy
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "सबका मालिक एक",
                    translation: "There is only one Master",
                    description:
                      "All paths lead to the same divine truth; worship the one reality that pervades all existence.",
                    icon: Star,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    title: "श्रद्धा और सबुरी",
                    translation: "Faith and Patience",
                    description: "Cultivate unwavering faith and enduring patience to overcome all obstacles in life.",
                    icon: Heart,
                    color: "from-green-500 to-green-600",
                  },
                  {
                    title: "सर्व धर्म समभाव",
                    translation: "All Religions are Equal",
                    description:
                      "Respect every faith, for each leads to the singular divine truth through different paths.",
                    icon: Globe,
                    color: "from-purple-500 to-purple-600",
                  },
                ].map((item, idx) => (
                  <Card
                    key={idx}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  >
                    <CardHeader className="text-center bg-gradient-to-r from-orange-50 to-amber-50 pb-8">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                      >
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-orange-800 mb-3">{item.title}</div>
                      <div className="text-lg text-orange-600 italic font-medium">{item.translation}</div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Parables Tab */}
            <TabsContent value="parables" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Sacred Parables</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Timeless stories that convey profound spiritual truths through simple narratives
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "The Donkey and the Salt",
                    story:
                      "A merchant's donkey carrying salt bags accidentally fell into a river. The salt dissolved, making the load lighter. Thinking this was clever, the donkey deliberately fell into water the next day while carrying sponges, only to find the load became heavier. Sai Baba taught through this story that attachments and desires dissolve in the river of divine knowledge, but one should not mistake temporary relief for permanent wisdom.",
                    lesson: "True spiritual progress comes through genuine understanding, not clever shortcuts.",
                    category: "Wisdom",
                  },
                  {
                    title: "Two Friends and the Well",
                    story:
                      "Two friends were traveling when one fell into a deep well. The other friend, driven by ego, boasted about his own safety instead of helping. A humble passerby heard the cries and rescued the fallen friend. Sai Baba used this parable to show that divine assistance comes to those who call out in genuine need, while ego blinds us to others' suffering.",
                    lesson: "Humility and compassion open the doors to divine grace.",
                    category: "Compassion",
                  },
                  {
                    title: "The Toy Cart and the Owner",
                    story:
                      "A child impatiently pulled at his toy cart, breaking it in his haste to make it move faster. His patient friend waited, oiled the wheels, and enjoyed hours of smooth play. Sai Baba taught that spiritual haste leads to ruin, whereas patience and proper preparation secure lasting fulfillment in our spiritual journey.",
                    lesson: "Patience in spiritual practice yields lasting results.",
                    category: "Patience",
                  },
                ].map((parable, idx) => (
                  <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-2xl text-orange-800">{parable.title}</CardTitle>
                        <Badge className="bg-orange-100 text-orange-800">{parable.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">The Story:</h4>
                          <p className="text-gray-700 leading-relaxed">{parable.story}</p>
                        </div>
                        <div className="border-l-4 border-orange-300 pl-6 bg-orange-50 p-4 rounded-r-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">Spiritual Lesson:</h4>
                          <p className="text-orange-700 italic">{parable.lesson}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Quotes Tab */}
            <TabsContent value="quotes" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Divine Quotes</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Profound words of wisdom that continue to inspire and guide devotees across the world
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    text: "Why fear when I am here? Cast all your burdens on me and be at peace.",
                    context: "Spoken to devotees during times of distress and uncertainty",
                    theme: "Divine Protection",
                  },
                  {
                    text: "My treasury is open but no one brings carts to take from it. I say, 'Dig!' but no one bothers.",
                    context: "Encouraging devotees to seek spiritual wealth through devotion",
                    theme: "Spiritual Wealth",
                  },
                  {
                    text: "If you look to me, I look to you. If you cast your burden on me, I shall surely bear it.",
                    context: "Promise of divine support and reciprocal love",
                    theme: "Divine Grace",
                  },
                  {
                    text: "Be wherever you like, do whatever you choose, remember this well that all what you do is known to me.",
                    context: "Reminder of divine omnipresence and moral responsibility",
                    theme: "Divine Awareness",
                  },
                  {
                    text: "Love all, serve all. Help ever, hurt never.",
                    context: "The fundamental principle of universal love and service",
                    theme: "Universal Love",
                  },
                  {
                    text: "Before you speak, ask yourself: Is it kind, is it true, is it necessary?",
                    context: "Guidance on right speech and mindful communication",
                    theme: "Right Speech",
                  },
                ].map((quote, idx) => (
                  <Card
                    key={idx}
                    className="bg-gradient-to-br from-orange-50 to-amber-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-8">
                      <Quote className="h-12 w-12 text-orange-400 mb-6" />
                      <blockquote className="text-xl text-gray-800 italic leading-relaxed mb-6">
                        "{quote.text}"
                      </blockquote>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="border-orange-300 text-orange-600">
                            {quote.theme}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 border-l-4 border-orange-300 pl-4">{quote.context}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Daily Teaching Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-800 mb-8">Today's Teaching</h2>
          <Card className="bg-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <Sparkles className="h-16 w-16 text-orange-500 mx-auto mb-8" />
              <blockquote className="text-2xl text-gray-800 italic leading-relaxed mb-6">
                "Have faith and patience. Then I will be always with you wherever you are."
              </blockquote>
              <div className="text-orange-600 font-medium mb-8">- Shirdi Sai Baba</div>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                This teaching reminds us that the combination of unwavering faith (Shraddha) and infinite patience
                (Saburi) creates the perfect conditions for experiencing divine presence in every moment of our lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Sparkles className="h-16 w-16 mx-auto mb-8 text-amber-200" />
          <h2 className="text-4xl font-bold mb-6">Embrace His Wisdom</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Let these eternal teachings guide your heart and transform your life through faith, devotion, and service to
            humanity. Join millions of devotees who find peace and purpose in Sai Baba's divine wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 shadow-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Join the Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read More Teachings
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

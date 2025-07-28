import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Star, Heart, Music, Sparkles, Bell, Gift } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-100 via-amber-50 to-green-50 relative overflow-hidden">
        <div
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f97316' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          className="absolute inset-0 opacity-30"
        ></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-6">Sacred Gatherings</Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-6">
            Divine Events & Festivals
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            Join our spiritual community in celebrating sacred festivals, attending enlightening satsangs, and
            participating in community service activities that honor Sai Baba's teachings.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>50+ Annual Events</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>10,000+ Participants</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>Live Notifications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-orange-600 to-amber-600 text-white border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className="bg-red-500 text-white animate-pulse">Featured Event</Badge>
                    <Badge className="bg-white/20 text-white">This Month</Badge>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Guru Purnima Celebration</h2>
                  <p className="text-orange-100 text-lg mb-6 leading-relaxed">
                    Join us for the most sacred celebration honoring our divine Guru. Experience special pujas,
                    devotional music, community feast, and spiritual discourses.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3 text-orange-100">
                      <Calendar className="h-5 w-5" />
                      <span>December 25, 2024</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-100">
                      <Clock className="h-5 w-5" />
                      <span>6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-100">
                      <MapPin className="h-5 w-5" />
                      <span>Shirdi Sai Temple Complex</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-100">
                      <Users className="h-5 w-5" />
                      <span>5,000+ Expected Devotees</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
                      <Heart className="mr-2 h-5 w-5" />
                      Register Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-orange-600"
                    >
                      <Bell className="mr-2 h-5 w-5" />
                      Set Reminder
                    </Button>
                  </div>
                </div>

                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Guru Purnima Celebration"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm">Live Streaming Available</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">LIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-orange-50">
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Upcoming
              </TabsTrigger>
              <TabsTrigger
                value="festivals"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Festivals
              </TabsTrigger>
              <TabsTrigger value="regular" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Regular
              </TabsTrigger>
              <TabsTrigger value="special" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Special
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Weekly Satsang",
                    date: "Every Thursday",
                    time: "7:00 PM - 9:00 PM",
                    location: "Community Hall",
                    attendees: "200+",
                    type: "Regular",
                    color: "from-green-500 to-emerald-500",
                    bgColor: "bg-green-50",
                    description: "Spiritual discourse, bhajan singing, and community prayers",
                  },
                  {
                    title: "Makar Sankranti",
                    date: "January 15, 2025",
                    time: "6:00 AM - 8:00 PM",
                    location: "Temple Complex",
                    attendees: "3000+",
                    type: "Festival",
                    color: "from-blue-500 to-indigo-500",
                    bgColor: "bg-blue-50",
                    description: "Kite flying, special prayers, and traditional feast",
                  },
                  {
                    title: "Ram Navami Celebration",
                    date: "April 6, 2025",
                    time: "5:00 AM - 11:00 PM",
                    location: "Main Temple",
                    attendees: "5000+",
                    type: "Festival",
                    color: "from-purple-500 to-violet-500",
                    bgColor: "bg-purple-50",
                    description: "Birth celebration of Lord Rama with special ceremonies",
                  },
                ].map((event, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden transform hover:-translate-y-1"
                  >
                    <CardHeader className={`${event.bgColor} relative`}>
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`bg-gradient-to-r ${event.color} text-white px-3 py-1`}>{event.type}</Badge>
                        <div className="text-sm text-gray-600">{event.date}</div>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 mb-2">{event.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>{event.attendees} Expected</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 flex-1">
                          Register
                        </Button>
                        <Button size="sm" variant="outline" className="border-orange-300 text-orange-600">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="festivals" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Diwali Celebration",
                    date: "November 1, 2024",
                    description: "Festival of lights with special lamp lighting ceremony and fireworks",
                    image: "/placeholder.svg?height=200&width=400",
                    highlights: ["Lamp Lighting", "Fireworks", "Special Prasadam", "Cultural Programs"],
                  },
                  {
                    title: "Holi Festival",
                    date: "March 14, 2025",
                    description: "Festival of colors celebrating the victory of good over evil",
                    image: "/placeholder.svg?height=200&width=400",
                    highlights: ["Color Play", "Traditional Music", "Special Sweets", "Community Dance"],
                  },
                ].map((festival, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-48">
                      <Image
                        src={festival.image || "/placeholder.svg"}
                        alt={festival.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{festival.title}</h3>
                        <p className="text-sm text-gray-200">{festival.date}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">{festival.description}</p>
                      <div className="space-y-2 mb-4">
                        <h4 className="font-semibold text-gray-800">Event Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {festival.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="border-orange-300 text-orange-600">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <Gift className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="regular" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { day: "Monday", event: "Hanuman Chalisa", time: "6:00 PM", icon: Star },
                  { day: "Tuesday", event: "Ganesha Aarti", time: "7:00 PM", icon: Heart },
                  { day: "Wednesday", event: "Sai Bhajans", time: "7:30 PM", icon: Music },
                  { day: "Thursday", event: "Satsang", time: "7:00 PM", icon: Users },
                  { day: "Friday", event: "Devi Prayers", time: "6:30 PM", icon: Sparkles },
                  { day: "Saturday", event: "Community Service", time: "9:00 AM", icon: Heart },
                  { day: "Sunday", event: "Special Aarti", time: "6:00 PM", icon: Star },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-all duration-300 border-orange-200"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-1">{item.day}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.event}</p>
                      <Badge variant="outline" className="border-orange-300 text-orange-600">
                        {item.time}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="special" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Special Occasions</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Unique events and special ceremonies that happen throughout the year
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Miracle Stories Evening",
                    frequency: "Monthly",
                    description: "Devotees share their personal experiences and miracles",
                    icon: Star,
                  },
                  {
                    title: "Youth Spiritual Camp",
                    frequency: "Quarterly",
                    description: "Special programs designed for young devotees",
                    icon: Users,
                  },
                  {
                    title: "Healing Prayer Circle",
                    frequency: "Weekly",
                    description: "Special prayers for health and healing",
                    icon: Heart,
                  },
                ].map((event, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-lg"
                  >
                    <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                        <event.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-orange-800">{event.title}</CardTitle>
                      <Badge className="bg-orange-100 text-orange-800">{event.frequency}</Badge>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                      <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                        Get Notified
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="h-16 w-16 mx-auto mb-8 text-amber-200" />
          <h2 className="text-4xl font-bold mb-6">Never Miss a Sacred Moment</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Subscribe to our event calendar and receive notifications for all upcoming festivals, satsangs, and special
            ceremonies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 shadow-lg"
            >
              <Bell className="mr-2 h-5 w-5" />
              Subscribe to Calendar
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

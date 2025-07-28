import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, MessageCircle, Heart, Star, HandHeart, Globe, Sparkles, Send, Search, Filter } from "lucide-react"

export default function CommunityPage() {
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
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-6">Global Community</Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-6">
            Devotee Community
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            Connect with millions of Sai devotees worldwide. Share experiences, seek guidance, participate in community
            service, and grow together on the spiritual path.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>50,000+ Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>25+ Countries</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>1000+ Daily Posts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, number: "50K+", label: "Active Members", color: "from-blue-500 to-blue-600" },
              { icon: MessageCircle, number: "25K+", label: "Discussions", color: "from-green-500 to-green-600" },
              { icon: HandHeart, number: "500+", label: "Volunteers", color: "from-purple-500 to-purple-600" },
              { icon: Heart, number: "10K+", label: "Testimonials", color: "from-red-500 to-red-600" },
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
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="forum" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-orange-50">
              <TabsTrigger value="forum" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Discussion Forum
              </TabsTrigger>
              <TabsTrigger
                value="testimonials"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Testimonials
              </TabsTrigger>
              <TabsTrigger
                value="volunteer"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Volunteer
              </TabsTrigger>
              <TabsTrigger value="groups" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Local Groups
              </TabsTrigger>
            </TabsList>

            <TabsContent value="forum" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Forum Categories */}
                <div className="lg:col-span-1">
                  <Card className="border-orange-200 sticky top-4">
                    <CardHeader>
                      <CardTitle className="text-orange-800 flex items-center">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Forum Categories
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {[
                        { name: "Sai Teachings", posts: 1250, color: "bg-blue-100 text-blue-800" },
                        { name: "Miracle Stories", posts: 890, color: "bg-green-100 text-green-800" },
                        { name: "Prayer Requests", posts: 2100, color: "bg-purple-100 text-purple-800" },
                        { name: "Spiritual Guidance", posts: 750, color: "bg-orange-100 text-orange-800" },
                        { name: "Community Help", posts: 450, color: "bg-red-100 text-red-800" },
                      ].map((category, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                        >
                          <div>
                            <div className="font-medium text-gray-800">{category.name}</div>
                            <div className="text-sm text-gray-600">{category.posts} posts</div>
                          </div>
                          <Badge className={category.color}>Active</Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Discussions */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-orange-800">Recent Discussions</h3>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-orange-300 text-orange-600">
                        <Search className="h-4 w-4 mr-1" />
                        Search
                      </Button>
                      <Button size="sm" variant="outline" className="border-orange-300 text-orange-600">
                        <Filter className="h-4 w-4 mr-1" />
                        Filter
                      </Button>
                    </div>
                  </div>

                  {[
                    {
                      title: "How Sai Baba's teachings changed my perspective on life",
                      author: "Priya Sharma",
                      category: "Sai Teachings",
                      replies: 23,
                      time: "2 hours ago",
                      excerpt:
                        "I wanted to share how following Sai Baba's principle of 'Sabka Malik Ek' has transformed my relationships...",
                    },
                    {
                      title: "Miraculous healing after visiting Shirdi",
                      author: "Rajesh Kumar",
                      category: "Miracle Stories",
                      replies: 45,
                      time: "5 hours ago",
                      excerpt:
                        "My mother was suffering from a chronic illness for years. After our pilgrimage to Shirdi...",
                    },
                    {
                      title: "Seeking prayers for my family's well-being",
                      author: "Meera Patel",
                      category: "Prayer Requests",
                      replies: 67,
                      time: "1 day ago",
                      excerpt:
                        "Dear Sai family, I humbly request your prayers for my family during this challenging time...",
                    },
                  ].map((post, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-orange-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                            <AvatarFallback className="bg-orange-100 text-orange-600">
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="outline" className="border-orange-300 text-orange-600 text-xs">
                                {post.category}
                              </Badge>
                              <span className="text-sm text-gray-500">{post.time}</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2 hover:text-orange-600 cursor-pointer">
                              {post.title}
                            </h4>
                            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>By {post.author}</span>
                                <span>{post.replies} replies</span>
                              </div>
                              <Button size="sm" variant="ghost" className="text-orange-600 hover:bg-orange-50">
                                Join Discussion
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-800">Start a New Discussion</CardTitle>
                      <CardDescription>
                        Share your thoughts, experiences, or questions with the community
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input placeholder="Discussion title..." className="border-orange-200" />
                      <Textarea placeholder="Share your thoughts..." rows={4} className="border-orange-200" />
                      <div className="flex items-center justify-between">
                        <select className="p-2 border border-orange-200 rounded-lg text-sm">
                          <option>Select Category</option>
                          <option>Sai Teachings</option>
                          <option>Miracle Stories</option>
                          <option>Prayer Requests</option>
                          <option>Spiritual Guidance</option>
                        </select>
                        <Button className="bg-orange-600 hover:bg-orange-700">
                          <Send className="h-4 w-4 mr-2" />
                          Post Discussion
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="testimonials" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Devotee Testimonials</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Read inspiring stories of faith, miracles, and transformation from our global community
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Anita Desai",
                    location: "Mumbai, India",
                    story:
                      "Sai Baba's grace helped me overcome the most difficult period of my life. His teachings gave me strength when I had none left.",
                    rating: 5,
                    category: "Life Transformation",
                  },
                  {
                    name: "David Johnson",
                    location: "California, USA",
                    story:
                      "As a non-Indian, I was initially skeptical. But Sai Baba's universal message of love transcends all boundaries. My life has never been the same.",
                    rating: 5,
                    category: "Spiritual Awakening",
                  },
                  {
                    name: "Lakshmi Nair",
                    location: "Kerala, India",
                    story:
                      "My son's miraculous recovery from a serious illness after our prayers to Sai Baba strengthened our faith beyond measure.",
                    rating: 5,
                    category: "Miracle Healing",
                  },
                  {
                    name: "Maria Santos",
                    location: "São Paulo, Brazil",
                    story:
                      "Sai Baba's teachings helped me find peace during my divorce. The community support was incredible during my healing journey.",
                    rating: 5,
                    category: "Emotional Healing",
                  },
                ].map((testimonial, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-orange-50 to-amber-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                          <AvatarFallback className="bg-orange-200 text-orange-700 text-lg">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.location}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800 mb-4">{testimonial.category}</Badge>
                      <blockquote className="text-gray-700 italic leading-relaxed">"{testimonial.story}"</blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Share Your Story</CardTitle>
                  <CardDescription>Inspire others by sharing your experience with Sai Baba's grace</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your name" className="border-orange-200" />
                    <Input placeholder="Your location" className="border-orange-200" />
                  </div>
                  <Textarea placeholder="Share your testimonial..." rows={5} className="border-orange-200" />
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Heart className="h-4 w-4 mr-2" />
                    Submit Testimonial
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="volunteer" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Volunteer Opportunities</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Serve humanity and follow Sai Baba's teachings through various volunteer activities
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Community Kitchen",
                    description: "Help prepare and serve meals to devotees and the needy",
                    commitment: "4 hours/week",
                    volunteers: 45,
                    icon: HandHeart,
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    title: "Event Organization",
                    description: "Assist in organizing festivals and spiritual gatherings",
                    commitment: "Flexible",
                    volunteers: 32,
                    icon: Users,
                    color: "from-blue-500 to-indigo-500",
                  },
                  {
                    title: "Digital Outreach",
                    description: "Help manage social media and online community platforms",
                    commitment: "2 hours/week",
                    volunteers: 18,
                    icon: Globe,
                    color: "from-purple-500 to-violet-500",
                  },
                  {
                    title: "Translation Services",
                    description: "Translate spiritual content into different languages",
                    commitment: "Flexible",
                    volunteers: 25,
                    icon: MessageCircle,
                    color: "from-orange-500 to-amber-500",
                  },
                  {
                    title: "Elderly Care",
                    description: "Visit and provide companionship to elderly devotees",
                    commitment: "3 hours/week",
                    volunteers: 28,
                    icon: Heart,
                    color: "from-red-500 to-pink-500",
                  },
                  {
                    title: "Youth Programs",
                    description: "Mentor young devotees and organize youth activities",
                    commitment: "5 hours/week",
                    volunteers: 22,
                    icon: Sparkles,
                    color: "from-teal-500 to-cyan-500",
                  },
                ].map((opportunity, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
                    <CardHeader className="text-center bg-gradient-to-r from-orange-50 to-amber-50">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${opportunity.color} flex items-center justify-center shadow-lg`}
                      >
                        <opportunity.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-orange-800">{opportunity.title}</CardTitle>
                      <CardDescription className="leading-relaxed">{opportunity.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                      <div className="space-y-2 mb-4">
                        <div className="text-sm text-gray-600">
                          <strong>Commitment:</strong> {opportunity.commitment}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Current Volunteers:</strong> {opportunity.volunteers}
                        </div>
                      </div>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Join as Volunteer</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="groups" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Local Sai Groups</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Connect with devotees in your area and participate in local activities
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    city: "Mumbai",
                    country: "India",
                    members: 2500,
                    meetings: "Weekly",
                    contact: "mumbai@saicommunity.org",
                  },
                  {
                    city: "Delhi",
                    country: "India",
                    members: 1800,
                    meetings: "Bi-weekly",
                    contact: "delhi@saicommunity.org",
                  },
                  {
                    city: "New York",
                    country: "USA",
                    members: 450,
                    meetings: "Monthly",
                    contact: "newyork@saicommunity.org",
                  },
                  {
                    city: "London",
                    country: "UK",
                    members: 320,
                    meetings: "Monthly",
                    contact: "london@saicommunity.org",
                  },
                  {
                    city: "Toronto",
                    country: "Canada",
                    members: 280,
                    meetings: "Bi-weekly",
                    contact: "toronto@saicommunity.org",
                  },
                  {
                    city: "Sydney",
                    country: "Australia",
                    members: 190,
                    meetings: "Monthly",
                    contact: "sydney@saicommunity.org",
                  },
                ].map((group, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-800 flex items-center">
                        <Globe className="h-5 w-5 mr-2" />
                        {group.city}
                      </CardTitle>
                      <CardDescription>{group.country}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Members:</span>
                        <Badge variant="outline" className="border-orange-300 text-orange-600">
                          {group.members}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Meetings:</span>
                        <span className="text-gray-800">{group.meetings}</span>
                      </div>
                      <div className="pt-2">
                        <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                          Join Group
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="h-16 w-16 mx-auto mb-8 text-amber-200" />
          <h2 className="text-4xl font-bold mb-6">Join Our Global Family</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Become part of a loving community that supports each other through life's journey, guided by Sai Baba's
            eternal teachings of love and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 shadow-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Create Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Discussion
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

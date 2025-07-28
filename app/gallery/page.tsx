import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Heart, Download, Share2, Eye, Calendar } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
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
          <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-6">Sacred Gallery</Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-6">
            Divine Darshan Gallery
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            Immerse yourself in the sacred imagery of Shirdi Sai Baba, the holy temple, and devotional moments that
            capture the essence of divine love and spiritual devotion.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Camera className="h-4 w-4" />
              <span>500+ Sacred Images</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>HD Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Free Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="portraits" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12 bg-orange-50">
              <TabsTrigger
                value="portraits"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Sai Portraits
              </TabsTrigger>
              <TabsTrigger value="temple" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Temple Views
              </TabsTrigger>
              <TabsTrigger
                value="festivals"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Festivals
              </TabsTrigger>
              <TabsTrigger
                value="devotees"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Devotees
              </TabsTrigger>
              <TabsTrigger
                value="historical"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Historical
              </TabsTrigger>
            </TabsList>

            <TabsContent value="portraits" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Sacred Portraits of Sai Baba</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Divine images that capture the eternal compassion and wisdom of Shirdi Sai Baba
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Classic Darshan",
                    description: "Traditional portrait showing Sai Baba's serene expression",
                    downloads: "15.2K",
                    category: "Portrait",
                  },
                  {
                    title: "Blessing Pose",
                    description: "Sai Baba with raised hand in blessing gesture",
                    downloads: "12.8K",
                    category: "Blessing",
                  },
                  {
                    title: "Meditation Stance",
                    description: "Peaceful meditation pose radiating divine tranquility",
                    downloads: "18.5K",
                    category: "Meditation",
                  },
                  {
                    title: "Compassionate Gaze",
                    description: "Eyes filled with infinite love and understanding",
                    downloads: "22.1K",
                    category: "Expression",
                  },
                  {
                    title: "Divine Aura",
                    description: "Surrounded by golden divine light and energy",
                    downloads: "16.7K",
                    category: "Spiritual",
                  },
                  {
                    title: "Seated in Dwarkamai",
                    description: "Classic pose in the sacred mosque of Dwarkamai",
                    downloads: "19.3K",
                    category: "Historical",
                  },
                ].map((image, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=${encodeURIComponent(image.title)}`}
                        alt={image.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <Badge className="bg-white/90 text-gray-800">{image.category}</Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                              <Heart className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-800 mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{image.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{image.downloads} downloads</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-orange-300 text-orange-600 bg-transparent"
                        >
                          View Full Size
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="temple" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Sacred Temple Architecture</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Beautiful views of Shirdi temple complex and sacred spaces
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Samadhi Mandir",
                    description: "The sacred tomb where Sai Baba's mortal remains rest",
                    type: "Main Temple",
                    year: "1922",
                  },
                  {
                    title: "Dwarkamai Mosque",
                    description: "The holy mosque where Sai Baba lived and performed miracles",
                    type: "Sacred Mosque",
                    year: "Original",
                  },
                  {
                    title: "Chavadi",
                    description: "Where Sai Baba spent alternate nights in meditation",
                    type: "Meditation Hall",
                    year: "Historical",
                  },
                  {
                    title: "Temple Complex",
                    description: "Aerial view of the entire Shirdi temple complex",
                    type: "Overview",
                    year: "Modern",
                  },
                ].map((temple, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=250&width=500&text=${encodeURIComponent(temple.title)}`}
                        alt={temple.title}
                        width={500}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-orange-600 text-white">{temple.type}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-800">{temple.title}</h3>
                        <span className="text-sm text-gray-500">{temple.year}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{temple.description}</p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View Gallery
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-orange-300 text-orange-600 bg-transparent"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="festivals" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Festival Celebrations</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Vibrant moments from sacred festivals and celebrations at Shirdi
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    festival: "Ram Navami",
                    date: "April 2024",
                    images: 45,
                    highlight: "Grand procession and special aarti",
                  },
                  {
                    festival: "Guru Purnima",
                    date: "July 2024",
                    images: 62,
                    highlight: "Devotees from around the world gather",
                  },
                  {
                    festival: "Diwali",
                    date: "November 2024",
                    images: 38,
                    highlight: "Temple illuminated with thousands of lamps",
                  },
                  {
                    festival: "Makar Sankranti",
                    date: "January 2024",
                    images: 29,
                    highlight: "Kite flying and traditional celebrations",
                  },
                  {
                    festival: "Vijayadashami",
                    date: "October 2024",
                    images: 51,
                    highlight: "Commemorating Sai Baba's Mahasamadhi",
                  },
                  {
                    festival: "Holi",
                    date: "March 2024",
                    images: 33,
                    highlight: "Colors of joy and spiritual celebration",
                  },
                ].map((festival, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(festival.festival)}`}
                        alt={festival.festival}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-600 text-white">{festival.images} photos</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-gray-800 mb-1">{festival.festival}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{festival.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{festival.highlight}</p>
                      <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                        View Album
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="devotees" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Devotee Moments</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Heartwarming moments of faith, devotion, and spiritual connection
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  "Prayer Circle",
                  "Aarti Participation",
                  "Prasadam Distribution",
                  "Meditation Session",
                  "Children's Program",
                  "Elderly Devotees",
                  "International Visitors",
                  "Volunteer Service",
                ].map((moment, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=150&width=200&text=${encodeURIComponent(moment)}`}
                        alt={moment}
                        width={200}
                        height={150}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h4 className="font-medium text-gray-800 text-sm text-center">{moment}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="historical" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Historical Archives</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Rare historical photographs and documents from Sai Baba's time
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Original Dwarkamai",
                    period: "1900-1918",
                    description: "Rare photograph of the mosque during Sai Baba's lifetime",
                    rarity: "Extremely Rare",
                  },
                  {
                    title: "Early Devotees",
                    period: "1910-1915",
                    description: "Group photograph with some of the first devotees",
                    rarity: "Historical",
                  },
                  {
                    title: "Village of Shirdi",
                    period: "Early 1900s",
                    description: "How the village looked during Sai Baba's time",
                    rarity: "Rare",
                  },
                  {
                    title: "Mahasamadhi Day",
                    period: "October 15, 1918",
                    description: "Documentation of the sacred day",
                    rarity: "Priceless",
                  },
                ].map((historical, index) => (
                  <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=250&width=400&text=${encodeURIComponent(historical.title)}`}
                        alt={historical.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover sepia"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-amber-600 text-white">{historical.rarity}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-800">{historical.title}</h3>
                        <span className="text-sm text-amber-600 font-medium">{historical.period}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{historical.description}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-amber-300 text-amber-600 hover:bg-amber-50 bg-transparent"
                      >
                        View in Archive
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">Download Sacred Images</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            All images are available for free download for personal devotional use. Spread Sai Baba's divine presence in
            your home and heart.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Download className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">High Resolution</h3>
              <p className="text-sm text-gray-600">Perfect for printing and framing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Free for Devotion</h3>
              <p className="text-sm text-gray-600">No cost for personal spiritual use</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Share2 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Share the Blessings</h3>
              <p className="text-sm text-gray-600">Spread divine love with others</p>
            </div>
          </div>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8 py-3">
            <Download className="mr-2 h-5 w-5" />
            Download Complete Collection
          </Button>
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Heart, Download, Share2, Eye, Calendar } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  // Three images from public folder
  const recentPortraits = [
    {
      src: "/Shirdi_Sai_Baba.jpg",
      title: "Shirdi Sai Baba (Classic)",
      description: "Classic photograph of Shirdi Sai Baba, revered by millions.",
      downloads: "3.2K",
      category: "Portrait",
      width: 535,
      height: 768,
    },
    {
      src: "/Shirdi_sai2.jpg",
      title: "Sai Baba in Contemplation",
      description: "Historic image showing Sai Baba seated beside a wall in contemplation.",
      downloads: "2.7K",
      category: "Historical",
      width: 768,
      height: 1013,
    },
    {
      src: "/Sai_gold_full.jpg",
      title: "Sai Baba at Samadhi Mandir",
      description: "Sai Baba's golden statue adorned with flowers at the Samadhi Mandir.",
      downloads: "4.1K",
      category: "Mandir",
      width: 800,
      height: 768,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section remains unchanged */}

      {/* Gallery Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="portraits" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12 bg-orange-50">
              <TabsTrigger value="portraits" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Sai Portraits
              </TabsTrigger>
              {/* ... other TabsTriggers ... */}
            </TabsList>

            <TabsContent value="portraits" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">Recent Portraits of Sai Baba</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The latest sacred images of Sai Baba, capturing his divine essence and wisdom.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPortraits.map((image, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={image.src}
                        alt={image.title}
                        width={image.width}
                        height={image.height}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        priority={index === 0}
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
            {/* ... other TabsContent ... */}
          </Tabs>
        </div>
      </section>

      {/* Download Section remains unchanged */}
    </div>
  )
}

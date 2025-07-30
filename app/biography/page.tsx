"use client";
import { Badge } from "@/components/ui/badge"
import { BookOpen, Star, Heart, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollButton from "@/components/ui/ScrollButton"
import Image from "next/image"

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-orange-100 via-amber-50 to-green-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/spiral-pattern.svg')] bg-center bg-repeat" />
        <div className="relative max-w-5xl mx-auto text-center">
          <Badge className="inline-block bg-orange-200 text-orange-800 px-5 py-2 text-sm font-semibold mb-4">
            Sacred Biography
          </Badge>
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-4 leading-tight">
            Life of the Saint
          </h1>
          <p className="text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Discover the miraculous journey of Shirdi Sai Baba, the divine saint who transformed millions through love, compassion, and universal brotherhood.
          </p>
          <div className="flex justify-center gap-6">
            <ScrollButton
              targetId="full-bio"
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-lg"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read Full Biography
            </ScrollButton>
            <ScrollButton
              targetId="miracles"
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50"
            >
              <Star className="mr-2 h-5 w-5" />
              View Miracles
            </ScrollButton>
          </div>
        </div>
      </section>

      {/* Full Biography Section */}
      <section id="full-bio" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg prose-orange">
          <h2 className="text-center text-4xl font-semibold text-orange-800 mb-8">
            Shirdi Sai Baba: A Devotional Biography
          </h2>

          <p>
            <em className="text-xl">"Love All, Help Ever, Hurt Never."</em>
          </p>

          <p>
            Shirdi Sai Baba is revered by millions as a saint and spiritual guide embodying divine love and unity. His life transcended religious boundaries, touching hearts of Hindus, Muslims, and seekers of all faiths. Born in obscurity around 1838, Baba wandered as an ascetic clad in a simple robe, ultimately arriving in the humble village of Shirdi in 1858.
          </p>

          <hr className="my-8 border-amber-300" />

          <h3 className="text-2xl font-medium text-orange-700 mb-4">Early Years &amp; Arrival</h3>
          <p>
            Settling beneath a neem tree in the dilapidated Dwarkamai mosque, Sai Baba lit an ever-burning dhuni (sacred fire) and swept the courtyard daily, symbolizing both his humility and spiritual purity.
          </p>

          <h3 className="text-2xl font-medium text-orange-700 mb-4">Teachings of Unity &amp; Compassion</h3>
          <p>
            Central to his message were <strong>Shraddha</strong> (faith) and <strong>Saburi</strong> (patience). Baba urged devotees to face life's challenges with steadfast devotion.
          </p>

          <blockquote className="border-l-4 border-amber-400 pl-4 italic my-6">
            "Why fear when I am here? Cast all your burdens on me and be at peace."
          </blockquote>

          <h3 id="miracles" className="text-2xl font-medium text-orange-700 mb-4">Miracles and Grace</h3>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Healing Touch:</strong> Chronic ailments vanished through earnest prayers and the sacred <strong>Udi</strong>.</li>
            <li><strong>Inexhaustible Charity:</strong> Single baskets of food fed hundreds during famine.</li>
            <li><strong>Nature's Mastery:</strong> Storms calmed with a raised hand.</li>
            <li><strong>Miraculous Harvests:</strong> Blessed grains yielded abundant crops.</li>
          </ul>

          <hr className="my-8 border-amber-300" />

          <h3 className="text-2xl font-medium text-orange-700 mb-4">Daily Rituals &amp; Darshan</h3>
          <p>
            Each dawn, Baba swept the courtyard and lit the dhuni, teaching that cleanliness and inner purity go hand-in-hand.
          </p>

          <h3 className="text-2xl font-medium text-orange-700 mb-4">Final Years &amp; Mahasamadhi</h3>
          <p>
            On October 15, 1918, Sai Baba entered Mahasamadhi, and his tomb at Samadhi Mandir became a site of eternal blessings.
          </p>

          <h3 className="text-2xl font-medium text-orange-700 mb-4">Enduring Legacy</h3>
          <p>
            Globally, temples honor Sai Baba's message: <strong>"Love All, Help Ever, Hurt Never."</strong>
          </p>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-lg">
              <Heart className="mr-2 h-5 w-5" />
              Seek His Blessings
            </Button>
          </div>
        </div>
      </section>

      {/* Movie Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-orange-200">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-[2/3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Shirdi Ke Sai Baba (1977)</h3>
                  <p className="text-orange-200">Iconic Biographical Film</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Classic
              </div>
            </div>
            
            <div>
              <Badge className="bg-orange-200 text-orange-800 mb-4">Divine Cinema</Badge>
              <h2 className="text-3xl font-bold text-orange-800 mb-4">Experience Sai Baba's Life Through Film</h2>
              <p className="text-lg text-gray-700 mb-6">
                Watch the acclaimed 1977 biographical film "Shirdi Ke Sai Baba", directed by Ashok Bhushan. 
                This classic portrayal features Sudhir Dalvi as Sai Baba and beautifully captures his divine 
                miracles, teachings, and compassion.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Authentic Portrayal:</strong> Faithfully depicts Baba's life in Shirdi village</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Iconic Performance:</strong> Sudhir Dalvi's memorable embodiment of Sai Baba</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Spiritual Journey:</strong> Chronicles Baba's miracles and divine wisdom</span>
                </li>
              </ul>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-lg group"
                onClick={() => window.open("https://youtube.com/playlist?list=PLAD6AAF5DB6CE1876&si=zgRB6NRahyLyi7ab", "_blank")}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Full Movie
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Sacred Timeline</h2>
            <p className="text-lg text-gray-600">Key moments in Sai Baba's divine earthly journey</p>
          </div>
         {/* Timeline Section */}
<section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-orange-800 mb-4">Sacred Timeline</h2>
      <p className="text-lg text-gray-600">Key moments in Sai Baba's divine earthly journey</p>
    </div>

    {/* Timeline Container */}
    <div className="relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-400 to-amber-300 hidden md:block"></div>
      
      {/* Timeline Items */}
      <div className="space-y-12">
        {/* Item 1: Birth */}
        <div className="relative md:flex items-center justify-center gap-12">
          <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
              c. 1838
            </div>
            <h3 className="text-2xl font-bold text-orange-700 mb-2">Divine Arrival</h3>
            <p className="text-gray-700">
              Sai Baba was born in Pathri, Maharashtra. His birth name remains unknown, but devotees believe he was an incarnation of the divine sent to guide humanity.
            </p>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 border-4 border-white shadow-lg z-10 hidden md:block"></div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-5xl text-orange-300">👶</div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "The divine child arrived in humble circumstances, destined to transform millions of lives."
              </p>
            </div>
          </div>
        </div>

        {/* Item 2: Arrival in Shirdi */}
        <div className="relative md:flex flex-row-reverse items-center justify-center gap-12">
          <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
              1858
            </div>
            <h3 className="text-2xl font-bold text-orange-700 mb-2">Arrival in Shirdi</h3>
            <p className="text-gray-700">
              As a young ascetic, Sai Baba first appeared in Shirdi village at age 20. He was initially met with suspicion but gradually won hearts through his wisdom.
            </p>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 border-4 border-white shadow-lg z-10 hidden md:block"></div>
          
          <div className="md:w-1/2 md:pr-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-5xl text-orange-300">🚶‍♂️</div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "The saint chose Shirdi as his eternal home, beginning his mission to spread universal love."
              </p>
            </div>
          </div>
        </div>

        {/* Item 3: Settling in Dwarkamai */}
        <div className="relative md:flex items-center justify-center gap-12">
          <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
              Early 1860s
            </div>
            <h3 className="text-2xl font-bold text-orange-700 mb-2">Dwarkamai Mosque</h3>
            <p className="text-gray-700">
              Sai Baba settled in an abandoned mosque which he named Dwarkamai. Here he established his sacred Dhuni (eternal fire) that continues to burn today.
            </p>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 border-4 border-white shadow-lg z-10 hidden md:block"></div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-5xl text-orange-300">🕌</div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "In this humble abode, Baba welcomed all - rich and poor, Hindu and Muslim alike."
              </p>
            </div>
          </div>
        </div>

        {/* Item 4: First Miracles */}
        <div className="relative md:flex flex-row-reverse items-center justify-center gap-12">
          <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
              1870s
            </div>
            <h3 className="text-2xl font-bold text-orange-700 mb-2">Manifestation of Miracles</h3>
            <p className="text-gray-700">
              Baba began performing miracles - healing the sick, materializing objects, and reading devotees' thoughts. His fame spread throughout India.
            </p>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 border-4 border-white shadow-lg z-10 hidden md:block"></div>
          
          <div className="md:w-1/2 md:pr-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-5xl text-orange-300">✨</div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "Baba performed miracles not as displays of power, but to strengthen devotees' faith."
              </p>
            </div>
          </div>
        </div>

        {/* Item 5: Chavadi Ritual */}
        <div className="relative md:flex items-center justify-center gap-12">
          <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
              1909
            </div>
            <h3 className="text-2xl font-bold text-orange-700 mb-2">Chavadi Ritual</h3>
            <p className="text-gray-700">
              Baba began alternating nights between Dwarkamai and the Chavadi building. The nightly procession became a sacred ritual still reenacted today.
            </p>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 border-4 border-white shadow-lg z-10 hidden md:block"></div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-5xl text-orange-300">🕯️</div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "Devotees carried Baba in procession with singing and celebration, a tradition continuing for over a century."
              </p>
            </div>
          </div>
        </div>

        {/* Item 6: Lendi Garden */}
        <div className="relative md:flex flex-row-reverse items-center justify-center gap-12">
          <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
              c. 1910
            </div>
            <h3 className="text-2xl font-bold text-orange-700 mb-2">Lendi Garden</h3>
            <p className="text-gray-700">
              Baba created Lendi Garden, digging a well with his own hands and planting neem trees. He would spend hours here in meditation.
            </p>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 border-4 border-white shadow-lg z-10 hidden md:block"></div>
          
          <div className="md:w-1/2 md:pr-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-5xl text-orange-300">🌳</div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "In this sacred garden, Baba nurtured both plants and devotees' souls with equal care."
              </p>
            </div>
          </div>
        </div>

        {/* Item 7: Mahasamadhi */}
        <div className="relative md:flex items-center justify-center gap-12">
          <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
              October 15, 1918
            </div>
            <h3 className="text-2xl font-bold text-orange-700 mb-2">Mahasamadhi</h3>
            <p className="text-gray-700">
              At approximately 2:30 PM, Sai Baba left his physical body, uttering his final words: "Allah Malik" (God is Master). His Samadhi in Shirdi remains a place of pilgrimage.
            </p>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 border-4 border-white shadow-lg z-10 hidden md:block"></div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-5xl text-orange-300">🕊️</div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "Baba's physical departure marked the beginning of his eternal presence in devotees' hearts worldwide."
              </p>
            </div>
          </div>
        </div>

        {/* Final Timeline Dot */}
        <div className="relative flex justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 border-4 border-white shadow-lg"></div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
      </section>
    </div>
  )
}

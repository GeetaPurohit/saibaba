import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Star, Heart } from "lucide-react"

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
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-lg"
              onClick={() => document.getElementById('full-bio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read Full Biography
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50"
              onClick={() => document.getElementById('miracles')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Star className="mr-2 h-5 w-5" />
              View Miracles
            </Button>
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
            Central to his message were <strong>Shraddha</strong> (faith) and <strong>Saburi</strong> (patience). Baba urged devotees to face life’s challenges with steadfast devotion.
          </p>

          <blockquote className="border-l-4 border-amber-400 pl-4 italic my-6">
            "Why fear when I am here? Cast all your burdens on me and be at peace."
          </blockquote>

          <h3 id="miracles" className="text-2xl font-medium text-orange-700 mb-4">Miracles and Grace</h3>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Healing Touch:</strong> Chronic ailments vanished through earnest prayers and the sacred <strong>Udi</strong>.</li>
            <li><strong>Inexhaustible Charity:</strong> Single baskets of food fed hundreds during famine.</li>
            <li><strong>Nature’s Mastery:</strong> Storms calmed with a raised hand.</li>
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
            Globally, temples honor Sai Baba’s message: <strong>“Love All, Help Ever, Hurt Never.”</strong>
          </p>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-lg">
              <Heart className="mr-2 h-5 w-5" />
              Seek His Blessings
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Sacred Timeline</h2>
            <p className="text-lg text-gray-600">Key moments in Sai Baba’s divine earthly journey</p>
          </div>
          {/* TODO: Add Timeline items here */}
        </div>
      </section>
    </div>
  )
}


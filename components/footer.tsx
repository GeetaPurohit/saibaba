import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin, Globe, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-900 to-orange-950 text-white">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=56&width=56"
                  alt="Sai Baba"
                  width={56}
                  height={56}
                  className="rounded-full border-3 border-orange-300 shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-white" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent">
                  श्री साईं बाबा
                </div>
                <div className="text-sm text-orange-200 font-medium">Shirdi Sai Baba Foundation</div>
              </div>
            </div>
            <p className="text-orange-100 text-sm leading-relaxed">
              Dedicated to spreading the divine teachings and eternal message of love, compassion, and unity from the
              holy saint of Shirdi. Serving humanity with devotion since 1918.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="ghost"
                  className="text-orange-200 hover:text-white hover:bg-orange-800 rounded-full w-10 h-10 p-0 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-200">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/biography" className="block text-sm text-orange-100 hover:text-white transition-colors">
                Biography
              </Link>
              <Link href="/teachings" className="block text-sm text-orange-100 hover:text-white transition-colors">
                Teachings
              </Link>
              <Link href="/miracles" className="block text-sm text-orange-100 hover:text-white transition-colors">
                Miracles
              </Link>
              <Link href="/gallery" className="block text-sm text-orange-100 hover:text-white transition-colors">
                Photo Gallery
              </Link>
              <Link href="/events" className="block text-sm text-orange-100 hover:text-white transition-colors">
                Events Calendar
              </Link>
            </nav>
          </div>

          {/* Devotional */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-200">Devotional</h3>
            <nav className="space-y-2">
              <Link href="/aarti" className="block text-sm text-orange-100 hover:text-white transition-colors">
                Daily Aarti
              </Link>
              <Link href="/bhajans" className="block text-sm text-orange-100 hover:text-white transition-colors">
                Bhajans
              </Link>
              <Link href="/mantras" className="block text-sm text-orange-100 hover:text-white transition-colors">
                Sacred Mantras
              </Link>
              <Link href="/live" className="block text-sm text-orange-100 hover:text-white transition-colors">
                Live Streaming
              </Link>
              <Link href="/prayers" className="block text-sm text-orange-100 hover:text-white transition-colors">
                Prayer Requests
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-200">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-orange-100">
                <MapPin className="h-4 w-4 text-orange-300" />
                <span>Shirdi, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-orange-100">
                <Phone className="h-4 w-4 text-orange-300" />
                <span>+91 2423 258500</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-orange-100">
                <Mail className="h-4 w-4 text-orange-300" />
                <span>info@shirdisaibaba.org</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-orange-200">Subscribe to daily blessings</p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-orange-800 border-orange-700 text-white placeholder:text-orange-300"
                />
                <Button size="sm" className="bg-orange-600 hover:bg-orange-500">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-orange-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-orange-200">© 2024 Shirdi Sai Baba Foundation. All rights reserved.</p>
            <div className="flex space-x-4 text-xs">
              <Link href="/privacy" className="text-orange-200 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-orange-200 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-orange-200 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-orange-200">
              <Globe className="h-4 w-4" />
              <span>Available in:</span>
              <span className="text-orange-100">English | हिंदी | मराठी</span>
            </div>
          </div>
        </div>

        {/* Blessing Quote */}
        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-orange-800/50 to-amber-800/50 rounded-xl border border-orange-700 backdrop-blur-sm">
            <div className="mb-4">
              <Star className="h-8 w-8 mx-auto text-amber-300" />
            </div>
            <p className="text-orange-100 italic text-lg mb-2">
              "सबका मालिक एक है" - "There is only one Master, and that is God"
            </p>
            <p className="text-orange-200 text-sm">- Shirdi Sai Baba</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

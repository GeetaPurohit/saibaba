"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, Search, User, Globe, BookOpen, Music, Calendar, Users, Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      title: "About",
      href: "/about",
      icon: BookOpen,
      children: [
        { title: "Biography", href: "/biography" },
        { title: "Teachings", href: "/teachings" },
        { title: "Miracles", href: "/miracles" },
        { title: "Gallery", href: "/gallery" },
      ],
    },
    {
      title: "Devotionals",
      href: "/devotionals",
      icon: Music,
      children: [
        { title: "Daily Aarti", href: "/aarti" },
        { title: "Bhajans", href: "/bhajans" },
        { title: "Mantras", href: "/mantras" },
        { title: "Live Stream", href: "/live" },
      ],
    },
    {
      title: "Events",
      href: "/events",
      icon: Calendar,
      children: [
        { title: "Upcoming Events", href: "/events" },
        { title: "Festival Calendar", href: "/festivals" },
        { title: "Satsang", href: "/satsang" },
      ],
    },
    {
      title: "Community",
      href: "/community",
      icon: Users,
      children: [
        { title: "Discussion Forum", href: "/forum" },
        { title: "Volunteer", href: "/volunteer" },
        { title: "Testimonials", href: "/testimonials" },
      ],
    },
    {
      title: "Contact",
      href: "/contact",
      icon: Phone,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Sai Baba"
              width={48}
              height={48}
              className="rounded-full border-3 border-orange-300 shadow-lg group-hover:shadow-xl transition-all duration-300"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent">
              श्री साईं
            </span>
            <span className="text-xs text-orange-600 font-medium">Shirdi Sai Baba</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative group">
              <Link
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-orange-50 group"
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.title}</span>
                {item.children && (
                  <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </Link>

              {item.children && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="hidden sm:flex items-center space-x-1">
            <Globe className="h-4 w-4 text-gray-500" />
            <select className="text-sm border-none bg-transparent text-gray-700 focus:outline-none">
              <option value="en">EN</option>
              <option value="hi">हिं</option>
              <option value="mr">मर</option>
            </select>
          </div>

          {/* Search */}
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>

          {/* User Account */}
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Sai Baba"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-orange-300"
                  />
                  <div>
                    <div className="font-semibold text-orange-800">श्री साईं बाबा</div>
                    <div className="text-sm text-gray-600">Shirdi Sai Baba</div>
                  </div>
                </div>

                {navigationItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-700 hover:text-orange-600 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                    {item.children && (
                      <div className="ml-8 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block text-sm text-gray-600 hover:text-orange-600 py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t space-y-3">
                  <div className="flex items-center justify-center space-x-4">
                    <Badge variant="outline" className="border-orange-300 text-orange-600">
                      English
                    </Badge>
                    <Badge variant="outline" className="border-orange-300 text-orange-600">
                      हिंदी
                    </Badge>
                    <Badge variant="outline" className="border-orange-300 text-orange-600">
                      मराठी
                    </Badge>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

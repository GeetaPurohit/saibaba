"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, Users, Clock, Heart } from "lucide-react"

export default function LivePage() {
  useEffect(() => {
    // Redirect to YouTube live stream
    window.location.href = "https://www.youtube.com/live/HDR3I-OWrgI?si=XzTcu4WDn1J_IK85"
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <Card className="border-orange-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex items-center justify-center mb-4">
              <Badge className="bg-red-500 text-white animate-pulse px-4 py-2">🔴 LIVE DARSHAN</Badge>
            </div>
            <CardTitle className="text-3xl text-orange-800 mb-4">Redirecting to Live Stream</CardTitle>
            <p className="text-gray-600 leading-relaxed">
              You are being redirected to the live darshan stream. If the redirect doesn't work automatically, please
              click the button below.
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Live Viewers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Stream</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Divine Blessings</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg"
                onClick={() => window.open("https://www.youtube.com/live/sg4oj3Thtw0?si=awcdGIdBAsefFliv", "_blank")}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Live Darshan on YouTube
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-sm text-gray-500">
                Experience the divine presence of Shirdi Sai Baba through our continuous live stream
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

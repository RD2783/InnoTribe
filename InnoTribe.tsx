'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Megaphone, Users, Briefcase } from 'lucide-react'

export default function LandingPage() {
  const [selectedEvent, setSelectedEvent] = useState('')
  const [isInstituteModalOpen, setIsInstituteModalOpen] = useState(false)
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
  const [selectedInstitute, setSelectedInstitute] = useState('')

  const openInstituteModal = () => setIsInstituteModalOpen(true)
  const closeInstituteModal = () => setIsInstituteModalOpen(false)
  const openJoinModal = () => setIsJoinModalOpen(true)
  const closeJoinModal = () => setIsJoinModalOpen(false)

  const handleInstituteSelect = (institute: string) => {
    setSelectedInstitute(institute)
    closeInstituteModal()
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-100 to-orange-200">
      <header className="sticky top-0 z-50 w-full border-b border-orange-300 bg-orange-100/95 backdrop-blur supports-[backdrop-filter]:bg-orange-100/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2024-10-29_113953131-removebg-preview-g3EHMpo8ZepptQW47hCBTZLSBOe3YE.png" alt="InnoTribe Logo" width={40} height={40} />
              <span className="hidden font-bold sm:inline-block">InnoTribe</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#events" className="text-orange-800 hover:text-orange-600 transition-colors">Events</Link>
              <Link href="#results" className="text-orange-800 hover:text-orange-600 transition-colors">Results</Link>
              <Link href="#internship" className="text-orange-800 hover:text-orange-600 transition-colors">Internship</Link>
              <Link href="#about" className="text-orange-800 hover:text-orange-600 transition-colors">About Us</Link>
            </nav>
          </div>
          <Button className="ml-auto bg-orange-500 hover:bg-orange-600 text-white">Sign Up</Button>
        </div>
      </header>

      <main className="flex-grow">
        <section id="home" className="py-20 md:py-40 bg-gradient-to-r from-orange-200 to-orange-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-6">INnoTRibe</h1>
                <p className="text-xl text-orange-700 mb-8">"Experience Over Vision: Sharing our journey to inspire your own."</p>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2024-10-29_113953131-removebg-preview-g3EHMpo8ZepptQW47hCBTZLSBOe3YE.png"
                  alt="InnoTribe Logo"
                  width={400}
                  height={400}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="py-20 bg-orange-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-800">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-orange-500 mb-4" />
                  <CardTitle className="text-center text-orange-800">Tech Fest 2024</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-orange-600 mb-4">Join us for the biggest tech event of the year!</p>
                  <Button onClick={openInstituteModal} className="bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-orange-500 mb-4" />
                  <CardTitle className="text-center text-orange-800">AI Summit</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-orange-600 mb-4">Explore the future of Artificial Intelligence</p>
                  <Button onClick={openInstituteModal} className="bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-orange-500 mb-4" />
                  <CardTitle className="text-center text-orange-800">Hackathon 2024</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-orange-600 mb-4">48 hours of coding, innovation, and fun!</p>
                  <Button onClick={openInstituteModal} className="bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="results" className="py-20 bg-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Results</h2>
            <div className="flex justify-center">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl w-full">
                <CardHeader>
                  <Megaphone className="w-12 h-12 text-green-500 mb-4 mx-auto" />
                  <CardTitle className="text-center text-green-800">Latest Announcements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center text-green-700">
                      <span className="mr-2">•</span>
                      Tech Fest 2023 Winners Announced
                    </li>
                    <li className="flex items-center text-green-700">
                      <span className="mr-2">•</span>
                      AI Summit Presentation Schedules Released
                    </li>
                    <li className="flex items-center text-green-700">
                      <span className="mr-2">•</span>
                      Hackathon 2023 Project Showcase Now Live
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="internship" className="py-20 bg-purple-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Join Our Internship Program</h2>
            <div className="flex flex-col items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-29%20at%2011.55.45_4166d12e-owFqQqD0X5pXRTKyQ0VtDC7Wi82KJy.jpg"
                alt="Internship Opportunities"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl mb-8"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Illustrator</Button>
                <Button className="bg-red-500 hover:bg-red-600 text-white">Engineer</Button>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Developer</Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white">UI Designer</Button>
              </div>
              <Button onClick={openJoinModal} size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">Apply Now</Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About InnoTribe</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2024-10-29_113953131-removebg-preview-g3EHMpo8ZepptQW47hCBTZLSBOe3YE.png"
                  alt="InnoTribe Logo"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-xl text-gray-700">
                  InnoTribe is a cutting-edge platform that connects students to futuristic tech fests across NITs and IITs. 
                  We provide real-time notifications about upcoming events, seamless registration processes, and 
                  exclusive internship opportunities for innovators and winners.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-orange-200 text-orange-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">InnoTribe</h3>
              <p>"Connecting innovators to the future"</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li><Link href="#events" className="hover:text-orange-600 transition-colors">Events</Link></li>
                <li><Link href="#results" className="hover:text-orange-600 transition-colors">Results</Link></li>
                <li><Link href="#internship" className="hover:text-orange-600 transition-colors">Internship</Link></li>
                <li><Link href="#about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>Email: info@innotribe.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-orange-300 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} InnoTribe. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {isInstituteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-orange-800">Select an Institute</h3>
            <select
              value={selectedInstitute}
              onChange={(e) => setSelectedInstitute(e.target.value)}
              className="w-full p-2 mb-4 border border-orange-300 rounded"
            >
              <option value="">Select an institute</option>
              <option value="IIT Delhi">IIT Delhi</option>
              <option value="IIT Bombay">IIT Bombay</option>
              <option value="NIT Trichy">NIT Trichy</option>
              <option value="NIT Warangal">NIT Warangal</option>
            </select>
            {selectedInstitute && (
              <div className="mb-4">
                <h4 className="font-bold mb-2 text-orange-700">Event Details for {selectedInstitute}</h4>
                <p className="mb-2  text-orange-600">Date: October 15-17, 2024</p>
                <p className="mb-2 text-orange-600">Theme: "Innovation for Sustainable Future"</p>
                <p className="mb-4 text-orange-600">Prizes worth: ₹10,00,000</p>
                <Button onClick={closeInstituteModal} className="bg-orange-500 hover:bg-orange-600 text-white">
                  Register Now
                </Button>
              </div>
            )}
            <Button
              onClick={closeInstituteModal}
              variant="outline"
              className="mt-4 w-full border-orange-500 text-orange-500 hover:bg-orange-50"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {isJoinModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-purple-800">Join Our Internship Program</h3>
            <p className="text-purple-600 mb-4">Enter your details to apply for our cutting-edge internship opportunities.</p>
            <Input className="mb-4" type="text" placeholder="Your Name" />
            <Input className="mb-4" type="email" placeholder="Your Email" />
            <select className="w-full p-2 mb-4 border border-purple-300 rounded">
              <option value="">Select a position</option>
              <option value="Illustrator">Illustrator</option>
              <option value="Engineer">Engineer</option>
              <option value="Developer">Developer</option>
              <option value="UI Designer">UI Designer</option>
            </select>
            <Button onClick={closeJoinModal} className="w-full bg-purple-500 hover:bg-purple-600 text-white mb-4">
              Submit Application
            </Button>
            <Button
              onClick={closeJoinModal}
              variant="outline"
              className="w-full border-purple-500 text-purple-500 hover:bg-purple-50"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
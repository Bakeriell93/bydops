"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar as CalendarIcon, 
  Clock,
  Users,
  MapPin,
  Plus,
  Filter,
  ChevronLeft,
  ChevronRight,
  Video,
  Phone
} from "lucide-react"

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<"week" | "month">("week")

  const events = [
    {
      id: 1,
      title: "Q4 Planning Meeting",
      start: "2024-01-15T14:00:00",
      end: "2024-01-15T15:30:00",
      type: "meeting",
      attendees: ["Sarah Chen", "Mike Johnson", "Lisa Wang"],
      location: "Conference Room A",
      description: "Quarterly planning session for Q4 marketing initiatives"
    },
    {
      id: 2,
      title: "Creative Review Session",
      start: "2024-01-16T10:00:00",
      end: "2024-01-16T11:00:00",
      type: "review",
      attendees: ["David Kim", "Emma Wilson"],
      location: "Design Studio",
      description: "Review of new creative assets for European campaign"
    },
    {
      id: 3,
      title: "Performance Analysis",
      start: "2024-01-17T15:00:00",
      end: "2024-01-17T16:00:00",
      type: "analysis",
      attendees: ["Tom Brown", "Sarah Chen", "Mike Johnson"],
      location: "Virtual",
      description: "Monthly performance review and KPI analysis"
    },
    {
      id: 4,
      title: "Budget Approval Meeting",
      start: "2024-01-18T09:00:00",
      end: "2024-01-18T10:00:00",
      type: "meeting",
      attendees: ["Lisa Wang", "David Kim", "Emma Wilson"],
      location: "Board Room",
      description: "Review and approve Q1 budget allocations"
    },
    {
      id: 5,
      title: "Product Launch Planning",
      start: "2024-01-19T13:00:00",
      end: "2024-01-19T14:30:00",
      type: "planning",
      attendees: ["Tom Brown", "Sarah Chen", "Mike Johnson", "Lisa Wang"],
      location: "Conference Room B",
      description: "Strategic planning for new product launch campaign"
    }
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "meeting": return "bg-blue-100 text-blue-800 border-blue-200"
      case "review": return "bg-green-100 text-green-800 border-green-200"
      case "analysis": return "bg-purple-100 text-purple-800 border-purple-200"
      case "planning": return "bg-orange-100 text-orange-800 border-orange-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "meeting": return <Users className="h-4 w-4" />
      case "review": return <CalendarIcon className="h-4 w-4" />
      case "analysis": return <Clock className="h-4 w-4" />
      case "planning": return <CalendarIcon className="h-4 w-4" />
      default: return <CalendarIcon className="h-4 w-4" />
    }
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString([], {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getUpcomingEvents = () => {
    const now = new Date()
    return events
      .filter(event => new Date(event.start) >= now)
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .slice(0, 5)
  }

  const getTodayEvents = () => {
    const today = new Date()
    return events.filter(event => {
      const eventDate = new Date(event.start)
      return eventDate.toDateString() === today.toDateString()
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Calendar & Events</h1>
              <p className="text-gray-600 mt-2">
                Manage your schedule and upcoming meetings
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Button
                  variant={view === "week" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setView("week")}
                >
                  Week
                </Button>
                <Button
                  variant={view === "month" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setView("month")}
                >
                  Month
                </Button>
              </div>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add Event</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Calendar View */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Calendar</CardTitle>
                    <CardDescription>
                      {view === "week" ? "This week's schedule" : "This month's schedule"}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium">
                      {currentDate.toLocaleDateString([], { month: 'long', year: 'numeric' })}
                    </span>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {view === "week" ? (
                  <div className="space-y-4">
                    {getTodayEvents().length > 0 ? (
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Today's Events</h3>
                        <div className="space-y-3">
                          {getTodayEvents().map((event) => (
                            <div key={event.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Badge className={getEventTypeColor(event.type)}>
                                      {getEventTypeIcon(event.type)}
                                      <span className="ml-1 capitalize">{event.type}</span>
                                    </Badge>
                                    <span className="text-sm text-gray-500">
                                      {formatTime(event.start)} - {formatTime(event.end)}
                                    </span>
                                  </div>
                                  <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                                  <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                                    <div className="flex items-center space-x-1">
                                      <MapPin className="h-3 w-3" />
                                      <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Users className="h-3 w-3" />
                                      <span>{event.attendees.length} attendees</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  {event.location === "Virtual" ? (
                                    <Button variant="outline" size="sm">
                                      <Video className="h-3 w-3 mr-1" />
                                      Join
                                    </Button>
                                  ) : (
                                    <Button variant="outline" size="sm">
                                      <MapPin className="h-3 w-3 mr-1" />
                                      Directions
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No events today</h3>
                        <p className="text-gray-500">You have a free day! Enjoy your time.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Month View</h3>
                    <p className="text-gray-500">Month view calendar will be implemented here.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Upcoming Events</span>
                </CardTitle>
                <CardDescription>
                  Your next 5 scheduled events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getUpcomingEvents().map((event) => (
                    <div key={event.id} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className={`p-2 rounded-lg ${getEventTypeColor(event.type)}`}>
                            {getEventTypeIcon(event.type)}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {event.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {formatDate(event.start)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatTime(event.start)} - {formatTime(event.end)}
                          </p>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-500 truncate">
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>This Week</CardTitle>
                <CardDescription>
                  Your weekly schedule overview
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Events</span>
                    <span className="font-semibold">{events.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Meetings</span>
                    <span className="font-semibold">
                      {events.filter(e => e.type === "meeting").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Reviews</span>
                    <span className="font-semibold">
                      {events.filter(e => e.type === "review").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Planning</span>
                    <span className="font-semibold">
                      {events.filter(e => e.type === "planning").length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calendar Integration */}
            <Card>
              <CardHeader>
                <CardTitle>Calendar Integration</CardTitle>
                <CardDescription>
                  Connect your external calendars
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Connect Google Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Connect Outlook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  TrendingUp, 
  CheckCircle, 
  Calendar, 
  Upload,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Plus
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const [dashboardData] = useState({
    stats: {
      activeSOPs: 24,
      pendingApprovals: 8,
      monthlyKPIs: 156,
      teamMembers: 12
    },
    performance: {
      revenue: 2400000,
      leads: 1247,
      cpl: 1925
    }
  })

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to BYD Ops Brain</h1>
            <p className="text-gray-600 mb-6">Your internal operations management platform</p>
            <Link href="/auth/signin">
              <Button className="w-full">Sign In to Continue</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const stats = [
    {
      title: "Active SOPs",
      value: dashboardData.stats.activeSOPs.toString(),
      change: "+12%",
      changeType: "positive",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Pending Approvals",
      value: dashboardData.stats.pendingApprovals.toString(),
      change: "-3",
      changeType: "positive",
      icon: CheckCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Monthly KPIs",
      value: dashboardData.stats.monthlyKPIs.toString(),
      change: "+8%",
      changeType: "positive",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Team Members",
      value: dashboardData.stats.teamMembers.toString(),
      change: "+2",
      changeType: "positive",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ]

  const quickActions = [
    {
      title: "Create New SOP",
      description: "Document new standard operating procedures",
      icon: FileText,
      href: "/sops/new",
      color: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      action: () => window.location.href = "/sops/new"
    },
    {
      title: "Upload Assets",
      description: "Add new marketing materials and documents",
      icon: Upload,
      href: "/assets",
      color: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      action: () => window.location.href = "/assets"
    },
    {
      title: "Review Approvals",
      description: "Check pending approval requests",
      icon: CheckCircle,
      href: "/approvals",
      color: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
      action: () => window.location.href = "/approvals"
    },
    {
      title: "View Calendar",
      description: "Check upcoming meetings and events",
      icon: Calendar,
      href: "/calendar",
      color: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      action: () => window.location.href = "/calendar"
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: "SOP",
      title: "Q4 Marketing Campaign Guidelines",
      user: "Sarah Chen",
      time: "2 hours ago",
      status: "updated",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      type: "Approval",
      title: "New Creative Assets for Europe",
      user: "Mike Johnson",
      time: "4 hours ago",
      status: "pending",
      statusColor: "bg-orange-100 text-orange-800"
    },
    {
      id: 3,
      type: "KPI",
      title: "November Performance Report",
      user: "Lisa Wang",
      time: "6 hours ago",
      status: "completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: 4,
      type: "Asset",
      title: "BYD Seal Product Images",
      user: "David Kim",
      time: "1 day ago",
      status: "uploaded",
      statusColor: "bg-purple-100 text-purple-800"
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Q4 Planning Meeting",
      time: "Today, 2:00 PM",
      type: "meeting",
      attendees: 8
    },
    {
      id: 2,
      title: "Creative Review Session",
      time: "Tomorrow, 10:00 AM",
      type: "review",
      attendees: 5
    },
    {
      id: 3,
      title: "Performance Analysis",
      time: "Friday, 3:00 PM",
      type: "analysis",
      attendees: 6
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Welcome back, {session.user?.name || session.user?.email}!
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Here&apos;s what&apos;s happening with your operations today.
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>View Reports</span>
              </Button>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Quick Add</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="flex items-center space-x-1">
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-600" />
                  )}
                  <p className={`text-sm font-medium ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change}
                  </p>
                  <span className="text-xs text-gray-500">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and shortcuts for your daily workflow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <div 
                      key={index} 
                      onClick={action.action}
                      className={`p-6 rounded-xl text-white cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg ${action.color}`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                          <action.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{action.title}</h3>
                          <p className="text-sm opacity-90">{action.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Events</span>
                </CardTitle>
                <CardDescription>
                  Your schedule for the next few days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {event.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {event.time} • {event.attendees} attendees
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Full Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="mt-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-xl">
                <Activity className="h-6 w-6" />
                <span>Performance Overview</span>
              </CardTitle>
              <CardDescription>
                Key metrics and trends for this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">€2.4M</div>
                  <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
                  <div className="flex items-center justify-center space-x-1">
                    <ArrowUpRight className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">+15%</span>
                    <span className="text-xs text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1,247</div>
                  <div className="text-sm text-gray-600 mb-1">Leads Generated</div>
                  <div className="flex items-center justify-center space-x-1">
                    <ArrowUpRight className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">+8%</span>
                    <span className="text-xs text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">€1,925</div>
                  <div className="text-sm text-gray-600 mb-1">Cost Per Lead</div>
                  <div className="flex items-center justify-center space-x-1">
                    <ArrowDownRight className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-red-600">-3%</span>
                    <span className="text-xs text-gray-500">vs last month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl">Recent Activity</CardTitle>
              <CardDescription>
                Latest updates across your operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                    <Badge className={activity.statusColor}>
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
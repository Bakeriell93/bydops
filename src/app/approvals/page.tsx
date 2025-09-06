"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Eye,
  MessageSquare,
  Calendar,
  User,
  Filter,
  Plus
} from "lucide-react"

export default function ApprovalsPage() {
  const [selectedStatus, setSelectedStatus] = useState("all")

  const approvals = [
    {
      id: 1,
      title: "Q4 Campaign Creative Assets",
      type: "CREATIVE",
      market: "Europe",
      status: "SUBMITTED",
      owner: "Sarah Chen",
      submittedAt: "2024-01-15",
      dueDate: "2024-01-20",
      priority: "high",
      description: "New creative assets for Q4 marketing campaign including banners, social media posts, and email templates."
    },
    {
      id: 2,
      title: "Budget Request - North America",
      type: "BUDGET",
      market: "North America",
      status: "LEGAL",
      owner: "Mike Johnson",
      submittedAt: "2024-01-14",
      dueDate: "2024-01-18",
      priority: "medium",
      description: "Additional budget request for Q1 marketing initiatives in North American markets."
    },
    {
      id: 3,
      title: "New Product Launch Campaign",
      type: "CAMPAIGN",
      market: "Global",
      status: "BRAND",
      owner: "Lisa Wang",
      submittedAt: "2024-01-13",
      dueDate: "2024-01-25",
      priority: "high",
      description: "Comprehensive campaign for the launch of our new electric vehicle model."
    },
    {
      id: 4,
      title: "Social Media Content Package",
      type: "CREATIVE",
      market: "Asia",
      status: "LOCALMARKET",
      owner: "David Kim",
      submittedAt: "2024-01-12",
      dueDate: "2024-01-22",
      priority: "low",
      description: "Localized social media content for Asian markets including WeChat and local platforms."
    },
    {
      id: 5,
      title: "Partnership Agreement Review",
      type: "CAMPAIGN",
      market: "Europe",
      status: "APPROVED",
      owner: "Emma Wilson",
      submittedAt: "2024-01-10",
      dueDate: "2024-01-15",
      priority: "medium",
      description: "Strategic partnership campaign with major European automotive retailer."
    },
    {
      id: 6,
      title: "Website Redesign Assets",
      type: "CREATIVE",
      market: "Global",
      status: "REJECTED",
      owner: "Tom Brown",
      submittedAt: "2024-01-08",
      dueDate: "2024-01-12",
      priority: "medium",
      description: "New website design assets and user interface elements for the main BYD website."
    }
  ]

  const statuses = [
    { value: "all", label: "All Statuses", color: "bg-gray-100 text-gray-800" },
    { value: "SUBMITTED", label: "Submitted", color: "bg-blue-100 text-blue-800" },
    { value: "LEGAL", label: "Legal Review", color: "bg-yellow-100 text-yellow-800" },
    { value: "BRAND", label: "Brand Review", color: "bg-purple-100 text-purple-800" },
    { value: "LOCALMARKET", label: "Local Market", color: "bg-orange-100 text-orange-800" },
    { value: "APPROVED", label: "Approved", color: "bg-green-100 text-green-800" },
    { value: "REJECTED", label: "Rejected", color: "bg-red-100 text-red-800" }
  ]

  const getStatusColor = (status: string) => {
    const statusConfig = statuses.find(s => s.value === status)
    return statusConfig?.color || "bg-gray-100 text-gray-800"
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800"
      case "medium": return "bg-yellow-100 text-yellow-800"
      case "low": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "CAMPAIGN": return "🎯"
      case "CREATIVE": return "🎨"
      case "BUDGET": return "💰"
      default: return "📄"
    }
  }

  const filteredApprovals = selectedStatus === "all" 
    ? approvals 
    : approvals.filter(approval => approval.status === selectedStatus)

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Approvals Tracker</h1>
              <p className="text-gray-600 mt-2">
                Manage and track approval workflows across your organization
              </p>
            </div>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Submit for Approval</span>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-sm text-gray-600">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-sm text-gray-600">Approved</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="text-sm text-gray-600">Overdue</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                  <p className="text-sm text-gray-600">Due Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <button
                      key={status.value}
                      onClick={() => setSelectedStatus(status.value)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedStatus === status.value
                          ? status.color
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {status.label}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Approvals List */}
        <div className="space-y-4">
          {filteredApprovals.map((approval) => {
            const daysUntilDue = getDaysUntilDue(approval.dueDate)
            const isOverdue = daysUntilDue < 0
            const isDueSoon = daysUntilDue <= 2 && daysUntilDue >= 0

            return (
              <Card key={approval.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{getTypeIcon(approval.type)}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {approval.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{approval.type}</span>
                            <span>•</span>
                            <span>{approval.market}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{approval.owner}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{approval.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>Submitted: {new Date(approval.submittedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span className={isOverdue ? "text-red-600 font-medium" : isDueSoon ? "text-orange-600 font-medium" : ""}>
                            Due: {new Date(approval.dueDate).toLocaleDateString()}
                            {isOverdue && " (Overdue)"}
                            {isDueSoon && " (Due Soon)"}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(approval.status)}>
                          {approval.status}
                        </Badge>
                        <Badge className={getPriorityColor(approval.priority)}>
                          {approval.priority}
                        </Badge>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Comment
                        </Button>
                        {approval.status === "SUBMITTED" && (
                          <Button size="sm">
                            Review
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredApprovals.length === 0 && (
          <div className="text-center py-12">
            <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No approvals found</h3>
            <p className="text-gray-500 mb-4">
              {selectedStatus === "all" 
                ? "No approval items have been submitted yet"
                : `No items with status "${selectedStatus}" found`
              }
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Submit for Approval
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

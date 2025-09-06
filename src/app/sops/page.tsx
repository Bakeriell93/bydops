"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Search, 
  Plus, 
  Filter,
  Calendar,
  User,
  Tag,
  Eye,
  Edit,
  Trash2
} from "lucide-react"
import Link from "next/link"

export default function SOPsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMarket, setSelectedMarket] = useState("all")

  const sops = [
    {
      id: 1,
      title: "Q4 Marketing Campaign Guidelines",
      slug: "q4-marketing-campaign-guidelines",
      market: "Global",
      function: "Marketing",
      tags: ["campaign", "guidelines", "q4"],
      updatedBy: "Sarah Chen",
      updatedAt: "2024-01-15",
      status: "active"
    },
    {
      id: 2,
      title: "Customer Support Process",
      slug: "customer-support-process",
      market: "Europe",
      function: "Support",
      tags: ["support", "process", "customer"],
      updatedBy: "Jane Smith",
      updatedAt: "2024-01-14",
      status: "active"
    },
    {
      id: 3,
      title: "Sales Qualification Framework",
      slug: "sales-qualification-framework",
      market: "North America",
      function: "Sales",
      tags: ["sales", "qualification", "framework"],
      updatedBy: "Mike Johnson",
      updatedAt: "2024-01-13",
      status: "draft"
    },
    {
      id: 4,
      title: "Product Launch Checklist",
      slug: "product-launch-checklist",
      market: "Asia",
      function: "Product",
      tags: ["product", "launch", "checklist"],
      updatedBy: "Lisa Wang",
      updatedAt: "2024-01-12",
      status: "active"
    },
    {
      id: 5,
      title: "Budget Approval Workflow",
      slug: "budget-approval-workflow",
      market: "Global",
      function: "Finance",
      tags: ["budget", "approval", "workflow"],
      updatedBy: "David Kim",
      updatedAt: "2024-01-11",
      status: "active"
    }
  ]

  const markets = ["all", "Global", "Europe", "North America", "Asia"]

  const filteredSOPs = sops.filter(sop => {
    const matchesSearch = sop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sop.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesMarket = selectedMarket === "all" || sop.market === selectedMarket
    return matchesSearch && matchesMarket
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Standard Operating Procedures</h1>
              <p className="text-gray-600 mt-2">
                Manage and organize your company's standard operating procedures
              </p>
            </div>
            <Link href="/sops/new">
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Create New SOP</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search SOPs by title or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  <select
                    value={selectedMarket}
                    onChange={(e) => setSelectedMarket(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {markets.map(market => (
                      <option key={market} value={market}>
                        {market === "all" ? "All Markets" : market}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SOPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSOPs.map((sop) => (
            <Card key={sop.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{sop.title}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Tag className="h-3 w-3" />
                      <span>{sop.function}</span>
                      <span>•</span>
                      <span>{sop.market}</span>
                    </div>
                  </div>
                  <Badge variant={sop.status === "active" ? "default" : "secondary"}>
                    {sop.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {sop.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {sop.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{sop.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{sop.updatedBy}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(sop.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link href={`/sops/${sop.slug}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSOPs.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No SOPs found</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm || selectedMarket !== "all" 
                ? "Try adjusting your search or filter criteria"
                : "Get started by creating your first SOP"
              }
            </p>
            <Link href="/sops/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create New SOP
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Upload, 
  Search, 
  Filter,
  Download,
  Eye,
  Trash2,
  Image,
  FileText,
  Video,
  Music,
  Archive,
  Plus,
  Grid,
  List
} from "lucide-react"

export default function AssetsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const assets = [
    {
      id: 1,
      name: "BYD Seal Product Images",
      type: "image",
      size: "2.4 MB",
      uploadedBy: "Sarah Chen",
      uploadedAt: "2024-01-15",
      tags: ["product", "seal", "images"],
      market: "Global",
      campaign: "Q4 Launch",
      url: "/api/assets/1"
    },
    {
      id: 2,
      name: "Marketing Guidelines PDF",
      type: "document",
      size: "1.8 MB",
      uploadedBy: "Mike Johnson",
      uploadedAt: "2024-01-14",
      tags: ["guidelines", "marketing", "pdf"],
      market: "Europe",
      campaign: "Brand Guidelines",
      url: "/api/assets/2"
    },
    {
      id: 3,
      name: "Social Media Video",
      type: "video",
      size: "15.2 MB",
      uploadedBy: "Lisa Wang",
      uploadedAt: "2024-01-13",
      tags: ["social", "video", "campaign"],
      market: "Asia",
      campaign: "Social Campaign",
      url: "/api/assets/3"
    },
    {
      id: 4,
      name: "Brand Logo Package",
      type: "archive",
      size: "8.7 MB",
      uploadedBy: "David Kim",
      uploadedAt: "2024-01-12",
      tags: ["logo", "brand", "package"],
      market: "Global",
      campaign: "Brand Assets",
      url: "/api/assets/4"
    },
    {
      id: 5,
      name: "Product Brochure",
      type: "document",
      size: "3.1 MB",
      uploadedBy: "Emma Wilson",
      uploadedAt: "2024-01-11",
      tags: ["brochure", "product", "marketing"],
      market: "North America",
      campaign: "Q4 Launch",
      url: "/api/assets/5"
    },
    {
      id: 6,
      name: "Audio Jingles",
      type: "audio",
      size: "4.5 MB",
      uploadedBy: "Tom Brown",
      uploadedAt: "2024-01-10",
      tags: ["audio", "jingles", "branding"],
      market: "Global",
      campaign: "Brand Assets",
      url: "/api/assets/6"
    }
  ]

  const assetTypes = [
    { value: "all", label: "All Types", icon: Archive },
    { value: "image", label: "Images", icon: Image },
    { value: "document", label: "Documents", icon: FileText },
    { value: "video", label: "Videos", icon: Video },
    { value: "audio", label: "Audio", icon: Music },
    { value: "archive", label: "Archives", icon: Archive }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "image": return <Image className="h-5 w-5" />
      case "document": return <FileText className="h-5 w-5" />
      case "video": return <Video className="h-5 w-5" />
      case "audio": return <Music className="h-5 w-5" />
      case "archive": return <Archive className="h-5 w-5" />
      default: return <FileText className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "image": return "bg-blue-100 text-blue-800"
      case "document": return "bg-green-100 text-green-800"
      case "video": return "bg-purple-100 text-purple-800"
      case "audio": return "bg-orange-100 text-orange-800"
      case "archive": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = selectedType === "all" || asset.type === selectedType
    return matchesSearch && matchesType
  })

  const handleUpload = () => {
    // Simulate file upload
    alert("File upload functionality would be implemented here!")
  }

  const handleDownload = (asset: { name: string }) => {
    // Simulate download
    alert(`Downloading ${asset.name}...`)
  }

  const handlePreview = (asset: { name: string }) => {
    // Simulate preview
    alert(`Previewing ${asset.name}...`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Asset Library</h1>
              <p className="text-gray-600 mt-2">
                Manage and organize your marketing assets and documents
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Button onClick={handleUpload} className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Upload Asset</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                        <Image className="h-6 w-6 text-blue-600" alt="Images" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-sm text-gray-600">Images</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">18</p>
                  <p className="text-sm text-gray-600">Documents</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Video className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-sm text-gray-600">Videos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Archive className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-sm text-gray-600">Archives</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
                      placeholder="Search assets by name or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  <div className="flex flex-wrap gap-2">
                    {assetTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setSelectedType(type.value)}
                        className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          selectedType === type.value
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        <type.icon className="h-3 w-3" />
                        <span>{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assets Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAssets.map((asset) => (
              <Card key={asset.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${getTypeColor(asset.type)}`}>
                      {getTypeIcon(asset.type)}
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm" onClick={() => handlePreview(asset)}>
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDownload(asset)}>
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 truncate">{asset.name}</h3>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center justify-between">
                      <span>Size</span>
                      <span>{asset.size}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Market</span>
                      <span>{asset.market}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Campaign</span>
                      <span className="truncate ml-2">{asset.campaign}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
                    {asset.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {asset.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{asset.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="mt-3 pt-3 border-t text-xs text-gray-500">
                    <div>Uploaded by {asset.uploadedBy}</div>
                    <div>{new Date(asset.uploadedAt).toLocaleDateString()}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAssets.map((asset) => (
              <Card key={asset.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${getTypeColor(asset.type)}`}>
                      {getTypeIcon(asset.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{asset.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{asset.size}</span>
                        <span>•</span>
                        <span>{asset.market}</span>
                        <span>•</span>
                        <span>{asset.campaign}</span>
                        <span>•</span>
                        <span>Uploaded by {asset.uploadedBy}</span>
                        <span>•</span>
                        <span>{new Date(asset.uploadedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {asset.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handlePreview(asset)}>
                        <Eye className="h-3 w-3 mr-1" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDownload(asset)}>
                        <Download className="h-3 w-3 mr-1" />
                        Download
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
        )}

        {filteredAssets.length === 0 && (
          <div className="text-center py-12">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" alt="Upload" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No assets found</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm || selectedType !== "all" 
                ? "Try adjusting your search or filter criteria"
                : "Get started by uploading your first asset"
              }
            </p>
            <Button onClick={handleUpload}>
              <Plus className="h-4 w-4 mr-2" />
              Upload Asset
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

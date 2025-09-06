"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  Target,
  BarChart3,
  PieChart,
  Download,
  Upload,
  Filter,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export default function KPIDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d")
  const [selectedMarket, setSelectedMarket] = useState("all")

  const kpiData = {
    overview: {
      totalRevenue: 2400000,
      totalLeads: 1247,
      totalSpend: 2400000,
      avgCPL: 1925,
      conversionRate: 3.2,
      roi: 150
    },
    trends: {
      revenue: { current: 2400000, previous: 2100000, change: 14.3 },
      leads: { current: 1247, previous: 1150, change: 8.4 },
      spend: { current: 2400000, previous: 2200000, change: 9.1 },
      cpl: { current: 1925, previous: 1913, change: 0.6 }
    },
    byMarket: [
      { market: "Europe", revenue: 1200000, leads: 650, spend: 1200000, cpl: 1846 },
      { market: "North America", revenue: 800000, leads: 400, spend: 800000, cpl: 2000 },
      { market: "Asia", revenue: 400000, leads: 197, spend: 400000, cpl: 2030 }
    ],
    channels: [
      { channel: "Google Ads", spend: 1200000, leads: 650, cpl: 1846, revenue: 1200000 },
      { channel: "Facebook", spend: 800000, leads: 400, cpl: 2000, revenue: 800000 },
      { channel: "LinkedIn", spend: 400000, leads: 197, cpl: 2030, revenue: 400000 }
    ]
  }

  const periods = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "1y", label: "Last year" }
  ]

  const markets = [
    { value: "all", label: "All Markets" },
    { value: "Europe", label: "Europe" },
    { value: "North America", label: "North America" },
    { value: "Asia", label: "Asia" }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-EU').format(num)
  }

  const getChangeColor = (change: number) => {
    return change >= 0 ? "text-green-600" : "text-red-600"
  }

  const getChangeIcon = (change: number) => {
    return change >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Performance Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Track and analyze your marketing performance metrics
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="flex items-center space-x-2">
                <Upload className="h-4 w-4" />
                <span>Import Data</span>
              </Button>
              <Button className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export Report</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {periods.map(period => (
                      <option key={period.value} value={period.value}>
                        {period.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  <select
                    value={selectedMarket}
                    onChange={(e) => setSelectedMarket(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {markets.map(market => (
                      <option key={market.value} value={market.value}>
                        {market.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(kpiData.overview.totalRevenue)}</div>
              <div className="flex items-center space-x-1 text-sm">
                {getChangeIcon(kpiData.trends.revenue.change)}
                <span className={getChangeColor(kpiData.trends.revenue.change)}>
                  {kpiData.trends.revenue.change > 0 ? '+' : ''}{kpiData.trends.revenue.change}%
                </span>
                <span className="text-gray-500">vs last period</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(kpiData.overview.totalLeads)}</div>
              <div className="flex items-center space-x-1 text-sm">
                {getChangeIcon(kpiData.trends.leads.change)}
                <span className={getChangeColor(kpiData.trends.leads.change)}>
                  {kpiData.trends.leads.change > 0 ? '+' : ''}{kpiData.trends.leads.change}%
                </span>
                <span className="text-gray-500">vs last period</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost Per Lead</CardTitle>
              <Target className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(kpiData.overview.avgCPL)}</div>
              <div className="flex items-center space-x-1 text-sm">
                {getChangeIcon(kpiData.trends.cpl.change)}
                <span className={getChangeColor(kpiData.trends.cpl.change)}>
                  {kpiData.trends.cpl.change > 0 ? '+' : ''}{kpiData.trends.cpl.change}%
                </span>
                <span className="text-gray-500">vs last period</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ROI</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.overview.roi}%</div>
              <div className="flex items-center space-x-1 text-sm">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
                <span className="text-green-600">+12%</span>
                <span className="text-gray-500">vs last period</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Revenue by Market</span>
              </CardTitle>
              <CardDescription>
                Revenue distribution across different markets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {kpiData.byMarket.map((market, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{market.market}</h4>
                      <p className="text-sm text-gray-600">{formatNumber(market.leads)} leads</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{formatCurrency(market.revenue)}</p>
                      <p className="text-sm text-gray-600">CPL: {formatCurrency(market.cpl)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="h-5 w-5" />
                <span>Performance by Channel</span>
              </CardTitle>
              <CardDescription>
                Channel performance and efficiency metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {kpiData.channels.map((channel, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{channel.channel}</h4>
                      <p className="text-sm text-gray-600">{formatNumber(channel.leads)} leads</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{formatCurrency(channel.revenue)}</p>
                      <p className="text-sm text-gray-600">CPL: {formatCurrency(channel.cpl)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Table */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Performance Data</CardTitle>
            <CardDescription>
              Comprehensive view of all performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Market</th>
                    <th className="text-left py-3 px-4 font-semibold">Channel</th>
                    <th className="text-right py-3 px-4 font-semibold">Spend</th>
                    <th className="text-right py-3 px-4 font-semibold">Leads</th>
                    <th className="text-right py-3 px-4 font-semibold">CPL</th>
                    <th className="text-right py-3 px-4 font-semibold">Revenue</th>
                    <th className="text-right py-3 px-4 font-semibold">ROI</th>
                  </tr>
                </thead>
                <tbody>
                  {kpiData.byMarket.flatMap((market, marketIndex) =>
                    kpiData.channels.map((channel, channelIndex) => (
                      <tr key={`${marketIndex}-${channelIndex}`} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{market.market}</td>
                        <td className="py-3 px-4">{channel.channel}</td>
                        <td className="py-3 px-4 text-right">{formatCurrency(channel.spend / 3)}</td>
                        <td className="py-3 px-4 text-right">{formatNumber(Math.floor(channel.leads / 3))}</td>
                        <td className="py-3 px-4 text-right">{formatCurrency(channel.cpl)}</td>
                        <td className="py-3 px-4 text-right">{formatCurrency(channel.revenue / 3)}</td>
                        <td className="py-3 px-4 text-right">
                          <Badge variant="secondary">150%</Badge>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

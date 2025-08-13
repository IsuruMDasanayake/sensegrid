import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';
import { Activity, AlertTriangle, CheckCircle, Power, Settings, Wifi } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';

export const Dashboard: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'warning', message: 'System maintenance scheduled for tonight', time: '2 hours ago' },
    { id: 2, type: 'success', message: 'Backup completed successfully', time: '4 hours ago' },
    { id: 3, type: 'info', message: 'New feature update available', time: '1 day ago' }
  ]);

  // Sample data for charts
  const performanceData = [
    { name: 'Jan', value: 4000, growth: 2400 },
    { name: 'Feb', value: 3000, growth: 1398 },
    { name: 'Mar', value: 2000, growth: 9800 },
    { name: 'Apr', value: 2780, growth: 3908 },
    { name: 'May', value: 1890, growth: 4800 },
    { name: 'Jun', value: 2390, growth: 3800 },
  ];

  const trafficData = [
    { name: 'Desktop', value: 45, color: '#3B82F6' },
    { name: 'Mobile', value: 35, color: '#10B981' },
    { name: 'Tablet', value: 20, color: '#F97316' },
  ];

  const systemMetrics = [
    { label: 'CPU Usage', value: 65, color: 'blue' },
    { label: 'Memory', value: 78, color: 'emerald' },
    { label: 'Storage', value: 42, color: 'orange' },
    { label: 'Network', value: 88, color: 'purple' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            System Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Monitor your system performance and manage devices in real-time
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Devices</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">1,247</p>
                </div>
                <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="mt-2 flex items-center text-sm">
                <span className="text-emerald-600 dark:text-emerald-400">↗ 12%</span>
                <span className="ml-1 text-gray-600 dark:text-gray-400">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Sessions</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">892</p>
                </div>
                <Wifi className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="mt-2 flex items-center text-sm">
                <span className="text-emerald-600 dark:text-emerald-400">↗ 8%</span>
                <span className="ml-1 text-gray-600 dark:text-gray-400">from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">System Health</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">98.5%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="mt-2 flex items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">All systems operational</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Alerts</p>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">3</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="mt-2 flex items-center text-sm">
                <span className="text-orange-600 dark:text-orange-400">2 warnings, 1 info</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Performance Overview
                </h3>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="name" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: 'none', 
                          borderRadius: '8px',
                          color: '#F9FAFB'
                        }} 
                      />
                      <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} />
                      <Line type="monotone" dataKey="growth" stroke="#10B981" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Usage Analytics */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Usage Analytics
                </h3>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="name" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: 'none', 
                          borderRadius: '8px',
                          color: '#F9FAFB'
                        }} 
                      />
                      <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Device Control */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Device Control
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-red-500'}`} />
                      <span className="font-medium text-gray-900 dark:text-white">Main System</span>
                    </div>
                    <Button
                      size="sm"
                      variant={isOnline ? 'outline' : 'primary'}
                      onClick={() => setIsOnline(!isOnline)}
                    >
                      <Power className="h-4 w-4 mr-1" />
                      {isOnline ? 'Stop' : 'Start'}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                      <span className="font-medium text-gray-900 dark:text-white">Backup System</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <span className="font-medium text-gray-900 dark:text-white">Analytics Engine</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Metrics */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  System Metrics
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemMetrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                        <span className="text-gray-900 dark:text-white font-medium">{metric.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            metric.color === 'blue' ? 'bg-blue-600' :
                            metric.color === 'emerald' ? 'bg-emerald-600' :
                            metric.color === 'orange' ? 'bg-orange-600' : 'bg-purple-600'
                          }`}
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Traffic Sources */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Traffic Sources
                </h3>
              </CardHeader>
              <CardContent>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={60}
                        dataKey="value"
                      >
                        {trafficData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2">
                  {trafficData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Notifications */}
        <Card className="mt-8">
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Notifications
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <div className={`p-1 rounded-full ${
                    notification.type === 'warning' ? 'bg-orange-100 dark:bg-orange-900/30' :
                    notification.type === 'success' ? 'bg-emerald-100 dark:bg-emerald-900/30' :
                    'bg-blue-100 dark:bg-blue-900/30'
                  }`}>
                    {notification.type === 'warning' && <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />}
                    {notification.type === 'success' && <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />}
                    {notification.type === 'info' && <Activity className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">{notification.message}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
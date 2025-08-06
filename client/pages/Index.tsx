import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  School,
  Users,
  Plus,
  Eye,
  Calendar,
  BookOpen,
  UserPlus,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { BsQrCode } from "react-icons/bs";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/logos/noBgColor.png" alt="Logo" className="w-[190px]" />
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0"
              >
                <Plus className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Add School</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 hidden sm:flex"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Add to Waitlist
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 hidden md:flex"
              >
                <BsQrCode className="w-4 h-4 mr-2" />
                QR Code
              </Button>
              <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center gap-1">
                <HelpCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Need staff?</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
              <School className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                School Administration Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your schools, classrooms, and enrollment
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* All Placeholders Card */}
            <Card className="border-purple-200 shadow-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    AD Placeholders
                  </h3>
                  <p className="text-gray-500 text-sm">
                    admin dashboard
                    <br />
                    content here
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sunshine Learning Center */}
            <Card className="border-purple-200 shadow-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <School className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">
                        Sunshine Learning Center
                      </CardTitle>
                      <p className="text-purple-100 text-sm">
                        123 Sunshine Ave, Springfield, CA 90210
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-0"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Classroom
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Classrooms
                  </h4>

                  <div className="space-y-3">
                    {/* Little Rocs Room */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-100 gap-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600">
                          <AvatarFallback className="text-white font-bold">
                            LR
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h5 className="font-semibold text-gray-900">
                            Little Rocs Room
                          </h5>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Age: 2-3 | Capacity: 11
                            </span>
                            <Badge
                              variant="secondary"
                              className="bg-purple-100 text-purple-700 w-fit"
                            >
                              Enrolled: 14
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-200 text-purple-700 hover:bg-purple-50 w-full sm:w-auto"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Waitlist
                        </Button>
                        <Button size="sm" className="!size-8">
                          <BsQrCode className="" />
                        </Button>
                      </div>
                    </div>

                    {/* Rainbow Room */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-100 gap-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600">
                          <AvatarFallback className="text-white font-bold">
                            RR
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h5 className="font-semibold text-gray-900">
                            Rainbow Room
                          </h5>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Age: 4-5 | Capacity: 20
                            </span>
                            <Badge
                              variant="secondary"
                              className="bg-purple-100 text-purple-700 w-fit"
                            >
                              Enrolled: 18
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-200 text-purple-700 hover:bg-purple-50 w-full sm:w-auto"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Waitlist
                        </Button>
                        <Button size="sm" className="!size-8">
                          <BsQrCode className="" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* All Placeholders Card */}
            <Card className="border-purple-200 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    AD Placeholders
                  </h3>
                  <p className="text-gray-500 text-sm">
                    admin dashboard
                    <br />
                    content here
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Unassigned Waitlist */}
            <Card className="border-purple-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Unassigned Waitlist (3)
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600">
                        <AvatarFallback className="text-white text-sm font-bold">
                          JD
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 text-sm">
                          John Doe
                        </h5>
                        <p className="text-xs text-gray-600">
                          Age: 3 | Priority: High
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600">
                        <AvatarFallback className="text-white text-sm font-bold">
                          ES
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 text-sm">
                          Emma Smith
                        </h5>
                        <p className="text-xs text-gray-600">
                          Age: 4 | Priority: Medium
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600">
                        <AvatarFallback className="text-white text-sm font-bold">
                          MB
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 text-sm">
                          Mike Brown
                        </h5>
                        <p className="text-xs text-gray-600">
                          Age: 2 | Priority: Low
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* All Placeholders Card Bottom */}
            <Card className="border-purple-200 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    AD Placeholders
                  </h3>
                  <p className="text-gray-500 text-sm">
                    admin dashboard
                    <br />
                    content here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

import { Briefcase, Send, Calendar, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">

      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <Button>Add Job</Button>
      </div>

      {/* Stats Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Jobs</CardTitle>
            <Briefcase size={20}/>
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">24</p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Applications</CardTitle>
            <Send size={20}/>
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">18</p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Interviews</CardTitle>
            <Calendar size={20}/>
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">4</p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Offers</CardTitle>
            <CheckCircle size={20}/>
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">2</p>
          </CardContent>
        </Card>

      </div>


      {/* Recent Applications */}

      <Card>

        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>

        <CardContent>

          <div className="space-y-3">

            <div className="flex justify-between border-b pb-2">
              <div>
                <p className="font-medium">Frontend Developer</p>
                <p className="text-sm text-gray-500">Google</p>
              </div>

              <span className="text-sm text-blue-500">Applied</span>
            </div>


            <div className="flex justify-between border-b pb-2">
              <div>
                <p className="font-medium">React Developer</p>
                <p className="text-sm text-gray-500">Amazon</p>
              </div>

              <span className="text-sm text-yellow-500">Interview</span>
            </div>


            <div className="flex justify-between">
              <div>
                <p className="font-medium">UI Engineer</p>
                <p className="text-sm text-gray-500">Microsoft</p>
              </div>

              <span className="text-sm text-green-500">Offer</span>
            </div>

          </div>

        </CardContent>

      </Card>

    </div>
  )
}
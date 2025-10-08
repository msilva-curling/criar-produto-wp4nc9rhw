import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const ProfilePage = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>
            This is where you can manage your profile information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://img.usecurling.com/ppl/large?gender=male" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">User Name</h2>
              <p className="text-muted-foreground">user@example.com</p>
              <Button variant="outline">Change Picture</Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">User Name</Label>
            <Input id="username" defaultValue="User Name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="user@example.com" />
          </div>
          <div className="flex justify-end">
            <Button>Update Profile</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProfilePage

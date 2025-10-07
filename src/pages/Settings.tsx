import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const SettingsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Manage your public profile information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://img.usecurling.com/ppl/medium?gender=male" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <Button variant="outline">Upload new picture</Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">User Name</Label>
              <Input id="username" defaultValue="User Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="user@example.com" readOnly />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize the look and feel of the application.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark mode.
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div>
              <Label className="mb-2 block">Accent Color</Label>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="h-8 w-8 rounded-full bg-primary p-0 border-2 border-ring"
                />
                <Button
                  variant="outline"
                  className="h-8 w-8 rounded-full bg-green-500 p-0"
                />
                <Button
                  variant="outline"
                  className="h-8 w-8 rounded-full bg-purple-500 p-0"
                />
                <Button
                  variant="outline"
                  className="h-8 w-8 rounded-full bg-orange-500 p-0"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Widget Management</CardTitle>
            <CardDescription>
              Choose which widgets to display on your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="weather-widget">Weather Widget</Label>
              <Switch id="weather-widget" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="quote-widget">Quote of the Day Widget</Label>
              <Switch id="quote-widget" defaultChecked />
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-end">
          <Button>Save Settings</Button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage

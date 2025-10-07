import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { LayoutGrid, List, PlusCircle, Search } from 'lucide-react'

const NotesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [layout, setLayout] = useState('grid')

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Notes</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Note
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search notes..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ToggleGroup
          type="single"
          value={layout}
          onValueChange={(value) => value && setLayout(value)}
        >
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <List className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="border rounded-lg bg-card text-card-foreground shadow-sm">
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            No notes yet
          </h3>
          <p className="text-muted-foreground mt-2">
            Your thoughts are safe here. Start writing!
          </p>
          <Button className="mt-4">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Your First Note
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotesPage

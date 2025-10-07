export type Priority = 'High' | 'Medium' | 'Low'

export interface Task {
  id: string
  title: string
  description?: string
  dueDate?: string
  priority: Priority
  tags: string[]
  isCompleted: boolean
  createdAt: string
}

export interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  lastModified: string
  createdAt: string
}

export type Theme = 'light' | 'dark' | 'system'

export type AccentColor = 'indigo' | 'emerald' | 'purple' | 'orange' | 'red'

export interface Settings {
  theme: Theme
  accentColor: AccentColor
  widgets: {
    weather: boolean
    quote: boolean
  }
  notifications: {
    taskReminders: boolean
    dailySummary: boolean
  }
  userName: string
  userAvatar: string
}

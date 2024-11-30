"use client";

import { useState } from "react";
import { MoreVertical, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample data for events
const events = [
  {
    id: 1,
    date: new Date(2024, 3, 28),
    startTime: "09:00",
    endTime: "09:30",
    title: "30min call meeting Peer <> Leslie",
    location: "Online",
    participants: [
      { name: "Peer", image: "/placeholder.svg?height=32&width=32" },
      { name: "Leslie", image: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    id: 2,
    date: new Date(2024, 3, 30),
    startTime: "15:20",
    endTime: "16:20",
    title: "Live Product Demo",
    location: "WeWork Paris, Floor 3",
    participants: [
      { name: "Alex", image: "/placeholder.svg?height=32&width=32" },
      { name: "Sarah", image: "/placeholder.svg?height=32&width=32" },
      { name: "Mike", image: "/placeholder.svg?height=32&width=32" },
      { name: "Emma", image: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    id: 3,
    date: new Date(2024, 3, 29),
    startTime: "11:15",
    endTime: "11:45",
    title: "30min call meeting Olivia, Liam <> Alban",
    location: "Online",
    participants: [
      { name: "Olivia", image: "/placeholder.svg?height=32&width=32" },
      { name: "Liam", image: "/placeholder.svg?height=32&width=32" },
      { name: "Alban", image: "/placeholder.svg?height=32&width=32" },
    ],
  },
];

export default function YourEventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
          Bookings
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          See your scheduled events from your calendar events links.
        </p>

        <Tabs defaultValue="upcoming" className="mb-8 p-2">
          <TabsList className="grid w-full grid-cols-4 p-1 bg-gray-100 dark:bg-zinc-800 rounded-lg">
            {["upcoming", "past", "cancelled", "your events"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-700 data-[state=active]:text-emerald-500 rounded-md"
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-zinc-700 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-6">
                  {/* Date Column */}
                  <div className="text-center transition-all duration-300 group-hover:scale-110">
                    <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                      {event.date.toLocaleString("en-US", { weekday: "short" })}
                    </div>
                    <div className="text-2xl font-semibold text-emerald-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-300">
                      {event.date.getDate()}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 px-2 py-1 rounded-full text-xs font-medium">
                        {event.startTime} - {event.endTime}
                      </span>
                    </div>
                    <div className="font-medium text-lg group-hover:text-emerald-500 transition-colors duration-300">
                      {event.title}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4 text-emerald-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2 overflow-hidden p-1">
                        {event.participants.map((participant, index) => (
                          <Avatar
                            key={index}
                            className="h-8 w-8 border-2 border-white dark:border-zinc-800 transition-transform duration-300 hover:scale-110 hover:z-10"
                          >
                            <AvatarImage
                              src={participant.image}
                              alt={participant.name}
                            />
                            <AvatarFallback>
                              {participant.name[0]}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-48 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
                  >
                    <DropdownMenuItem className="hover:bg-emerald-50 dark:hover:bg-emerald-900 cursor-pointer">
                      Reschedule booking
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-emerald-50 dark:hover:bg-emerald-900 cursor-pointer">
                      Request reschedule
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-emerald-50 dark:hover:bg-emerald-900 cursor-pointer">
                      Invite people
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 cursor-pointer">
                      Cancel Booking
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

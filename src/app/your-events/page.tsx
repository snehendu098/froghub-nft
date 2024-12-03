"use client";

import { useEffect, useState } from "react";
import { MoreVertical, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { useActiveAccount } from "thirdweb/react";

export default function YourEventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [events, setEvents] = useState<any>({ upcoming: [], past: [] });
  const activeAccount = useActiveAccount();

  const fetchEvents = async () => {
    try {
      const { data } = await axios.post("/api/events", {
        owner: activeAccount?.address,
      });
      if (data.success) {
        setEvents({ upcoming: data.events.upcoming, past: data.events.past });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (activeAccount) {
      fetchEvents();
    }
  }, [activeAccount]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
          Bookings
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          See your upcoming and past events all in one place
        </p>

        <Tabs defaultValue="upcoming" className="mb-8 p-2">
          <TabsList className="grid w-full grid-cols-2 p-1 bg-gray-100 dark:bg-zinc-800 rounded-lg">
            {["upcoming", "past"].map((tab) => (
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
          {events[activeTab].map((event: any) => (
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
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"></div>
                    <div className="font-medium text-lg group-hover:text-emerald-500 transition-colors duration-300">
                      {event.title}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4 text-emerald-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2"></div>
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

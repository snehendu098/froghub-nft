import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HomeEventCard } from "@/components/core";

export default function FrogHubEvents() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-4xl font-bold md:text-6xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Discover Exciting Events
            <br />
            Near You
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 dark:text-zinc-300">
            Find and join amazing events in your area or host your own.
            <br />
            Connect with like-minded individuals and create unforgettable
            experiences.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mb-8 max-w-2xl relative">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for events"
                className="pl-4 pr-20 bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-400 focus:ring-2 focus:ring-emerald-500 transition-all"
              />
              <Select>
                <SelectTrigger className="absolute right-0 top-0 w-[120px] border-0 border-l border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-700 dark:text-zinc-100 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors">
                  <SelectValue placeholder="All Events" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                  <SelectItem value="food">Food & Drink</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Event Category Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Concerts", "Tech Conferences", "Sports", "Workshops"].map(
              (tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  className="rounded-full bg-white dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-emerald-50 dark:hover:bg-emerald-900 hover:text-emerald-600 dark:hover:text-emerald-400 border-gray-300 dark:border-zinc-700 hover:border-emerald-300 dark:hover:border-emerald-700"
                >
                  {tag}
                </Button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Event Grid Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Event Items */}
            {[
              {
                title: "Green Tech Expo 2024",
                description:
                  "Explore the latest in sustainable technology and eco-friendly innovations.",
                date: "May 15, 2024",
                price: "Free",
                location: "Eco Center, Green City",
              },
              {
                title: "Frog Conservation Workshop",
                description:
                  "Learn about local frog species and how to protect their habitats.",
                date: "June 5, 2024",
                price: "$10",
                location: "Lily Pad Nature Reserve",
              },
              {
                title: "Sustainable Living Fair",
                description:
                  "Discover tips and products for a more environmentally friendly lifestyle.",
                date: "July 20, 2024",
                price: "$5",
                location: "Green Park Plaza",
              },
            ].map((event, index) => (
              <HomeEventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

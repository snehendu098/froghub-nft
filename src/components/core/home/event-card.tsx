import { Calendar, DollarSign, MapPin } from "lucide-react";
import React from "react";

const EventCard = ({ event }: any) => {
  return (
    <div className="cursor-pointer rounded-2xl bg-white dark:bg-zinc-800 p-6 shadow-lg dark:shadow-zinc-800/50 hover:shadow-xl dark:hover:shadow-zinc-700/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 group">
      <div className="aspect-[16/9] mb-4 rounded-xl bg-gray-200 dark:bg-zinc-700 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        {event.title}
      </h3>
      <p className="mb-4 text-sm text-gray-600 dark:text-zinc-300 group-hover:text-gray-700 dark:group-hover:text-zinc-200 transition-colors">
        {event.description}
      </p>
      <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-zinc-400">
        <span className="flex items-center group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          <Calendar className="mr-2 h-4 w-4 text-emerald-500 dark:text-emerald-400" />
          {event.date}
        </span>
        <span className="flex items-center group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          <DollarSign className="mr-2 h-4 w-4 text-emerald-500 dark:text-emerald-400" />
          {event.price}
        </span>
        <span className="flex items-center group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          <MapPin className="mr-2 h-4 w-4 text-emerald-500 dark:text-emerald-400" />
          {event.location}
        </span>
      </div>
    </div>
  );
};

export default EventCard;

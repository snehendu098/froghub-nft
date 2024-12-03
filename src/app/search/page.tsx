import { SearchResults } from "@/components/core";
import { fetchEvents } from "@/lib/db-operation";
import React from "react";

const Page = async () => {
  const allEvents = await fetchEvents();

  return <SearchResults allEvents={JSON.parse(JSON.stringify(allEvents))} />;
};

export default Page;

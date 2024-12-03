import { SearchResults } from "@/components/core";
import { fetchEvents } from "@/lib/db-operation";
import React, { Suspense } from "react";

const Page = async () => {
  const allEvents = await fetchEvents();

  return (
    <Suspense>
      <SearchResults allEvents={JSON.parse(JSON.stringify(allEvents))} />
    </Suspense>
  );
};

export default Page;

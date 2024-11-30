// app/api/events/route.ts
import { NextResponse } from "next/server";

import Event from "@/models/events";
import { IEvent, ApiResponse } from "@/types/events";
import { dbConnect } from "@/lib/connect";

export async function POST(request: Request) {
  try {
    await dbConnect();

    const body: IEvent = await request.json();

    const event = new Event({
      title: body.title,
      website: body.website,
      eventImage: body.eventImage,
      ticketPrice: body.ticketPrice,
      totalTickets: body.totalTickets,
      venue: body.venue,
      description: body.description,
      owner: body.owner,
    });

    const savedEvent = await event.save();

    const response: ApiResponse<IEvent> = {
      success: true,
      data: savedEvent,
      message: "Event created successfully",
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error: any) {
    const response: ApiResponse<null> = {
      success: false,
      error: error.message,
    };

    return NextResponse.json(response, { status: 400 });
  }
}

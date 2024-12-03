// app/api/events/route.ts
import { NextResponse } from "next/server";
import Event from "@/models/events.model";
import { dbConnect } from "@/lib/connect";
import { ApiResponse } from "@/types/events";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { owner } = await req.json();

    return Response.json(
      {
        success: true,
        message: "Events fetched successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    const response: ApiResponse<null> = {
      success: false,
      error: error.message,
    };

    return NextResponse.json(response, { status: 400 });
  }
}

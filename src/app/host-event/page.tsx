"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useActiveAccount, useConnect } from "thirdweb/react";
import { useRouter } from "next/navigation";

export default function HostEventPage() {
  const [description, setDescription] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const activeAccount = useActiveAccount();
  const router = useRouter();
  const { isConnecting } = useConnect();

  const createEvent = async () => {};

  useEffect(() => {
    if (!activeAccount && !isConnecting) {
      router.push("/");
    }
  }, [activeAccount, isConnecting]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              Host an Event
            </CardTitle>
            <CardDescription>
              Fill in the details to create your event on FrogHub
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input
                  id="title"
                  placeholder="Enter event title"
                  className="bg-white dark:bg-zinc-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Event Website</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://your-event-website.com"
                  className="bg-white dark:bg-zinc-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Event Image</Label>
                {/* <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="image"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-zinc-800 dark:bg-zinc-900 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <ImagePlus className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="image" type="file" className="hidden" />
                  </label>
                </div> */}
                {imageUrl.length == 0 ? (
                  <UploadDropzone
                    endpoint={"imageUploader"}
                    appearance={{
                      container: {
                        border: "2px dashed #ccc",
                      },
                    }}
                    onClientUploadComplete={(res) => {
                      setImageUrl(res[0].url);
                    }}
                    onUploadError={(error: Error) => {
                      console.log(error);
                      alert("Error occurred");
                    }}
                  />
                ) : (
                  <Image
                    src={imageUrl}
                    alt="my-image"
                    height={300}
                    width={500}
                  />
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ticketPrice">Ticket Price</Label>
                  <Input
                    id="ticketPrice"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className="bg-white dark:bg-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numTickets">Number of Tickets</Label>
                  <Input
                    id="numTickets"
                    type="number"
                    min="1"
                    placeholder="100"
                    className="bg-white dark:bg-zinc-800"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue">Venue</Label>
                <Input
                  id="venue"
                  placeholder="Enter event venue"
                  className="bg-white dark:bg-zinc-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <div className="flex space-x-2">
                  <Button
                    type="button"
                    variant={previewMode ? "outline" : "default"}
                    onClick={() => setPreviewMode(false)}
                  >
                    Write
                  </Button>
                  <Button
                    type="button"
                    variant={previewMode ? "default" : "outline"}
                    onClick={() => setPreviewMode(true)}
                  >
                    Preview
                  </Button>
                </div>
                {previewMode ? (
                  <Card className="mt-2 p-4 prose dark:prose-invert max-w-none bg-white dark:bg-zinc-800">
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </Card>
                ) : (
                  <Textarea
                    id="description"
                    placeholder="Write your event description here (Markdown supported)"
                    className="min-h-[200px] bg-white dark:bg-zinc-800"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create Event</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

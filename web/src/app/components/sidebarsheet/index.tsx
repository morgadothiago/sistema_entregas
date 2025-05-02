"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell, BellDot } from "lucide-react";
import React from "react";

type Notification = {
  id: number;
  message: string;
  timestamp: string;
  isNotification: boolean;
  data: Notification[];
};

export default function SideBarSheet({ isNotification, data }: Notification) {
  return (
    <Sheet>
      <SheetTrigger>{isNotification ? <BellDot /> : <Bell />}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            {data.map((notification: { message: string }, index: number) => (
              <div key={index}>{notification.message}</div>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}


"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TextAnalyzer } from "./text-analyzer";
import { MediaAnalyzer } from "./media-analyzer";
import { FileScan, Text } from "lucide-react";

export function ContentAnalyzer() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Real-Time Threat Detection
          </CardTitle>
          <CardDescription className="text-lg text-center text-muted-foreground">
            Analyze text or media files. Our AI will check for potential scams,
            fraud, and deepfakes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="text" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="text">
                <Text className="mr-2 h-5 w-5" />
                Content Analysis
              </TabsTrigger>
              <TabsTrigger value="media">
                <FileScan className="mr-2 h-5 w-5" />
                Media Analysis
              </TabsTrigger>
            </TabsList>
            <TabsContent value="text" className="pt-6">
              <TextAnalyzer />
            </TabsContent>
            <TabsContent value="media" className="pt-6">
              <MediaAnalyzer />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

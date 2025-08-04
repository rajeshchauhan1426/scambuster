
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          About the Project
        </h2>
        <Card className="shadow-lg border-primary/20">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Problem Statement</AccordionTrigger>
                <AccordionContent>
                  The digital ecosystem faces severe threats from scams,
                  phishing attacks, and deepfakes. The sheer volume and
                  sophistication of these attacks have outpaced traditional
                  security systems. End-users lack accessible tools to verify and
                  protect themselves in real time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Objective</AccordionTrigger>
                <AccordionContent>
                  To design and deploy a unified AI-powered web platform
                  capable of detecting and preventing various online threats
                  through real-time scanning, ML models, and user-personalized
                  alert systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Scope</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Analyze text, URLs, and media files for authenticity.</li>
                    <li>Detect threats and generate risk scores using AI.</li>
                    <li>Present alerts and threat history on a user dashboard.</li>
                    <li>Provide insights and educational resources to end-users.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Methodology</AccordionTrigger>
                <AccordionContent>
                    SafeNet.AI collects input via the web UI, preprocesses it, and selects an appropriate ML model to classify threats and generate a risk score. The results are then displayed on the dashboard with actionable recommendations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

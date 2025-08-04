
"use client";

import type { AnalyzeContentOutput } from "@/ai/flows/analyze-content";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  TriangleAlert,
  ExternalLink,
} from "lucide-react";
import { useMemo } from "react";
import { Separator } from "./ui/separator";

interface ResultsDashboardProps {
  result: AnalyzeContentOutput;
}

const agencyLinks = [
    { name: 'Federal Trade Commission (FTC)', url: 'https://www.ftc.gov/complaint' },
    { name: 'Internet Crime Complaint Center (IC3)', url: 'https://www.ic3.gov/' },
    { name: 'Consumer Financial Protection Bureau (CFPB)', url: 'https://www.consumerfinance.gov/complaint/' },
];

export function ResultsDashboard({ result }: ResultsDashboardProps) {
  const { riskScore } = result.riskAssessment;

  const riskProfile = useMemo(() => {
    if (riskScore <= 30) {
      return {
        level: "Low Risk",
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        colorClass: "bg-primary",
        textClass: "text-primary",
      };
    }
    if (riskScore <= 70) {
      return {
        level: "Medium Risk",
        icon: <ShieldAlert className="h-10 w-10 text-accent" />,
        colorClass: "bg-accent",
        textClass: "text-accent",
      };
    }
    return {
      level: "High Risk",
      icon: <ShieldX className="h-10 w-10 text-destructive" />,
      colorClass: "bg-destructive",
      textClass: "text-destructive",
    };
  }, [riskScore]);

  return (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Analysis Complete</CardTitle>
                <CardDescription>Here's the breakdown of our findings.</CardDescription>
            </CardHeader>
        </Card>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 flex flex-col justify-center items-center text-center p-6">
          <CardHeader className="p-0 mb-4">
            {riskProfile.icon}
          </CardHeader>
          <CardContent className="p-0 flex-grow flex flex-col justify-center">
            <p className={`text-5xl font-bold ${riskProfile.textClass}`}>
              {riskScore}
            </p>
            <p className="text-xl font-semibold text-muted-foreground">{riskProfile.level}</p>
            <Progress value={riskScore} className="w-full mt-4 h-3 [&>*]:bg-transparent" indicatorClassName={riskProfile.colorClass} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Key Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-foreground/90">
              {result.riskAssessment.reason}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Red Flags Identified</CardTitle>
            <CardDescription>
              These are specific elements that our AI flagged as suspicious.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {result.flags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                {result.flags.map((flag, index) => (
                    <Badge key={index} variant="destructive" className="text-sm py-1 px-3">
                    <TriangleAlert className="mr-2 h-4 w-4" />
                    {flag}
                    </Badge>
                ))}
                </div>
            ) : (
                <p className="text-muted-foreground">No specific red flags were identified.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Actions</CardTitle>
            <CardDescription>
              Based on the analysis, here are your next steps.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">If you believe this content is part of a scam or fraud attempt, you should report it to the relevant authorities.</p>
             <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Report Fraud</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Reporting Fraudulent Activity</DialogTitle>
                    <DialogDescription>
                        Reporting scams helps protect others. Here are official resources where you can file a complaint.
                    </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                        {agencyLinks.map(agency => (
                             <a href={agency.url} target="_blank" rel="noopener noreferrer" key={agency.name}>
                                <Button variant="ghost" className="w-full justify-between">
                                    {agency.name}
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                            </a>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>

            {riskScore > 50 && (
                <>
                <Separator className="my-4"/>
                <div className="space-y-2">
                    <h4 className="font-semibold">Agency Directory</h4>
                    <p className="text-sm text-muted-foreground">
                        Given the risk score, you may want to contact these agencies:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        {agencyLinks.map(agency => (
                            <li key={agency.name}>
                                <a href={agency.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">
                                    {agency.name} <ExternalLink className="inline h-4 w-4" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

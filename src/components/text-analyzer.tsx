
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertCircle } from "lucide-react";
import { analyzeContent, type AnalyzeContentOutput } from "@/ai/flows/analyze-content";
import { ResultsDashboard } from "./results-dashboard";

export function TextAnalyzer() {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeContentOutput | null>(null);

  const handleAnalyze = async () => {
    if (!content.trim()) {
      setError("Please enter some content to analyze.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await analyzeContent({ content });
      setAnalysisResult(result);
    } catch (e) {
      console.error(e);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <CardContent className="pt-0">
        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Paste any text, email, or message here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[200px] text-base p-4 focus:ring-primary focus:ring-offset-2"
            disabled={isLoading}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={handleAnalyze}
          disabled={isLoading}
          size="lg"
          className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Content"
          )}
        </Button>
      </CardFooter>


      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isLoading && (
        <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
            <p className="text-xl text-muted-foreground">Our AI is analyzing the content... this may take a moment.</p>
        </div>
      )}

      {analysisResult && (
         <div className="animate-in fade-in-50 duration-500">
            <ResultsDashboard result={analysisResult} />
         </div>
      )}
    </div>
  );
}

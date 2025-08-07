
"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertCircle, Upload } from "lucide-react";
import { analyzeMedia, type AnalyzeMediaOutput } from "@/ai/flows/analyze-media";
import { ResultsDashboard } from "./results-dashboard";

export function MediaAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeMediaOutput | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // 25MB limit
      if (selectedFile.size > 25 * 1024 * 1024) {
        setError("File size must not exceed 25MB.");
        setFile(null);
        return;
      }
      setError(null);
      setFile(selectedFile);
    }
  };

  const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError("Please select a file to analyze.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const mediaDataUri = await fileToDataUri(file);
      const result = await analyzeMedia({ mediaDataUri });
      setAnalysisResult(result);
    } catch (e) {
      console.error(e);
      setError("An unexpected error occurred during analysis. The file may be corrupt or in an unsupported format.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <CardContent className="pt-0">
        <div className="grid w-full gap-4">
          <Card
            className="border-2 border-dashed border-muted-foreground/50 hover:border-primary transition-colors duration-300 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <CardContent className="flex flex-col items-center justify-center text-center p-8 space-y-2">
              <Upload className="h-12 w-12 text-muted-foreground" />
              <p className="font-medium text-muted-foreground">
                {file ? `Selected: ${file.name}` : "Click or drag to upload a file"}
              </p>
              <p className="text-sm text-muted-foreground/80">
                Supports images and videos (Max 25MB).
              </p>
            </CardContent>
          </Card>
          <Input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*,video/*"
            disabled={isLoading}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={handleAnalyze}
          disabled={isLoading || !file}
          size="lg"
          className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              Analyzing Media...
            </>
          ) : (
            "Analyze Media"
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
          <p className="text-xl text-muted-foreground">Our AI is analyzing the media file... this may take a moment.</p>
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

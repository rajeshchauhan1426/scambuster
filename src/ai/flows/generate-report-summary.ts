// src/ai/flows/generate-report-summary.ts
'use server';

/**
 * @fileOverview Generates a summarized report of identified risks and suspicious elements.
 *
 * - generateReportSummary - A function that generates the report summary.
 * - GenerateReportSummaryInput - The input type for the generateReportSummary function.
 * - GenerateReportSummaryOutput - The return type for the generateReportSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateReportSummaryInputSchema = z.object({
  analysisResults: z.string().describe('The detailed results of the AI analysis.'),
});
export type GenerateReportSummaryInput = z.infer<typeof GenerateReportSummaryInputSchema>;

const GenerateReportSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the identified risks and suspicious elements.'),
});
export type GenerateReportSummaryOutput = z.infer<typeof GenerateReportSummaryOutputSchema>;

export async function generateReportSummary(input: GenerateReportSummaryInput): Promise<GenerateReportSummaryOutput> {
  return generateReportSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateReportSummaryPrompt',
  input: {schema: GenerateReportSummaryInputSchema},
  output: {schema: GenerateReportSummaryOutputSchema},
  prompt: `You are an AI assistant that summarizes security analysis reports.

  Given the following analysis results, create a concise summary of the identified risks and suspicious elements. Focus on the key findings and potential threats.

  Analysis Results:
  {{analysisResults}}`,
});

const generateReportSummaryFlow = ai.defineFlow(
  {
    name: 'generateReportSummaryFlow',
    inputSchema: GenerateReportSummaryInputSchema,
    outputSchema: GenerateReportSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

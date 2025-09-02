// src/ai/flows/interactive-lead-data-visualization.ts
'use server';

/**
 * @fileOverview Generates dynamic charts and graphs visualizing lead generation and data analysis results.
 *
 * - generateLeadDataVisualization - A function that generates dynamic charts and graphs visualizing lead generation and data analysis results.
 * - GenerateLeadDataVisualizationInput - The input type for the generateLeadDataVisualization function.
 * - GenerateLeadDataVisualizationOutput - The return type for the generateLeadDataVisualization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateLeadDataVisualizationInputSchema = z.object({
  clientSector: z.string().describe('The client sector for which to generate the data visualization.'),
  workSampleDescription: z.string().describe('A description of the work sample to be visualized.'),
});
export type GenerateLeadDataVisualizationInput = z.infer<typeof GenerateLeadDataVisualizationInputSchema>;

const GenerateLeadDataVisualizationOutputSchema = z.object({
  chartDataUri: z.string().describe('A data URI containing the chart or graph image in SVG format.'),
});
export type GenerateLeadDataVisualizationOutput = z.infer<typeof GenerateLeadDataVisualizationOutputSchema>;

export async function generateLeadDataVisualization(input: GenerateLeadDataVisualizationInput): Promise<GenerateLeadDataVisualizationOutput> {
  return generateLeadDataVisualizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLeadDataVisualizationPrompt',
  input: {schema: GenerateLeadDataVisualizationInputSchema},
  output: {schema: GenerateLeadDataVisualizationOutputSchema},
  prompt: `You are an expert data visualization specialist.

  Based on the client sector: {{{clientSector}}} and the following work sample description: {{{workSampleDescription}}}, generate a data visualization in SVG format.

  The SVG should represent key metrics and insights from the work sample in a clear and engaging manner. Make it professional and visually appealing, using modern design principles. Ensure the SVG is properly formatted and valid.
  Return only the SVG data URI.
  `,
});

const generateLeadDataVisualizationFlow = ai.defineFlow(
  {
    name: 'generateLeadDataVisualizationFlow',
    inputSchema: GenerateLeadDataVisualizationInputSchema,
    outputSchema: GenerateLeadDataVisualizationOutputSchema,
  },
  async input => {
    const {output} = await ai.generate({
        model: 'googleai/gemini-2.5-flash',
        prompt: `Given the client sector "${input.clientSector}" and work sample description "${input.workSampleDescription}", create an SVG chart visualizing lead generation results.  Return only the SVG.`,        
    });

    // Add the data URI prefix to the SVG content to make it displayable as an image.
    const chartDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(output!.text)}`;
    return { chartDataUri: chartDataUri };
  }
);

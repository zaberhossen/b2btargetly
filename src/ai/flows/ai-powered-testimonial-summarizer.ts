'use server';
/**
 * @fileOverview Summarizes client reviews using a generative AI tool.
 *
 * - summarizeTestimonials - A function that summarizes client testimonials.
 * - SummarizeTestimonialsInput - The input type for the summarizeTestimonials function.
 * - SummarizeTestimonialsOutput - The return type for the summarizeTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTestimonialsInputSchema = z.object({
  reviews: z
    .string()
    .describe('The client reviews to be summarized.'),
});
export type SummarizeTestimonialsInput = z.infer<typeof SummarizeTestimonialsInputSchema>;

const SummarizeTestimonialsOutputSchema = z.object({
  summary: z.string().describe('The summarized client testimonials.'),
});
export type SummarizeTestimonialsOutput = z.infer<typeof SummarizeTestimonialsOutputSchema>;

export async function summarizeTestimonials(input: SummarizeTestimonialsInput): Promise<SummarizeTestimonialsOutput> {
  return summarizeTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTestimonialsPrompt',
  input: {schema: SummarizeTestimonialsInputSchema},
  output: {schema: SummarizeTestimonialsOutputSchema},
  prompt: `Summarize the following client reviews, extracting the key positive feedback:

Reviews:
{{{reviews}}}`,
});

const summarizeTestimonialsFlow = ai.defineFlow(
  {
    name: 'summarizeTestimonialsFlow',
    inputSchema: SummarizeTestimonialsInputSchema,
    outputSchema: SummarizeTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

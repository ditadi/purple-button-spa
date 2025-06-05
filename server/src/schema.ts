
import { z } from 'zod';

// Simple click event schema
export const clickEventSchema = z.object({
  id: z.number(),
  timestamp: z.coerce.date(),
  message: z.string()
});

export type ClickEvent = z.infer<typeof clickEventSchema>;

// Input schema for recording button clicks
export const recordClickInputSchema = z.object({
  message: z.string().default('Button clicked!')
});

export type RecordClickInput = z.infer<typeof recordClickInputSchema>;

// Response schema for button click
export const clickResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  timestamp: z.coerce.date()
});

export type ClickResponse = z.infer<typeof clickResponseSchema>;

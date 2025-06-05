
import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const clickEventsTable = pgTable('click_events', {
  id: serial('id').primaryKey(),
  message: text('message').notNull(),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
});

// TypeScript type for the table schema
export type ClickEvent = typeof clickEventsTable.$inferSelect;
export type NewClickEvent = typeof clickEventsTable.$inferInsert;

// Export all tables for proper query building
export const tables = { clickEvents: clickEventsTable };

import {
  date,
  pgEnum,
  pgTable,
  varchar,
  integer,
  timestamp,
  text,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("jobType", [
  "Applied",
  "Interview",
  "Technical Round",
  "HR Round",
  "Offer",
  "Rejected",
  "Withdrawn",
]);

export const jobTypeEnum = pgEnum("jobType", [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
]);

export const applicationsTable = pgTable("applications", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  company: varchar({ length: 255 }).notNull(),
  position: varchar({ length: 255 }).notNull(),
  location: varchar({ length: 255 }).notNull(),
  status: statusEnum().default("Applied"),
  jobType: jobTypeEnum(),
  salary: integer().notNull(),
  appliedDate: date(),
  notes: text(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp(),
});

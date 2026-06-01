import { z } from 'zod';

/** Common, reusable Zod schemas tuned for MGM Laboratory products. */

export const emailSchema = z
  .string()
  .trim()
  .min(1, 'Email is required')
  .email('Enter a valid email address');

export const urlSchema = z
  .string()
  .trim()
  .min(1, 'URL is required')
  .url('Enter a valid URL');

export const phoneSchema = z
  .string()
  .trim()
  .min(7, 'Phone number is too short')
  .regex(/^[+\d][\d\s()-]+$/, 'Enter a valid phone number');

export const slugSchema = z
  .string()
  .trim()
  .min(1, 'Slug is required')
  .regex(/^[a-z0-9-]+$/, 'Use lowercase letters, numbers, and hyphens only');

export const passwordSchema = z
  .string()
  .min(8, 'At least 8 characters')
  .regex(/[a-z]/, 'Must include a lowercase letter')
  .regex(/[A-Z]/, 'Must include an uppercase letter')
  .regex(/\d/, 'Must include a number');

export const nonEmptyString = (label = 'This field') =>
  z.string().trim().min(1, `${label} is required`);

export { z };

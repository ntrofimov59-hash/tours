import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';


// Коллекция услуг
const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string().optional(),
    images: z.array(z.string()).optional(),
    features: z.array(z.string()).optional(),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

// Коллекция портфолио (мероприятия)
const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    eventType: z.enum(['wedding', 'corporate', 'private', 'other']),
    date: z.date(),
    images: z.array(z.string()),
    services: z.array(z.string()), // ссылки на услуги по slug
    description: z.string().optional(),
  }),
});

// Коллекция отзывов
const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    text: z.string(),
    rating: z.number().min(1).max(5).default(5),
    date: z.date().optional(),
    event: z.string().optional(), // название мероприятия
  }),
});

export const collections = { services, portfolio, testimonials };
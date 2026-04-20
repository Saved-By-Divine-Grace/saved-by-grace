import { defineField, defineType } from "sanity"

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "type",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Sunday Service", value: "sunday-service" },
          { title: "Conference", value: "conference" },
          { title: "Prayer Meeting", value: "prayer-meeting" },
          { title: "Special Programme", value: "special-programme" },
          { title: "Midweek Service", value: "midweek-service" },
          { title: "Youth Programme", value: "youth-programme" },
          { title: "Outreach", value: "outreach" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date (optional — for multi-day events)",
      type: "datetime",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g. SBDG Headquarters, Ore / Light Nation Auditorium",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Flyer / Banner Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Featured Event",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Date, Soonest First",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image",
    },
  },
})
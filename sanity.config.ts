import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { presentationTool } from "sanity/presentation"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemaTypes"

export default defineConfig({
  name: "saved-by-divine-grace",
  title: "Saved By Divine Grace",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.NODE_ENV === "production"
          ? "https://sbdgministries.org"
          : "http://localhost:3000",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
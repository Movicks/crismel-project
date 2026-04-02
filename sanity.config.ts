import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "studio",
  title: "Sanity Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "projectId",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [],
  },
});

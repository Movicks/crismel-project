'use client';
import { Studio } from "sanity";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <Studio config={config} />;
}

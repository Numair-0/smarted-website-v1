import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.navbarName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#181A4A",
    icons: [
      {
        src: "/images/logo-mark.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { contentService } from "@/services/content.service";
import { ogStyles } from "@/styles/opengraph";

export const runtime = "nodejs";
export const contentType = "image/png";

export default async function OG() {
  const globalContent = await contentService.getGlobalContent();
  const fs = await import("fs");
  const path = await import("path");
  const sfPro = fs.readFileSync(
    path.join(process.cwd(), "app/fonts/SF-Pro-Display-Medium.otf")
  );

  return new ImageResponse(
    (
      <div style={ogStyles.container}>
        <img
          src={`data:image/png;base64,${fs.readFileSync(
            path.join(process.cwd(), "public/logo.png")
          ).toString("base64")}`}
          alt={globalContent.logoAlt}
          tw="w-20 h-20 mb-4 opacity-95"
        />
        <h1 style={ogStyles.title}>
          {globalContent.projectName}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "SF Pro",
          data: sfPro,
        },
      ],
    }
  );
}

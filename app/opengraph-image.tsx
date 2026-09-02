/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

import { GLOBAL_CONTENT } from "@/data/index";

export const runtime = "nodejs";
export const alt = GLOBAL_CONTENT.metadata.title;
export const contentType = "image/png";

import { ogStyles } from "@/styles/opengraph";

export default async function OG() {
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
          alt={GLOBAL_CONTENT.logoAlt}
          tw="w-20 h-20 mb-4 opacity-95"
        />
        <h1 style={ogStyles.title}>
          {GLOBAL_CONTENT.projectName}
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
    },
  );
}

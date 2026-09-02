import { DEPLOY_URL } from "@/lib/constants";
import Image from "next/image";
import WebVitals from "./web-vitals";
import { Component, Zap, Rocket, Lock, Code } from "lucide-react";
import { contentService } from "@/services/content.service";

export async function getFeaturesData() {
  const content = await contentService.getFeaturesContent();

  return content.map((feature) => {
    let demo = null;
    let icon = null;
    switch (feature.id) {
      case "components":
        icon = <Component className="h-6 w-6 text-gray-500" />;
        break;
      case "performance":
        demo = <WebVitals />;
        icon = <Zap className="h-6 w-6 text-yellow-500" />;
        break;
      case "deploy":
        demo = (
          <a href={DEPLOY_URL}>
            <Image
              src="https://vercel.com/button"
              alt={feature.alt ?? ""}
              width={120}
              height={30}
              unoptimized
            />
          </a>
        );
        icon = <Rocket className="h-6 w-6 text-blue-500" />;
        break;
      case "auth":
        demo = (
          <div className="flex items-center justify-center space-x-20">
            <Image alt={feature.alt ?? ""} src="/clerk.svg" width={50} height={50} />
          </div>
        );
        icon = <Lock className="h-6 w-6 text-green-500" />;
        break;
      case "hooks":
        demo = (
          <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
            {(feature.list ?? []).map((item) => (
              <span key={item} className="font-mono font-semibold text-gray-600 dark:text-gray-400">{item}</span>
            ))}
          </div>
        );
        icon = <Code className="h-6 w-6 text-purple-500" />;
        break;
    }

    return {
      ...feature,
      demo,
      icon,
      large: feature.large ?? false,
    };
  });
}

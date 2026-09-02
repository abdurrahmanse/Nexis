import { AnnouncementBadge } from "@/components/shared/badges/announcement-badge";
import { Twitter } from "@/components/shared/icons";
import { ChevronRight, Sparkles } from "lucide-react";
import { DescriptionText } from "@/components/shared/typography/description-text";
import { TitleText } from "@/components/shared/typography/title-text";
import { GLOBAL_CONTENT, HERO_CONTENT } from "@/data/index";
import { HeroCta } from "./hero-cta";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 pt-10">
      <AnnouncementBadge
        href={GLOBAL_CONTENT.social.twitterAnnouncement}
        icon={<Twitter className="h-5 w-5 text-[#1d9bf0]" />}
        text={HERO_CONTENT.announcement}
        rightIcon={<ChevronRight className="h-4 w-4" />}
      />
      <TitleText>
        {HERO_CONTENT.title}
      </TitleText>
      <DescriptionText>
        {HERO_CONTENT.description}
      </DescriptionText>
      <HeroCta />
    </section>
  );
}

import { AnnouncementBadge } from "@/components/shared/badges/announcement-badge";
import { Twitter } from "@/components/shared/icons";
import { ChevronRight } from "lucide-react";
import { DescriptionText } from "@/components/shared/typography/description-text";
import { TitleText } from "@/components/shared/typography/title-text";
import { contentService } from "@/services/content.service";
import { HeroCta } from "./hero-cta";

export async function HeroSection() {
  const globalContent = await contentService.getGlobalContent();
  const heroContent = await contentService.getHeroContent();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 pt-10">
      <AnnouncementBadge
        href={globalContent.social.twitterAnnouncement}
        icon={<Twitter className="h-5 w-5 text-[#1d9bf0]" />}
        text={heroContent.announcement}
        rightIcon={<ChevronRight className="h-4 w-4" />}
      />
      <TitleText>
        {heroContent.title}
      </TitleText>
      <DescriptionText>
        {heroContent.description}
      </DescriptionText>
      <HeroCta />
    </section>
  );
}

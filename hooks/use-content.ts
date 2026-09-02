import { useQuery } from "@tanstack/react-query";
import {
  globalContentQueryOptions,
  navbarContentQueryOptions,
  heroContentQueryOptions,
  modalContentQueryOptions,
  componentGridContentQueryOptions,
  newsletterContentQueryOptions,
} from "@/queries/content.queries";

export function useGlobalContent() {
  return useQuery(globalContentQueryOptions());
}

export function useNavbarContent() {
  return useQuery(navbarContentQueryOptions());
}

export function useHeroContent() {
  return useQuery(heroContentQueryOptions());
}

export function useModalContent() {
  return useQuery(modalContentQueryOptions());
}

export function useComponentGridContent() {
  return useQuery(componentGridContentQueryOptions());
}

export function useNewsletterContent() {
  return useQuery(newsletterContentQueryOptions());
}

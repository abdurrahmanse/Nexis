"use client";

import useMediaQuery from "@/lib/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

export default function Modal({
  children,
  className,
  showModal,
  setShowModal,
}: {
  children: React.ReactNode;
  className?: string;
  showModal: boolean;
  setShowModal: (open: boolean) => void;
}) {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer open={showModal} onOpenChange={setShowModal}>
        <DrawerContent className={cn("pb-8", className)}>
          {children}
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
        className={cn("p-0 overflow-hidden", className)}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}

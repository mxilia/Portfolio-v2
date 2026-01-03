import { cn } from "@/lib/utils";

type ContactSectionProps = {
  className?: string;
};

export const ContactSection = ({ className }: ContactSectionProps) => {
  return (
    <div className={cn("", className)}>
      <h1
        className="text-xl pb-1 scroll-mt-20 border-b border-zinc-500 mb-3 font-medium"
        id="contact"
      >
        Contact
      </h1>
      <p className="whitespace-pre-line text-sm text-neutral-300">
        • Email: ravintkosol@gmail.com
      </p>
    </div>
  );
};

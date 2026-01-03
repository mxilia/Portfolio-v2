import { paths } from "@/config/path";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { FileText } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <a href="/resume.pdf" download="ravint_resume.pdf">
      <button className="inline-flex mr-1 text-neutral-300 text-sm hover:bg-fuchsia-950/20 hover:border-fuchsia-600 transition-colors duration-300 font-medium items-center gap-1 px-2 p-1.5 border border-zinc-600 rounded-lg">
        <FileText className="w-5 h-5" />
        <div>Resume</div>
      </button>
    </a>
  );
};

type IconsSectionProps = {
  className?: string;
};

export const IconsSection = ({ className }: IconsSectionProps) => {
  return (
    <div className={cn("w-full inline-flex gap-1 items-center", className)}>
      <ResumeButton />
      <Link
        href={paths.external.github.getHref()}
        target="_blank"
        className="p-2 hover:bg-fuchsia-800/30 transition-colors duration-300  rounded-md"
      >
        <Github className="w-6 h-6 invert-10" />
      </Link>
      <Link
        href={paths.external.linkedin.getHref()}
        target="_blank"
        className="p-2 hover:bg-fuchsia-800/30 transition-colors duration-300 rounded-md"
      >
        <Linkedin className="w-6 h-6 invert-20" />
      </Link>
    </div>
  );
};

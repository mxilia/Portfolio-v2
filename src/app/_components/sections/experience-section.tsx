import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SingleExperience = {
  logoSrc: string;
  title: string;
  subtitle?: string;
  timeRange?: string;
  children?: React.ReactNode;
  className?: string;
};

const SingleExperience = ({
  logoSrc,
  title,
  subtitle,
  timeRange,
  children,
  className,
}: SingleExperience) => {
  return (
    <div
      className={cn(
        "inline-flex gap-2 w-full p-2 transition-colors duration-200 rounded-lg hover:bg-fuchsia-700/20",
        className
      )}
    >
      <Image
        src={logoSrc}
        height={48}
        width={48}
        className="rounded-full w-12 h-12 border-zinc-800 border"
        alt="experience img"
      />
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div>
            <div>{title}</div>
            <div className="text-sm text-neutral-500 mb-1">{subtitle}</div>
          </div>
          <div className="min-w-20 text-right text-sm [@media(min-width:391px)]:min-w-30 pt-1.5 text-neutral-300">
            {timeRange}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

type ExperienceSectionProps = {
  className?: string;
};

export const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  return (
    <div className={cn("w-full h-fit scroll-mt-20", className)} id="experience">
      <Tabs defaultValue="education" className="w-full text-neutral-200">
        <TabsList className="bg-fuchsia-800/30">
          <TabsTrigger
            value="education"
            className="hover:border-zinc-300/30 data-[state=active]:border-zinc-300/30 data-[state=active]:text-fuchsia-300 transition-all duration-200 text-fuchsia-800/40 data-[state=active]:bg-zinc-400/20"
          >
            Education
          </TabsTrigger>
          <TabsTrigger
            value="work"
            className="ml-1 hover:border-zinc-300/30 data-[state=active]:border-zinc-300/30 data-[state=active]:text-fuchsia-300 transition-all duration-200 text-fuchsia-800/40 data-[state=active]:bg-zinc-400/20"
          >
            Work
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="education"
          className="p-2 border inline-flex flex-col gap-5 rounded-xl border-fuchsia-800/30"
        >
          <SingleExperience
            logoSrc="/logo/education/chula_logo.png"
            title="Chulalongkorn University"
            subtitle="B.Eng. Computer Engineering"
            timeRange="2024 - Present"
          ></SingleExperience>
          <SingleExperience
            logoSrc="/logo/education/cru_logo.png"
            title="Chonradsadornumrung School"
            subtitle="Highschool (SMTE Program)"
            timeRange="2021 - 2024"
          ></SingleExperience>
          <SingleExperience
            logoSrc="/logo/education/cru_logo.png"
            title="Chonradsadornumrung School"
            subtitle="Middleschool (SMTE Program)"
            timeRange="2018 - 2021"
          ></SingleExperience>
        </TabsContent>

        <TabsContent
          value="work"
          className="p-3 border rounded-xl border-fuchsia-800/30"
        >
          <div className="w-full h-full inline-flex items-center justify-center text-sm text-neutral-400">
            No work currently.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

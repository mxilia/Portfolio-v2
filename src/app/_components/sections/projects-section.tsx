import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge/badge";
import fs from "fs";
import path from "path";
import { readImages } from "@/lib/read-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton/skeleton";

type ProjectImgProps = {
  assetsDir: string;
};

const ProjectImg = async ({ assetsDir }: ProjectImgProps) => {
  const images = await readImages(
    assetsDir,
    path.join(process.cwd(), `public${assetsDir}`)
  );
  return (
    <div>
      {images && images.length > 0 ? (
        <Carousel>
          <CarouselContent>
            {images.map((e) => (
              <CarouselItem key={e.name} className="basis-full shrink-0">
                <Image
                  src={e.src}
                  alt={`${e.name} img`}
                  className="object-contain select-none bg-neutral-900/80 w-full h-35 rounded-xl border border-zinc-800"
                  width={1000}
                  height={400}
                  quality={100}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 w-5 h-5 bg-fuchsia-950 text-fuchsia-400 border-fuchsia-700/20 hover:bg-fuchsia-700" />
          <CarouselNext className="w-5 h-5 -right-2 bg-fuchsia-950 text-fuchsia-400 border-fuchsia-700/20 hover:bg-fuchsia-700" />
        </Carousel>
      ) : (
        <div className="w-full h-35 inline-flex items-center justify-center text-sm mb-2 text-neutral-500 bg-neutral-900/80 rounded-xl">
          {" "}
          no img
        </div>
      )}
    </div>
  );
};

type ProjectProps = {
  name: string;
  assetsDir?: string;
  children?: React.ReactNode;
  tags?: string[];
};

const Project = ({ name, assetsDir, children, tags }: ProjectProps) => {
  return (
    <div className="p-3 rounded-lg border bg-linear-to-br to-violet-900/10 from-fuchsia-900/20 hover:border-fuchsia-600/70 border-fuchsia-700/30 hover:scale-[102%] transition-all duration-200">
      {assetsDir ? (
        <Suspense fallback={<Skeleton className="w-full h-35" />}>
          <ProjectImg assetsDir={assetsDir} />
        </Suspense>
      ) : (
        <div className="w-full h-35 inline-flex items-center justify-center text-sm mb-2 text-neutral-500 bg-neutral-900/50 rounded-xl">
          {" "}
          no img
        </div>
      )}
      <div className="text-neutral-300 border-b mt-1 mb-1 border-fuchsia-600/40">
        {name}
      </div>
      {children}
      <div className="inline-flex mt-5 gap-1 flex-wrap">
        {tags?.map((e) => (
          <Badge
            key={e}
            variant="outline"
            className="text-fuchsia-400 border-fuchsia-400"
          >
            {e}
          </Badge>
        ))}
      </div>
    </div>
  );
};

type ProjectsSectionProps = {
  className?: string;
};

export const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  return (
    <div className={cn("", className)}>
      <h1
        className="text-xl pb-1 scroll-mt-20 border-b border-zinc-500 mb-3 font-medium"
        id="project"
      >
        Projects
      </h1>
      <div className="grid [@media(min-width:510px)]:grid-cols-2 grid-cols-1 gap-1 row-start-auto">
        <Project
          name="Quonet - Post Forum Website"
          assetsDir="/project/quonet"
          tags={[
            "Go",
            "Fiber v2",
            "GORM",
            "Next.js",
            "Typescript",
            "Supabase",
            "Redis",
            "PostgreSQL",
            "AWS",

            "GitHub Actions",
            "Docker",
          ]}
        >
          <p className="whitespace-pre-line text-sm text-neutral-400 mb-1">
            A full-stack forum application where users can create, read, like,
            and delete posts, with built-in moderation tools and an admin
            dashboard.
          </p>
          <div className="inline-flex w-full justify-between">
            <a target="_blank" href="https://www.quonet.dev">
              <div className="text-xs text-blue-400 hover:underline">
                Click here to visit
              </div>
            </a>
            <a target="_blank" href="https://github.com/mxilia/Quonet-backend">
              <div className="text-xs text-fuchsia-800 hover:underline">
                Learn more
              </div>
            </a>
          </div>
        </Project>
      </div>
    </div>
  );
};

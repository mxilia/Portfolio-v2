import { Badge } from "@/components/ui/badge/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ProfileSectionProps = {
  className?: string;
};

export const ProfileSection = ({ className }: ProfileSectionProps) => {
  return (
    <div
      className={cn(
        "inline-flex flex-col items-center w-full border border-zinc-800 rounded-lg scroll-mt-20",
        className
      )}
      id="about"
    >
      <div className="inline-flex items-center rounded-t-lg w-full gap-4 p-3 bg-linear-to-br to-violet-800/10 from-fuchsia-900/30">
        <Image
          src="/profile_crop.jpg"
          height={72}
          width={72}
          className="h-18 w-18 rounded-full object-cover border border-zinc-700"
          alt="profile"
        />
        <div className="inline-flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Ravint Kosol</h1>
          <div className="inline-flex gap-1">
            <Badge
              variant="default"
              className="text-neutral-300 border-neutral-400"
            >
              Fullstack Developer
            </Badge>
            <Badge
              variant="outline"
              className="text-green-400 border-green-400"
            >
              Open to work
            </Badge>
          </div>
        </div>
      </div>
      <div className="w-full inline-flex flex-col gap-2 p-3">
        <h1 className="text-neutral-200 border-neutral-500 pb-1 border-b">
          Bio
        </h1>
        <div className="text-sm inline-flex flex-col gap-1 text-neutral-300 w-full">
          <p className="whitespace-pre-line">🏠 From Bangkok, Thailand.</p>
          <p className="whitespace-pre-line">
            🥉 <span className="font-medium">Bronze Medalist</span> in 20th
            Thailand Olympiad in Informatics (TOI20).
          </p>
          <p className="whitespace-pre-line">
            {" "}
            📖 Currently studying Computer Engineering at{" "}
            <span className="font-medium">Chulalongkorn University.</span>
          </p>
          <p className="whitespace-pre-line">
            {" "}
            💡 Interested in{" "}
            <span className="font-medium">Fullstack development</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

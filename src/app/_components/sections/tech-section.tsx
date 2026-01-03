import Image from "next/image";
import { cn } from "@/lib/utils";

type TechBoxProps = {
  name: string;
  src: string;
};

const TechBox = ({ name, src }: TechBoxProps) => {
  return (
    <div className="inline-flex flex-col gap-1 items-center">
      <Image
        src={src}
        height={32}
        width={32}
        alt={`${name}s image`}
        className="w-8 h-8 rounded-lg"
      />
      <div className="text-sm text-neutral-300">{name}</div>
    </div>
  );
};

type TechContainerProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

const TechContainer = ({ title, children, className }: TechContainerProps) => {
  return (
    <div className={cn("border rounded-lg border-zinc-600 p-2", className)}>
      <div className="w-full text-center mb-2 text-neutral-200">{title}</div>
      {children}
    </div>
  );
};

type TechSectionProps = {
  className?: string;
};

export const TechSection = ({ className }: TechSectionProps) => {
  return (
    <div className={cn("w-full", className)}>
      <h1 className="text-xl pb-1 border-b border-zinc-500 mb-3 font-medium">
        Tech Stack
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <TechContainer title="Frontend" className="">
          <div className="w-full inline-flex gap-3 flex-wrap">
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
          </div>
        </TechContainer>
        <TechContainer title="Backend" className="">
          <div className="w-full inline-flex gap-3 flex-wrap">
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
          </div>
        </TechContainer>
        <TechContainer title="Frontend" className="col-span-2">
          <div className="w-full inline-flex gap-3 flex-wrap">
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
            <TechBox name="Next.js" src="/temp.png" />
          </div>
        </TechContainer>
      </div>
    </div>
  );
};

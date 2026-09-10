"use client";

import { cn } from "@/lib/utils";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

type ContactSectionProps = {
  className?: string;
};

export const ContactSection = ({ className }: ContactSectionProps) => {
  const [copied, setCopied] = useState(false);
  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className={cn("", className)}>
      <h1
        className="text-xl pb-1 scroll-mt-20 border-b border-zinc-500 mb-3 font-medium"
        id="contact"
      >
        Contact
      </h1>
      <div className="inline-flex w-full flex-col gap-1">
        <div className="inline-flex items-center gap-1 text-sm text-neutral-300">
          <Mail className="w-4 h-4 mr-1" />
          <div>ravintkosol@gmail.com</div>
          <div
            onClick={() => {
              copy("ravintkosol@gmail.com");
            }}
            className="p-1 rounded-sm duration-300 transition-colors hover:bg-fuchsia-300/20"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </div>
        </div>
        <div className="inline-flex items-center gap-2 text-sm text-neutral-300">
          <Github className="w-4 h-4" />
          <a href="https://github.com/mxilia" target="_blank">
            <div className="text-blue-400 hover:underline">
              https://github.com/mxilia
            </div>
          </a>
        </div>
        <div className="inline-flex items-center gap-2 text-sm text-neutral-300">
          <Linkedin className="w-4 h-4" />
          <a href="https://github.com/mxilia" target="_blank">
            <div className="text-blue-400 hover:underline">
              https://www.linkedin.com/in/ravintkosol
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

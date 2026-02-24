import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/Tooltip";
import {cn} from "@/lib/utils";
import Link from "next/link";
import SocialLinks from "@/components/socialButtons";
import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
    <TooltipProvider>
      
      
      <main className="w-full max-w-2xl mx-auto px-6 py-12 sm:py-20">
        <div className="flex flex-col items-start gap-8">
          <div className="text-foreground text-2xl font-light flex flex-col items-start">
            <span className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              Hi, my name is Anton Kravchenko
              <img
                src="/image.jpg"
                alt="Avatar"
                className="w-12 h-12 rounded-full border border-border"
              />
            </span>
            <span className="text-lg text-muted-foreground mb-6 mt-1">
              From Poland, Poznan.
            </span>
            <span className="font-light inline-flex items-start flex-col sm:flex-row sm:items-center gap-3 mb-4">
              I build clean, calm interfaces and tools
             <Tooltip key='auth'>
								<TooltipTrigger asChild>
									<a href='https://auth.tosha-code.xyz/' target="_blank" rel="noreferrer">
									<img
                    src="/auth-demo.svg"
                    alt="Auth"
                    style={{
                      objectFit: "cover"
                    }}
                    className={cn(
                      "w-10 h-10 rounded-xl cursor-pointer transition-all duration-200 relative",
                      "hover:rotate-0 hover:translate-x-0 hover:z-50",
                    )}
                  />
									</a>
								</TooltipTrigger>
								<TooltipContent className="bg-black text-white border-none rounded-xl py-1 px-2.5 text-xs">
									Auth made easy
								</TooltipContent>
							</Tooltip>
            </span>
            <span className="font-light inline-flex items-start flex-col sm:flex-row sm:items-center gap-4">
              also I post regularly
              <SocialLinks />
            </span>
          </div>

          <div className="w-full border-t border-dotted border-border/60" />

          <div className="flex flex-col items-start gap-3 text-base">
            <span>
              Need dev/design help for your company?{" "}
              <Link
                href="https://tally.so/r/b57ML2"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Click here.
              </Link>
            </span>
            <span>
              Want to sponsor my videos?{" "}
              <Link
                href="https://tally.so/r/pbKNWZ"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Click here.
              </Link>
            </span>
            <span>
              Want to say hi?{" "}
              <Link
                href="mailto:toshacancode@outlook.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Click here.
              </Link>
            </span>
          </div>
        </div>
      </main>
    </TooltipProvider>
    </div>
  );
};

export default Portfolio;

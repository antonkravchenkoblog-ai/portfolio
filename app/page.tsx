import SocialLinks from "@/components/socialButtons";
import {Badge} from "@/components/ui/Badge";
import Link from "next/link";
import React from 'react';
import { Github, Twitter, Linkedin, ExternalLink, ShieldCheck, Zap, Code2, MapPinIcon } from 'lucide-react';

import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Separator } from "@/components/ui/separator";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/3 flex flex-col gap-6">
            <div className="relative w-32 h-32 rounded-full bg-muted/90 from-primary to-accent p-1">
              <Avatar className="w-full h-full border-4 border-background bg-card">
                <AvatarImage src="/image.jpg" alt="Developer" className="object-cover" />
                <AvatarFallback className="bg-secondary text-muted-foreground font-bold">AK</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Anton Kravchenko</h1>
              <div className="text-muted-foreground flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <MapPinIcon size={16} className="text-muted-foreground" />
                  <span>Poznań, Poland</span>
                </div>
                <span className="text-muted-foreground/30">|</span>
                <span className="font-medium text-foreground/90">Fullstack Developer</span>
              </div>
            </div>
            <div className=" flex flex-col gap-3 text-sm md:text-base">
              <Link
                className="text-foreground  rounded-full justify-start"
                href="/build"
              >
                Need <b className='text-white transition-all duration-200 bg-primary/60 hover:bg-primary/80 p-0.5 rounded-xl px-2'>build</b> something? Click here.
              </Link>
              <Link
                className="text-foreground  rounded-full justify-start"
                href="/sponsorship"
              >
                Want to <b className='text-white transition-all duration-200 bg-primary/60 hover:bg-primary/80 p-0.5 rounded-xl px-2'>sponsor</b> my videos? Click here.
              </Link>
            </div>
            <Separator className="bg-border" />
            <SocialLinks />
          </div>
          
          <div className="md:w-2/3 space-y-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Featured Project</h2>
            
            <Card className="group relative border-border rounded-2xl shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden bg-card">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none" />
              
              <CardContent className="p-8 relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/20">
                    <ShieldCheck size={32} />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-secondary text-foreground hover:bg-accent px-4 py-1.5 rounded-full text-sm font-bold border border-border"
                  >
                    $5 / lifetime
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Ultimate Auth Boilerplate</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Fully ready authentication (Google, Email) that you can implement in your project.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-secondary/40 p-4 rounded-xl border border-border">
                    <div className="flex items-center gap-2 text-[#C6D8AF] font-bold mb-1">
                      <Zap size={16} />
                      <span>5 Hours</span>
                    </div>
                    <p className="text-sm text-muted-foreground">setup from scratch</p>
                  </div>
                  <div className="bg-secondary/40 p-4 rounded-xl border border-border">
                    <div className="flex items-center gap-2 text-[#C6D8AF] font-bold mb-1">
                      <Code2 size={16} />
                      <span>1 copy-paste</span>
                    </div>
                    <p className="text-sm text-muted-foreground">and you're done</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-full transition-transform active:scale-[0.98] shadow-md text-base gap-2"
                  >
                    Save 5 hours for $5
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 px-6 border-border bg-transparent rounded-full font-medium hover:bg-accent hover:text-foreground transition-colors text-base gap-2"
                  asChild
                  >
                      <Link
                          className="flex items-center gap-1"
                        href="https://auth.tosha-code.xyz/auth/login">
                        Demo <ExternalLink size={18} />
                        </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary rounded-2xl border border-border shadow-none overflow-hidden">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-1 text-foreground">Need help with integration?</h4>
                  <p className="text-muted-foreground">Hit me up if you want a custom feature.</p>
                </div>
                
                <Link
                  className="bg-accent justify-center items-center flex hover:bg-accent/80 text-foreground h-12 px-6 rounded-full font-bold text-base transition-colors"
                  href='mailto:toshacancode@outlook.com'
                >
                    Get in touch
                </Link>
              </CardContent>
            </Card>
          </div>
        
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
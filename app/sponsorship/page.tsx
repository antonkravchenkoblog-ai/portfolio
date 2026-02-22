"use client";

import {OptionButton} from "@/components/optionButton";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button, } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {Select, SelectTrigger, SelectContent, SelectItem, SelectValue} from "@/components/ui/Select";
export default function Page() {
	const [companyType, setCompanyType] = useState("");
	
	return (
		<div className="min-h-screen bg-background text-foreground p-6 md:p-12">
			<div className="max-w-2xl mx-auto space-y-10">
				
				<div className="space-y-6">
					<Avatar className="w-16 h-16">
						<AvatarImage src="/image.jpg"
						 style={{ objectFit: "cover" }}
						             alt="Profile" />
						<AvatarFallback className="bg-secondary">AK</AvatarFallback>
					</Avatar>
					
					<h1 className="text-4xl font-extrabold tracking-tight">
						Sponsorship request
					</h1>
					
					<p className="text-muted-foreground text-lg leading-relaxed max-w-prose">
						If you are interested in sponsoring a video (YouTube, Instagram, etc...) or a series of videos please fill out the form below :)
					</p>
				</div>
				
				<form  className="space-y-10">
					
					<div className="space-y-6">
						<div className="space-y-4">
							<Label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider">
								What is your name? <span className="text-destructive">*</span>
							</Label>
							<Input
								id="name"
								name="name"
								required
								placeholder="John Smith"
								className="max-w-md mt-2 border-border bg-background"
							/>
						</div>
						
						<div className="space-y-2">
							<Label htmlFor="company" className="text-sm font-semibold uppercase tracking-wider">
								What is your company name? <span className="text-destructive">*</span>
							</Label>
							<Input
								id="company"
								name="company"
								required
								placeholder="Acme Ltd."
								className="max-w-md mt-2 border-border bg-background "
							/>
						</div>
						
						<div className="space-y-2">
							<Label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider">
								What is your email address? <span className="text-destructive">*</span>
							</Label>
							<Input
								id="email"
								name="email"
								type="email"
								required
								placeholder="john.smith@acme.co.uk"
								className="max-w-md mt-2 border-border bg-background "
							/>
						</div>
						
						<div className="space-y-2">
							<Label htmlFor="sponsorshipType" className=" text-sm font-semibold uppercase tracking-wider">
								What type of sponsorship are you looking to do? <span className="text-destructive">*</span>
							</Label>
							<div className='mt-2'>
								<Select name="sponsorshipType" required>
									<SelectTrigger className="max-w-md border-border bg-background ">
										<SelectValue placeholder="Select type..." />
									</SelectTrigger>
									<SelectContent className=" bg-secondary border-border">
										<SelectItem value="youtube">YouTube Video</SelectItem>
										<SelectItem value="instagram">Instagram Reel</SelectItem>
										<SelectItem value="series">Series of Videos</SelectItem>
										<SelectItem value="other">Other</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
					
					<div className="space-y-4">
						<Label className="text-sm  font-semibold uppercase tracking-wider">
							What type of company are you?
						</Label>
						<div className="flex flex-col mt-2 gap-3">
							<OptionButton
								letter="A"
								label="Physical good (example: standing desk, energy drink)"
								selected={companyType === 'A'}
								onClick={() => setCompanyType('A')}
							/>
							<OptionButton
								letter="B"
								label="B2C Software"
								selected={companyType === 'B'}
								onClick={() => setCompanyType('B')}
							/>
							<OptionButton
								letter="C"
								label="B2B Software"
								selected={companyType === 'C'}
								onClick={() => setCompanyType('C')}
							/>
							<OptionButton
								letter="D"
								label="Other"
								selected={companyType === 'D'}
								onClick={() => setCompanyType('D')}
							/>
						</div>
					</div>
					
					<Button
						type="submit"
						className="bg-foreground text-background hover:bg-foreground/90 font-bold px-8 py-6 text-base transition-all  group"
					>
						{true ? "Sending..." : "Submit"}
						<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Button>
				</form>
			</div>
		</div>
	);
}
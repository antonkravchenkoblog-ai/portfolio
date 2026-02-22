"use client";

import {OptionButton} from "@/components/optionButton";
import {Input} from "@/components/ui/Input";
import {Label} from "@/components/ui/Label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/Select";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button, } from "@/components/ui/Button";



export default function Page() {
	const [companyType, setCompanyType] = useState("");
	const [budget, setBudget] = useState("");
	
	return (
		<div className="min-h-screen bg-background text-foreground p-6 md:p-12 font-sans">
			<div className="max-w-2xl mx-auto space-y-8">
				
				<div className="space-y-6">
					<Avatar className="w-16 h-16">
						<AvatarImage src="/image.jpg"
						             style={{ objectFit: "cover" }}
						             alt="Profile" />
						<AvatarFallback className="bg-muted text-muted-foreground">AK</AvatarFallback>
					</Avatar>
					
					<h1 className="text-4xl font-extrabold tracking-tight">Need help building something?</h1>
					<p className="text-muted-foreground leading-relaxed">
						Aside from building my own apps, I help other companies build products in a few ways...
					</p>
				</div>
				
				<form className="space-y-8" >
					<div className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="name" className="text-base font-semibold">What is your name? <span className="text-destructive">*</span></Label>
							<Input id="name" name="name" required placeholder="John Smith" className="max-w-md bg-background" />
						</div>
						
						<div className="space-y-2">
							<Label htmlFor="company" className="text-base font-semibold">What is your company name? <span className="text-destructive">*</span></Label>
							<Input id="company" name="company" required placeholder="Acme Ltd." className="max-w-md bg-background border-input" />
						</div>
						
						<div className="space-y-2">
							<Label htmlFor="email" className="text-base font-semibold">What is your email address? <span className="text-destructive">*</span></Label>
							<Input id="email" name="email" type="email" required placeholder="name@company.com" className="max-w-md bg-background border-input" />
						</div>
					</div>
					
					<div className="space-y-3">
						<Label className="text-base font-semibold">What type of company are you?</Label>
						<div className="flex flex-col gap-2">
							<OptionButton letter="A" label="Pre-revenue startup/company" selected={companyType === 'A'} onClick={() => setCompanyType('A')} />
							<OptionButton letter="B" label="Startup/company with revenue" selected={companyType === 'B'} onClick={() => setCompanyType('B')} />
							<OptionButton letter="C" label="Bootstrapped startup" selected={companyType === 'C'} onClick={() => setCompanyType('C')} />
							<OptionButton letter="D" label="Other" selected={companyType === 'D'} onClick={() => setCompanyType('D')} />
						</div>
					</div>
					
					<div className="space-y-3">
						<Label className="text-base font-semibold">What is your budget?</Label>
						<div className="flex flex-col gap-2">
							<OptionButton letter="A" label="Fixed amount (less than $20K)" selected={budget === 'A'} onClick={() => setBudget('A')} />
							<OptionButton letter="B" label="Fixed amount (more than $20K)" selected={budget === 'B'} onClick={() => setBudget('B')} />
						</div>
					</div>
					
					<Button type="submit"  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-6 text-base">
						{true ? "Sending..." : "Submit"} <ArrowRight className="ml-2 w-5 h-5" />
					</Button>
				</form>
			</div>
		</div>
	);
}

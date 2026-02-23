import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/Tooltip";
import { cn } from "@/lib/utils";
//
//https://www.linkedin.com/in/anton-kravchenko-303bbb3b2/
// https://x.com/AntonKravc39795
//https://www.tiktok.com/@toshacancode
// https://www.youtube.com/channel/UCSljlN3tEbZqlTt8G_UB1fw
const socialLinks = [
	{
		name: "Twitter",
		handle: "@AntonKravc39795",
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg",
		link: "https://twitter.com/AntonKravc39795"
	},
	{
		name: "Instagram",
		handle: "@toshacancode",
		link: "https://www.instagram.com/toshacancode/",
		icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
	},
	{
		name: "TikTok",
		handle: "@toshacancode",
		link: "https://www.tiktok.com/@toshacancode",
		icon: "https://thumbs.dreamstime.com/b/tiktok-social-media-app-icon-tiktok-social-media-app-icon-square-shape-vector-illustration-269930887.jpg",
	},
	{
		name: "LinkedIn",
		handle: "Anton Kravchenko",
		link: "https://www.linkedin.com/in/anton-kravchenko-303bbb3b2/",
		icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s",
	},
	{
		name: "YouTube",
		handle: "Tosha Can Code",
		link: "https://www.youtube.com/channel/UCSljlN3tEbZqlTt8G_UB1fw",
		icon: "https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_youtube-512.png",
	}
];

export default function SocialLinks() {
	return (
		<div className="">
			<TooltipProvider delayDuration={100}>
				<div className=" items-start sm:items-center gap-2">
					<div className="flex">
						{socialLinks.map((social, index) => (
							<Tooltip key={social.name}>
								<TooltipTrigger asChild>
									<a href={social.link} target="_blank" rel="noreferrer">
									<img
										src={social.icon}
										alt={social.name}
										className={cn(
											"w-10 h-10 rounded-xl cursor-pointer transition-all duration-200 relative",
											index === 0 ? "mr-2 -ml-2" : "mr-2",
											"hover:rotate-0 hover:translate-x-0 hover:z-50",
											`z-[${40 - index * 10}]`
										)}
									/>
									</a>
								</TooltipTrigger>
								<TooltipContent className="bg-black text-white border-none rounded-xl py-1 px-2.5 text-xs">
									{social.handle}
								</TooltipContent>
							</Tooltip>
						))}
					</div>
				</div>
				
</TooltipProvider>
</div>
);
}
import {Button} from "@/components/ui/Button";
import React from "react";

export const OptionButton = ({
	                      letter,
	                      label,
	                      selected,
	                      onClick,
                      }: {
	letter: string;
	label: string;
	selected: boolean;
	onClick: () => void;
}) => (
	<Button
		type="button"
		onClick={onClick}
		className={`flex items-center gap-3 border rounded-md p-2 pr-4 w-fit transition-colors ${
			selected
				? "border-primary bg-primary"
				: "border-input hover:bg-muted/50 bg-background"
		}`}
	>
		<div className="bg-muted-foreground text-background rounded w-5 h-5 flex items-center justify-center text-[10px] font-bold uppercase">
			{letter}
		</div>
		<span className="text-sm font-medium text-foreground">{label}</span>
	</Button>
);
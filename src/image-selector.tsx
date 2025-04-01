'use client';

import { useEffect, useState, useRef } from 'react';

import { cn } from './lib/utils';

import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';

import UTG from './assets/Open/1 UTG Opens.png';
import MP from './assets/Open/2 MP Opens.png';
import CO from './assets/Open/3 CO Opens.png';
import BU from './assets/Open/4 BU Opens.png';
import SB from './assets/Open/5 SB Opens.png';
import UTG3B from './assets/Open/6 UTG Opens (3B).png';
import MP3B from './assets/Open/7 MP Opens (3B).png';
import CO3B from './assets/Open/8 CO Opens (3B).png';
import BU3B from './assets/Open/9 BU Opens (3B).png';
import SB3B from './assets/Open/10 SB Opens (3B).png';
import vsMPvsUTG from './assets/vsOpen/1 MP vs UTG.png';
import vsCOvsUTG from './assets/vsOpen/2 CO vs UTG.png';
import vsCOvsMP from './assets/vsOpen/3 CO vs MP.png';
import vsBUvsUTG from './assets/vsOpen/4 BU vs UTG.png';
import vsBUvsMP from './assets/vsOpen/5 BU vs MP.png';
import vsBUvsCO from './assets/vsOpen/6 BU vs CO.png';
import vsSBvsUTG from './assets/vsOpen/7 SB vs UTG.png';
import vsSBvsMP from './assets/vsOpen/8 SB vs MP.png';
import vsSBvsCO from './assets/vsOpen/9 SB vs CO.png';
import vsSBvsBU from './assets/vsOpen/10 SB vs BU.png';
import vsBBvsUTG from './assets/vsOpen/11 BB vs UTG.png';
import vsBBvsMP from './assets/vsOpen/12 BB vs MP.png';
import vsBBvsCO from './assets/vsOpen/13 BB vs CO.png';
import vsBBvsBU from './assets/vsOpen/14 BB vs BU.png';
import vsBBvsSB from './assets/vsOpen/15 BB vs SB.png';
import vsMPvsUTG4B from './assets/vsOpen/16 MP vs UTG (4B).png';
import vsCOvsUTG4B from './assets/vsOpen/17 CO vs UTG (4B).png';
import vsCOvsMP4B from './assets/vsOpen/18 CO vs MP (4B).png';
import vsBUvsUTG4B from './assets/vsOpen/19 BU vs UTG (4B).png';
import vsBUvsMP4B from './assets/vsOpen/20 BU vs MP (4B).png';
import vsBUvsCO4B from './assets/vsOpen/21 BU vs CO (4B).png';
import vsSBvsUTG4B from './assets/vsOpen/22 SB vs UTG (4B).png';
import vsSBvsMP4B from './assets/vsOpen/23 SB vs MP (4B).png';
import vsSBvsCO4B from './assets/vsOpen/24 SB vs CO (4B).png';
import vsSBvsBU4B from './assets/vsOpen/25 SB vs BU (4B).png';
import vsBBvsUTG4B from './assets/vsOpen/26 BB vs UTG (4B).png';
import vsBBvsMP4B from './assets/vsOpen/27 BB vs MP (4B).png';
import vsBBvsCO4B from './assets/vsOpen/28 BB vs CO (4B).png';
import vsBBvsBU4B from './assets/vsOpen/29 BB vs BU (4B).png';
import vsBBvsSB4B from './assets/vsOpen/30 BB vs SB (4B).png';

interface ImageOption {
  id: string;
  label: string;
  src: string;
  alt: string;
  description: string;
  sub: {
    id: string;
    label: string;
    src: string;
    alt: string;
    description: string;
  };
}

const imageOptions = [
	{
		id: 'utg',
		label: 'UTG',
		src: UTG,
		alt: 'UTG',
		description: 'UTG',
		sub: {
			id: 'utg3b',
			label: 'UTG (3B)',
			src: UTG3B,
			alt: 'UTG (3B)',
			description: 'UTG (3B)'
		}
	},
	{
		id: 'mp',
		label: 'MP',
		src: MP,
		alt: 'MP',
		description: 'MP',
		sub: {
			id: 'mp3b',
			label: 'MP (3B)',
			src: MP3B,
			alt: 'MP (3B)',
			description: 'MP (3B)'
		}
	},
	{
		id: 'co',
		label: 'CO',
		src: CO,
		alt: 'CO',
		description: 'CO',
		sub: {
			id: 'co3b',
			label: 'CO (3B)',
			src: CO3B,
			alt: 'CO (3B)',
			description: 'CO (3B)'
		}
	},
	{
		id: 'bu',
		label: 'BU',
		src: BU,
		alt: 'BU',
		description: 'BU',
		sub: {
			id: 'bu3b',
			label: 'BU (3B)',
			src: BU3B,
			alt: 'BU (3B)',
			description: 'BU (3B)'
		}
	},
	{
		id: 'sb',
		label: 'SB',
		src: SB,
		alt: 'SB',
		description: 'SB',
		sub: {
			id: 'sb3b',
			label: 'SB (3B)',
			src: SB3B,
			alt: 'SB (3B)',
			description: 'SB (3B)'
		}
	}
];

const vsImageOptions = [
	{
		id: 'vsMPvsUTG',
		label: 'MP vs UTG',
		src: vsMPvsUTG,
		alt: 'MP vs UTG',
		description: 'MP vs UTG',
		sub: {
			id: 'vsMPvsUTG4B',
			label: 'MP vs UTG (4B)',
			src: vsMPvsUTG4B,
			alt: 'MP vs UTG (4B)',
			description: 'MP vs UTG (4B)'
		}
	},
	{
		id: 'vsCOvsUTG',
		label: 'CO vs UTG',
		src: vsCOvsUTG,
		alt: 'CO vs UTG',
		description: 'CO vs UTG',
		sub: {
			id: 'vsCOvsUTG4B',
			label: 'CO vs UTG (4B)',
			src: vsCOvsUTG4B,
			alt: 'CO vs UTG (4B)',
			description: 'CO vs UTG (4B)'
		}
	},
	{
		id: 'vsCOvsMP',
		label: 'CO vs MP',
		src: vsCOvsMP,
		alt: 'CO vs MP',
		description: 'CO vs MP',
		sub: {
			id: 'vsCOvsMP4B',
			label: 'CO vs MP (4B)',
			src: vsCOvsMP4B,
			alt: 'CO vs MP (4B)',
			description: 'CO vs MP (4B)'
		}
	},
	{
		id: 'vsBUvsUTG',
		label: 'BU vs UTG',
		src: vsBUvsUTG,
		alt: 'BU vs UTG',
		description: 'BU vs UTG',
		sub: {
			id: 'vsBUvsUTG4B',
			label: 'BU vs UTG (4B)',
			src: vsBUvsUTG4B,
			alt: 'BU vs UTG (4B)',
			description: 'BU vs UTG (4B)'
		}
	},
	{
		id: 'vsBUvsMP',
		label: 'BU vs MP',
		src: vsBUvsMP,
		alt: 'BU vs MP',
		description: 'BU vs MP',
		sub: {
			id: 'vsBUvsMP4B',
			label: 'BU vs MP (4B)',
			src: vsBUvsMP4B,
			alt: 'BU vs MP (4B)',
			description: 'BU vs MP (4B)'
		}
	},
	{
		id: 'vsBUvsCO',
		label: 'BU vs CO',
		src: vsBUvsCO,
		alt: 'BU vs CO',
		description: 'BU vs CO',
		sub: {
			id: 'vsBUvsCO4B',
			label: 'BU vs CO (4B)',
			src: vsBUvsCO4B,
			alt: 'BU vs CO (4B)',
			description: 'BU vs CO (4B)'
		}
	},
	{
		id: 'vsSBvsUTG',
		label: 'SB vs UTG',
		src: vsSBvsUTG,
		alt: 'SB vs UTG',
		description: 'SB vs UTG',
		sub: {
			id: 'vsSBvsUTG4B',
			label: 'SB vs UTG (4B)',
			src: vsSBvsUTG4B,
			alt: 'SB vs UTG (4B)',
			description: 'SB vs UTG (4B)'
		}
	},
	{
		id: 'vsSBvsMP',
		label: 'SB vs MP',
		src: vsSBvsMP,
		alt: 'SB vs MP',
		description: 'SB vs MP',
		sub: {
			id: 'vsSBvsMP4B',
			label: 'SB vs MP (4B)',
			src: vsSBvsMP4B,
			alt: 'SB vs MP (4B)',
			description: 'SB vs MP (4B)'
		}
	},
	{
		id: 'vsSBvsCO',
		label: 'SB vs CO',
		src: vsSBvsCO,
		alt: 'SB vs CO',
		description: 'SB vs CO',
		sub: {
			id: 'vsSBvsCO4B',
			label: 'SB vs CO (4B)',
			src: vsSBvsCO4B,
			alt: 'SB vs CO (4B)',
			description: 'SB vs CO (4B)'
		}
	},
	{
		id: 'vsSBvsBU',
		label: 'SB vs BU',
		src: vsSBvsBU,
		alt: 'SB vs BU',
		description: 'SB vs BU',
		sub: {
			id: 'vsSBvsBU4B',
			label: 'SB vs BU (4B)',
			src: vsSBvsBU4B,
			alt: 'SB vs BU (4B)',
			description: 'SB vs BU (4B)'
		}
	},
	{
		id: 'vsBBvsUTG',
		label: 'BB vs UTG',
		src: vsBBvsUTG,
		alt: 'BB vs UTG',
		description: 'BB vs UTG',
		sub: {
			id: 'vsBBvsUTG4B',
			label: 'BB vs UTG (4B)',
			src: vsBBvsUTG4B,
			alt: 'BB vs UTG (4B)',
			description: 'BB vs UTG (4B)'
		}
	},
	{
		id: 'vsBBvsMP',
		label: 'BB vs MP',
		src: vsBBvsMP,
		alt: 'BB vs MP',
		description: 'BB vs MP',
		sub: {
			id: 'vsBBvsMP4B',
			label: 'BB vs MP (4B)',
			src: vsBBvsMP4B,
			alt: 'BB vs MP (4B)',
			description: 'BB vs MP (4B)'
		}
	},
	{
		id: 'vsBBvsCO',
		label: 'BB vs CO',
		src: vsBBvsCO,
		alt: 'BB vs CO',
		description: 'BB vs CO',
		sub: {
			id: 'vsBBvsCO4B',
			label: 'BB vs CO (4B)',
			src: vsBBvsCO4B,
			alt: 'BB vs CO (4B)',
			description: 'BB vs CO (4B)'
		}
	},
	{
		id: 'vsBBvsBU',
		label: 'BB vs BU',
		src: vsBBvsBU,
		alt: 'BB vs BU',
		description: 'BB vs BU',
		sub: {
			id: 'vsBBvsBU4B',
			label: 'BB vs BU (4B)',
			src: vsBBvsBU4B,
			alt: 'BB vs BU (4B)',
			description: 'BB vs BU (4B)'
		}
	},
	{
		id: 'vsBBvsSB',
		label: 'BB vs SB',
		src: vsBBvsSB,
		alt: 'BB vs SB',
		description: 'BB vs SB',
		sub: {
			id: 'vsBBvsSB4B',
			label: 'BB vs SB (4B)',
			src: vsBBvsSB4B,
			alt: 'BB vs SB (4B)',
			description: 'BB vs SB (4B)'
		}
	}
];

export default function ImageSelector(): JSX.Element {
	const [images, setImages] = useState(imageOptions);
	const [selectedOption, setSelectedOption] = useState(images[0]);
	const [isSub, setIsSub] = useState(false);
	const [prevOption, setPrevOption] = useState(0);
	const [prevSub, setPrevSub] = useState(false);

	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const option = isSub ? selectedOption.sub : selectedOption;
	const buttonStyles = 'w-full sm:w-auto hover:bg-black hover:border-gray-400 min-w-[130px]';

	const handleOpenButton = (isOpen: boolean) => {
		const options = isOpen ? vsImageOptions : imageOptions;
		const updatedOptions = isOpen ? imageOptions : vsImageOptions;

		if (images === options) {
			setImages(updatedOptions);
			setSelectedOption(updatedOptions[prevOption]);
			setPrevOption(images.findIndex((item) => item.id === selectedOption.id));
			setIsSub(prevSub);
			setPrevSub(isSub);
		}

		if (buttonRef.current) {
			setTimeout(() => buttonRef?.current?.scrollIntoView({ behavior: 'smooth' }), 0);
		}
	};

	const handleSubButton = (option: ImageOption | null) => {
		if (option) {
			setSelectedOption(option);
			setIsSub(false);
		} else {
			setIsSub(true);
		}
	};

	useEffect(() => {
		document.documentElement.classList.add('dark');
	}, []);

	return (
		<div className="dark flex justify-center overflow-hidden items-center p-6 bg-background text-foreground transition-colors duration-200">
			<div className="w-full space-y-8 flex flex-col items-center justify-center  mx-[10%]">
				<img
					src={option.src}
					alt={option.alt}
					className="w-full max-h-[75vh] object-contain transition-all duration-300"
				/>

				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4  w-full">
					<div className="flex flex-col justify-center gap-3 w-full">
						<div className="flex gap-1">
							<Button
								variant="outline"
								className={`${buttonStyles} ${images === vsImageOptions ? 'bg-muted' : 'border-gray-500'}`}
								onClick={() => handleOpenButton(true)}
							>
                Open
							</Button>
							<Button
								variant="outline"
								className={`${buttonStyles} ${images === imageOptions ? 'bg-muted' : ' border-gray-500'}`}
								onClick={() => handleOpenButton(false)}
							>
                vs Open
							</Button>
						</div>

						<Separator />

						<div className="flex flex-wrap gap-1">
							{images.map((opt) => (
								<Button
									variant="outline"
									key={opt.id}
									onClick={() => handleSubButton(opt)}
									className={cn(
										buttonStyles,
										option.id === opt.id ? 'border-gray-500' : 'bg-muted'
									)}
								>
									{opt.label}
								</Button>
							))}
						</div>

						<Separator />

						<div className="flex flex-wrap gap-1">
							<Button
								ref={buttonRef}
								variant="outline"
								onClick={() => handleSubButton(null)}
								className={cn(
									buttonStyles,
									isSub ? 'border-gray-500' : 'bg-muted'
								)}
							>
								{images === imageOptions ? '(3B)' : '(4B)'}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


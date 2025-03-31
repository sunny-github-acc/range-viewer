"use client"

import { useState, useEffect } from "react"
import { Check, ChevronDown, Moon, Sun } from "lucide-react"

import { Button } from "./components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu"
import { cn } from "./lib/utils"

import Open1 from './assets/Open/1 UTG Opens.png';
import Open2 from './assets/Open/2 MP Opens.png';
import Open3 from './assets/Open/3 CO Opens.png';
import Open4 from './assets/Open/4 BU Opens.png';
import Open5 from './assets/Open/5 SB Opens.png';
import Open6 from './assets/Open/6 UTG Opens (3B).png';
import Open7 from './assets/Open/7 MP Opens (3B).png';
import Open8 from './assets/Open/8 CO Opens (3B).png';
import Open9 from './assets/Open/9 BU Opens (3B).png';
import Open10 from './assets/Open/10 SB Opens (3B).png';

import vsUTG1 from './assets/vsOpen/1 MP vs UTG.png';
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
import vsCOvsUTG from './assets/vsOpen/2 CO vs UTG.png';
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
import vsCOvsMP from './assets/vsOpen/3 CO vs MP.png';
import vsBBvsSB4B from './assets/vsOpen/30 BB vs SB (4B).png';
import vsBUvsUTG from './assets/vsOpen/4 BU vs UTG.png';
import vsBUvsMP from './assets/vsOpen/5 BU vs MP.png';
import vsBUvsCO from './assets/vsOpen/6 BU vs CO.png';
import vsSBvsUTG from './assets/vsOpen/7 SB vs UTG.png';
import vsSBvsMP from './assets/vsOpen/8 SB vs MP.png';
import vsSBvsCO from './assets/vsOpen/9 SB vs CO.png';

const imageOptions = [
  {
    id: "utg",
    label: "UTG",
    src: Open1,
    alt: "UTG",
    description: "UTG",
  },
  {
    id: "mp",
    label: "MP",
    src: Open2,
    alt: "MP",
    description: "MP",
  },
  {
    id: "co",
    label: "CO",
    src: Open3,
    alt: "CO",
    description: "CO",
  },
  {
    id: "bu",
    label: "BU",
    src: Open4,
    alt: "BU",
    description: "BU",
  },
  {
    id: "sb",
    label: "SB",
    src: Open5,
    alt: "SB",
    description: "SB",
  },
  {
    id: "utg3b",
    label: "UTG (3B)",
    src: Open6,
    alt: "UTG (3B)",
    description: "UTG (3B)",
  },
  {
    id: "mp3b",
    label: "MP (3B)",
    src: Open7,
    alt: "MP (3B)",
    description: "MP (3B)",
  },
  {
    id: "co3b",
    label: "CO (3B)",
    src: Open8,
    alt: "CO (3B)",
    description: "CO (3B)",
  },
  {
    id: "bu3b",
    label: "BU (3B)",
    src: Open9,
    alt: "BU (3B)",
    description: "BU (3B)",
  },
  {
    id: "sb3b",
    label: "SB (3B)",
    src: Open10,
    alt: "SB (3B)",
    description: "SB (3B)",
  },
];

const vsImageOptions = [
  { id: "vsUTG1", label: "MP vs UTG", src: vsUTG1, alt: "MP vs UTG", description: "MP vs UTG" },
  { id: "vsSBvsBU", label: "SB vs BU", src: vsSBvsBU, alt: "SB vs BU", description: "SB vs BU" },
  { id: "vsBBvsUTG", label: "BB vs UTG", src: vsBBvsUTG, alt: "BB vs UTG", description: "BB vs UTG" },
  { id: "vsBBvsMP", label: "BB vs MP", src: vsBBvsMP, alt: "BB vs MP", description: "BB vs MP" },
  { id: "vsBBvsCO", label: "BB vs CO", src: vsBBvsCO, alt: "BB vs CO", description: "BB vs CO" },
  { id: "vsBBvsBU", label: "BB vs BU", src: vsBBvsBU, alt: "BB vs BU", description: "BB vs BU" },
  { id: "vsBBvsSB", label: "BB vs SB", src: vsBBvsSB, alt: "BB vs SB", description: "BB vs SB" },
  { id: "vsMPvsUTG4B", label: "MP vs UTG (4B)", src: vsMPvsUTG4B, alt: "MP vs UTG (4B)", description: "MP vs UTG (4B)" },
  { id: "vsCOvsUTG4B", label: "CO vs UTG (4B)", src: vsCOvsUTG4B, alt: "CO vs UTG (4B)", description: "CO vs UTG (4B)" },
  { id: "vsCOvsMP4B", label: "CO vs MP (4B)", src: vsCOvsMP4B, alt: "CO vs MP (4B)", description: "CO vs MP (4B)" },
  { id: "vsBUvsUTG4B", label: "BU vs UTG (4B)", src: vsBUvsUTG4B, alt: "BU vs UTG (4B)", description: "BU vs UTG (4B)" },
  { id: "vsCOvsUTG", label: "CO vs UTG", src: vsCOvsUTG, alt: "CO vs UTG", description: "CO vs UTG" },
  { id: "vsBUvsMP4B", label: "BU vs MP (4B)", src: vsBUvsMP4B, alt: "BU vs MP (4B)", description: "BU vs MP (4B)" },
  { id: "vsBUvsCO4B", label: "BU vs CO (4B)", src: vsBUvsCO4B, alt: "BU vs CO (4B)", description: "BU vs CO (4B)" },
  { id: "vsSBvsUTG4B", label: "SB vs UTG (4B)", src: vsSBvsUTG4B, alt: "SB vs UTG (4B)", description: "SB vs UTG (4B)" },
  { id: "vsSBvsMP4B", label: "SB vs MP (4B)", src: vsSBvsMP4B, alt: "SB vs MP (4B)", description: "SB vs MP (4B)" },
  { id: "vsSBvsCO4B", label: "SB vs CO (4B)", src: vsSBvsCO4B, alt: "SB vs CO (4B)", description: "SB vs CO (4B)" },
  { id: "vsSBvsBU4B", label: "SB vs BU (4B)", src: vsSBvsBU4B, alt: "SB vs BU (4B)", description: "SB vs BU (4B)" },
  { id: "vsBBvsUTG4B", label: "BB vs UTG (4B)", src: vsBBvsUTG4B, alt: "BB vs UTG (4B)", description: "BB vs UTG (4B)" },
  { id: "vsBBvsMP4B", label: "BB vs MP (4B)", src: vsBBvsMP4B, alt: "BB vs MP (4B)", description: "BB vs MP (4B)" },
  { id: "vsBBvsCO4B", label: "BB vs CO (4B)", src: vsBBvsCO4B, alt: "BB vs CO (4B)", description: "BB vs CO (4B)" },
  { id: "vsBBvsBU4B", label: "BB vs BU (4B)", src: vsBBvsBU4B, alt: "BB vs BU (4B)", description: "BB vs BU (4B)" },
  { id: "vsCOvsMP", label: "CO vs MP", src: vsCOvsMP, alt: "CO vs MP", description: "CO vs MP" },
  { id: "vsBBvsSB4B", label: "BB vs SB (4B)", src: vsBBvsSB4B, alt: "BB vs SB (4B)", description: "BB vs SB (4B)" },
  { id: "vsBUvsUTG", label: "BU vs UTG", src: vsBUvsUTG, alt: "BU vs UTG", description: "BU vs UTG" },
  { id: "vsBUvsMP", label: "BU vs MP", src: vsBUvsMP, alt: "BU vs MP", description: "BU vs MP" },
  { id: "vsBUvsCO", label: "BU vs CO", src: vsBUvsCO, alt: "BU vs CO", description: "BU vs CO" },
  { id: "vsSBvsUTG", label: "SB vs UTG", src: vsSBvsUTG, alt: "SB vs UTG", description: "SB vs UTG" },
  { id: "vsSBvsMP", label: "SB vs MP", src: vsSBvsMP, alt: "SB vs MP", description: "SB vs MP" },
  { id: "vsSBvsCO", label: "SB vs CO", src: vsSBvsCO, alt: "SB vs CO", description: "SB vs CO" },
];

export default function ImageSelector() {
  const [images, setImages] = useState(imageOptions)
  const [selectedOption, setSelectedOption] = useState(images[0])

  document.documentElement.classList.add("dark")

  return (
<div className="flex justify-center overflow-hidden items-center p-6 bg-background text-foreground transition-colors duration-200">
    <div className="w-full space-y-8 flex flex-col items-center justify-center  mx-[10%]">
      <img
      src={selectedOption.src}
      alt={selectedOption.alt}
      className="w-full max-h-screen object-contain transition-all duration-300"
    />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4  w-full">

<div className="flex flex-col justify-center gap-3 w-full">
            <div className="flex gap-1">
              <Button variant="outline" className={`w-full sm:w-auto ${images != imageOptions ? 'bg-muted' : ''}`} onClick={() => {setImages(imageOptions); setSelectedOption(imageOptions[0])}}>
                    Open
                    {images === imageOptions && <Check className="h-4 w-4 ml-2" />}
              </Button>
              <Button variant="outline" className={`w-full sm:w-auto ${images === imageOptions ? 'bg-muted' : ''}`} onClick={() => {setImages(vsImageOptions); setSelectedOption(vsImageOptions[0])}}>
                    vs Open
                    {images != imageOptions && <Check className="h-4 w-4 ml-2" />}
              </Button>
            </div>

            <div className="flex flex-wrap gap-1">
            {images.map((option) => (
                  <Button
                    variant="outline"
                    key={option.id}
                    onClick={() => setSelectedOption(option)}
                    className={cn(
                      "flex items-center justify-between cursor-pointer bg-muted",
                      selectedOption.id === option.id && "bg-black-muted",
                    )}
                  >
                    {option.label}
                    {selectedOption.id === option.id && <Check className="h-4 w-4 ml-2" />}
                  </Button>
                ))}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuContent align="end" className="w-[200px]">
              {images.map((option) => (
                <DropdownMenuItem
                  key={option.id}
                  onClick={() => setSelectedOption(option)}
                  className={cn(
                    "flex items-center justify-between cursor-pointer",
                    selectedOption.id === option.id && "bg-muted",
                  )}
                >
                  {option.label}
                  {selectedOption.id === option.id && <Check className="h-4 w-4 ml-2" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}


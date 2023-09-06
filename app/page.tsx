import { ArrowUpRight, Menu } from 'lucide-react';

import { StackedImageCard } from '@/components/stacked-image-card';
import { Button } from '@/components/ui/button';
import { cinzelDecorative } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export default async function Home() {
  return (
    <div className="grid h-screen grid-cols-3 gap-16 p-[3vw] lg:grid-rows-3 lg:gap-0 lg:overflow-hidden">
      {/* logo */}
      <div className="col-start-1 row-start-1">
        <div className="grid h-16 w-16 grid-cols-4 grid-rows-4 bg-white">
          <div className="col-start-1 row-start-1 h-10 w-10 rounded-br-full bg-background"></div>
          <div className="z-20 col-start-1 row-start-1 h-6 w-6 rounded-br-full bg-primary"></div>
          <div className="col-start-4 row-start-3 h-4 w-4 bg-background"></div>
        </div>
      </div>
      {/* menu */}
      <div className="col-start-3 row-start-1 flex items-start justify-end">
        <Button variant="default">
          <Menu />
        </Button>
      </div>
      {/* helper image */}
      {/* <div className="relative col-start-1 row-start-2">
        <Image
          className="absolute inset-0 -z-10 m-auto h-48 w-32 rotate-12 bg-gray-600 object-cover opacity-30 grayscale transition-all duration-500 hover:rotate-0 hover:scale-150 hover:rounded-3xl hover:opacity-100 hover:grayscale-0"
          src="https://images.unsplash.com/photo-1574871786514-46e1680ea587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="bride-1"
          width={256}
          height={384}
        />
      </div> */}
      {/* helper image */}
      {/* <div className="col-start-3 row-start-1 grid animate-pulse place-content-center hover:animate-none">
        <Image
          className="h-48 w-32 -rotate-12 bg-gray-600 object-cover transition-all duration-500 hover:rotate-0 hover:scale-125 hover:rounded-3xl"
          src="https://images.unsplash.com/photo-1525135850648-b42365991054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="bride-1"
          width={256}
          height={384}
        />
      </div> */}
      {/* explore gallery */}
      <div className="relative col-span-3 col-start-1 row-start-2 grid place-content-center lg:col-span-1 lg:col-start-2 lg:row-span-3 lg:row-start-1">
        <StackedImageCard />
        <Button
          variant="secondary"
          className="absolute inset-0 m-auto w-min gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          <span className="text-sm font-semibold uppercase tracking-wider">
            explore
          </span>
        </Button>
      </div>
      {/* heading */}
      {/* TODO: fix (bug) -> col-span-3 on mobile and col-span-2 on lg not working */}
      <div
        className={cn(
          'col-span-2 col-start-1 flex flex-col justify-end lg:row-start-3 lg:gap-6',
          cinzelDecorative.className
        )}
      >
        <p className="text-4xl font-semibold lg:text-7xl">Mehndi &amp;</p>
        <p className="text-4xl font-semibold lg:text-7xl">Bridal Makeup</p>
      </div>
      {/* description and cta */}
      <div className="col-span-3 col-start-1 grid gap-8 lg:col-span-1 lg:col-start-3 lg:row-start-3 lg:place-content-end lg:pl-12">
        <p className="text-lg first-letter:pl-[40%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum
          molestiae error minus at. Nisi laboriosam debitis a cum error eveniet
          saepe nobis.
        </p>
        <div className="flex items-center gap-4">
          <p className="w-fit border border-stone-600 p-2">
            <ArrowUpRight />
          </p>
          <p className="font-medium underline">Request a call</p>
        </div>
      </div>
    </div>
  );
}

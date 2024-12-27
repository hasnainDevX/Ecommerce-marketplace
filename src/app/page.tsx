import MaxWidthWrapper from "@/config/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowDownToLine, CheckCircle, Icon, Leaf } from "lucide-react";

const perks = [
  {
    id: 1,
    name: " Instant delivery",
    icon: ArrowDownToLine,
    description: "Get your product in as soon as possible. You can also pay with cash on delivery. We will deliver it to your doorsteps."
  },
  {
    id: 2,
    name: "Guaranteed quality",
    icon: CheckCircle,
    description: "Guaranteed quality. Every asset on our platform is verified by our team to ensure our highest quality standards."
  },
  {
    id: 3,
    name: "For the planets",
    icon: Leaf,
    description: "We have pledge to support the planet. Every asset on our platform is verified by our team to ensure our highest quality standards."
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Marketplace for high quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">WELCOME TO ABCD. Every asset on our platform is verified by our team to ensure our highest quality standards</p>
          <div className="flex flex-colsm:flex-row gap-4 mt-6">
            <Link href={"/product"} className={buttonVariants()}>Browse Trending</Link>
            <Button variant="ghost">Our Quality promise &rarr;</Button>
          </div>
        </div>
        {/* todo list  */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12E sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">

           {perks.map((item) => (
             <div key={item.id} className="text-center x md:flex md:items-center md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<item.icon className="h-1/3 w-1/3"/>}
                  </div>
                </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900 ">{item.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  </div>
             </div>
           ))}
          </div>

        </MaxWidthWrapper>

      </section>
    </>
  );
}

"use client";

import CollectionSection from "@/components/banners/CollectionSection";
import CTACard from "@/components/cards/CTACard";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between p-0">
      <section>
        
        {/* start home page */}
        <div className="container mx-auto py-12 text-center">
          <h1 className="text-6xl font-bold mt-16">Tokyo</h1>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            carosel
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            category cards grid
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            top brands
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            recently viewed
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            sponsored
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            cart short view
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            suggested for you
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            discount for you
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            price drop allert oor offers
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            few unique features
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            popular picks
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            new on '[category]'
          </h3>
          <h3 className="text-4xl font-bold tracking-tight leading-none sm:leading-normal md:text-5">
            superstar brand
          </h3>
        </div>
      </section>
      <CTACard />
      <CollectionSection />
    </main>
  );
}

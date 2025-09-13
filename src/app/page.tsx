import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { clients, products } from "@/lib/constant";
import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { LampComponent } from "@/components/global/lamp";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center w-full min-h-screen bg-neutral-950 overflow-hidden px-5 py-24">
          <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
          <div className="relative z-10 flex flex-col items-center">
            <ContainerScroll
              titleComponent={
                <div className="flex flex-col items-center space-y-8">
                  <Button
                    size="lg"
                    className="px-8 py-6 text-2xl border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                      Start For Free Today
                    </span>
                  </Button>
                  <h1 className="text-5xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-bold">
                    Automate Your Work With Fuzzie
                  </h1>
                </div>
              }
            />
          </div>
        </section>

        {/* Clients Section */}
        <section className="w-full py-24">
          <InfiniteMovingCards
            className="mx-auto"
            items={clients}
            direction="right"
            speed="slow"
          />
        </section>

        {/* Products Section */}
        <section className="w-full py-24">
          <HeroParallax products={products} />
        </section>

        {/* Lamp Section */}
        <section className="w-full py-24">
          <div className="flex flex-col items-center space-y-8">
            <LampComponent />
          </div>
        </section>
      </main>
    </div>
  );
}

import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="Home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <RevealOnScroll>
        <div className="z-10 px-4 text-center">
          <h1 className="leading-right mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Hi, I'm Enkhbayar
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg text-gray-400">
            19yo frontend developer from Mongolia. Who builds things for the
            web.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#Projects"
              className="relative overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              View Projects
            </a>

            <a
              href="#Projects"
              className="rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
  return (
    <section
      id="Projects"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-blue-500/30">
              <h3 className="mb-2 text-xl font-bold">Pc store</h3>
              <p className="mb-4 text-gray-400">
                A full-stack e-commerce application.It features user
                authentication, product management, and a shopping cart system.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'MongoDB'].map(
                  (skills, key) => (
                    <span
                      key={key}
                      className="cursor-pointer rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skills}
                    </span>
                  )
                )}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  target="_blank"
                  className="my-4 text-blue-400 transition-colors hover:text-blue-300"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>

            <div className="hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-blue-500/30">
              <h3 className="mb-2 text-xl font-bold">Pc store</h3>
              <p className="mb-4 text-gray-400">
                A full-stack e-commerce application.It features user
                authentication, product management, and a shopping cart system.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'MongoDB'].map(
                  (skills, key) => (
                    <span
                      key={key}
                      className="cursor-pointer rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skills}
                    </span>
                  )
                )}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  target="_blank"
                  className="my-4 text-blue-400 transition-colors hover:text-blue-300"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>

            <div className="hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-blue-500/30">
              <h3 className="mb-2 text-xl font-bold">Pc store</h3>
              <p className="mb-4 text-gray-400">
                A full-stack e-commerce application.It features user
                authentication, product management, and a shopping cart system.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'MongoDB'].map(
                  (skills, key) => (
                    <span
                      key={key}
                      className="cursor-pointer rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skills}
                    </span>
                  )
                )}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  target="_blank"
                  className="my-4 text-blue-400 transition-colors hover:text-blue-300"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>

            <div className="hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-blue-500/30">
              <h3 className="mb-2 text-xl font-bold">Pc store</h3>
              <p className="mb-4 text-gray-400">
                A full-stack e-commerce application.It features user
                authentication, product management, and a shopping cart system.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'MongoDB'].map(
                  (skills, key) => (
                    <span
                      key={key}
                      className="cursor-pointer rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skills}
                    </span>
                  )
                )}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  target="_blank"
                  className="my-4 text-blue-400 transition-colors hover:text-blue-300"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

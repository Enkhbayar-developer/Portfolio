import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  const frontendSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Next.js',
  ];
  const backendSkills = [
    'Node.js',
    'Express',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
  ];

  return (
    <section
      id="About"
      className="flex min-h-screen items-center justify-center"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            About Me
          </h2>

          <div className="rounded-xl border border-white/10 p-8 transition-all hover:-translate-y-1">
            <p className="mb-6 text-gray-300">
              I'm a 19-year-old frontend developer from Mongolia, passionate
              about creating beautiful and functional web applications. I have a
              strong foundation in HTML, CSS, and JavaScript, and I'm always
              eager to learn new technologies and improve my skills. I enjoy
              working on projects that challenge me and allow me to express my
              creativity.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
                <h3 className="mb-4 text-xl font-bold">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skills, key) => (
                    <span
                      key={key}
                      className="cursor-pointer rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
                <h3 className="mb-4 text-xl font-bold">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skills, key) => (
                    <span
                      key={key}
                      className="cursor-pointer rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
              <h3 className="mb-4 text-xl font-bold">Education</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li className="mb-2">
                  <span className="font-bold">
                    National University of Mongolia
                  </span>
                  <br />
                  Bachelor of Computer Science
                </li>
                <li>
                  <span className="font-bold">
                    Mongolian University of Science and Technology
                  </span>
                  <br />
                  Bachelor of Information Technology
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
              <h3 className="mb-4 text-xl font-bold">Work Experience</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li className="mb-2">
                  <span className="font-bold">Freelance Developer</span>
                  <br />
                  2022 - Present
                </li>
                <li>
                  <span className="font-bold">Intern at XYZ Company</span>
                  <br />
                  2021 - 2022
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

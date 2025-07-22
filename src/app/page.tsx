export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-900 text-center">
          Bryan Stites
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-blue-700 text-center">
          Empathetic Leadership&nbsp;|&nbsp;Data-Driven Execution
        </p>
      </header>

      {/* About Section */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">About</h2>
        <p className="text-base leading-relaxed text-gray-700">
          With over 15 years of experience in technology leadership, Bryan Stites has built and led high-performing teams across risk management, infrastructure, and analytics. He specializes in aligning technology strategy with business goals, fostering a culture of trust, and delivering scalable solutions that empower people and drive measurable results.
        </p>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Leadership Philosophy</h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>
              <span className="font-medium text-blue-700">People-First Technology:</span> Building inclusive, collaborative teams where every voice is valued and growth is encouraged.
            </li>
            <li>
              <span className="font-medium text-blue-700">Data-Informed Decisions:</span> Leveraging analytics and evidence to guide strategy, measure impact, and continuously improve.
            </li>
            <li>
              <span className="font-medium text-blue-700">Mentorship & Empowerment:</span> Investing in people’s development, fostering future leaders, and creating opportunities for others to excel.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-600 text-sm">
          <div>
            <span className="font-medium">Contact:</span>{" "}
            <a
              href="mailto:bryan.stites@email.com"
              className="hover:underline text-blue-700"
            >
              bryan.stites@email.com
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/bryanstites"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

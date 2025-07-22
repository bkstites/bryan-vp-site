// trigger redeploy
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-blue-100 to-white" aria-label="Hero">
        <img
          src="/headshot.jpg"
          alt="Bryan Stites headshot"
          className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover border-4 border-blue-200"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-blue-900 text-center">Bryan Stites</h1>
        <p className="text-lg sm:text-xl font-medium text-blue-700 text-center mb-2">
          Empathetic Leadership<span aria-hidden="true"> · </span>Data-Driven Execution
        </p>
      </header>

      {/* About Section */}
      <section className="max-w-2xl mx-auto px-6 py-10" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-2xl font-semibold mb-4 text-blue-800">About</h2>
        <p className="text-base leading-relaxed text-gray-700">
          Bryan Stites is a technology and risk leader with deep experience in IT risk management, SOX analytics, cloud infrastructure, and team leadership at Capital One. He excels at bridging business and technology, building resilient systems, and empowering teams to deliver secure, scalable solutions that drive organizational success.
        </p>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="bg-blue-50 py-10 px-6" aria-labelledby="philosophy-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="philosophy-heading" className="text-2xl font-semibold mb-4 text-blue-800">Leadership Philosophy</h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>
              <span className="font-medium text-blue-700">People-First Technology:</span> Building inclusive, collaborative teams where every voice is valued and growth is encouraged.
            </li>
            <li>
              <span className="font-medium text-blue-700">Data-Informed Decisions:</span> Leveraging analytics and evidence to guide strategy, measure impact, and continuously improve.
            </li>
            <li>
              <span className="font-medium text-blue-700">Mentorship &amp; Empowerment:</span> Investing in people’s development, fostering future leaders, and creating opportunities for others to excel.
            </li>
          </ul>
        </div>
      </section>

      {/* Resume Section */}
      <section className="max-w-2xl mx-auto px-6 py-10" aria-labelledby="resume-heading">
        <h2 id="resume-heading" className="text-2xl font-semibold mb-4 text-blue-800">Resume</h2>
        <a
          href="/Bryan_Stites_Resume.pdf"
          download
          className="inline-block mb-4 px-5 py-2 rounded bg-blue-700 text-white font-medium shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
        >
          Download PDF
        </a>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Led cross-functional teams to deliver enterprise risk analytics platforms, improving SOX compliance and audit efficiency.</li>
          <li>Architected and migrated critical infrastructure to the cloud, enhancing scalability and reducing operational risk.</li>
          <li>Mentored and developed high-performing teams, fostering a culture of trust, innovation, and continuous improvement.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-white border-t border-gray-200" aria-label="Footer">
        <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-600 text-sm">
          <div>
            <span className="font-medium">Contact:</span>{' '}
            <a
              href="mailto:bryankstites@gmail.com"
              className="hover:underline text-blue-700"
            >
              bryankstites@gmail.com
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
    </main>
  );
}

export default function TechnologySection() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/animation/2023/05/02/15/28/15-28-22-399_512.gif')", // 🔁 Make sure this image exists
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology</h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-12">
          AuraLearn is built on powerful, scalable infrastructure designed to deliver high-impact learning experiences with performance, security, and flexibility at its core.
        </p>

        <div className="grid grid-cols-1 hover:scale-105 md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "AI Personalization",
              desc: "Smart recommendations and adaptive paths for every learner.",
              icon: "🤖",
            },
            {
              title: "Cloud Infrastructure",
              desc: "Global delivery with 99.9% uptime and scalable architecture.",
              icon: "☁️",
            },
            {
              title: "Analytics & Insights",
              desc: "Real-time tracking, dashboards, and deep engagement metrics.",
              icon: "📊",
            },
          ].map((tech) => (
            <div
              key={tech.title}
              className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="text-3xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-100">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

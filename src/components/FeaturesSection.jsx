export default function FeaturesSection() {
  const features = [
    {
      icon: "🤖",
      title: "AI Tutors",
      description: "Get real-time help from intelligent AI mentors tailored to your learning path.",
    },
    {
      icon: "📜",
      title: "Certifications",
      description: "Earn official, shareable certificates to showcase your achievements.",
    },
    {
      icon: "🛠️",
      title: "Project-Based Learning",
      description: "Build real-world projects that demonstrate your skills and creativity.",
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Peer Collaboration",
      description: "Join group tasks and collaborate with a global community of learners.",
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description: "Visual dashboards track your milestones, habits, and performance.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6"
      style={{
        backgroundImage:
          "url('https://cdnblog.picsart.com/2024/02/445018477002201.gif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">AuraLearn Features</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Everything you need to learn faster, smarter, and more confidently.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/10 hover:scale-105 transition p-6 rounded-lg shadow-md backdrop-blur-md"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-100">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

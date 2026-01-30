export default function LearningProductsSection() {
  return (
    <section
      className="relative text-center px-6 py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://www.animaker.com/hub/wp-content/uploads/2024/03/giphy-8-300x169.gif')",
        backgroundColor: "#f9fafb",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">
          Market-Leading Learning Products
        </h2>
        <p className="text-xl font-medium max-w-2xl mx-auto text-center leading-relaxed tracking-wide text-white text-outline-black">
          <span className="font-semibold">AuraLearn</span> delivers transformative online education platforms for
          <span className="text-indigo-300"> schools</span>, <span className="text-indigo-300">universities</span>, and
          <span className="text-indigo-300"> corporate learning environments</span>, empowering learners and educators worldwide.
        </p>

      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "For Schools",
            desc: "Engage K-12 students with personalized pathways and gamified learning.",
            icon: "🎒",
          },
          {
            title: "For Universities",
            desc: "Deliver flexible, scalable higher ed platforms with data-driven insights.",
            icon: "🎓",
          },
          {
            title: "For Companies",
            desc: "Upskill teams with enterprise-ready training and interactive tools.",
            icon: "🏢",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-6 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-white/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PartnersSection() {
  const partners = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "GitHub",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "Coursera",
      logo: "https://www.svgrepo.com/show/353608/coursera.svg",
    },
    {
      name: "MIT OpenCourseWare",
      logo: "https://www.svgrepo.com/show/105198/massachusetts-institute-of-technology-logotype.svg",
    },
    {
      name: "AWS Educate",
      logo: "https://www.svgrepo.com/show/448266/aws.svg",
    },
    {
      name: "OpenAI",
      logo: "https://www.svgrepo.com/show/306500/openai.svg",
    },
    {
      name: "edX",
      logo: "https://www.svgrepo.com/show/330350/edx.svg",
    },
    {
      name: "Khan Academy",
      logo: "https://www.svgrepo.com/show/353965/khan-academy-icon.svg",
    },
  ];

  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://cdn.segd.org/wp-content/uploads/2025/02/Hush-1.gif')", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Work With?</h2>
        <p className="mb-10 text-gray-200">
          We collaborate with leading institutions, tech innovators, and global educators.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

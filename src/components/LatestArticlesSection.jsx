export default function LatestArticlesSection() {
  const articles = [
    {
      title: "Mastering AI-Powered Learning",
      excerpt:
        "Explore how artificial intelligence is reshaping personalized education and content delivery.",
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQETbbrYNLppiw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1731466344678?e=2147483647&v=beta&t=m8OMr-IYtMD0fno4iXQepyZ_xyclc91ZJc4gFdqUc4w",
      date: "June 5, 2025",
      author: "Dr. Emily Chen",
      url: "https://www.udemy.com/course/mastering-artificial-intelligence/?srsltid=AfmBOooa9a8-cbBIcVb_TBdvDtHx-mXcSAqL0KpHXQ-6YIjKKJ60mI4x",
    },
    {
      title: "Top 10 Free Courses to Upskill in 2025",
      excerpt:
        "We've curated the best free online courses in tech, business, and creative fields for this year.",
      image:
        "https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Online-Learning-Platforms.jpg",
      date: "May 28, 2025",
      author: "James Walters",
      url: "https://research.com/education/top-10-online-courses-to-upskill-in-emerging-tech",
    },
    {
      title: "The Future of Remote Learning",
      excerpt:
        "Remote education is evolving rapidly. Here's what to expect over the next five years.",
      image:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1790C/production/_100542569_airobot.gif",
      date: "May 15, 2025",
      author: "Sara Mahmood",
      url: "https://reverbico.com/blog/the-future-of-remote-learning/",
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-cover bg-center bg-no-repeat text-gray-900"
      style={{
        backgroundImage: `url('https://scitechdaily.com/images/AI-Technology-Creation-Concept.gif')`,
      }}
    >
      <div className="backdrop-blur-sm bg-white/20 p-6 rounded-lg max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
          Latest Trends :
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl overflow-hidden shadow-sm transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{article.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

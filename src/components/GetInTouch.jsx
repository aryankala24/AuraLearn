import React from 'react';

function GetInTouch() {
  return (
    <section
      className="relative px-6 py-24 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://cdn.myshoptet.com/usr/www.mapcards.net/user/documents/upload/MCT13.gif')",
      }}
    >
      {/* Gradient + Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-indigo-800/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center backdrop-blur-lg bg-white/10 rounded-xl p-10 shadow-2xl border border-white/20">
        <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-200 mb-8">
          Have questions, feedback, or partnership inquiries? We'd love to hear from you.
        </p>

        <div className="text-left space-y-4 text-gray-100">
          <p>
            <strong className="text-white">📞 Phone:</strong> +91 746-2823-289
          </p>
          <p>
            <strong className="text-white">📍 Location:</strong> Lucknow, Uttar Pradesh, India.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;

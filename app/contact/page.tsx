import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us - Dolphin Public School",
  description:
    "Get in touch with Dolphin Public School for admissions, inquiries, and more",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "old Faridabad bassa para, Faridabad 121002",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9999631657",
    },
    {
      icon: Mail,
      title: "Email",
      content: "dolphinpublicschool.faridabad@gmail.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri: 8:00 AM - 4:00 PM",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{info.content}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <ContactForm />

            {/* Map and Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-96 overflow-hidden">
                {/* ✅ ONLY THIS LINE IS CHANGED */}
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Old%20Faridabad%20Bassa%20Para%20Faridabad%20121002&output=embed"
                />
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Quick Connect
                </h3>
                <p className="text-slate-600 mb-6">
                  For urgent matters, you can reach our administrative office
                  directly during business hours.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">
                      Admissions:
                    </p>
                    <p className="text-lg font-bold text-blue-600">
                      dolphinpublicschool.faridabad@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">
                      Principal's Office:
                    </p>
                    <p className="text-lg font-bold text-blue-600">
                      +91 9999631657
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { Users, Lightbulb, Target, Award, BookOpen, Smile } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Dolphin Public School",
  description:
    "Learn about Dolphin Public School Faridabad - A premier educational institution offering quality education from Nursery to Class 8",
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "Committed to achieving the highest standards in academic and co-curricular activities",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Integrating modern teaching methods with traditional Indian values",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a supportive environment for holistic development of every child",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "CBSE Curriculum",
      description:
        "Following CBSE guidelines with focus on conceptual learning and skill development",
    },
    {
      icon: Award,
      title: "Qualified Faculty",
      description:
        "Experienced and certified teachers dedicated to student success",
    },
    {
      icon: Smile,
      title: "Child-Centric Approach",
      description:
        "Individual attention and personalized learning for every student",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1f3c88] to-[#2d5aa8]">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            About <span className="text-[#f9a826]">Dolphin Public School</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto text-balance">
            A premier educational institution in Faridabad, committed to
            nurturing young minds and building future leaders since 2019
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              // { number: "500+", label: "Students", delay: "delay-100" },
              {
                number: "30+",
                label: "Experienced Teachers",
                delay: "delay-200",
              },
              {
                number: "Class I-VIII",
                label: "Education Levels",
                delay: "delay-300",
              },
              {
                number: "5 Years",
                label: "Established Excellence",
                delay: "delay-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl border-2 border-[#1f3c88] hover:shadow-lg transition-all duration-300 text-center animate-scale-in ${stat.delay}`}
              >
                <p className="text-4xl font-bold text-[#1f3c88] mb-2">
                  {stat.number}
                </p>
                <p className="text-lg text-[#222222] font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About School */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h2 className="text-4xl font-bold text-[#1f3c88] mb-6">
                  About Our School
                </h2>
                <p className="text-lg text-[#222222] leading-relaxed mb-4">
                  Dolphin Public School, established in 2019, is a leading
                  educational institution located in Faridabad, Haryana. Over
                  the past five years, we have built a strong reputation for
                  providing quality education and holistic development to our
                  students.
                </p>
                <p className="text-lg text-[#222222] leading-relaxed">
                  Our school is home to more than 500 bright and enthusiastic
                  students spread across Nursery to Class 8, supported by a
                  dedicated team of 30+ highly qualified and experienced
                  teachers. We believe in creating a nurturing environment where
                  every child can flourish academically and personally.
                </p>
              </div>

              <div className="border-l-4 border-[#f9a826] pl-6">
                <h3 className="text-2xl font-bold text-[#1f3c88] mb-3">
                  Our Journey
                </h3>
                <p className="text-[#222222] leading-relaxed">
                  Since our inception in 2019, Dolphin Public School has grown
                  to become a trusted name in education. We are proud of the
                  progress our students have made and the positive impact we
                  have had on the community. Our commitment to excellence
                  remains unwavering.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-gradient-to-br from-[#1f3c88] to-[#2d5aa8] rounded-2xl h-80 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/school-campus-building.jpg"
                  alt="School campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#f9a826] rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Recognition</h3>
                <p>
                  One of the most trusted schools in Faridabad with excellent
                  academic results and student satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1f3c88] mb-16">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl border-2 border-[#1f3c88] hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-100">
              <div className="w-16 h-16 bg-[#1f3c88] text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-center text-[#1f3c88] mb-4">
                Our Mission
              </h3>
              <p className="text-[#222222] leading-relaxed text-center">
                To provide quality education that develops critical thinking,
                creativity, and character in our students. We aim to create
                responsible citizens who are equipped with skills to succeed in
                the 21st century while maintaining strong Indian values and
                traditions.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border-2 border-[#f9a826] hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-[#f9a826] text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-center text-[#1f3c88] mb-4">
                Our Vision
              </h3>
              <p className="text-[#222222] leading-relaxed text-center">
                To be a beacon of excellence in education, where every student
                is empowered to discover their unique potential and pursue their
                dreams. We aspire to build a learning community that values
                integrity, compassion, and continuous growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1f3c88] text-center mb-16">
            Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl border-2 border-[#1f3c88] hover:border-[#f9a826] hover:shadow-lg transition-all duration-300 animate-scale-in delay-${index * 100}`}
                >
                  <div className="w-14 h-14 bg-[#1f3c88] text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1f3c88] mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-[#222222] text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1f3c88] text-center mb-16">
            Why Choose Dolphin Public School?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 animate-fade-in-up delay-${index * 100}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1f3c88] to-[#2d5aa8] text-white rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1f3c88] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#222222] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1f3c88] text-center mb-16">
            Academic Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="flex gap-4">
                <div className="w-2 h-12 bg-[#f9a826] rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f3c88] mb-2">
                    CBSE Curriculum
                  </h3>
                  <p className="text-[#222222]">
                    We follow the Central Board of Secondary Education (CBSE)
                    curriculum with emphasis on conceptual understanding and
                    practical application.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-12 bg-[#f9a826] rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f3c88] mb-2">
                    Modern Infrastructure
                  </h3>
                  <p className="text-[#222222]">
                    Well-equipped classrooms, libraries, computer labs, and
                    sports facilities to support all-round development.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-12 bg-[#f9a826] rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f3c88] mb-2">
                    Experienced Faculty
                  </h3>
                  <p className="text-[#222222]">
                    Our team of 30+ qualified teachers brings expertise and
                    dedication to ensure quality education for every student.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1f3c88] to-[#2d5aa8] rounded-2xl p-10 text-white animate-slide-in-right">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f9a826] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#1f3c88]">+</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">
                      Strong Academic Record
                    </h4>
                    <p>
                      Consistent performance and student achievements across all
                      subjects
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f9a826] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#1f3c88]">+</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">
                      Co-Curricular Activities
                    </h4>
                    <p>
                      Sports, arts, music, and cultural programs for holistic
                      development
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f9a826] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#1f3c88]">+</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">
                      Individual Attention
                    </h4>
                    <p>
                      Small class sizes ensuring personalized learning for each
                      student
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

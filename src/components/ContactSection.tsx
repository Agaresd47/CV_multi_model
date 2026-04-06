import { getProfileSection, type Locale } from "@/utils/profileData";

export default function ContactSection({ locale = "en" }: { locale?: Locale }) {
  const contact = getProfileSection("contact", locale);
  const isZh = locale === "zh";

  return (
    <section id="contact" className="py-20">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          {isZh
            ? "目前正在寻找 2026 年全职机会"
            : "Open to 2026 Full-Time Opportunities"}
        </h2>
        <div className="max-w-md mx-auto">
          <p className="mb-8 text-center">
            {isZh
              ? "我重点关注机器学习、应用 AI、量化研究、医学 AI 和大模型系统岗位。如果你的团队在处理复杂真实数据、应用研究或需要模型与工程结合的工作，欢迎联系我。"
              : `I am actively looking for full-time roles in machine learning, applied AI,
            quantitative research, medical AI, and LLM systems. If your team works on
            difficult real-world data, applied research, or production-facing modeling,
            I would be glad to connect.`}
          </p>
          <div className="flex flex-col justify-center gap-4 mb-8 sm:flex-row">
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-center rounded-full btn-primary"
            >
              {isZh ? "打开简历" : "Open Resume"}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="px-6 py-3 text-center rounded-full btn-secondary"
            >
              {isZh ? "邮件联系" : "Email Me"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

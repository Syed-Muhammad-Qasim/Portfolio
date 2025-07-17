import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactCard() {
  const contacts = [
    {
      type: "Email",
      icon: <Mail className="text-emerald-200 w-10 h-10 md:w-6 md:h-6" />,
      link: "http://moh.qasim1214@gmail.com",
      description: "Send me an email",
    },
    {
      type: "GitHub",
      icon: <Github className="text-emerald-200 w-10 h-10 md:w-6 md:h-6" />,
      link: "https://github.com/Syed-Muhammad-Qasim",
      description: "View my projects",
    },
    {
      type: "LinkedIn",
      icon: <Linkedin className="text-emerald-200 w-10 h-10 md:w-6 md:h-6" />,
      link: "https://www.linkedin.com/in/syed-muhammad-qasim-69374a360/",
      description: "Connect with me",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800 w-full h-[650px] flex flex-col items-center gap-2">
      <h1 className="text-emerald-400 font-bold text-4xl mt-6 mb-4 underline decoration-emerald-800 decoration-4 underline-offset-8">
        Get Connected To Me
      </h1>
      <div className="  flex flex-col gap-4 md:flex-row ">
        {contacts.map((contact) => (
          <a
            key={contact.type}
            href={contact.link}
            className="bg-emerald-950 border border-emerald-800 rounded-xl shadow-lg p-5 flex flex-col hover:bg-emerald-900 h-[175px] w-[250px] items-center justify-center md:h-[140px] md:w-[250px] "
          >
            {contact.icon}
            <h3 className="mt-2 font-bold text-emerald-400">{contact.type}</h3>
            <p className="text-md text-emerald-200">{contact.description}</p>
          </a>
        ))}
      </div>
      <form className="hidden md:flex flex-col bg-emerald-950 bg-opacity-90 rounded-2xl shadow-2xl mt-4 w-[500px] items-center p-4 h-[350px] lg:w-[600px]">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4 ">
          Send a Message
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 px-4 py-2 rounded-lg bg-emerald-900 text-emerald-200 placeholder-emerald-300 w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="mb-4 px-4 py-2 rounded-lg bg-emerald-900 text-emerald-200 placeholder-emerald-300 w-full"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={3}
          className="mb-4 px-4 py-2 rounded-lg bg-emerald-900 text-emerald-200 placeholder-emerald-300 w-full"
          required
        />

        <button
          type="submit"
          className="bg-emerald-400 text-gray-900 font-semibold py-2 rounded-lg  w-full hover:bg-emerald-300 hover:scale-100 hover:shadow-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}

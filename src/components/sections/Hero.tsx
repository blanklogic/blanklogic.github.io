import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Star,
  Trophy,
  Shield,
  Sword,
} from "lucide-react";
import { useState, useEffect } from "react";
import heroPortrait from "@/assets/heroPortrait.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const roles = [
      "Full Stack Developer",
      "Software Engineer",
      "Mobile Developer",
      "Problem Solver",
      "Computer Science @ NUS & UofT",
      "NUS College",
      "Ready for Adventures",
    ];
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentRole.length) {
            setTypedText(currentRole.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    {
      value: "Lv.128",
      label: "Developer Level",
      icon: Trophy,
      color: "maple-yellow",
      subtitle: "Junior Coder",
    },
    {
      value: "10+",
      label: "Tech Skills",
      icon: Sword,
      color: "maple-blue",
      subtitle: "Weapon Mastery",
    },
    {
      value: "6+",
      label: "Quests Complete",
      icon: Shield,
      color: "maple-green",
      subtitle: "Achievement Hunter",
    },
  ];

  const floatingEmojis = ["🍁", "🍁", "🍁", "🍁", "🍁", "🍁", "🍁", "🍁"];
  const [activeEmoji, setActiveEmoji] = useState(0);

  useEffect(() => {
    const emojiInterval = setInterval(() => {
      setActiveEmoji((prev) => (prev + 1) % floatingEmojis.length);
    }, 2000);
    return () => clearInterval(emojiInterval);
  }, [floatingEmojis.length]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-[hsl(var(--uranian-blue))] rounded-full opacity-10 blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-[hsl(var(--thistle))] rounded-full opacity-10 blur-3xl animate-float"
          style={{
            animationDelay: "2s",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>

        {floatingEmojis.map((emoji, index) => (
          <div
            key={index}
            className={`absolute text-4xl transition-all duration-1000 ${
              index === activeEmoji
                ? "opacity-80 scale-110"
                : "opacity-30 scale-90"
            }`}
            style={{
              top: `${20 + index * 10}%`,
              left: `${10 + index * 12}%`,
              transform: `translateY(${scrollY * (0.1 + index * 0.05)}px) rotate(${index * 45}deg)`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center space-x-3 glass-card px-6 py-3 rounded-full hover:scale-105 transition-all cursor-default group card-interactive">
              <div className="level-display w-8 h-8 flex items-center justify-center text-xs">
                128
              </div>
              <Sparkles
                size={16}
                className="text-[hsl(var(--maple-blue))] group-hover:animate-spin maple-leaf"
              />
              <span className="text-sm font-bold text-gray-800">
                🏛️ Currently in Toronto Guild • 🎓 NUS Overseas Colleges
              </span>
              <div className="w-2 h-2 bg-[hsl(var(--maple-green))] rounded-full animate-pulse"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg text-gray-700 font-medium">
                  🎮 Player Name:
                </span>
                <div className="exp-bar h-2 w-24 rounded-full"></div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[hsl(var(--maple-red))] via-[hsl(var(--maple-orange))] to-[hsl(var(--maple-blue))] bg-clip-text text-transparent leading-tight">
                🍁 Jaymeson Koh
              </h1>
              <div className="h-16 flex items-center space-x-3">
                <span className="text-sm text-gray-700">Class:</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-[hsl(var(--maple-blue))] font-mono">
                  {typedText}
                  <span className="animate-pulse text-[hsl(var(--maple-orange))]">
                    |
                  </span>
                </h2>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Origin:</span>
                  <span className="font-semibold text-gray-800">
                    🇸🇬 Victoria Island (Singapore)
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Current Map:</span>
                  <span className="font-semibold text-gray-800">
                    🇨🇦 Maple World (Toronto)
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 max-w-lg border border-[hsl(var(--maple-blue))]">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-bold text-[hsl(var(--maple-red))]">
                  📜 Quest Log:
                </span>
                <div className="text-xs text-gray-600">Active Adventure</div>
              </div>
              <p className="text-base text-gray-800 leading-relaxed">
                A brave <strong className="text-blue-700">Code Warrior</strong>{" "}
                from the mystical lands of Singapore 🏝️, currently exploring the
                northern territories of Toronto 🗺️ through the legendary
                <strong className="text-green-700">
                  {" "}
                  NUS Overseas Colleges
                </strong>{" "}
                guild. Wielding powerful spells in{" "}
                <strong className="text-orange-700">React Native</strong>,
                <strong className="text-purple-700"> TypeScript</strong>, and
                <strong className="text-red-700"> Java</strong> magic! ⚔️✨
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <div className="w-2 h-2 bg-[hsl(var(--maple-green))] rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600">
                  Currently employed at Monark Guild
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center skill-icon p-4 hover-lift group transition-all duration-300 card-interactive"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-2">
                    <div
                      className={`skill-icon w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[hsl(var(--${stat.color}))] to-[hsl(var(--${stat.color}))]/70`}
                    >
                      <stat.icon
                        size={20}
                        className="text-[hsl(var(--maple-blue))] drop-shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[hsl(var(--maple-red))] font-mono group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-foreground mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.subtitle}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-gradient-to-r from-[hsl(var(--maple-blue))] to-[hsl(var(--maple-purple))] text-white font-bold rounded-lg hover-lift shine-effect flex items-center space-x-2 group border-2 border-[hsl(var(--maple-blue))] card-interactive"
              >
                <Mail className="h-5 w-5 group-hover:animate-pulse" />
                <span>📧 Send Message</span>
                <Star className="h-4 w-4 maple-leaf" />
              </button>
              <a
                href="/JaymesonKohResume.pdf"
                className="px-6 py-3 bg-gradient-to-r from-[hsl(var(--maple-orange))] to-[hsl(var(--maple-red))] text-white font-bold rounded-lg hover-lift flex items-center space-x-2 group border-2 border-[hsl(var(--maple-orange))] card-interactive"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>📜 Get Quest Scroll</span>
                <div className="maple-leaf">🍁</div>
              </a>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/blanklogic"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gradient-to-br from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 transition-all hover:scale-110 group card-interactive border-2 border-gray-700"
                title="🏰 Code Repository"
              >
                <Github size={28} className="group-hover:animate-pulse" />
              </a>
              <a
                href="https://linkedin.com/in/jaymesonkoh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-700 transition-all hover:scale-110 group card-interactive border-2 border-blue-500"
                title="🤝 Professional Guild"
              >
                <Linkedin size={28} className="group-hover:animate-pulse" />
              </a>
              <a
                href="mailto:tellmindblank@gmail.com"
                className="p-4 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 text-white hover:from-red-400 hover:to-orange-500 transition-all hover:scale-110 group card-interactive border-2 border-red-400"
                title="✉️ Send Direct Message"
              >
                <Mail size={28} className="group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="relative z-10">
              <div className="w-full aspect-square rounded-2xl skill-icon animate-float flex items-center justify-center bg-gradient-to-br from-[hsl(var(--maple-blue))] via-[hsl(var(--maple-purple))] to-[hsl(var(--maple-red))] hover:from-[hsl(var(--maple-orange))] hover:to-[hsl(var(--maple-yellow))] transition-all duration-1000 group cursor-pointer card-interactive border-4 border-[hsl(var(--maple-yellow))] overflow-hidden">
                <img 
                  src={heroPortrait} 
                  alt="Jaymeson Koh - Code Specialist" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 group-hover:from-black/40 transition-all duration-1000"></div>
                
                <div className="text-center text-white space-y-4 relative z-10">
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg text-white drop-shadow-lg">🍁 Code Specialist</p>
                      <div className="text-xs text-white/80 mb-1 font-bold mt-1">EXP</div>
                      <div className="exp-bar h-2 rounded-full border border-white/30 w-40"></div>
                    </div>
                    <div className="level-display w-16 h-16 flex items-center justify-center text-lg font-bold group-hover:animate-pulse">
                      128
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[hsl(var(--maple-green))] to-[hsl(var(--maple-blue))] rounded-2xl opacity-20 animate-float blur-sm" style={{ animationDelay: "1s" }}></div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-[hsl(var(--maple-orange))] to-[hsl(var(--maple-red))] rounded-2xl opacity-20 animate-float blur-sm" style={{ animationDelay: "2s" }}></div>
            <div className="absolute top-10 right-10 text-2xl maple-leaf opacity-60">🍁</div>
            <div className="absolute bottom-20 left-10 text-xl maple-leaf opacity-40" style={{ animationDelay: "1s" }}>🍁</div>
          </div>
        </div>

        <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <button
            onClick={scrollToAbout}
            className="animate-bounce skill-icon p-6 rounded-full bg-gradient-to-br from-[hsl(var(--maple-yellow))] to-[hsl(var(--maple-orange))] hover:from-[hsl(var(--maple-green))] hover:to-[hsl(var(--maple-blue))] transition-all hover:scale-110 group card-interactive border-2 border-[hsl(var(--maple-red))]"
          >
            <div className="flex flex-col items-center space-y-2 text-foreground">
              <span className="text-sm font-bold opacity-90 group-hover:opacity-100 drop-shadow-lg">🗺️ Start Adventure</span>
              <ArrowDown size={32} className="group-hover:animate-pulse drop-shadow-lg" />
              <div className="flex space-x-1">
                <div className="maple-leaf text-xs">🍁</div>
                <div className="maple-leaf text-xs" style={{ animationDelay: "0.5s" }}>🍁</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

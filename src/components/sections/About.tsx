import {
  Heart,
  Code,
  Lightbulb,
  Target,
  Coffee,
  Music,
  Zap,
  Sparkles,
  Star,
  Smile,
  Shield,
  Sword,
  Wand2,
  Trophy,
  Crown,
  Map,
} from "lucide-react";
import { useState, useEffect } from "react";
import aboutPortrait from "@/assets/aboutPortrait.jpg";

const About = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [isMatchaTime, setIsMatchaTime] = useState(false);
  const [funFacts, setFunFacts] = useState([
    "🏝️ Adventurer from Victoria Island (Singapore)",
    "🏛️ Currently exploring Maple World Toronto",
    "⚔️ Code Warrior at Monark Guild",
    "🧙‍♂️ Master of React Native & TypeScript magic",
    "👑 Deputy Director of Technologies Guild",
    "🗺️ Quest: Decode the mysteries of MapleStory as a child",
  ]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const valueInterval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 4);
    }, 3000);

    const factInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 2500);

    return () => {
      clearInterval(valueInterval);
      clearInterval(factInterval);
    };
  }, [funFacts.length]);

  const values = [
    {
      icon: Sword,
      title: "⚔️ Combat Skills (Technical)",
      description:
        "Master of multiple programming languages and frameworks. Wielding Java, TypeScript, React Native, and modern web magic to build legendary applications that users love!",
      color: "maple-red",
      emoji: "⚔️",
      level: 128,
      stat: "ATT +150",
    },
    {
      icon: Shield,
      title: "🛡️ Defense Skills (Problem Solving)",
      description:
        "Equipped with strong debugging armor and system design shields. From deciphering MapleStory private server source codes as a child to solving complex software architecture challenges!",
      color: "maple-blue",
      emoji: "🛡️",
      level: 88,
      stat: "DEF +120",
    },
    {
      icon: Wand2,
      title: "🪄 Magic Skills (Leadership)",
      description:
        "Casting collaboration spells and team leadership enchantments. Leading guild members at NUS College Club while exploring international territories!",
      color: "maple-purple",
      emoji: "🪄",
      level: 85,
      stat: "MATT +95",
    },
    {
      icon: Crown,
      title: "👑 Passive Skills (Adaptability)",
      description:
        "Legendary ability to adapt across different worlds - from Singapore's Victoria Island to Toronto's Maple World. Always learning new skills and techniques!",
      color: "maple-yellow",
      emoji: "👑",
      level: 90,
      stat: "EXP +200%",
    },
  ];

  const getColorClass = (color) => {
    const colorMap = {
      "carnation-pink": "bg-[hsl(var(--carnation-pink))]",
      "uranian-blue": "bg-[hsl(var(--uranian-blue))]",
      thistle: "bg-[hsl(var(--thistle))]",
      "light-sky-blue": "bg-[hsl(var(--light-sky-blue))]",
    };
    return colorMap[color];
  };

  return (
    <section id="about" className="py-20 scroll-mt-20 section-reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="level-display w-12 h-12 flex items-center justify-center text-lg font-bold">
              128
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--maple-red))] via-[hsl(var(--maple-orange))] to-[hsl(var(--maple-blue))] bg-clip-text text-transparent">
              🍁 Character Profile
            </h2>
            <Map
              size={32}
              className="text-[hsl(var(--maple-green))] maple-leaf"
            />
          </div>

          <div className="glass-card p-6 max-w-4xl mx-auto mb-6 border-2 border-[hsl(var(--maple-blue))]">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Trophy className="text-[hsl(var(--maple-yellow))]" size={24} />
              <span className="text-lg font-bold text-[hsl(var(--maple-red))]">
                🗡️ Adventure Background
              </span>
              <Trophy className="text-[hsl(var(--maple-yellow))]" size={24} />
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              A legendary{" "}
              <strong className="text-[hsl(var(--maple-blue))]">
                Code Warrior
              </strong>{" "}
              who began their quest by exploring the mysteries of MapleStory as
              a young adventurer! 🎮 Now embarking on an epic journey from
              Victoria Island (Singapore) to the northern territories of Maple
              World (Toronto) through the prestigious{" "}
              <strong className="text-[hsl(var(--maple-green))]">
                NUS Overseas Colleges Guild
              </strong>
              . Currently mastering advanced programming spells and leading
              technological expeditions! ⚔️✨
            </p>
          </div>

          {/* Quest Log Carousel */}
          <div className="skill-icon p-4 rounded-lg inline-flex items-center space-x-3 hover-lift card-interactive bg-gradient-to-r from-[hsl(var(--maple-orange))] to-[hsl(var(--maple-red))] border-2 border-[hsl(var(--maple-yellow))]">
            <Sparkles
              size={20}
              className="text-white animate-spin maple-leaf"
            />
            <span className="text-sm font-bold text-foreground drop-shadow-lg">
              📜 Quest Log:
            </span>
            <span className="text-sm text-foreground font-bold transition-all duration-300 drop-shadow-lg">
              {funFacts[currentFactIndex]}
            </span>
            <Star size={20} className="text-white animate-pulse maple-leaf" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group lg:sticky lg:top-24 lg:self-start">
            <div className="relative z-10">
              <div className="w-full aspect-square rounded-2xl skill-icon hover-lift flex items-center justify-center transition-all duration-1000 group cursor-pointer card-interactive bg-gradient-to-br from-[hsl(var(--maple-green))] via-[hsl(var(--maple-blue))] to-[hsl(var(--maple-purple))] border-4 border-[hsl(var(--maple-yellow))] overflow-hidden">
                <img 
                  src={aboutPortrait} 
                  alt="Jaymeson Koh - Character Profile" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 group-hover:from-black/40 transition-all duration-1000"></div>
                
                <div className="text-center text-white space-y-4 relative z-10">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-bold text-lg text-white drop-shadow-lg mb-2">
                        🍁 Code Specialist
                      </p>
                      <div className="text-xs text-white/80 mb-1 font-bold">
                        EXP to Next Level
                      </div>
                      <div className="exp-bar h-2 rounded-full border border-white/30 w-40"></div>
                    </div>
                    <div className="level-display w-16 h-16 flex items-center justify-center text-lg font-bold ml-4">
                      128
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-[hsl(var(--maple-orange))] to-[hsl(var(--maple-red))] rounded-2xl opacity-15 animate-float blur-sm" style={{ animationDelay: "1s" }}></div>
            <div className="absolute -bottom-8 -left-8 w-full h-full bg-gradient-to-br from-[hsl(var(--maple-yellow))] to-[hsl(var(--maple-green))] rounded-2xl opacity-15 animate-float blur-sm" style={{ animationDelay: "2s" }}></div>
            <div className="absolute top-10 right-8 text-3xl maple-leaf opacity-60">🍁</div>
            <div className="absolute bottom-16 left-8 text-2xl maple-leaf opacity-40" style={{ animationDelay: "1s" }}>🍁</div>
          </div>

          {/* Adventure Story Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="glass-card p-6 border-2 border-[hsl(var(--maple-green))]">
                <div className="flex items-center space-x-2 mb-4">
                  <Map className="text-[hsl(var(--maple-green))]" size={20} />
                  <span className="font-bold text-[hsl(var(--maple-blue))]">
                    🗺️ Adventure Log - Chapter 1
                  </span>
                </div>
                <p className="text-base text-foreground leading-relaxed">
                  My legendary journey began in the mystical lands of Victoria
                  Island (Singapore), where I first discovered the ancient art
                  of code magic by exploring MapleStory's mysterious systems!
                  🎮✨ This early quest sparked my passion for understanding how
                  digital worlds are built.
                </p>
              </div>

              <div className="glass-card p-6 border-2 border-[hsl(var(--maple-blue))]">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="text-[hsl(var(--maple-blue))]" size={20} />
                  <span className="font-bold text-[hsl(var(--maple-purple))]">
                    ⚔️ Current Quest - Chapter 2
                  </span>
                </div>
                <p className="text-base text-foreground leading-relaxed">
                  Now adventuring through the northern territories of Maple
                  World (Toronto) via the prestigious{" "}
                  <strong className="text-[hsl(var(--maple-green))]">
                    NUS Overseas Colleges Guild
                  </strong>
                  ! Currently employed as a{" "}
                  <strong className="text-[hsl(var(--maple-red))]">
                    Junior Full Stack Developer
                  </strong>{" "}
                  at the legendary Monark Guild, while simultaneously serving as{" "}
                  <strong className="text-[hsl(var(--maple-orange))]">
                    Deputy Director of Technologies
                  </strong>{" "}
                  back at NUS College Club! 🏰
                </p>
              </div>

              {/* Skill Inventory */}
              <div className="glass-card p-6 border-2 border-[hsl(var(--maple-orange))]">
                <div className="flex items-center space-x-2 mb-4">
                  <Sword className="text-[hsl(var(--maple-red))]" size={20} />
                  <span className="font-bold text-[hsl(var(--maple-red))]">
                    ⚔️ Weapon & Magic Inventory
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Java Sword", emoji: "⚔️", color: "maple-red" },
                    {
                      name: "TypeScript Staff",
                      emoji: "🪄",
                      color: "maple-blue",
                    },
                    {
                      name: "React Native Shield",
                      emoji: "🛡️",
                      color: "maple-green",
                    },
                    { name: "Next.js Bow", emoji: "🏹", color: "maple-purple" },
                    {
                      name: "Firebase Scroll",
                      emoji: "📜",
                      color: "maple-orange",
                    },
                    {
                      name: "PostgreSQL Potion",
                      emoji: "🧪",
                      color: "maple-yellow",
                    },
                  ].map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`skill-icon px-4 py-2 text-sm font-bold hover-lift cursor-default transition-all duration-300 card-interactive bg-gradient-to-r from-[hsl(var(--${skill.color}))] to-[hsl(var(--${skill.color}))]/80 text-white border border-[hsl(var(--${skill.color}))]`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill.emoji} {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RPG Skill Tree */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`skill-icon p-6 hover-lift hover-glow space-y-4 cursor-pointer transition-all duration-500 card-interactive bg-gradient-to-br from-[hsl(var(--${value.color}))] to-[hsl(var(--${value.color}))]/70 border-3 border-[hsl(var(--${value.color}))] ${
                    activeValue === index
                      ? "ring-4 ring-[hsl(var(--maple-yellow))] ring-opacity-60 scale-105 animate-pulse"
                      : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setActiveValue(index)}
                >
                  {/* Skill Level Display */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`skill-icon w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-lg flex items-center justify-center transition-all duration-300 border-2 border-[hsl(var(--${value.color}))] ${
                        activeValue === index ? "animate-bounce scale-110" : ""
                      }`}
                    >
                      <value.icon
                        size={24}
                        className={`text-[hsl(var(--${value.color}))] ${
                          activeValue === index ? "animate-pulse" : ""
                        }`}
                      />
                    </div>
                    <div className="text-right">
                      <div className="level-display w-10 h-10 flex items-center justify-center text-sm font-bold">
                        {value.level}
                      </div>
                      <div className="text-xs text-foreground font-bold mt-1 drop-shadow-lg">
                        {value.stat}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-foreground text-lg drop-shadow-lg transition-all duration-300">
                    {value.title} {activeValue === index ? "🌟" : ""}
                  </h3>

                  <p className="text-sm text-foreground leading-relaxed drop-shadow-md transition-all duration-300">
                    {value.description} {activeValue === index ? "✨" : ""}
                  </p>

                  {/* EXP Bar */}
                  <div className="space-y-1">
                    <div className="text-xs text-white font-bold">
                      Skill EXP
                    </div>
                    <div className="exp-bar h-2 rounded-full border border-white/30"></div>
                  </div>

                  {activeValue === index && (
                    <div className="flex justify-center items-center space-x-2 mt-3 animate-bounce">
                      <Trophy size={16} className="text-foreground" />
                      <span className="text-xs text-foreground font-bold">
                        MAXED SKILL!
                      </span>
                      <Trophy size={16} className="text-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Ultimate Quest Goal */}
            <div className="text-center mt-8 p-8 skill-icon rounded-2xl hover-lift card-interactive bg-gradient-to-br from-[hsl(var(--maple-red))] via-[hsl(var(--maple-orange))] to-[hsl(var(--maple-yellow))] border-4 border-[hsl(var(--maple-yellow))]">
              <div className="flex justify-center items-center space-x-3 mb-4">
                <Crown className="text-[hsl(var(--maple-yellow))]" size={32} />
                <div className="text-4xl maple-leaf">🏆</div>
                <Crown className="text-[hsl(var(--maple-yellow))]" size={32} />
              </div>
              <div className="level-display w-20 h-20 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                ∞
              </div>
              <p className="text-lg font-bold italic text-foreground drop-shadow-lg leading-relaxed">
                "🌟 <strong>Ultimate Quest</strong>: Seeking legendary guild
                opportunities where I can combine my international adventure
                experience and mastery of full-stack magic to build
                world-changing applications! Ready to embark on the next epic
                chapter of my coding journey! ⚔️🍁"
              </p>
              <p className="text-sm text-foreground/80 mt-4 font-semibold drop-shadow-md">
                - 🧙‍♂️ The Code Master's Vision
              </p>
              <div className="flex justify-center space-x-2 mt-4">
                <div className="maple-leaf text-2xl">🍁</div>
                <div
                  className="maple-leaf text-2xl"
                  style={{ animationDelay: "0.5s" }}
                >
                  🍁
                </div>
                <div
                  className="maple-leaf text-2xl"
                  style={{ animationDelay: "1s" }}
                >
                  🍁
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

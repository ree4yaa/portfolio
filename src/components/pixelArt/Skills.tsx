import { useState } from 'react';
import { PixelPanel } from '@/components/pixelArt/PixelPanel';
import { useReveal } from '@/components/pixelArt/useReveal';
import { Sword, Code2, Brain, Wrench, Lock, Star } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  desc: string;
  unlocked: boolean;
}

interface SkillCategory {
  name: string;
  color: 'pink' | 'cyan' | 'green' | 'yellow' | 'purple' | 'Pink' | 'Lavender';
  icon: typeof Sword;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    name: 'Cybersecurity',
    color: 'Pink',
    icon: Brain,
    skills: [
     { name: 'Linux CLI', level: 70, desc: 'Command line proficiency & shell scripting', unlocked: true },
      { name: 'Networking fundamentals', level: 90, desc: 'Core networking concepts & protocols', unlocked: true },
      { name: 'HTTP, DNS & web fundamentals', level: 85, desc: 'Understanding web protocols & services', unlocked: true },
      { name: 'Nmap', level: 65, desc: 'Network scanning & enumeration', unlocked: true},
    ],
  },
  {
    name: 'AI Automation',
    color: 'purple',
    icon: Brain,
    skills: [
      {name: 'Make', level: 75, desc: 'Workflow automation & integrations', unlocked: true },
      {name: 'Airtable', level: 65, desc: 'Database management & automation', unlocked: true },
      {name: 'tally', level: 60, desc: 'Form building & data collection', unlocked: true },
      {name: 'Webhooks & APIs', level: 70, desc: 'Event-driven automation & notifications', unlocked: true },
      {name: 'JSON & workflow automation', level: 80, desc: 'Data formatting & integration', unlocked: true }
    ]
    },
  {
    name: 'Web Development',
    color: 'Lavender',
    icon: Code2,
    skills: [
      { name: 'HTML', level: 90, desc: 'Semantic markup & accessibility', unlocked: true },
      { name: 'CSS', level: 85, desc: 'Responsive layouts & animations', unlocked: true },
      { name: 'JavaScript', level: 80, desc: 'ES6+, DOM, async patterns', unlocked: true },
      { name: 'React', level: 75, desc: 'Hooks, components, state mgmt', unlocked: true },
      { name: 'Tailwind', level: 82, desc: 'Utility-first CSS framework', unlocked: true },
    ],
  },
  {
    name: 'Programming',
    color: 'pink',
    icon: Sword,
    skills: [
      { name: 'Python', level: 78, desc: 'Scripting, automation, OOP', unlocked: true },
      { name: 'SQL', level: 72, desc: 'Queries, joins, schema design', unlocked: true },
      { name: 'C / C++', level: 60, desc: 'Systems programming basics', unlocked: false },
    ],
  },
  
  {
    name: 'Tools',
    color: 'yellow',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub', level: 80, desc: 'Version control & collaboration', unlocked: true },
      { name: 'VS Code', level: 90, desc: 'Primary development environment', unlocked: true },
      { name: 'Wireshark', level: 35, desc: 'Network analysis & troubleshooting', unlocked: true },
      {name: 'Hydra', level: 50, desc: 'Password cracking & brute-force attacks', unlocked: true}
    ],
  },
];

const colorHex: Record<string, string> = {
  pink: '#ff2e88',
  Lavender: '#A78BFA',
  green: '#22C55E',
  yellow: '#F59E0B',
  purple: '#9d4edd',
  'Pink': '#F472B6',
};

export function Skills() {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeCat, setActiveCat] = useState(0);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-20 px-4 overflow-hidden bg-retro-bg2 pixel-noise"
    >
      <div className="absolute inset-0 pixel-grid opacity-20" />

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <div className="inline-block bg-retro-bg2 border-4 border-retro-dark px-6 py-3 mb-4" style={{ boxShadow: '0 0 0 4px #39ff14, 0 0 20px rgba(57,255,20,0.2)' }}>
          <span className="font-pixel text-[10px] sm:text-[14px] text-retro-green">
            SKILL TREE
          </span>
        </div>
        <h2 className="font-pixel text-[16px] sm:text-[24px] md:text-[32px] text-retro-white text-pixel-shadow mb-3">
          SKILLS
        </h2>
        <p className="font-mono text-lg text-retro-gray">~ Unlockable Abilities ~</p>
      </div>

      <div ref={ref} className={`relative z-10 max-w-5xl mx-auto ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = activeCat === i;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCat(i)}
                className={`flex items-center gap-2 font-pixel text-[8px] sm:text-[10px] px-3 sm:px-4 py-2 sm:py-3 border-4 border-retro-dark transition-all duration-100 ${
                  isActive ? 'bg-retro-panel2' : 'bg-retro-bg2'
                }`}
                style={{
                  boxShadow: isActive
                    ? `0 0 0 4px ${colorHex[cat.color]}, 0 0 16px ${colorHex[cat.color]}66`
                    : '0 0 0 2px #33334a',
                  color: isActive ? colorHex[cat.color] : '#5a5a7a',
                }}
              >
                <Icon size={14} strokeWidth={2.5} />
                <span className="hidden sm:inline">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill tree grid */}
        <div className="relative">
          {/* Connection lines decoration */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-retro-gray/20 -translate-x-1/2 hidden md:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {categories[activeCat].skills.map((skill, i) => {
              const cat = categories[activeCat];
              const isHovered = hovered === skill.name;
              return (
                <div
                  key={skill.name}
                  className="relative"
                  onMouseEnter={() => setHovered(skill.name)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Connection node */}
                  <div
                    className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 border-2 border-retro-dark z-10"
                    style={{ backgroundColor: skill.unlocked ? colorHex[cat.color] : '#33334a' }}
                  />

                  <div
                    className={`relative p-4 bg-retro-panel border-4 border-retro-dark transition-all duration-150 cursor-pointer ${
                      skill.unlocked ? 'card-hover' : ''
                    } ${isHovered && skill.unlocked ? 'animate-shake' : ''}`}
                    style={{
                      boxShadow: isHovered && skill.unlocked
                        ? `0 0 0 4px ${colorHex[cat.color]}, 0 0 20px ${colorHex[cat.color]}88`
                        : `0 0 0 2px ${skill.unlocked ? colorHex[cat.color] + '44' : '#33334a'}`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {skill.unlocked ? (
                          <Star size={14} fill={colorHex[cat.color]} className="text-current" style={{ color: colorHex[cat.color] }} />
                        ) : (
                          <Lock size={14} className="text-retro-gray" />
                        )}
                        <span
                          className="font-pixel text-[9px] sm:text-[11px]"
                          style={{ color: skill.unlocked ? colorHex[cat.color] : '#5a5a7a' }}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-pixel text-[7px] text-retro-gray">
                        LV.{Math.floor(skill.level / 10)}
                      </span>
                    </div>

                    {/* Skill level bar */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-3 border-2 border-retro-dark bg-retro-dark relative overflow-hidden">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: skill.unlocked ? `${skill.level}%` : '0%',
                            backgroundColor: colorHex[cat.color],
                            boxShadow: skill.unlocked ? `0 0 8px ${colorHex[cat.color]}` : 'none',
                          }}
                        />
                      </div>
                      <span className="font-pixel text-[7px]" style={{ color: colorHex[cat.color] }}>
                        {skill.unlocked ? `${skill.level}%` : '???'}
                      </span>
                    </div>

                    {/* Tooltip on hover */}
                    {isHovered && (
                      <div
                        className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 bg-retro-dark border-2 border-retro-dark px-3 py-2 whitespace-nowrap animate-pop-in tooltip-arrow"
                        style={{ boxShadow: `0 0 0 2px ${colorHex[cat.color]}` }}
                      >
                        <p className="font-mono text-sm text-retro-white">{skill.desc}</p>
                        <p className="font-pixel text-[6px] mt-1" style={{ color: colorHex[cat.color] }}>
                          PROFICIENCY: {skill.level}%
                        </p>
                      </div>
                    )}

                    {/* Lock overlay */}
                    {!skill.unlocked && (
                      <div className="absolute inset-0 bg-retro-dark/50 flex items-center justify-center">
                        <span className="font-pixel text-[7px] text-retro-gray animate-blink">
                          LOCKED
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill tree footer */}
        <div className="mt-8 text-center">  
        </div>
      </div>
    </section>
  );
}

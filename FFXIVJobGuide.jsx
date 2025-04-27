import { useState } from 'react';

export default function FFXIVJobGuide() {
  const [activeJob, setActiveJob] = useState('paladin');
  
  const jobsByRole = {
    tank: [
      {
        id: 'paladin',
        name: "Paladin",
        role: "Tank",
        icon: "🛡️",
        description: "Paladins are stalwart defenders who wield swords and shields. They excel at protecting allies through powerful defensive abilities and can even cast healing magic.",
        playstyle: "Paladins alternate between physical and magical damage phases while maintaining defensive cooldowns. They offer strong party mitigation through abilities like Divine Veil and Passage of Arms.",
        strengths: ["Excellent party mitigation", "Can heal others", "Invulnerability with Hallowed Ground", "Strong magical phase"],
        weaknesses: ["Lower personal DPS than other tanks", "Rotation can feel disjointed"],
        color: "#aeb4c3"
      },
      {
        id: 'warrior',
        name: "Warrior",
        role: "Tank",
        icon: "🛡️",
        description: "Warriors are combat specialists whose weapon of choice is the greataxe. They have powerful offensive capabilities and excel at drawing enemy aggression, allowing allies to attack without fear of retaliation.",
        playstyle: "Warriors focus on building Beast Gauge through combos, then spending it on powerful attacks. They have excellent self-healing through abilities like Nascent Flash and Bloodwhetting.",
        strengths: ["High personal damage for a tank", "Excellent self-sustain", "Strong cooldowns", "Simple rotation"],
        weaknesses: ["Limited party mitigation", "Requires good timing of defensive cooldowns"],
        color: "#a83232"
      },
      {
        id: 'darkknight',
        name: "Dark Knight",
        role: "Tank",
        icon: "🛡️",
        description: "Dark Knights wield massive greatswords and channel the power of darkness to protect their allies. They are masters of magical defense and excel at handling sustained magical damage.",
        playstyle: "Dark Knights manage their MP to use their powerful Edge of Shadow/Flood of Shadow abilities while utilizing The Blackest Night for powerful shields. They have a busy burst window with Living Shadow.",
        strengths: ["Strong magical mitigation", "Powerful burst damage", "The Blackest Night is an excellent defensive tool"],
        weaknesses: ["Limited self-healing", "Resource management can be challenging"],
        color: "#6a0dad"
      },
      {
        id: 'gunbreaker',
        name: "Gunbreaker",
        role: "Tank",
        icon: "🛡️",
        description: "Gunbreakers wield gunblades that combine swordplay with explosive ammunition. They have a more offensive-oriented playstyle while still providing solid defensive capabilities.",
        playstyle: "Gunbreakers have a DPS-like rotation centered around their Gnashing Fang combo and Continuation ability. They build and spend Cartridges for powerful attacks.",
        strengths: ["Highest personal DPS among tanks", "Excellent mitigation toolkit", "Engaging rotation"],
        weaknesses: ["Busy rotation can make tank responsibilities challenging", "Requires good planning for optimal performance"],
        color: "#796d2f"
      }
    ],
    healer: [
      {
        id: 'whitemage',
        name: "White Mage",
        role: "Healer",
        icon: "⚜️",
        description: "White mages are disciples of healing who draw upon the elements of wind and water to perform powerful healing magic. They command powerful restoration spells and defensive buffs.",
        playstyle: "White Mages focus on powerful direct heals and regens. They build up Blood Lily charges through healing to unleash devastating attacks.",
        strengths: ["Powerful burst healing", "Strong AoE damage", "Simple core rotation", "Excellent MP management"],
        weaknesses: ["Limited mobility", "Fewer oGCD healing options than other healers"],
        color: "#ffffff"
      },
      {
        id: 'scholar',
        name: "Scholar",
        role: "Healer",
        icon: "⚜️",
        description: "Scholars are tacticians who command a fairy companion to assist in healing while they focus on preventative measures through shields and tactical abilities.",
        playstyle: "Scholars use a fairy companion for passive healing while they focus on applying shields and using their powerful oGCD abilities. They excel at damage mitigation through abilities like Sacred Soil.",
        strengths: ["Strong damage mitigation", "Excellent oGCD toolkit", "Fairy provides passive healing"],
        weaknesses: ["Requires more planning than other healers", "Split focus between personal actions and fairy management"],
        color: "#5b4e9d"
      },
      {
        id: 'astrologian',
        name: "Astrologian",
        role: "Healer",
        icon: "⚜️",
        description: "Astrologians harness the power of the stars to heal allies and predict the future. They can provide powerful buffs through their unique card system.",
        playstyle: "Astrologians can switch between Diurnal (regen) and Nocturnal (shield) sects. They use a card system to provide damage buffs to the party while healing.",
        strengths: ["Strong party damage buffs", "Flexibility between regen and shield healing", "Powerful oGCD healing toolkit"],
        weaknesses: ["Complex card management", "Requires good knowledge of fight timelines"],
        color: "#ffdc6b"
      },
      {
        id: 'sage',
        name: "Sage",
        role: "Healer",
        icon: "⚜️",
        description: "Sages use nouliths, floating magical devices, to manipulate aether for both healing and attacking. They excel at barrier healing while dealing damage.",
        playstyle: "Sages use Kardia to create a healing link with a party member, healing them when the Sage deals damage. They use Addersgall resources for powerful healing abilities.",
        strengths: ["Strong barrier healing", "Healing through damage dealing", "Excellent mobility"],
        weaknesses: ["Requires proactive play", "Limited recovery tools when things go wrong"],
        color: "#39a0b3"
      }
    ],
    melee: [
      {
        id: 'monk',
        name: "Monk",
        role: "Melee DPS",
        icon: "⚔️",
        description: "Monks are masters of hand-to-hand combat who channel their inner chakra to perform devastating martial arts techniques.",
        playstyle: "Monks maintain a flowing rotation of positional attacks, shifting between different forms (Opo-opo, Raptor, and Coeurl) to deal maximum damage.",
        strengths: ["High sustained damage", "Excellent mobility", "Fast-paced gameplay"],
        weaknesses: ["Strict positional requirements", "Complex rotation", "Limited party utility"],
        color: "#d69c24"
      },
      {
        id: 'dragoon',
        name: "Dragoon",
        role: "Melee DPS",
        icon: "⚔️",
        description: "Dragoons are masters of the lance who specialize in performing acrobatic jumps to deal devastating damage to their enemies.",
        playstyle: "Dragoons maintain two separate combo chains while managing their Jump abilities and Life of the Dragon phases for increased damage.",
        strengths: ["Strong burst damage", "Good party utility with Battle Litany", "Consistent damage output"],
        weaknesses: ["Animation locks on jumps can be dangerous", "Less mobile during key parts of rotation"],
        color: "#4b67a8"
      },
      {
        id: 'ninja',
        name: "Ninja",
        role: "Melee DPS",
        icon: "⚔️",
        description: "Ninjas are agile combatants who fight with daggers and harness the ancient art of ninjutsu. They can execute rapid attacks and utilize mudra hand signs to perform powerful techniques.",
        playstyle: "Ninjas maintain a fast-paced rotation with emphasis on burst windows around Trick Attack. They use mudra combinations to execute different ninjutsu abilities.",
        strengths: ["High mobility", "Versatile utility", "Strong burst damage", "Unique playstyle"],
        weaknesses: ["Complex rotation", "Punishing if mudras are performed incorrectly"],
        color: "#8a42ad"
      },
      {
        id: 'samurai',
        name: "Samurai",
        role: "Melee DPS",
        icon: "⚔️",
        description: "Samurai are masters of the katana who focus purely on dealing massive damage through carefully executed blade techniques.",
        playstyle: "Samurai build up Sen gauges through their combos, then spend them on powerful iaijutsu attacks. They also generate Kenki gauge for additional oGCD attacks.",
        strengths: ["Highest personal DPS potential among melee", "Satisfying rotation", "Good mobility tools"],
        weaknesses: ["No party utility", "Strict rotation requirements for optimal performance"],
        color: "#e4574f"
      },
      {
        id: 'reaper',
        name: "Reaper",
        role: "Melee DPS",
        icon: "⚔️",
        description: "Reapers wield scythes and channel the power of voidsent avatars to deal devastating damage to their enemies.",
        playstyle: "Reapers build up Soul Gauge to enter the Shroud phase, then build Shroud Gauge to unleash their powerful Enshroud phase with their avatar.",
        strengths: ["Strong burst damage", "Good party utility", "Excellent mobility", "Powerful AoE"],
        weaknesses: ["Requires good gauge management", "Relatively complex rotation"],
        color: "#a61c45"
      }
    ],
    ranged: [
      {
        id: 'bard',
        name: "Bard",
        role: "Physical Ranged DPS",
        icon: "🏹",
        description: "Bards use bows in battle while performing songs that provide powerful buffs to their allies. They excel at supporting the party while dealing damage from a distance.",
        playstyle: "Bards cycle through different songs that provide various effects while maintaining their DoTs and using procs for additional damage.",
        strengths: ["Strong party utility", "Complete mobility", "Proc-based gameplay keeps things interesting"],
        weaknesses: ["Heavy reliance on RNG", "Lower personal DPS than other jobs"],
        color: "#91ba5e"
      },
      {
        id: 'machinist',
        name: "Machinist",
        role: "Physical Ranged DPS",
        icon: "🏹",
        description: "Machinists wield firearms and deploy mechanical turrets to deal damage from afar. They specialize in using magitek technology to enhance their combat capabilities.",
        playstyle: "Machinists build up Heat and Battery gauges to power their Hypercharge phases and deploy their automaton queen for additional damage.",
        strengths: ["High personal DPS for a ranged job", "Complete mobility", "Straightforward rotation"],
        weaknesses: ["Limited party utility", "Strict burst windows"],
        color: "#6aabd9"
      },
      {
        id: 'dancer',
        name: "Dancer",
        role: "Physical Ranged DPS",
        icon: "🏹",
        description: "Dancers use throwing weapons while performing dances that buff allies and debuff enemies. They excel at enhancing a single party member's damage output.",
        playstyle: "Dancers follow dance steps to execute powerful finishers while maintaining their procs and buffs. They select a dance partner to receive additional damage bonuses.",
        strengths: ["Excellent party utility", "Complete mobility", "Simple base rotation"],
        weaknesses: ["Heavy reliance on RNG", "Lower personal DPS than other jobs"],
        color: "#e2a3b9"
      }
    ],
    caster: [
      {
        id: 'blackmage',
        name: "Black Mage",
        role: "Magical Ranged DPS",
        icon: "🔮",
        description: "Black mages are masters of destructive magic, able to wield the elements of fire, ice, and lightning to devastating effect. They offer unparalleled magical damage at the cost of mobility.",
        playstyle: "Black Mages alternate between Astral Fire (dealing damage) and Umbral Ice (regenerating MP) phases, maximizing time spent casting Fire IV during fire phases.",
        strengths: ["Highest personal DPS potential", "Powerful AoE", "Satisfying big numbers"],
        weaknesses: ["Very limited mobility", "Requires fight knowledge", "Complex rotation optimization"],
        color: "#3e59b3"
      },
      {
        id: 'summoner',
        name: "Summoner",
        role: "Magical Ranged DPS",
        icon: "🔮",
        description: "Summoners call forth the power of primals and command a pet to deal damage. They balance pet management with their own magical attacks.",
        playstyle: "Summoners cycle through different primal phases (Ifrit, Titan, Garuda) after using their Bahamut and Phoenix phases, utilizing different abilities in each phase.",
        strengths: ["Strong AoE damage", "Good mobility", "Flexible rotation"],
        weaknesses: ["Complex pet management", "Long rotation cycle"],
        color: "#2d9b78"
      },
      {
        id: 'redmage',
        name: "Red Mage",
        role: "Magical Ranged DPS",
        icon: "🔮",
        description: "Red mages balance white and black magic, building up mana to unleash powerful melee combos. They excel at raising fallen allies and provide a mix of magical and physical attacks.",
        playstyle: "Red Mages balance white and black mana through their spells, then spend it on powerful melee combos followed by magical finishers.",
        strengths: ["Excellent utility with instant raises", "Good mobility", "Easy to learn rotation"],
        weaknesses: ["Lower DPS ceiling than other casters", "Requires managing proximity to enemies"],
        color: "#c5304f"
      },
      {
        id: 'bluemage',
        name: "Blue Mage",
        role: "Limited Job",
        icon: "🔮",
        description: "Blue mages learn abilities directly from monsters, allowing for a highly customizable playstyle. As a limited job, they have unique restrictions but incredible versatility.",
        playstyle: "Blue Mages collect spells from monsters and can equip a selection of them to create custom rotations for different situations.",
        strengths: ["Incredibly versatile", "Powerful in specific content", "Unique gameplay experience"],
        weaknesses: ["Limited level cap", "Cannot participate in current endgame content", "Not balanced for all content"],
        color: "#0090ce"
      }
    ]
  };

  // Flatten jobs for easier access by ID
  const allJobs = Object.values(jobsByRole).flat();
  const currentJob = allJobs.find(job => job.id === activeJob) || allJobs[0];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold text-yellow-400">FFXIV Job Guide</div>
          <nav className="flex space-x-4">
            <a href="#" className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">Home</a>
            <a href="#" className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">Dungeons</a>
            <a href="#" className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">Raids</a>
            <a href="#" className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">Community</a>
          </nav>
        </header>

        <div className="rounded-2xl overflow-hidden bg-gray-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="lg:col-span-1 p-6 bg-gray-800 border-r border-gray-700 overflow-y-auto" style={{maxHeight: "800px"}}>
              <h2 className="text-xl font-bold mb-6 text-center">Select a Job</h2>
              
              {/* Tanks */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-400">Tanks</h3>
                <div className="flex flex-col space-y-2">
                  {jobsByRole.tank.map(job => (
                    <button 
                      key={job.id}
                      onClick={() => setActiveJob(job.id)}
                      className={`flex items-center p-2 rounded-lg transition-all ${
                        activeJob === job.id 
                          ? `bg-opacity-30 border-l-4`
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                      style={{ 
                        backgroundColor: activeJob === job.id ? job.color : '',
                        borderLeftColor: activeJob === job.id ? job.color : ''
                      }}
                    >
                      <span className="text-2xl mr-3">{job.icon}</span>
                      <div>
                        <div className="font-bold">{job.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Healers */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-400">Healers</h3>
                <div className="flex flex-col space-y-2">
                  {jobsByRole.healer.map(job => (
                    <button 
                      key={job.id}
                      onClick={() => setActiveJob(job.id)}
                      className={`flex items-center p-2 rounded-lg transition-all ${
                        activeJob === job.id 
                          ? `bg-opacity-30 border-l-4`
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                      style={{ 
                        backgroundColor: activeJob === job.id ? job.color : '',
                        borderLeftColor: activeJob === job.id ? job.color : ''
                      }}
                    >
                      <span className="text-2xl mr-3">{job.icon}</span>
                      <div>
                        <div className="font-bold">{job.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Melee DPS */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-400">Melee DPS</h3>
                <div className="flex flex-col space-y-2">
                  {jobsByRole.melee.map(job => (
                    <button 
                      key={job.id}
                      onClick={() => setActiveJob(job.id)}
                      className={`flex items-center p-2 rounded-lg transition-all ${
                        activeJob === job.id 
                          ? `bg-opacity-30 border-l-4`
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                      style={{ 
                        backgroundColor: activeJob === job.id ? job.color : '',
                        borderLeftColor: activeJob === job.id ? job.color : ''
                      }}
                    >
                      <span className="text-2xl mr-3">{job.icon}</span>
                      <div>
                        <div className="font-bold">{job.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Physical Ranged */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-400">Physical Ranged</h3>
                <div className="flex flex-col space-y-2">
                  {jobsByRole.ranged.map(job => (
                    <button 
                      key={job.id}
                      onClick={() => setActiveJob(job.id)}
                      className={`flex items-center p-2 rounded-lg transition-all ${
                        activeJob === job.id 
                          ? `bg-opacity-30 border-l-4`
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                      style={{ 
                        backgroundColor: activeJob === job.id ? job.color : '',
                        borderLeftColor: activeJob === job.id ? job.color : ''
                      }}
                    >
                      <span className="text-2xl mr-3">{job.icon}</span>
                      <div>
                        <div className="font-bold">{job.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Magical Ranged */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-400">Magical Ranged</h3>
                <div className="flex flex-col space-y-2">
                  {jobsByRole.caster.map(job => (
                    <button 
                      key={job.id}
                      onClick={() => setActiveJob(job.id)}
                      className={`flex items-center p-2 rounded-lg transition-all ${
                        activeJob === job.id 
                          ? `bg-opacity-30 border-l-4`
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                      style={{ 
                        backgroundColor: activeJob === job.id ? job.color : '',
                        borderLeftColor: activeJob === job.id ? job.color : ''
                      }}
                    >
                      <span className="text-2xl mr-3">{job.icon}</span>
                      <div>
                        <div className="font-bold">{job.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 p-8" style={{ background: `linear-gradient(135deg, #2d2d40 0%, ${currentJob.color}30 100%)` }}>
              <div className="mb-6 flex items-center">
                <span className="text-5xl mr-4">{currentJob.icon}</span>
                <div>
                  <h1 className="text-3xl font-bold" style={{ color: currentJob.color }}>{currentJob.name}</h1>
                  <div className="text-gray-300">{currentJob.role}</div>
                </div>
              </div>

              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-bold mb-3">Description</h2>
                <p className="text-gray-300">{currentJob.description}</p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-bold mb-3">Playstyle</h2>
                <p className="text-gray-300">{currentJob.playstyle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-3 text-green-400">Strengths</h2>
                  <ul className="list-disc pl-5 text-gray-300">
                    {currentJob.strengths.map((strength, i) => (
                      <li key={i} className="mb-1">{strength}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-3 text-red-400">Weaknesses</h2>
                  <ul className="list-disc pl-5 text-gray-300">
                    {currentJob.weaknesses.map((weakness, i) => (
                      <li key={i} className="mb-1">{weakness}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>This is an unofficial FFXIV job guide. FINAL FANTASY XIV © SQUARE ENIX CO., LTD.</p>
        </footer>
      </div>
    </div>
  );
}

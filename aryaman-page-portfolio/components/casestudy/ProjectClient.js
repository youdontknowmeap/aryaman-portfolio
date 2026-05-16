"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import CaseHero from "@/components/casestudy/CaseHero";
import CaseContent from "@/components/casestudy/CaseContent";
import CaseNav from "@/components/casestudy/CaseNav";
import StatRow from "@/components/casestudy/StatRow";

export default function ProjectClient({ project, allProjects }) {
  const transitionRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Slide up transition
    if (transitionRef.current) {
      gsap.to(transitionRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: "expo.out",
        delay: 0.05,
      });
    }

    // Reset scroll to top on mount
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  // Helper components for modular layout
  const SectionBlock = ({ label, body, accentColor }) => (
    <div className="space-y-6">
      <span className="font-['Space_Mono'] text-[10px] tracking-[0.12em] uppercase" style={{ color: accentColor }}>
        {label}
      </span>
      <p className="font-['DM_Sans'] text-[clamp(16px,1.2vw,18px)] text-[#707070] leading-relaxed">
        {body}
      </p>
    </div>
  );

  const DecisionItem = ({ title, description, accentColor }) => (
    <div className="pl-4 mb-8" style={{ borderLeft: `2px solid ${accentColor}` }}>
      <h4 className="font-['Space_Mono'] text-[11px] text-[#F0EDE6] tracking-[0.1em] uppercase">
        {title}
      </h4>
      <p className="font-['DM_Sans'] text-sm text-[#707070] mt-[6px] leading-relaxed">
        {description}
      </p>
    </div>
  );

  const renderProjectContent = () => {
    if (project.slug === "drunkin") {
      return (
        <div className="space-y-24">
          <SectionBlock 
            label="OVERVIEW" 
            body="Drunkin' started as a personal experiment — what would Strava look like if your activity was a night out? The result is a social tracking app with session logging, a live feed of friends' activity, personal stats, and streak tracking. Built as a complete prototype in a single HTML file."
            accentColor={project.accentColor}
          />

          <StatRow 
            stats={[
              { number: "1", label: "HTML File" },
              { number: "3", label: "Taps to Start" },
              { number: "6", label: "Weeks" }
            ]} 
          />

          <SectionBlock 
            label="THE PROBLEM" 
            body="Most social apps ignore what people are actually doing on a night out. There was no way to log a session, see what friends were up to, or look back at patterns over time — without it feeling cold, clinical, or irresponsible."
            accentColor={project.accentColor}
          />

          <div className="w-full relative aspect-[16/9] rounded-[4px] overflow-hidden border border-[#242424]">
            <Image 
              src="/images/drunkin%20screen%20with%20bg.png" 
              alt="Drunkin App Screens" 
              fill 
              className="object-cover"
            />
          </div>

          <SectionBlock 
            label="THE APPROACH" 
            body="The design challenge was dual: make it feel high-energy and social while never making reckless behavior look aspirational. Every screen needed to work one-handed, in low light, after a drink or two. Dark UI, large touch targets, and a 3-tap session start kept friction minimal."
            accentColor={project.accentColor}
          />

          <div className="space-y-8">
            <span className="font-['Space_Mono'] text-[10px] tracking-[0.12em] uppercase" style={{ color: project.accentColor }}>
              KEY DECISIONS
            </span>
            <div className="mt-8">
              <DecisionItem 
                title="SESSION TIMER IS AMBIENT, NOT ALARMING"
                description="→ Always visible but never the focal point. It informs, doesn't pressure."
                accentColor={project.accentColor}
              />
              <DecisionItem 
                title="THE FEED SHOWS WHAT, NOT HOW MUCH"
                description="→ Social presence without encouraging competition around volume."
                accentColor={project.accentColor}
              />
              <DecisionItem 
                title="STREAKS REWARD CONSISTENCY, NOT EXCESS"
                description="→ Gamification through regularity. The badge is for showing up, not overdoing it."
                accentColor={project.accentColor}
              />
            </div>
          </div>
        </div>
      );
    }

    if (project.slug === "clarity") {
      return (
        <div className="space-y-24">
          <SectionBlock 
            label="OVERVIEW" 
            body="Most finance apps make people feel worse about money, not better. Clarity is a calm, guided money companion built for young Indian professionals — designed to turn financial anxiety into financial confidence, one week at a time."
            accentColor={project.accentColor}
          />

          <StatRow 
            stats={[
              { number: "4", label: "Core Tabs" },
              { number: "2 MIN", label: "Weekly Check-In" },
              { number: "5", label: "Core Screens" }
            ]} 
          />

          <SectionBlock 
            label="THE PROBLEM" 
            body="Young professionals earning their first real salary have no shortage of budgeting apps. Most of them feel cold, technical, and guilt-inducing. The real problem isn't a lack of financial tools — it's a lack of financial confidence. Apps use jargon that makes users feel stupid. Red alerts create anxiety, not action. Data is shown but behavior is never guided."
            accentColor={project.accentColor}
          />

          <div className="bg-[#111111] rounded-[4px] p-8 md:p-9 border-l-[3px]" style={{ borderColor: project.accentColor }}>
            <span className="font-['Space_Mono'] text-[10px] tracking-[0.12em] uppercase" style={{ color: project.accentColor }}>
              USER PERSONA
            </span>
            <h3 className="font-['Bebas_Neue'] text-[32px] text-[#F0EDE6] mt-4 leading-none">Arjun Mehta</h3>
            <p className="font-['DM_Sans'] text-sm text-[#707070] mt-2">26 · Software Developer · Bengaluru</p>
            
            <div className="w-full h-[1px] bg-[#242424] my-6" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {[
                { quote: "I know I should be saving but I have no idea if I'm doing it right.", attr: "On uncertainty" },
                { quote: "I opened a budgeting app once and it just made me feel bad about my coffee habit.", attr: "On guilt" },
                { quote: "I just want something that tells me if I'm okay without making it a whole thing.", attr: "On simplicity" }
              ].map((item, i) => (
                <div key={i} className="flex-1">
                  <p className="font-['DM_Sans'] text-sm text-[#F0EDE6]/85 italic leading-relaxed">
                    &quot;{item.quote}&quot;
                  </p>
                  <p className="font-['Space_Mono'] text-[10px] text-[#707070] mt-3 uppercase">
                    {item.attr}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-full relative aspect-[16/9] rounded-[4px] overflow-hidden border border-[#242424]">
              <Image 
                src="/images/Screenshot%202026-05-16%20142548.png" 
                alt="Clarity Core Screens 1" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="w-full relative aspect-[16/9] rounded-[4px] overflow-hidden border border-[#242424]">
              <Image 
                src="/images/Screenshot%202026-05-16%20142616.png" 
                alt="Clarity Core Screens 2" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          <SectionBlock 
            label="THE SOLUTION" 
            body="Clarity is organized around four tabs — Home, Activity, Goals, Insights. Home answers the user's most anxious question first: am I okay? The balance is large and prominent. The monthly budget gives instant context. Every screen was designed to feel like a conversation, not an audit."
            accentColor={project.accentColor}
          />

          <div className="space-y-8">
            <SectionBlock 
              label="SIGNATURE FEATURE — THE WEEKLY CHECK-IN" 
              body="A 2-minute guided reflection that turns spending data into self-awareness. Sentiment is asked before data is shown — capturing how users feel before analysis shapes it. Wins are surfaced first. Watch-outs are framed as observations, never alarms. Users set a small intention for the following week. The session ends with a streak celebration."
              accentColor={project.accentColor}
            />
            
            <div className="w-full overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0">
              <div className="flex min-w-[800px] border-y border-[#242424] py-0">
                {[
                  { id: "01", name: "Intro", desc: "Week summary and entry CTA" },
                  { id: "02", name: "Sentiment", desc: "How do you feel about this week?" },
                  { id: "03", name: "Insights", desc: "Personalized win + one watch-out" },
                  { id: "04", name: "Intention", desc: "Set a small goal for next week" },
                  { id: "05", name: "Complete", desc: "Streak celebrated, return to Home" }
                ].map((step, i) => (
                  <div key={i} className={`flex-1 p-6 border-[#242424] ${i !== 4 ? 'border-r' : ''}`}>
                    <span className="font-['Space_Mono'] text-[10px]" style={{ color: project.accentColor }}>{step.id} / {step.name}</span>
                    <p className="font-['DM_Sans'] text-sm text-[#F0EDE6] font-semibold mt-2">{step.name}</p>
                    <p className="font-['DM_Sans'] text-[12px] text-[#707070] mt-1 leading-snug">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <span className="font-['Space_Mono'] text-[10px] tracking-[0.12em] uppercase" style={{ color: project.accentColor }}>
              DESIGN REASONING
            </span>
            <div className="mt-8">
              <DecisionItem 
                title="SENTIMENT BEFORE DATA"
                description="Asking how users feel before showing numbers creates emotional buy-in. Users feel heard, not lectured."
                accentColor={project.accentColor}
              />
              <DecisionItem 
                title="MICRO-INTENTIONS OVER STRICT BUDGETS"
                description="Budgets feel like diets — restrictive and easy to fail. Small weekly intentions build confidence through wins rather than compliance through rules."
                accentColor={project.accentColor}
              />
              <DecisionItem 
                title="WINS COME FIRST, ALWAYS"
                description="Every check-in opens with something positive. Finance is already stressful. Every word was reviewed to celebrate progress, never punish shortfalls."
                accentColor={project.accentColor}
              />
              <DecisionItem 
                title="FOUR TABS ONLY"
                description="Reduces cognitive load. Every tap feels purposeful. Goals is a core tab — not buried. Saving is central to the experience, not an afterthought."
                accentColor={project.accentColor}
              />
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative min-h-screen bg-[#080808]">
      {/* Cinematic Transition Overlay */}
      <div
        ref={transitionRef}
        className="fixed inset-0 z-[9998] bg-[#080808] pointer-events-none"
      />

      <CaseHero project={project} />
      <CaseContent>
        {renderProjectContent()}
      </CaseContent>
      <CaseNav currentSlug={project.slug} projects={allProjects} />
    </div>
  );
}

'use client'

import dynamic from 'next/dynamic';
import { ArrowRight, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { Spotlight } from '@/components/ui/spotlight';
import { GooeyText } from '@/components/ui/gooey-text-morphing';

// Dynamic import of Spline to prevent SSR issues
const SplineScene = dynamic(
  () => import('@/components/ui/splite').then(mod => mod.SplineScene),
  { ssr: false }
);

const WORDS = ['Vibe.', 'Instinct.', 'Intent.', 'Mind.'];

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans selection:bg-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-slate-900" />
            <span className="font-bold text-xl tracking-tight">VibeCoding</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-slate-900 transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Log in
            </button>
            <button className="bg-slate-950 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm">
              Get Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 relative z-10 flex flex-col items-start w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              VibeCoding 2.0 is Here
            </div>
            
            <div className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.1] mb-6">
              <h1>Code with your</h1>
              <GooeyText
                texts={WORDS}
                morphTime={1}
                cooldownTime={0.25}
                className="h-[1.2em] w-full min-w-[200px]"
              />
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-lg mb-8 leading-relaxed font-medium break-keep">
              구현은 에이전트에 맡기세요. 당신은 그저 상상하고, 원하는 감각을 전달하세요. 아름답고 완벽한 코드를 즉시 만들어보세요.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-950 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-900 transition-all shadow-lg shadow-slate-200">
                Start Vibe Coding <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 border border-slate-200 transition-all">
                <Play className="w-4 h-4 fill-slate-900" /> Watch the Demo
              </button>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-slate-200 pl-4">
              <span className="text-sm font-semibold text-slate-800 tracking-tight">
                A more native way to build in the AI era
              </span>
              <span className="text-xs text-slate-500 font-medium">
                만드는 방식 자체를 AI에 맞게 다시 정의해보세요.
              </span>
            </div>
          </div>

          {/* Right Content - Spline 3D */}
          <div className="flex-1 w-full relative min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden bg-slate-50/50 border border-slate-100 flex items-center justify-center">
            <Spotlight className="-top-40 left-0 md:left-40 md:-top-20" fill="#94a3b8" />
            <div className="absolute inset-0 z-10 w-full h-full mix-blend-multiply md:mix-blend-normal opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto">
              {/* Added opacity and mix-blend on mobile so text remains readable if it stacks, but with flex-col it shouldn't overlap much. */}
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start w-full">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6 tracking-tight break-keep">
                생각의 속도,<br />그대로 화면에 구현되다.
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium break-keep max-w-md">
                문법과 로직에 얽매일 필요 없습니다. 의도와 느낌만 말하면 AI 에이전트가 복잡한 개발 과정을 완벽하게 대신합니다.
              </p>

              <ul className="space-y-5 w-full">
                {[
                  "실시간 렌더링 피드백",
                  "복잡한 인터랙션 자동 생성",
                  "엔터프라이즈급 성능 최적화"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-800 font-semibold text-lg">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content - Visual Code Editor */}
            <div className="flex-1 w-full relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-slate-100 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative rounded-2xl bg-[#0F1117] border border-slate-800 shadow-2xl overflow-hidden text-sm md:text-base font-mono">
                {/* Editor Header */}
                <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-[#161923]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto text-xs text-slate-500 font-medium">agent.ts</div>
                </div>
                {/* Editor Body */}
                <div className="p-6 md:p-8 text-slate-300 leading-relaxed overflow-x-auto">
                  <div className="text-slate-500 mb-2">{'// User Intent: "AI 시대에 맞는 근본적인 제작 경험"'}</div>
                  <div className="text-blue-400 font-semibold">Agent<span className="text-white">.</span><span className="text-amber-200">generateInterface</span><span className="text-white">({'{'}</span></div>
                  <div className="pl-6"><span className="text-slate-400">direction:</span> <span className="text-emerald-300">'native AI workflow'</span>,</div>
                  <div className="pl-6"><span className="text-slate-400">tone:</span> <span className="text-emerald-300">'precise and premium'</span>,</div>
                  <div className="pl-6"><span className="text-slate-400">output:</span> <span className="text-emerald-300">'production-ready UI'</span></div>
                  <div><span className="text-white">{'}'})</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-400 border-t border-slate-100">
        <p>&copy; {new Date().getFullYear()} VibeCoding. All rights reserved.</p>
      </footer>
    </div>
  );
}

import React from 'react';
import Card from './Card';

export default function QuickActions() {
  return (
    <section className="pb-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200" id="home-quick-actions-section">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id="home-quick-actions-container">
        <div className="flex items-end justify-between gap-4" id="home-quick-actions-header">
          <div id="home-quick-actions-header-content">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">Explore Our Solutions</h2>
            <p className="text-slate-500 text-base mt-1">Discover our key offerings and tools for your business growth.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-4" id="home-quick-actions-grid">
          {/* Tech Lab Card */}
          <a href="/tech-lab" className="group" id="home-tech-lab-link">
            <Card className="h-full hover:border-indigo-400 border-indigo-200 border-2 transition">
              <div className="flex flex-col gap-2 h-full">
                <div className="w-full mt-2 rounded-b-2xl overflow-hidden relative">
                  <img src="/images/techlab_card.png" alt="K11 Tech Lab" className="w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-indigo-900 group-hover:underline">Tech Lab</p>
                  <span className="text-indigo-400 group-hover:translate-x-0.5 transition">→</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Explore hands-on labs for automation, full stack, AI, and LLM development.
                </p>
              </div>
            </Card>
          </a>
          {/* Insights Card */}
          <a href="/insights" className="group" id="home-insights-link">
            <Card className="h-full hover:border-slate-300" id="home-insights-card">
              <div className="flex flex-col gap-2 h-full" id="home-insights-card-body">
                <div className="w-full mt-2 rounded-b-2xl overflow-hidden relative" id="home-insights-image">
                  <img src="/images/insights_card.png" alt="Insights" className="w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex items-center gap-2" id="home-insights-title-row">
                  <p className="font-semibold text-slate-900" id="home-insights-title">Insights</p>
                  <span className="text-slate-400 group-hover:translate-x-0.5 transition" id="home-insights-arrow">→</span>
                </div>
                <p className="mt-1 text-sm text-slate-600" id="home-insights-desc">
                  Discover trends, best practices, and expert tips for your team.
                </p>
              </div>
            </Card>
          </a>
          {/* Services Card */}
          <a href="/services" className="group" id="home-services-link">
            <Card className="h-full hover:border-slate-300" id="home-services-card">
              <div className="flex flex-col gap-2 h-full" id="home-services-card-body">
                <div className="w-full mt-2 rounded-b-2xl overflow-hidden relative" id="home-services-image">
                  <img src="/images/services_card.png" alt="Services" className="w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex items-center gap-2" id="home-services-title-row">
                  <p className="font-semibold text-slate-900" id="home-services-title">Services</p>
                  <span className="text-slate-400 group-hover:translate-x-0.5 transition" id="home-services-arrow">→</span>
                </div>
                <p className="mt-1 text-sm text-slate-600" id="home-services-desc">
                  Explore AI tools, custom software, and automation options.
                </p>
              </div>
            </Card>
          </a>
          {/* Dashboard Card */}
          <a href="/dashboard" className="group" id="home-dashboard-link">
            <Card className="h-full hover:border-slate-300" id="home-dashboard-card">
              <div className="flex flex-col gap-2 h-full" id="home-dashboard-card-body">
                <div className="w-full mt-2 rounded-b-2xl overflow-hidden relative" id="home-dashboard-image">
                  <img src="/images/dashboard_card.png" alt="Dashboard" className="w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex items-center gap-2" id="home-dashboard-title-row">
                  <p className="font-semibold text-slate-900" id="home-dashboard-title">Dashboard</p>
                  <span className="text-slate-400 group-hover:translate-x-0.5 transition" id="home-dashboard-arrow">→</span>
                </div>
                <p className="mt-1 text-sm text-slate-600" id="home-dashboard-desc">
                  View insights, activity, and key metrics at a glance.
                </p>
              </div>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useState } from 'react';

export default function CompanyValuesPage() {
  return (
    <div className="text-amber-950 min-h-screen text-center  flex flex-col">
      {/* Agile Section */}
      <section className="py-12 border-b border-gray-900 flex flex-row">
        <div className="w-1/2 pl-12">
          <h2 className="text-9xl font-extralight tracking-normal">Agile</h2>
        </div>
        <div className="w-1/2 pr-12 pt-16">
          <p className="text-sm leading-snug max-w-md">
            We live and breathe efficiency and are not limited by geography. Local
            to Amsterdam with hubs in London, Paris, Johannesburg, New York, and
            beyond, we curate the right team for each project and get moving
            swiftly.
          </p>
        </div>
      </section>

      {/* Innovative Section */}
      <section className="py-12 border-b border-gray-900 flex flex-row">
        <div className="w-1/2 pl-12">
          <h2 className="text-9xl font-extralight tracking-normal">Innovative</h2>
        </div>
        <div className="w-1/2 pr-12 pt-16">
          <p className="text-sm leading-snug max-w-md">
            We use carefully crafted digital processes and new technology to
            ensure our initiatives run smoothly, allowing our lean and international
            team to focus on what matters and maximize momentum and
            opportunity.
          </p>
        </div>
      </section>

      {/* Cultured Section */}
      <section className="py-12 flex flex-row">
        <div className="w-1/2 pl-12">
          <h2 className="text-9xl font-extralight tracking-normal">Cultured</h2>
        </div>
        <div className="w-1/2 pr-12 pt-16 relative">
          <div className="absolute top-16 -left-6 w-3 h-3 rounded-full bg-red-600"></div>
          <p className="text-sm leading-snug max-w-md">
            We are progressive and community-focused and don't believe in
            maintaining the status quo or sticking to outdated ways. Our people
            reflect today's realities and stay connected to culture.
          </p>
        </div>
      </section>
    </div>
  );
}
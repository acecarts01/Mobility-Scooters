import React from 'react';
import { SITE } from '@/src/config/site';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import JsonLd from '@/src/components/JsonLd';
import ReplyPortalClient from '@/src/components/ReplyPortalClient';

export const metadata = {
  title: `Staff Reply Portal & Clinical Dispatch | ${SITE.name}`,
  description: `Official staff inquiry response portal for customer inquiries, ARR 204 regulatory guidance, NDIS Category 05 quotes, and GST-free clinical correspondence.`,
  alternates: { canonical: `https://${SITE.domain}/reply-portal/` },
  robots: { index: false, follow: true },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function ReplyPortalPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Reply Portal", url: "/reply-portal/" }
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" data={breadcrumbs} />
      <Nav />
      <main id="main" className="min-h-screen bg-slate-50/50">
        <ReplyPortalClient />
      </main>
      <Footer />
    </>
  );
}

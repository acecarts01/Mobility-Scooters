'use client';

import React, { useState } from 'react';
import { 
  Inbox, 
  Search, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Send, 
  Copy, 
  Download, 
  ExternalLink, 
  MessageCircle, 
  Mail, 
  FileCode, 
  Eye, 
  Columns, 
  Sparkles, 
  SlidersHorizontal,
  Phone, 
  MapPin, 
  Check,
  HeartHandshake,
  Zap,
  Award
} from 'lucide-react';
import { SITE, CONTACT } from '@/src/config/site';

export type ResponseTone = 'Formal/Clinical' | 'Empathetic/Care' | 'Direct/Support';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  category: string;
  date: string;
  status: 'new' | 'in_progress' | 'replied';
  subject: string;
  message: string;
  defaultTemplate: string;
}

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: "LS-INQ-4091",
    name: "Margaret Higgins",
    email: "margaret.higgins@optusnet.com.au",
    phone: "0412 884 921",
    location: "Victor Harbor, SA",
    category: "Regulations",
    date: "Today at 10:42 AM",
    status: "new",
    subject: "Re: Footpath Regulations & Driver Licence Query",
    message: "Hello, I am 74 and live in Victor Harbor. My GP suggested I look into a mobility scooter to visit the local shops. Do I need to sit for a driving test or register the scooter with Service SA? Also, what happens on footpaths versus the roadside? Thank you.",
    defaultTemplate: "arr204"
  },
  {
    id: "LS-INQ-4092",
    name: "David K. Thornton",
    email: "david.thornton@bigpond.com",
    phone: "0403 719 443",
    location: "Brisbane, QLD",
    category: "NDIS Funding",
    date: "Today at 09:15 AM",
    status: "new",
    subject: "NDIS Quote Request for Outback All-Terrain Scooter",
    message: "Hi there. I am an NDIS self-managed participant (Category 05 - Assistive Technology). My occupational therapist has completed my clinical functional assessment. Could you provide a formal written tax quote for the Outback 800W Cruiser with sun canopy and rear lock-box? Thank you.",
    defaultTemplate: "ndis"
  },
  {
    id: "LS-INQ-4093",
    name: "Beverley Watson",
    email: "b.watson48@gmail.com",
    phone: "0418 223 904",
    location: "Melbourne, VIC",
    category: "Travel & Flight",
    date: "Yesterday at 04:30 PM",
    status: "new",
    subject: "Qantas Airline Compliance for AeroFold Scooter",
    message: "We are booked on a Qantas flight from Melbourne to Perth next month. Can you confirm if the AeroFold Lithium battery complies with CASA and IATA regulations for carry-on? Do you provide a UN 38.3 test certificate I can show check-in staff?",
    defaultTemplate: "airline"
  },
  {
    id: "LS-INQ-4089",
    name: "Peter Callanan",
    email: "peter@southernpharmacy.com.au",
    phone: "08 8272 1199",
    location: "Mitcham, SA",
    category: "Wholesale",
    date: "Yesterday at 01:10 PM",
    status: "in_progress",
    subject: "Wholesale Pharmacy Supply Agreement",
    message: "Good day, I manage an independent community pharmacy in Mitcham. We have clients requesting lightweight travel folding scooters. How do we open a B2B trade account with Butler Trading, and what is your consignment or floor stock margin schedule?",
    defaultTemplate: "wholesale"
  },
  {
    id: "LS-INQ-4085",
    name: "Graham & Joan Miller",
    email: "g.miller@westnet.com.au",
    phone: "0429 801 352",
    location: "Ballarat, VIC",
    category: "Tax & GST",
    date: "16 Oct 2024",
    status: "replied",
    subject: "GST Exemption Certificate Confirmation",
    message: "My accountant requested confirmation that the MetroGlide 4-wheel scooter we ordered is completely exempt from GST. Could you please provide the statutory reference for our tax records?",
    defaultTemplate: "gst_free"
  },
  {
    id: "LS-INQ-4081",
    name: "Sister Mary Teresa",
    email: "admin@stjosephcare.org.au",
    phone: "02 9820 4000",
    location: "Liverpool, NSW",
    category: "Shipping",
    date: "15 Oct 2024",
    status: "replied",
    subject: "Delivery logistics to Aged Care facility",
    message: "Can heavy duty scooters be delivered directly into our facility's maintenance loading bay with tailgate unboxing? We require driver notification 30 minutes prior to arrival.",
    defaultTemplate: "shipping"
  }
];

interface TemplateVariant {
  subject: string;
  html: string;
}

interface TemplateConfig {
  label: string;
  tones: Record<ResponseTone, TemplateVariant>;
}

const TEMPLATES: Record<string, TemplateConfig> = {
  arr204: {
    label: "ARR 204 Footpath Legal Exemption",
    tones: {
      'Formal/Clinical': {
        subject: "Lifestyle Mobility Australia: Australian Road Rule 204 Regulatory Guidance",
        html: `<p>Dear {CUSTOMER_NAME},</p>
<p>Thank you for contacting Lifestyle Mobility Australia regarding mobility scooter legal requirements and footpath regulations.</p>

<div style="background-color: #F4F1EA; border-left: 4px solid #007A78; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Statutory Summary (Australian Road Rule 204):</strong><br>
  Under Australian Road Rule 204, an electric mobility scooter governed to a maximum design speed not exceeding <strong>10 km/h</strong> on level ground is legally classified as a <strong>pedestrian device</strong>.
</div>

<h3 style="color: #007A78; font-size: 17px; margin: 20px 0 8px;">Key Regulations for South Australia & Nationwide:</h3>
<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>No Driver Licence Required:</strong> You do not need a driver licence, learner permit, or medical driving assessment to operate a 10 km/h mobility scooter.</li>
  <li><strong>Zero Registration Fees:</strong> In SA, VIC, NSW, WA, and TAS, mobility scooters do not require vehicle registration or compulsory third-party (CTP) insurance.</li>
  <li><strong>Footpath Priority:</strong> You have the legal right-of-way as a pedestrian on all footpaths, shared pedestrian paths, nature strips, and inside shopping precincts.</li>
  <li><strong>Roadway Transit:</strong> You may only operate on the roadway when no footpath is accessible or when a footpath is obstructed or unsafe, keeping to the far side of the road.</li>
</ul>

<p>Every mobility scooter supplied by Butler Trading Pty. Ltd. is factory speed-governed to 10 km/h, ensuring 100% legal compliance from your first day of travel.</p>

<p>Would you like us to arrange a safe, obligation-free demonstration of our travel folding or mid-size models?</p>

<p><a href="https://lifestylemobilityscooters.com.au/shop/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">View ARR 204 Compliant Scooters</a></p>`
      },

      'Empathetic/Care': {
        subject: "Re: Your Mobility Scooter Questions – You are in Safe Hands with Lifestyle Mobility",
        html: `<p>Hello {CUSTOMER_NAME},</p>
<p>Thank you so much for reaching out to our team today. We know that looking into a mobility scooter is an important decision, and it is completely normal to have questions about safety, licences, and road rules.</p>

<div style="background-color: #FDF2F4; border-left: 4px solid #E11D48; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Peace of Mind Guarantee:</strong><br>
  Please rest easy: <strong>you will never need to sit for a driving test, visit a licensing centre, or pay vehicle registration</strong>.
</div>

<p>Under Australian Road Rule 204, because all our scooters are carefully speed-governed to a gentle 10 km/h, you have the exact same rights and protections as someone walking on the footpath. You can enjoy your local shops, parks, and visiting friends with complete confidence and dignity.</p>

<h3 style="color: #007A78; font-size: 17px; margin: 20px 0 8px;">What this means for your daily comfort:</h3>
<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>No Stressful Exams:</strong> No driving licence or medical driving tests required.</li>
  <li><strong>100% Pedestrian Rights:</strong> Ride smoothly across footpaths, shopping malls, and community centres.</li>
  <li><strong>Gentle Learning Curve:</strong> Intuitive delta-tiller steering with automatic safety electromagnetic braking when you release the throttle.</li>
</ul>

<p>We are here to support you at your own pace. If you would like to chat or have any questions, our friendly team is always just a phone call away.</p>

<p><a href="https://lifestylemobilityscooters.com.au/shop/portable-folding/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Explore Gentle Everyday Scooters</a></p>`
      },

      'Direct/Support': {
        subject: "Quick Summary: Australian Mobility Scooter Licencing & Footpath Rules",
        html: `<p>Hi {CUSTOMER_NAME},</p>
<p>Here is the direct regulatory summary regarding mobility scooter operation in Australia:</p>

<div style="background-color: #EFF6FF; border-left: 4px solid #2563EB; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Rule Summary (ARR 204):</strong> 10 km/h scooters are classified as <strong>pedestrian equipment</strong> nationwide.
</div>

<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>Licence:</strong> NOT required. No test, permit, or doctor sign-off required.</li>
  <li><strong>Registration:</strong> $0 / Not required across SA, VIC, NSW, WA, and TAS.</li>
  <li><strong>Pathways:</strong> Full legal pedestrian right-of-way on all footpaths and indoor retail centres.</li>
  <li><strong>Roadways:</strong> Permitted only where footpath is impassable (ride on far left margin).</li>
  <li><strong>Speed:</strong> Factory governed to 10 km/h max legal limit.</li>
</ul>

<p>All Lifestyle Mobility vehicles are ARR 204 certified for immediate dispatch from our Adelaide central warehouse.</p>

<p><a href="https://lifestylemobilityscooters.com.au/shop/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">View ARR 204 Stock & Pricing</a></p>`
      }
    }
  },

  gst_free: {
    label: "Section 38-45 GST-Free Exemption",
    tones: {
      'Formal/Clinical': {
        subject: "Lifestyle Mobility Australia: 100% GST-Free Medical Exemption Certification",
        html: `<p>Dear {CUSTOMER_NAME},</p>
<p>Thank you for your inquiry regarding the Goods and Services Tax (GST) status of our mobility equipment.</p>

<div style="background-color: #F4F1EA; border-left: 4px solid #007A78; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Statutory Exemption Reference:</strong><br>
  All motorised mobility scooters, electric powerchairs, and assistive ramps supplied by Lifestyle Mobility Australia (Butler Trading Pty. Ltd. ABN 84 008 071 323) are <strong>100% GST-Free</strong> under <strong>Section 38-45 of the A New Tax System (Goods and Services Tax) Act 1999 (Schedule 3)</strong>.
</div>

<h3 style="color: #007A78; font-size: 17px; margin: 20px 0 8px;">Compliance Particulars:</h3>
<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li>Medical assistive equipment specifically manufactured for individuals with mobility restrictions is zero-rated for GST.</li>
  <li>No GST is added to any retail or wholesale tax invoice.</li>
  <li>Your tax invoice will state: <em>"Item is GST-free under Section 38-45 of the GST Act 1999"</em> for ATO and accountant reconciliation.</li>
</ul>

<p>Please find your itemised quote and statutory declaration attached for your records.</p>

<p><a href="https://lifestylemobilityscooters.com.au/contact/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Request Formal Itemised Quote</a></p>`
      },

      'Empathetic/Care': {
        subject: "Good News Regarding Your Mobility Equipment: 100% GST-Free Savings",
        html: `<p>Hello {CUSTOMER_NAME},</p>
<p>We are delighted to bring you some very welcome news regarding your mobility equipment purchase.</p>

<div style="background-color: #FDF2F4; border-left: 4px solid #E11D48; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>100% Tax-Free Medical Support:</strong><br>
  Because Australian law recognizes mobility scooters as essential medical aids, <strong>you will not be charged a single cent in GST</strong>.
</div>

<p>We understand that living expenses and medical aids require careful budgeting. The entire 10% GST is legally removed from your purchase, keeping quality mobility as affordable and stress-free as possible.</p>

<p>Your official tax receipt will include the full statutory certificate so your accountant or family bookkeeper has everything they need without any paperwork hassles.</p>

<p><a href="https://lifestylemobilityscooters.com.au/shop/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Browse GST-Free Mobility Range</a></p>`
      },

      'Direct/Support': {
        subject: "Tax Status: 0% GST Confirmed (Section 38-45 GST Act)",
        html: `<p>Hi {CUSTOMER_NAME},</p>
<p>Confirmed: All Lifestyle Mobility scooters and ramps are zero-rated for GST.</p>

<div style="background-color: #EFF6FF; border-left: 4px solid #2563EB; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Statutory Exemption:</strong> Section 38-45, GST Act 1999 (Schedule 3 - Medical Assistive Technology).
</div>

<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>GST Charged:</strong> $0.00 (0%).</li>
  <li><strong>Invoice Notation:</strong> Formal statutory reference included on all tax invoices.</li>
  <li><strong>ATO Compliance:</strong> Validated for personal tax records and business deductions.</li>
</ul>

<p><a href="https://lifestylemobilityscooters.com.au/contact/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Download Tax Exemption Invoice</a></p>`
      }
    }
  },

  ndis: {
    label: "NDIS Category 05 Quote",
    tones: {
      'Formal/Clinical': {
        subject: "Lifestyle Mobility Australia: NDIS Assistive Technology (Category 05) Written Quote",
        html: `<p>Dear {CUSTOMER_NAME},</p>
<p>Thank you for reaching out regarding NDIS support for your assistive mobility equipment.</p>

<div style="background-color: #F4F1EA; border-left: 4px solid #007A78; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>NDIS Capital Supports (Category 05 - Assistive Technology):</strong><br>
  Lifestyle Mobility Australia assists <strong>Self-Managed</strong> and <strong>Plan-Managed</strong> NDIS participants across all Australian states and territories.
</div>

<h3 style="color: #007A78; font-size: 17px; margin: 20px 0 8px;">What We Provide for Your Plan Manager / OT Assessment:</h3>
<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>Formal Written Quote:</strong> Product specifications, SWL safe working load ratings, and warranty guarantees.</li>
  <li><strong>TGA Regulatory Compliance:</strong> Verification of therapeutic goods compliance and speed-governed safety parameters.</li>
  <li><strong>Itemised Line Item Coding:</strong> Formatted specifically for NDIS portal claim submission.</li>
  <li><strong>Direct Invoicing:</strong> We invoice your Plan Manager directly upon authorization, requiring zero out-of-pocket payment from you.</li>
</ul>

<p>Our clinical liaison desk is available to speak with your Occupational Therapist to supply equipment trial verification documents.</p>

<p><a href="https://lifestylemobilityscooters.com.au/contact/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Contact NDIS Support Liaison</a></p>`
      },

      'Empathetic/Care': {
        subject: "We're Here to Support You with Your NDIS Mobility Journey",
        html: `<p>Hello {CUSTOMER_NAME},</p>
<p>Navigating the NDIS can sometimes feel complicated and overwhelming, but we want you to know that <strong>we are right here by your side</strong> to make this process as easy and gentle as possible.</p>

<div style="background-color: #FDF2F4; border-left: 4px solid #E11D48; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Zero Out-of-Pocket Stress:</strong><br>
  We work directly with your Plan Manager and Occupational Therapist so you won't have to worry about complicated paperwork or upfront costs.
</div>

<p>Whether you need formal written quotes, trial verification letters for your OT, or specific weight capacity documentation, our caring NDIS coordinator will prepare everything promptly.</p>

<p>Please give us a call whenever you are ready, and we will take care of the details together.</p>

<p><a href="https://lifestylemobilityscooters.com.au/contact/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Request Gentle NDIS Assistance</a></p>`
      },

      'Direct/Support': {
        subject: "NDIS Category 05 Quote & Fast-Track Claim Details",
        html: `<p>Hi {CUSTOMER_NAME},</p>
<p>Here are your NDIS Category 05 (Assistive Technology) claim details:</p>

<div style="background-color: #EFF6FF; border-left: 4px solid #2563EB; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Support Category:</strong> 05_AssistiveTechnology_CapitalSupports
</div>

<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>Supplier Name:</strong> Butler Trading Pty. Ltd. (ABN: 84 008 071 323).</li>
  <li><strong>Billing Method:</strong> Direct invoicing to Plan Manager via email or instant receipt for Self-Managed portal claim.</li>
  <li><strong>Clinical Inclusions:</strong> Full SWL weight rating certification, battery compliance, 3-year structural chassis warranty.</li>
  <li><strong>Turnaround:</strong> Immediate dispatch upon plan fund approval.</li>
</ul>

<p><a href="https://lifestylemobilityscooters.com.au/contact/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Generate NDIS Tax Invoice</a></p>`
      }
    }
  },

  airline: {
    label: "CASA/IATA Airline Travel Pack",
    tones: {
      'Formal/Clinical': {
        subject: "Lifestyle Mobility Australia: CASA & IATA Lithium Battery Flight Transit Clearance",
        html: `<p>Dear {CUSTOMER_NAME},</p>
<p>Thank you for checking airline flight clearance requirements for your travel mobility scooter.</p>

<div style="background-color: #F4F1EA; border-left: 4px solid #007A78; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>CASA / IATA Dangerous Goods Guidelines:</strong><br>
  Our portable travel scooters (including the AeroFold and TravelLite series) utilize certified <strong>UN 38.3 Lithium LiFePO4 battery packs</strong> engineered specifically for commercial air travel compliance.
</div>

<h3 style="color: #007A78; font-size: 17px; margin: 20px 0 8px;">Airline Check-In Instructions:</h3>
<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>Battery Watt-Hour Rating:</strong> Rated under 300Wh (or dual 160Wh packs), strictly complying with airline carry-on allowances.</li>
  <li><strong>Removal:</strong> The lithium battery is removed via the quick-release lock and carried into the passenger cabin.</li>
  <li><strong>Chassis Checked as Medical Aid:</strong> Airlines carry your folded scooter chassis in the cargo hold free of charge as essential medical equipment.</li>
  <li><strong>UN 38.3 Certificate:</strong> Please present the attached UN 38.3 Material Safety Data Sheet (MSDS) at the oversized baggage check-in desk.</li>
</ul>

<p>We wish you a safe and independent holiday journey!</p>

<p><a href="https://lifestylemobilityscooters.com.au/shop/portable-folding/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">View Airline Certified Travel Models</a></p>`
      },

      'Empathetic/Care': {
        subject: "Wishing You Safe Travels: Your Easy Airline Flying Guide",
        html: `<p>Hello {CUSTOMER_NAME},</p>
<p>How exciting that you are travelling! Holidays and visiting family are such precious times, and we want to ensure your journey through the airport is completely smooth, enjoyable, and free of stress.</p>

<div style="background-color: #FDF2F4; border-left: 4px solid #E11D48; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Hassle-Free Airport Travel:</strong><br>
  All major airlines (Qantas, Virgin, Jetstar) have clear guidelines that welcome your folding travel scooter as an essential medical aid.
</div>

<p>Simply take your lightweight battery into the passenger cabin with your carry-on bag, and the airline ground staff will take care of loading your folded scooter frame safely at the boarding gate.</p>

<p>Please print the certificate we have prepared for you, show it with a smile at the counter, and have a wonderful, relaxing holiday!</p>

<p><a href="https://lifestylemobilityscooters.com.au/shop/portable-folding/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">View Airline-Friendly Models</a></p>`
      },

      'Direct/Support': {
        subject: "Airline Battery Clearance Checklist: UN 38.3 Certified",
        html: `<p>Hi {CUSTOMER_NAME},</p>
<p>Here is your airport clearance checklist for commercial flights across Australia:</p>

<div style="background-color: #EFF6FF; border-left: 4px solid #2563EB; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>CASA / IATA Status:</strong> UN 38.3 Certified (< 300Wh lithium pack). Fully compliant.
</div>

<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>Step 1:</strong> Notify airline mobility desk 48 hours prior to departure.</li>
  <li><strong>Step 2:</strong> Detach lithium battery pack at oversized baggage and carry into aircraft cabin.</li>
  <li><strong>Step 3:</strong> Present attached UN 38.3 MSDS test sheet if requested.</li>
  <li><strong>Step 4:</strong> Scooter chassis checked into cargo hold at $0 fee as assistive medical device.</li>
</ul>

<p><a href="https://lifestylemobilityscooters.com.au/shop/portable-folding/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Download UN 38.3 Test Report</a></p>`
      }
    }
  },

  shipping: {
    label: "National Freight & Unboxing",
    tones: {
      'Formal/Clinical': {
        subject: "Lifestyle Mobility Australia: National Metro Logistics & Unboxing Dispatch Details",
        html: `<p>Dear {CUSTOMER_NAME},</p>
<p>Thank you for inquiring about our national delivery and logistics services.</p>

<div style="background-color: #F4F1EA; border-left: 4px solid #007A78; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Nationwide Specialized Tail-Lift Delivery:</strong><br>
  We transport all equipment via specialized tail-lift logistics partners across Adelaide, Melbourne, Sydney, Brisbane, Perth, and regional hubs.
</div>

<h3 style="color: #007A78; font-size: 17px; margin: 20px 0 8px;">Delivery Protocol:</h3>
<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>Transit Insurance:</strong> All shipments include 100% comprehensive transit insurance from our South Australian central depot.</li>
  <li><strong>Pre-Delivery Call:</strong> The carrier driver will phone you 30 to 60 minutes prior to arrival to confirm access.</li>
  <li><strong>Packaging & Assembly:</strong> Portable folding units arrive fully assembled in protective travel cartons. Pavement cruisers arrive 95% assembled on secure wooden pallets.</li>
  <li><strong>White-Glove Service:</strong> Available in metro zones for complete uncrating, battery connection, and packing material disposal.</li>
</ul>

<p>Your consignment tracking number will be SMS-alerted as soon as your dispatch manifest is scanned.</p>

<p><a href="https://lifestylemobilityscooters.com.au/tracking/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Track Order Dispatch Online</a></p>`
      },

      'Empathetic/Care': {
        subject: "Your Scooter is On Its Way: Relax, We Handle All the Heavy Lifting",
        html: `<p>Hello {CUSTOMER_NAME},</p>
<p>We want to reassure you that when your new scooter arrives, <strong>you will not have to lift a finger or worry about heavy boxes</strong>.</p>

<div style="background-color: #FDF2F4; border-left: 4px solid #E11D48; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Careful Delivery Promise:</strong><br>
  Our friendly logistics driver will phone you 30 to 60 minutes beforehand so you have plenty of time to get ready without rushing.
</div>

<p>Travel scooters arrive pre-assembled—simply unfold the frame and you are ready to ride. For our larger cruisers, our white-glove team can wheel the unit gently onto your driveway or porch, unbox it safely, and take all the cardboard packaging away with them.</p>

<p>If you or your family need anything at all during delivery day, please call our direct hotline and we will be delighted to assist.</p>

<p><a href="https://lifestylemobilityscooters.com.au/tracking/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Track Your Delivery Progress</a></p>`
      },

      'Direct/Support': {
        subject: "Dispatch Notice & Freight Tracking Information",
        html: `<p>Hi {CUSTOMER_NAME},</p>
<p>Logistics briefing for your mobility equipment dispatch:</p>

<div style="background-color: #EFF6FF; border-left: 4px solid #2563EB; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Dispatch Status:</strong> South Australian Central Warehouse. Specialized tail-lift freight.
</div>

<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>Transit Time:</strong> Metro 2–4 business days. Regional 4–6 business days.</li>
  <li><strong>Driver Notice:</strong> SMS & phone call 30–60 minutes prior to delivery.</li>
  <li><strong>Insurance:</strong> 100% full replacement transit insurance included.</li>
  <li><strong>Support Line:</strong> 1800 703 244 (Toll-Free, 9am–5pm ACST).</li>
</ul>

<p><a href="https://lifestylemobilityscooters.com.au/tracking/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">View Real-Time Tracking Portal</a></p>`
      }
    }
  },

  wholesale: {
    label: "B2B Commercial Account",
    tones: {
      'Formal/Clinical': {
        subject: "Lifestyle Mobility Australia: B2B Commercial Account & Wholesale Schedule",
        html: `<p>Dear {CUSTOMER_NAME},</p>
<p>Thank you for your interest in partnering with Butler Trading Pty. Ltd. (Est. 1985) as an authorized retail distributor or pharmacy provider.</p>

<div style="background-color: #F4F1EA; border-left: 4px solid #007A78; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Commercial Trade Terms & Advantages:</strong><br>
  We supply over 260 medical facilities, pharmacies, and mobility showrooms across Australia with factory-direct margins, national parts availability, and South Australian technical support.
</div>

<h3 style="color: #007A78; font-size: 17px; margin: 20px 0 8px;">Wholesale Account Benefits:</h3>
<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>Tiered Margin Structure:</strong> Generous dealer margins on travel, mid-size, and all-terrain models.</li>
  <li><strong>Zero MOQ for Display Stock:</strong> Order single demonstration floor units with full dealer discount.</li>
  <li><strong>3-Year Chassis Warranty:</strong> Fully backed by our Adelaide parts depot and mobile support team.</li>
  <li><strong>Point-of-Sale Collateral:</strong> High-resolution printed brochures, clinical comparison cards, and digital catalog assets.</li>
</ul>

<p>Please find our B2B dealer application form attached. Once returned, your wholesale portal login will be activated within 24 hours.</p>

<p><a href="https://lifestylemobilityscooters.com.au/wholesale/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Submit B2B Dealer Application</a></p>`
      },

      'Empathetic/Care': {
        subject: "Welcome to Our Provider Family: Caring for Australian Mobility Together",
        html: `<p>Hello {CUSTOMER_NAME},</p>
<p>Thank you warmly for reaching out to us. For nearly 40 years, Butler Trading has believed that quality assistive technology should empower local communities and enrich lives with safety and freedom.</p>

<div style="background-color: #FDF2F4; border-left: 4px solid #E11D48; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>Patient-Centred Partnership:</strong><br>
  We look forward to helping you provide reliable, trustworthy mobility solutions that give your patients and local customers genuine independence.
</div>

<p>Our Adelaide team is always here to support your clinical staff with training, demonstration floor models, and rapid spare parts dispatch so you can care for your clients without delay.</p>

<p>We are delighted to welcome you to our family of healthcare providers.</p>

<p><a href="https://lifestylemobilityscooters.com.au/wholesale/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Start Your Community Partnership</a></p>`
      },

      'Direct/Support': {
        subject: "Wholesale Margin Schedule & Trade Account Fast-Track",
        html: `<p>Hi {CUSTOMER_NAME},</p>
<p>Commercial dealer breakdown for Butler Trading Pty. Ltd.:</p>

<div style="background-color: #EFF6FF; border-left: 4px solid #2563EB; padding: 14px 18px; margin: 18px 0; border-radius: 0 8px 8px 0; font-size: 14px; color: #1E252B;">
  <strong>B2B Account Terms:</strong> 30-day commercial terms upon credit review. Immediate dealer pricing.
</div>

<ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
  <li><strong>Margins:</strong> Competitive dealer margins across Folding, Mid-Size, and All-Terrain categories.</li>
  <li><strong>MOQ:</strong> Zero minimum order quantity. 1-unit demo floor order eligible for full trade discount.</li>
  <li><strong>Parts Depot:</strong> 48-hour parts dispatch from Adelaide facility.</li>
  <li><strong>Activation:</strong> B2B portal login enabled within 24 business hours of application receipt.</li>
</ul>

<p><a href="https://lifestylemobilityscooters.com.au/wholesale/" style="display: inline-block; background-color: #007A78; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; margin: 12px 0;">Fast-Track B2B Account Activation</a></p>`
      }
    }
  }
};

export default function ReplyPortalClient() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'in_progress' | 'replied'>('all');
  const [responseTone, setResponseTone] = useState<ResponseTone>('Formal/Clinical');
  const [activeTemplateKey, setActiveTemplateKey] = useState<string>('arr204');
  const [viewMode, setViewMode] = useState<'preview' | 'code' | 'split'>('preview');
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeInquiry = inquiries[activeIdx] || inquiries[0];

  const [subjectLine, setSubjectLine] = useState(
    TEMPLATES[activeInquiry.defaultTemplate]?.tones['Formal/Clinical'].subject || TEMPLATES.arr204.tones['Formal/Clinical'].subject
  );
  
  const [editorContent, setEditorContent] = useState(() => {
    const defaultTpl = TEMPLATES[activeInquiry.defaultTemplate] || TEMPLATES.arr204;
    return defaultTpl.tones['Formal/Clinical'].html.replace(/{CUSTOMER_NAME}/g, activeInquiry.name.split(' ')[0]);
  });

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const selectInquiry = (idx: number) => {
    setActiveIdx(idx);
    const inq = inquiries[idx];
    const tplKey = inq.defaultTemplate || 'arr204';
    setActiveTemplateKey(tplKey);
    const tpl = TEMPLATES[tplKey] || TEMPLATES.arr204;
    const toneData = tpl.tones[responseTone];
    setSubjectLine(toneData.subject);
    setEditorContent(toneData.html.replace(/{CUSTOMER_NAME}/g, inq.name.split(' ')[0]));
  };

  const handleToneChange = (newTone: ResponseTone) => {
    setResponseTone(newTone);
    const tpl = TEMPLATES[activeTemplateKey] || TEMPLATES.arr204;
    const toneData = tpl.tones[newTone];
    setSubjectLine(toneData.subject);
    setEditorContent(toneData.html.replace(/{CUSTOMER_NAME}/g, activeInquiry.name.split(' ')[0]));
    triggerToast(`Response tone toggled to: ${newTone}`);
  };

  const applyTemplate = (key: string) => {
    setActiveTemplateKey(key);
    const tpl = TEMPLATES[key];
    if (!tpl) return;
    const toneData = tpl.tones[responseTone];
    setSubjectLine(toneData.subject);
    setEditorContent(toneData.html.replace(/{CUSTOMER_NAME}/g, activeInquiry.name.split(' ')[0]));
    triggerToast(`Applied template: ${tpl.label} (${responseTone})`);
  };

  const updateStatus = (newStatus: 'new' | 'in_progress' | 'replied') => {
    const updated = [...inquiries];
    updated[activeIdx].status = newStatus;
    setInquiries(updated);
    triggerToast(`Inquiry ${activeInquiry.id} marked as ${newStatus.toUpperCase()}`);
  };

  const getSignatureData = () => {
    if (responseTone === 'Formal/Clinical') {
      return {
        closing: 'Yours faithfully,',
        title: 'Clinical Assistive Support Desk',
        subtitle: 'LIFESTYLE MOBILITY SCOOTERS Australia'
      };
    } else if (responseTone === 'Empathetic/Care') {
      return {
        closing: 'With warmest regards and best wishes for your independence,',
        title: 'Patient Care & Community Liaison Team',
        subtitle: 'LIFESTYLE MOBILITY Australia'
      };
    } else {
      return {
        closing: 'Best regards,',
        title: 'Technical Support & Fast-Track Dispatch',
        subtitle: 'LIFESTYLE MOBILITY Australia'
      };
    }
  };

  const getFullEmailHtml = () => {
    const sig = getSignatureData();

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subjectLine}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; margin: 0; padding: 24px 12px; color: #1E252B;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
    <!-- Header -->
    <tr>
      <td style="background-color: #007A78; padding: 24px 28px; text-align: center; color: #FFFFFF;">
        <h2 style="margin: 0 0 4px; font-size: 20px; font-weight: 800; letter-spacing: -0.01em;">LIFESTYLE MOBILITY AUSTRALIA</h2>
        <p style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; opacity: 0.9;">Butler Trading Pty. Ltd. • Clinical Support Desk (Est. 1985)</p>
      </td>
    </tr>
    <!-- Body Content -->
    <tr>
      <td style="padding: 28px; font-size: 15px; line-height: 1.65; color: #1E252B;">
        ${editorContent}
        
        <!-- Clinical Signature -->
        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #E2E8F0; font-size: 13px; color: #4A5568;">
          <p style="margin: 0 0 4px;">${sig.closing}</p>
          <p style="margin: 0;">
            <strong style="color: #1E252B;">${sig.title}</strong><br>
            <strong style="color: #007A78;">${sig.subtitle}</strong><br>
            Direct: 1800 703 244 | SMS Concierge: +61 400 000 000<br>
            National HQ: 3 Shepley Ave, Panorama SA 5041<br>
            Web: <a href="https://lifestylemobilityscooters.com.au" style="color: #007A78; text-decoration: none;">lifestylemobilityscooters.com.au</a>
          </p>
        </div>
      </td>
    </tr>
    <!-- Legal Footer -->
    <tr>
      <td style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 16px 28px; font-size: 11px; color: #64748B; line-height: 1.5;">
        <strong>REGULATORY ADVISORY & STATUTORY COMPLIANCE:</strong> All equipment is speed-governed to 10 km/h under Australian Road Rule 204 for pedestrian footpath classification and is 100% GST-Free under Section 38-45 of the GST Act 1999. Supplied by Butler Trading Pty. Ltd. (ABN 84 008 071 323).
      </td>
    </tr>
  </table>
</body>
</html>`;
  };

  const copyHtmlCode = () => {
    const fullHtml = getFullEmailHtml();
    navigator.clipboard.writeText(fullHtml).then(() => {
      setCopied(true);
      triggerToast("Complete HTML email code copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const downloadHtmlFile = () => {
    const fullHtml = getFullEmailHtml();
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Reply_${activeInquiry.id}_${responseTone.replace(/\//g, '_')}_${activeInquiry.name.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    triggerToast("HTML file downloaded successfully!");
  };

  const replyViaWhatsApp = () => {
    const cleanPhone = activeInquiry.phone.replace(/[^0-9]/g, '');
    const formatted = cleanPhone.startsWith('0') ? '61' + cleanPhone.substring(1) : cleanPhone;
    const msg = `Hi ${activeInquiry.name.split(' ')[0]},\n\nThank you for reaching out to Lifestyle Mobility Australia regarding inquiry ${activeInquiry.id}.\n\nOur clinical team has prepared your requested specifications. Please view our full catalog and compliance guides online at https://lifestylemobilityscooters.com.au or phone us toll-free on 1800 703 244.\n\nWarm regards,\nLifestyle Mobility Australia`;
    window.open(`https://wa.me/${formatted}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const replyViaMailto = () => {
    const subject = encodeURIComponent(subjectLine);
    const plainText = editorContent.replace(/<[^>]*>/g, '').replace(/\n\s*\n/g, '\n\n');
    const body = encodeURIComponent(plainText);
    window.location.href = `mailto:${activeInquiry.email}?subject=${subject}&body=${body}`;
  };

  // Filtered inquiries
  const filteredInquiries = inquiries.filter(inq => {
    const matchesFilter = statusFilter === 'all' || inq.status === statusFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      inq.name.toLowerCase().includes(q) ||
      inq.email.toLowerCase().includes(q) ||
      inq.id.toLowerCase().includes(q) ||
      inq.category.toLowerCase().includes(q) ||
      inq.message.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const sig = getSignatureData();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Top Bar with Standalone HTML link */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Live Clinical Dispatch Portal</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-charcoal">
            Customer Inquiry & HTML Reply Portal
          </h1>
          <p className="text-sm text-charcoal/60 mt-1">
            Produce 100% formatted HTML replies with tone toggling, ARR 204 legal disclaimers, GST exemption citations, and NDIS line-item coding.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="/reply-portal.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent/80 hover:bg-accent text-charcoal px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 border border-gray-200 transition-all shadow-sm"
          >
            <ExternalLink size={14} className="text-primary" />
            <span>Open Standalone HTML Portal</span>
          </a>
          <button
            onClick={() => updateStatus('replied')}
            className="medical-gradient text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all"
          >
            <CheckCircle2 size={16} />
            <span>Mark Current Replied</span>
          </button>
        </div>
      </div>

      {/* 4 Metric Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Inbox size={22} />
          </div>
          <div>
            <div className="text-2xl font-bold text-charcoal">{inquiries.length}</div>
            <div className="text-xs text-charcoal/50 font-bold uppercase">Total Inquiries</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Clock size={22} />
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600">
              {inquiries.filter(i => i.status === 'new').length}
            </div>
            <div className="text-xs text-charcoal/50 font-bold uppercase">Awaiting Reply</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 size={22} />
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">
              {inquiries.filter(i => i.status === 'replied').length}
            </div>
            <div className="text-xs text-charcoal/50 font-bold uppercase">Replies Sent</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <ShieldCheck size={22} />
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">100%</div>
            <div className="text-xs text-charcoal/50 font-bold uppercase">ARR 204 Validated</div>
          </div>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Inquiry Queue (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-sm text-charcoal">Inquiry Queue</span>
              <span className="text-xs text-primary font-bold">{filteredInquiries.length} Active</span>
            </div>

            {/* Search Input */}
            <div className="relative mb-3">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/40" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search inquiries..."
                className="w-full bg-accent/40 rounded-xl py-2 pl-10 pr-4 text-xs font-medium text-charcoal focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px]">
              {(['all', 'new', 'in_progress', 'replied'] as const).map(st => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg font-bold capitalize transition-all shrink-0 ${
                    statusFilter === st 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'bg-accent/40 text-charcoal/70 hover:bg-accent'
                  }`}
                >
                  {st.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Inquiry List */}
          <div className="divide-y divide-gray-100 max-h-[640px] overflow-y-auto">
            {filteredInquiries.map((inq) => {
              const realIdx = inquiries.findIndex(i => i.id === inq.id);
              const isSelected = realIdx === activeIdx;

              return (
                <div
                  key={inq.id}
                  onClick={() => selectInquiry(realIdx)}
                  className={`p-4 cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-primary/5 border-l-4 border-primary' 
                      : 'hover:bg-accent/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold text-primary">{inq.id}</span>
                    <span className="text-[10px] text-charcoal/40">{inq.date}</span>
                  </div>
                  <h3 className="font-bold text-sm text-charcoal mb-0.5 leading-snug">{inq.name}</h3>
                  <p className="text-xs text-charcoal/60 truncate mb-2">{inq.subject}</p>
                  
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      inq.status === 'new' 
                        ? 'bg-amber-100 text-amber-800' 
                        : inq.status === 'replied'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {inq.status.replace('_', ' ')}
                    </span>
                    <span className="text-[10px] bg-gray-100 text-charcoal/60 px-2 py-0.5 rounded-md font-medium">
                      {inq.category}
                    </span>
                    <span className="text-[10px] text-charcoal/40 ml-auto">{inq.location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Reply Workspace & HTML Live Preview (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Active Ticket Banner */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-primary">{activeInquiry.id}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                    activeInquiry.status === 'new' 
                      ? 'bg-amber-100 text-amber-800' 
                      : activeInquiry.status === 'replied'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-indigo-100 text-indigo-800'
                  }`}>
                    {activeInquiry.status.replace('_', ' ')}
                  </span>
                  <span className="text-xs bg-gray-100 text-charcoal/70 px-2 py-0.5 rounded font-medium">
                    {activeInquiry.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-charcoal">{activeInquiry.name}</h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal/60 mt-1">
                  <span className="flex items-center gap-1"><Mail size={13} /> {activeInquiry.email}</span>
                  <span className="flex items-center gap-1"><Phone size={13} /> {activeInquiry.phone}</span>
                  <span className="flex items-center gap-1"><MapPin size={13} /> {activeInquiry.location}</span>
                </div>
              </div>

              {/* Status Switcher */}
              <div className="flex items-center gap-2">
                <select
                  value={activeInquiry.status}
                  onChange={(e) => updateStatus(e.target.value as any)}
                  className="bg-accent/60 border border-gray-200 text-charcoal text-xs font-bold rounded-xl py-2 px-3 outline-none cursor-pointer"
                >
                  <option value="new">Status: New</option>
                  <option value="in_progress">Status: In Progress</option>
                  <option value="replied">Status: Replied</option>
                </select>
              </div>
            </div>

            {/* Customer's Message Quote */}
            <div>
              <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5">Customer&apos;s Original Message:</div>
              <div className="bg-accent/40 p-4 rounded-2xl border-l-4 border-primary text-sm text-charcoal/80 leading-relaxed italic">
                &ldquo;{activeInquiry.message}&rdquo;
              </div>
            </div>

            {/* RESPONSE TONE TOGGLE DROPDOWN */}
            <div className="mt-5 pt-4 border-t border-gray-100">
              <div className="bg-gradient-to-r from-accent/70 via-accent/40 to-white p-4 rounded-2xl border border-gray-200/80 mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <SlidersHorizontal size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-charcoal block">Response Tone Modifier</span>
                    <span className="text-[11px] text-charcoal/60">
                      {responseTone === 'Formal/Clinical' && 'Statutory rigor, Australian Road Rule 204 citations & legal accuracy'}
                      {responseTone === 'Empathetic/Care' && 'Warm, reassuring & patient-centred reassurance for elderly and family'}
                      {responseTone === 'Direct/Support' && 'Concise, bullet-first checklist for fast action & swift dispatch'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <label htmlFor="tone-select" className="text-xs font-bold text-charcoal/60 uppercase text-[10px] tracking-wider">Tone:</label>
                  <select
                    id="tone-select"
                    value={responseTone}
                    onChange={(e) => handleToneChange(e.target.value as ResponseTone)}
                    className="bg-white border-2 border-primary/20 hover:border-primary text-charcoal text-xs font-bold rounded-xl py-2 px-3.5 outline-none cursor-pointer shadow-xs transition-colors"
                  >
                    <option value="Formal/Clinical">Formal / Clinical</option>
                    <option value="Empathetic/Care">Empathetic / Care</option>
                    <option value="Direct/Support">Direct / Support</option>
                  </select>

                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                    responseTone === 'Formal/Clinical'
                      ? 'bg-primary/10 text-primary border-primary/20'
                      : responseTone === 'Empathetic/Care'
                      ? 'bg-rose-50 text-rose-700 border-rose-200'
                      : 'bg-blue-50 text-blue-700 border-blue-200'
                  }`}>
                    {responseTone}
                  </span>
                </div>
              </div>

              {/* Quick Template Selector */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-charcoal mb-2.5">
                  <Sparkles size={14} className="text-primary" />
                  <span>Pre-Approved Response Templates ({responseTone} tone):</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(TEMPLATES).map(([key, tpl]) => (
                    <button
                      key={key}
                      onClick={() => applyTemplate(key)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
                        activeTemplateKey === key
                          ? 'border-primary bg-primary text-white shadow-xs'
                          : 'border-gray-200 hover:border-primary hover:bg-primary/5 hover:text-primary text-charcoal/80 bg-white shadow-2xs'
                      }`}
                    >
                      {tpl.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* HTML Composer & Live Preview Card */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            {/* View Mode Tabs & Subject */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
              <div className="inline-flex bg-accent/40 p-1 rounded-xl border border-gray-200 text-xs font-bold">
                <button
                  onClick={() => setViewMode('preview')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    viewMode === 'preview' ? 'bg-white text-primary shadow-xs' : 'text-charcoal/60'
                  }`}
                >
                  <Eye size={14} />
                  <span>Live HTML Preview</span>
                </button>
                <button
                  onClick={() => setViewMode('code')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    viewMode === 'code' ? 'bg-white text-primary shadow-xs' : 'text-charcoal/60'
                  }`}
                >
                  <FileCode size={14} />
                  <span>Raw HTML Source</span>
                </button>
                <button
                  onClick={() => setViewMode('split')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    viewMode === 'split' ? 'bg-white text-primary shadow-xs' : 'text-charcoal/60'
                  }`}
                >
                  <Columns size={14} />
                  <span>Split View</span>
                </button>
              </div>

              {/* Subject Input */}
              <div className="flex-1 min-w-[240px]">
                <input
                  type="text"
                  value={subjectLine}
                  onChange={(e) => setSubjectLine(e.target.value)}
                  placeholder="Email subject..."
                  className="w-full bg-accent/30 border border-gray-200 rounded-xl px-3.5 py-1.5 text-xs font-bold text-charcoal outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Editor Workspace */}
            <div className={`grid gap-4 ${viewMode === 'split' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
              {/* Raw HTML Code Textarea */}
              {(viewMode === 'code' || viewMode === 'split') && (
                <div>
                  <div className="text-[11px] font-bold text-charcoal/60 uppercase tracking-widest mb-1.5 flex items-center justify-between">
                    <span>HTML Email Markup</span>
                    <span className="text-[10px] text-primary">Tone: {responseTone}</span>
                  </div>
                  <textarea
                    value={editorContent}
                    onChange={(e) => setEditorContent(e.target.value)}
                    rows={16}
                    className="w-full font-mono text-xs bg-slate-900 text-slate-100 p-4 rounded-2xl border border-slate-800 outline-none leading-relaxed resize-y focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              )}

              {/* Live Rendered HTML Email Frame */}
              {(viewMode === 'preview' || viewMode === 'split') && (
                <div>
                  <div className="text-[11px] font-bold text-charcoal/60 uppercase tracking-widest mb-1.5 flex items-center justify-between">
                    <span>Email Client Live Render</span>
                    <span className="text-[10px] text-emerald-600 font-bold">100% Client-Compatible</span>
                  </div>

                  <div className="bg-slate-100 p-4 rounded-2xl border border-gray-200 overflow-x-auto min-h-[380px]">
                    <div className="max-w-[580px] mx-auto bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
                      {/* Email Header */}
                      <div className="bg-primary p-5 text-center text-white">
                        <h4 className="text-lg font-bold tracking-tight">LIFESTYLE MOBILITY AUSTRALIA</h4>
                        <p className="text-[10px] uppercase tracking-widest opacity-90 mt-0.5">
                          Butler Trading Pty. Ltd. • Clinical Support Desk (Est. 1985)
                        </p>
                      </div>

                      {/* Email Body */}
                      <div className="p-6 text-sm text-charcoal leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: editorContent }} />

                        {/* Signature */}
                        <div className="mt-6 pt-5 border-t border-gray-100 text-xs text-charcoal/70">
                          <p className="mb-1">{sig.closing}</p>
                          <p className="leading-snug">
                            <strong className="text-charcoal">{sig.title}</strong><br />
                            <strong className="text-primary">{sig.subtitle}</strong><br />
                            Direct: {CONTACT.phone} | SMS Concierge: {CONTACT.whatsapp}<br />
                            National HQ: {CONTACT.address}<br />
                            Web: <span className="text-primary">{SITE.domain}</span>
                          </p>
                        </div>
                      </div>

                      {/* Email Footer */}
                      <div className="bg-slate-50 border-t border-gray-100 p-4 text-[10px] text-charcoal/50 leading-relaxed">
                        <strong>REGULATORY ADVISORY & STATUTORY COMPLIANCE:</strong> All equipment is speed-governed to 10 km/h under Australian Road Rule 204 for pedestrian footpath classification and is 100% GST-Free under Section 38-45 of the GST Act 1999. Supplied by Butler Trading Pty. Ltd. (ABN {CONTACT.abn}).
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={copyHtmlCode}
                  className="bg-primary text-white px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm hover:bg-primary-dark transition-all"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'HTML Copied!' : 'Copy Full HTML Code'}</span>
                </button>

                <button
                  onClick={downloadHtmlFile}
                  className="bg-white border border-gray-200 text-charcoal hover:bg-accent/40 px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all"
                >
                  <Download size={14} />
                  <span>Download .html File</span>
                </button>

                <button
                  onClick={replyViaMailto}
                  className="bg-white border border-gray-200 text-charcoal hover:bg-accent/40 px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all"
                >
                  <Mail size={14} />
                  <span>Open in Mail Client</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={replyViaWhatsApp}
                  className="bg-[#25D366] text-white px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:opacity-90 transition-all shadow-sm"
                >
                  <MessageCircle size={14} />
                  <span>Reply via WhatsApp</span>
                </button>

                <button
                  onClick={() => updateStatus('replied')}
                  className="bg-charcoal text-white px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-black transition-all"
                >
                  <Send size={14} />
                  <span>Mark as Replied</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

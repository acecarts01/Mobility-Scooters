import { SITE } from '@/src/config/site';
import HomeClient from '@/src/components/HomeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobility Scooters for Sale Australia | Lifestyle Mobility Specialists',
  description: 'Shop premium mobility scooters for sale Australia. Specialists in electric mobility scooter Australia solutions including folding mobility scooter Australia models. Buy mobility scooter online today.',
  keywords: [
    'Mobility scooters for sale',
    'Electric mobility scooter Australia',
    'Folding mobility scooter Australia',
    'buy mobility scooter online',
    'heavy-duty mobility scooter',
    'all-terrain mobility scooter'
  ],
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}

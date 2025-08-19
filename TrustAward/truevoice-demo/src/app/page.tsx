import AnalyticsCharts from '@/components/AnalyticsCharts';
import DashboardDemo from '@/components/DashboardDemo';
import Hero from '@/components/Hero';
import InfluencerVerification from '@/components/InfluencerVerification';
import IntelligenceSystem from '@/components/IntelligenceSystem';
import Pricing from '@/components/Pricing';
import ROICalculator from '@/components/ROICalculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <IntelligenceSystem />
      <DashboardDemo />
      <AnalyticsCharts />
      <InfluencerVerification />
      <ROICalculator />
      <Pricing />
    </div>
  );
}

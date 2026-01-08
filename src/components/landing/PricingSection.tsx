import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <section className="text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Simple, aligned pricing
          </h2>
          <p className="mt-6 text-white/60 text-lg">
            Free to start. Pay only when Opus delivers real value.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <PricingCard
            title="Students"
            price="Free"
            subtitle="Always"
            description="Access opportunities, apply to companies, and track placements—without paying a single rupee."
            features={[
              "Free signup & unlimited applications",
              "Skill-based job recommendations",
              "Application tracking & updates",
              "College-verified profile",
              "Optional career insights tools",
            ]}
            cta="Get Started for Free"
            secondaryCta="Explore Student Features"
          />

          <PricingCard
            title="Recruiters"
            price="Paid"
            subtitle="Flexible plans"
            description="Hire verified talent with precision. Pay for access, matching, and hiring outcomes—not noise."
            features={[
              "Verified student & freelancer access",
              "Skill-match ranked candidates",
              "Advanced role-based filtering",
              "Campus hiring & college partnerships",
              "Hiring pipeline analytics",
            ]}
            cta="Start Hiring Smarter"
            secondaryCta="View Recruiter Plans"
          />

          <PricingCard
            title="Colleges"
            price="Institutional"
            subtitle="Annual license"
            description="Manage placements at scale with visibility, governance, and analytics across your institution."
            features={[
              "Centralized placement dashboard",
              "Student eligibility & participation control",
              "Recruiter onboarding & approvals",
              "Placement analytics & reporting",
              "Department & batch-level insights",
            ]}
            cta="Request College Access"
            secondaryCta="See Admin Dashboard"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

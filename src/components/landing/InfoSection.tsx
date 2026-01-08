import React from "react";
import InfoCard from "./InfoCard";

const InfoSection: React.FC = () => {
  return (
    <section className="w-full py-28 px-6">
      <div className="max-w-7xl mx-auto space-y-40">
        <InfoCard
        title="Built for students. Designed for outcomes."
        description="Sign up for free and access opportunities that actually match you. Opus intelligently surfaces the most relevant companies based on your skills, interests, and profile—so you spend less time searching and more time applying. Track applications, filter roles with precision, and move through placements with clarity and confidence."
        image="/images/opus-students.jpg"
        imagePosition="right"
        />


        <InfoCard
        title="Hire smarter. Hire faster."
        description="Partner directly with colleges, discover high-quality student talent, and search beyond traditional roles—including freelancers and project-based candidates. Opus ranks applicants by skill match, experience, and role fit, helping recruiters focus on the right candidates and move faster with confidence."
        image="/images/opus-recruiters.jpg"
        imagePosition="left"
        />


        <InfoCard
        title="Built for colleges. Powered by visibility."
        description="Manage and monitor every student participating in placements from your institution. Opus gives colleges a centralized view of applications, recruiter activity, and placement progress—backed by analytics that reveal outcomes, trends, and performance across departments and batches."
        image="/images/opus-colleges.jpg"
        imagePosition="right"
        />
      </div>
    </section>
  );
};

export default InfoSection;

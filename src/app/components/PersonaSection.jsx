"use client";
import React from "react";
import JobSeekersSection from "./JobSeekersSection";
import OrganizationsSection from "./OrganizationsSection";
import InstitutionsSection from "./InstitutionsSection";

const PersonaSection = () => {
  return (
    <div className="space-y-5 max-md:space-y-5">
      {" "}
      {/* Adjusted gap to 20px */}
      <JobSeekersSection />
      <OrganizationsSection />
      <InstitutionsSection />
    </div>
  );
};

export default PersonaSection;

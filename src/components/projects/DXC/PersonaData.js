import React from "react";
import { loadMedia } from "../../../utils/loadMedia";

const dxc = loadMedia("dxc/persona");

export const personas = [
  {
    pages: [
      { id: "overview", label: "Overview" },
      { id: "day", label: "Daily tasks" },
    ],

    id: "delivery-lead",
    name: "Delivery Lead",
    avatarSrc: dxc("DeliveryLead.svg"),

    // colors
    personaBg: "#B2E9CC",   // darker
    panelBg: "#E5FAEE",     // lighter
    accent: "#00A651",

    description:
      "Drive the execution and delivery of IT services, ensuring projects are delivered on time, within scope, and aligned with business objectives.",

    roleBars: [
      { label: "Strategy", value: 40 },
      { label: "Technical", value: 80 },
      { label: "Operational", value: 80 },
      { label: "Consulting", value: 100 },
    ],

    responsibilities: [
      {
        title: "Project delivery and execution",
        body:
          "Drive planning and execution of solutions and services, ensuring alignment with client scope, technical feasibility, and cost-effectiveness.",
      },
      {
        title: "Client leadership reporting",
        body:
          "Deliver monthly and quarterly reports on delivery status, including incident, change, SLAs, and value stream metrics to ensure KPIs are met.",
      },
      {
        title: "Incident and problem management",
        body:
          "Lead collaborative efforts to resolve incidents and manage escalations. Track changes and analyze associated costs and client impact.",
      },
      {
        title: "Process improvement and automation",
        body:
          "Identify and implement automation and process improvements to optimize efficiency and reduce manual work such as data integration.",
      },
    ],

    roleNuances: [
      "May oversee delivery centers of varying scale — from specialized smaller units to large-scale operations or regional hubs.",
      "May manage a portfolio of technology services, either within a specialized domain at a center or across a regional service delivery network.",
      "May manage private organizations or public clients.",
    ],

    nuanceIconSrc: dxc("PaperPlane.svg"),

    dayDescription: "Jordan is a delivery lead for the Americas who manages multiple projects simultaneously across cloud, networking and mainframe modernization.",

  },
  {
    id: "service-manager",
    name: "Service Manager",
    avatarSrc: dxc("ServiceManager.svg"),

    personaBg: "#C1D1FF",
    panelBg: "#EEF2FF",     // column 2 & 3 background
    accent: "#2D58D2",      // progress bars, headings, icons

    description:
      "Focused on ongoing operations and stability of services, ensuring they are reliable, efficient, and aligned with client expectations.",

    roleBars: [
      { label: "Strategy", value: 60 },
      { label: "Technical", value: 40 },
      { label: "Operational", value: 80 },
      { label: "Consulting", value: 100 },
    ],

    responsibilities: [
      {
        title: "System performance tracking",
        body:
          "Monitor ongoing account performance, track SLA performance, and review dashboards and run scorecards.",
      },
      {
        title: "Resource and performance management",
        body:
          "Oversee resourcing, demand, and revenue management, ensuring optimal allocation and cost control.",
      },
      {
        title: "Risk and incident management",
        body:
          "Mitigate risks, resolve escalations, and manage incident response.",
      },
      {
        title: "Process standardization and improvement",
        body:
          "Identify and implement automation and process improvements to optimize efficiency and reduce manual work such as data integration.",
      },
    ],

    nuanceIconSrc: dxc("Wrench.svg"),
  },
  {
    id: "technical-lead",
    name: "Technical Lead",
    avatarSrc: dxc("TechnicalLead.svg"),

    personaBg: "#FFE196",
    panelBg: "#FFF6DE",     // column 2 & 3 background
    accent: "#8D6600",      // progress bars, headings, icons

    description:
      "Bridging design leadership and solutions architecture, this role defines the technical direction of IT solutions and ensures scalable, secure implementation.",

    roleBars: [
      { label: "Strategy", value: 60 },
      { label: "Technical", value: 40 },
      { label: "Operational", value: 80 },
      { label: "Consulting", value: 100 },
    ],

    responsibilities: [
      {
        title: "Solution architecture, design, and scoping",
        body:
          "Develop solutions for architecture and tooling. Adapt to change requests and RFPs, estimate costs, and secure approvals. Support pre-sales with technical expertise. ",
      },
      {
        title: "Vendor compliance and management",
        body:
          "Manage vendor relationships, optimize contracts, ensure compliance, and prevent billing disputes. Oversee capacity planning, reporting, and service agreements.",
      },
      {
        title: "Technical implementation support",
        body:
          "Work closely with delivery teams to oversee deployment of designed solutions. Troubleshoot issues and provide technical problem-solving support.",
      },
      {
        title: "System performance optimization",
        body:
          "Oversee network health, manage incidents, implement changes, and optimize performance. Define KPIs, assess tools, and support QBRs to enhance service efficiency.",
      },
    ],

    roleNuances: [
      "May vary in client engagement, from dedicated support for a single large-scale client to overseeing services across multi-client portfolios.",
      "May specialize in distinct service pillars or IT domains.",
      "May operate in either a tactical role (technical design lead), focused on immediate problem-solving, or in a more strategic role (solution architect)",
    ],

    nuanceIconSrc: dxc("Gear.svg"),
  },
  {
    id: "account-lead",
    name: "Account Lead",
    avatarSrc: dxc("AccountLead.svg"),

    personaBg: "#B7E3F9",
    panelBg: "#F0F9FD",     // column 2 & 3 background
    accent: "#0688C8",      // progress bars, headings, icons

    description:
      "Dedicated to enhancing the customer experience through effective product adoption guidance and technical support that helps achieve their business objectives.",

    roleBars: [
      { label: "Strategy", value: 100 },
      { label: "Technical", value: 60 },
      { label: "Operational", value: 100 },
      { label: "Consulting", value: 60 },
    ],

    responsibilities: [
      {
        title: "New sales and services implementation",
        body:
          "Conduct strategic engagement and pre-sales processes by identifying new business opportunities. Sign and onboard a new offering. Internal and client coordination for kick-offs and stand-ups.",
      },
      {
        title: "Financial management and forecasting",
        body:
          "Compile financial reports, including P&L, invoices, budget reviews, SLA penalties, and margin opportunities. Prepare quarterly financial forecasts. Procure and negotiate deals with vendors.",
      },
      {
        title: "High level service delivery and oversight",
        body:
          "Act as the conduit between internal operators and clients during incidents and escalations. Engage in proactive incident management. Monitor and track incident rates and history for accounts.",
      },
    ],

    roleNuances: [
      "May work on one account or multiple customers.",
      "May work embedded at customer site or virtually.",
    ],

    nuanceIconSrc: dxc("Compass.svg"),
  },
  {
    id: "capability-lead",
    name: "Capability Lead",
    avatarSrc: dxc("CapabilityLead.svg"),

    personaBg: "#FFBDDC",
    panelBg: "#FFEFF7",     // column 2 & 3 background
    accent: "#F5147D",      // progress bars, headings, icons

    description:
      "Focused on development, maintenance and future vision of a specific technical or functional capability at a high level.",

    roleBars: [
      { label: "Strategy", value: 100 },
      { label: "Technical", value: 60 },
      { label: "Operational", value: 100 },
      { label: "Consulting", value: 60 },
    ],

    responsibilities: [
      {
        title: "Governance and operational monitoring",
        body:
          "Establish and monitor KPIs to evaluate capability performance and client outcomes, including metrics such as SLAs, resource utilization, costs, and headcount.",
      },
      {
        title: "High level escalation management",
        body:
          "Evaluate high-level impact on both clients and the organization, considering business continuity, SLAs, and potential relationship risk.",
      },
      {
        title: "Solution delivery optimzation",
        body:
          "Ensure smooth delivery of IT services and solutions, driving continuous improvement in service execution.",
      },
      {
        title: "Capability development and strategy",
        body:
          "Develop and execute strategic roadmaps for service capabilities, driving innovation and continuous improvement to stay ahead of industry trends.",
      },
    ],

    roleNuances: [
      "May Work on different capabilities across DXC functions, including Cloud and Infrastructure, Modern Workplace (e.g., AWS, Service Desk) and Cybersecurity."
    ],

    nuanceIconSrc: dxc("LightBulb.svg"),

    nuanceIconSize: 240,
  },
  {
    id: "cybersecurity-specialist",
    name: "Cybersecurity Specialist",
    avatarSrc: dxc("CybersecuritySpecialist.svg"),

    personaBg: "#FFC495",
    panelBg: "#FFEDDF",     // column 2 & 3 background
    accent: "#F96F00",      // progress bars, headings, icons

    description:
      "Emphasizes proactive threat identification and timely response to security incidents.",

    roleBars: [
      { label: "Strategy", value: 40 },
      { label: "Technical", value: 80 },
      { label: "Operational", value: 60 },
      { label: "Consulting", value: 100 },
    ],

    responsibilities: [
      {
        title: "Incident response",
        body:
          "Investigate security incidents through forensic analysis and provide real-time insights during war room response efforts.",
      },
      {
        title: "Cybersecurity threat hunting",
        body:
          "Proactively search for hidden threats within client environments, utilizing threat intelligence to create targeted threat hunts.",
      },
      {
        title: "Security solution and architecture",
        body:
          "Review and design network architectures. Write security policies and review firewall rules.",
      },
      {
        title: "Ongoing solution management",
        body:
          "Oversee security tooling, maintain clear documentation, and support team onboarding on security processes.",
      },
    ],

    roleNuances: [
      "Can specialize in either cyber defense efforts, forensics, or threat hunting"
    ],

    nuanceIconSrc: dxc("Shield.svg"),

    nuanceIconSize: 200,
  },
  {
    id: "automation-lead",
    name: "Automation Lead",
    avatarSrc: dxc("AutomationLead.svg"),

    personaBg: "#DCEAB5",
    panelBg: "#EEF6DA",     // column 2 & 3 background
    accent: "#5A7C00",      // progress bars, headings, icons

    description:
      "Prioritize enhancing efficiency, reducing errors and optimizing workflows of processes through automation efforts.",

    roleBars: [
      { label: "Strategy", value: 100 },
      { label: "Technical", value: 80 },
      { label: "Operational", value: 60 },
      { label: "Consulting", value: 40 },
    ],

    responsibilities: [
      {
        title: "Lead automation initiatives",
        body:
          "Drive automation initiatives by developing strategic frameworks and best practices. Build decision models to evaluate tradeoffs and costs associated with initiatives.",
      },
      {
        title: "Analyze customer workflows and tools",
        body:
          "Assess client workflows to identify optimal paths and outcomes for efficiency.",
      },
      {
        title: "Performance monitoring",
        body:
          "Monitor and report on service activities, productivity, and profitability to identify automation opportunities.",
      },
    ],

    roleNuances: [
      "Typically focuses on automation efforts for a single capability (e.g., service management, cloud, site support).",
      "Often have another role (e.g., delivery lead or technical designer) but focus some of their time on automation initiatives."
    ],

    nuanceIconSrc: dxc("Metronome.svg"),

    nuanceIconSize: 200,
  },
  {
    id: "it-manager",
    name: "IT Manager",
    avatarSrc: dxc("ITManager.svg"),
    company: "Customer",

    cardBg: "#333340",
    personaBg: "#6B6A7A",
    panelBg: "#42414E",     // column 2 & 3 background
    accent: "#FFF",      // progress bars, headings, icons
    textColor: "#FFF",

    description:
      "Oversees day-to-day technology operations and infrastructure, ensuring systems remain stable, incidents are resolved quickly, and services meet business needs. Acts as the primary bridge between internal teams and external service providers.",

    roleBars: [
      { label: "Strategy", value: 40 },
      { label: "Technical", value: 80 },
      { label: "Operational", value: 60 },
    ],

    responsibilities: [
      {
        title: "Operational stability and incident management",
        body:
          "Ensure reliable day-to-day operations by monitoring systems, responding to incidents, and coordinating resolution efforts across internal and external teams.",
      },
      {
        title: "Service delivery oversight",
        body:
          "Track performance against SLAs, validate that services are delivered as expected, and escalate issues when quality, responsiveness, or urgency falls short.",
      },
      {
        title: "Technical coordination and enablement",
        body:
          "Work closely with service providers to implement changes, upgrades, and new capabilities while balancing technical feasibility with internal resource constraints.",
      },
      {
        title: "Knowledge and documentation management",
        body:
          "Rely on clear, up-to-date documentation and knowledge transfer to reduce dependency on institutional knowledge and support internal team continuity.",
      },
    ],

    roleNuances: [
      "Highly sensitive to urgency and responsiveness during incidents.",
      "Frustrated by fragmented communication and unclear ownership.",
      "Values proactive guidance but prioritizes practical, feasible solutions over innovation for its own sake.",
      "Often constrained by limited internal capacity and approval processes.",
    ],

    nuanceIconSrc: dxc("Radar.svg"),

    nuanceIconSize: 200,
  },
  {
    id: "customer-exec",
    name: "IT Executive",
    avatarSrc: dxc("CustomerExec.svg"),
    company: "Customer",

    cardBg: "#2A283A",
    personaBg: "#49475D",
    panelBg: "#373549",     // column 2 & 3 background
    accent: "#FFF",      // progress bars, headings, icons
    textColor: "#FFF",

    description:
      "Provides strategic oversight of technology services, focusing on business outcomes, cost efficiency, risk management, and long-term partnership value. Evaluates service providers as strategic partners rather than operational vendors.",

    roleBars: [
      { label: "Strategy", value: 100 },
      { label: "Technical", value: 40 },
      { label: "Operational", value: 80 },
    ],

    responsibilities: [
      {
        title: "Strategic alignment and business impact",
        body:
          "Assess how technology services support business goals, continuity, and growth, and ensure service investments deliver measurable value.",
      },
      {
        title: "Performance and risk oversight",
        body:
          "Review high-level performance metrics, incident trends, and risk exposure to maintain confidence in service delivery and organizational resilience.",
      },
      {
        title: "Cost transparency and value optimization",
        body:
          "Evaluate spend, resource utilization, and scalability of services, expecting clear justification and transparency around costs and tradeoffs.",
      },
      {
        title: "Partnership and roadmap direction",
        body:
          "Guide long-term service direction, expecting proactive recommendations, thought leadership, and forward-looking roadmaps from service partners.",
      },
    ],

    roleNuances: [
      "Less involved in daily operations but highly attuned to patterns, trends, and confidence signals.",
      "Expects service providers to surface insights proactively, not reactively",
      "Values strategic perspective over technical detail.",
      "Trust erodes quickly when incidents feel mishandled or communication lacks urgency.",
    ],

    nuanceIconSrc: dxc("Scale.svg"),

    nuanceIconSize: 200,
  },
];
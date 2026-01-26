// import React from "react";
import { loadMedia } from "../../../utils/loadMedia";

const dxc = loadMedia("dxc/persona");

export const personas = [
  {
    id: "delivery-lead",
    name: "Delivery Lead",
    avatarSrc: dxc("DeliveryLead.svg"),

    pages: [
      { id: "overview", label: "Overview" },
      { id: "day", label: "Daily tasks" },
      { id: "pain", label: "Pain Points" },
      { id: "info", label: "Information and Insights" },
    ],

    cardBg: "#FCFCFC",
    personaBg: "#B2E9CC",
    panelBg: "#E5FAEE",
    accent: "#00A651",
    nuanceIconSrc: dxc("PaperPlane.svg"),

    overview: {
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
    },

    day: {
      dayDescription: "Rajesh is a delivery lead for the Americas who manages multiple projects simultaneously across cloud, networking and mainframe modernization.",

      tasks: [
        {
          text: [
            { content: "Review critical system alerts", bold: true },
            { content: " for my customers and check overnight performance reports." },
          ],
        },
        {
          text: [
            { content: "Sift through internal and external comm channels", bold: true },
            { content: " to find important inquiries." },
          ],
          quote:
            "I'm trying to catch up from 120 emails this morning that came in. Everything is the most important for those 15 minutes. I have too many meetings and emails. It leaves no time to do what my real job is.",
        },
        {
          text: [
            { content: "Daily stand-up", bold: true },
            { content: " with teams to see delivery progress using Jira, OneNote, and Teams." },
          ],
          quote:
            "Daily tracking mechanisms are difficult — we struggle on what level to view and the skill set required. It's difficult because there are 100 products — we don't know what each person is doing on what level.",
        },
        {
          text: [
            { content: "Attend a meeting" },
            { content: " to provide solution and pricing support", bold: true },
            { content: " for a new deal with cost estimates prepared with Pace." },
          ],
        },
        {
          text: [
            { content: "Collect KPIs data", bold: true },
            { content: " on incident, changes, success and SLA from PowerBI for an upcoming performance report." },
          ],
          quote:
            "Most customers ask for predictive intelligent views of consumption, like 'Please predict what my consumption is. What is my cost? What is necessary or not?'",
        },
        {
          text: [
            { content: "Join a vendor call to discuss" },
            { content: " compliance updates and contract renewals.", bold: true },
          ],
        },
        {
          text: [
            { content: "Manually update documentation", bold: true },
            { content: " in ESL/CMDB for a data center migration project." },
          ],
          quote:
            "CMDB is the lifeline of the services provided to the client — has to be changed whenever there are changes.",
        },
      ],
    },

    pain: {
      header: {
        first: "Delivery managers face ongoing",
        red: " challenges in balancing modernization, cost management, and strategic priorities",
        last: " amid rapid change and high workloads.",
        quote: "[Company X] will not give a presentation today or launch a new product without including AI in it. That doesn't mean there's AI that's going to change the world in that product.",
      },

      painPoint: [
        {
          title: [{ content: "Conflicting priorities and high work volume" }],
          desc: [{ content: "Delivery managers juggle multiple projects, clients, and responsibilities, making it difficult to identify and act on the most critical initiatives at any given time." }],
          action: [{ content: "prioritize my work so I can quickly identify, focus on, and respond to high-impact assignments." }],
        },
        {
          title: [{ content: "Fragmented cloud cost management" }],
          desc: [{ content: "Cloud platforms like AWS and Azure offer separate cost tools, but delivery managers lack a unified view that fits naturally into their existing workflows." }],
          action: [{ content: "gain a single, comprehensive view of delivery and cost data across systems in one self-serve portal." }],
        },
        {
          title: [{ content: "Continuous modernization amid rapid change" }],
          desc: [{ content: "Services must evolve alongside vendor roadmaps, security requirements, and emerging AI capabilities, often before their real-world value is fully understood." }],
          action: [{ content: "evaluate the impact of AI-driven service changes to ensure they deliver meaningful value before full adoption." }],
        },
      ],

    },

    information: {
      quote: "If I wish an AI assistant could prioritize amongst the priority tasks and say the risk factor associated with missing or delaying those tasks to proactively plan in advance of any issues.",

      relyOn: {
        items: [
          { title: "Financial metrics", desc: "Revenue, profitability, cost to deliver" },
          { title: "SLA", desc: "Service level percentages, MTTR, resolution rates" },
          { title: "Operational", desc: "Productivity, utilization, bill-ability, attrition" },
          { title: "CSAT", desc: "User feedback, executive-level satisfaction" },
          { title: "Incident management", desc: "Open tickets, MTTR, aged incidents" },
          { title: "System health", desc: "Infrastructure performance, line quality, disruptions, EOL" },
          { title: "Compliance", desc: "CMDB accuracy, vulnerability management" },
          { title: "Change management", desc: "Successful changes, resulting incidents" },
        ],
      },

      insights: {
        items: [
          "Bottleneck identification in implementation and escalation management processes",
          "Value stream mapping to visualize delivery workflows",
          "Performance trend analysis (e.g., daily incident volume)",
          "Predictive resource management (e.g., cost, consumption and service volume)",
          "Progress reports by account and region",
          "AI prioritization across emails, tasks, and tickets",
          "Offering roadmap to keep an eye on new opportunities",
        ],
      },
    },
  },
  {
    id: "service-manager",
    name: "Service Manager",
    avatarSrc: dxc("ServiceManager.svg"),

    pages: [
      { id: "overview", label: "Overview" },
      { id: "day", label: "Daily tasks" },
      { id: "pain", label: "Pain Points" },
      { id: "info", label: "Information and Insights" },
    ],

    cardBg: "#FCFCFC",
    personaBg: "#C1D1FF",
    panelBg: "#EEF2FF",
    accent: "#2D58D2",
    nuanceIconSrc: dxc("Wrench.svg"),

    overview: {
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
    },

    day: {
      dayDescription: "Jay leads service management teams across the UK and continental Europe while also personally managing two accounts.",

      tasks: [
        {
          text: [
            { content: "Review overnight incidents and urgent escalations", bold: true },
            { content: " in ServiceNow and customer ITSM tools, responding to critical issues." },
          ],
        },
        {
          text: [
            { content: "Join solutioning sessions", bold: true },
            { content: " to interpret contract requirements, define service capabilities, and validate feasibility using Salesforce and PSA." },
          ],
        },
        {
          text: [
            { content: "Manually create cost-to-serve reports", bold: true },
            { content: " in Excel using resourcing data from a range of different sources." },
          ],
        },
        {
          text: [
            { content: "Meet with Service Managers", bold: true },
            { content: " to brainstorm core process improvements and new service offerings." },
          ],
          quote:
            "We'll spend the time, we'll figure out good opportunities, but when it comes to execution, we don't have anyone to hand it off to. The execution kills us...",
        },
        {
          text: [
            { content: "Lead service review meetings", bold: true },
            { content: " with Account Managers and offshore teams, reviewing KPIs, service improvements, and open issues using E-Smart." },
          ],
        },
        {
          text: [
            { content: "Deal with a MEM report", bold: true },
            { content: " for a non-standard escalation that requires immediate attention." },
          ],
          quote:
            "I'm in firefighting mode. Once I find the issue, it's a procedural nightmare...I cannot get some of my real work done because I'm not looking at proactive approaches, and I'm not doing appropriate team mentoring that I need to be doing.",
        },
      ],
    },

    pain: {
      header: {
        first: "Service managers",
        red: " struggle to drive strategic improvements",
        last: " amid rigid frameworks, reactive firefighting, and unclear ownership.",
        quote: "Sometimes we schedule a call explicitly to call out the elephant and say, 'let's fix this problem.' But we are all dragged in so many angles by so many people, it gets difficult to find time to come up with some agreement then allocate people's time to execute those items.",
      },

      painPoint: [
        {
          title: [{ content: "Rigid frameworks limit flexibility" }],
          desc: [{ content: "Standard frameworks like ITIL provide structure, but their rigid application often makes it difficult to adapt services to individual client needs." }],
          action: [{ content: "apply standard governance while enabling flexible configurations that better support client-specific requirements." }],
        },
        {
          title: [{ content: "Deviations from the plan of record" }],
          desc: [{ content: "When delivery drifts from what was sold, teams lack clear visibility, leading to non-standard escalations and inconsistent service outcomes." }],
          action: [{ content: "identify and address deviations from the plan of record through clear visibility and timely alerts when scope misalignment occurs." }],
        },
        {
          title: [{ content: "Reactive incident management" }],
          desc: [{ content: "ADaily firefighting consumes time and attention, slowing execution and limiting the ability to focus on long-term service improvements.SD" }],
          action: [{ content: "shift focus toward strategic improvements by making initiatives easier to assess, track, and document." }],
        },
      ],

    },

    information: {
      quote: "I want AI to automatically create incident timelines and recourse documents with 90% accuracy.",

      relyOn: {
        items: [
          { title: "Incident management", desc: "Incident counts, resolution time, incident tracking, reduction rates" },
          { title: "SLA", desc: "Performance, in-month reporting, real-time SLA tracking" },
          { title: "Change management", desc: "Change request scores, change impact assessments, change rates, approval times" },
          { title: "Performance", desc: "Escalations, technical debt, capacity and availability" },
          { title: "Operational", desc: "Compliance, resource utilization, cost to serve" },
          { title: "Sales", desc: "Salesforce pipeline" },
        ],
      },

      insights: {
        items: [
          "Automated incident analysis to extract actionable insights from incident data",
          "Enhanced client satisfaction metrics",
          "Insights into what effective incident management looks like and the business outcomes",
          "Industry benchmark comparisons",
        ],
      },
    },
  },
  {
    id: "technical-lead",
    name: "Technical Lead",
    avatarSrc: dxc("TechnicalLead.svg"),

    pages: [
      { id: "overview", label: "Overview" },
      { id: "day", label: "Daily tasks" },
      { id: "pain", label: "Pain Points" },
      { id: "info", label: "Information and Insights" },
    ],

    cardBg: "#FCFCFC",
    personaBg: "#FFE196",
    panelBg: "#FFF6DE",
    accent: "#8D6600",
    nuanceIconSrc: dxc("Gear.svg"),

    overview: {
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
    },

    day: {
      dayDescription: "Tina is a cloud solutions architect based in India who is allocated to two clients, one in the manufacturing industry and one in the public sector.",

      tasks: [
        {
          text: [
            { content: "Review critical system alerts", bold: true },
            { content: ", overnight batch processes, and other reports ServiceNow, PowerBI, or Dynatrace." },
          ],
        },
        {
          text: [
            { content: "Join daily team meeting", bold: true },
            { content: " in Teams, tracking project status with Microsoft Projects or Task Manager." },
          ],
        },
        {
          text: [
            { content: "Join a client meeting", bold: true },
            { content: " to discuss the high-level architecture for a new cloud migration project." },
          ],
        },
        {
          text: [
            { content: "Meet with technical teams", bold: true },
            { content: " to refine a hybrid cloud integration project using customer requirements and existing OEM docs from ESL." },
          ],
          quote:
            "My role is receiving requirements from clients, understanding them, preparing design, costing; getting approvals and then working to deploy the design.",
        },
        {
          text: [
            { content: "Implement a Data Access Management change request", bold: true },
            { content: " for a customer." },
          ],
        },
        {
          text: [
            { content: "Join a vendor call", bold: true },
            { content: " to discuss compliance updates, capacity modeling, billing and contract renewals." },
          ],
          quote:
            "Working with vendors and clients on software and hardware contracts consumed me in November.",
        },
      ],
    },

    pain: {
      header: {
        first: "Without consistent processes or documentation, technical leads are",
        red: " forced to operate in a reactive mode",
        last: "—addressing issues piecemeal rather than driving long-term operational efficiency.",
        quote: "We can use logic but can't use ready-made solutions that's already available—you have to rebuild that particular solution for the client's environment.",
      },

      painPoint: [
        {
          title: [{ content: "Custom tooling limits efficiency and scale" }],
          desc: [{ content: "Security, accessibility, and compatibility constraints reduce standardization and reusability, leading teams to repeatedly redesign tools to meet unique client needs." }],
          action: [{ content: "reuse existing designs and solutions wherever possible to improve efficiency and scalability." }],
        },
        {
          title: [{ content: "Inefficient vendor management increases risk" }],
          desc: [{ content: "Lack of automation in vendor coordination leads to reactive issue handling, slower resolution, and operational inefficiencies across accounts." }],
          action: [{ content: "gain clear visibility into vendor activity and proactively identify potential disruptions through analytics." }],
        },
        {
          title: [{ content: "Keeping documentation current is difficult" }],
          desc: [{ content: "Rapidly changing cloud environments and client configurations make it hard to maintain accurate, up-to-date technical documentation." }],
          action: [{ content: "keep technical documentation current, accurate, and easy to maintain through streamlined processes." }],
        },
      ],

    },

    information: {
      quote: "Let’s say we have a server that has to be discovered an updated on the CMDB side, there should be an agent that connects to that server that will collect information and update it on a frequent basis through a central database.",

      relyOn: {
        items: [
          { title: "Incident management", desc: "Incident counts, priority incidents" },
          { title: "Operational", desc: "EOL information, cost data, consumption of tools" },
          { title: "Change management", desc: "Change requests, change history, business owner" },
          { title: "Documentation", desc: "Existing OEM documentation, past client solutions" },
        ],
      },

      insights: {
        items: [
          "Information on the latest and upcoming new technology from vendors",
          "Progress reports on projects and migrations",
          "Clear prioritization metrics and consolidated view of P1/P2 incidents",
          "AI tools that help with application code and optimization",
          "Predictive analytics about problems and risks",
          "More automated procurement",
          "Consolidated insights across vendors",
        ],
      },
    },
  },
  {
    id: "account-lead",
    name: "Account Lead",
    avatarSrc: dxc("AccountLead.svg"),

    pages: [
      { id: "overview", label: "Overview" },
      { id: "day", label: "Daily tasks" },
      { id: "pain", label: "Pain Points" },
      { id: "info", label: "Information and Insights" },
    ],

    cardBg: "#FCFCFC",
    personaBg: "#B7E3F9",
    panelBg: "#F0F9FD",
    accent: "#0688C8",
    nuanceIconSrc: dxc("Compass.svg"),

    overview: {
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
    },

    day: {
      dayDescription: "Frank is a TAM who oversees 14 client accounts in the tech industry in Australia.",

      tasks: [
        {
          text: [
            { content: "Join a morning roundtable with delivery leads", bold: true },
            { content: " to review incidents, open issues, changes, and staffing concerns using ServiceNow and Dynatrace dashboards." },
          ],
        },
        {
          text: [
            { content: "Check in with customers to review service performance", bold: true },
            { content: " using data pulled via API connections across Platform X, Dynatrace, and Skyglass." },
          ],
        },
        {
          text: [
            { content: "Lead delivery reviews", bold: true },
            { content: " to discuss budgets and forecasts using Excel spreadsheets with cost data from DXC Time." },
          ],
        },
        {
          text: [
            { content: "Coordinate with customer CTO team", bold: true },
            { content: " during service disruptions, providing RCA, resolution status, and internal resource alignment." },
          ],
          quote:
            "I have a mantra of 'no surprises' so I call out any high -level risks to directors. Potential risks on their side turns into opportunity to upsell them.",
        },
        {
          text: [
            { content: "Develop risk battle cards and QBRs", bold: true },
            { content: " for major clients using reports from ITSM Pro, Dynatrace, Power BI, and ServiceNow." },
          ],
          quote:
            "We're working an application with intelligence (using AI) that tells customers the probability of the failure of an app.",
        },
        {
          text: [
            { content: "Conduct workshops with recently lapsed accounts", bold: true },
            { content: " to define recovery plans and align on revenue targets." },
          ],
          quote:
            "We're interviewing all the accounts who we are not expecting renewals from. We look at their costs, revenues, what their contracts say, and what we can do in the upcoming fiscal year to delver good numbers. We are looking for something which is maybe impossible in some cases.",
        },
        {
          text: [
            { content: "Meet with pre-sales teams", bold: true },
            { content: " to perform early risk assessments and sign off on solution feasibility for new deals." },
          ],
        },
      ],
    },

    pain: {
      header: {
        first: "For account leads,",
        red: " the pursuit of strategic initiatives is often obstructed",
        last: " by scattered client insights, restricted visibility across teams, and the burden of time-intensive coordination work.",
        quote: "If we're free from Excel, we're freeing up not just our times but our employees to be more involved in that high value, profitable work in projects, which is not repetitive work, it's exciting. You're in solutioning. You're increasing the client centricity. You have more time to spend with clients.",
      },

      painPoint: [
        {
          title: [{ content: "Client views are fragmented" }],
          desc: [{ content: "Client data is spread across multiple systems, making it difficult to analyze performance, identify opportunities, and clearly assign accountability for incident resolution." }],
          action: [{ content: "gain a unified, organized view of client data across systems, mapped clearly to the right teams and owners." }],
        },
        {
          title: [{ content: "Expectation to drive strategic value" }],
          desc: [{ content: "Clients expect continuous innovation and strategic guidance, but limited visibility across accounts makes it difficult to surface trends, insights, and opportunities at scale." }],
          action: [{ content: "identify and act on client opportunities by providing clearer industry insights and forward-looking indicators." }],
        },
        {
          title: [{ content: "Low-value work dominates time" }],
          desc: [{ content: "Account leads are overwhelmed by reactive, transactional tasks like compliance and reporting, leaving limited capacity for strategic planning and growth." }],
          action: [{ content: "shift focus to higher-value work by automating repetitive tasks and reducing manual reporting overhead." }],
        },
      ],

    },

    information: {
      quote: "We're working on an AI assistant for TAMS to identify that you are about to have a problem. For example, it can see from Salesforce that in Q3 of FY 26 you have a lot of pipeline which means you're going to need 10 times more people or 10 more FTE, right.",

      relyOn: {
        items: [
          { title: "Financial metrics", desc: "Revenue, costs, profitability, contract margins, cost/revenue per person" },
          { title: "Operational", desc: "Resourcing, infrastructure costs, security posture" },
          { title: "Performance", desc: "System health, utilizations, infrastructure and tech stack performance, upcoming expirations" },
          { title: "Incident management", desc: "Number of tickets, Priority, MTTR, SLA compliance, Incidence status by priority" },
          { title: "Client satisfaction", desc: "NPS scores" },
        ],
      },

      insights: {
        items: [
          "High-level 'state-of-the-nation' view for all clients",
          "Business impact of incidents",
          "Predictive capacity analysis",
          "Costing/resourcing simulations (e.g., AI to estimate resourcing based on pipeline)",
          "Client sentiment beyond NPS scores",
          "Potential sales opportunities and pipeline visibility across clients",
          "Industry metrics comparisons or comparative account performance",
          "Documentation of an escalation path",
          "Global expertise and capability insights",
        ],
      },
    },
  },
  {
    id: "capability-lead",
    name: "Capability Lead",
    avatarSrc: dxc("CapabilityLead.svg"),

    pages: [
      { id: "overview", label: "Overview" },
      { id: "day", label: "Daily tasks" },
      { id: "pain", label: "Pain Points" },
      { id: "info", label: "Information and Insights" },
    ],

    cardBg: "#FCFCFC",
    personaBg: "#FFBDDC",
    panelBg: "#FFEFF7",
    accent: "#F5147D",
    nuanceIconSrc: dxc("LightBulb.svg"),

    overview: {
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

      nuanceIconSize: 240,
    },

    day: {
      dayDescription: "Lana is a global capability lead for Modern Workplace across APAC and other global regions.",

      tasks: [
        {
          text: [
            { content: "Review performance metrics", bold: true },
            { content: " to confirm there are no outages, infrastructure remains stable, and critical issues are actively managed." },
          ],
        },
        {
          text: [
            { content: "Prepare a client steering meeting dashboard", bold: true },
            { content: " in SharePoint to track project status, utilization, and upsell opportunities using Power BI." },
          ],
        },
        {
          text: [
            { content: "Collect regional delivery parameters", bold: true },
            { content: " to ensure Device Management and ServiceDesk are tracked in E-Smart, monitor SLA compliance, and identify improvement areas." },
          ],
          quote:
            "Working with 70—80 locations to get the data and get the important metrics for these dashboards to work is challenging. I have to chase them down to all submit at the same time.",
        },
        {
          text: [
            { content: "Join a pursuit call", bold: true },
            { content: " to advise technical and delivery teams on pre-sales opportunities." },
          ],
        },
        {
          text: [
            { content: "Coordinate a site visit", bold: true },
            { content: " to a key client to demonstrate new technical capabilities and offerings." },
          ],
          quote:
            "The impact of visits is high, because the outcome of whenever we win this service or win this contract, it depends on how we manage this visit.",
        },
        {
          text: [
            { content: "Approve time sheets", bold: true },
            { content: " and team travel expenses using DXC Time and SAP Concur" },
          ],
        },
        {
          text: [
            { content: "Manabe cross and up-skilling capabilities", bold: true },
            { content: " with training modules from YouTube, LinkedIn and Udemy." },
          ],
        },
      ],
    },

    pain: {
      header: {
        first: "Capability leads operate with fragmented reporting and limited cross-division visibility—",
        red: " compromising resource alignment and long-term planning.",
        quote: "I don't have repetitive tasks. I'm working on escalations where the customer's environment isn't working. I'm working on pursuits. I'm helping the offering improve their portfolio and make sure what they're preparing is stuff that we can use.",
      },

      painPoint: [
        {
          title: [{ content: "Limited visibility across divisions" }],
          desc: [{ content: "Lack of clear visibility into different DXC divisions makes workforce planning, financial oversight, and profitability monitoring difficult at scale." }],
          action: [{ content: "make informed, strategic decisions for my capability so I can stay ahead of changing business demands." }],
        },
        {
          title: [{ content: "Inconsistent global reporting" }],
          desc: [{ content: "Capability leaders rely on global KPIs, but inconsistent data collection and prioritization across regions lead to fragmented and unreliable reporting." }],
          action: [{ content: "efficiently collect, validate, and consolidate data to gain a holistic view of my capability." }],
        },
        {
          title: [{ content: "Analytics tools are hard to use" }],
          desc: [{ content: "Many capability leads lack the data expertise required to extract meaningful insights, and existing tools are not optimized for their decision-making needs." }],
          action: [{ content: "leverage business intelligence more effectively to build clearer insights and stronger points of view." }],
        },
      ],

    },

    information: {
      quote: "I get a lot of feedback around bringing our global specialists to the table. And I'm sure that's potentially a common call out for a lot of our customers.",

      relyOn: {
        items: [
          { title: "Project metrics", desc: "Budget, cost, quality, schedule, milestones" },
          { title: "Quality of service", desc: "Cost of defects and reworks" },
          { title: "Operational", desc: "Headcount, utilization, billability" },
          { title: "Financial", desc: "Costs, payroll, sub-contractor costs, hardware or software cost" },
          { title: "Escalation management", desc: "Cost per agent, call resolution, CSAT, NPS" },
        ],
      },

      insights: {
        items: [
          "Industry trends, benchmarks, new releases, competitor and vendor data",
          "Pre-defined role-based reports among organization",
          "Relevant business intelligence insights",
          "Technology developments specific to their capability",
          "Headcount estimates based on historical data, business demand, loss from run-off, migrations or automation",
          "Service performance trends and regional comparisons",
          "Comprehensive monitoring across technologies",
          "Status view of system health for all clients",
        ],
      },
    },
  },
  {
    id: "cybersecurity-specialist",
    name: "Cybersecurity Specialist",
    avatarSrc: dxc("CybersecuritySpecialist.svg"),

    pages: [
      { id: "overview", label: "Overview" },
      { id: "day", label: "Daily tasks" },
      { id: "pain", label: "Pain Points" },
      { id: "info", label: "Information and Insights" },
    ],

    cardBg: "#FCFCFC",
    personaBg: "#FFC495",
    panelBg: "#FFEDDF",
    accent: "#F96F00",
    nuanceIconSrc: dxc("Shield.svg"),

    overview: {
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

      nuanceIconSize: 200,
    },

    day: {
      dayDescription: "Erik is a cybersecurity lead who works on the digital forensics, investigation and response team.",

      tasks: [
        {
          text: [
            { content: "Check internal secure communication channels", bold: true },
            { content: " for any updates from the team." },
          ],
        },
        {
          text: [
            { content: "Receive notification from the Security Incident Coordination", bold: true },
            { content: " team about a potential security breach and process the incident details in a secure portal." },
          ],
        },
        {
          text: [
            { content: "Use Elastic Search and Lock Timeline to" },
            { content: " analyze data and create a timeline of events for the incident.", bold: true },
          ],
        },
        {
          text: [
            { content: "Receive a forensic disk image", bold: true },
            { content: " from an impacted system and process the image using Power Rip." },
          ],
        },
        {
          text: [
            { content: "Prepare a forensics conclusion report", bold: true },
            { content: " with findings, timeline, and recommendations." },
          ],
          quote:
            "We don't plug our tools back into DXC tools — our end products in investigations is a forensics conclusion report, findings, what was analyzed and if applicable, timelines depending on the case based on the findings of the investigation.",
        },
        {
          text: [
            { content: "Update internal tracking system", bold: true },
            { content: " with investigation progress." },
          ],
        },
      ],
    },

    pain: {
      header: {
        first: "Disjointed cybersecurity tools",
        red: " limit interoperability and obstruct end-to-end coordination",
        last: " with the broader enterprise systems.",
        quote: "We are trying to build a custom tool that will take a lot of time and power to build…I'm at a 3rd level so an incident might be going on for a long time and I need to read up on it. Sometimes there are several people hunting for the same thing in the same system.",
      },

      painPoint: [
        {
          title: [{ content: "Operating in silos" }],
          desc: [{ content: "Cybersecurity teams rely on highly specialized, restricted tooling that is isolated from other GIS pillars, limiting cross-team visibility and collaboration." }],
          action: [{ content: "securely integrate essential security tools into Oasis so I can fully leverage its value." }],
        },
        {
          title: [{ content: "Fragmented security data" }],
          desc: [{ content: "Disparate third-party tools such as CrowdStrike and Microsoft Defender cannot be easily integrated, creating gaps in visibility across incidents, performance, and resolution timelines." }],
          action: [{ content: "consolidate security data across vendors to surface actionable insights, even when details must be obfuscated." }],
        },
        {
          title: [{ content: "Incident tracking is inefficient" }],
          desc: [{ content: "Without a unified case management solution, teams duplicate work, rely on manual tracking, and struggle to maintain visibility into progress and ownership." }],
          action: [{ content: "manage security incidents more effectively by reducing duplicated effort and improving coordination." }],
        },
      ],

    },

    information: {
      quote: "You could use AI to enrich the process of connecting to other things that already exist in the case management, so you're like 'Okay. We have already findings. Last year there was something related this.'",

      relyOn: {
        items: [
          { title: "Incident metrics", desc: "Number of cases, time to first response, time to case closure, severity, rot cause, data breach extent" },
          { title: "Forensic analysis", desc: "Volume of data processed, timeline of evens, encryption status, system configurations" },
          { title: "Threat hunting", desc: "Number of threats discovered, threat intelligence reports, tools and systems scanned" },
          { title: "Resource hunting", desc: "Hours spent on tasks, team availability" },
        ],
      },

      insights: {
        items: [
          "Dedicated case management system with progress reports",
          "Client-specific security trends",
          "Integrated view of multiple security tools",
          "Automated correlation of threat intelligence",
          "Forensic analysis across systems",
          "Predictive threat detection and modeling",
          "Comprehensive risk assessments and quick identification of data breaches",
        ],
      },
    },
  },
  {
    id: "automation-lead",
    name: "Automation Lead",
    avatarSrc: dxc("AutomationLead.svg"),

    pages: [
      { id: "overview", label: "Overview" },
      { id: "day", label: "Daily tasks" },
      { id: "pain", label: "Pain Points" },
      { id: "info", label: "Information and Insights" },
    ],

    cardBg: "#FCFCFC",
    personaBg: "#DCEAB5",
    panelBg: "#EEF6DA",
    accent: "#5A7C00",
    nuanceIconSrc: dxc("Metronome.svg"),

    overview: {
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

      nuanceIconSize: 200,
    },

    day: {
      dayDescription: "Camille leads Modern Workplace in India and supports multiple clients across the globe. He spends much of his time focusing on automaton efforts for Service Desk.",

      tasks: [
        {
          text: [
            { content: "Review updated processes and automation improvements", bold: true },
            { content: " in Edge documentations." },
          ],
        },
        {
          text: [
            { content: "Assess the latest Digital Enabled Transaction metrics to" },
            { content: " analyze how many contracts are automated or need further automations.", bold: true },
          ],
          quote:
            "Another way to reduce cost to deliver is to move towards automation, increase digital co-workers, reduce human co-workers from an effort perspective. We have got metrics around it, for example, we have a metric called Digital enabled transactions.",
        },
        {
          text: [
            { content: "Meet with Device Intelligence and Automation teams on" },
            { content: " trends in device performance, automation bots, and digital assistants.", bold: true },
          ],
        },
        {
          text: [
            { content: "Work with QA teams to" },
            { content: " review customer feedback data", bold: true },
            { content: " from ASD Chat Tool and Bombcards automation." },
          ],
        },
        {
          text: [
            { content: "Meet with AI and Digital Solution COE to" },
            { content: " discuss advancements in GenAI and analytics.", bold: true },
          ],
        },
        {
          text: [
            { content: "Evaluate monthly financial reports", bold: true },
            { content: " and analyze strategies to reduce cost-to-deliver." },
          ],
        },
      ],
    },

    pain: {
      header: {
        first: "Legacy systems, opaque ROI, and siloed team data",
        red: " make it hard for automation leads to track, align, and scale",
        last: " their initiatives.",
        quote: "Given the size of the corporation, it's inevitable that there will be some duplication of work... we might be a little bit over on the other side. Everyone has a small team, like I have a small automation squad, which is working primarily for the team in my organization.",
      },

      painPoint: [
        {
          title: [{ content: "Legacy systems limit automation" }],
          desc: [{ content: "Automation is a priority for reducing cost and improving service delivery, but outdated systems and processes make it difficult to apply consistently and at scale." }],
          action: [{ content: "bridge legacy processes with modern automation to streamline service delivery." }],
        },
        {
          title: [{ content: "Automation value is hard to measure" }],
          desc: [{ content: "Clients expect innovation beyond baseline operations, yet teams struggle to quantify, translate, and demonstrate the business impact of automation initiatives." }],
          action: [{ content: "analyze automation efforts so I can clearly communicate their value." }],
        },
        {
          title: [{ content: "Automation efforts lack visibility" }],
          desc: [{ content: "Teams independently build similar solutions across the organization, resulting in duplicated work, fragmented tools, and inconsistent implementations." }],
          action: [{ content: "share automation efforts to improve consistency and reduce redundancy." }],
        },
      ],

    },

    information: {
      quote: "A lot of innovation is in analytics - if we don't have the right analytics, we won't be able to realize the opportunities for the digital assets that we deploy.",

      relyOn: {
        items: [
          { title: "Resource metrics", desc: "Time spent on manual tasks, how resources are being used, frequency of tasks, cost to delivery" },
          { title: "Change and incident metrics", desc: "Error rates, resolution time" },
          { title: "System health metrics", desc: "Performance, capacity" },
          { title: "Client satisfaction", desc: "NPS scores" },
        ],
      },

      insights: {
        items: [
          "Automation pipelines prioritized by expected impact and feasibility",
          "Insights on how automation impacts productivity",
          "Cross-account automation opportunities",
        ],
      },
    },
  },
  {
    id: "it-manager",
    name: "IT Manager",
    avatarSrc: dxc("ITManager.svg"),
    company: "Customer",

    pages: [
      { id: "overview", label: "Overview" },
      { id: "day", label: "Daily tasks" },
      { id: "pain", label: "Pain Points" },
      { id: "info", label: "Information and Insights" },
    ],

    cardBg: "#333340",
    personaBg: "#6B6A7A",
    panelBg: "#42414E",
    accent: "#FFF",
    textColor: "#FFF",
    nuanceIconSrc: dxc("Radar.svg"),

    overview: {
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

      nuanceIconSize: 200,
    },

    day: {
      dayDescription: "Jin is an IT Manager who oversees infrastructure operations and works closely with service providers to ensure stability, responsiveness, and continuity across critical systems.",

      tasks: [
        {
          text: [
            { content: "Review overnight incidents and alerts", bold: true },
            { content: ", checking system health and confirming whether any escalations require immediate follow-up." },
          ],
        },
        {
          text: [
            { content: "Join an operational check-in", bold: true },
            { content: " with internal teams to align on open issues, priorities, and ownership gaps from the previous day." },
          ],
        },
        {
          text: [
            { content: "Coordinate with service partners to" },
            { content: " clarify incident status, timelines, and next steps", bold: true },
            { content: "when updates feel unclear or delayed." },
          ],
        },
        {
          text: [
            { content: "Investigate recurring issues by" },
            { content: " pulling performance data and documentation", bold: true },
            { content: ", often reconciling information across multiple tools and sources." },
          ],
        },
        {
          text: [
            { content: "Follow up on outdated or missing documentation", bold: true },
            { content: " to reduce reliance on institutional knowledge and prevent repeat issues." },
          ],
        },
        {
          text: [
            { content: "Participate in monthly or quarterly operational reviews", bold: true },
            { content: ", validating SLAs, tracking trends, and raising concerns about recurring inefficiencies." },
          ],
        },
        {
          text: [
            { content: "Prepare talking points for leadership", bold: true },
            { content: ", summarizing risks, unresolved issues, and areas where more proactive guidance is needed." },
          ],
          quote:
            "When something goes wrong, the biggest challenge is figuring out who owns what and how quickly we can act.",
        },
      ],
    },

    pain: {
      header: {
        first: "Fragmented systems, rapidly changing infrastructure, and outdated documentation make it",
        red: " difficult for IT managers to maintain operational stability",
        last: " while supporting modernization efforts.",
        quote: "We're not seeing the technical documentation keep up with the changes that are going on. It creates gaps when we get asked about our current infrastructure and technical layout.",
      },

      painPoint: [
        {
          title: [{ content: "Fragmented visibility across systems" }],
          desc: [{ content: "IT Managers rely on multiple tools for incidents, assets, and performance, making it difficult to get a clear, end-to-end view of the environment or quickly understand the impact of issues." }],
          action: [{ content: "gain a unified view of incidents, infrastructure, and service health across systems so I can respond faster and more confidently." }],
        },
        {
          title: [{ content: "Documentation quickly becomes outdated" }],
          desc: [{ content: "Rapid changes in cloud infrastructure, configurations, and vendors make it hard to keep technical documentation accurate and accessible." }],
          action: [{ content: "keep technical documentation automatically updated so it reflects the current state of systems and configurations." }],
        },
        {
          title: [{ content: "Balancing stability with modernization" }],
          desc: [{ content: "While responsible for keeping systems stable, IT Managers are also expected to support modernization efforts, often without clear prioritization or measurable outcomes." }],
          action: [{ content: "understand which modernization initiatives deliver real operational value without putting system stability at risk." }],
        },
      ],

    },

    information: {
      quote: "We're not seeing the technical documentation keep up with the changes that are going on.",

      relyOn: {
        items: [
          { title: "Operational", desc: "Incident volume, uptime, MTTR, system performance, infrastructure stability" },
          { title: "Cost and capacity", desc: "Cloud spend, resource utilization, capacity forecasts, cost-to-serve trends" },
          { title: "Change and risk tracking", desc: "Planned vs. unplanned changes, upgrade timelines, risk flags, approval status" },
          { title: "Documentation coverage", desc: "System ownership, dependencies, configuration history, documentation freshness" },
        ],
      },

      insights: {
        items: [
          "Unified visibility across infrastructure, incidents, and costs",
          "Early signals for risks, outages, or upgrade impacts",
          "Clear ownership and accountability across systems",
          "Practical recommendations that fit real resource constraints",
        ],
      },
    },
  },
  {
    id: "customer-exec",
    name: "IT Executive",
    avatarSrc: dxc("CustomerExec.svg"),
    company: "Customer",

    pages: [
      { id: "overview", label: "Overview" },
      { id: "day", label: "Daily tasks" },
      { id: "pain", label: "Pain Points" },
      { id: "info", label: "Information and Insights" },
    ],

    cardBg: "#2A283A",
    personaBg: "#49475D",
    panelBg: "#373549",
    accent: "#FFF",
    textColor: "#FFF",
    nuanceIconSrc: dxc("Scale.svg"),

    overview: {
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

      nuanceIconSize: 200,
    },

    day: {
      dayDescription: "Arya is a senior executive responsible for technology outcomes, risk oversight, and long-term value from service partnerships.",

      tasks: [
        {
          text: [
            { content: "Review high-level performance snapshot", bold: true },
            { content: " to understand service health, major incidents, and any risks to business continuity." },
          ],
          quote:
            "I'm looking for patterns, not point-in-time updates. If something is coming, I want to know before it becomes an issue.",
        },
        {
          text: [
            { content: "Scan executive summaries to assess", bold: true },
            { content: " whether issues are isolated or part of a broader pattern that could impact trust or cost." },
          ],
        },
        {
          text: [
            { content: "Join strategic review meeting", bold: true },
            { content: " to discuss service performance, spend, and alignment with business goals." },
          ],
        },
        {
          text: [
            { content: "Evaluate proposals or recommendations", bold: true },
            { content: " from service partners, weighing feasibility, internal constraints, and long-term value." },
          ],
        },
        {
          text: [
            { content: "Question gaps in visibility around" },
            { content: "costs, performance metrics, or future risk", bold: true },
            { content: ", especially when insights feel reactive rather than proactive." },
          ],
        },
        {
          text: [
            { content: "Discuss service expansion or optimization opportunities" },
            { content: " with account managers, expecting guidance that reflects a deep understanding of the business.", bold: true },
          ],
        },
        {
          text: [
            { content: "Align with internal team on" },
            { content: " confidence in the partnership", bold: true },
            { content: ", flagging concerns when urgency, communication, or execution fall short." },
          ],
        },
      ],
    },

    pain: {
      header: {
        first: "Siloed performance data, reactive service models, and unclear innovation impact",
        red: " limit customer executives' ability to make confident strategic and investment decisions.",
        quote: "If we expect them to help anticipate what's coming, they need to be at the table, not just brought in when something breaks.",
      },

      painPoint: [
        {
          title: [{ content: "Limited strategic visibility across projects" }],
          desc: [{ content: "There is a lack a consolidated, high-level view of performance, risks, and opportunities across services, regions, and vendors." }],
          action: [{ content: "see a clear, executive-level view of service performance, risks, and opportunities across my organization." }],
        },
        {
          title: [{ content: "Too much focus on operational noise" }],
          desc: [{ content: "Executives are often pulled into escalations and reporting that focus on incidents rather than long-term improvement and innovation." }],
          action: [{ content: "shift conversations from reactive issue management to proactive, strategic decision-making." }],
        },
        {
          title: [{ content: "Difficulty measuring value and innovation" }],
          desc: [{ content: "While innovation and automation are expected, it is often unclear which initiatives deliver measurable business value." }],
          action: [{ content: "understand the impact of innovation and automation efforts so I can justify investment and prioritize what matters most." }],
        },
      ],

    },

    information: {
      quote: "We've tried to do more to have DXC at the table… you've got to have them at the table.",

      relyOn: {
        items: [
          { title: "Performance", desc: "SLA adherence, incident trends, resolution timelines, service reliability" },
          { title: "Finance", desc: "Cost transparency, spend vs. value, forecast accuracy, efficiency metrics" },
          { title: "Strategy", desc: "Innovation initiatives, modernization milestones, roadmap alignment" },
        ],
      },

      insights: {
        items: [
          "Clear linkage between spend, outcomes, and business value",
          "Forward-looking insights, not just operational reporting",
          "Confidence that DXC is proactively identifying opportunities and risks",
          "Executive-level dashboards that support strategic decisions",
        ],
      },
    },
  },
];
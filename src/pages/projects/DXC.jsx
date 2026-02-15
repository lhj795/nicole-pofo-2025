import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import CursorLink from "../../components/CursorLink";
import NavBar from "../../components/NavBar";
import { GridLayout, GridItem } from "../../components/GridLayout";
import { ProjectHero } from "../../components/projects/ProjectHero";
import { ProjectIntro } from "../../components/projects/ProjectIntro";
import { FourByFourLayout } from "../../components/projects/FourByFourLayout";
import { DesignProcessSection, ProcessTrack } from "../../components/projects/DesignProcessSection";
import { loadMedia } from "../../utils/loadMedia";
import PersonaSection from "../../components/projects/DXC/PersonaSection";
import DXCPersonaPager from "../../components/projects/DXC/PersonaPager";

const dxc = loadMedia("dxc");
const dxcPersona = loadMedia("dxc/persona");

const DXCPage = () => {

    const dxcTheme = {
        light: {
            heroBg: "#E7D1FF",
            designProcessBg: "#5F249F",
            designProcessTitle: "#5F249F",
            designPrinciples: "#F2E8FF",
            principleToken: "#FFF",
            principleText: "#77628E",
            barBg: "#E2E2E2",
            dataOne: "#6B3F9B",
            dataTwo: "#AF8ED3",
            crossCut: "white",
            ppTable: "#FFE6ED",
        },
        dark: {
            heroBg: "#2d0e4f",
            designProcessBg: "#2d0e4f",
            designProcessTitle: "#7d32ce",
            designPrinciples: "#44266dff",
            principleToken: "rgba(255, 255, 255, 0.1)",
            principleText: "#a68ec0",
            barBg: "#272727ff",
            dataOne: "#752cc4",
            dataTwo: "#501c88",
            crossCut: "#24272c",
            ppTable: "#72183286",
        },
    };

    const theme = useTheme();
    const mode = theme.palette.mode;
    const C = dxcTheme[mode];

    const journeyPages = [
        { id: "jm-1", label: "Ongoing Operations", src: dxc("JourneyMap01.png"), alt: "Journey map page 1" },
        { id: "jm-2", label: "New Service Implementation", src: dxc("JourneyMap02.png"), alt: "Journey map page 2" },
        { id: "jm-3", label: "Incident Management", src: dxc("JourneyMap03.png"), alt: "Journey map page 3" },
    ];
    const [jmIndex, setJmIndex] = React.useState(0);
    const total = journeyPages.length;
    const handlePrev = () => setJmIndex((i) => Math.max(0, i - 1));
    const handleNext = () => setJmIndex((i) => Math.min(total - 1, i + 1));


    return (
        <Box
            sx={{
                bgcolor: "background.default",
                color: "text.primary",
                maxWidth: "100vw",
                overflowX: "hidden",
                pb: { xs: 8, md: 12 },
            }}
        >

            <NavBar />

            <ProjectHero
                bgColor={C.heroBg}
                foreground="text.primary"
                title={
                    <Box
                        component="img"
                        src={dxc("DXCLogo.svg")}
                        alt="DXC Logo"
                        sx={{ height: "2rem", display: "block" }}
                    />
                }
                subtitle="Enterprise AI Powered IT Management Platform"
                media={
                    <Box
                        component="img"
                        src={dxc("Cover.svg")}
                        alt="DXC Cover"
                        sx={{
                            maxWidth: "100%",
                            display: "block",
                            maxHeight: "48vh",
                            alignSelf: "center",
                            justifySelf: "center",
                            py: 3,
                        }}
                    />
                }
                titleCols={{ xs: "1 / 13", md: "2 / 6", lg: "3/6" }}
                imgCols={{ xs: "1 / 13", md: "7 / 12", lg: "7/11" }}
                swapOnMobile={true}
                metaItems={[
                    {
                        label: "Role",
                        value:
                            "Research & Strategy, Design Lead, Dev QA",
                        cols: { xs: "1 / 13", md: "2 / 7", lg: "3/7" },
                    },
                    {
                        label: "Team",
                        value: "Smart Design with DXC Technology",
                        cols: { xs: "1 / 13", md: "7 / 9" },
                    },
                    {
                        label: "Tools",
                        value: "Figma, Miro, Adobe CS, Storybook",
                        cols: { xs: "1 / 13", md: "9 / 13", lg: "9/12" },
                    },
                ]}
            />

            <ProjectIntro
                leftTitle="Challenge"
                leftBody={
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Typography variant="body1">
                            DXC, a global IT services provider, sought to ship a proprietary
                            AI platform to streamline and secure IT operations across various
                            customer ecosystems such as airline and banking. The goal was to
                            unify fragmented user journeys and empower cross-functional teams
                            to manage incidents, monitor data, and make informed decisions through
                            role-based dashboards.
                        </Typography>
                        <Typography variant="body1">
                            The challenge was twofold: accommodate a wide range of enterprise users,
                            and balance trust and transparency in how AI-generated insights were
                            presented, especially on high-stakes customer data.
                        </Typography>
                    </Box>
                }
                rightBody={
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Typography variant="body1">
                            I collaborated closely with the client team and cross-functional
                            team to ensure seamless translation of strategy into interaction
                            design and front-end development:
                        </Typography>
                        <Typography
                            variant="body1"
                            component="ul"
                            sx={{ pl: 2 }}
                        >
                            <Typography component="li" variant="body1" sx={{ mb: 0.5 }}>
                                <Typography variant="body1Bold">
                                    Research
                                </Typography>
                                : created research stimuli and collaborated with
                                strategists on research sessions,
                            </Typography>
                            <Typography component="li" variant="body1" sx={{ mb: 0.5 }}>
                                <Typography variant="body1Bold">
                                    Strategy
                                </Typography>
                                : synthesized research data into design principles and feature sets,
                            </Typography>
                            <Typography component="li" variant="body1" sx={{ mb: 0.5 }}>
                                <Typography variant="body1Bold">
                                    Design system
                                </Typography>
                                : designed a robust design system that scale across product generations,
                            </Typography>
                            <Typography component="li" variant="body1">
                                <Typography variant="body1Bold">
                                    Dev QA
                                </Typography>
                                : ensured accurate React front-end implementation in Storybook.
                            </Typography>
                        </Typography>
                    </Box>
                }
            />

            <DesignProcessSection
                bgColor={C.designProcessBg}
                titleColor={C.designProcessTitle}
                descColor="rgba(255,255,255,0.55)"
                diagram={
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: { xs: "flex-start", md: "space-between" },
                            gap: { xs: 3, md: 6 },
                        }}
                    >
                        <GridLayout sx={{ width: "100%" }} gapY={2}>
                            <GridItem cols={"1/13"}>
                                <ProcessTrack
                                    steps={["Research", "Strategy"]}
                                    foreground="#fff"
                                    sx={{ width: "33%" }}
                                />
                            </GridItem>
                            <GridItem cols={"1/13"}>
                                <ProcessTrack
                                    steps={["Feature set", "Moodboard"]}
                                    foreground="#fff"
                                    sx={{ width: "33%", ml: "22%" }}
                                />
                            </GridItem>
                            <GridItem cols={"1/13"}>
                                <ProcessTrack
                                    steps={["Design system", "Product Design"]}
                                    foreground="#fff"
                                    sx={{ width: "33%", ml: "44%" }}
                                />
                            </GridItem>
                            <GridItem cols={"1/13"}>
                                <ProcessTrack
                                    steps={["Frontend Dev", "Dev QA"]}
                                    foreground="#fff"
                                    sx={{ width: "33%", ml: "66%" }}
                                />
                            </GridItem>
                        </GridLayout>
                    </Box>
                }
                phases={[
                    {
                        title: "Discovery",
                        body:
                            "Supported qual and quant research and synthesized the findings into personas, journey maps, and design principles.",
                    },
                    {
                        title: "Definition",
                        body:
                            "Used research to define epics and user stories, then shaped a cohesive visual system through moodboards.",
                    },
                    {
                        title: "Develop",
                        body:
                            "Built a scalable design system for OASIS and its future products, and prototyped key features for different user roles.",
                    },
                    {
                        title: "Deliver",
                        body:
                            "Collaborated with developers to ensure precision in translating design to code using Storybook reviews & QA.",
                    },
                ]}
            />

            {/* Tada */}
            <Box py={20} gapY={6}>
                <FourByFourLayout
                    leftCols={{ xs: "1/13", md: "2/8", lg: "3/9" }}
                    rightCols={{ xs: "1/13", md: "8/12", lg: "9/11" }}
                    left={
                        <GridItem
                            sx={{
                                width: "100%",
                                height: "calc(100% - 4px)",
                                borderRadius: 0.75,
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                component="video"
                                src={dxc("Tada01.mov")}
                                autoPlay
                                muted
                                loop
                                playsInline
                                sx={{
                                    width: "calc(100% + 4px)",
                                    height: "calc(100% + 4px)",
                                    display: "block",
                                    transform: "translate(-2px, -2px)", // center the crop horizontally
                                }}
                            />
                        </GridItem>
                    }
                    right={
                        <Box sx={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">
                                Personalized Dashboards
                            </Typography>
                            <Typography variant="body1" >
                                Every persona lands on a dashboard made unique to their needs—showing
                                relevant KPIs, system health, and business impacts at a glance. The platform
                                <Typography variant="body1Bold">
                                    adapts dynamically to role-specific goals
                                </Typography>
                                , whether you're a service manager or a client executive.
                            </Typography>
                        </Box>
                    }
                />
                <FourByFourLayout
                    leftCols={{ xs: "1/13", md: "2/8", lg: "3/9" }}
                    rightCols={{ xs: "1/13", md: "8/12", lg: "9/11" }}
                    left={
                        <GridItem
                            sx={{
                                width: "100%",
                                height: "calc(100% - 4px)",
                                borderRadius: 0.75,
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                component="video"
                                src={dxc("Tada02.mov")}
                                autoPlay
                                muted
                                loop
                                playsInline
                                sx={{
                                    width: "calc(100% + 4px)",
                                    height: "calc(100% + 4px)",
                                    display: "block",
                                    transform: "translate(-2px, -2px)",
                                }}
                            />
                        </GridItem>
                    }
                    right={
                        <Box sx={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">
                                AI Assist
                            </Typography>
                            <Typography variant="body1" >
                                An omnipresent AI copilot empowers users to ask{" "}
                                <Typography variant="body1Bold">
                                    contextual questions, generate reports, resolve issues,
                                    and even draft knowledge articles
                                </Typography>
                                —directly from any page. This fosters trust, transparency, and faster workflows powered by real-time system intelligence.
                            </Typography>
                        </Box>
                    }
                />
                <FourByFourLayout
                    leftCols={{ xs: "1/13", md: "2/8", lg: "3/9" }}
                    rightCols={{ xs: "1/13", md: "8/12", lg: "9/11" }}
                    left={
                        <GridItem
                            sx={{
                                width: "100%",
                                height: "calc(100% - 4px)",
                                borderRadius: 0.75,
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                component="video"
                                src={dxc("Tada03.mov")}
                                autoPlay
                                muted
                                loop
                                playsInline
                                sx={{
                                    width: "calc(100% + 4px)",
                                    height: "calc(100% + 4px)",
                                    display: "block",
                                    transform: "translate(-2px, -2px)", // center the crop horizontally
                                }}
                            />
                        </GridItem>
                    }
                    right={
                        <Box sx={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">
                                Knowledge & Insights Hub
                            </Typography>
                            <Typography variant="body1" >
                                The platform{" "}
                                <Typography variant="body1Bold">
                                    centralizes institutional knowledge
                                </Typography>
                                —code repository, incident reports, insights & trends, and playbooks—into one
                                <Typography variant="body1Bold">
                                    searchable, filterable hub
                                </Typography>
                                . Whether onboarding a new team or tackling a tough project, users
                                gain access to collective wisdom from across DXC.
                            </Typography>
                        </Box>
                    }
                />
            </Box>

            {/* Research & Strategy */}
            {/* Intro */}
            <Box>
                <FourByFourLayout
                    py={20}
                    left={
                        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
                            Research & Strategy
                        </Typography>
                    }
                    right={
                        <Typography variant="body1">
                            DXC has a strong reputation for reliable services and
                            strategic partnership. However there are internal
                            inefficiencies caused by fragmented tools, manual
                            workflows, and resistance to change that undermines
                            value delivery.
                            <br /><br />
                            To inform the platform&apos;s future direction, our team
                            conducted qualitative and quantitative research across a
                            diverse set of internal users. This included in-depth
                            interviews, surveys, and co-design sessions, all aimed
                            at capturing current workflows, frustrations, and future
                            aspirations.
                        </Typography>
                    }
                />

                {/* Stakeholder interviews */}
                <GridLayout py={12}>
                    <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}>
                        <Box
                            component="img"
                            src={dxc("Research01.png")}
                            alt="Miro board with notes and anecdotes on one of the stakeholder interview sessions"
                            sx={{ width: "100%", height: "auto" }}
                        />
                    </GridItem>
                    <GridItem cols={{ xs: "1/13", md: "2/8", lg: "3/7" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="subtitle1Bold">
                                Stakeholder interviews & shadowing
                            </Typography>
                            <Typography variant="body1">
                                As part of the first step of discovery phase, my
                                team reviewed documents, analyzed current dashboards,
                                and leveraged the expertise of internal stakeholders
                                to develop hypotheses of current state journeys and
                                priority employee and client needs.
                            </Typography>
                        </Box>
                    </GridItem>
                </GridLayout>

                {/* Group IDIs */}
                <GridLayout py={12} pt={0}>
                    <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}>
                        <Box
                            component="img"
                            src={dxc("Research02.png")}
                            alt="Miro board with notes and anecdotes on one of the group in-depth interview sessions"
                            sx={{ width: "100%", height: "auto" }}
                        />
                    </GridItem>
                    <GridItem cols={{ xs: "1/13", md: "2/8", lg: "3/7" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="subtitle1Bold">
                                Group IDIs
                            </Typography>
                            <Typography variant="body1">
                                We held group sessions with 3-5 employees to gather
                                feedback on our hypotheses, uncover emerging needs,
                                identify pain points or frictions, and determine ideal
                                tools, processes, and journeys across persona cohorts
                                and platform solutions.
                            </Typography>
                        </Box>
                    </GridItem>
                </GridLayout>
            </Box>

            {/* User Persona */}
            {/* Intro */}
            <FourByFourLayout
                py={20}
                left={
                    <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
                        User Persona
                    </Typography>
                }
                right={
                    <Typography variant="body1">
                        We translated insights from interviews into 8 role-based
                        personas that reflected the breadth of roles and digital
                        maturity within DXC. These personas helped us align features
                        to user needs while balancing current realities with long-term
                        transformation goals.
                    </Typography>
                }
            />

            {/* Personas */}
            <PersonaSection />

            {/* Journey maps */}
            <Box>
                <FourByFourLayout
                    py={28}
                    pb={8}
                    left={
                        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
                            Journey maps
                        </Typography>
                    }
                    right={
                        <Typography variant="body1">
                            We identified 3 main operations within DXC with relevant
                            personas, tasks and pain points mapped into detailed
                            journey maps. These visualizations highlighted the most
                            common and inefficient touchpoints across the platform
                            today, guiding where to prioritize design intervention.
                        </Typography>
                    }
                />

                <DXCPersonaPager
                    onPrev={handlePrev}
                    onNext={handleNext}
                    disablePrev={jmIndex === 0}
                    disableNext={jmIndex === total - 1}
                    footerLeft={journeyPages[jmIndex]?.label}
                    footerRight={`${jmIndex + 1}/${total}`}
                >
                    <Box
                        component="img"
                        src={journeyPages[jmIndex].src}
                        alt={journeyPages[jmIndex].alt}
                        sx={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            borderRadius: "12px",
                        }}
                    />
                </DXCPersonaPager>
            </Box>

            {/* Design principles */}
            <Box>
                <FourByFourLayout
                    py={28}
                    pb={8}
                    left={
                        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
                            Design principles
                        </Typography>
                    }
                    right={
                        <Typography variant="body1">
                            We defined five foundational design principles that
                            will guide the prototype and shape the future direction
                            of the product. These principles ensure that the
                            experience is deeply aligned with user needs across
                            personas and contexts.
                        </Typography>
                    }
                />
                <GridLayout gapX={0}>
                    <GridItem cols="1/3" sx={{ display: { md: "none", lg: "inherit" }, height: "100%", width: "100%" }}>
                        <Box sx={{ bgcolor: C.designPrinciples, height: "100%" }} />
                    </GridItem>
                    <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "column", lg: "row" }, gap: 1, width: "100%" }}>
                            {/* Tailored */}
                            <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, flex: 1, p: 3, pl: { md: 3, lg: 0 }, gap: 1, borderRadius: { xs: "12px", md: "12px", lg: "0px 12px 12px 0px", } }}>
                                <Typography variant="h4">
                                    Tailored
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    The experience is configurable to meet the needs of
                                    each persona, use case, and context
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", lg: "column" }, gap: 1, mb: 2 }}>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        User centered
                                    </Box>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Personalized
                                    </Box>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Configurable
                                    </Box>
                                </Box>
                                <Typography variant="body1" sx={{ color: C.principleText }}>
                                    "Balancing personalization and customer needs with
                                    uniformity of platform experience is the goal."
                                </Typography>
                            </Box>
                            {/* Dynamic */}
                            <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, flex: 1, p: 3, gap: 1, width: "100%", borderRadius: "12px" }}>
                                <Typography variant="h4">
                                    Dynamic
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    The experience responds real-time to each needs
                                    and scenarios and adapts over time
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", lg: "column" }, gap: 1, mb: 2 }}>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Proactive
                                    </Box>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Predictive
                                    </Box>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Adaptive
                                    </Box>
                                </Box>
                                <Typography variant="body1" sx={{ color: C.principleText }}>
                                    "Can't just give operators dashboard diabetes.
                                    It needs to be curated for operators and what they do."
                                </Typography>
                            </Box>
                            {/* Scalable */}
                            <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, flex: 1, p: 3, gap: 1, borderRadius: "12px" }}>
                                <Typography variant="h4">
                                    Scalable
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    The experience builds on itself by with a robust
                                    design system and component library
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", lg: "column" }, gap: 1, mb: 2 }}>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Uniform
                                    </Box>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Efficient
                                    </Box>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Modular
                                    </Box>
                                </Box>
                                <Typography variant="body1" sx={{ color: C.principleText }}>
                                    "A LEGO block approach to make services customizable
                                    to the customer journey, wherever it is."
                                </Typography>
                            </Box>
                            {/* Transparent */}
                            <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, flex: 1, p: 3, gap: 1, borderRadius: "12px" }}>
                                <Typography variant="h4">
                                    Transparent
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    The experience unfolds the state of the world using
                                    metrics and insights with confidence
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", lg: "column" }, gap: 1, mb: 2 }}>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Visibility
                                    </Box>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Concise
                                    </Box>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Informative
                                    </Box>
                                </Box>
                                <Typography variant="body1" sx={{ color: C.principleText }}>
                                    "Like an open a war room, customer seeing exactly
                                    what DXC is doing to contain an issue, is important."
                                </Typography>
                            </Box>
                            {/* Actionable */}
                            <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, flex: 1, p: 3, pr: { md: 3, lg: 0 }, gap: 1, borderRadius: { xs: "12px", md: "12px", lg: "12px 0px 0px 12px", } }}>
                                <Typography variant="h4">
                                    Actionable
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    The experience prioritizes actions, and leverages AI
                                    and automation to boost productivity
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", lg: "column" }, gap: 1, mb: 2 }}>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Supportive
                                    </Box>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Productive
                                    </Box>
                                    <Box sx={{ bgcolor: C.principleToken, py: 0.5, px: 2, borderRadius: 999 }}>
                                        Tangible
                                    </Box>
                                </Box>
                                <Typography variant="body1" sx={{ color: C.principleText }}>
                                    "Unified platform becomes a less hands-on more cost
                                    effective because it reduces human support."
                                </Typography>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem cols="11/13" sx={{ display: { md: "none", lg: "inherit" }, height: "100%" }}>
                        <Box sx={{ bgcolor: C.designPrinciples, height: "100%" }} />
                    </GridItem>
                </GridLayout>
            </Box>

            {/* Opportunity areas */}
            <Box>
                {/* Intro */}
                <FourByFourLayout
                    py={28}
                    pb={8}
                    left={
                        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
                            Opportunity Areas
                        </Typography>
                    }
                    right={
                        <Typography variant="body1">
                            By aggregating pain points and aspirations, we identified
                            opportunity areas across five core themes: enhanced
                            collaboration, shared knowledge, proactive partnership,
                            tailored data, strategic insights, and intelligent mitigation.
                            These informed our design principles and feature roadmap.
                        </Typography>
                    }
                />
                {/* Concepts */}
                <GridLayout gapY={8} pb={10}>
                    {/* Enhance Collaboration */}
                    <GridItem
                        cols={{ xs: "1/13", md: "2/7", lg: "3/5" }}
                        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                        <Box
                            component="img"
                            src={dxc("EnhancedCollaboration.svg")}
                            alt="Enhanced Collaboration concept illustration"
                            sx={{ width: "100%", height: "auto", maxWidth: "320px", alignSelf: "center" }}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">
                                Enhanced<br />Collaboration
                            </Typography>
                            <Typography variant="body1">
                                Connected channel for seamless collaboration & communication —{" "}
                                <Typography variant="body1Bold">
                                    driving greater transparency and alignment.
                                </Typography>
                            </Typography>
                        </Box>
                    </GridItem>
                    {/* Shared Knowledge */}
                    <GridItem
                        cols={{ xs: "1/13", md: "7/12", lg: "6/8" }}
                        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                        <Box
                            component="img"
                            src={dxc("SharedKnowledge.svg")}
                            alt="Shared Knowledge concept illustration"
                            sx={{ width: "100%", height: "auto", maxWidth: "320px", alignSelf: "center" }}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">
                                Shared<br />Knowledge
                            </Typography>
                            <Typography variant="body1">
                                Knowledge hub that{" "}
                                <Typography variant="body1Bold">
                                    eliminates information silos{" "}
                                </Typography>
                                or redundancy, and{" "}
                                <Typography variant="body1Bold">
                                    increase visibility{" "}
                                </Typography>
                                to critical information.
                            </Typography>
                        </Box>
                    </GridItem>
                    {/* Proactive Partner */}
                    <GridItem
                        cols={{ xs: "1/13", md: "2/7", lg: "9/11" }}
                        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                        <Box
                            component="img"
                            src={dxc("ProactivePartner.svg")}
                            alt="Proactive Partner concept illustration"
                            sx={{ width: "100%", height: "auto", maxWidth: "320px", alignSelf: "center" }}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">
                                Proactive<br />Partner
                            </Typography>
                            <Typography variant="body1">
                                Reliable partner who stays ahead of the industry needs with{" "}
                                <Typography variant="body1Bold">
                                    personalized, competitive service solutions.
                                </Typography>
                            </Typography>
                        </Box>
                    </GridItem>
                    {/* Tailored Data */}
                    <GridItem
                        cols={{ xs: "1/13", md: "7/12", lg: "3/5" }}
                        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                        <Box
                            component="img"
                            src={dxc("TailoredData.svg")}
                            alt="Tailored Data concept illustration"
                            sx={{ width: "100%", height: "auto", maxWidth: "320px", alignSelf: "center" }}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">
                                Tailored<br />Data
                            </Typography>
                            <Typography variant="body1">
                                Dynamic data that adapts to the customers' needs—providing
                                clear views for{" "}
                                <Typography variant="body1Bold">
                                    faster, insight-driven decisions.
                                </Typography>
                            </Typography>
                        </Box>
                    </GridItem>
                    {/* Strategic Insights */}
                    <GridItem
                        cols={{ xs: "1/13", md: "2/7", lg: "6/8" }}
                        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                        <Box
                            component="img"
                            src={dxc("StrategicInsights.svg")}
                            alt="Strategic Insights concept illustration"
                            sx={{ width: "100%", height: "auto", maxWidth: "320px", alignSelf: "center" }}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">
                                Strategic<br />Insights
                            </Typography>
                            <Typography variant="body1">
                                Intelligence with{" "}
                                <Typography variant="body1Bold">
                                    data-driven foresights and actionable recommendations{" "}
                                </Typography>
                                to high-value innovations.
                            </Typography>
                        </Box>
                    </GridItem>
                    {/* Intelligent Mitigation */}
                    <GridItem
                        cols={{ xs: "1/13", md: "7/12", lg: "9/11" }}
                        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                        <Box
                            component="img"
                            src={dxc("IntelligentMitigation.svg")}
                            alt="Intelligent Mitigation concept illustration"
                            sx={{ width: "100%", height: "auto", maxWidth: "320px", alignSelf: "center" }}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">
                                Intelligent<br />Mitigation
                            </Typography>
                            <Typography variant="body1">
                                Proactive management of incidents with{" "}
                                <Typography variant="body1Bold">
                                    detailed analysis, future escalations prevention,
                                    and long-term stability.{" "}
                                </Typography>
                            </Typography>
                        </Box>
                    </GridItem>
                </GridLayout>
            </Box>

            {/* Validation Research */}
            <GridLayout gapX={3} gapY={{ xs: 1, md: 3 }} py={10} px={0}>

                {/* xs & md images */}
                <GridItem cols="1/13" sx={{ display: { xs: "flex", md: "flex", lg: "none" }, width: "100%" }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", gap: 2, ml: { xs: "10%", md: "1%" } }}>
                        <Box
                            component="img"
                            src={dxc("Validation01.png")}
                            alt="Validation Research stimuli"
                            sx={{ width: "auto", height: "240px", border: "1px solid #0C87CA", }}
                        />
                        <Box
                            component="img"
                            src={dxc("Validation02.png")}
                            alt="Validation Research stimuli"
                            sx={{ width: "auto", height: "240px", border: "1px solid #0C87CA", }}
                        />
                        <Box
                            component="img"
                            src={dxc("Validation03.png")}
                            alt="Validation Research stimuli"
                            sx={{ width: "auto", height: "240px" }}
                        />
                    </Box>
                </GridItem>

                {/* Web */}
                {/* come back to stimuli 2, 4, 5 when time */}
                <GridItem cols="1/3" sx={{ height: "100%" }}>
                    <Box
                        sx={{
                            display: { xs: "none", md: "none", lg: "flex" },
                            justifyContent: "flex-end",
                            height: "100%"
                        }}
                    >
                        <Box
                            component="img"
                            src={dxc("Validation01.png")}
                            alt="Validation Research stimuli"
                            sx={{
                                width: "auto",
                                height: "100%",
                                border: "1px solid #0C87CA",
                            }}
                        />
                    </Box>
                </GridItem>
                <GridItem cols="3/7" sx={{ height: "100%" }}>
                    <Box
                        component="img"
                        src={dxc("Validation02.png")}
                        alt="Validation Research stimuli"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "fill",
                            border: "1px solid #0C87CA",
                            display: { xs: "none", md: "none", lg: "inherit" }
                        }}
                    />
                </GridItem>
                <GridItem
                    cols={{ xs: "1/13", md: "2/8", lg: "7/11" }}
                    sx={{ alignSelf: "center" }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, px: 3 }}>
                        <Typography variant="h6Bold">
                            Validation research stimuli
                        </Typography>
                        <Typography variant="body1">
                            My team created illustrations and icons that represent
                            the 6 concepts to use on validation research including
                            surveys that were sent out to 1,000+ internal employees
                            and DXC customers, and co-design sessions with participants
                            from each persona.
                        </Typography>
                    </Box>
                </GridItem>
                <GridItem
                    cols="1/3"
                    sx={{ height: "100%" }}
                >
                    <Box
                        sx={{
                            justifyContent: "flex-end",
                            height: "100%",
                            display: { xs: "none", md: "none", lg: "flex" },
                        }}
                    >
                        <Box
                            component="img"
                            src={dxc("Validation03.png")}
                            alt="Validation Research stimuli"
                        />
                    </Box>
                </GridItem>
                <GridItem
                    cols="3/7"
                    sx={{ display: { xs: "none", md: "none", lg: "flex", height: "100%" } }}
                >
                    <Box
                        component="img"
                        src={dxc("Validation04.png")}
                        alt="Validation Research stimuli"
                        sx={{ width: "100%", height: "100%", }}
                    />
                </GridItem>
                <GridItem
                    cols="7/11"
                    sx={{ display: { xs: "none", md: "none", lg: "flex", height: "100%" } }}
                >
                    <Box
                        component="img"
                        src={dxc("Validation05.png")}
                        alt="Validation Research stimuli"
                        sx={{ width: "100%", height: "100%" }}
                    />
                </GridItem>
                <GridItem
                    cols="11/13"
                    sx={{ height: "100%" }}
                >
                    <Box
                        sx={{
                            justifyContent: "flex-start",
                            height: "100%",
                            display: { xs: "none", md: "none", lg: "flex" },
                        }}
                    >
                        <Box
                            component="img"
                            src={dxc("Validation03.png")}
                            alt="Validation Research stimuli"
                        />
                    </Box>
                </GridItem>

                {/* xs & md images */}
                <GridItem cols="1/13" sx={{ display: { xs: "flex", md: "flex", lg: "none" }, width: "100%" }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", gap: 2 }}>
                        <Box
                            component="img"
                            src={dxc("Validation04.png")}
                            alt="Validation Research stimuli"
                            sx={{ width: "auto", height: "240px" }}
                        />
                        <Box
                            component="img"
                            src={dxc("Validation05.png")}
                            alt="Validation Research stimuli"
                            sx={{ width: "auto", height: "240px" }}
                        />
                        <Box
                            component="img"
                            src={dxc("Validation06.png")}
                            alt="Validation Research stimuli"
                            sx={{ width: "auto", height: "240px" }}
                        />
                    </Box>
                </GridItem>

            </GridLayout>

            {/* Lollipop graph */}
            <Box>

                {/* Intro */}
                <GridLayout py={10} pb={3}>
                    <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }} sx={{ maxWidth: "900px" }}>
                        <Typography variant="h3">
                            The most important goals were areas where
                            customers are currently most underserved.
                        </Typography>
                    </GridItem>
                </GridLayout>

                {/* Title */}
                <GridLayout py={10} pt={3} gapY={{ xs: 4, md: 2 }}>
                    <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}>
                        <Typography variant="h6Bold">
                            Importance-satisfaction gap{" "}
                            <Typography
                                variant="h6"
                                sx={{ color: "text.secondary", fontWeight: 599 }}
                                component="span"
                            >
                                (N=481)
                            </Typography>
                        </Typography>
                    </GridItem>

                    {/* Graph */}
                    <GridItem cols={{ xs: "1/13", md: "2/11", lg: "3/11" }} sx={{ width: { xs: "100%", md: "inherit" } }}>
                        <Box
                            component="img"
                            src={dxc("Lollipop.svg")}
                            alt="Lollipop graph showing the gap between research participants' importance of the presented goal and their current satisfaction with the greatest gap being intelligent mitigation."
                            sx={{ width: "100%", height: "auto", display: { xs: "none", md: "block" } }}
                        />
                        <Box
                            component="img"
                            src={dxc("LollipopMobile.svg")}
                            alt="Lollipop graph showing the gap between research participants' importance of the presented goal and their current satisfaction with the greatest gap being intelligent mitigation."
                            sx={{ width: "100%", height: "auto", display: { xs: "block", md: "none" } }}
                        />
                    </GridItem>

                    {/* Legend */}
                    <GridItem cols={{ xs: "1/13", md: "11/13", lg: "11/13" }} sx={{ alignSelf: { xs: "flex-start", md: "center" } }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, md: 2 } }}>

                            {/* Color Coding */}
                            <Box sx={{ display: "flex", flexDirection: { xs: "row", md: "column" }, flexWrap: "wrap", gap: 1 }}>
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    <Box sx={{ width: "24px", display: "flex", justifyContent: "center" }}>
                                        <Box sx={{ width: "12px", height: "12px", borderRadius: "6px", background: "#D2C9FF" }} />
                                    </Box>
                                    <Typography sx={{ height: "18px" }} variant="body2">Importance of goal</Typography>
                                </Box>
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    <Box sx={{ width: "24px", display: "flex", justifyContent: "center" }}>
                                        <Box sx={{ width: "12px", height: "12px", borderRadius: "6px", background: "#5F249F" }} />
                                    </Box>
                                    <Typography sx={{ height: "18px" }} variant="body2">Current satisfaction</Typography>
                                </Box>
                            </Box>

                            {/* Concept Icons */}
                            <Box sx={{ display: "flex", flexDirection: { xs: "row", md: "column" }, flexWrap: { xs: "wrap", md: "nowrap" }, gap: { xs: 1, md: 0.3 } }}>
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    <Box
                                        component="img"
                                        src={dxc("IMIcon.svg")}
                                        alt="Intelligent mitigation icon"
                                        sx={{ width: "24px", height: "auto" }}
                                    />
                                    <Typography variant="body2">Intelligent Mitigation</Typography>
                                </Box>
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    <Box
                                        component="img"
                                        src={dxc("SIIcon.svg")}
                                        alt="Strategic Insights icon"
                                        sx={{ width: "24px", height: "auto" }}
                                    />
                                    <Typography variant="body2">Strategic Insights</Typography>
                                </Box>
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    <Box
                                        component="img"
                                        src={dxc("PPIcon.svg")}
                                        alt="Proactive Partner icon"
                                        sx={{ width: "24px", height: "auto" }}
                                    />
                                    <Typography variant="body2">Proactive Partner</Typography>
                                </Box>
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    <Box
                                        component="img"
                                        src={dxc("TDIcon.svg")}
                                        alt="Tailored Data icon"
                                        sx={{ width: "24px", height: "auto" }}
                                    />
                                    <Typography variant="body2">Tailored Data</Typography>
                                </Box>
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    <Box
                                        component="img"
                                        src={dxc("ECIcon.svg")}
                                        alt="Enhanced Collaboration icon"
                                        sx={{ width: "24px", height: "auto" }}
                                    />
                                    <Typography variant="body2">Enhanced Collaboration</Typography>
                                </Box>
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    <Box
                                        component="img"
                                        src={dxc("SKIcon.svg")}
                                        alt="Shared Knowledge icon"
                                        sx={{ width: "24px", height: "auto" }}
                                    />
                                    <Typography variant="body2">Shared Knowledge</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </GridItem>

                </GridLayout>
            </Box>

            {/* Pie and bar graph */}
            <GridLayout gapX={3} gapY={3} py={10} px={0} pl={{ xs: 3, md: 0 }} pr={3}>

                {/* Text and pie graph */}
                <GridItem cols={{ xs: "1/13", md: "2/6", lg: "3/6" }} sx={{ height: "100%" }}>
                    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 2 }}>

                        {/* Description */}
                        <Typography variant="h5" sx={{ fontSize: { md: "1.5rem", lg: "1.93rem" } }}>
                            <Typography variant="h5Bold" component="span" sx={{ fontSize: { md: "1.5rem", lg: "1.93rem" } }}>Strategic insights</Typography>
                            , followed closely by{" "}
                            <Typography variant="h5Bold" component="span" sx={{ fontSize: { md: "1.5rem", lg: "1.93rem" } }}>enhanced collaboration{" "}</Typography>
                            were favored concepts to drive the greatest shift in perception of
                            managed services.
                        </Typography>

                        {/* Pie graph area */}
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}>

                            {/* Graph title */}
                            <Typography variant="body1Bold">
                                Favorite concepts{" "}
                                <Typography component={"span"} variant="body1" sx={{ color: "text.secondary" }}>
                                    (all participants)
                                </Typography>
                            </Typography>

                            {/* Graph and legend */}
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Box
                                    component="img"
                                    src={dxc("Pie.svg")}
                                    alt="Pie chart showing strategic insights and enhanced collaboration as top 2 leading concepts."
                                    sx={{ width: "60%", height: "auto" }}
                                />

                                {/* Legend */}
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <Typography variant="body1Bold" sx={{ color: "#8834E5" }}>
                                            24%
                                        </Typography>
                                        <Typography variant="body2">
                                            Strategic<br />Insights
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <Typography variant="body1Bold" sx={{ color: "#B482EB" }}>
                                            21%
                                        </Typography>
                                        <Typography variant="body2">
                                            Enhanced<br />Collaboration
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </GridItem>

                {/* Bar chart area */}
                <GridItem cols={{ xs: "1/13", md: "6/11", lg: "6/11" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <Typography variant="body1Bold" sx={{ opacity: 0.8 }}>
                            Concepts with positive impact perception of service provider{" "}
                            <Typography component={"span"} sx={{ color: "text.secondary" }}>
                                (customers only)
                            </Typography>
                        </Typography>
                        <Box
                            component="img"
                            src={dxc("Bar.svg")}
                            alt="Bar chart showing strategic insights and intelligent mitigation as top 2 leading concepts."
                            sx={{ width: "100%", height: "auto" }}
                        />
                    </Box>
                </GridItem>

                {/* Description */}
                <GridItem cols={{ xs: "1/13", md: "11/13", lg: "11/13" }} sx={{ alignSelf: "center" }}>
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                        Among customers, executives ranked strategic insight,
                        while IT managers ranked enhanced collaboration as
                        the #1 most likely to impact perception of their service provider.
                    </Typography>
                </GridItem>

            </GridLayout>

            {/* Horizontal bar */}
            <GridLayout gapX={0} gapY={6} py={10} px={0} pr={{ xs: 3, md: "inherit" }} alignItems={"center"}>

                {/* Empty bar blocks */}
                <GridItem cols={{ md: "1/2", lg: "1/3" }} sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Box sx={{ bgcolor: C.dataOne, height: "80px" }} />
                        <Box sx={{ bgcolor: C.dataOne, height: "80px" }} />
                        <Box sx={{ bgcolor: C.dataOne, height: "80px" }} />
                        <Box sx={{ bgcolor: C.dataOne, height: "80px" }} />
                        <Box sx={{ bgcolor: C.dataOne, height: "80px" }} />
                        <Box sx={{ bgcolor: C.dataOne, height: "80px" }} />
                    </Box>
                </GridItem>

                {/* Data bars */}
                <GridItem cols={{ xs: "1/13", md: "2/7", lg: "3/8" }} sx={{ width: "100%" }} >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>

                        {/* Intelligent Mitigation */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box sx={{ bgcolor: C.barBg, height: { xs: "60px", md: "80px" }, borderRadius: "0 8px 8px 0", display: "flex" }}>
                                <Box sx={{ bgcolor: C.dataOne, width: "97%", borderRadius: "0 8px 8px 0", height: "100%", py: 1, pr: 3, pl: { xs: 3, md: 0 }, display: "flex", gap: 1.5, alignItems: "center", color: "white", zIndex: 1 }}>
                                    <Box
                                        component="img"
                                        src={dxc("IMBar.svg")}
                                        alt="Intelligent Migitation icon"
                                        sx={{ width: "auto", height: "100%" }}
                                    />
                                    <Typography variant="body1" sx={{ width: "100%", lineheight: 1, fontSize: { xs: "15px", md: "inherit" } }}>
                                        Resolve service interruptions, incidents or escalation effectively
                                    </Typography>
                                    <Typography variant="body1Bold">97%</Typography>
                                </Box>
                                <Box sx={{ bgcolor: C.dataTwo, borderRadius: "0 8px 8px 0", width: "calc(2% + 8px)", ml: "-8px" }} />
                            </Box>
                        </Box>

                        {/* Tailored Data */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box sx={{ bgcolor: C.barBg, height: { xs: "60px", md: "80px" }, borderRadius: "0 8px 8px 0", display: "flex" }}>
                                <Box sx={{ bgcolor: C.dataOne, width: "94%", borderRadius: "0 8px 8px 0", height: "100%", py: 1, pr: 3, pl: { xs: 3, md: 0 }, display: "flex", gap: 1.5, alignItems: "center", color: "white", zIndex: 1 }}>
                                    <Box
                                        component="img"
                                        src={dxc("TDBar.svg")}
                                        alt="Tailored Data icon"
                                        sx={{ width: "auto", height: "100%" }}
                                    />
                                    <Typography variant="body1" sx={{ width: "100%", lineheight: 1, fontSize: { xs: "15px", md: "inherit" } }}>
                                        Data-driven, strategic decisions and foresee future service needs
                                    </Typography>
                                    <Typography variant="body1Bold">94%</Typography>
                                </Box>
                                <Box sx={{ bgcolor: C.dataTwo, borderRadius: "0 8px 8px 0", width: "calc(4% + 8px)", ml: "-8px" }} />
                            </Box>
                        </Box>

                        {/* Enhanced Collaboration */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box sx={{ bgcolor: C.barBg, height: { xs: "60px", md: "80px" }, borderRadius: "0 8px 8px 0", display: "flex" }}>
                                <Box sx={{ bgcolor: C.dataOne, width: "92%", borderRadius: "0 8px 8px 0", height: "100%", py: 1, pr: 3, pl: { xs: 3, md: 0 }, display: "flex", gap: 1.5, alignItems: "center", color: "white", zIndex: 1 }}>
                                    <Box
                                        component="img"
                                        src={dxc("ECBar.svg")}
                                        alt="Enhanced Collaboration icon"
                                        sx={{ width: "auto", height: "100%" }}
                                    />
                                    <Typography variant="body1" sx={{ width: "100%", lineheight: 1, fontSize: { xs: "15px", md: "inherit" } }}>
                                        Optimize workflows & strengthen comm with customer
                                    </Typography>
                                    <Typography variant="body1Bold">92%</Typography>
                                </Box>
                                <Box sx={{ bgcolor: C.dataTwo, borderRadius: "0 8px 8px 0", width: "calc(7% + 8px)", ml: "-8px" }} />
                            </Box>
                        </Box>

                        {/* Shared Knowledge */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box sx={{ bgcolor: C.barBg, height: { xs: "60px", md: "80px" }, borderRadius: "0 8px 8px 0", display: "flex" }}>
                                <Box sx={{ bgcolor: C.dataOne, width: "92%", borderRadius: "0 8px 8px 0", height: "100%", py: 1, pr: 3, pl: { xs: 3, md: 0 }, display: "flex", gap: 1.5, alignItems: "center", color: "white", zIndex: 1 }}>
                                    <Box
                                        component="img"
                                        src={dxc("SKBar.svg")}
                                        alt="Shared Knowledge icon"
                                        sx={{ width: "auto", height: "100%" }}
                                    />
                                    <Typography variant="body1" sx={{ width: "100%", lineheight: 1, fontSize: { xs: "15px", md: "inherit" } }}>
                                        Knowledge network to accelerate problem-solving and training
                                    </Typography>
                                    <Typography variant="body1Bold">92%</Typography>
                                </Box>
                                <Box sx={{ bgcolor: C.dataTwo, borderRadius: "0 8px 8px 0", width: "calc(6% + 8px)", ml: "-8px" }} />
                            </Box>
                        </Box>

                        {/* Strategic Insights */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box sx={{ bgcolor: C.barBg, height: { xs: "60px", md: "80px" }, borderRadius: "0 8px 8px 0", display: "flex" }}>
                                <Box sx={{ bgcolor: C.dataOne, width: "90%", borderRadius: "0 8px 8px 0", height: "100%", py: 1, pr: 3, pl: { xs: 3, md: 0 }, display: "flex", gap: 1.5, alignItems: "center", color: "white", zIndex: 1 }}>
                                    <Box
                                        component="img"
                                        src={dxc("SIBar.svg")}
                                        alt="Strategic Insights icon"
                                        sx={{ width: "auto", height: "100%" }}
                                    />
                                    <Typography variant="body1" sx={{ width: "100%", lineheight: 1, fontSize: { xs: "15px", md: "inherit" } }}>
                                        Gather, analyze, and visualize data specific to my position
                                    </Typography>
                                    <Typography variant="body1Bold">90%</Typography>
                                </Box>
                                <Box sx={{ bgcolor: C.dataTwo, borderRadius: "0 8px 8px 0", width: "calc(8% + 8px)", ml: "-8px" }} />
                            </Box>
                        </Box>

                        {/* Proactive Parter */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box sx={{ bgcolor: C.barBg, height: { xs: "60px", md: "80px" }, borderRadius: "0 8px 8px 0", display: "flex" }}>
                                <Box sx={{ bgcolor: C.dataOne, width: "90%", borderRadius: "0 8px 8px 0", height: "100%", py: 1, pr: 3, pl: { xs: 3, md: 0 }, display: "flex", gap: 1.5, alignItems: "center", color: "white", zIndex: 1 }}>
                                    <Box
                                        component="img"
                                        src={dxc("PPBar.svg")}
                                        alt="Proactive Parter icon"
                                        sx={{ width: "auto", height: "100%" }}
                                    />
                                    <Typography variant="body1" sx={{ width: "100%", lineheight: 1, fontSize: { xs: "15px", md: "inherit" } }}>
                                        Proactively identify evolving IT needs and future success
                                    </Typography>
                                    <Typography variant="body1Bold">90%</Typography>
                                </Box>
                                <Box sx={{ bgcolor: C.dataTwo, borderRadius: "0 8px 8px 0", width: "calc(6% + 8px)", ml: "-8px" }} />
                            </Box>
                        </Box>

                    </Box>
                </GridItem>

                {/* Text */}
                <GridItem cols={{ xs: "1/13", md: "7/12", lg: "8/11" }} sx={{ display: "flex", flexDirection: "column", pl: 3, pr: { xs: 3, md: 0 }, gap: 4 }}>
                    <Typography variant="h5" >
                        <Typography variant="h5Bold" component="span">Resolving incidents fast{" "}</Typography>
                        and effectively is by far the most important goal to all DXC employees, followed by {" "}
                        <Typography variant="h5Bold" component="span">optimizing team workflows.</Typography>
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {/* Account Leads */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                            <Box sx={{ display: "flex", height: "32px", px: 1.5, py: 0.5, pl: 0.75, borderRadius: 3, background: "#D1F0FF", color: "#0688C8", width: "fit-content", alignItems: "center", gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxcPersona("Compass.svg")}
                                    alt="Compass icon"
                                    sx={{ width: "auto", height: "100%" }}
                                />
                                <Typography variant="body1Bold">Account Leads</Typography>
                            </Box>
                            <Typography variant="body2">
                                Ranked gathering, analyzing, and visualizing data as the most
                                important goal (rank 4 or 5). Account leads are frequently
                                putting together presentations for check-ins with customers.
                            </Typography>
                        </Box>

                        {/* Technical Leads */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                            <Box sx={{ display: "flex", height: "32px", px: 1.5, py: 0.5, pl: 0.75, borderRadius: 3, background: "#FFF0CA", color: "#6F5000", width: "fit-content", alignItems: "center", gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxcPersona("Gear.svg")}
                                    alt="Gear icon"
                                    sx={{ width: "auto", height: "100%" }}
                                />
                                <Typography variant="body1Bold">Technical Leads</Typography>
                            </Box>
                            <Typography variant="body2">
                                Ranked making more data-driven strategic decisions as the most
                                important goal (rank 4 or 5). This aligns with a frustration we
                                heard that solutions are not always optimized for the overall
                                strategy with the customer.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <Box sx={{ bgcolor: C.dataOne, width: "20px", height: "20px", }} />
                            <Typography variant="body2">
                                Important (5 or 4)
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <Box sx={{ bgcolor: C.dataTwo, width: "20px", height: "20px", }} />
                            <Typography variant="body2">
                                3 or 2
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <Box sx={{ bgcolor: C.barBg, width: "20px", height: "20px", }} />
                            <Typography variant="body2">
                                Not important (1)
                            </Typography>
                        </Box>
                    </Box>

                </GridItem>
            </GridLayout>

            {/* Plot chart */}
            <GridLayout py={10} alignItems="center" gapY={6}>
                <GridItem cols={{ xs: "1/13", md: "2/8", lg: "3/8" }}>
                    <Box
                        component="img"
                        src={dxc("Plot.svg")}
                        alt="Plot Chart showing shared knowledge as the most differentiated and valuable concept among personas."
                        sx={{ width: "100%", height: "auto" }}
                    />
                </GridItem>
                <GridItem cols={{ xs: "1/13", md: "8/12", lg: "8/11" }} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <Typography variant="h5">
                        Account, delivery, and tech leads all responded that{" "}
                        <Typography component={"span"} variant="h5Bold">shared knowledge{" "}</Typography>
                        was in the sweet spot of valuable and differentiated.
                    </Typography>

                    {/* Persona Legend */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: .5 }}>
                            <Box sx={{ width: "18px", height: "18px", borderRadius: "20px", background: "#94E4BB", mx: "5px" }} />
                            <Typography variant="body2">Delivery Lead</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: .5 }}>
                            <Box sx={{ width: "18px", height: "18px", borderRadius: "20px", background: "#7EDCFB", mx: "5px" }} />
                            <Typography variant="body2">Account Lead</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: .5 }}>
                            <Box sx={{ width: "18px", height: "18px", borderRadius: "20px", background: "#FFDA6D", mx: "5px" }} />
                            <Typography variant="body2">Technical Lead</Typography>
                        </Box>
                    </Box>

                    {/* Concept Legend */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: .5 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: .5 }}>
                            <Box component="img" src={dxc("ECGIcon.svg")} alt="Enhanced collaboration icon" sx={{ width: "28px", height: "auto" }} />
                            <Typography variant="body2">Enhanced Collaboration</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: .5 }}>
                            <Box component="img" src={dxc("IMGIcon.svg")} alt="Intelligent Mitigation icon" sx={{ width: "28px", height: "auto" }} />
                            <Typography variant="body2">Intelligent Mitigation</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: .5 }}>
                            <Box component="img" src={dxc("SIGIcon.svg")} alt="Strategic Insights icon" sx={{ width: "28px", height: "auto" }} />
                            <Typography variant="body2">Strategic Insights</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: .5 }}>
                            <Box component="img" src={dxc("PPGIcon.svg")} alt="Proactive Partner icon" sx={{ width: "28px", height: "auto" }} />
                            <Typography variant="body2">Proactive Partner</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: .5 }}>
                            <Box component="img" src={dxc("TDGIcon.svg")} alt="Tailored Data icon" sx={{ width: "28px", height: "auto" }} />
                            <Typography variant="body2">Tailored Data</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: .5 }}>
                            <Box component="img" src={dxc("ECGIcon.svg")} alt="Enhanced Collaboration icon" sx={{ width: "28px", height: "auto" }} />
                            <Typography variant="body2">Enhanced Collaboration</Typography>
                        </Box>
                    </Box>
                </GridItem>
            </GridLayout>

            {/* Table */}
            <GridLayout py={10} px={0}>
                <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }} sx={{ px: 3 }}>
                    <Typography variant="h3">
                        Across all personas, nearly all feels weighed down by
                        fragmented tools, outdated data, and manual processes
                        that make even basic tasks feel reactive and inefficient.
                    </Typography>
                </GridItem>

                {/* Table */}
                <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/9" }} sx={{ width: "100%", overflow: "auto" }}>
                    <Box sx={{ display: "flex", gap: 1, width: "fit-content", px: { xs: 3, md: 0, lg: 0 }, pb: { xs: 2, md: 0, lg: 0 } }}>
                        {/* Row 1 - concept icon and names */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "fit-content", textAlign: "center" }}>
                            <Box sx={{ height: "12px", mb: 1 }} />
                            <Box sx={{ display: "flex", flexDirection: "column", height: "120px", alignItems: "center", justifyContent: "center", gap: 1, mr: 1 }}>
                                <Box
                                    component="img"
                                    src={dxc("ECCIcon.svg")}
                                    alt="Enhanced collaboration icon"
                                    sx={{ width: "48px" }}
                                />
                                <Typography variant="h6Roman" sx={{ fontSize: { xs: "1rem", md: "1.2rem", lg: "1.2rem" } }}>Enhanced<br />Collaboration</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", height: "120px", alignItems: "center", justifyContent: "center", gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxc("PPCIcon.svg")}
                                    alt="Proactive Partner icon"
                                    sx={{ width: "48px" }}
                                />
                                <Typography variant="h6Roman" sx={{ fontSize: { xs: "1rem", md: "1.2rem", lg: "1.2rem" } }}>Proactive<br />Collaboration</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", height: "120px", alignItems: "center", justifyContent: "center", gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxc("SKCIcon.svg")}
                                    alt="Shared Knowledge icon"
                                    sx={{ width: "48px" }}
                                />
                                <Typography variant="h6Roman" sx={{ fontSize: { xs: "1rem", md: "1.2rem", lg: "1.2rem" } }}>Shared<br />Knowledge</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", height: "120px", alignItems: "center", justifyContent: "center", gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxc("IMCIcon.svg")}
                                    alt="Intelligent Mitigation icon"
                                    sx={{ width: "48px" }}
                                />
                                <Typography variant="h6Roman" sx={{ fontSize: { xs: "1rem", md: "1.2rem", lg: "1.2rem" } }}>Intelligent<br />Mitigation</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", height: "120px", alignItems: "center", justifyContent: "center", gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxc("TDCIcon.svg")}
                                    alt="Tailored Data icon"
                                    sx={{ width: "48px" }}
                                />
                                <Typography variant="h6Roman" sx={{ fontSize: { xs: "1rem", md: "1.2rem", lg: "1.2rem" } }}>Tailored<br />Data</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", height: "120px", alignItems: "center", justifyContent: "center", gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxc("SICIcon.svg")}
                                    alt="Strategic Insights icon"
                                    sx={{ width: "48px" }}
                                />
                                <Typography variant="h6Roman" sx={{ fontSize: { xs: "1rem", md: "1.2rem", lg: "1.2rem" } }}>Strategic<br />Insights</Typography>
                            </Box>
                        </Box>

                        {/* Row 2 Customers */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "25%", minWidth: "120px", alignItems: "center" }}>
                            <Box sx={{ height: "16px", mb: 1 }}>
                                <Typography variant="body1">Customers</Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Analyze data for insights<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (44%)
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Ensuring the most up-to-date documentation<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (46%)
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Assess business impact of solutions<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (48%)
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Lack of visibility into project status<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (44%)
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Focus on sales over business value<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (46%)
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Identify the root cause of incidents<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (46%)
                                    </Typography>
                                </Typography>
                            </Box>
                        </Box>

                        {/* Row 3 DXC Employees */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "25%", minWidth: "120px", alignItems: "center" }}>
                            <Box sx={{ height: "16px", mb: 1 }}>
                                <Typography variant="body1">DXC Employees</Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Compile and standardize data<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (54%)
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Low efforts on designs or process improvement<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (51%)
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Balance strategic initiatives and daily tasks<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (45%)
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Gaining clear visibility into project status<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (52%)
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Keep up with industry trends to propose solutions<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (46%)
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.ppTable, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Identify the root cause of incidents<br />
                                    <Typography variant="body2" component={"span"} sx={{ color: "text.secondary" }}>
                                        (46%)
                                    </Typography>
                                </Typography>
                            </Box>
                        </Box>

                        {/* Row 4 Design Implications */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "40%", minWidth: "200px", alignItems: "center" }}>
                            <Box sx={{ height: "16px", mb: 1 }}>
                                <Typography variant="body1">Design Implications</Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.designPrinciples, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Collaboration tools must ease handoffs, reduce noise
                                    through smart filtering, and give clear status snapshots
                                    across teams.
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.designPrinciples, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    AI-driven recommendations may enable anticipatory
                                    support and relevance to industry/client needs,
                                    not just reactive service.
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.designPrinciples, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Knowledge solutions must emphasize real-time updates,
                                    robust searchability, and role-specific surfacing of
                                    critical documents.
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.designPrinciples, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Incident management with faster detection, predictive
                                    alerting, and cross-functional visibility to drive
                                    triage and resolution.
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.designPrinciples, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Data viz and reporting must be executive-ready by default,
                                    support automated accuracy checks, and include insights.
                                </Typography>
                            </Box>
                            <Box sx={{ borderRadius: 0.5, background: C.designPrinciples, height: "120px", p: 1.5, width: "100%" }}>
                                <Typography variant="body2">
                                    Bridge strategy-execution gap by visualizing value,
                                    prioritizing intelligently, and surfacing high-impact
                                    opportunities.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </GridItem>

                {/* Text */}
                <GridItem cols={{ xs: "1/13", md: "2/12", lg: "9/11" }} sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: 2, px: { xs: 3, md: 0, lg: 0 }, pt: { xs: 0, md: 0, lg: 4 } }}>
                    <Typography variant="h6" sx={{ maxWidth: "680px" }}>
                        There is a shared desire for a proactive, intelligent tool that{" "}
                        <Typography component={"span"} variant="h6Bold">
                            surface insights, automate the mundane, and help teams collaborate{" "}
                        </Typography>
                        seamlessly at scale.
                    </Typography>

                    {/* Pain point cards */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Typography variant="body2Bold" sx={{ color: "#EC5266" }}>
                            Cross-cutting themes:
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", lg: "column" }, gap: 1 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", p: 1.5, borderRadius: 0.5, background: C.crossCut, filter: "drop-shadow(0px 4px 8px #ec526641)", height: "fit-content", flex: 1, gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxc("Pain.svg")}
                                    alt="frowny face icon"
                                    sx={{ width: "24px" }}
                                />
                                <Typography variant="body2">
                                    Documentation and data quality are foundational. Poor
                                    inputs lead to downstream frustration everywhere.
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", p: 1.5, borderRadius: 0.5, background: C.crossCut, filter: "drop-shadow(0px 4px 8px #ec526641)", height: "fit-content", flex: 1, gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxc("Pain.svg")}
                                    alt="frowny face icon"
                                    sx={{ width: "24px" }}
                                />
                                <Typography variant="body2">
                                    Fragmentation between siloed tools, roles, and teams
                                    is a persistent source of inefficiency.
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", lg: "column" }, gap: 1 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", p: 1.5, borderRadius: 0.5, background: C.crossCut, filter: "drop-shadow(0px 4px 8px #ec526641)", height: "fit-content", flex: 1, gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxc("Pain.svg")}
                                    alt="frowny face icon"
                                    sx={{ width: "24px" }}
                                />
                                <Typography variant="body2">
                                    Executives want visibility and outcomes; managers want
                                    smoother execution and less firefighting.
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", p: 1.5, borderRadius: 0.5, background: C.crossCut, filter: "drop-shadow(0px 4px 8px #ec526641)", height: "fit-content", flex: 1, gap: 1 }}>
                                <Box
                                    component="img"
                                    src={dxc("Pain.svg")}
                                    alt="frowny face icon"
                                    sx={{ width: "24px" }}
                                />
                                <Typography variant="body2">
                                    Most feels overwhelmed by the alert volume vs. what's
                                    truly actionable. Solution must filter signal from noise.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </GridItem>

            </GridLayout>

            {/* Experience Pillars */}
            <Box>
                <FourByFourLayout
                    left={
                        <Typography variant="h1">Experience pillars</Typography>
                    }
                    right={
                        <Typography variant="body1">
                            From research, we have adapted 6 Experience Pillars from
                            our initial design principles that will inform and guide
                            the design direction of Oasis.
                        </Typography>
                    }
                />
                <Box>
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "column", lg: "row" }, gap: "12px", alignItems: "stretch", width: "100%", px: { xs: 3, md: 0, lg: 0 } }}>

                        {/* md row 1 */}
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", lg: "row" }, gap: "12px", flex: 1 }}>
                            {/* Visible and Safeguarded */}
                            <Box sx={{ display: "flex", flexDirection: "column", flex: 1, }}>
                                <Box
                                    component="img"
                                    src={dxc("VAS.svg")}
                                    alt="Illustration of a lighthouse"
                                    sx={{ height: "100px", display: { xs: "none", md: "block" }, mx: 3 }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, p: 3, gap: 1, borderRadius: { xs: "12px", md: "0px 12px 12px 0px", }, height: "100%" }}>
                                    <Typography variant="h4">
                                        Visible and Safeguarded
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                        The experience highlights the right information at the
                                        right time and format, if and when it is needed, while
                                        protecting sensitive customer information.
                                    </Typography>
                                </Box>
                            </Box>
                            {/* Intelligent with Confidence */}
                            <Box sx={{ display: "flex", flexDirection: "column", flex: 1, }}>
                                <Box
                                    component="img"
                                    src={dxc("IWC.svg")}
                                    alt="Illustration of two hands giving each other a high five"
                                    sx={{ height: "100px", display: { xs: "none", md: "block" }, mx: 3 }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, p: 3, gap: 1, borderRadius: "12px", height: "100%" }}>
                                    <Typography variant="h4">
                                        Intelligent with Confidence
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                        The technology understands service & industry context,
                                        provides aware responses to problem-solve, and identify opportunities.
                                    </Typography>
                                </Box>
                            </Box>
                            {/* Simplify Workflow */}
                            <Box sx={{ display: "flex", flexDirection: "column", flex: 1, }}>
                                <Box
                                    component="img"
                                    src={dxc("SW.svg")}
                                    alt="Illustration of an hourglass"
                                    sx={{ height: "100px", display: { xs: "none", md: "block" }, mx: 3 }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, p: 3, gap: 1, borderRadius: { xs: "12px", md: "12px 0 0 12px", lg: "12px" }, height: "100%" }}>
                                    <Typography variant="h4">
                                        Simplify Workflow
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                        Standardized, yet customized operations reduce manual
                                        tasks and allow efficient and effective horizontal and
                                        vertical collaborations.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* md row 2 */}
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", lg: "row", gap: "12px", flex: 1 } }}>
                            {/* Built for Partnership */}
                            <Box sx={{ display: "flex", flexDirection: "column", flex: 1, }}>
                                <Box
                                    component="img"
                                    src={dxc("BP.svg")}
                                    alt="Illustration of a sail boat"
                                    sx={{ height: "100px", display: { xs: "none", md: "block" }, mx: 3 }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, p: 3, gap: 1, borderRadius: { xs: "12px", md: "0px 12px 12px 0px", lg: "12px" }, height: "100%" }}>
                                    <Typography variant="h4">
                                        Built for Partnership
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                        The experience empowers the human interaction. The user
                                        navigates the intelligence, staying one step ahead and
                                        offering differentiated services.
                                    </Typography>
                                </Box>
                            </Box>
                            {/* Connect the Dots */}
                            <Box sx={{ display: "flex", flexDirection: "column", flex: 1, }}>
                                <Box
                                    component="img"
                                    src={dxc("CTD.svg")}
                                    alt="Illustration of an x mark like on a treasure map"
                                    sx={{ height: "100px", display: { xs: "none", md: "block" }, mx: 3 }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, p: 3, gap: 1, borderRadius: "12px", height: "100%" }}>
                                    <Typography variant="h4">
                                        Connect the Dots
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                        Understand complex service agreements, business impacts,
                                        and role-based operations, then show analysis in a
                                        digestible format with actionable tasks.
                                    </Typography>
                                </Box>
                            </Box>
                            {/* Expand over Time */}
                            <Box sx={{ display: "flex", flexDirection: "column", flex: 1, }}>
                                <Box
                                    component="img"
                                    src={dxc("EOT.svg")}
                                    alt="Illustration of building blocks"
                                    sx={{ height: "100px", display: { xs: "none", md: "block" }, mx: 3 }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", bgcolor: C.designPrinciples, p: 3, gap: 1, borderRadius: { xs: "12px", md: "12px 0 0 12px", }, height: "100%" }}>
                                    <Typography variant="h4">
                                        Expand Over Time
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                        The experience builds on itself over time by adapting
                                        and anticipating DXC services and operations,
                                        constructively and functionally.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Moodboard */}
            <GridLayout py={10}>
                <GridItem cols={{ xs: "1/13", md: "2/6", lg: "3/6" }} sx={{ height: "100%" }}>
                    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
                        <Typography variant="body1" sx={{ color: "text.secondary" }}>
                            While research wrapped up, the design team supported synthesis as
                            well as begin crafting moodboards that captured DXC's brand
                            identity—visually aligning with the user group's goals, context,
                            and mindset.
                        </Typography>
                        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
                            <Typography variant="h3">
                                We presented a total of 4 moodboards,
                            </Typography>
                            <Typography variant="body1">
                                our client favored a combination of the Lumen and Meadow concepts, combining{" "}
                                <Typography component={"span"} variant="body1Bold">
                                    expressive color gradients with clear representation of data.
                                </Typography>
                            </Typography>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem cols={{ xs: "1/13", md: "6/12", lg: "6/11" }} order={{ xs: 1, md: 2, lg: 2 }}>
                    <Box
                        component="img"
                        src={dxc("Moodboard.png")}
                        alt="Illustration of a lighthouse"
                        sx={{ height: "80vh", display: { xs: "none", md: "block" }, mx: 3 }}
                    />
                </GridItem>
            </GridLayout>

            {/* Design System */}
            <GridLayout py={10} alignItems="center">
                <GridItem order={{ xs: 3, md: 1, lg: 1 }} cols={{ md: "1/4", lg: "1/4" }} sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
                    <Box
                        component="img"
                        src={dxc("DS1.png")}
                        alt="Design system documentation"
                        sx={{ width: "100%", display: { xs: "none", md: "block" } }}
                    />
                </GridItem>
                <GridItem order={{ xs: 2, md: 2, lg: 2 }} cols={{ md: "4/8", lg: "4/7" }}>
                    <Box sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
                        <Typography variant="h1">Design System</Typography>
                        <Typography variant="body1">
                            Using design principles from early research and curated
                            moodboards, we created a system that's modular, expressive,
                            and user-focused. Its evokes{" "}
                            <Typography component={"span"} variant="body1Bold">
                                “a pane of glass,” reinforcing both aesthetic clarity and platform transparency.
                            </Typography>
                        </Typography>
                    </Box>
                </GridItem>
                <GridItem order={{ xs: 1, md: 3, lg: 3 }} cols={{ md: "8/13", lg: "7/13" }} >
                    <Box
                        component="img"
                        src={dxc("DS2.png")}
                        alt="Design system documentation"
                        sx={{ height: { xs: "auto", md: "100%", lg: "100%" }, width: { xs: "100%", md: "auto", lg: "auto" } }}
                    />
                </GridItem>
            </GridLayout>

            {/* Color constraints */}
            <Box sx={{ my: 10 }}>
                {/* Intro */}
                <FourByFourLayout
                    left={
                        <Typography variant="h1">Color Constraints</Typography>
                    }
                    right={
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Typography variant="body1">
                                The client's creative leadership came with a strong visual direction:
                            </Typography>
                            <Box sx={{ display: "flex", gap: 0, height: "36px" }}>
                                <Box sx={{ flex: 1, background: "#ffffff" }} />
                                <Box sx={{ flex: 1, background: "#000000" }} />
                                <Box sx={{ flex: 1, background: "#FF0000" }} />
                                <Box sx={{ flex: 1, background: "#FFCD36" }} />
                                <Box sx={{ flex: 1, background: "#15CF62" }} />
                                <Box sx={{ flex: 1, background: "#5F249F" }} />
                            </Box>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                a grayscale-first palette with true white and black,
                                traffic light accents  with true red, yellow and green,
                                and DXC purple exclusively for AI features. This design
                                philosophy invited us to a unique and{" "}
                                <Typography component={"span"} variant="body1Bold" sx={{ color: "text.primary" }}>
                                    exciting challenge: creating an interface that is accessible,
                                    dynamic, and elegant while maintaining the “single pane of glass”
                                    aesthetic.
                                </Typography>
                            </Typography>
                            <Typography variant="body1">
                                My team didn't make the constraints limit creativity, but
                                invite us to reimagine how transparency, interaction states,
                                and hierarchy could work in tandem.
                            </Typography>
                        </Box>
                    }
                />

                {/* details */}
                <FourByFourLayout
                    left={
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box
                                component="img"
                                src={dxc("ColorTokens.png")}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    borderRadius: .5,
                                }}
                            />
                            <Typography variant="h5" sx={{ mt: 1 }}>Color tokens</Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Strong foundational color tokens made the system flexible
                                and ready to scale, while still delivering the desired
                                clarity, hierarchy, and expressiveness within a limited palette.
                            </Typography>
                        </Box>
                    }
                    right={
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box
                                component="video"
                                src={dxc("GlassMaterial.mov")}
                                autoPlay
                                muted
                                loop
                                playsInline
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    borderRadius: .5,
                                }}
                            />
                            <Typography variant="h5" sx={{ mt: 1 }}>Glass material exploration</Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Since the base surface was pure white (#fff) in light mode,
                                we used various visual tools such as gradient stroke, and
                                mix-blend-mode to achieve the glassy effect on elevated surfaces.
                            </Typography>
                        </Box>
                    }
                />

                <FourByFourLayout
                    leftCols={{ xs: "1/13", md: "2/7", lg: "3/8" }}
                    rightCols={{ xs: "1/13", md: "7/12", lg: "8/11" }}
                    left={
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box
                                component="img"
                                src={dxc("SemanticColors.png")}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    borderRadius: .5,
                                }}
                            />
                            <Typography variant="h5" sx={{ mt: 1 }}>Semantic colors</Typography>
                            <Typography variant="body1" sx={{ mb: 2, maxWidth: "600px" }}>
                                We used a naming convention that drew from established patterns
                                in mature design systems while preserving the client's terminology.
                                This approach ensured scalability, eased developer handoff, and
                                keep names intuitive and accessible for stakeholders.
                            </Typography>
                        </Box>
                    }
                    right={
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box
                                component="video"
                                src={dxc("DarkLightModes.mov")}
                                autoPlay
                                muted
                                loop
                                playsInline
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    borderRadius: .5,
                                }}
                            />
                            <Typography variant="h5" sx={{ mt: 1 }}>Light and dark modes</Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Light and dark modes shared the same design spine—visually distinct,
                                yet cut from the same glass. Both honored brand constraints while
                                dialing contrast for clarity, comfort, and cohesion.
                            </Typography>
                        </Box>
                    }
                />
            </Box>

            {/* MVP Dev */}
            <Box>
                {/* Intro */}
                <FourByFourLayout
                    py={10}
                    leftCols={{ xs: "1/13", md: "2/7", lg: "3/8" }}
                    rightCols={{ xs: "1/13", md: "7/12", lg: "8/11" }}
                    leftOrder={{ xs: 2, md: 1, lg: 1 }}
                    rightOrder={{ xs: 1, md: 2, lg: 2 }}
                    alignItems={"center"}
                    left={
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h5" sx={{ mt: 1 }}>
                                4 sprints, 3 designers, 1 evolving scope, shipped in 6 months.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2, maxWidth: "600px" }}>
                                We worked under a compressed timeline to go from a{" "}
                                <Typography component={"span"} variant="body1Bold">
                                    multi-channeled requirements to a functioning enterprise platform MVP.{" "}
                                </Typography>
                                We started feature design across 4 initial intensive sprints,
                                followed by overlapping design and front-end dev.
                            </Typography>
                        </Box>
                    }
                    right={
                        <Typography variant="h1" sx={{ textAlign: { xs: "left", md: "right" } }}>MVP Development</Typography>
                    }
                />

                {/* Requirements */}
                <FourByFourLayout
                    py={10}
                    pb={3}
                    leftCols={{ xs: "1/13", md: "2/7", lg: "3/8" }}
                    rightCols={{ xs: "1/13", md: "7/12", lg: "8/11" }}
                    alignItems={"center"}
                    left={
                        <Box
                            component="img"
                            src={dxc("MVP1.png")}
                            alt="Screenshot of a spreadsheet with UX requirements"
                            sx={{ width: "100%", height: "auto" }}
                        />
                    }
                    right={
                        <Typography variant="body1">
                            Coming in from Confluence, Miro, emails, and meetings, we started by
                            <Typography component={"span"} variant="body1Bold">
                                translating requirements into epics
                            </Typography>
                            with a shared spreadsheet. A daily standup and Kanban board helped us
                            assign features dynamically and keep momentum high.
                        </Typography>
                    }
                />

                {/* Sketch */}
                <FourByFourLayout
                    py={3}
                    leftCols={{ xs: "1/13", md: "2/7", lg: "3/8" }}
                    rightCols={{ xs: "1/13", md: "7/12", lg: "8/11" }}
                    alignItems={"center"}
                    left={
                        <Box
                            component="img"
                            src={dxc("MVP2.png")}
                            alt="Screenshot of a Miro board with hand sketches"
                            sx={{ width: "100%", height: "auto" }}
                        />
                    }
                    right={
                        <Typography variant="body1">
                            Depending on complexity, we held ad-hoc{" "}
                            <Typography component={"span"} variant="body1Bold">
                                brainstorm sessions,{" "}
                            </Typography>
                            often inviting designers outside the project. I really
                            enjoyed adopting my new company's culture of fast
                            hand-sketching before moving into UI design!
                        </Typography>
                    }
                />

                {/* Components */}
                <FourByFourLayout
                    py={3}
                    leftCols={{ xs: "1/13", md: "2/7", lg: "3/8" }}
                    rightCols={{ xs: "1/13", md: "7/12", lg: "8/11" }}
                    alignItems={"center"}
                    left={
                        <Box
                            component="img"
                            src={dxc("MVP3.png")}
                            alt="Images of UI components"
                            sx={{ width: "100%", height: "auto" }}
                        />
                    }
                    right={
                        <Typography variant="body1">
                            Each feature was{" "}
                            <Typography component={"span"} variant="body1Bold">
                                iterated rapidly, presented to the client for feedback,
                                then refined and prototyped{" "}
                            </Typography>
                            for async review before documenting for dev handoff.
                        </Typography>
                    }
                />

                {/* Doc */}
                <FourByFourLayout
                    py={3}
                    leftCols={{ xs: "1/13", md: "2/7", lg: "3/8" }}
                    rightCols={{ xs: "1/13", md: "7/12", lg: "8/11" }}
                    alignItems={"center"}
                    left={
                        <Box
                            component="img"
                            src={dxc("MVP4.png")}
                            alt="Screenshot of Figma screen"
                            sx={{ width: "100%", height: "auto" }}
                        />
                    }
                    right={
                        <Typography variant="body1">
                            With design and dev overlapping,{" "}
                            <Typography component={"span"} variant="body1Bold">
                                we maintained tight specs{" "}
                            </Typography>
                            and daily updates to ensure accuracy and completeness,
                            as well as to reduce rework and keep everyone aligned.
                        </Typography>
                    }
                />
            </Box>

        </Box >
    );
};

export default DXCPage;

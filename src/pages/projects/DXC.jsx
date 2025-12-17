import React from "react";
import { Box, Typography } from "@mui/material";
// import CursorLink from "../../components/CursorLink";
import NavBar from "../../components/NavBar";
import { GridLayout, GridItem } from "../../components/GridLayout";
import { ProjectHero } from "../../components/projects/ProjectHero";
import { ProjectIntro } from "../../components/projects/ProjectIntro";
import { FourByFourLayout } from "../../components/projects/FourByFourLayout";
import { DesignProcessSection, ProcessTrack } from "../../components/projects/DesignProcessSection";
import { loadMedia } from "../../utils/loadMedia";
// import PersonaSection from "../../components/projects/DXCPersonaSection";
import PersonaSection from "../../components/projects/DXC/PersonaSection";

const dxc = loadMedia("dxc");

const DXCPage = () => {

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
                bgColor="#E7D1FF"
                foreground="#121212"
                title={
                    <Box
                        component="img"
                        src={dxc("DXCLogo.svg")}
                        alt="DXC Cover"
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
                bgColor="#5F249F"
                titleColor="#FFE0A3"
                foreground="#fff"
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

        </Box >
    );
};

export default DXCPage;

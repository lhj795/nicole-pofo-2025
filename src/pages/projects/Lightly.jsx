import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CursorLink from "../../components/CursorLink";
import NavBar from "../../components/NavBar";
import { GridLayout, GridItem } from "../../components/GridLayout";
import { ProjectHero } from "../../components/projects/ProjectHero";
import { ProjectIntro } from "../../components/projects/ProjectIntro";
import { FourByFourLayout } from "../../components/projects/FourByFourLayout";
import { DesignProcessSection, ProcessTrack } from "../../components/projects/DesignProcessSection";
import { loadMedia } from "../../utils/loadMedia";

const lightly = loadMedia("lightly");

const LightlyPage = () => {

    const lightlyTheme = {
        light: {
            heroBg: "#FFAB40",
            designProcessBg: "#e88401",
            designProcessTitle: "#e88401",
            designProcessDesc: "#703F00",
            designProcessForeground: "#111111",
            activityBg: "#F7971D",
        },
        dark: {
            heroBg: "#9a5802",
            designProcessBg: "#965500ff",
            designProcessTitle: "#ff950a",
            designProcessDesc: "#faaf4d",
            designProcessForeground: "#E6E8EB",
            activityBg: "#b86800ff",
        },
    };

    const theme = useTheme();
    const mode = theme.palette.mode;
    const C = lightlyTheme[mode];

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
                imgAlign="flex-start"
                title="Lightly"
                titleProps={{ sx: { fontFamily: "DMSans" } }}
                subtitle="Bringing back casual moments by planning better meetings"
                media={
                    <Box
                        component="img"
                        src={lightly("Cover.svg")}
                        alt="Lightly Cover"
                        sx={{ width: "100%", maxWidth: 800 }}
                    />
                }
                titleCols={{ xs: "1 / 13", md: "2 / 12", lg: "3/6" }}
                imgCols={{ xs: "1 / 13", md: "3/11", lg: "6 / 12" }}
                py={0}
                swapOnMobile={true}
                metaItems={[
                    {
                        label: "Project",
                        value:
                            "Brown RISD Master of Arts in Design Engineering (MADE) Module",
                        cols: { xs: "1 / 13", md: "2 / 7", lg: "3/7" },
                    },
                    {
                        label: "Role",
                        value: "UX/UI Designer",
                        cols: { xs: "1 / 13", md: "7 / 9" },
                    },
                    {
                        label: "Tools",
                        value: "Figma, Illustrator, After Effects, Rhino",
                        cols: { xs: "1 / 13", md: "9 / 12", lg: "9/11" },
                    },
                ]}
            />

            <ProjectIntro
                leftBody={
                    <>
                        As offices turned hybrid, many of us lost friendly connections with
                        colleagues. While nothing fully replaces in-person dynamics, Lightly
                        helps bridge that gap. It&apos;s a connected lighting system that
                        recreates shared atmospheres across spaces and time zones—gently
                        guiding coworkers through meeting modes and collective breaks.
                    </>
                }
                rightBody={
                    <>
                        As the UX/UI Designer, I led concept generation and interaction design,
                        collaborating with a{" "}
                        <CursorLink
                            href="https://www.linkedin.com/in/uxrobbie/"
                            label="LinkedIn"
                        >
                            <Typography variant="body1Bold">
                                UX Researcher
                            </Typography>
                        </CursorLink>
                        {" "}and{" "}
                        <CursorLink
                            href="https://www.linkedin.com/in/danrapoport/"
                            label="LinkedIn"
                        >
                            <Typography variant="body1Bold">
                                Product Technologist
                            </Typography>
                        </CursorLink>
                        . I translated insights into user-centered concepts and helped define a
                        lamp form factor in sync with the interface, using Figma and Adobe CC for
                        mockups and demos.
                    </>
                }
            />

            <DesignProcessSection
                bgColor={C.designProcessBg}
                titleColor={C.designProcessTitle}
                foreground={C.designProcessForeground}
                descColor={C.designProcessDesc}
                diagram={
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: { xs: "flex-start", md: "space-between" },
                            width: "100%",
                            gap: 3,
                        }}
                    >
                        <ProcessTrack
                            steps={["UX Research", "Market Study"]}
                            foreground={C.designProcessForeground}
                            activityBg={C.activityBg}
                        />
                        <ProcessTrack
                            steps={["Ideation", "Validation"]}
                            foreground={C.designProcessForeground}
                            activityBg={C.activityBg}
                        />
                        <ProcessTrack
                            steps={["Iteration", "Testing"]}
                            foreground={C.designProcessForeground}
                            activityBg={C.activityBg}
                        />
                    </Box>
                }
                phases={[
                    {
                        title: "Learning",
                        body:
                            "In-depth-interviews with workers from various work settings, market research of existing products and tech.",
                    },
                    {
                        title: "Concept",
                        body:
                            "Using data-driven insights to formulate potential directions, co-creation and concept testing with users.",
                    },
                    {
                        title: "Prototype",
                        body:
                            "Prototyping MVP based on research, testing for usability and effectiveness, then reiteration until final prototype.",
                    },
                ]}
            />

            {/* The Problem */}
            <Box>
                {/* Intro */}
                <FourByFourLayout
                    py={20}
                    left={
                        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
                            The Problem
                        </Typography>
                    }
                    right={
                        <Typography variant="body1">
                            Many workplaces around the world were transformed by the COVID-19
                            pandemic. Teams adapted to hybrid and remote workflows, adopting tools
                            like Slack, Miro, and Zoom.{" "}
                            <Typography variant="body1Bold">
                                But no digital tool could replace the interpersonal connection{" "}
                            </Typography>
                            we once shared with coworkers.
                        </Typography>
                    }
                />

                {/* Lost collegial moments image */}
                <FourByFourLayout
                    pb={3}
                    px={0}
                    gapY={0}
                    gapX={0}
                    left={
                        <Box
                            component="img"
                            src={lightly("TheProblem01.svg")}
                            alt="Coworkers having a water cooler chat"
                        />
                    }
                    right={
                        <Box
                            component="img"
                            src={lightly("TheProblem02.svg")}
                            alt="Person working from home experiencing fatigue"
                        />
                    }
                />

                {/* Lost collegial moments text */}
                <FourByFourLayout
                    py={0}
                    left={
                        <Typography variant="h6Bold">
                            Lost collegial moments
                        </Typography>
                    }
                    right={
                        <Typography variant="body1">
                            Hybrid work has weakened core elements of effective teamwork,
                            especially{" "}
                            <Typography variant="body1Bold">
                                motivation, efficiency, and everyday collegial moments
                            </Typography>
                            . As coworkers disperse across locations and time zones,
                            informal interactions vanish and Zoom fatigue grows.
                        </Typography>
                    }
                />
            </Box>

            {/* User Persona */}
            <Box>
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
                            To explore this phenomenon further, we{" "}
                            <Typography variant="body1Bold">
                                interviewed 9 global participants{" "}
                            </Typography>
                            working remotely, on-site, or hybrid—each actively
                            participating in team meetings. Based on the{" "}
                            <Typography variant="body1Bold">
                                strongest recurring insights
                            </Typography>
                            , I created the following persona to guide our solution.
                        </Typography>
                    }
                />

                {/* Paul Emerson */}
                <FourByFourLayout
                    pt={20}
                    left={
                        <Box
                            sx={{
                                gap: 3,
                                display: "flex",
                            }}
                        >
                            <Box
                                component="img"
                                src={lightly("Persona01.svg")}
                                alt="Paul Emerson emoji profile"
                                sx={{ width: "clamp(80px, 25%, 120px)" }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2
                                }}
                            >
                                <Typography variant="h6Bold">
                                    Paul Emerson
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 0.5
                                        }}
                                    >
                                        <Typography variant="body1Bold">
                                            Age
                                        </Typography>
                                        <Typography variant="body1Bold">
                                            Senority
                                        </Typography>
                                        <Typography variant="body1Bold">
                                            Work setting
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 0.5
                                        }}
                                    >
                                        <Typography variant="body1">
                                            29
                                        </Typography>
                                        <Typography variant="body1">
                                            Senior Level
                                        </Typography>
                                        <Typography variant="body1">
                                            WFH in Cambria, CA
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    }
                    right={
                        <Typography variant="body1">
                            Paul moved back home once the office went hybrid. Ever since,
                            he attended meetings via video conferencing. He participates
                            in internal meetings where he collaborates with teammates around
                            the world in North America, Europe, and Asia. He occasionally
                            leads meetings with clients.
                        </Typography>
                    }
                />
                <FourByFourLayout
                    py={1}
                    pb={10}
                    left={
                        <Box
                            sx={{
                                gap: 0.5,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography variant="h6">
                                    🙏
                                </Typography>
                                <Typography variant="body1Bold">
                                    Wants
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                component="ul"
                                sx={{ pl: 4 }}
                            >
                                <Typography component="li" variant="body1">
                                    Maintain professionalism with clients, while friendly with teammates
                                </Typography>
                                <Typography component="li" variant="body1">
                                    Elevate motivation and focus when working from home office
                                </Typography>
                            </Typography>
                        </Box>
                    }
                    right={
                        <Box
                            sx={{
                                gap: 0.5,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        ><Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography variant="h6">
                                    😕
                                </Typography>
                                <Typography variant="body1Bold">
                                    Frustrations
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                component="ul"
                                sx={{ pl: 4 }}
                            >
                                <Typography component="li" variant="body1">
                                    Exhausted from back to back online meetings
                                </Typography>
                                <Typography component="li" variant="body1">
                                    Working with colleagues across various timezones
                                </Typography>
                            </Typography>
                        </Box>
                    }
                />

                {/* Emma Marshall */}
                <FourByFourLayout
                    pt={20}
                    left={
                        <Box
                            sx={{
                                gap: 3,
                                display: "flex",
                            }}
                        >
                            <Box
                                component="img"
                                src={lightly("Persona02.svg")}
                                alt="Emma Marchall emoji profile"
                                sx={{ width: "clamp(80px, 25%, 120px)" }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2
                                }}
                            >
                                <Typography variant="h6Bold">
                                    Emma Marshall
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 0.5
                                        }}
                                    >
                                        <Typography variant="body1Bold">
                                            Age
                                        </Typography>
                                        <Typography variant="body1Bold">
                                            Senority
                                        </Typography>
                                        <Typography variant="body1Bold">
                                            Work setting
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 0.5
                                        }}
                                    >
                                        <Typography variant="body1">
                                            41
                                        </Typography>
                                        <Typography variant="body1">
                                            Senior Manager
                                        </Typography>
                                        <Typography variant="body1">
                                            WFH in Cambria, CA
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    }
                    right={
                        <Typography variant="body1">
                            Emma stays grounded in the office, coordinating closely with teams
                            across the company. She leads both in-person and hybrid sessions
                            and manages a globally distributed team spanning multiple regions
                            and time zones.
                        </Typography>
                    }
                />
                <FourByFourLayout
                    py={1}
                    pb={20}
                    left={
                        <Box
                            sx={{
                                gap: 0.5,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography variant="h6">
                                    🙏
                                </Typography>
                                <Typography variant="body1Bold">
                                    Wants
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                component="ul"
                                sx={{ pl: 4 }}
                            >
                                <Typography component="li" variant="body1">
                                    Team feeling connected and supported, no matter where they work
                                </Typography>
                                <Typography component="li" variant="body1">
                                    Rooms for casual connection that isn’t forced or awkward
                                </Typography>
                            </Typography>
                        </Box>
                    }
                    right={
                        <Box
                            sx={{
                                gap: 0.5,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography variant="h6">
                                    😕
                                </Typography>
                                <Typography variant="body1Bold">
                                    Frustrations
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                component="ul"
                                sx={{ pl: 4 }}
                            >
                                <Typography component="li" variant="body1">
                                    Team members appear tired, disengaged, or quiet in calls
                                </Typography>
                                <Typography component="li" variant="body1">
                                    Meetings that should be short become draining necessities
                                </Typography>
                            </Typography>
                        </Box>
                    }
                />

                {/* What Tools to Use? */}
                <FourByFourLayout
                    py={1}
                    pb={10}
                    alignItems="center"
                    left={
                        <Box sx={{ alignSelf: { xs: "center", md: "flex-start" } }} >
                            <Box
                                sx={{
                                    gap: 1,
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    display: { xs: "none", md: "flex" }
                                }}
                            >
                                <Typography variant="body1Bold"> Video conferencing </Typography>
                                <Box
                                    component="img"
                                    src={lightly("Tools01.svg")}
                                    alt="Logos of video conferencing tools"
                                    sx={{ height: "2rem", mb: 2 }}
                                />
                                <Typography variant="body1Bold"> Scheduling and project management </Typography>
                                <Box
                                    component="img"
                                    src={lightly("Tools02.svg")}
                                    alt="Logos of scheduling and project management tools"
                                    sx={{ height: "2rem", mb: 2 }}
                                />
                                <Typography variant="body1Bold"> Communication </Typography>
                                <Box
                                    component="img"
                                    src={lightly("Tools03.svg")}
                                    alt="Logos of communication tools"
                                    sx={{ height: "2rem", mb: 2 }}
                                />
                                <Typography variant="body1Bold"> Cloud storage and file-sharing services </Typography>
                                <Box
                                    component="img"
                                    src={lightly("Tools04.svg")}
                                    alt="Logos of cloud storage and file-sharing services tools"
                                    sx={{ height: "2rem", mb: 2 }}
                                />
                                <Typography variant="body1Bold"> Online whiteboarding </Typography>
                                <Box
                                    component="img"
                                    src={lightly("Tools05.svg")}
                                    alt="Logos of online whiteboarding tools"
                                    sx={{ height: "2rem", mb: 2 }}
                                />
                            </Box>
                            <Box
                                component="img"
                                src={lightly("ToolsMobile.svg")}
                                alt="Logos of online working tools"
                                sx=
                                {{
                                    height: "3rem",
                                    mb: 2,
                                    display: { xs: "flex", md: "none" }
                                }}
                            />
                        </Box>
                    }
                    right={
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "flex-start" },
                                justifyContent: "center",
                                gap: 3,
                                height: "100%"
                            }}
                        >
                            <Box
                                component="img"
                                src={lightly("Persona03.svg")}
                                alt="Logos of online working tools"
                                sx={{ height: "6rem", mb: 2 }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1
                                }}
                            >
                                <Typography variant="h6Bold"> What Tools to Use? </Typography>
                                <Typography variant="body1">
                                    For a transparent and effective teaming, Paul and Emma's
                                    team decided to use Zoom for video conferencing, Google
                                    Suite for scheduling and file-sharing, Slack for communication,
                                    and FigJam for brainstorming.
                                </Typography>
                                <Typography variant="body1">
                                    While all these tools are{" "}
                                    <Typography variant="body1Bold">
                                        excellent in efficienct teaming, they're still missing to
                                        reignite the cheerful team dynamics{" "}
                                    </Typography>
                                    they once had. They tried creating a #random channel on
                                    Slack to chat aboout everyday topics, but it lost traction
                                    sooner than expected.
                                </Typography>
                            </Box>
                        </Box>
                    }
                />
            </Box>

            {/* Solution */}
            <Box>
                <FourByFourLayout
                    py={20}
                    left={
                        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
                            Solution
                        </Typography>
                    }
                    right={
                        <Typography variant="body1">
                            Lightly is a remote collaboration tool that curates a similar
                            atmosphere for co-workers in remote areas. It comes with
                            two essential parts: the Lightly Lamp, and the Lightly plugin.
                            The lamp and ditial UI cues different lights by user settings on
                            the color, duration, and work modes. With Lightly, co-workers in
                            different locations and time zones can more efficiently and
                            enthusiastically engage in meetings.
                        </Typography>
                    }
                />

                {/* Solution Video */}
                <GridLayout py={6} pb={3} gapY={1}>
                    <GridItem
                        cols={{ xs: "1 / 13", md: "2 / 12", lg: "3/11" }}
                        sx={{
                            width: "100%",
                            borderRadius: 0.75,
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="video"
                            src={lightly("Solution01.mp4")}
                            autoPlay
                            muted
                            loop
                            playsInline
                            sx={{
                                width: "calc(100% + 4px)",
                                height: "auto",
                                display: "block",
                                transform: "translate(-2px, -2px)", // center the crop horizontally
                            }}
                        />
                    </GridItem>
                </GridLayout>

                {/* Video description */}
                <FourByFourLayout
                    py={6} pt={0}
                    left={
                        <Typography variant="subtitle1">
                            Lightly integrates with existing online collaboration tools,
                            primarily video conferencing platforms. It enhances meetings
                            by modifying the background color of the conferencing tool UI,
                            and displaying a progress bar that visualizes the meeting stage.
                        </Typography>
                    }
                />
            </Box>

            {/* But why lighting and meetings? */}
            <GridLayout py={12} px={0} gapY={5} alignItems="center">
                <GridItem cols={{ xs: "1 /13", md: "1/5", lg: "1/4" }}>
                    <Box
                        component="img"
                        src={lightly("Solution02.svg")}
                        alt="Two images of different places. The image on top is a restaurant
                        where the lighting is dim and warm. The bottom image is of a conferencing 
                        room where the lighting is bright and cool."
                        sx={{ maxWidth: "100%", display: "block" }}
                    />
                </GridItem>
                <GridItem
                    cols={{ xs: "1 / 13", md: "5 / 9" }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}

                        px={{ xs: 3, md: 0 }}
                    >
                        <Typography variant="h5Bold">
                            Wait, but why lighting?
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Studies have shown that the depending on the exposure amount,
                            light has the power to shift mood, energy levels, appetite,
                            and many other aspects of daily life.{" "}
                            <Typography variant="body1Bold">
                                Bright blue light can increase efficiency in one&apos;s performance,
                                as well as boost the ability to focus.{" "}
                            </Typography>
                            On the other hand, a dim,
                            saturated, warm light can alleviate stress and amplify the sense
                            of calm and relaxation.
                        </Typography>
                        <Typography variant="h5Bold">
                            And why during meetings?
                        </Typography>
                        <Typography variant="body1">
                            We explored early concepts like a walkie talkie or a workplace
                            metaverse, but ultimately moved away from them. Research and
                            interviews showed that a{" "}
                            <Typography variant="body1Bold">
                                core workplace value is autonomy.{" "}
                            </Typography>
                            Digital tools that allow{" "}
                            <Typography variant="body1Bold">
                                unexpected contact from coworkers{" "}
                            </Typography>
                            especially within someone&apos;s home environment can feel invasive and
                            create anxiety.
                        </Typography>
                        <Typography variant="body1">
                            That led us to shift to{" "}
                            <Typography variant="body1Bold">
                                meetings as the ideal touch point.{" "}
                            </Typography>
                            It&apos;s the one moment when everyone is already present,
                            making any intervention far less intrusive. And a well designed
                            lamp can live naturally in offices and homes{" "}
                            <Typography variant="body1Bold">
                                without turning the home into an extension of work 😜.
                            </Typography>
                        </Typography>
                    </Box>
                </GridItem>
                <GridItem cols={{ xs: "1 / 13", md: "9 / 13", lg: "10/13" }}>
                    <Box
                        component="img"
                        src={lightly("Solution03.png")}
                        alt="Photos of a whiteboard with idea sketches on them."
                        sx={{ maxWidth: "100%", display: { xs: "none", md: "block" } }}
                    />
                </GridItem>
            </GridLayout>

            {/* Web tool */}
            <Box>

                {/* Video conferencing integration */}
                <GridLayout px={0} py={12} alignItems="center">
                    <GridItem
                        cols={{ xs: "1 / 13", md: "1 / 7", lg: "1/6" }}
                    >
                        <Box
                            component="video"
                            src={lightly("App01.mp4")}
                            autoPlay
                            muted
                            loop
                            playsInline
                            sx={{
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </GridItem>
                    <GridItem
                        cols={{ xs: "1 / 13", md: "7 / 12", lg: "7/11" }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: 1,
                                height: "100%",
                                px: { xs: 3, md: 0 },
                            }}
                        >
                            <Typography variant="subtitle1Bold">
                                Video conferencing integration
                            </Typography>
                            <Typography variant="body1">
                                As the meeting progresses through different meeting modes by
                                shifting light brightness and color, the lighting changes are
                                reflected in the video conferencing UI. The main additions to
                                the UI are the background color, and the progress bar which the
                                stages of the meeting. At any point of the meeting, the host is
                                able to add an additional stage such as break times, as well as
                                adjust it, such as by snoozing, changing duration, or skipping.
                            </Typography>
                        </Box>
                    </GridItem>
                </GridLayout>

                {/* Web app */}
                <GridLayout px={0} py={12}>
                    <GridItem
                        cols={{ xs: "1 / 13", md: "2 / 12", lg: "3/11" }}
                    >
                        <Box
                            component="video"
                            src={lightly("App02.mp4")}
                            autoPlay
                            muted
                            loop
                            playsInline
                            sx={{
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </GridItem>
                    <GridItem
                        cols={{ xs: "1 / 13", md: "2 / 7", lg: "3/7" }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: 1,
                                height: "100%",
                                px: { xs: 3, md: 0 },
                            }}
                        >
                            <Typography variant="subtitle1Bold">
                                Web app
                            </Typography>
                            <Typography variant="body1">
                                But it&apos;s not just during meeting that the user can adjust
                                the meeting flow. In fact, for some users, it may make more
                                sense to structure a meeting in advance. When initially onboarding
                                on Lightly, the user will be given default meeting templates which
                                consist of focused and casual times, each with a corresponding
                                default light setting. Users may choose from one of the default
                                templates to schedule meetings, or customize their own.
                            </Typography>
                        </Box>
                    </GridItem>
                </GridLayout>

                {/* Calendar integration */}
                <GridLayout px={0} py={12} alignItems="center">
                    <GridItem
                        cols={{ xs: "1 / 13", md: "7 / 13", lg: "8/13" }}
                        order={{ xs: 1, md: 2 }}
                    >
                        <Box
                            component="video"
                            src={lightly("App03.mp4")}
                            autoPlay
                            muted
                            loop
                            playsInline
                            sx={{
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </GridItem>
                    <GridItem
                        cols={{ xs: "1 / 13", md: "2 / 7", lg: "3/7" }}
                        order={{ xs: 2, md: 1 }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: 1,
                                height: "100%",
                                px: { xs: 3, md: 0 },
                            }}
                        >
                            <Typography variant="subtitle1Bold">
                                Calendar integration
                            </Typography>
                            <Typography variant="body1">
                                Lightly is envisioned to seamlessly integrate into users&apos;
                                preferred remote collaboration tools such as Google suite and
                                Zoom. When scheduling a Lightly meeting, users may create or
                                edit a meeting the way they normally would, then choose the
                                desired meeting mode. It&apos;s that easy!
                            </Typography>
                        </Box>
                    </GridItem>
                </GridLayout>
            </Box>

            {/* Lamp */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>

                {/* Two forms */}
                <GridLayout py={6} px={0} alignItems="center">
                    <GridItem cols={{ xs: "1 / 13", md: "1 / 7", lg: "1/6" }}>
                        <Box
                            component="img"
                            src={lightly("Lamp01.png")}
                            alt="Two forms of the Lightly lamp, one as a ceiling mount, 
                            and the other as desk lamp"
                            sx={{ maxWidth: "100%", display: "block" }}
                        />
                    </GridItem>
                    <GridItem cols={{ xs: "1/13", md: "7/12", lg: "7/11" }} sx={{ px: 3 }}>
                        <Typography variant="body1">
                            The lamp comes in two forms: a hanging light fixture,
                            and a desk lamp. Depending on the meeting space, users
                            can choose from the two. The{" "}
                            <Typography variant="body1Bold">
                                panels are designed to open and close{" "}
                            </Typography>
                            in a subtle manner to adjust the brightness and to{" "}
                            <Typography variant="body1Bold">
                                gently cue the switching work modes.{" "}
                            </Typography>
                            For example, a
                            dim warm light may cue casual time, such as at the beginning,
                            end, or break times during a meeting. And a bright blue light
                            may cue focus time, where members concentrate on the agenda of
                            the meeting.
                        </Typography>
                    </GridItem>
                </GridLayout>

                {/* Initial prototype */}
                <GridLayout py={6} px={0} gapX={0} gapY={0} alignItems="center">
                    <GridItem
                        cols={{ xs: "1 / 13", md: "2 / 7", lg: "3/7" }}
                        sx={{ px: 3, pt: 3 }}
                        order={{ xs: 4, md: 1 }}
                    >
                        <Typography variant="body1">
                            The initial prototype was a purely mechanical model made from
                            laser cut plywood, featuring a three level opening and closing
                            mechanism with paper panels. After getting the mechanism to work,
                            we iterated on a version that opened and closed autonomously and
                            used lightweight, heat safe materials. We also discovered that the
                            colored paper panels distorted the light output, leading us to switch
                            to white panels in the next iteration.
                        </Typography>
                    </GridItem>
                    <GridItem cols={{ xs: "1/13", md: "8/13", lg: "9/13" }} order={{ xs: 1, md: 2 }}>
                        <Box
                            component="img"
                            src={lightly("Lamp02.gif")}
                            alt="Early paper prototype of the lamp"
                            sx={{ width: "100%", display: "block" }}
                        />
                    </GridItem>
                    <GridItem cols={{ xs: "1/13", md: "3/8", lg: "5/9" }} order={{ xs: 2, md: 3 }}>
                        <Box
                            component="img"
                            src={lightly("Lamp04.svg")}
                            alt="The team product technology and me in the studio!"
                            sx={{ width: "100%", display: "block" }}
                        />
                    </GridItem>
                    <GridItem cols={{ xs: "1/13", md: "8/13", lg: "9/13" }} order={{ xs: 3, md: 4 }}>
                        <Box
                            component="img"
                            src={lightly("Lamp03.svg")}
                            alt="Plywood test for opening and closing mechanism"
                            sx={{ width: "100%", display: "block" }}
                        />
                    </GridItem>
                </GridLayout>

                {/* Final prototype */}
                <GridLayout px={0} pb={6} alignItems="center">
                    <GridItem
                        cols={{ xs: "1/13", md: "1/7", lg: "1/6" }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 0
                        }}
                    >
                        <Box
                            component="img"
                            src={lightly("Lamp05.gif")}
                            alt="Final prototype"
                            sx={{ width: "100%" }}
                        />
                        <Box
                            component="img"
                            src={lightly("Lamp08.svg")}
                            alt="Final prototype"
                            sx={{ width: "100%" }}
                        />
                    </GridItem>
                    <GridItem cols={{ xs: "1/13", md: "7/12", lg: "7/11" }} sx={{ display: "flex", px: 3 }}>
                        <Typography variant="body1">
                            The final prototype is composed of laser cut lamp panels,
                            3D printed housing for electronics and connection to power
                            supplies, a Wi-Fi microchip that communicates with Lightly
                            app or integrated application, a stepper-motor that actuates
                            a series of strings that tension in sequence to create the
                            opening and closing of the lamp, and a color changing light bulb.
                        </Typography>
                    </GridItem>
                </GridLayout>
            </Box>

            {/* User testing */}
            <GridLayout px={0} py={6} alignItems="center">
                <GridItem
                    cols={{ xs: "1/13", md: "2/7", lg: "3/7" }}
                    order={{ xs: 2, md: 1 }}
                    px={3}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, px: 3 }}>
                        <Typography variant="body1">
                            Testing participants appreciated Lightly for it fosters a sense
                            of connection through lighting synchronization. They also pointed
                            out that establishing a common vibe is not only helpful for
                            connection but also conducive to collaboration.
                        </Typography>

                        {/* Quote 1 */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h6Italic">
                                “I endorse! I think it helps{" "}
                                <Typography variant="h6Italic" sx={{ fontWeight: 600 }}>
                                    establish a mood and tone{" "}
                                </Typography>
                                over something like a zoom call which is hard to do!”
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                Program Associate at a National Nonprofit
                            </Typography>
                        </Box>

                        {/* Quote 2 */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h6Italic">
                                “In global teams where there&apos;s already little common
                                ground, creating a common vibe in real life would{" "}
                                <Typography variant="h6Italic" sx={{ fontWeight: 600 }}>
                                    help further align teams.
                                </Typography>
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                Senior Manager
                            </Typography>
                        </Box>

                        {/* Quote 3 */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h6Italic">
                                “When I first joined the company, I didn&apos;t have the
                                confidence to speak up during meetings. Having lighting prompts
                                would have{" "}
                                <Typography variant="h6Italic" sx={{ fontWeight: 600 }}>
                                    helped me engage, especially during the breaks.”
                                </Typography>
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                Recruiter at Global Consultancy
                            </Typography>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem
                    cols={{ xs: "1/13", md: "7/13", lg: "8/13" }}
                    order={{ xs: 1, md: 2 }}
                    px={3}
                >
                    <Box
                        component="img"
                        src={lightly("Testing01.svg")}
                        alt="Photos of user testing sessions"
                        sx={{ width: "100%" }}
                    />
                </GridItem>
            </GridLayout>

            {/* Closing */}
            <GridLayout px={0} py={6} alignItems="center">
                <GridItem cols={{ xs: "1/13", md: "1/7", lg: "1/6" }}>
                    <Box
                        component="video"
                        src={lightly("Testing02.mp4")}
                        autoPlay
                        muted
                        loop
                        playsInline
                        sx={{
                            width: "calc(100% + 4px)",
                            height: "auto",
                            display: "block",
                            transform: "translate(-2px, -2px)", // center the crop horizontally
                        }}
                    />
                </GridItem>
                <GridItem
                    cols={{ xs: "1/13", md: "7/12", lg: "7/11" }}
                    px={3}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, px: 3 }}>
                        <Typography variant="body1">
                            Others have mentioned meeting structuring with gentle visual
                            cue. Rather than someone having to speak up “TAKE A BREAK” or
                            “LET&apos;S MOVE ON,” the system changes behave as a gentler
                            nudge to shift gears.
                        </Typography>

                        {/* Quote 1 */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h6Italic">
                                “…sometimes people stop{" "}
                                <Typography variant="h6Italic" sx={{ fontWeight: 600 }}>
                                    respecting the break
                                </Typography>
                                , but a visual cue can cut through that.”
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                Product Manager at Global Tech Company
                            </Typography>
                        </Box>

                        {/* Quote 2 */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h6Italic">
                                “I like the change in the lamp shape/configuration to{" "}
                                <Typography variant="h6Italic" sx={{ fontWeight: 600 }}>
                                    signal different phases of the meeting
                                </Typography>
                                .”
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                Resident Dermatologist at University Hospital
                            </Typography>
                        </Box>

                        {/* Quote 3 */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h6Italic">
                                “
                                <Typography variant="h6Italic" sx={{ fontWeight: 600 }}>
                                    Light has the power to connect people and diffuse tensions
                                </Typography>
                                . My therapist uses a light to denote that session is almost over. It&apos;s{" "}
                                <Typography variant="h6Italic" sx={{ fontWeight: 600 }}>
                                    much gentler{" "}
                                </Typography>
                                than being told to leave.”
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary" }}>
                                VP at Major Media Company
                            </Typography>
                        </Box>
                    </Box>
                </GridItem>
            </GridLayout>
        </Box >
    );
};

export default LightlyPage;

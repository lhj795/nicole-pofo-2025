import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavBar from "../../components/NavBar";
import { GridLayout, GridItem } from "../../components/GridLayout";
import { ProjectHero } from "../../components/projects/ProjectHero";
import { ProjectIntro } from "../../components/projects/ProjectIntro";
import { FourByFourLayout } from "../../components/projects/FourByFourLayout";
import { DesignProcessSection, ProcessTrack } from "../../components/projects/DesignProcessSection";
import { loadMedia } from "../../utils/loadMedia";

const apnimed = loadMedia("apnimed");

const ApnimedPage = () => {

    const apnimedTheme = {
            light: {
                periwinkle: "#BDBEFC",
                deepSea: "#E9EAFE",
                patientText: "#000822",
                clinicianText: "#002F65",
                clinicianBg: "#E6F1FE",
            },
            dark: {
                periwinkle: "#3B427D",
                deepSea: "#292F52",
                patientText: "#BDBEFC",
                clinicianText: "#E6F1FE",
                clinicianBg: "#1D3A5B",
            },
        };
    
        const theme = useTheme();
        const mode = theme.palette.mode;
        const C = apnimedTheme[mode];

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
                bgColor="#3B427D"
                foreground="#FFF3FD"
                title={
                    <Box
                        component="img"
                        src={apnimed("CoverLogo.svg")}
                        alt="DXC Cover"
                        sx={{ height: "3rem", display: "block" }}
                    />
                }
                subtitle="Remote Health Monitoring for Diagnosis and Treatment of Obstructive Sleep Apnea"
                media={
                    <Box
                        component="img"
                        src={apnimed("CoverImg.png")}
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
                titleCols={{ xs: "1 / 13", md: "2 / 7", lg: "3/7" }}
                imgCols={{ xs: "1 / 13", md: "7 / 12", lg: "7/11" }}
                swapOnMobile={true}
                metaItems={[
                    {
                        label: "Role",
                        value:
                            "Lead UX Design, UI Design, Support Research, Support Frontend Engineering",
                        cols: { xs: "1 / 13", md: "1 / 7", lg: "3/7" },
                    },
                    {
                        label: "Tools",
                        value: "Figma, Adobe Suite, React",
                        cols: { xs: "1 / 13", md: "7 / 12", lg: "7/11" },
                    },
                ]}
            />

            <ProjectIntro
                leftTitle="Mission"
                leftBody={
                    <Typography variant="body1">
                        The Apnimed system consists of three primary components -
                        Apnimed wearable device, patient facing mobile app, and
                        clinician web portal. The three components work together to
                        collect and transfer valuable patient data that empowers
                        patient by helping them understand their current health and
                        ultimately encourage better health habits. The system also
                        allows clinicians to remotely monitor patient data and make
                        diagnosis and treatment plan for Obstructive Sleep Apnea (OSA).
                    </Typography>
                }
                rightBody={
                    <Typography variant="body1">
                        As the UX Design Lead, I was responsible for the entirety of
                        the design efforts of the client's product, consulting design
                        directions and activities for successful development. I
                        collaborated extensively with the research team to identify
                        user needs and current pain points to create an MVP requirements,
                        then lead multiple rounds of design iteration from wireframes
                        to high fidelity mock up, and finally work with the software
                        dev team to implement UI with responsiveness and scalability
                        in mind.
                    </Typography>
                }
            />

            <DesignProcessSection
                bgColor="#191F3F"
                titleColor={C.patientText}
                descColor="#FFF3FD"
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
                            steps={["Research"]}
                            foreground="#FFF3FD"
                            activityBg="none"
                            sx={{ flex: 1 }}
                        />
                        <ProcessTrack
                            steps={["Design", "Review", "Iterate"]}
                            foreground="#FFF3FD"
                            activityBg="#fff3fd2a"
                            sx={{ flex: 1 }}
                        />
                        <ProcessTrack
                            steps={["Implementation"]}
                            foreground="#FFF3FD"
                            activityBg="none"
                            sx={{ flex: 1 }}
                        />
                    </Box>
                }
                phases={[
                    {
                        // title: "Identify",
                        body:
                            "Competitive Landscaping, Tech Scouting, User Interviews, User Audit, Information Architecture, Workflow Map, User Journey Map",
                    },
                    {
                        // title: "Invent",
                        body:
                            "Wireframing, Health Systems Science (HSS) Studies, Internal/Client Team Reviews, Heuristics, Hi-Fidelity UI Design, Risk Analysis and Error Flows",
                    },
                    {
                        // title: "Realize",
                        body:
                            "Style Guide, UI Library, Responsive Design, Software development",
                    },
                ]}
            />

            {/* Contextual Inquiry */}
            <Box>
                {/* Intro */}
                <FourByFourLayout
                    py={10}
                    pb={4}
                    left={
                        <Typography variant="h1">Contextual Inquiry</Typography>
                    }
                    right={
                        <Typography variant="body1">
                            To best assist my client for their success, I was responsible for
                            thoroughly understanding the client's business drivers and goals,
                            the user needs, and the current market. To do so, I collaborated
                            with the research team to conduct various types of research including
                            hard research on OSA, the current market for treatment, and today's
                            user journey throughout their OSA diagnosis and treatment.
                        </Typography>
                    }
                />
                {/* Image */}
                <FourByFourLayout
                    py={2}
                    pb={0}
                    left={
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <Typography variant="h6Roman" sx={{ width: "50%", textAlign: "center" }}>Normal airway</Typography>
                                <Typography variant="h6Roman" sx={{ width: "50%", textAlign: "center" }}>Obstructive sleep apnea</Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <Box
                                    component="img"
                                    src={apnimed("CI2.png")}
                                    alt="Diagram showing a clear airway from the mouth and nostril."
                                    sx={{ width: "50%" }}
                                />
                                <Box
                                    component="img"
                                    src={apnimed("CI1.png")}
                                    alt="Diagram showing obstruction in the breathing passage"
                                    sx={{ width: "50%" }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <Typography variant="body1" sx={{ width: "50%", textAlign: "center" }}>Airway is open and air moves through</Typography>
                                <Typography variant="body1" sx={{ width: "50%", textAlign: "center" }}>Airway is blocked and air does not move through</Typography>
                            </Box>
                        </Box>
                    }
                    right={
                        <Box sx={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box
                                component="img"
                                src={apnimed("CI3.svg")}
                                alt="Apnimed logo"
                                sx={{ height: "48px", maxWidth: "320px", display: { xs: "none", md: "block", lg: "block" } }}
                            />
                        </Box>
                    }
                />
                {/* text */}
                <FourByFourLayout
                    py={2}
                    pb={10}
                    left={
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            Obstructive sleep apnea (OSA) is the most common sleep-related breathing disorder, marked by repeated airway collapse during sleep that disrupts breathing. It is often associated with snoring and daytime fatigue. Treatment options include continuous positive airway pressure (CPAP), oral appliances that reposition the jaw, and, in select cases, surgical interventions such as Inspire.
                        </Typography>
                    }
                    right={
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "center" }}>
                            <Box
                                component="img"
                                src={apnimed("CI3.svg")}
                                alt="Apnimed logo"
                                sx={{ height: "48px", maxWidth: "320px", display: { xs: "block", md: "none", lg: "none" }, mr: 3, mt: 4 }}
                            />
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Apnimed is a pharmaceutical company developing two Phase 2 medications for the treatment of OSA as alternatives to CPAP and oral appliances. In preparation for an IRB clinical trial focused on CPAP-nonadherent patients, I designed patient engagement solutions that leveraged Apnimed's DAGOBAH algorithm and a connected mobile app to increase therapy adherence.
                            </Typography>
                        </Box>
                    }
                />
            </Box>

            {/* Journey Map */}
            <Box>
                {/* Intro */}
                <FourByFourLayout
                    leftCols={{ xs: "1/13", md: "2/7", lg: "3/6" }}
                    py={10}
                    pb={4}
                    left={
                        <Typography variant="h1" sx={{ mt: 1 }}>
                            Diagnostic Journey Map
                        </Typography>
                    }
                    right={
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            This journey map synthesizes honest, first-hand experiences from patients, their bed partners, and clinicians gathered through primary research conducted in May 2023, including 13 patient, 4 bed partners, and 14 clinician interviews. Patients also completed a dscout journaling activity prior to interviews, providing quantitative context to support qualitative insights. Together, these inputs capture users’ key steps, anecdotes, moments of delight, and pain points across the journey from diagnosis through treatment and long-term adherence.
                        </Typography>
                    }
                />
                {/* Image */}
                <Box sx={{ p: 3, width: "100vw", overflow: "scroll" }}>
                    <Box
                        component="img"
                        src={apnimed("JourneyMap.png")}
                        alt="Diagnostic journey map"
                        sx={{ height: "90vh" }}
                    />
                </Box>
                {/* Key takeaways */}
                <FourByFourLayout
                    py={2}
                    left={
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
                            <Box sx={{ p: 1.5, background: C.periwinkle, borderRadius: 0.5 }}>
                                <Typography variant="body1Bold" sx={{ mt: 1 }}>
                                    Patient key takeaways
                                </Typography>
                            </Box>
                            <Box sx={{ background: C.deepSea, borderRadius: 0.5 }}>
                                <Box component="ul" marker="disc">
                                    <Typography component="li" marker="disc">
                                        Patients fall out of the journey due to long wait times, lack of recognition to the health impact or motivation to improve health.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        Patients lack the knowledge they need and want because doctors are not always transparent about diagnosis or treatment options, or that many patient facing tools do not show much data.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        PSG sleep test can be cumbersome, time consuming, create anxiety, embarrassment, among other negative effects.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        HSAT can be difficult for patients who are not technically saavy.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        CPAP is tedious to regularly use, maintain or travel with.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        Patients forget to use CPAP at recommended/required amount.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        CPAP may cause issues and side effects.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    }
                    right={
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25, height: "100%" }}>
                            <Box sx={{ p: 1.5, background: C.periwinkle, borderRadius: 0.5 }}>
                                <Typography variant="body1Bold" sx={{ mt: 1 }}>
                                    Clinician key takeaways
                                </Typography>
                            </Box>
                            <Box sx={{ background: C.deepSea, borderRadius: 0.5, height: "100%" }}>
                                <Box component="ul" marker="disc" sx={{ height: "100%" }}>
                                    <Typography component="li" marker="disc">
                                        Clinicians typically disregard consumer tools and data (i.e., Apple watch, Fitbit, etc.).
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        Dealing with and individually managing treatment options depending on patient insurance can be burdensome.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        Clinician wants a single platform to manage, monitor, and diagnose patients.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        Clinician wants their workflow to be as efficient as possible, delegating non-clinical workflow to assistants or admins.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        Clinicians wants to use their time efficiently.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        PCPs often lose visibility to patient care pathways once they are referred out to sleep clinics for sleep tests and/or treatment.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    }
                />
            </Box>

            {/* Tech scouting */}
            <Box>
                {/* Intro */}
                <FourByFourLayout
                    py={10}
                    pb={4}
                    left={
                        <Typography variant="h1" sx={{ mt: 1 }}>
                            Tech Scouting & Competitive Research
                        </Typography>
                    }
                    right={
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            To better understand the options for patient treatment as well as to extract features offered by competitive platforms, my team researched 4 competitive products, 2 analogous products, in which we purchased and tested 3 products.
                        </Typography>
                    }
                />
                {/* Image */}
                <Box sx={{ p: 3, width: "100vw", overflow: "scroll" }}>
                    <Box
                        component="img"
                        src={apnimed("TechScouting.png")}
                        alt="Technical scouting map"
                        sx={{ height: "90vh" }}
                    />
                </Box>
                {/* Key takeaways */}
                <GridLayout pb={10}>
                    <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }} sx={{ mt: 2 }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
                            <Box sx={{ p: 1.5, background: C.periwinkle, borderRadius: 0.5 }}>
                                <Typography variant="body1Bold">
                                    Key takeaways
                                </Typography>
                            </Box>
                            <Box sx={{ background: C.deepSea, borderRadius: 0.5 }}>
                                <Box component="ul" marker="disc">
                                    <Typography component="li" marker="disc">
                                        Commercial products tends to show more comprehensive data visualization and biometrics context compared to medical products.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        Medical products – especially patient facing mobile apps – tend to show the nature of MVP, often comprised of minimal features for patients.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        Entire user journey is composed of use instruction, and no patient facing sleep report or visibility/context to sleep performance.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        Most competitive products generate Sleep Report for patients that includes overnight sleep data.
                                    </Typography>
                                    <Typography component="li" marker="disc">
                                        Raw biometric data is typically plotted on a line graph or pie chart for physician review/interpretation
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                </GridLayout>
            </Box>

            {/* IA */}
            <GridLayout py={10}>
                <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Typography variant="h2" sx={{ textTransform: "uppercase" }}>Information Architecture</Typography>
                    <Box
                        component="img"
                        src={apnimed("IA.png")}
                        alt="Information Architecture diagram"
                        sx={{ width: "100%" }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2, maxWidth: "800px" }}>
                        <Typography variant="h6Bold">Designed to handle scale and uncertainty</Typography>
                        <Typography variant="body1">
                            This information architecture was derived from the Systems Design Specification (SDS) authored by the systems engineering team and translated into a user-centered structure that organized system capabilities into meaningful pages and flows for each user type. It served as a critical bridge between technical requirements and product experience.
                        </Typography>
                    </Box>
                </GridItem>
            </GridLayout>

            {/* Workflow map */}
            <GridLayout py={10}>
                <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Typography variant="h2" sx={{ textTransform: "uppercase" }}>Workflow Map</Typography>
                    <Box
                        component="img"
                        src={apnimed("WM.png")}
                        alt="Workflow map diagram"
                        sx={{ width: "100%" }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2, maxWidth: "800px" }}>
                        <Typography variant="h6Bold">Capturing end-to-end, multi-actor workflows</Typography>
                        <Typography variant="body1">
                            This workflow map visualizes the full clinical journey across clinicians, patients, and system-driven steps, making explicit how actions, decisions, and data handoffs move between actors over time. By separating the steps,the map surfaces who is responsible for each action at every stage, reducing ambiguity in clinical and operational ownership.
                        </Typography>
                    </Box>
                </GridItem>
            </GridLayout>

            {/* Painting the picture */}
            <GridLayout alignItems="center" py={10}>
                <GridItem order={{ xs: 2, md: 1, lg: 1 }} cols={{ xs: "1/13", md: "2/7", lg: "3/7" }} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Typography variant="h2">PAINTING THE PICTURE</Typography>
                    <Typography variant="body1">Design opportunities were translated into low fidelity wireframes, exploring content layout and interactions for critical tasks.</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Typography variant="h6Bold">Evaluating the Core Functionality</Typography>
                        <Typography variant="body1">Wireframing removes any bias on digital features by reducing visual emphasis, rather attracting attention purely by content layout. Low-fidelity wireframes also allows fast-paced iterations and exploration, thus flexible collaboration and alignment.</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Typography variant="h6Bold">Putting User Needs at First</Typography>
                        <Typography variant="body1">My team put user needs at foremost to better help patients understand their disease state, take actionable steps, and to allow clinicians to effectively analyze data and make treatment decisions. We also prioritized meeting the client’s business goals by implementing novel client-invented data features, while meeting all regulatory and cybersecurity requirements for each digital platforms.</Typography>
                    </Box>
                </GridItem>
                <GridItem order={{ xs: 1, md: 2, lg: 2 }} cols={{ xs: "1/13", md: "7/13", lg: "7/13" }}>
                    <Box
                        component="img"
                        src={apnimed("Wireframes.png")}
                        alt="Grayscale wireframes of the clinician web portal and patient mobile app."
                        sx={{ width: "100%" }}
                    />
                </GridItem>
            </GridLayout>

            {/* Patient mobile app */}
            <GridLayout sx={{ color: "#FFF3FD" }} py={10} gapY={0} px={0}>
                <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}>
                    <Typography variant="h1" sx={{ color: C.patientText, height: "42px" }}>Patient Mobile App</Typography>
                </GridItem>
                <GridItem
                    cols={"1/13"}
                    sx={{
                        background: "linear-gradient(217deg, #4E1141, #000822, #003D6C)",
                    }}
                >
                    {/* mockup */}
                    <GridLayout pt={12} alignItems="center">
                        <GridItem order={{ xs: 2, md: 1, lg: 1 }} cols={{ xs: "1/13", md: "2/7", lg: "3/7" }}>
                            <Typography variant="body1">
                                The mobile app{" "}
                                <Typography component={"span"} variant="body1Bold">
                                    empowers patients by offering in-depth view into health metrics,
                                    encouraging motivational behavior and attitudes{" "}
                                </Typography>
                                for patient to build towards healthier lifestyle. While putting the patient needs at foremost, meeting other needs including regulatory requirements by FDA, HIPPA, following cyber-security best practices, meeting client’s business needs, and making sure all design assets are scalable for multi-generational deployments were all kept as part of the agenda.
                            </Typography>
                        </GridItem>
                        <GridItem order={{ xs: 1, md: 2, lg: 2 }} cols={{ xs: "1/13", md: "7/12", lg: "7/11" }}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Box
                                    component="img"
                                    src={apnimed("PMA01.svg")}
                                    alt="Patient mobile app mockups."
                                    sx={{ width: "100%", maxWidth: "500px" }}
                                />
                            </Box>
                        </GridItem>
                    </GridLayout>

                    {/* error */}
                    <GridLayout pt={12} alignItems="center">
                        <GridItem cols={{ xs: "1/13", md: "2/7", lg: "3/7" }}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Box
                                    component="img"
                                    src={apnimed("PMA02.svg")}
                                    alt="Error messages with recovery instructions."
                                    sx={{ width: "100%", maxWidth: "500px" }}
                                />
                            </Box>
                        </GridItem>
                        <GridItem cols={{ xs: "1/13", md: "7/12", lg: "7/11" }} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Typography variant="h3" sx={{ textTransform: "uppercase" }}>Prevent unconscious slips</Typography>
                            <Typography variant="body1">
                                Users make errors, which is not by any means their fault. Slips and mistakes are expected happen to anybody who interacts with a digital product, and it is our job to guide users overcome those scenarios. We identified errors that may happen during each tasks to design mitigations, construct helpful constraints and offer suggestions for users to troubleshoot edge cases.
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Typography variant="h6Bold">Intuitive Interaction</Typography>
                                <Typography variant="body1">
                                    Understand the complexity of interactions with the different levels of technical savviness and content literary lay users may have, then explore various ways to layout copy and visual elements in a digestible manner.
                                </Typography>
                            </Box>
                        </GridItem>
                    </GridLayout>

                    {/* data viz */}
                    <GridLayout pt={12} alignItems="center">
                        <GridItem order={{ xs: 2, md: 1, lg: 1 }} cols={{ xs: "1/13", md: "2/7", lg: "3/7" }} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Typography variant="h3" sx={{ textTransform: "uppercase" }}>Interpret Health Metrics</Typography>
                            <Typography variant="body1">
                                Data visualization helps users interpret complex set of data, detect outliers, and identify trends. Veranex collaborated with stakeholders to design health metrics graphs with the aim of improving patient adherence to treatment.
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Typography variant="h6Bold">Evaluating the Core Functionality</Typography>
                                <Typography variant="body1">
                                    Wireframing removes any bias on digital features by reducing visual emphasis, rather attracting attention purely by content layout. Low-fidelity wireframes also allows fast-paced iterations and exploration, thus flexible collaboration and alignment.
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Typography variant="h6Bold">Information Leads to Action</Typography>
                                <Typography variant="body1">
                                    As discovered during research stage, many patients do not know how exactly their sleep symptoms are improving since they do not have visibility to the data that is generated from monitoring or CPAP devices. Our team hypothesized that learning about improving as well as poor health metrics will motivate patient to adhere to therapy.
                                </Typography>
                            </Box>
                        </GridItem>
                        <GridItem order={{ xs: 1, md: 2, lg: 2 }} cols={{ xs: "1/13", md: "7/12", lg: "7/11" }}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Box
                                    component="img"
                                    src={apnimed("PMA03.svg")}
                                    alt="Various data visualizations that appear on the app."
                                    sx={{ width: "100%", maxWidth: "500px" }}
                                />
                            </Box>
                        </GridItem>
                    </GridLayout>

                    {/* copywriting */}
                    <GridLayout py={12} pb={16} alignItems="center">
                        <GridItem cols={{ xs: "1/13", md: "2/7", lg: "3/7" }}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Box
                                    component="img"
                                    src={apnimed("PMA04.svg")}
                                    alt="Error messages with recovery instructions."
                                    sx={{ width: "100%", maxWidth: "500px" }}
                                />
                            </Box>
                        </GridItem>
                        <GridItem cols={{ xs: "1/13", md: "7/12", lg: "7/11" }} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Typography variant="h3" sx={{ textTransform: "uppercase" }}>Say Less, Mean More</Typography>
                            <Typography variant="body1">
                                Explaining novel features can haphazardly produce an arduous essay, which lay users may have hard time understanding or even completely ignore. The Apnimed platform went through rounds of confirmatory research and copywriting iteration to reduce the app experience to its essence and increase user engagement.
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Typography variant="h6Bold">Digital Guidance</Typography>
                                <Typography variant="body1">
                                    Research participants have voiced a desire for an app with a pragmatic personality that can encourage and guide their health. It should not try to be their best friend or have a companion appearance.
                                </Typography>
                            </Box>
                        </GridItem>
                    </GridLayout>
                </GridItem>
            </GridLayout>

            {/* Design system */}
            <FourByFourLayout
                py={10}
                pb={4}
                px={0}
                gapY={6}
                leftOrder={{ xs: 2, md: 1, lg: 1 }}
                rightOrder={{ xs: 1, md: 2, lg: 2 }}
                rightCols={{ xs: "1/13", md: "7/13", lg: "7/13" }}
                left={
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, px: { xs: 3, md: 0, lg: 0 } }}>
                        <Typography variant="h1">Design System</Typography>
                        <Typography variant="body1">
                            My team created the entire design system using the atomic methodology, consisting primitive elements such as typography, colors, and number variables, up to compound components such as form fields and button groups.
                        </Typography>
                        <Typography variant="body1">
                            We thoroughly documented and collaborated with software engineers to align on rules and interaction behaviors to ensure the intended experience is successfully delivered to the end users.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
                            <Box
                                component="img"
                                src={apnimed("DS11.png")}
                                alt="Variable setups in Figma."
                                sx={{ width: "calc(60% - 24px)" }}
                            />
                            <Box
                                component="img"
                                src={apnimed("DS12.png")}
                                alt="Variable setups in Figma."
                                sx={{ width: "40%", height: "auto", objectFit: "contain" }}
                            />
                        </Box>
                    </Box>
                }
                right={
                    <Box sx={{ p: { xs: 3, md: 12, lg: 12 }, background: "#191F3F" }}>
                        <Box
                            component="img"
                            src={apnimed("DS2.png")}
                            alt="Design system documentation"
                            sx={{ width: "100%" }}
                        />
                    </Box>
                }
            />

            {/* Clinician web portal */}
            <GridLayout py={10} gapY={0} px={0}>
                <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}>
                    <Typography variant="h1" sx={{ color: C.clinicianText, height: "42px" }}>Clinician Web Portal</Typography>
                </GridItem>
                <GridItem
                    cols={"1/13"}
                    sx={{
                        background: C.clinicianBg,
                    }}
                >
                    {/* mockup */}
                    <GridLayout py={12} alignItems="center">
                        <GridItem cols={{ xs: "1/13", md: "2/12", lg: "3/11" }}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Box
                                    component="img"
                                    src={apnimed("CWP1.png")}
                                    alt="Clinician web portal mockups."
                                    sx={{ width: "100%" }}
                                />
                            </Box>
                        </GridItem>
                        <GridItem cols={{ xs: "1/13", md: "2/7", lg: "3/7" }} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h6Bold">
                                Effective Diagnosis and Treatment Decision
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}>
                                <Typography variant="body1Bold">Automated Workflows</Typography>
                                <Typography variant="body1">
                                    The Apnimed web portal provides a snapshot of patient progress by visualizing their sleep data by nightly, weekly, monthly and yearly reports, as well as customizable range. The portal is designed to have secondary tasks such as user management (patient, clinician, admin) as efficient as possible by templatizing fields or one-time-pre-populated.
                                </Typography>
                            </Box>
                        </GridItem>
                        <GridItem cols={{ xs: "1/13", md: "7/12", lg: "7/11" }} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h6Bold">
                                Versatile Configuration
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}>
                                <Typography variant="body1Bold">Use for Commercial, Clinical Trial and/or Research</Typography>
                                <Typography variant="body1">
                                    The Apnimed web portal makes it easy for users to configure the use case depending on the clinic. Super admin and Admin users can easily configure objects including surveys and patient milestone dates (i.e., baseline vs. run in dose). The assigned clinic then may operate their trial or commercial tasks to their needs.
                                </Typography>
                            </Box>
                        </GridItem>
                    </GridLayout>
                </GridItem>
            </GridLayout>



        </Box >
    );
};

export default ApnimedPage;

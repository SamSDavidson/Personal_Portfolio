const components = [
    {
        id: 1,
        title: "Component Security",
        description: "The design, procurement, testing, analysis of components integrated into larger systems",
        image: "icons/icon_component_security.png",
        content: [
            { title: "Data Management Lifecycle", link: "https://drive.google.com/file/d/1kykE4R8QvLgV6nW009GF1LaAtZmLv3VE/view?usp=drive_link" }
        ]
    },
    {
        id: 2,
        title: "Connection Security",
        description: "The security of the connections between components, including both physical and logical connections.",
        image: 'icons/icon_connection_security.png',
        content: [
            { title: "Packet Tracer Practice", link: "https://docs.google.com/document/d/1bhWfK2gJdrMUsmjvL4p6MxhZepCMiicJ/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "IPv4 Subnetting", link: "https://drive.google.com/file/d/1i_aCJH3VgfymKMwc0gvnDUAB2x8c92id/view?usp=drive_link" },
            { title: "IPv6 Essential Reference", link: "https://drive.google.com/file/d/19DxstEGCE0RINXt1EP3RFwEiUBgtEkIV/view?usp=drive_link" }]
    },
    {
        id: 3,
        title: "Data Security",
        description: "The security of data, demonstrating how data is protected and maintained as identified throughout the phases of the security triad: confidentiality, integrity, and availability.",
        image: "icons/icons_data_security.png",
        content: [
            { title: "Hospital Case Study", link: "https://docs.google.com/document/d/1Punv5W982MqshBmKFocovF5Nbwa8xZes/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Summary of Privacy Laws", link: "https://docs.google.com/document/d/1zMjB3-un3oQD9KEbCKNMUvQ_yeRh3sXo/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Data Classifications", link: "https://docs.google.com/spreadsheets/d/1n0cx2XvbO1cwbwe2iw4fin5VopLUvEWT/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" }
        ]
    },
    {
        id: 4,
        title: "Human Security",
        description: "Protecting individuals’ data and privacy in the context of organizations and their personal lives, in addition to the study of human behavior as it relates to cybersecurity.",
        image: "icons/icon_human_security.png",
        content: [
            { title: "Security Decision Aid", link: "https://docs.google.com/document/d/1maDopr4GjlKvYxe04URXvYu6_Af6ACwj/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Privacy Protection Case Study", link: "https://docs.google.com/document/d/1Vb5EeK1Rs5ZTCDJchiliAUPbu2QlUvM2/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Role-Based Access Control Matrix", link: "https://docs.google.com/document/d/18Cw9clLuby1VqtPBHkFq9zKKlBh5S400/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Thinking about Thinking", link: "https://drive.google.com/file/d/10TsbWOhRv7WQHjR3loMIekf62CYxS8mT/view?usp=drive_link" }
        ]
    },
    {
        id: 5,
        title: "Organizational Security",
        description: "Protecting organizations from cybersecurity threats and managing risk to support the successful accomplishing of the organization’s mission. ",
        image: "icons/icons_organizational_security.png",
        content: [
            { title: "A Common Lanaguage for Computer Security Incidents", link: "https://drive.google.com/file/d/1oRoHetxzYkNheUvG3h8DO5KkbfPM9KmT/view?usp=drive_link" },
            { title: "Policy Update", link: "https://docs.google.com/document/d/11sWQCgg6HnojC5blOLrkIc5U-N7ot4GO/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Business Impact Analysis", link: "https://docs.google.com/document/d/1HRBSmFG8NFuTZNpbNjk2SfkalQfYr6MI/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Risk Register", link: "https://docs.google.com/spreadsheets/d/1v4LpsBNMS_S17QygQl_jOLy0Ymm3riIR/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Risk Register Report", link: "https://docs.google.com/document/d/1QDSjt158g5j8xQ41D4ZLhJg5GYXxUmLO/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Evaluation of Network Technologies", link: "https://docs.google.com/document/d/13W81cPnV6onWRxYorZW82kSElvUyEt8-/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Seven Ways to Apply the Cyber Kill Chain", link: "https://drive.google.com/file/d/1YX7sDyWwZ-cTGe62VLKx6-WV8dpR8XFB/view?usp=drive_link" },
            { title: "Value of Cyber Investments", link: "https://drive.google.com/file/d/1ybKN_Dz0bTJoYJCu6p3CbFAqSKdSEzFe/view?usp=drive_link" }
        ]
    },
    {
        id: 6,
        title: "Societal Security",
        description: "Aspects of cybersecurity that broadly impact society as a whole, for better or for worse. ",
        image: "icons/icon_societal_security.png",
        content: [{ title: "Nothing here... Yet!", link: "" }]
    },
    {
        id: 7,
        title: "Software Security",
        description: "The development and use of software that reliably preserves the security properties of the information and systems it protects. ",
        image: "icons/icon_software_security.png",
        content: [
            { title: "OWASP Top Ten Risks", link: "https://owasp.org/www-project-top-ten/" },
            { title: "OWASP Top Ten Proactive Controls", link: "https://owasp.org/www-project-proactive-controls" },
            { title: "Common Vulnerabilities and Exposures (CVE)", link: "https://cve.mitre.org/cve/identifiers/index.html" },
            { title: "Common Weakness Enumeration (CWE)", link: "https://cwe.mitre.org/index.html" }]
    },
    {
        id: 8,
        title: "System Security",
        description: "Security aspects of systems composed of components and connections, and the use of software.",
        image: "icons/icons_system_security.png",
        content: [
            { title: "CIS Controls v7", link: "https://drive.google.com/file/d/1HIhk268-5rzOrNHnTLRGyyyslZ-we0cV/view?usp=drive_link" },
            { title: "Department of Housing and Urban Development SSP", link: "https://docs.google.com/document/d/1KJenihH_MeG6ByIdlojVheFoR2mDna4_/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "FedRAMP SSP Template", link: "https://docs.google.com/document/d/18BzS16rk4Vru2JXyfztUBgNCc7-OXkJS/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "NIST 800-18", link: "https://drive.google.com/file/d/1d2b90vC8P80Sy_7kwiaWZBQ8tjTvK5G6/view?usp=drive_link" },
            { title: "NIST Security Plan", link: "https://docs.google.com/document/d/15Lvp3DCPK91gzRIQqt509PfcCxjEzXtW/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" },
            { title: "Windows Policy Settings", link: "https://docs.google.com/spreadsheets/d/1TK62oLbhP3D2U9hVJ3fg__MN8MVlW410/edit?usp=drive_link&ouid=118224089911625103538&rtpof=true&sd=true" }
        ]
    },
];
export default components;

/* Backup
                <li class="h3 m-5">
                    {section.title}
                </li>
                <a href={section.link}
                    ><button
                        class=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                        >View</button
                    ></a
                >
                */
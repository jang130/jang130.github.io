export type Language = 'en' | 'pl';

export const content = {
    en: {
        header: {
            nav: {
                about: "About",
                projects: "Projects",
                offer: "Offer",
                contact: "Contact",
            }
        },
        hero: {
            headline: "Bridging the Physical and Digital Worlds",
            subheadline: "Rapid Prototyping, Embedded Systems & Hardware Hacking",
        },
        about: {
            title: "About Me",
            description: "I am a passionate Maker with deep expertise in bridging hardware and software. My background spans from AR/VR startups to designing complex control systems for rollercoasters and autonomous drones. I thrive on solving physical problems with digital solutions.",
            techStack: ["Python", "C++", "Embedded Linux", "ROS", "VR/AR", "PCB Design"],
        },
        projects: {
            title: "Projects",
            items: [
                {
                    title: "VR Rollercoaster Tracker",
                    tags: ["IoT", "VR", "C++"],
                    description: "High-frequency position tracking system for synchronizing VR headsets with physical rollercoaster movements."
                },
                {
                    title: "Drone Autonomy Module",
                    tags: ["Robotics", "ROS", "Python"],
                    description: "Onboard computer module capable of SLAM and obstacle avoidance for indoor industrial drones."
                },
                {
                    title: "Industrial IoT Gateway",
                    tags: ["Embedded", "Linux", "MQTT"],
                    description: "Robust edge gateway for collecting and buffering sensor data in harsh industrial environments."
                },
            ]
        },
        offer: {
            title: "Services",
            items: [
                { title: "Rapid Prototyping (R&D)", description: "Turning rough ideas into functional hardware/software MVPs in record time." },
                { title: "Embedded Software", description: "Performance-critical firmware in C++ and Python for microcontrollers and Linux SBCs." },
                { title: "Hardware Integration", description: "Seamless sensors, actuators, and communication protocols integration." },
            ]
        },
        contact: {
            title: "Contact",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                submit: "Send Message",
            },
            footer: "Built by MakerLabs © 2026",
        }
    },
    pl: {
        header: {
            nav: {
                about: "O mnie",
                projects: "Projekty",
                offer: "Oferta",
                contact: "Kontakt",
            }
        },
        hero: {
            headline: "Łączymy Świat Fizyczny z Cyfrowym",
            subheadline: "Szybkie Prototypowanie, Systemy Wbudowane i Hardware Hacking",
        },
        about: {
            title: "O mnie",
            description: "Jestem pasjonatem tworzenia, łączącym hardware z softwarem. Moje doświadczenie obejmuje startupy AR/VR, systemy sterowania rollercoasterami oraz drony autonomiczne. Uwielbiam rozwiązywać fizyczne problemy za pomocą cyfrowych rozwiązań.",
            techStack: ["Python", "C++", "Embedded Linux", "ROS", "VR/AR", "Projektowanie PCB"],
        },
        projects: {
            title: "Projekty",
            items: [
                {
                    title: "Tracker VR do Rollercoasterów",
                    tags: ["IoT", "VR", "C++"],
                    description: "System śledzenia pozycji o wysokiej częstotliwości do synchronizacji gogli VR z ruchem wagonika."
                },
                {
                    title: "Moduł Autonomii Drona",
                    tags: ["Robotyka", "ROS", "Python"],
                    description: "Komputer pokładowy realizujący SLAM i unikanie przeszkód dla dronów przemysłowych."
                },
                {
                    title: "Bramka IoT Przemysłowa",
                    tags: ["Embedded", "Linux", "MQTT"],
                    description: "Wytrzymała bramka edge do zbierania i buforowania danych z czujników w trudnych warunkach."
                },
            ]
        },
        offer: {
            title: "Oferta",
            items: [
                { title: "Szybkie Prototypowanie (R&D)", description: "Przekształcanie pomysłów w działające prototypy hardware/software w rekordowym czasie." },
                { title: "Oprogramowanie Wbudowane", description: "Wydajne firmware w C++ i Python dla mikrokontrolerów i systemów Linux." },
                { title: "Integracja Hardware", description: "Bezproblemowa integracja czujników, aktuatorów i protokołów komunikacyjnych." },
            ]
        },
        contact: {
            title: "Kontakt",
            form: {
                name: "Imię",
                email: "Email",
                message: "Wiadomość",
                submit: "Wyślij Wiadomość",
            },
            footer: "Zbudowane przez MakerLabs © 2026",
        }
    }
};

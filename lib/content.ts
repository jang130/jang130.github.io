
export type Content = typeof content;
export type Language = 'pl' | 'en';

export const content = {
    header: {
        nav: {
            about: { pl: "O mnie", en: "About Me" },
            projects: { pl: "Projekty", en: "Projects" },
            offer: { pl: "Oferta", en: "Services" },
            contact: { pl: "Kontakt", en: "Contact" },
            toggle: { pl: "EN", en: "PL" }
        }
    },
    hero: {
        headline: {
            pl: "Inżynieria R&D na styku światów. Tam, gdzie software spotyka hardware.",
            en: "R&D Engineering at the Crossroads. Where Software Meets Hardware."
        },
        subheadline: {
            pl: "Rapid Prototyping | Embedded Systems | Hardware Hacking.\nPrzekuwam szalone pomysły w działające urządzenia szybciej, niż korporacje zwołują spotkanie.",
            en: "Rapid Prototyping | Embedded Systems | Hardware Hacking.\nTurning crazy ideas into functional devices faster than corporations can schedule a meeting."
        },
        cta: {
            about: { pl: "O mnie", en: "About Me" },
            projects: { pl: "Projekty", en: "Projects" },
            offer: { pl: "Oferta", en: "Services" },
            contact: { pl: "Kontakt", en: "Contact" }
        }
    },
    about: {
        title: { pl: "Twój Partner od Zadań Specjalnych", en: "Your Special Ops Partner" },
        description: {
            pl: "Większość inżynierów staje w pewnym momencie przed wyborem: albo świat kodu (Software), albo świat elektroniki (Hardware). Ja postanowiłem połączyć obie te ścieżki.\n\nSpecjalizuję się w Integracji Systemów. Buduję mosty między tym co fizyczne, a tym co cyfrowe. Sprawiam, że „głuche” z natury czujniki, silniki i maszyny zaczynają rozumieć się z serwerami, sztuczną inteligencją i – co najważniejsze – z człowiekiem.\n\nMoja pasja do technologii bardzo szybko zamieniła się w zawód. Pierwsze komercyjne wdrożenia realizowałem już w 2018 roku, mając zaledwie 16 lat. Zamiast czekać na teorię, zdobywałem wiedzę w praktyce – od lutowania i Hardware Hackingu, przez zaawansowaną robotykę i systemy VR, aż po współczesne IoT i technologie chmurowe.\n\nMoja misja jest prosta: dostarczam rozwiązania tam, gdzie gotowe produkty nie istnieją lub nie spełniają wymagań. W MakerLabs nie uznajemy słowa „się nie da”. Przekuwam Twoją wizję w działający prototyp szybciej, niż myślisz.",
            en: "Most engineers eventually face a choice: the world of code (Software) or the world of electronics (Hardware). I decided to merge both paths.\n\nI specialize in System Integration. I build bridges between the physical and the digital. I make naturally \"deaf\" sensors, motors, and machines understand servers, artificial intelligence, and – most importantly – humans.\n\nMy passion for technology quickly turned into a profession. I completed my first commercial deployments in 2018, at just 16 years old. Instead of waiting for theory, I gained knowledge through practice – from soldering and Hardware Hacking, through advanced robotics and VR systems, to modern IoT and cloud technologies.\n\nMy mission is simple: I deliver solutions where off-the-shelf products don't exist or don't meet requirements. At MakerLabs, we don't believe in \"it can't be done.\" I turn your vision into a working prototype faster than you think."
        },
        techStackTitle: { pl: "Narzędzia", en: "Tech Stack" },
        techStack: [
            { category: "Languages", items: ["Python (Expert)", "C++", "Bash", "JavaScript/TypeScript"] },
            { category: "Embedded", items: ["Raspberry Pi", "ESP32", "STM32", "Arduino", "Yocto Project"] },
            { category: "Hardware", items: ["PCB Design (KiCad/Eagle)", "3D Printing", "Soldering & Rework"] },
            { category: "Software & OS", items: ["Linux (Debian/Arch)", "ROS", "Docker", "Git"] },
            { category: "Protocols", items: ["MQTT", "HTTP/REST", "UART", "I2C", "SPI", "Modbus"] }
        ]
    },
    offer: {
        title: { pl: "Specjalizacja: Niemożliwe", en: "Specialization: Impossible" },
        tabs: {
            b2b: { pl: "Oferta dla Biznesu (B2B)", en: "Business (B2B)" },
            b2c: { pl: "Oferta dla Ciebie (B2C)", en: "Consumer (B2C)" }
        },
        b2bDescription: {
            pl: "Innowacje, optymalizacja i „brudna robota” inżynieryjna, której nikt inny nie chce dotknąć. Rozwiązuję problemy sprzętowe tam, gdzie software nie wystarcza.",
            en: "Innovation, optimization, and the \"dirty work\" of engineering that no one else wants to touch. I solve hardware problems where software isn't enough."
        },
        b2cDescription: {
            pl: "Realizacja pasji, prywatność i naprawianie świata przedmiotów. Buduję to, czego nie kupisz w sklepie.",
            en: "Realizing passions, privacy, and fixing the world of objects. I build what you can't buy in stores."
        },
        b2bCards: [
            {
                title: { pl: "Rapid Prototyping & MVP (Od Power Pointa do Produktu)", en: "Rapid Prototyping & MVP (From PPT to Product)" },
                description: {
                    pl: "Macie innowacyjny pomysł, ale boicie się utopić budżet w masowej produkcji bez weryfikacji? Dostarczam w pełni funkcjonalne prototypy (PoC), które pozwalają przetestować rynek i przekonać inwestorów, zanim wydacie miliony na formy wtryskowe.",
                    en: "Have an innovative idea but afraid to sink budget into mass production without verification? I deliver fully functional prototypes (PoC) that allow you to test the market and convince investors before spending millions on injection molds."
                },
                examples: [
                    { pl: "Startup Med-Tech: Opaska monitorująca (2 sztuki prototypu w obudowie SLA)", en: "Med-Tech Startup: Vital signs tracker (2 prototype units in SLA enclosure)" },
                    { pl: "Logistyka: Inteligentny Tracker (wstrząsy, temp, LTE-M) do kontenerów", en: "Logistics: Smart Container Tracker (shock, temp, LTE-M)" }
                ],
                benefit: { pl: "Weryfikacja założeń (PoC) za ułamek ceny wdrożenia.", en: "Proof of Concept at a fraction of deployment cost." }
            },
            {
                title: { pl: "Przemysł 4.0 & Retrofitting (Cyfryzacja bez wymiany)", en: "Industry 4.0 & Retrofitting (Digitization without Replacement)" },
                description: {
                    pl: "Twój park maszynowy to solidna mechanika, ale cyfrowo tkwi w latach 90.? Nie musisz kupować nowych maszyn. Instaluję \"czarne skrzynki\" (IoT), które wyciągają dane z pracujących urządzeń w sposób bezinwazyjny.",
                    en: "Your machinery has solid mechanics but is digitally stuck in the 90s? No need to buy new machines. I install IoT \"black boxes\" that extract data from running equipment non-invasively."
                },
                examples: [
                    { pl: "Predictive Maintenance: Bezprzewodowe czujniki wibracji silników", en: "Predictive Maintenance: Wireless motor vibration sensors" },
                    { pl: "Cyfrowy licznik dla analogowej prasy (OEE na żywo)", en: "Digital counter for analog press (Live OEE)" }
                ],
                benefit: { pl: "Pełna analityka produkcji na starym sprzęcie.", en: "Full production analytics on legacy equipment." }
            },
            {
                title: { pl: "Reverse Engineering & Legacy Support", en: "Reverse Engineering & Legacy Support" },
                description: {
                    pl: "Producent maszyny zbankrutował, sterownik padł, a dokumentacji brak? A może musisz zintegrować zamknięty system z nowym ERP? Wchodzę tam, gdzie inni widzą „elektrośmieci”. Analizuję protokoły i buduję mosty.",
                    en: "Machine manufacturer went bankrupt, controller died, documentation missing? Or need to integrate a closed system with a new ERP? I go where others see \"e-waste\". I analyze protocols and build bridges."
                },
                examples: [
                    { pl: "Odtworzenie spalonego sterownika maszyny produkcyjnej", en: "Recreation of a burnt production machine controller" },
                    { pl: "Protocol Gateway: Tłumaczenie starego pieca na MQTT/Modbus", en: "Protocol Gateway: Translating old furnace to MQTT/Modbus" }
                ],
                benefit: { pl: "Ciągłość produkcji i uniezależnienie od monopolu.", en: "Production continuity and independence from monopoly." }
            },
            {
                title: { pl: "Dedykowane Rozwiązania Hardware (Custom R&D)", en: "Dedicated Hardware Solutions (Custom R&D)" },
                description: {
                    pl: "Potrzebujesz urządzenia pomiarowego lub sterownika, którego nie ma w katalogach dystrybutorów? Projektuję elektronikę od zera pod specyficzne, nietypowe wymagania Twojego procesu.",
                    en: "Need a measurement device or controller not found in catalogs? I design electronics from scratch for the specific, unusual requirements of your process."
                },
                examples: [
                    { pl: "Multisensory (Sensor Fusion): Nacisk, wibracje, wizja w jednym", en: "Multisensors (Sensor Fusion): Pressure, vibration, vision in one" },
                    { pl: "Custom HMI: Dedykowane panele operatorskie", en: "Custom HMI: Dedicated operator panels" }
                ],
                benefit: { pl: "Rozwiązanie „szyte na miarę” idealnie pod proces.", en: "\"Tailor-made\" solution fitting the process perfectly." }
            }
        ],
        b2cCards: [
            {
                title: { pl: "Customowe Urządzenia (Only for You)", en: "Custom Devices (Only for You)" },
                description: {
                    pl: "Masz wizję gadżetu, który wydaje się niemożliwy? A może rynkowe rozwiązania są brzydkie lub ograniczone? Zbuduję sprzęt, który istnieje tylko w jednym egzemplarzu – Twoim.",
                    en: "Have a vision for a seemingly impossible gadget? Or market solutions are ugly/limited? I'll build gear that exists in only one copy – yours."
                },
                examples: [
                    { pl: "Bezpieczny portfel kryptowalut (Cold Wallet) offline", en: "Secure offline crypto wallet (Cold Wallet)" },
                    { pl: "Dedykowane kontrolery do streamingu/symulatorów", en: "Dedicated controllers for streaming/simulators" }
                ]
            },
            {
                title: { pl: "Smart Home & Drugie Życie Klasyków", en: "Smart Home & Second Life of Classics" },
                description: {
                    pl: "Kochasz swój stary sprzęt za jakość wykonania, ale brakuje mu nowoczesnych funkcji? A może chcesz, aby Twój dom był \"Smart\", ale na Twoich zasadach?",
                    en: "Love your old gear's build quality but miss modern features? Or want a \"Smart\" home on your own terms?"
                },
                examples: [
                    { pl: "Audio Hi-Fi z lat 90. z obsługą Spotify/AirPlay", en: "90s Hi-Fi Audio with Spotify/AirPlay support" },
                    { pl: "System Follow Me: Światło i muzyka podążające za Tobą", en: "Follow Me System: Light and music following you" }
                ]
            },
            {
                title: { pl: "Modyfikacje i Ulepszenia (Hardware Hacking)", en: "Mods & Upgrades (Hardware Hacking)" },
                description: {
                    pl: "Twój sprzęt mógłby działać lepiej, ale producent poszedł na skróty? A może coś cennego się zepsuło? Wkraczam tam, gdzie kończy się gwarancja.",
                    en: "Your gear could work better but the manufacturer cut corners? or something valuable broke? I step in where the warranty ends."
                },
                examples: [
                    { pl: "Konwersja na zasilanie akumulatorowe (USB-C)", en: "Conversion to battery power (USB-C)" },
                    { pl: "Ratowanie elektroniki nienaprawialnej (Reverse Eng.)", en: "Rescuing unrepairable electronics (Reverse Eng.)" }
                ]
            },
            {
                title: { pl: "Hobby, Cosplay & Art", en: "Hobby, Cosplay & Art" },
                description: {
                    pl: "Tworzysz kostiumy, makiety lub instalacje artystyczne? Ja nie szyję strojów – ja sprawiam, że ożywają technologią.",
                    en: "Creating costumes, dioramas, or art installations? I don't sew costumes – I make them come alive with technology."
                },
                examples: [
                    { pl: "Mechanika (serwa) i modulatory głosu do Cosplayu", en: "Mechanics (servos) and voice modulators for Cosplay" },
                    { pl: "HUD: Wyświetlacz przezierny do hełmu z detekcją obiektów", en: "HUD: Heads-up display for helmets with object detection" }
                ]
            }
        ]
    },
    projects: {
        title: { pl: "Wybrane Projekty", en: "Selected Projects" },
        items: [
            {
                title: { pl: "VR Motion Sync", en: "VR Motion Sync" },
                subtitle: { pl: "Eliminacja Choroby Lokomocyjnej", en: "Eliminating Motion Sickness" },
                category: "Embedded / VR / Sensor Fusion",
                description: {
                    pl: "System synchronizacji gogli VR z fizycznym wagonikiem kolejki. Dedykowany tracker przesyła dane o pozycji i przeciążeniach do silnika gry w czasie rzeczywistym, eliminując dyskomfort użytkownika.",
                    en: "VR headset synchronization system with a physical rollercoaster cart. A dedicated tracker transmits position and G-force data to the game engine in real-time, eliminating user discomfort."
                },
                techStack: ["IMU Sensors", "C++", "Wireless Comm", "VR SDK"]
            },
            {
                title: { pl: "Przemysł 4.0: Stanowisko PVD", en: "Industry 4.0: PVD Station" },
                subtitle: { pl: "Cyfryzacja i Automatyzacja", en: "Digitization & Automation" },
                category: "Industrial Automation / Reverse Engineering",
                description: {
                    pl: "Inżynieria wsteczna i modernizacja laboratoryjnego stanowiska PVD. Integracja elektryki, pneumatyki i próżni w jeden system sterowania z panelem HMI i obsługą Modbus.",
                    en: "Reverse engineering and modernization of a laboratory PVD station. Integration of electronics, pneumatics, and vacuum systems into a single control system with HMI and Modbus support."
                },
                techStack: ["PLC", "Custom PCB", "Vacuum Systems", "Modbus RTU"]
            },
            {
                title: { pl: "Autonomiczny Robot FRC", en: "Autonomous FRC Robot" },
                subtitle: { pl: "Team RaByte", en: "Team RaByte" },
                category: "Advanced Robotics / Computer Vision",
                description: {
                    pl: "63-kg robot autonomiczny na mistrzostwa świata. System wizyjny do celowania, autonomia w nawigacji oraz zaawansowana mechanika wspinaczkowa.",
                    en: "63kg autonomous robot for world championships. Computer vision aiming system, autonomous navigation, and advanced climbing mechanics."
                },
                techStack: ["Java/C++", "OpenCV", "PID Control", "BLDC Motors"]
            },
            {
                title: { pl: "Poduszkowiec Rozpoznawczy", en: "Reconnaissance Hovercraft" },
                subtitle: { pl: "Mobilna Stacja Badawcza", en: "Mobile Research Station" },
                category: "R&D / Telemetry",
                description: {
                    pl: "Pojazd napędzany turbinami EDF z ramieniem robotycznym i sensorami środowiskowymi. Zdalne sterowanie z podglądem wideo i telemetrią dalekiego zasięgu.",
                    en: "EDF-driven vehicle with a robotic arm and environmental sensors. Remote control with video feed and long-range telemetry."
                },
                techStack: ["RF Comm", "EDF", "Sensors", "Custom Controller"]
            },
            {
                title: { pl: "Wcześniejsze Projekty & Hobby", en: "Early Projects & Hobby" },
                subtitle: { pl: "Początki", en: "The Beginnings" },
                category: "Makers / DIY",
                description: {
                    pl: "Budowa własnych drukarek 3D i frezarek CNC oraz stacja pogodowa IoT integrująca się z API serwisów meteorologicznych.",
                    en: "Building custom 3D printers and CNC milling machines, and an IoT weather station integrating with meteorological APIs."
                },
                techStack: ["3D Printing", "CNC", "IoT", "API"]
            }

        ]
    },
    contact: {
        headline: { pl: "Masz pomysł na urządzenie? Zbudujmy to.", en: "Have an idea for a device? Let's build it." },
        subheadline: { pl: "Jestem dostępny do współpracy projektowej (B2B) oraz konsultacji R&D.", en: "Available for project collaboration (B2B) and R&D consulting." },
        email: "adm.moszczynski@gmail.com",
        phone: "+48 508 431 229",
        location: { pl: "Warszawa, Polska", en: "Warsaw, Poland" },
        socials: {
            linkedin: "LinkedIn Profile"
        },
        copyright: "Built by MakerLabs © 2026."
    }
};

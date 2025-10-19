export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://www.aejt.in',
    title: 'Teja',
    subtitle: 'Space of Teja Narayana',
    description: 'Welcome to the world of Teja. Let\'s get to know each other',
    image: {
        src: '/tj.jpg',
        alt: 'Space of Teja Narayana'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/narayana-teja/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/aejtn'
        },
        {
            text: 'Email',
            href: 'mailto:t@aejt.in'
        }
    ],
    hero: {
        title: 'Hello, Welcome to my space 🙏',
        text: "I'm **Teja Narayana**, currently a Product Analyst Intern at <a href='https://www.gxco.org'>GXCO</a> , dedicated to the realms of product management, data analytics and artificial intelligence. I believe the best products are built with total empathy. My work as a Product Analyst Intern is a continuous exercise in shifting perspective: I dive into the technical code to find innovative solutions, but I first place myself squarely in the end-user's mind to understand the true need. This human-factored, ergonomic, and user-centric philosophy ensures that the solutions I design from OOD to final feature are not just technically correct, but genuinely provide the best experience for the client, the developer, and the business.",
        image: {
            src: '/hero.jpeg',
            alt: 'Picture of Teja'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

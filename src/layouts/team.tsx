import React, { ReactNode } from 'react';
import { Trans } from '@lingui/macro';
import { graphql, useStaticQuery } from 'gatsby';
import { targetBlank } from '../helpers';

export type AuthorProps = {
  name: string;
  role: string;
  description: ReactNode;
  linkedIn: string;
  mail: string;
  twitter?: string;
  article?: string;
};

export const getWholeTeam = (
  prefix: string
): {
  [key: string]: AuthorProps;
} => ({
  timo: {
    name: 'Timo Horstschaefer',
    role: 'Co-Founder & CTO',
    description: (
      <Trans>
        Coding since high school, Timo got an award for the best master thesis in computer science
        and worked one year as a computer engineer in robotics.
      </Trans>
    ),
    twitter: 'https://twitter.com/thrstschfr',
    linkedIn: 'https://www.linkedin.com/in/timohorstschaefer/',
    mail: 'timo@ledgy.com',
  },
  yoko: {
    name: 'Yoko Spirig',
    role: 'Co-Founder & CEO',
    description: (
      <Trans>
        Yoko studied Physics at ETH Zurich, the University of Oxford and CERN. She was also project
        lead of Swissloop, helping to build the first Hyperloop pod in Switzerland.
      </Trans>
    ),
    twitter: 'https://twitter.com/YokoSpirig',
    linkedIn: 'https://www.linkedin.com/in/yokospirig/',
    mail: 'yoko@ledgy.com',
    article: 'yoko-spirig',
  },
  ben: {
    name: 'Ben Brandt',
    role: 'Co-Founder & CPO',
    description: (
      <Trans>
        Ben has extensive experience in project management and worked for two years as a software
        engineer in an ETH Zurich’s research group.
      </Trans>
    ),
    twitter: 'https://twitter.com/bebinoy',
    linkedIn: 'https://www.linkedin.com/in/ben-elias-brandt-680a95110/',
    mail: 'ben@ledgy.com',
  },
  oriol: {
    name: 'Oriol Vidal-Cortes',
    role: 'Software Engineer & Mad Scientist',
    description: (
      <Trans>
        Oriol was pursuing a PhD in biotechnology when he came to realize his passion lay in
        computers. He enjoys writing and playing with software more than he enjoys sleeping.
      </Trans>
    ),
    twitter: 'https://twitter.com/ovcOS89',
    linkedIn: 'https://www.linkedin.com/in/oriol-vidal-cortes-37584080/',
    mail: 'oriol@ledgy.com',
    article: 'oriol-vidal-cortes',
  },
  jules: {
    name: 'Jules Henze',
    role: 'Software Engineer & Paragliding Pilot',
    description: (
      <Trans>
        During his studies in engineering as an excellent scholar at ETH Zurich, Jules started
        working as a software developer building web applications.
      </Trans>
    ),
    twitter: 'https://twitter.com/HenzeJules',
    linkedIn: 'https://ch.linkedin.com/in/jules-henze',
    mail: 'jules@ledgy.com',
  },
  marius: {
    name: 'Marius Colacioiu',
    role: 'Software Engineer & Trail Runner',
    description: (
      <Trans>
        Marius has a background in computer science, graduated from Milan University and worked as a
        lead developer at XING and On.
      </Trans>
    ),
    twitter: 'https://twitter.com/colmarius',
    linkedIn: 'https://www.linkedin.com/in/mariuscolacioiu',
    mail: 'marius@ledgy.com',
  },
  jahlela: {
    name: 'Jahlela Hasle',
    role: 'Software Engineer & Neuroscientist',
    description: (
      <Trans>
        Jahlela has a background in cognitive neuroscience, graduated from UC Berkeley, and founded
        a few startups before switching to full-time software engineering.
      </Trans>
    ),
    twitter: 'https://twitter.com/jahlela',
    linkedIn: 'https://www.linkedin.com/in/jahlelahasle',
    mail: 'jahlela@ledgy.com',
    article: 'jahlela-hasle',
  },
  spela: {
    name: 'Spela Prijon',
    role: 'Head of Customer Experience & Sailor',
    description: (
      <Trans>
        Spela found her passion for business development through her experiences co-founding a
        startup, and as an early employee at a SaaS company. She holds a Waldorf teaching diploma,
        and a Master’s degree in Pharmacy.
      </Trans>
    ),
    twitter: 'https://twitter.com/spelzi',
    linkedIn: 'https://www.linkedin.com/in/spelaprijon',
    mail: 'spela@ledgy.com',
  },
  armon: {
    name: 'Armon Bättig',
    role: 'Head of Biz Dev & Michelin Chef',
    description: (
      <Trans>
        Worked 5 years as a chef before he majored in food engineering and getting a masters degree
        in Management, Technology, and Economics at ETH Zurich and HKUST.
      </Trans>
    ),
    twitter: 'https://twitter.com/ArmonBattig',
    linkedIn: 'https://www.linkedin.com/in/armon-baettig',
    mail: 'armon@ledgy.com',
    article: 'armon-baettig',
  },
  karime: {
    name: 'Karime Andere',
    role: 'Biz Dev & Olympic Swimmer',
    description: (
      <Trans>
        With experience in consumer research and strategic planning, Karime is finishing her
        Master’s degree in Management with an orientation in Marketing at HEC Lausanne.
      </Trans>
    ),
    linkedIn: 'https://www.linkedin.com/in/karimeandere/',
    mail: 'karime@ledgy.com',
  },
  tamas: {
    name: 'Tamas Varkonyi',
    role: 'Operations, Finance & Home Baker',
    description: (
      <Trans>
        After graduating from the University of Cambridge, Tamas worked at PwC and co-founded his
        own startup. He is responsible for smooth operations at Ledgy, with special attention to
        finance, HR and legal matters.
      </Trans>
    ),
    linkedIn: 'https://www.linkedin.com/in/tamasvarkonyi/',
    mail: 'tamas@ledgy.com',
  },
  ermias: {
    name: 'Ermias Giovanni',
    role: 'Head of Marketing & Stargazer',
    description: (
      <Trans>
        Ermias has a background in business administration and more than 10 years of marketing
        experience. His mission is to build the demand-generation engine that drives Ledgy’s growth.
      </Trans>
    ),
    linkedIn: 'https://www.linkedin.com/in/ermiasgio/',
    mail: 'ermias@ledgy.com',
  },
  mariana: {
    name: 'Mariana Cely',
    role: 'Engineering Trainee & Future Hacker',
    description: (
      <Trans>
        Mariana graduated from ETH Zurich and EPFL in Mathematics. She has started a traineeship in
        software engineering to soon become a Junior Developer.
      </Trans>
    ),
    linkedIn: 'https://www.linkedin.com/in/mariana-cely-6491741ba/',
    mail: 'mariana@ledgy.com',
    article: 'mariana-cely',
  },
  xiao: {
    name: 'Xiao Sun',
    role: 'Engineering Trainee & Lifelong Learner',
    description: (
      <Trans>
        Xiao just graduated from ETH Zurich in transport engineering. She has years of coding
        experience and is now happily diving into the world of web development.
      </Trans>
    ),
    linkedIn: 'https://www.linkedin.com/in/xiao-s-a54554147/',
    mail: 'xiao@ledgy.com',
    article: 'xiao-sun',
  },
  marina: {
    name: 'Marina Moric',
    role: 'Product Manager Trainee & Yoga Teacher',
    description: (
      <Trans>
        After finishing her PhD in neuroscience, Marina decided to focus on her passion for
        technology. Her goal is to become Ledgy’s product management Jedi.
      </Trans>
    ),
    linkedIn: 'https://www.linkedin.com/in/marinamoric/',
    mail: 'marina@ledgy.com',
  },
  luna: {
    name: 'Luna',
    role: 'Rocket & Trailblazer',
    description: (
      <Trans>
        Luna is a model of the Saturn V rocket, which has been to space 13 times, and holds the
        record for largest payload to low Earth orbit. She’s still under construction —{' '}
        <a href={`${prefix}/jobs/`} {...targetBlank}>
          Ready to help?
        </a>
      </Trans>
    ),
    twitter: 'https://twitter.com/hashtag/saturnv',
    linkedIn: 'https://www.linkedin.com/company/nasa',
    mail: 'contact@ledgy.com',
  },
});

export const TeamFragment = graphql`
  fragment TeamFragment on Query {
    ben: imageSharp(fluid: { originalName: { regex: "/ben.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    yoko: imageSharp(fluid: { originalName: { regex: "/yoko.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    timo: imageSharp(fluid: { originalName: { regex: "/timo.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    oriol: imageSharp(fluid: { originalName: { regex: "/uri.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    jules: imageSharp(fluid: { originalName: { regex: "/jules.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    marius: imageSharp(fluid: { originalName: { regex: "/marius.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    jahlela: imageSharp(fluid: { originalName: { regex: "/jahlela.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    spela: imageSharp(fluid: { originalName: { regex: "/spela.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    armon: imageSharp(fluid: { originalName: { regex: "/armon.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    karime: imageSharp(fluid: { originalName: { regex: "/karime.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    tamas: imageSharp(fluid: { originalName: { regex: "/tamas.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    ermias: imageSharp(fluid: { originalName: { regex: "/ermias.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    mariana: imageSharp(fluid: { originalName: { regex: "/mariana.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    xiao: imageSharp(fluid: { originalName: { regex: "/xiao.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    marina: imageSharp(fluid: { originalName: { regex: "/marina.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    luna: imageSharp(fluid: { originalName: { regex: "/luna.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const getTeamImages = () =>
  useStaticQuery(graphql`
    query {
      ...TeamFragment
    }
  `);

import { RouteLinks, RouteLinkType } from '../../components/RouteLinks'
import { 
  HomeCardDeveloper, 
  HomeCardMusician,
  HomeCardArtist,
  HomeCardFather,
  HomeCardAbout,
  HomeCardContact,
  CalistaPage,
  RoxiePage,
  JaxPage
} from '../HomeCards'

export const pageLinkConfigs: { [cardKey: string]: RouteLinkType } = {
  devCard: { 
    title: 'Developer', 
    to: '/developer', 
    component: HomeCardDeveloper 
  },
  // musicCard: { 
  //   title: 'Musician', 
  //   to: '/musician', 
  //   component: HomeCardMusician 
  // },
  // artCard: { 
  //   title: 'Artist', 
  //   to: '/artist', 
  //   component: HomeCardArtist 
  // },
  // dadCard: { 
  //   title: 'Father', 
  //   to: '/father', 
  //   component: HomeCardFather
  // },
  // aboutCard: { 
  //   title: 'About', 
  //   to: '/about', 
  //   component: HomeCardAbout 
  // },
  calistaCard: { 
    title: 'Calistapher', 
    to: '/father/calista', 
    component: CalistaPage
  },
  roxieCard: { 
    title: 'Roxette', 
    to: '/father/roxie', 
    component: RoxiePage
  },
  jaxCard: { 
    title: 'Hugh-Jax', 
    to: '/father/jax', 
    component: JaxPage
  },
  // contactCard: { 
  //   title: 'Contact', 
  //   to: '/contact', 
  //   component: HomeCardContact 
  // }
}

export type SocialLinkType = {
  title: string;
  src: string;
  href: string;
}

export const socialLinkConfigs: SocialLinkType[] = [
  {
    title: 'LinkedIn',
    src: '/assets/images/logos/social/linkedin.svg',
    href: 'https://www.linkedin.com/in/brice-garlick-b9016628/'
  },
  {
    title: 'GitHub',
    src: '/assets/images/logos/social/github.svg',
    href: 'https://github.com/B2DaRice'
  },
  {
    title: 'Instagram',
    src: '/assets/images/logos/social/instagram.svg',
    href: 'https://www.instagram.com/ajo.grande/'
  },
  {
    title: 'TikTok',
    src: '/assets/images/logos/social/tiktok.png',
    href: 'https://www.tiktok.com/@sax_hair'
  },
  {
    title: 'Facebook',
    src: '/assets/images/logos/social/facebook.svg',
    href: 'https://www.facebook.com/bwgarlick/'
  },
  {
    title: 'DeviantArt',
    src: '/assets/images/logos/social/deviantart.svg',
    href: 'https://www.deviantart.com/b2darice/gallery'
  },
]

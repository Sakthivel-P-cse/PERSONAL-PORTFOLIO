export {
  portfolio,
  featuredProjects,
  moreProjects,
  connectLinks,
  publicRepoLinks,
} from "./portfolio";
export type { Project, Experience, SkillCategory } from "./portfolio";

import { portfolio } from "./portfolio";

export const experiences = portfolio.experience;
export const certifications = portfolio.certifications;

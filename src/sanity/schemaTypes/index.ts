import { type SchemaTypeDefinition } from 'sanity'

import hireMe from "../schemas/hireMe";
import aboutSection from "../schemas/aboutSection";
import contactPage from "../schemas/contact"
import footerSection from "../schemas/social";
import heroSection from "../schemas/heroSection";
import createSection from "../schemas/convienceSection";
import navbar from "../schemas/navbar";
import projects  from "../schemas/projects";
import skills from "../schemas/skills";
import process from "../schemas/process";
import step1 from "../schemas/step1";
import step2 from "../schemas/step2";
import step3 from "../schemas/step3";
import step4 from "../schemas/step4";
import step5 from "../schemas/step5";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [navbar,heroSection,skills,projects,process,step1,step2,step3,step4,step5,createSection,hireMe,footerSection,aboutSection,contactPage],
  }


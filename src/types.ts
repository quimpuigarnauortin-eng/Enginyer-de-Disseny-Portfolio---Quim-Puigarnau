/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  description: string;
  fullDescription: string;
  processDescription?: string;
  processTitle?: string;
  renders: string[];
  makingOf: string[];
  validation?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Skill {
  category: string;
  items: string[];
}

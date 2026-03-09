import { describe, it, expect } from 'vitest';
import { PROJECTS } from '@/app/(pages)/projects/projects-data';
import fs from 'fs';
import path from 'path';

describe('projects-data', () => {
  it('should export a non-empty PROJECTS array', () => {
    expect(Array.isArray(PROJECTS)).toBe(true);
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it('each project should have all required fields', () => {
    const requiredStringFields = ['id', 'title', 'description', 'longDescription', 'role', 'duration'] as const;
    const requiredArrayFields = ['technologies', 'challenges', 'solutions', 'results', 'images'] as const;

    for (const project of PROJECTS) {
      for (const field of requiredStringFields) {
        expect(project[field], `${project.id} missing ${field}`).toBeTruthy();
        expect(typeof project[field], `${project.id}.${field} should be string`).toBe('string');
      }

      for (const field of requiredArrayFields) {
        expect(Array.isArray(project[field]), `${project.id}.${field} should be array`).toBe(true);
        expect(project[field].length, `${project.id}.${field} should not be empty`).toBeGreaterThan(0);
      }

      expect(typeof project.teamSize).toBe('number');
      expect(project.teamSize).toBeGreaterThan(0);
      expect(typeof project.featured).toBe('boolean');
      expect(['web', 'mobile', 'design', 'fullstack', 'ai']).toContain(project.category);
      expect(['work', 'student']).toContain(project.period);
    }
  });

  it('each project should have a unique id', () => {
    const ids = PROJECTS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('each project should have at least one image with url and alt', () => {
    for (const project of PROJECTS) {
      for (const image of project.images) {
        expect(image.url, `${project.id} image missing url`).toBeTruthy();
        expect(image.alt, `${project.id} image missing alt`).toBeTruthy();
      }
    }
  });

  it('each technology should have name, category, icon, and color', () => {
    for (const project of PROJECTS) {
      for (const tech of project.technologies) {
        expect(tech.name, `${project.id} tech missing name`).toBeTruthy();
        expect(['frontend', 'backend', 'database', 'tool', 'design', 'ai']).toContain(tech.category);
        expect(tech.icon, `${project.id} tech ${tech.name} missing icon`).toBeTruthy();
        expect(tech.color, `${project.id} tech ${tech.name} missing color`).toBeTruthy();
      }
    }
  });

  // --- QA Review additions (reviewer: senshu1) ---

  it('each project id should be URL-safe (valid slug)', () => {
    const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    for (const project of PROJECTS) {
      expect(
        slugPattern.test(project.id),
        `"${project.id}" is not a valid URL slug (lowercase alphanumeric + hyphens only)`
      ).toBe(true);
    }
  });

  it('liveUrl should be a valid https URL when present', () => {
    for (const project of PROJECTS) {
      if (project.liveUrl) {
        expect(
          project.liveUrl,
          `${project.id}.liveUrl "${project.liveUrl}" should start with https://`
        ).toMatch(/^https:\/\/.+\..+/);
      }
    }
  });

  it('githubUrl should be a valid GitHub URL when present', () => {
    for (const project of PROJECTS) {
      if (project.githubUrl) {
        expect(
          project.githubUrl,
          `${project.id}.githubUrl "${project.githubUrl}" should be a GitHub URL`
        ).toMatch(/^https:\/\/github\.com\/.+/);
      }
    }
  });

  it('each technology color should be a valid hex color', () => {
    const hexPattern = /^#[0-9a-fA-F]{6}$/;
    for (const project of PROJECTS) {
      for (const tech of project.technologies) {
        expect(
          hexPattern.test(tech.color),
          `${project.id} tech "${tech.name}" color "${tech.color}" is not valid hex`
        ).toBe(true);
      }
    }
  });

  it('image files should exist on disk', () => {
    const projectRoot = path.resolve(__dirname, '..');
    for (const project of PROJECTS) {
      for (const image of project.images) {
        // image.url comes from import().src which is the filename via the mock plugin
        // In the actual build, these reference files in app/_assets/images/projects/
        const filename = image.url;
        const imagePath = path.join(projectRoot, 'app', '_assets', 'images', 'projects', filename);
        expect(
          fs.existsSync(imagePath),
          `${project.id} image file not found: ${filename}`
        ).toBe(true);
      }
    }
  });

  it('description should be concise (under 100 chars) and longDescription should be substantial', () => {
    for (const project of PROJECTS) {
      expect(
        project.description.length,
        `${project.id}.description too long (${project.description.length} chars)`
      ).toBeLessThanOrEqual(100);
      expect(
        project.longDescription.length,
        `${project.id}.longDescription too short (${project.longDescription.length} chars)`
      ).toBeGreaterThan(50);
    }
  });

  it('teamSize should be a positive integer', () => {
    for (const project of PROJECTS) {
      expect(Number.isInteger(project.teamSize), `${project.id}.teamSize should be integer`).toBe(true);
      expect(project.teamSize, `${project.id}.teamSize should be >= 1`).toBeGreaterThanOrEqual(1);
    }
  });
});

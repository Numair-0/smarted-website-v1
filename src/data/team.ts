export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoSrc?: string;
  bio?: string;
}

/**
 * Intentionally empty. Per the project brief: never invent employees.
 * Add real team members here as they're ready to be published —
 * the /team page is built to render gracefully whether this array
 * has zero, one, or fifty entries.
 */
export const team: TeamMember[] = [];

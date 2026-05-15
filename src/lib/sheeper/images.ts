/**
 * Franchise cards often expose a small logo URL (e.g. …/franchise-images/franchise_Name)
 * without a `/main` asset. Upscaling those in a large tile looks blurry.
 */
export function isSmallFranchiseLogoUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  return /franchise-images\/franchise_/i.test(url) && !/\/main$/i.test(url);
}

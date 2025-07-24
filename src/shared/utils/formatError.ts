export function formatError(error: string): string {
  return error.replace(/([A-Z])/g, ' $1').toLowerCase();
}

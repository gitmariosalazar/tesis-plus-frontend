export const analyticsService = {
  trackEvent(event: string, data: Record<string, any>): void {
    console.log(`Tracking event: ${event}`, data);
    // Implementar integración con Google Analytics, Mixpanel, etc.
  },
};

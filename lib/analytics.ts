export const trackAction = async (action: string) => {
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    });
  } catch (error) {
    console.error('Error tracking action:', error);
  }
}; 
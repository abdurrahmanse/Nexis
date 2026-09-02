/**
 * Enterprise Logger Interface
 * In a real production app, this would route to DataDog, Sentry, or Pino.
 */
export const logger = {
  info: (message: string, context?: Record<string, unknown>) => {
    console.log(JSON.stringify({ level: 'INFO', message, timestamp: new Date().toISOString(), ...context }));
  },
  warn: (message: string, context?: Record<string, unknown>) => {
    console.warn(JSON.stringify({ level: 'WARN', message, timestamp: new Date().toISOString(), ...context }));
  },
  error: (message: string, error?: unknown, context?: Record<string, unknown>) => {
    console.error(JSON.stringify({ 
      level: 'ERROR', 
      message, 
      timestamp: new Date().toISOString(), 
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      ...context 
    }));
  },
};

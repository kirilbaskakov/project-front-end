class Logger {
    async log(message: string, level: 'info' | "warn" | "error") {
        const logEntry = {
            timestamp: new Date().toISOString(),
            level: level,
            message: message
        };

        try {
            await fetch(import.meta.env.VITE_API_URL + "/logs", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(logEntry)
            });
        } catch (error) {
        }
    }

    info(message: string) {
        this.log(message, 'info');
    }

    warn(message: string) {
        this.log(message, 'warn');
    }

    error(message: string) {
        this.log(message, 'error');
    }
}

const logger = new Logger();

export default logger;
import { ConsoleLogger } from '@nestjs/common';

export class LoggerService extends ConsoleLogger {
  log(message: string, trace: string) {
    super.log(message, trace);
  }
  error(message: string, trace: string) {
    super.error(message, trace);
  }
  warn(message: string, trace: string) {
    super.warn(message, trace);
  }
  debug(message: string, trace: string) {
    super.debug(message, trace);
  }
  verbose(message: string, trace: string) {
    super.verbose(message, trace);
  }
}

const log = new (require('@aliceo2/web-ui').Log)('backend-3-logs');
log.debug('this is debug message');
log.warn('this is warn message');
log.error('this is error message');
log.trace(log);

const {Log} = new require('@aliceo2/web-ui');
Log.configure({winston: {file: './error.log', fileLvl: 'error'}});
const log = new Log('advanced');
log.debug('this is debug message');
log.warn('this is warn message');
log.error('this is error message');

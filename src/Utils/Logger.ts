import logger from "pino"; // logger
import dayjs from "dayjs"; // format time stamp

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `, "time": "${dayjs().format()}"`,
});

export default log;

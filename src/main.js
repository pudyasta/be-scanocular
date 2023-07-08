import logger from "./app/logging.js";
import { web } from "./app/web.js";

web.listen(3030, () => {
  logger.info("app strat");
});

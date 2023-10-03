import { Router } from "express";
import { TransactionController } from "./controllers";

const router = Router();

router.get("/transactions", TransactionController.list);
router.post("/import", TransactionController.import);
router.delete("/transactions/:id", TransactionController.delete);

export default router;

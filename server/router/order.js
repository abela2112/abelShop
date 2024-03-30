const {
  AddOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getUserOrder,
  getMonthlyIncome,
} = require("../controller/order");

const {
  verifyTokenAndIsAdmin,
  verifyTokenAndAuthorize,
  verifyToken,
} = require("../middleware/verifyToken");

const router = require("express").Router();
router.get("/", verifyTokenAndIsAdmin, getAllOrders);
router.get("/incomes", verifyTokenAndIsAdmin, getMonthlyIncome);
router.get("/:userId", verifyTokenAndAuthorize, getUserOrder);
router.post("/", verifyToken, AddOrder);

router.put("/update/:id", verifyTokenAndIsAdmin, updateOrder);
router.delete("/:id", verifyTokenAndIsAdmin, deleteOrder);

module.exports = router;

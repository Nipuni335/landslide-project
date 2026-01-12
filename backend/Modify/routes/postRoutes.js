const auth = require("../middleware/auth");

router.post("/", auth, createPost);   // protected

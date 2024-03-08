import { Router } from "express";
var router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let role = "Front End Developer";
  let skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Nodejs",
    "React",
    "Tailwind",
    "Svelte",
    "Nextjs",
    "Gatsby",
    "Bootstrap",
    "Nestjs",
  ];
  res.render("index", { role, skills });
});

router.get("/hx-filter/:id", (req,res,next)=>{

})

export default router;

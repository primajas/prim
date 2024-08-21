import express from "express";
import { createMahasiswa, deleteMahasiswa, getMahasiswa , getMahasiswaByNim, updateMahasiswa } from "../constrollers/mahasiswaController.js";
// const { getMahasiswa } = require("../constrollers/mahasiswaController");
const router =express.Router();

router.get ("/" , getMahasiswa )
router.get("/find",getMahasiswaByNim)
router.post("/create",createMahasiswa)
router.delete("/delete", deleteMahasiswa)
router.put("/update", updateMahasiswa)


export default router;
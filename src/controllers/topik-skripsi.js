import TopikSkripsi from '../models/TopikSkripsi.js';
import { CustomError } from '../utils/CustomError.js';
import { generateCode } from '../utils/generator.js';
import { getCurrentPeriod } from './period.js';

// export const getAllPeriods = async (req, res) => {
//   const periods = await Period.findAll();
//   if(periods.length === 0) throw new CustomError("No periods are found");
//   res.status(200).json(periods);
// }

export const addTopikSkripsi = async (req, res) => {
  const { year, isOddSemester } = await getCurrentPeriod();
  const judul = req.body.judul;
  const jenis = req.body.jenis;
  const status = req.body.status || "NULL";
  const kode_topik = generateCode(req.user.name, jenis, year, isOddSemester);
  console.log("KODE TOPIK SAIA : " + kode_topik);
  // const topik_skripsi = await TopikSkripsi.create({
  //   judul: req.body.judul,
  //   jenis: req.body.jenis,
  //   kode: kode_topik,
  //   status: null,
  // });
  //must be fixed, change to findOrCreate by kode topik
  // if(!created) throw new Error("failed to create topikskripsi");
  // res.status(201).json(topik_skripsi);
}
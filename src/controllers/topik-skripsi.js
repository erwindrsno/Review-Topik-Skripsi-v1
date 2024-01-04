import TopikSkripsi from '../models/TopikSkripsi.js';
import { CustomError } from '../utils/CustomError.js';
import { generateCode } from '../utils/generator.js';

// export const getAllPeriods = async (req, res) => {
//   const periods = await Period.findAll();
//   if(periods.length === 0) throw new CustomError("No periods are found");
//   res.status(200).json(periods);
// }

export const addTopikSkripsi = async(req, res, next) => {
  const kode_topik = generateCode(req.user.name, req.body.jenis_topik,); 
  const topik_skripsi = await TopikSkripsi.create({
    judul: req.body.judul,
    jenis: req.body.jenis,
    kode: kode_topik,
    status: null,
  });
  //must be fixed, change to findOrCreate by kode topik
  // if(!created) throw new Error("failed to create topikskripsi");
  res.status(201).json(topik_skripsi);
}
import TopikSkripsi from '../models/TopikSkripsi.js';
import { CustomError } from '../utils/CustomError.js';
import { generateCode } from '../utils/generator.js';
import { getCurrentPeriod } from './period.js';
import { Op } from 'sequelize';

export const addTopikSkripsi = async (req, res) => {
  const { year, isOddSemester } = await getCurrentPeriod();

  const jenis = req.body.jenis;
  const status = req.body.status || "NULL";

  const topik_skripsi = await TopikSkripsi.create({
    title: req.body.judul,
    type: req.body.jenis,
    code: null,
    status: status,
  });

  await topik_skripsi.update({ UserId: req.user.id });

  if(!topik_skripsi) throw new CustomError("gagal bikin topik");

  const { count, rows } = await TopikSkripsi.findAndCountAll({
    where: {
      userid: {
        [Op.like]: req.user.id
      }
    },
  });

  const kode_topik = generateCode(req.user.name, jenis, year, isOddSemester, count);

  topik_skripsi.code = kode_topik;
  await topik_skripsi.save();
  res.status(201).json(topik_skripsi);
}
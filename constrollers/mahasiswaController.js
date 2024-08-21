import db from "../koneksi.js";

export const getMahasiswa = (req, res) => {
    const sql = "SELECT * FROM mahasiswa"
    db.query(sql, (error, result) => {
        res.send(result)
    });
};

export const getMahasiswaByNim = (req, res) => {
    const nim = req.query.nim;
    const sql = `SELECT * FROM  mahasiswa WHERE nim = ${nim}`
    db.query(sql,(error,result)=>{
        res.json(result)
    })
};

export const createMahasiswa = (req, res) => {
    const { nim, nama_lengkap, kelas, alamat } = req.body;
    const sql =
      "INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (?,?,?,?)";
    db.query(sql, [nim, nama_lengkap, kelas, alamat], (error, result) => {
      if (error) {
        res.status(400);
        res.send(error);
      }
      res.status(201);
      res.json(result);
    });
  };
  
  export const deleteMahasiswa = (req, res) => {
    const nim = req.query.nim;
    const sql = "DELETE FROM mahasiswa WHERE nim = ?";
    db.query(sql, [nim], (error, result) => {
      if (error) {
        res.status(400);
        res.send(error);
      }
      res.status(200);
      res.json("data berhasil dihapus");
    });
  };

  export const updateMahasiswa = (req, res) => {
    const nim = req.query.nim;
  
    // menangkap req body
    const { nama_lengkap, kelas, alamat } = req.body;
    //mengecek nim, nama
    if (nim || nama_lengkap || kelas || alamat) {
      //query update table mahasiswa
      const query = `UPDATE mahasiswa SET nama_lengkap = "${nama_lengkap}", kelas = "${kelas}", alamat = "${alamat}"  WHERE  nim = ${nim};`
  
      //mengirim query ke database
      db.query(query, (error, result) => {
        if (error) res.status(400).send(error.message);
        res.json(result);
      });
    } else {
      res.send("Isi body nya");
    }
  };
// module.exports ={
//     getMahasiswa,
// }
import { motion } from "framer-motion";

const Layanan = () => {
  const services = [
    "Aktivasi Merek",
    "Pemasaran Terintegrasi",
    "Pengembangan Situs Web",
    "Pembuatan Video",
    "Identitas Merek",
    "Strategi Merek",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6 bg-white max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-semibold mb-6">Layanan</h2>
      <p className="mb-8 text-gray-700">REALISASIKAN VISI MEREK ANDA.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 rounded-xl p-4 shadow">
            {service}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Layanan;

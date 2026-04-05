import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // ✅ Ambil query dengan aman (handle string | string[])
  const token = Array.isArray(req.query.token)
    ? req.query.token[0]
    : req.query.token;

  const data = Array.isArray(req.query.data)
    ? req.query.data[0]
    : req.query.data;

  const id = Array.isArray(req.query.id)
    ? req.query.id[0]
    : req.query.id;

  // ✅ VALIDASI TOKEN (WAJIB)
  if (!token || token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({
      revalidated: false,
      message: "Token salah atau tidak ada",
    });
  }

  // ✅ VALIDASI PARAMETER DATA
  if (data !== "produk") {
    return res.status(400).json({
      revalidated: false,
      message: "Gunakan data=produk",
    });
  }

  try {
    // ✅ Revalidate halaman LIST
    await res.revalidate("/produk/static");

    // ✅ Revalidate halaman DETAIL jika ada id
    if (id) {
      await res.revalidate(`/produk/${id}`);
    }

    return res.status(200).json({
      revalidated: true,
      message: "Revalidation berhasil",
    });
  } catch (error) {
    console.error("Error revalidation:", error);

    return res.status(500).json({
      revalidated: false,
      message: "Gagal revalidate",
    });
  }
}
import LayoutAdminLogatama from "@/Layouts/Admin/Logatama";
import {
    FormControl,
    FormErrorMessage,
    NumberInput,
    NumberInputField,
    Spinner,
    useToast,
} from "@chakra-ui/react";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function rekapAdmin() {
    const [isLoading, setIsLoading] = useState(false);
    const { data, setData, post, errors, reset } = useForm({
        peringkat: "",
        nama_pangkalan: "",
        skor_nilai: 0,
    });
    const { props } = usePage();
    const { jumlahPeserta, bidang } = props;
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        post("/admin-logatama/rekap-juara", {
            onSuccess: () => {
                setIsLoading(false);
                toast({
                    title: "Rekap ditambahkan",
                    description: "Rekap Juara berhasil ditambahkan!",
                    status: "success",
                });
                reset();
            },
            onError: () => {
                setIsLoading(false);
                toast({
                    title: "Rekap Gagal Ditambahkan",
                    description: "Terjadi kesalahan, silahkan coba lagi.",
                    status: "error",
                });
            },
        });
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <LayoutAdminLogatama title="TAMBAH REKAPITULASI">
            <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                    <FormControl isInvalid={errors.peringkat}>
                        <select
                            value={data.peringkat}
                            required
                            onChange={handleChange}
                            name="peringkat"
                            className="w-full py-2 border rounded-md border-slate-300 focus:outline-none text-slate-400 font-semibold text-sm"
                        >
                            <option hidden>Isi Peringkat:</option>
                            {bidang.map((mataLomba, index) => (
                                <option key={index} value={mataLomba}>
                                    {mataLomba.toUpperCase()}
                                </option>
                            ))}
                        </select>
                        {errors.peringkat && (
                            <FormErrorMessage>
                                {errors.peringkat}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                </div>
                <div>
                    <FormControl isInvalid={errors.nama_pangkalan}>
                        <select
                            value={data.nama_pangkalan}
                            required
                            onChange={handleChange}
                            name="nama_pangkalan"
                            className="w-full py-2 border rounded-md border-slate-300 focus:outline-none text-slate-400 font-semibold text-sm"
                        >
                            <option hidden>Isi Nama Pangkalan:</option>
                            {jumlahPeserta.map((pangkalan, index) => (
                                <option key={index} value={pangkalan.team_id}>
                                    {pangkalan.pangkalan.toUpperCase() +
                                        " - " +
                                        pangkalan.kategori.toUpperCase()}
                                </option>
                            ))}
                        </select>
                        {errors.nama_pangkalan && (
                            <FormErrorMessage>
                                {errors.nama_pangkalan}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                </div>
                <FormControl isInvalid={errors.skor_nilai}>
                    <NumberInput>
                        <NumberInputField
                            required
                            name="skor_nilai"
                            value={data.skor_nilai || 0}
                            min={0}
                            onChange={handleChange}
                            placeholder="Isi Skor Nilai:"
                            className="text-slate-400 font-semibold text-base placeholder:text-sm placeholder:text-slate-400"
                            borderColor={"#cbd5e1"}
                        />
                    </NumberInput>
                    {errors.skor_nilai && (
                        <FormErrorMessage>{errors.skor_nilai}</FormErrorMessage>
                    )}
                </FormControl>
                <button
                    type="submit"
                    className="text-white bg-secondary hover:bg-primary transition-all duration-200 ease-in focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg px-10 py-2 text-center"
                >
                    {isLoading ? <Spinner /> : <p className="text-sm">Kirim</p>}
                </button>
            </form>
        </LayoutAdminLogatama>
    );
}

// import Sidebar from "@/Components/Partial/Sidebar";
// import {
//     FormControl,
//     FormErrorMessage,
//     NumberInput,
//     NumberInputField,
//     Spinner,
//     useToast,
// } from "@chakra-ui/react";
// import { useForm, usePage } from "@inertiajs/react";
// import { useState } from "react";

// export default function rekapAdmin() {
//     const [isLoading, setIsLoading] = useState(false);
//     const { data, setData, post, errors, reset } = useForm({
//         peringkat: "",
//         nama_pangkalan: "",
//         skor_nilai: 0,
//     });
//     const { url } = usePage();
//     const toast = useToast();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         post("/admin-logatama/rekap-juara", {
//             onSuccess: () => {
//                 setIsLoading(false);
//                 toast({
//                     title: "Rekap ditambahkan",
//                     description: "Rekap Juara berhasil ditambahkan!",
//                     status: "success",
//                 });
//                 reset();
//             },
//             onError: () => {
//                 setIsLoading(false);
//                 toast({
//                     title: "Rekap Gagal Ditambahkan",
//                     description: "Terjadi kesalahan, silahkan coba lagi.",
//                     status: "error",
//                 });
//             },
//         });
//     };

//     const handleChange = (e) => {
//         setData(e.target.name, e.target.value);
//     };

//     const { props } = usePage();
//     const { jumlahPeserta, bidang } = props;
//     // ini jumlah data buat dijadikan value select option di Peringkat dan Nama Pangkalan
//     // const jumlahPeserta = [
//     //     "SMKN 1 Semarang",
//     //     "SMKN 2 Semarang",
//     //     "SMKN 3 Semarang",
//     //     "SMKN 4 Semarang",
//     //     "SMKN 5 Semarang",
//     // ];

//     return (
//         <section className="min-h-screen overflow-hidden flex">
//             <Sidebar url={url} />
//             <div className="w-4/5  px-10 py-14">
//                 <div className="space-y-8">
//                     <h1 className="text-xl text-secondary font-semibold">TAMBAH PENGUMUMAN</h1>
//                     <form onSubmit={handleSubmit} className="space-y-10">
//                         <div>
//                             <select
//                                 value={data.peringkat}
//                                 required
//                                 onChange={handleChange}
//                                 name="peringkat"
//                                 className="w-full py-2 border rounded-md border-slate-300 focus:outline-none text-slate-400 font-semibold text-sm"
//                             >
//                                 <option hidden>Isi Peringkat:</option>
//                                 {bidang.map((mataLomba, index) => (
//                                     <option key={index} value={mataLomba}>
//                                         {mataLomba.toUpperCase()}
//                                     </option>
//                                 ))}
//                             </select>
//                             {errors.peringkat && (
//                                 <p className="text-red-600 text-sm">
//                                     {errors.peringkat}
//                                 </p>
//                             )}
//                         </div>
//                         <div>
//                             <select
//                                 value={data.nama_pangkalan}
//                                 required
//                                 onChange={handleChange}
//                                 name="nama_pangkalan"
//                                 className="w-full py-2 border rounded-md border-slate-300 focus:outline-none text-slate-400 font-semibold text-sm"
//                             >
//                                 <option hidden>Isi Nama Pangkalan:</option>
//                                 {jumlahPeserta.map((pangkalan, index) => (
//                                     <option
//                                         key={index}
//                                         value={pangkalan.team_id}
//                                     >
//                                         {pangkalan.pangkalan.toUpperCase() +
//                                             " - " +
//                                             pangkalan.kategori.toUpperCase()}
//                                     </option>
//                                 ))}
//                             </select>
//                             {errors.nama_pangkalan && (
//                                 <p className="text-red-600 text-sm">
//                                     {errors.nama_pangkalan}
//                                 </p>
//                             )}
//                         </div>
//                         <FormControl isInvalid={errors.skor_nilai}>
//                             <NumberInput>
//                                 <NumberInputField
//                                     required
//                                     name="skor_nilai"
//                                     value={data.skor_nilai || 0}
//                                     min={0}
//                                     onChange={handleChange}
//                                     placeholder="Isi Skor Nilai:"
//                                     className="text-slate-400 font-semibold text-base placeholder:text-sm placeholder:text-slate-400"
//                                     borderColor={"#cbd5e1"}
//                                 />
//                             </NumberInput>
//                             {errors.skor_nilai && (
//                                 <FormErrorMessage>
//                                     {errors.skor_nilai}
//                                 </FormErrorMessage>
//                             )}
//                         </FormControl>
//                         <button
//                             type="submit"
//                             className="text-white bg-secondary hover:bg-primary transition-all duration-200 ease-in focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg px-10 py-2 text-center"
//                         >
//                             {isLoading ? (
//                                 <Spinner />
//                             ) : (
//                                 <p className="text-sm">Kirim</p>
//                             )}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }

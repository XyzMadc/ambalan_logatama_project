import LayoutAdminLogatama from "@/Layouts/Admin/Logatama";
import { useErrorToast, useSuccessToast } from "@/Utils/toastHandle";
import {
    FormControl,
    FormErrorMessage,
    NumberInput,
    NumberInputField,
    Spinner,
} from "@chakra-ui/react";
import { Head, useForm, usePage } from "@inertiajs/react";

export default function rekapAdmin() {
    const { data, setData, post, errors, reset, processing } = useForm({
        peringkat: "",
        nama_pangkalan: "",
        skor_nilai: 0,
    });
    const { props } = usePage();
    const { jumlahPeserta, bidang } = props;
    const handleSuccess = useSuccessToast();
    const handleError = useErrorToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin-logatama/rekap-juara", {
            onSuccess: () => handleSuccess("Rekap ditambahkan", reset),
            onError: () => handleError("Gagal membuat rekap"),
        });
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <>
            <Head title="Admin Rekapitulasi" />
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
                                    <option
                                        key={index}
                                        value={pangkalan.team_id}
                                    >
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
                            <FormErrorMessage>
                                {errors.skor_nilai}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <button
                        type="submit"
                        className="text-white bg-secondary hover:bg-primary transition-all duration-200 ease-in focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg px-10 py-2 text-center"
                    >
                        {processing ? (
                            <Spinner />
                        ) : (
                            <p className="text-sm">Kirim</p>
                        )}
                    </button>
                </form>
            </LayoutAdminLogatama>
        </>
    );
}

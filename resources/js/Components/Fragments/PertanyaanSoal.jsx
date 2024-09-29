import { List, Trash } from "@phosphor-icons/react";
import AnswerSoal from "./AnswerSoal";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "@inertiajs/react";

export default function PertanyaanSoal({ data, questionOptions }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    return (
        <>
            <div className="p-5 bg-white rounded text-secondary font-semibold space-y-3 text-xs">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <button className="p-1 rounded border border-slate-400 text-secondary">
                            <List size={16} />
                        </button>
                        <div className="py-1 px-4 flex items-center justify-center rounded border border-slate-400">
                            <p>Pilihan Ganda</p>
                        </div>
                        <div className="py-1 px-4 flex items-center justify-center rounded border border-slate-400">
                            <p>{data.poin} poin</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href={`/admin-logatama/daftar-soal/${data.tingkat}/edit/${data.id}`}
                            className="py-1 px-4 flex items-center justify-center rounded border border-slate-400"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={onOpen}
                            className="p-1 rounded border border-slate-400 text-secondary"
                        >
                            <Trash size={16} />
                        </button>
                    </div>
                </div>
                <p className="mb-2">{data.pertanyaan}</p>
                <p className="text-slate-400">Pilihan Jawaban</p>
                <div className="grid grid-flow-col grid-rows-3 gap-4">
                    {questionOptions.map((pilihan, index) => (
                        <AnswerSoal
                            key={index}
                            isCorrect={pilihan == data.jawaban}
                            answer={pilihan}
                        />
                    ))}
                </div>
            </div>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Soal
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Apakah kamu yakin ingin menghapus soal ini?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={onClose} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

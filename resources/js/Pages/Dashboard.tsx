import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MusicTable from "@/Components/MusicTable";
import { Head } from "@inertiajs/react";
import AnimatedBackground from "@/Components/AnimatedBackground";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-white leading-tight">
                    Lista de Usuários
                </h2>
            }
        >
            <Head title="Lista de Músicas" />

            <div className="relative bg-white">
                <div className="absolute inset-0">
                    <AnimatedBackground />
                </div>
                <div className="relative z-10">
                    <div className="pt-24 pb-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <MusicTable />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

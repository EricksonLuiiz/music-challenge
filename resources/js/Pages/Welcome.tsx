import ApplicationLogo from "@/Components/ApplicationLogo";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import AnimatedBackground from "@/Components/AnimatedBackground";
import {
    GraduationCap,
    Database,
    Code2,
    GitBranch,
    UserPlus,
    LogIn,
} from "lucide-react";
import { link } from "fs";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen bg-white">
                <div className="absolute inset-0">
                    <AnimatedBackground />
                </div>
                <div className="relative z-10 min-h-screen">
                    <nav className="bg-white shadow-lg w-full z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex items-center">
                                    <ApplicationLogo className="h-10 w-auto" />
                                </div>
                                <div className="flex items-center space-x-4">
                                    {auth.user ? (
                                        <Link
                                            href={route("dashboard")}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            Lista de Músicas
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route("login")}
                                                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <LogIn size={20} />
                                                    <span>Login</span>
                                                </div>
                                            </Link>
                                            <Link
                                                href={route("register")}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <UserPlus size={20} />
                                                    <span>Registro</span>
                                                </div>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="pt-24 pb-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                                    Teste Técnico{" "}
                                    <span className="text-blue-600">
                                        {" "}
                                        Be Sistemas
                                    </span>
                                </h1>
                                <h4 className="text-2xl font-bold text-gray-900 mb-8">
                                    Avaliação de Skills
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <SkillCard
                                    icon={<Code2 size={24} />}
                                    title="Capacidade de codificar uma aplicação Laravel"
                                    description="Desenvolvimento de aplicações robustas usando o framework Laravel"
                                />
                                <SkillCard
                                    icon={<Database size={24} />}
                                    title="Criar tabelas no MySQL"
                                    description="Modelagem e criação de estruturas de banco de dados eficientes"
                                />
                                <SkillCard
                                    icon={<GitBranch size={24} />}
                                    title="Transação na importação"
                                    description="Implementação de transações seguras para importação de dados"
                                />
                                <SkillCard
                                    icon={<Code2 size={24} />}
                                    title="Validadores de entrada de dados"
                                    description="Implementação de validação robusta para garantir integridade dos dados"
                                />
                                <SkillCard
                                    icon={<GraduationCap size={24} />}
                                    title="Validar conhecimentos de frontend com NextJS"
                                    description="Desenvolvimento de interfaces modernas com NextJS"
                                />
                                <SkillCard
                                    icon={<Database size={24} />}
                                    title="SQL com JOIN"
                                    description="Domínio de consultas SQL complexas utilizando JOINs"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Objectives Section */}
                    <div className="py-16 bg-opacity-50 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Objetivos
                            </h2>
                            <div className="space-y-6">
                                <ObjectiveCard
                                    title="Importação de CSV"
                                    description="Importar o csv enviado usando um comando do Laravel (php artisan import music.csv), validar antes de importar."
                                />
                                <ObjectiveCard
                                    title="Autenticação com Laravel Breeze"
                                    description="Usar o laravel breeze com nextjs para logar no sistema"
                                />
                                <ObjectiveCard
                                    title="API de Associação"
                                    description="Criar o endpoint /api/music/1/user/2 (POST) isso associa o usuário de código 2 a música de código 1. Cada usuário pode ser associado a várias músicas."
                                />
                                <ObjectiveCard
                                    title="Lista de Músicas"
                                    description="Criar uma tabela em react para mostrar a lista de músicas de cada usuário (usar SQL puro, sem usar Eloquent do Laravel para isso). Mostrar todos usuários que e suas músicas."
                                />
                            </div>
                        </div>
                    </div>
                    <footer className=" bg-blue-600 py-4 text-center text-sm dark:text-white/70">
                        <div>
                            Projeto desenvolvido por{" "}
                            <a
                                href="https://www.linkedin.com/in/ericksondelfino/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#9db4f4] hover:text-[#16068f]]/80 transition-colors underline"
                            >
                                Erickson Luiz Delfino
                            </a>
                        </div>
                        <div>
                            Versão Laravel v{laravelVersion} (PHP v{phpVersion})
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

function SkillCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

function ObjectiveCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

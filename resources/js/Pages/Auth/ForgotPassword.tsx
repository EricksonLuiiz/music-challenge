import AnimatedBackground from "@/Components/AnimatedBackground";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <>
            <AnimatedBackground />
            <GuestLayout>
                <Head title="Forgot Password" />

                <div className="mb-4 text-sm text-gray-600">
                    Esqueceu sua senha? Não tem problema. Basta nos informar seu
                    endereço de e-mail e nós lhe enviaremos um link de
                    redefinição de senha que permitirá que você escolha uma
                    nova.
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="mt-4 flex items-center justify-end ">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Enviar Link de redefinição de senha
                        </PrimaryButton>
                    </div>
                </form>
            </GuestLayout>
        </>
    );
}

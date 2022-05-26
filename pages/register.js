import Link from 'next/link';
// Hooks
import useRegister from '../hooks/auth/useRegister';

const Register = () => {
    const { handleChange, handleSubmit, handleBlur, touched, values, errors, loading } = useRegister();

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-5">
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className="font-bold self-center text-xl sm:text-2xl uppercase text-blue-500">Registro</div>
                    <div className="mt-10">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-6">
                                <label htmlFor="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                    Nombre
                                </label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            {touched.name && errors.name && (
                                <div className="-mt-5">
                                    {/* <h1 className="text-red-700 bg-red-100 px-3 font-semibold border-l-4 border-l-red-700 rounded-sm">adad</h1> */}
                                    <p className="text-red-700 font-semibold px-2">{errors.name}</p>
                                </div>
                            )}

                            <div className="flex flex-col mb-6">
                                <label htmlFor="last_name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                    Apellidos
                                </label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>

                                    <input
                                        id="last_name"
                                        type="text"
                                        name="last_name"
                                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Last name"
                                        value={values.last_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            {touched.last_name && errors.last_name && (
                                <div className="-mt-5">
                                    <p className="text-red-700 font-semibold px-2">{errors.last_name}</p>
                                </div>
                            )}

                            <div className="flex flex-col mb-6">
                                <label htmlFor="phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                    Telefono
                                </label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>

                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="0000-000-000"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            {touched.phone && errors.phone && (
                                <div className="-mt-5">
                                    <p className="text-red-700 font-semibold px-2">{errors.phone}</p>
                                </div>
                            )}

                            <div className="flex flex-col mb-6">
                                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                    E-Mail Address:
                                </label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="example@bussines.domain"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            {touched.email && errors.email && (
                                <div className="-mt-5">
                                    <p className="text-red-700 font-semibold px-2">{errors.email}</p>
                                </div>
                            )}

                            <div className="flex flex-col mb-6">
                                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                    Password:
                                </label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <span>
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                    </div>

                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            {touched.password && errors.password && (
                                <div className="-mt-5 mb-2">
                                    <p className="text-red-700 font-semibold px-2">{errors.password}</p>
                                </div>
                            )}

                            <div className="flex w-full">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                                    disabled={loading}
                                >
                                    {loading && (
                                        <svg fill="none" className="w-6 h-6 animate-spin" viewBox="0 0 32 32">
                                            <path
                                                clipRule="evenodd"
                                                d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                                                fill="currentColor"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                    <span className="uppercase">{loading ? 'Registrando...' : 'Registrar'}</span>
                                </button>
                            </div>
                            <div className="flex justify-center items-center mt-6">
                                <Link href="/login">
                                    <a className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                                        <span className="ml-2">Go login!</span>
                                    </a>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

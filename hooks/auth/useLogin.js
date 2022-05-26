import { useRouter } from 'next/router';
// Form validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Graphql
import { useMutation } from '@apollo/client';
import { AUTHENTICATE_USER } from '../../queries/auth';
// Utils
import { swalBase, swalToast } from '../../utils/sweetalert';

const useLogin = () => {
    const router = useRouter();

    const [authenticateUser, { loading, reset }] = useMutation(AUTHENTICATE_USER);

    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            try {
                const { data } = await authenticateUser({
                    variables: {
                        input: formData,
                    },
                });
                // console.log(data);
                const { token } = data.authenticateUser;
                localStorage.setItem('token', token);

                swalToast({ title: 'Autentificado correctamente' });

                reset();

                setTimeout(() => {
                    router.push('/');
                }, 1000);
            } catch (e) {
                console.log(e);
                // console.log(e);
                swalBase({
                    title: 'Error!',
                    text: e.message,
                    icon: 'error',
                });
                reset();
            }
        },
    });

    return {
        handleChange,
        handleSubmit,
        handleBlur,
        touched,
        values,
        errors,
        loading,
    };
};

export default useLogin;

const initialValues = () => {
    return {
        email: '',
        password: '',
    };
};

const validationSchema = () => {
    return {
        email: Yup.string().email('El email no es valido').required('El email es obligatorio'),
        password: Yup.string().required('La password es obligatoria').min(8, 'Se requiere 8 caracteres minimo'),
    };
};

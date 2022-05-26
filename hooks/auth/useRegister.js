import { useRouter } from 'next/router';
// Form validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Graphql
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../queries/auth';
// Utils
import { swalBase } from '../../utils/sweetalert';

const useRegister = () => {
    // Routing
    const router = useRouter();

    const [addUser, { loading, reset }] = useMutation(ADD_USER);

    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            try {
                const { data } = await addUser({
                    variables: {
                        input: formData,
                    },
                });
                swalBase({
                    title: 'Registrado!',
                    text: `Se registro correctamente el usuario ${data.addUser.name}!`,
                });
                // console.log(data);
                reset();
                router.push('/login');
            } catch (e) {
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

export default useRegister;

const initialValues = () => {
    return {
        name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
    };
};

const validationSchema = () => {
    return {
        name: Yup.string().required('El nombre es obligatorio'),
        last_name: Yup.string().required('Los apellidos son obligatorio'),
        phone: Yup.string().required('El telefono es obligatorio'),
        email: Yup.string().email('El email no es valido').required('El email es obligatorio'),
        password: Yup.string().required('La password es obligatoria').min(8, 'Se requiere 8 caracteres minimo'),
    };
};

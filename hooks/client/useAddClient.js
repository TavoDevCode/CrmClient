import { useRouter } from 'next/router';
// Form validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Graphql
import { useMutation } from '@apollo/client';
import { GET_CLIENTS_SELLER, ADD_CLIENT } from '../../queries/client';
// Utils
import { swalBase } from '../../utils/sweetalert';

const useAddClient = () => {
    // Routing
    const router = useRouter();

    const [addClient, { loading, reset }] = useMutation(ADD_CLIENT, {
        update(cache, { data: { addClient } }) {
            const { getClientsSeller } = cache.readQuery({ query: GET_CLIENTS_SELLER });

            // Rewrite cache
            cache.writeQuery({
                query: GET_CLIENTS_SELLER,
                data: {
                    getClientsSeller: [...getClientsSeller, addClient],
                },
            });
        },
    });

    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            try {
                const { data } = await addClient({
                    variables: {
                        input: formData,
                    },
                });

                const client = data.addClient;

                swalBase({
                    title: 'Registrado!',
                    text: `Se registro correctamente el usuario ${client.name}!`,
                });
                // console.log(data);
                reset();
                router.push('/');
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

export default useAddClient;

const initialValues = () => {
    return {
        name: '',
        last_name: '',
        business: '',
        email: '',
        phone: '',
    };
};

const validationSchema = () => {
    return {
        name: Yup.string().required('El nombre es obligatorio'),
        last_name: Yup.string().required('Los apellidos son obligatorio'),
        business: Yup.string().required('La empresa es obligatoria'),
        email: Yup.string().email('El email no es valido').required('El email es obligatorio'),
        phone: Yup.string().required('El telefono es obligatorio'),
    };
};

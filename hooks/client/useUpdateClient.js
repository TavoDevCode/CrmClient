import { useState } from 'react';
import { useRouter } from 'next/router';
// Form validation
import * as Yup from 'yup';
// Graphql
import { useMutation, useQuery } from '@apollo/client';
import { GET_SPECIFIC_CLIENT, UPDATE_CLIENT } from '../../queries/client';
// Utils
import { swalBase } from '../../utils/sweetalert';

const useUpdateClient = () => {
    const router = useRouter();

    const {
        query: { id },
    } = router;

    const [isLoadingForm, setIsLoadingForm] = useState(false);

    const { data, loading, error } = useQuery(GET_SPECIFIC_CLIENT, {
        variables: {
            id,
        },
    });

    const [updateClient] = useMutation(UPDATE_CLIENT);

    const updateClientFuction = async (formData) => {
        setIsLoadingForm(true);

        const { id, name, last_name, business, email, phone } = formData;

        try {
            const { data } = await updateClient({
                variables: {
                    id,
                    input: {
                        name,
                        last_name,
                        business,
                        email,
                        phone,
                    },
                },
            });

            setIsLoadingForm(false);

            swalBase({
                title: 'Actualizado!',
                text: `Se actualizo correctamente el cliente!`,
            });

            router.push('/');
        } catch (e) {
            console.log(e);
            setIsLoadingForm(false);
        }
    };

    return {
        loading,
        isLoadingForm,
        error,
        validationSchema,
        client: data ? data.getSpecificClient : [],
        updateClientFuction,
    };
};

export default useUpdateClient;

const validationSchema = () => {
    return Yup.object({
        name: Yup.string().required('El nombre es obligatorio'),
        last_name: Yup.string().required('Los apellidos son obligatorio'),
        business: Yup.string().required('La empresa es obligatoria'),
        email: Yup.string().email('El email no es valido').required('El email es obligatorio'),
        phone: Yup.string().required('El telefono es obligatorio'),
    });
};

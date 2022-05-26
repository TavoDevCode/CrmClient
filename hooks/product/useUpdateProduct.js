import { useState } from 'react';
import { useRouter } from 'next/router';
// Form validation
import * as Yup from 'yup';
// Graphql
import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCT, UPDATE_PRODUCT } from '../../queries/product';
// Utils
import { swalBase } from '../../utils/sweetalert';

const useUpdateProduct = () => {
    const router = useRouter();

    const {
        query: { id },
    } = router;

    const [isLoadingForm, setIsLoadingForm] = useState(false);

    const { data, loading, error } = useQuery(GET_PRODUCT, {
        variables: {
            id,
        },
    });

    const [updateProduct] = useMutation(UPDATE_PRODUCT);

    const updateProductFunction = async (formData) => {
        setIsLoadingForm(true);

        const { name, price, stock } = formData;

        try {
            const { data } = await updateProduct({
                variables: {
                    id,
                    input: {
                        name,
                        price,
                        stock,
                    },
                },
            });

            setIsLoadingForm(false);

            swalBase({
                title: 'Actualizado!',
                text: `Se a actualizado correctamente el producto!`,
            });

            router.push('/product');
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
        product: data ? data.getProduct : [],
        updateProductFunction,
    };
};

export default useUpdateProduct;

const validationSchema = () => {
    return Yup.object({
        name: Yup.string().required('El nombre es obligatorio'),
        price: Yup.number().required('El precio es obligatorio').typeError('Precio invalido'),
        stock: Yup.number().required('El stock es obligatorio').integer('Stock invalido').typeError('Stock invalido'),
    });
};

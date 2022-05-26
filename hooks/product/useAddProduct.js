// NEXT
import { useRouter } from 'next/router';
// Form validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Graphql
import { useMutation } from '@apollo/client';
import { GET_PRODUCTS, ADD_PRODUCT } from '../../queries/product';
// Utils
import { swalBase } from '../../utils/sweetalert';

const useAddProduct = () => {
    const router = useRouter();

    const [addProduct, { loading, reset }] = useMutation(ADD_PRODUCT, {
        update(cache, { data: { addProduct } }) {
            const { getProducts } = cache.readQuery({ query: GET_PRODUCTS });
            // Rewrite cache
            cache.writeQuery({
                query: GET_PRODUCTS,
                data: {
                    getProducts: [...getProducts, addProduct],
                },
            });
        },
    });

    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: async (formData) => {
            try {
                const { data } = await addProduct({
                    variables: {
                        input: formData,
                    },
                });

                const product = data.addProduct;

                swalBase({
                    title: 'Registrado!',
                    text: `Se registro correctamente el producto ${product.name}!`,
                });

                reset();
                router.push('/product');
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

    return { handleChange, handleSubmit, handleBlur, touched, values, errors, loading };
};

export default useAddProduct;

const initialValues = () => {
    return {
        name: '',
        price: '',
        stock: '',
    };
};

const validationSchema = () => {
    return Yup.object({
        name: Yup.string().required('El nombre es obligatorio'),
        price: Yup.number().required('El precio es obligatorio').typeError('Precio invalido'),
        stock: Yup.number().required('El stock es obligatorio').integer('Stock invalido').typeError('Stock invalido'),
    });
};

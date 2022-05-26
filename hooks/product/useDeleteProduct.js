// Graphql
import { useMutation } from '@apollo/client';
import { GET_PRODUCTS, DELETE_PRODUCT } from '../../queries/product';
// Utils
import { swalBase, swalConfirm } from '../../utils/sweetalert';

const useDeleteProduct = (product) => {
    const { id, name } = product;

    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        update(cache) {
            // Get a copy object cache
            const { getProducts } = cache.readQuery({ query: GET_PRODUCTS });

            // Rewrite cache
            cache.writeQuery({
                query: GET_PRODUCTS,
                data: {
                    getProducts: getProducts.filter((product) => product.id !== id),
                },
            });
        },
    });

    const deleteProductConfirm = () => {
        swalConfirm(
            {
                title: 'Eliminar cliente!',
                text: `Estas seguro de eliminar el producto ${name}`,
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'No eliminar',
            },
            () => deleteProductFunction(),
        );
    };

    const deleteProductFunction = async () => {
        try {
            // DELETE FOR ID CLIENT
            const { data } = await deleteProduct({
                variables: {
                    id,
                },
            });

            swalBase({
                title: 'Eliminado!',
                text: `Se eliminado correctamente el producto ${name}!`,
            });
        } catch (e) {
            swalBase({
                title: 'Error!',
                text: e.message,
                icon: 'error',
            });
        }
    };

    return { deleteProductConfirm };
};

export default useDeleteProduct;

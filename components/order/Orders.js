const Orders = ({ order }) => {
    const { name, amount } = order;

    return (
        <div>
            <p className="text-sm my-2">
                <span className="font-semibold">Producto:</span> {name}
            </p>
            <p className="text-sm my-2">
                <span className="font-semibold">Cantidad:</span> {amount}
            </p>
        </div>
    );
};

export default Orders;
